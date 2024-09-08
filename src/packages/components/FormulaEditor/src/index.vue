<script setup lang="ts">
import {defineOptions, ref, onMounted, nextTick, computed, defineExpose} from 'vue'
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-expect-error
import HighlightLatex from '../mathquill/highlight'
import SelectTitle from './component/SelectTitle.vue'
import {titleToolsList, commonLatexList} from '../config/groupConfig.ts'

import type {DataItem} from './editor'

defineOptions({
  name: 'FormulaEditor',
})

interface IListItem {
  id: number | string,
  column: number,
  title: string,
  data: DataItem[]
}

interface IProps {
  latex: string,
  commonMath: DataItem[] | any,
  toolsData: IListItem[] | any,
  titleTools: DataItem[] | any
}

const props = withDefaults(defineProps<IProps>(), {
  latex: '',
  // eslint-disable-next-line vue/require-valid-default-prop
  toolsData: [],
  commonMath: commonLatexList,
  titleTools: titleToolsList
})

const fontsList: DataItem[] = [
  {
    text: 'ABC 常规',
    latex: 'mathrm',
    id: '1',
  },
  {
    text: 'ABC 斜体',
    latex: 'mathit',
    id: '2',
  },
  {
    text: 'ABC 加粗',
    latex: 'mathbf',
    id: '3',
  },
  {
    text: 'ABC 斜粗',
    latex: 'boldsymbol',
    id: '4',
  },
  {
    text: 'ABC 下划线',
    latex: 'underline',
    id: '5',
  },
]

// 是否初次加载
const firstSta = ref<boolean>(true)

// 是否是latex输入
const isLatex = ref<boolean>(false)

// latex 内容 (添加默认颜色初始化后清空，防止首次更改字体颜色出现回显原始内容)
const latexVal = ref<string>('\\color{#333333}')

// latex El
const latexEl = ref<HTMLTextAreaElement | null>(null)

// mathquill Ins
const mathQuillIns = ref<any>(null)

// mathquill El
const mathQuillEl = ref(null)

// 高亮latex Ins
const highLightIns = ref<InstanceType<typeof HighlightLatex>>(null)

// 颜色
const latexColor = ref<string>('#333333')

// mathquill 第二个实例 识别识别可以UI可视化latex
const mathQuillInsLatex = ref<any>(null)

// 是否可以切换 可视化UI
const toggleSta = ref<boolean>(true)

// 是否显示常用公式
const isShowCommonMath = ref<boolean>(false)

// mathjax 预览指令
const vMathjax = {
  created: (el: HTMLDivElement) => {
    initFormulaPreview(el)
  },
  updated: (el: HTMLDivElement) => {
    initFormulaPreview(el)
  },
}

// mathjax预览添加 array模式
const calcLatexVal = computed<string>(() => {
  if (window.MathJax) {
    return calcLatexToArrMode(latexVal.value || '')
  }
  return ''
})

// 将latex 转为可识别预览的array模式
const calcLatexToArrMode = (latex: string) => {
  return `$$\\begin{array}{l}${latex}\\end{array}$$`
}

onMounted(() => {
  if (props.latex) {
    latexVal.value = props.latex
  }
  const modules = import.meta.glob('../mathquill/mathquill.js')
  for (const path in modules) {
    modules[path]().then(() => {
      console.log('init formula.js completed!')
      initFormulaEditor()
      // 初始化temp mathquill
      mathQuillInsLatex.value = window.MathQuill.getInterface(2).MathField(
        document.querySelector('.temp-ui'),
      )
    })
  }
})

// 初始化 mathquil 编辑器
const initFormulaEditor = () => {
  mathQuillIns.value = window.MathQuill.getInterface(2).MathField(
    mathQuillEl.value,
    {
      handlers: {
        edit: () => {
          latexVal.value = mathQuillIns.value?.latex()
        },
      },
    },
  )
  mathQuillIns.value?.latex(latexVal.value)
  mathQuillIns.value?.focus()
  mathquillKeydown()
}

// 检测mathquill键盘按下
const mathquillKeydown = () => {
  mathQuillIns.value?.__controller.container.on('keydown', (event: KeyboardEvent) => {
    if (event.key === 'Enter' && event.shiftKey) {
      mathQuillIns.value?.write('\\\\')
    }
  })
}

// 颜色changge
const colorChange = () => {
  let selection = getSelectedText()
  let L = ''
  let C = ''
  if (!selection) {
    return
  }
  L = extractColorText(latexColor.value)
  C = patternHandle(selection, 'color')
  if (!isLatex.value) {
    mathQuillIns.value?.write(`\\color{${L}}{${C}}`)
    mathQuillIns.value?.__controller.selectLeft()
    return
  }
  // latex
  replaceSelectedText(`\\color{${L}}{${C}}`)
}

const fontChange = (data: DataItem) => {
  settingFont(data.latex)
}

