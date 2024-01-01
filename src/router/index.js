import { createRouter, createWebHistory } from 'vue-router'

import { Router } from '@/config'
import HomeView from '@/views/HomeView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: Router.HOME,
      name: 'home',
      component: HomeView
    },
    {
      path: Router.ABOUT,
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/AboutView.vue')
    },
    {
      path: Router.EDUCATION,
      name: 'education',
      component: () => import('../views/EducationView.vue')
    },
    {
      path: Router.SKILLS,
      name: 'skills',
      component: () => import('../views/SkillsView.vue')
    },
    {
      path: Router.EXPERIENCE,
      name: 'experience',
      component: () => import('../views/ExperienceView.vue')
    },
    {
      path: Router.PROJECTS,
      name: 'projects',
      component: () => import('../views/ProjectsView.vue')
    },
    {
      path: Router.HTTP404,
      name: '404',
      component: () => import('../views/NotFoundView.vue')
    },
    {
      path: Router.ASTERISK,
      name: 'asterisk',
      component: () => import('../views/NotFoundView.vue')
    }
  ]
})

export default router
