<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style>
html, body {
  padding: 0px;
  margin: 0px;
  height: 100%;
}

#app {
  font-family: 'Fira Sans', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin: auto;
  box-sizing: border-box;
  padding: 16px;
  min-height: 100%;
  background: #333;
}

.white {
  color: white;
}

</style>
