<template>
  <div class="numberPad">
    <div class="output">100</div>
    <div class="buttons">
      <button>1</button>
      <button>2</button>
      <button>3</button>
      <button>+</button>
      <button>删除</button>
      <button>4</button>
      <button>5</button>
      <button>6</button>
      <button>-</button>
      <button>清空</button>
      <button>7</button>
      <button>8</button>
      <button>9</button>
      <button>×</button>
      <button class="ok">OK</button>
      <button class="zero">0</button>
      <button>.</button>
      <button>÷</button>
    </div>
  </div>
</template>

<script lang='ts'>
export default {
  name: 'NumberPad'
};
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
  .buttons{
    @extend %clearFix;
    > button {
      color: #555555;
      width: 20%;
      height: 64px;
      float: left;
      background: $para-color;
      border: transparent;

      &.ok {
        height: 64*2px;
        float: right;
      }

      &.zero {
        width: 20*2%;
      }
      &:nth-child(1) {
        border-radius: 20% 0 0 0;
      }
      &:nth-child(5) {
        border-radius: 0 20% 0  0;
      }
    }
  }

}
</style>