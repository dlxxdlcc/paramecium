<template>
  <div>
    <Types :value.sync="type"/>
    <!--
    <Tabs :value.sync="interval"/>
    -->
    <div>
      <ol v-if="groupedList.length>0">
        <li v-for="(group,index) in groupedList" :key="index">
          <h3 class="title">{{ beautify(group.title) }} <span>总和：{{ group.total }}</span></h3>
          <ol class="record">
            <li v-for="item in group.items" :key="item.id">
              <span>{{ tagString(item.tags) }}</span>
              <span class="notes">{{ item.notes }}</span>
              <span>¥{{ item.amount }}</span>
            </li>
          </ol>
        </li>
      </ol>
      <div v-else>
        目前还没有记录
      </div>
    </div>
  </div>
</template>

<script lang='ts'>
import {Component} from 'vue-property-decorator';
import Types from '@/components/money/Types.vue';
import Tabs from '@/components/Tabs.vue';
import dayjs from 'dayjs';
import clone from '@/lib/clone.ts';

import Vue from 'vue';

type Tag = {
  id: string;
  name: string;
}
type RecordItem = {
  tags: Tag[]
  notes: string
  type: string
  amount: number
  createdAt?: string
}

@Component({
  components: {Types, Tabs}
})
export default class Statistics extends Vue {

  type = '-';

  // interval = 'day';


  get recordList() {
    return this.$store.state.recordList;
  }

  get groupedList() {
    const {recordList} = this;

    const newList = clone(recordList)
        .filter(r => r.type === this.type)
        .sort((a, b) => dayjs(b.createdAt).valueOf() - dayjs(a.createdAt).valueOf());

    if (newList.length === 0) {
      return [] as Result;
    }

    type Result = { title: string, total?: number, items: RecordItem[] }[]

    const result: Result = [{title: dayjs(newList[0].createdAt).format('YYYY-MM-DD'), items: [newList[0]]}];
    for (let i = 1; i < newList.length; i++) {
      const current = newList[i];
      const last = result[result.length - 1];
      if (dayjs(last.title).isSame(dayjs(current.createdAt), 'day')) {
        last.items.push(current);
      } else {
        result.push({title: dayjs(current.createdAt).format('YYYY-MM-DD'), items: [current]});
      }
    }
    result.map(group => {
      group.total = group.items.reduce((sum, item) => {
        return sum + item.amount;
      }, 0);
    });
    return result;
  }

  tagString(tags: Tag[]) {
    return tags.length === 0 ? '无' : tags.map(t=>t.name).join('，');
  }

  beautify(string: string) {
    const day = dayjs(string);
    const now = dayjs();
    if (day.isSame(now, 'day')) {
      return '今天';
    } else if (day.isSame(now.subtract(1, 'day'), 'day')) {
      return '昨天';
    } else if (day.isSame(now.subtract(2, 'day'), 'day')) {
      return '前天';
    } else if (day.isSame(now, 'year')) {
      return day.format('M月D日');
    } else {
      return day.format('YYYY年M月D日');
    }
  }


  mounted() {
    this.$store.commit('fetchRecords');
  }
}
</script>

<style lang='scss' scoped>
%item {
  padding: 8px 16px;
  line-height: 24px;
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.title {
  background: #f4f4f4;
  @extend %item
}

.record >li{
  @extend %item
}

.notes {
  margin-right: auto;
  margin-left: 8px;
  color: #999;
}


div ::v-deep ul {
  background: #ffffff;
  display: flex;
  text-align: center;
  align-items: center;
  justify-content: center;
  font-size: 18px;
  width: 100%;
  height: 64px;

  > li {

    background: #ffffff;
    color: #a2cca4;
    width: 28%;
    height: 32px;
    border-radius: 7px;
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 0 5px;

    .selected {
      background: #a2cca4;
      color: #ffffff;
    }
  }


}


</style>