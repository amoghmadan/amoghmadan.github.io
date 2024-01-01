<script setup>
import { RouterView } from 'vue-router'

import Navbar from '@/components/lib/Navbar.vue'
import StickyFooter from '@/components/lib/StickyFooter.vue'
</script>

<template>
  <Navbar />
  <RouterView />
  <StickyFooter />
</template>
