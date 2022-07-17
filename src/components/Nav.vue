<template>
  <nav>
    <router-link to="/money" class="item">
      <Icon name="money"></Icon>
      记账
    </router-link>
    <router-link to="/labels" class="item">
      <Icon name="labels"></Icon>
      标签
    </router-link>
    <router-link to="/statistics" class="item">
      <Icon name="statistics"></Icon>
      统计
    </router-link>

  </nav>
</template>

<script lang='ts'>
export default {
  name: 'Nav'
};
</script>

<style lang='scss' scoped>
nav {
  display: flex;
  box-shadow: 0 0 3px rgb(0, 0, 0, 0.25);
  font-size: 16px;


  > .item {
    width: 33.3333%;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;

    .icon {
      padding: 2px 0;
      width: 32px;
      height: 32px;
    }

  }
}

</style>