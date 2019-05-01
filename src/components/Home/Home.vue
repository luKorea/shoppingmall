<template>
  <div class="home">
    <v-swipe />
  </div>
</template>

<script>
import VSwipe from './commons/Swipe'
export default {
  name: 'Home',
  components: {
    VSwipe
  }
}
</script>

<style scoped lang="stylus">
  .home
    width 100%
    height 100%
</style>
