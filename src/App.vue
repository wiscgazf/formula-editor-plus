<script setup lang="ts">
import FormulaEditor from './packages/components/FormulaEditor/src/index.vue'
import {ComponentInstance, ref} from 'vue'
import toolsLatex from './config/groupConfig.ts'
// import {FormulaEditor} from '../dist/es/index.js'
// import '../dist/es/style.css'
const formulaRef = ref<ComponentInstance<typeof FormulaEditor> | null>(null)

const getLatex = () => {
  console.log('formulaRef', formulaRef.value?.latexText())
}

const latexExport = ()=>{
  formulaRef.value?.exportSvg()
}

const latexSvg = ()=>{
  console.log(formulaRef.value?.svgHtml())
}
const svgToImage = ()=>{
  formulaRef.value?.svgToImage()
}
</script>

<template>
  <div>
    <FormulaEditor ref="formulaRef" :tools-data="toolsLatex" />
    <button @click="getLatex">获取 latex text代码</button>
    <button @click="latexSvg">获取 latex svg代码</button>
    <button @click="latexExport">导出 latex 为svg</button>
    <button @click="svgToImage">导出 latex 为png</button>
  </div>
</template>
