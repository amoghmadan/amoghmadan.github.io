<template>
  <main role="main" class="inner cover">
    <h1 class="cover-heading">
      <img :src="image.src" :alt="image.alt" height="250" width="250" />
    </h1>
    <p class="lead">{{ description }}</p>
    <dl v-for="dataElement in dataList" :key="dataElement.header">
      <dt>{{ dataElement.header }}</dt>
      <dd v-for="article in dataElement.articles" :key="article.url">
        <a :href="article.url" target="_blank">{{ article.title }}</a>
      </dd>
    </dl>
  </main>
</template>

<script>
export default {
  name: 'AppMain',
  data() {
    return {
      description: 'I am a Software Developer looking forward to solve new challenges, Python and TypeScript are Love.',
      image: {
        src: require('../assets/img/avatar.jpeg'),
        alt: 'It\'s Me Here',
      },
      dataList: [
        {
          header: 'Articles on TechnoFAQ',
          articles: [
            {
              title: 'Thinking Which Linux Distribution You Should Choose?',
              url: 'https://technofaq.org/posts/2017/03/thinking-which-linux-distribution-you-should-choose/'
            },
            {
              title: 'Thinking Which BSD Flavour You Should Choose?',
              url: 'https://technofaq.org/posts/2017/06/thinking-which-bsd-flavour-you-should-choose/'
            },
          ],
        },
      ],
    };
  },
};
</script>
