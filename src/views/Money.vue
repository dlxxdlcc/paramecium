<template>
  <div class="money">
    <Types />
    <Tags />
    <Notes />
    <NumberPad />
  </div>
</template>

<script lang='ts'>
import Types from "@/components/money/Types.vue";
import Tags from '@/components/money/Tags.vue';
import Notes from '@/components/money/Notes.vue';
import NumberPad from '@/components/money/NumberPad.vue';

export default {
  name: 'money',
  components:{Types,Tags,Notes,NumberPad}
};
</script>

<style lang='scss' scoped>
  .money{
    border: 1px solid blue;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: flex-end;

  }

</style>