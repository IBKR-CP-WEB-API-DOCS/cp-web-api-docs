<script>
import Sidenav from '@/components/Sidenav.vue'
export default {
  components: {
    Sidenav
  }
}
</script>

<template>
  <sidenav />
  <main>
    <router-view />
  </main>
</template>


<style>
* {
  -moz-box-sizing: border-box;
  -webkit-box-sizing: border-box;
  box-sizing: border-box;
}

body {
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
  margin: 0;
  overflow-y: scroll;
  overflow-x: hidden;
}

main {
  padding-left: 250px;
}
</style>
