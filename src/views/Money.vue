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
import store from '@/store/index2';



@Component({
      components:
          {
            Types, Tags, Notes, NumberPad
          }
    }
)
export default class Money extends Vue {
  recordList: RecordItem[] = store.recordList;
  tag = store.tagList;

  record: RecordItem = {
    tags: this.tag, notes: '', type: '-', amount: 0
  };

  saveRecord() {
    store.createRecord(this.record);
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

.notesWrapper {
  border: 1px solid #f5f5f5;

  padding: 12px 0;
}

</style>