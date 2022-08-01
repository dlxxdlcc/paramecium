<template>
  <div class="tags">
    <ul class="current">
      <li v-for="tag in value" :key="tag"
          :class="{selected: selectedTags.indexOf(tag)>=0}"
          @click="toggle(tag)">{{ tag }}
      </li>
    </ul>
    <div class="new">
      <button @click="create">新增标签</button>
    </div>
  </div>
</template>

<script lang='ts'>
import Vue from 'vue';
import {Component, Prop} from 'vue-property-decorator';

@Component
export default class Tags extends Vue {
  @Prop() readonly value!: string[] ;
  selectedTags: string[] = [];

  toggle(tag: string) {
    const index = this.selectedTags.indexOf(tag);
    if (index >= 0) {
      this.selectedTags.splice(index, 1);
    } else {
      this.selectedTags.push(tag);
    }
  }

  create() {
    const name = window.prompt('请输入标签名');
    if (name === '') {
      window.alert('标签名不能为空');
    } else if (this.value) {
      this.$emit('update:value',
          [...this.value, name]);
    }
  }
}

</script>

<style lang='scss' scoped>
.tags {
  font-size: 14px;
  padding: 16px;
  display: flex;
  flex-direction: column;
  flex-grow: 1;

  > .current {

    display: flex;
    flex-wrap: wrap;

    > li {

      background: #a2cca4;
      color: #ffffff;
      $h: 24px;
      height: $h;
      line-height: $h;
      border-radius: 12px;
      padding: 0 16px;
      margin-right: 12px;
      margin-top: 4px;

      &.selected {
        background: darken(#a2cca4, 20%);
        color: white;
      }
    }
  }

  > .new {
    padding-top: 16px;

    button {
      background: transparent;
      border: none;
      color: #999;
      border-bottom: 1px solid;
      padding: 0 4px;
    }
  }
}
</style>