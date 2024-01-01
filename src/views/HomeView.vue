<script setup>
import GitHubIcon from '@/components/icons/GitHubIcon.vue'
import GmailIcon from '@/components/icons/GmailIcon.vue'
import LinkedInIcon from '@/components/icons/LinkedInIcon.vue'

import { RouterLink } from 'vue-router'
import { Router } from '@/config'

const navigation = [
  { icon: LinkedInIcon, href: 'https://linkedin.com/in/amogh-madan' },
  { icon: GmailIcon, href: 'mailto:amoghmadaan@gmail.com' },
  { icon: GitHubIcon, href: 'https://github.com/amoghmadan' }
]
</script>

<template>
  <main class="container mx-auto p-8">
    <div class="flex justify-center text-3xl font-bold py-4">Amogh Madan</div>
    <div class="flex justify-center text-xl font-bold py-4">
      Welcome! Below are some links to reach out to me and see my work.
    </div>
    <div class="flex justify-center text-xl font-bold py-4">
      <RouterLink
        class="bg-content text-screen hover:bg-action font-bold py-2 px-4 rounded"
        :to="Router.ABOUT"
      >
        Know More
      </RouterLink>
    </div>
    <div class="flex justify-center items-center py-4">
      <a v-for="item in navigation" :href="item.href">
        <component :is="item.icon" />
      </a>
    </div>
  </main>
</template>
