<template>
  <div>
    <Types :value.sync="type"/>
    <Tabs :value.sync="zzz"/>
  </div>
</template>

<script lang='ts'>
import {Component} from 'vue-property-decorator';
import Types from '@/components/money/Types.vue';
import Tabs from '@/components/Tabs.vue';

import Vue from 'vue';

@Component({
  components: {Types, Tabs}
})
export default class Statistics extends Vue {
  type = '+';
  interval = 'day';
}
</script>

<style lang='scss' scoped>
div ::v-deep ul {
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
    color: #a2cca4;
    width: 28%;
    height: 32px;
    border-radius: 7px;
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 0 5px;

    .selected {
      background: #a2cca4;
      color: #ffffff;
    }
  }


}


</style>