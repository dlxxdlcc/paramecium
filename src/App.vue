<template>
  <div id="app">
    <div class="content">
      <router-view/>
    </div>
    <hr>
    <div id="nav-wrapper">
      <Nav></Nav>
    </div>
  </div>
</template>

<style lang="scss">
@import "~@/assets/normalize.css";
body{
  line-height: 1.5;
}
a{
  text-decoration: none;
  color: inherit;
}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  display: flex;
  flex-direction: column;
  height: 100vh;
}
.content{
  overflow: auto;
  flex-grow: 1;
}

#nav-wrapper {
  padding: 30px;

  a {
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>
