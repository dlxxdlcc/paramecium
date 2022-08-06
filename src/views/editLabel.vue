<template>
  <div>  <div>
    <Icon name="left"></Icon>
    <span>编辑标签</span>
  </div>
  <Notes field-name="标签名" placeholder="请输入标签名"></Notes>
  </div>

</template>

<script lang='ts'>
import Vue from 'vue';
import Component from 'vue-class-component';
import tagsListModel from '@/modules/tagListModel';
import Notes from '@/components/money/Notes.vue';

@Component({
  components:{Notes}
})
export default class editLabel extends Vue {
  create() {
    const id = this.$route.params.id;
    tagsListModel.fetch();
    const tags = tagsListModel.data;
    const tag = tags.filter(item => item.id === id)[0];
    if (tag){
      console.log(tag);
    }else {
      this.$router.replace('/404')
    }

  }
}
</script>

<style lang='scss' scoped>

</style>