<script setup>
import { computed } from 'vue'

const skills = computed(() => [
  { name: 'Python', projects: 14, years: new Date().getFullYear() - 2018, rating: 5 },
  { name: 'MySQL', projects: 14, years: new Date().getFullYear() - 2018, rating: 4 },
  { name: 'Django', projects: 11, years: new Date().getFullYear() - 2019, rating: 5 },
  { name: 'Flask', projects: 1, years: new Date().getFullYear() - 2023, rating: 5 },
  { name: 'Node', projects: 1, years: new Date().getFullYear() - 2018, rating: 3 },
  { name: 'Express', projects: 1, years: new Date().getFullYear() - 2018, rating: 3 },
  { name: 'React', projects: 1, years: new Date().getFullYear() - 2018, rating: 2 },
  { name: 'Vue', projects: 1, years: new Date().getFullYear() - 2018, rating: 1 },
  { name: 'MongoDB', projects: 1, years: new Date().getFullYear() - 2023, rating: 2 },
  { name: 'NGINX', projects: 6, years: new Date().getFullYear() - 2020, rating: 3 },
  { name: 'Docker', projects: 4, years: new Date().getFullYear() - 2019, rating: 3 }
])
</script>

<template>
  <main class="container mx-auto p-8">
    <div class="flex justify-center items-center font-bold text-3xl">Skills</div>
    <div class="flex justify-center items-center py-2">
      <table class="table-auto border-separate">
        <thead>
          <tr>
            <th
              class="border-2 border-content"
              v-for="item in ['Technology', 'Projects', 'Experience', 'Rating']"
            >
              {{ item }}
            </th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="item in skills">
            <td class="border-b border-content">{{ item.name }}</td>
            <td class="border-b border-content">{{ item.projects }}</td>
            <td class="border-b border-content">{{ item.years }} Years</td>
            <td class="border-b border-content">
              <span class="text-action" v-for="_ in item.rating">&star;</span>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  </main>
</template>
