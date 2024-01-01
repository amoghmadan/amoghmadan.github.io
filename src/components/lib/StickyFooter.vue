<script setup>
const currentYear = new Date().getFullYear()
</script>

<template>
  <footer class="fixed bottom-0 w-full bg-screen text-content py-2">
    <div class="container mx-auto text-center">
      &copy; 2014 - {{ currentYear }} Amogh Madan. All rights reserved.
    </div>
  </footer>
</template>
