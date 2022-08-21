<template>
  <div class="money">
    <Types :value.sync="record.type"/>
    <Tags/>
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


@Component({
      components:
          {
            Types, Tags, Notes, NumberPad
          },
    }
)
export default class Money extends Vue {

  get recordList() {
    return this.$store.state.recordList;
  }

  get tagList() {
    return this.$store.state.tagList;
  }

  record: RecordItem = {
    tags: [], notes: '', type: '-', amount: 0
  };

  created() {
    this.$store.commit('fetchRecords');

  }

  saveRecord() {
    this.$store.commit('fetchTags');
    this.record.tags = this.tagList;
    this.$store.commit('createRecord', this.record);
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