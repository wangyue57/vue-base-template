<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<script>
  import 'normalize.css'

  export default {
    name: 'App'
  }
</script>

{{#vuex}}
启用vuex
{{/vuex}}

{{#axios}}
axios
{{/axios}}

{{#router}}
启用router
{{/router}}

<style>
  #app {
    text-align: center;
    -moz-osx-font-smoothing: grayscale;
    -webkit-font-smoothing: antialiased;
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
  }
</style>
