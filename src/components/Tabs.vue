<template>
  <div>
    <ul class="types">
      <li :class="{selected: value==='day'}" @click="selectType('day')">按天</li>
      <li :class="{selected: value==='week'}" @click="selectType('week')">按周</li>
      <li :class="{selected: value==='month'}" @click="selectType('month')">按月</li>
    </ul>
  </div>
</template>

<script lang='ts'>
import Vue from 'vue';
import {Component, Prop} from 'vue-property-decorator';

@Component
export default class Types extends Vue {
  @Prop(String) readonly value!: string;

  // eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
  selectType(type: 'day' | 'week' | 'month') {
    if (type !== 'month' && type !== 'day' && type !== 'week') {
      throw new Error('type is unknown');
    }
    this.$emit('update:value', type);

  }
}

</script>

<style lang='scss' scoped>
.types {
  background: #ffffff;
  display: flex;
  text-align: center;
  align-items: center;
  justify-content: center;
  font-size: 16px;
  width: 100%;
  height: 48px;


  > li {
    background: #ffffff;
    color: #a2cca4;
    width: 20%;
    height: 28px;
    border-radius: 7px;
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 0 5px;

    &.selected {
      background: #a2cca4;
      color: #ffffff;
    }

  }


}
</style>