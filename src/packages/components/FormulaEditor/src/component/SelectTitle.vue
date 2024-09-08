<script setup lang="ts">
import {computed, ref} from 'vue'
import type {DataItem} from '../editor'

interface IProps {
  column: number,
  trigger: 'click' | 'hover',
  data?: DataItem[]
}

defineOptions({
  name: 'SelectTitle'
})

const props = withDefaults(defineProps<IProps>(), {
  column: 1,
  trigger: 'click',
  data: undefined
})

const emit = defineEmits<{
  change: [data: DataItem]
}>()

const fontVisible = ref<boolean>(false)

const popoverWidth = computed<string>(() => {
  if (props.column == 1) {
    return '108px'
  }
  return `${props.column * 34}px`
})

const eventType = computed<string>(() => {
  if (props.trigger == 'click') {
    return 'click'
  }
  return 'mouseenter'
})

const open = () => {
  fontVisible.value = true
}

const close = () => {
  fontVisible.value = false
}

const change = (item: DataItem) => {
  emit('change', item)
  close()
}

</script>

<template>
  <div class="tool-title" @[eventType]="open">
    <div class="fx">
      <slot name="title"></slot>
      <img class="arrow-down" src="../../img/arrow-down.png" alt=""/>
    </div>
    <Transition name="fade">
      <div :class="['popover',column>1?'popover-column':'']" :style="{width: popoverWidth}"
           v-if="fontVisible">
        <template v-if="data && data.length>0">
          <template v-if="column>1">
            <div
                class="popover-column-item"
                v-for="item in data"
                :key="item.id"
                @click.stop="change(item)"
            >
              <span v-html="item.text"></span>
            </div>
          </template>
          <template v-else>
            <div
                :class="['popover-item', 'font' + item.id]"
                v-for="item in data"
                :key="item.id"
                @click.stop="change(item)"
            >
              <span v-html="item.text"></span>
            </div>
          </template>
        </template>
        <slot v-else></slot>
      </div>
    </Transition>
    <Teleport to="body" v-if="fontVisible">
      <div class="mq-select-modal" @click="close"></div>
    </Teleport>
  </div>
</template>

<style lang="scss">
.mq-select-modal {
  position: fixed;
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;
  z-index: 1000;
  background-color: transparent;
}
</style>
<style scoped lang="less">
.tool-title {
  position: relative;
  text-align: center;
  padding: 6px 10px;
  background-color: #f0f2f5;
  border-radius: 4px;
  margin-right: 10px;
  cursor: pointer;
  user-select: none;
  font-size: 14px;
  transition: background-color linear 0.15s;
  display: flex;
  align-items: center;

  &:hover {
    background-color: #e2e6ea;
  }

  .fx {
    display: flex;
    align-items: center;
  }

  .arrow-down {
    width: 8px;
  }

  .color {
    width: 12px;
  }

  .font-icon {
    width: 10px;
  }

  .title {
    margin: 0 5px;
    font-family: 'Microsoft YaHei UI', 'Microsoft YaHei', Helvetica, Arial, sans-serif, 'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol';
  }

  input[type="color"] {
    border: none;
    position: absolute;
    width: 100%;
    height: 100%;
    left: 0;
    top: 0;
    opacity: 0;
    cursor: pointer;
  }

  input[type="color"]::-webkit-color-swatch-wrapper {
    padding: 0;
  }

  input[type="color"]::-webkit-color-swatch {
    border: 0;
  }

  .fade-enter-from, .fade-leave-to {
    transform: translateY(-5%);
    opacity: 0;
  }

  .fade-enter-active, .fade-leave-active {
    transition: all linear 0.15s;
  }

  .popover {
    position: absolute;
    padding: 8px;
    top: 100%;
    left: 0;
    z-index: 10001;
    background: #fff;
    box-shadow: 0px 0px 12px rgba(0, 0, 0, .12);
    min-width: 108px;

    .popover-item {
      display: flex;
      align-items: center;
      margin-bottom: 4px;
      padding: 0 8px;
      height: 32px;
      border-radius: 4px;
      cursor: pointer;
      white-space: nowrap;

      &.font2 {
        font-family: italic;
      }

      &.font3 {
        font-weight: bold;
      }

      &.font4 {
        font-weight: bold;
        font-family: italic;
      }

      &.font5 {
        text-decoration: underline;
      }

      &:hover {
        background: #ebecf0;
      }

      &:last-child {
        margin-bottom: 0;
      }
    }
  }

  .popover-column {
    display: flex;
    flex-wrap: wrap;

    .popover-column-item {
      display: flex;
      align-items: center;
      justify-content: center;
      width: 32px;
      height: 32px;
      vertical-align: middle;
      text-align: center;
      margin: 1px;
      cursor: pointer;
      border-radius: 4px;

      &:hover {
        background-color: #f0f2f5;
      }
    }
  }
}
</style>
