<template>
  <div class="numberPad">
    <div class="output">{{ output }}</div>
    <div class="buttons">
      <button @click="inputContent">1</button>
      <button @click="inputContent">2</button>
      <button @click="inputContent">3</button>
      <button @click="remove">删除</button>
      <button @click="inputContent">4</button>
      <button @click="inputContent">5</button>
      <button @click="inputContent">6</button>
      <button @click="clear">清空</button>
      <button @click="inputContent">7</button>
      <button @click="inputContent">8</button>
      <button @click="inputContent">9</button>
      <button @click="ok" class="ok">OK</button>
      <button @click="inputContent" class="zero">0</button>
      <button @click="inputContent">.</button>

    </div>
  </div>
</template>

<script lang='ts'>
import Vue from 'vue';
import {Component, Prop} from 'vue-property-decorator';

@Component
export default class NumberPad extends Vue {
  @Prop() readonly value!: number;
  output = this.value.toString();

  inputContent(event: MouseEvent) {
    const button = (event.target as HTMLButtonElement);
    const input = button.textContent!;
    if (this.output.length === 16) {
      return;
    }
    if (this.output === '0') {
      if ('0123456789'.indexOf(input) >= 0) {
        this.output = input;
      } else {
        this.output += input;
      }
      return;
    }
    if (this.output.indexOf('.') >= 0 && input === '.') {
      return;
    }
    this.output += input;
  }

  remove() {
    if (this.output.length === 1) {
      this.output = '0';
    } else {
      this.output = this.output.slice(0, -1);
    }
  }

  clear() {
    this.output = '0';
  }

  ok() {
    this.$emit('update:value', this.output);
    this.output = '0';
  }
}

</script>

<style lang='scss' scoped>
@import "~@/assets/style/fonts.scss";

.numberPad {
  .output {
    @extend %clearFix;
    font-size: 36px;
    font-family: Consolas, monospace;
    padding: 9px 16px;
    text-align: right;
    @extend %clearFix;

  }

  .buttons {
    @extend %clearFix;

    > button {
      color: #555555;
      width: 25%;
      height: 64px;
      float: left;
      background: $para-color;
      border: transparent;


      &.zero {
        width: 25*2%;
      }

      &.ok {
        float: right;
        height: 64px*2;
      }

      &:nth-child(1) {
        border-radius: 20% 0 0 0;
      }

      &:nth-child(4) {
        border-radius: 0 20% 0 0;
      }
    }
  }

}
</style>