<template>
    <div>
        <ul class="types">
          <li class="selected">支出</li>
          <li>收入</li>
        </ul>
    </div>
</template>

<script lang='ts'>
export default {
name: "Types"
}
</script>

<style lang='scss' scoped>
.types {
  background: #ffffff;
  display: flex;
  text-align: center;
  align-items: center;
  justify-content: center;
  font-size: 18px;
  width: 100%;
  height: 64px;


  > li {
    background: #ffffff;
    color:#a2cca4 ;
      width: 28%;
      height: 32px;
      border-radius: 7px;
      display: flex;
      justify-content: center;
      align-items: center;
      margin: 0 5px;

    &.selected{
      background: #a2cca4;
      color:#ffffff ;
    }

    }


}
</style>