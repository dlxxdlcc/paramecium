<template>
  <div class="money">
    <Types :value.sync="record.type"/>
    <Tags :value.sync="record.tags"/>
    <Notes :value.sync="record.notes"/>
    <NumberPad :value.sync="record.amount"/>
  </div>
</template>

<script lang='ts'>
import Types from '@/components/money/Types.vue';
import Tags from '@/components/money/Tags.vue';
import Notes from '@/components/money/Notes.vue';
import NumberPad from '@/components/money/NumberPad.vue';
import Vue from 'vue';
import {Component, Watch} from 'vue-property-decorator';

type Record = {
  tags: string[]
  notes: string
  type: string
  amount: number
}

@Component({
      components:
          {
            Types, Tags, Notes, NumberPad
          }
    }
)
export default class Money extends Vue {
  record: Record = {
    tags: ['衣', '食', '住', '行', '行行行'], notes: '', type: '-', amount: 0
  };

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