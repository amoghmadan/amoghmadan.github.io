<script setup>
const articles = [
  {
    website: 'Techno FAQ',
    links: [
      {
        name: 'Thinking Which Linux Distribution You Should Choose?',
        href: 'https://technofaq.org/posts/2017/03/thinking-which-linux-distribution-you-should-choose/'
      },
      {
        name: 'Thinking Which BSD Flavour You Should Choose?',
        href: 'https://technofaq.org/posts/2017/06/thinking-which-bsd-flavour-you-should-choose/'
      }
    ]
  }
]
</script>

<template>
  <main class="container mx-auto p-8">
    <div class="flex items-center justify-center font-bold text-3xl py-2">About</div>
    <div class="flex items-center justify-center py-2">
      Hello! I'm Amogh Madan, a seasoned software engineer with over
      {{ new Date().getFullYear() - 2018 }}+ years of hands-on experience in the dynamic realm of
      backend development. My passion lies in crafting robust and scalale solutions that power the
      digital world. I embarked on my software engineering journey 2018, and since then, I have
      immersed myself in the intricacies of backend development. From designing efficient databases
      to implementing complex algorithms, I thrive in the challenges that come with building the
      backbone of cutting-edge applicaitons.
    </div>
    <div class="flex items-center justify-center py-2">
      I am not just a coder; I am a team player. Throughout my career I've had the privilege of
      collaborating with diverse teams, fostering an environment of mutual learning and shared
      success. I value open communication and believe that collective brilliance often leads to
      extraordinary results.
    </div>
    <div class="flex items-center justify-center py-2">
      In the fast-paced world of technology, I understand the importance of staying ahead. I am
      committed to continuous learning, staying abreast of the latest industry trends, and embracing
      new tools and methodologies to enhance my skill set. Feel free to take a look at some of my
      articles.
    </div>
    <div class="flex items-center justify-center py-2">
      <div v-for="item in articles">
        <h1 class="flex items-center justify-center font-bold text-xl">{{ item.website }}</h1>
        <ul>
          <li class="list-disc" v-for="link in item.links">
            <a class="hover:text-action" :href="link.href">{{ link.name }}</a>
          </li>
        </ul>
      </div>
    </div>
  </main>
</template>
