<template>
  <div id="app" class="text-center cover-container d-flex h-100 p-3 mx-auto flex-column">
    <vue-header></vue-header>
    <vue-main></vue-main>
    <vue-footer></vue-footer>
  </div>
</template>

<script>
import VueHeader from './components/VueHeader.vue';
import VueMain from './components/VueMain.vue';
import VueFooter from './components/VueFooter.vue';

export default {
  name: 'App',
  components: {
    VueHeader,
    VueMain,
    VueFooter,
  },
};
</script>

<style>
@import url('./assets/css/cover.css');
</style>
