<template>
  <div>
    <app-navbar />
    <router-view></router-view>
  </div>
</template>

<script>
import appNavbar from './components/appNavbar.vue'
export default {
  components: { appNavbar },

}
</script>

<style>

</style>
