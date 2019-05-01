<template>
  <div id="app">
    <Header />
    <router-view/>
    <TabBar />
  </div>
</template>

<script>
import Header from './commons/Header'
import TabBar from './commons/TabBar'
export default {
  name: 'App',
  components: {
    Header,
    TabBar
  }
}
</script>

<style lang="stylus">
  body
    background-color white !important
  #app
    padding-top 40px
</style>
