<script setup>
import { computed } from 'vue'

const projects = computed(() => [
  {
    name: 'Table2XSV',
    language: 'Python',
    years: new Date().getFullYear() - 2018,
    site: 'PyPI',
    link: 'https://pypi.org/project/Table2XSV'
  },
  {
    name: 'Table2JSON',
    language: 'Python',
    years: new Date().getFullYear() - 2019,
    site: 'PyPI',
    link: 'https://pypi.org/project/Table2JSON'
  },
  {
    name: 'OpenViduConnect',
    language: 'Python',
    years: new Date().getFullYear() - 2021,
    site: 'PyPI',
    link: 'https://pypi.org/project/openviduconnect'
  }
])
</script>

<template>
  <main class="container mx-auto p-8">
    <div class="flex justify-center items-center font-bold text-3xl">Projects</div>
    <div class="flex justify-center items-center py-2">
      <table class="table-auto border-separate">
        <thead>
          <tr>
            <th
              class="border-2 border-content"
              v-for="item in ['Project', 'Language', 'Created', 'Available On']"
            >
              {{ item }}
            </th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="item in projects">
            <td class="border-b border-content">{{ item.name }}</td>
            <td class="border-b border-content">{{ item.language }}</td>
            <td class="border-b border-content">{{ item.years }} Years Ago</td>
            <td class="border-b border-content">
              <a class="hover:text-action" :href="item.link">{{ item.site }}</a>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  </main>
</template>
