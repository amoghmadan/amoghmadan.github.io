<template>
  <div id="app" class="text-center cover-container d-flex h-100 p-3 mx-auto flex-column">
    <app-header></app-header>
    <app-main></app-main>
    <app-footer></app-footer>
  </div>
</template>

<script>
import AppHeader from './components/AppHeader.vue';
import AppMain from './components/AppMain.vue';
import AppFooter from './components/AppFooter.vue';

export default {
  name: 'App',
  components: {
    AppHeader,
    AppMain,
    AppFooter,
  },
};
</script>

<style>
@import url('./assets/css/cover.css');
</style>
