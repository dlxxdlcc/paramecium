<template>
  <div class="money">
    <Types :value.sync="record.type"/>
    <Tags :value.sync="record.tags"/>
    <div class="notesWrapper">
      <Notes field-name="备注" placeholder="在这里输入备注" :value.sync="record.notes"/>
    </div>
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
import recordListModel from '@/modules/recordListModel';
import tagsListModel from '@/modules/tagListModel';


const recordList: RecordItem[] = recordListModel.fetch();
const tagsList = tagsListModel.fetch();

@Component({
      components:
          {
            Types, Tags, Notes, NumberPad
          }
    }
)
export default class Money extends Vue {
  recordList: RecordItem[] = recordList;
  tag = tagsList;

  record: RecordItem = {
    tags: ['衣', '食', '住', '行'], notes: '', type: '-', amount: 0
  };

  saveRecord() {
    const record2: RecordItem = recordListModel.clone(this.record);
    record2.createdAt = new Date();
    this.recordList.push(record2);
    recordListModel.save(this.recordList);
  }

}
</script>

<style lang='scss' scoped>
.money {
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;

}
.notesWrapper{
  border: 1px solid #f5f5f5;

  padding: 12px 0;
}

</style>