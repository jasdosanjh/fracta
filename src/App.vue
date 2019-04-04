<template>
  <div id="app">
    <Nav></Nav>
  </div>
</template>

<script>
import Nav from './components/Nav.vue'
import Header from './components/Header.vue'

export default {
  name: 'app',
  components: {
    Nav,
    Header
  }
}
</script>

<style lang="scss">
@import "sass/main";
</style>
