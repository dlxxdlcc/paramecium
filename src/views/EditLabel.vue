<template>
  <div class="label">
    <div class="nav">
      <Icon name="left"></Icon>
      <span class="editSpan">编辑标签</span>
      <Icon></Icon>
    </div>
    <Notes class="notes" field-name="标签名" placeholder="请输入标签名"></Notes>
    <button class="deleteTags">删除标签</button>
  </div>

</template>

<script lang='ts'>
import Vue from 'vue';
import Component from 'vue-class-component';
import tagsListModel from '@/modules/tagListModel';
import Notes from '@/components/money/Notes.vue';

@Component({
  components: {Notes}
})
export default class editLabel extends Vue {
  create() {
    const id = this.$route.params.id;
    tagsListModel.fetch();
    const tags = tagsListModel.data;
    const tag = tags.filter(item => item.id === id)[0];
    if (tag) {
      console.log(tag);
    } else {
      this.$router.replace('/404');
    }

  }
}
</script>

<style lang='scss' scoped>

.nav {
  padding: 12px 16px;
  display: flex;
  justify-content: space-between;
  align-items: center;

  svg {
    height: 18px;
    width: 18px;
    color: #666;

  }
}
.notes{
  border: 1px solid #f5f5f5;

}

  .deleteTags {
    background: #a2cca4;
    color: white;
    border: none;
    border-radius: 4px;
    height: 40px;
    padding: 0 16px;
    margin: 20px 0;
  }
</style>