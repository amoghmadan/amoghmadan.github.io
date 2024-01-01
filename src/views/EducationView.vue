<script setup>
const education = [
  {
    organization: 'Narsee Monjee Institiute of Management Studies',
    href: 'https://www.nmims.edu',
    field: 'PGDBM',
    from: 'JUL 2020',
    to: 'JUN 2022',
    description: 'Marketing Management'
  },
  {
    organization: 'GD Goenka University',
    href: 'https://www.gdgoenkauniversity.com',
    field: 'Bachelor of Technology',
    from: 'JUL 2014',
    to: 'JUN 2018',
    description: 'Computer Science and Engineering'
  }
]
</script>

<template>
  <main class="container mx-auto p-8">
    <div class="flex justify-center items-center font-bold text-3xl">Education</div>
    <div class="flex justify-center items-center py-2">
      <table class="table-auto">
        <thead>
          <tr>
            <th class="hidden">Logo / Experience</th>
            <th class="hidden">Logo / Experience</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="(item, index) in education">
            <td v-if="index % 2 === 0"></td>
            <td v-else>
              <h1 class="text-xl">
                <a class="hover:text-action" :href="item.href">{{ item.organization }}</a>
              </h1>
              <p class="text-lg">{{ item.field }} [{{ item.from }} - {{ item.to }}]</p>
              <p class="text-sm">{{ item.description }}</p>
            </td>
            <td v-if="index % 2 === 0">
              <h1 class="text-xl">
                <a class="hover:text-action" :href="item.href">{{ item.organization }}</a>
              </h1>
              <p class="text-lg">{{ item.field }} [{{ item.from }} - {{ item.to }}]</p>
              <p class="text-sm">{{ item.description }}</p>
            </td>
            <td v-else></td>
          </tr>
        </tbody>
      </table>
    </div>
  </main>
</template>
