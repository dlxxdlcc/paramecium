<template>
  <div class="money">
    <Types :value.sync="record.type"/>
    <Tags :value.sync="record.tags"/>
    <Notes :value.sync="record.notes"/>
    <NumberPad :value.sync="record.amount" @submit="saveRecord"/>
  </div>
</template>

<script lang='ts'>
import Types from '@/components/money/Types.vue';
import Tags from '@/components/money/Tags.vue';
import Notes from '@/components/money/Notes.vue';
import NumberPad from '@/components/money/NumberPad.vue';
import Vue from 'vue';
import {Component, Watch} from 'vue-property-decorator';


const recordList: RecordItem[] = JSON.parse(window.localStorage.getItem('recordList') || '[]');

@Component({
      components:
          {
            Types, Tags, Notes, NumberPad
          }
    }
)
export default class Money extends Vue {
  record: RecordItem = {
    tags: ['衣', '食', '住', '行', '行行行'], notes: '', type: '-', amount: 0
  };

  recordList: RecordItem[] = recordList;

  saveRecord() {
    const record2: RecordItem = JSON.parse(JSON.stringify(this.record));
    record2.createdAt = new Date();
    this.recordList.push(record2);
    window.localStorage.setItem('recordList', JSON.stringify(this.recordList));
  }

}
</script>

<style lang='scss' scoped>
.money {
  border: 1px solid blue;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;

}

</style>