// 设置字体
const settingFont = (L: string) => {
  let selection = getSelectedText()
  if (!selection) {
    return
  }
  let e = patternHandle(selection, 'weight')
  if (!isLatex.value) {
    mathQuillIns.value?.write(`\\${L}{${e}}`)
    mathQuillIns.value?.__controller.selectLeft()
    return
  }
  // latex
  replaceSelectedText(`\\${L}{${e}}`)
}

// 插入公式
const insertLatex = (data: DataItem) => {
  if (!isLatex.value) {
    mathQuillIns.value?.write(`${data.latex}`)
    mathQuillIns.value?.focus()
    return
  }

  // latex
  replaceSelectedText(`${data.latex}`)
}

// 获取需要替换的color hex
const extractColorText = (L: string) => {
  let n = L,
    e = /^#([0-9a-fA-f]{3}|[0-9a-fA-f]{6})$/
  if (/^(rgb|RGB)/.test(n)) {
    for (
      var o = n.replace(/(?:\(|\)|rgba|RGBA|rgb|RGB)*/g, '').split(','),
        i = '#',
        r = 0;
      r < o.length;
      r++
    ) {
      let L = Number(o[r]).toString(16)
      3 === r
        ? ((L = Math.round(255 * Number(o[r])).toString(16)),
        (L = 1 === L.length ? '0' + L : L))
        : L.length < 2 && (L = '0' + L),
      (i += L)
    }
    return 7 !== i.length && 9 !== i.length && (i = n), i
  }
  if (e.test(n)) {
    let t = n.replace(/#/, '').split('')
    if (6 === t.length) return n
    if (3 === t.length) {
      let l = '#'
      for (let L = 0; L < t.length; L += 1) l += t[L] + t[L]
      return l
    }
  }
  return n
}

const patternHandle = (str: string, type: string) => {
  let e
  'color' == type
    ? (e = /(\\color\{[^{}]*\})/g)
    : 'weight' == type &&
      (e = /(\\boldsymbol|\\mathrm|\\mathbf\\mathit\\underline)/g)
  const o = str.match(e as RegExp)
  return (
    null === o ||
      void 0 === o ||
      o.forEach((n) => {
        let e = str.split(n)[1],
          o = 0
        if ('{' == e.charAt(0))
          for (let i = 0; i < e.length; i++)
            if (
              ('{' == e.charAt(i) ? o++ : '}' == e.charAt(i) && o--, 0 == o)
            ) {
              let o = e.substring(0, i + 1);
              (e = e.substring(1, i)), (str = str.replace(n + o, e))
              break
            }
      }),
    str
  )
}

// 初始化公式预览
const initFormulaPreview = (dom: HTMLDivElement) => {
  if (firstSta.value) {
    dom.style.color = 'transparent'
  }
  nextTick(() => {
    window.MathJax.startup.promise.then(() => {
      window.MathJax.typesetPromise([dom]).then(() => {
        if (firstSta.value) {
          dom.style.color = 'inherit'
          firstSta.value = false
        }
      })
    })
  })
}

// 获取svg
const svgHtml = () => {
  let html = window.MathJax.tex2svg(calcLatexVal.value, {em: 12, ex: 6, display: false})
  let text = html.firstChild
  return text.outerHTML
}

// 获取latex
const latexText = () => {
  return latexVal.value
}

// 导出 svg
const exportSvg = () => {
  //获取svg
  let dom = document.querySelector('.latex-viewer>.MathJax')?.firstChild
  if (!dom) {
    throw new Error('dom not fount')
  }
  // 将 SVG 节点转换为 XML 字符串
  const svgString = new XMLSerializer().serializeToString(dom)

  // 下载 SVG 文件
  const file = new Blob([svgString], {type: 'image/svg+xml'})
  const url = URL.createObjectURL(file)
  const link = document.createElement('a')
  link.href = url
  link.download = 'math.svg'
  document.body.appendChild(link)
  link.click()
  document.body.removeChild(link)
  URL.revokeObjectURL(url)
}

const svgToImage = () => {
  const svgElement = document.querySelector('.latex-viewer>.MathJax')?.firstChild
  if (!svgElement) {
    throw new Error('dom not fount')
  }
  const canvas = document.createElement('canvas')
  canvas.width = (svgElement as HTMLDivElement).clientWidth
  canvas.height = (svgElement as HTMLDivElement).clientHeight
  const ctx = canvas.getContext('2d')
  const data = new XMLSerializer().serializeToString(svgElement)
  const svg = new Blob([data], {type: 'image/svg+xml;charset=utf-8'})
  const url = URL.createObjectURL(svg)
  const image = new Image()
  image.onload = function () {
    ctx?.drawImage(image, 0, 0)
    URL.revokeObjectURL(url)
    // 导出为图片
    const png = canvas.toDataURL('image/png')
    // 下载图片
    const a = document.createElement('a')
    a.href = png
    a.download = 'math.png'
    a.click()
  }
  image.src = url
}

// 切换编辑器类型
const changeEditType = () => {
  if (!toggleSta.value) {
    return
  }
  if (isLatex.value) {
    latexVal.value = mathQuillIns.value?.latex()
    mathQuillIns.value = null
  }
  nextTick(() => {
    if (isLatex.value) {
      latexEl.value?.focus()
      highLightIns.value = new HighlightLatex(
        '.latex-el',
        '#latex-cover',
      )
    } else {
      latexEl.value = null
      initFormulaEditor()
    }
  })
}

// latex change
const latexChange = () => {
  highLightIns.value?.textareaToDiv()
  mathQuillInsLatex.value?.latex(latexVal.value)
  if (!mathQuillInsLatex.value?.latex() && isLatex.value && latexVal.value) {
    toggleSta.value = false
    return
  }
  toggleSta.value = true
}

// 获取鼠标选中的文本
const getSelectedText = () => {
  if (isLatex.value) {
    const startPos = latexEl.value?.selectionStart || 0
    const endPos = latexEl.value?.selectionEnd || 0
    return latexVal.value.substring(startPos, endPos)
  }
  const selection = mathQuillIns.value?.__controller.cursor.selection
  if (selection) {
    return selection.join('latex')
  }
  return ''
}

// 替换选中的latex
const replaceSelectedText = (replacementText: string) => {
  const startPos = latexEl.value?.selectionStart || 0
  const endPos = latexEl.value?.selectionEnd || 0
  const beforeSelection = latexVal.value.substring(0, startPos)
  const afterSelection = latexVal.value.substring(endPos)
  const val = beforeSelection + replacementText + afterSelection
  latexVal.value = val
  nextTick(() => {
    latexEl.value?.focus()
    latexEl.value?.setSelectionRange(startPos + replacementText.length, startPos + replacementText.length)
    latexChange()
  })
}

defineExpose({
  latexText,
  svgHtml,
  exportSvg,
  svgToImage,
  insertLatex
})
</script>

<template>
  <div class="formula-main">
    <div class="input-main">
      <div class="title-tools">
        <SelectTitle :column="6" :data="item.data" @change="insertLatex" v-for="item in toolsData" :key="item.id">
          <template #title>
            <span class="title">{{ item.title }}</span>
          </template>
        </SelectTitle>
      </div>
      <div class="math-main">
        <div class="formula-l">
          <div class="input-board">
            <div class="input-tool">
              <div class="tool-item">
                <div class="fx">
                  <img class="color" src="../img/color.png" alt=""/>
                  <!--              <span class="title">颜色</span>-->
                  <img class="arrow-down" src="../img/arrow-down.png" alt=""/>
                </div>
                <input type="color" @input="colorChange" v-model="latexColor"/>
              </div>
              <SelectTitle :data="fontsList" @change="fontChange">
                <template #title>
                  <img class="font-icon" src="../img/font.png" alt=""/>
                  <!--              <span class="title">字体</span>-->
                </template>
              </SelectTitle>
              <div class="use-latex" v-if="titleTools && titleTools.length>0">
                <div class="latex-item" v-for="item in titleTools" :key="item.id" v-html="item.text"
                     @click="insertLatex(item)">
                </div>
              </div>
              <div class="r-switch">
                <div class="switch-box">
                  <input :disabled="!toggleSta" v-model="isLatex" @change="changeEditType" id="switchButton"
                         type="checkbox"
                         class="switch"/>
                  <label for="switchButton" :class="{disabled:!toggleSta}"></label>
                </div>
                <span :class="{'latex-active': isLatex}">Latex</span>
              </div>
            </div>
            <div class="input-area">
              <div class="temp-ui"></div>
              <div class="input-ui" v-if="!isLatex">
                <div id="quill-el" ref="mathQuillEl"></div>
              </div>
              <div class="input-latex" v-else>
            <textarea
                ref="latexEl"
                class="latex-el public-s"
                v-model="latexVal"
                type="textarea"
                @input="latexChange"
                placeholder="请输入有效的Latex公式"
            />
                <div id="latex-cover" class="public-s"></div>
              </div>
            </div>
          </div>
          <div class="preview-footer">
            <div class="preview-title">预览公式</div>
            <div class="latex-viewer" v-mathjax v-text="calcLatexVal"></div>
          </div>
        </div>
        <div :class="{'common-r':true,'expand':isShowCommonMath}" v-if="commonMath && commonMath.length>0">
          <div class="bar" @click="isShowCommonMath=!isShowCommonMath"></div>
          <div class="math-render">
            <div class="title">
              常用公式
            </div>
            <div class="math-body">
              <p v-for="item in commonMath" @click="insertLatex(item)" :key="item.id">{{
                  calcLatexToArrMode(item.latex)
                }}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="css">
@import "../mathquill/mathquill.css";
</style>

<style lang="less" scoped>
@import "./index.less";

.CtxtMenu_MenuFrame {
  display: none;
}
</style>
