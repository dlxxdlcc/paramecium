<template>
  <div id="app">
    <div class="content">
      <router-view/>
    </div>
    <hr>
      <Nav></Nav>
  </div>
</template>

<style lang="scss">
@import "~@/assets/style/normalize.css";
@import "~@/assets/style/reset.scss";
@import "~@/assets/style/fonts.scss";


body{
  line-height: 1.2;
  font-family: $fonts-hei;
  font-size: 16px;
  box-sizing: border-box;
  border: 1px solid red;
}

#app {
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #555555;
  display: flex;
  flex-direction: column;
  height: 100vh;
}
.content{
  overflow: auto;
  flex-grow: 1;
}


</style>
