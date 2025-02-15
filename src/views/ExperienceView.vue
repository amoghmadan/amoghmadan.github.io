<script setup>
const experience = [
  {
    organization: 'One Impression',
    href: 'https://oneimpression.io/',
    role: 'Senior Backend Engineer',
    from: 'JUN 2024',
    to: 'PRESENT',
    tech: ['Python', 'Django', 'FastAPI', 'React', 'Docker', 'NGINX']
  },
  {
    organization: 'Tech Mahindra',
    href: 'https://www.techmahindra.com',
    role: 'Senior Software Engineer',
    from: 'SEP 2023',
    to: 'JUN 2024',
    tech: ['Python', 'Django', 'React', 'Docker']
  },
  {
    organization: 'Innova Solutions',
    href: 'https://www.innovasolutions.com',
    role: 'Senior Software Engineer',
    from: 'JUL 2021',
    to: 'AUG 2023',
    tech: ['Python', 'Flask', 'Django', 'React', 'Next', 'Docker', 'NGINX']
  },
  {
    organization: 'AuthBridge',
    href: 'https://authbridge.com',
    role: 'Software Engineer',
    from: 'NOV 2019',
    to: 'JUL 2021',
    tech: ['Python', 'Selenium', 'Django', 'Docker', 'NGINX']
  },
  {
    organization: 'Boston Analytics',
    href: 'https://bostonanalytics.com',
    role: 'Associate Software Engineer',
    from: 'JAN 2018',
    to: 'NOV 2019',
    tech: ['Python', 'Requests', 'Scrapy', 'Selenium', 'Flask', 'Django']
  }
]
</script>

<template>
  <main class="container mx-auto p-8">
    <div class="flex justify-center items-center font-bold text-3xl">Experience</div>
    <div class="flex justify-center items-center py-2">
      <table class="table-auto">
        <thead>
          <tr>
            <th class="hidden">Logo / Experience</th>
            <th class="hidden">Logo / Experience</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="(item, index) in experience">
            <td v-if="index % 2 === 0"></td>
            <td v-else>
              <h1 class="text-xl">
                <a class="hover:text-action" :href="item.href">{{ item.organization }}</a>
              </h1>
              <p class="text-lg">{{ item.role }} [{{ item.from }} - {{ item.to }}]</p>
              <p class="text-sm">Technologies: {{ item.tech.join(', ') }}</p>
            </td>
            <td v-if="index % 2 === 0">
              <h1 class="text-xl">
                <a class="hover:text-action" :href="item.href">{{ item.organization }}</a>
              </h1>
              <p class="text-lg">{{ item.role }} [{{ item.from }} - {{ item.to }}]</p>
              <p class="text-sm">Technologies: {{ item.tech.join(', ') }}</p>
            </td>
            <td v-else></td>
          </tr>
        </tbody>
      </table>
    </div>
  </main>
</template>
