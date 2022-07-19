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
@import "~@/assets/style/fonts.scss";

nav {
  display: flex;
  box-shadow: 0 0 3px rgb(0, 0, 0, 0.08);
  font-size: 14px;


  > .item {
    width: 33.3333%;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;

    &.router-link-exact-active {
      color: $para-color;
    }

    .icon {
      padding: 5px 0 0 0;
      width: 24px;
      height: 24px;
    }

  }
}


</style>