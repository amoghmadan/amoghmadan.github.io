<template>
  <header class="masthead mb-auto">
    <div class="inner">
      <h3 class="masthead-brand">{{ name }}</h3>
      <nav class="nav nav-masthead justify-content-center">
        <a class="nav-link" v-for="link in links" :key="link.url" :href="link.url" target="_blank">{{ link.title }}</a>
      </nav>
    </div>
  </header>
</template>

<script>
export default {
  name: 'VueHeader',
  data() {
    return {
      name: 'Amogh Madan',
      links: [
        { title: 'LinkedIn', url: 'https://linkedin.com/in/amogh-madan' },
        { title: 'GitHub', url: 'https://github.com/amoghmadan' },
        { title: 'Twitter', url: 'https://twitter.com/amogh_madan' },
      ],
    };
  },
};
</script>
