<template>
  <div>
    <div class="tags">
      <router-link class="tag" v-for="tag in tags" :key="tag.id" :to="`/labels/edit/${tag.id}`"><span>{{
          tag.name
        }}</span>
        <icon name="right"></icon>
      </router-link>
    </div>
    <div>
      <button class="createTags" @click="createTag">新建标签</button>
    </div>
  </div>
</template>

<script lang='ts'>
import Vue from 'vue';
import {mixins} from 'vue-class-component';
import TagHelper from '@/mixins/TagHelper';
import {Component} from 'vue-property-decorator';


@Component
export default class Labels extends mixins(TagHelper) {
  get tags() {
    return this.$store.state.tagList;
  }

  created() {
    this.$store.commit('fetchTags');
  }


}
</script>

<style lang='scss' scoped>
.tags {
  display: flex;
  flex-direction: column;

  > .tag {
    min-height: 40px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin: 0 16px;

    svg {
      height: 18px;
      width: 18px;
      color: #666;

    }

  }

}

.createTags {
  background: #a2cca4;
  color: white;
  border: none;
  border-radius: 4px;
  height: 40px;
  padding: 0 16px;
  margin: 20px 0;
}
</style>