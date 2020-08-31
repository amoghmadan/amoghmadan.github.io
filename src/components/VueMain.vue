<template>
  <main role="main" class="inner cover">
    <h1 class="cover-heading">
      <img :src="image.src" :alt="image.alt" height="250" width="250" />
    </h1>
    <p class="lead">{{ description }}</p>
  </main>
</template>

<script>
export default {
  name: "VueMain",
  data() {
    return {
      description:
        "I am a Software Developer looking forward to solve new challenges, Python and TypeScript are Love.",
      image: {
        src: require('../assets/img/avatar.jpeg'),
        alt: "It's Me Here",
      }
    };
  },
};
</script>
