import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import About from '../views/About.vue'
import Blog from '../views/Blog.vue'
import Contact from '../views/Contact.vue'
import Home_Ja from '../views/Home_Ja'
import About_Ja from '../views/About_Ja'
import Contact_Ja from '../views/Contact_Ja'
import NotFound from '../views/NotFound.vue'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/about',
    name: 'About',
    component: About
  },
  {
    path: '/blog',
    name: 'Blog',
    component: Blog
  },
  {
    path: '/contact',
    name: 'Contact',
    component: Contact
  },
  {
    path: '/home_ja',
    name: 'Home_Ja',
    component: Home_Ja
  },
  {
    path: '/about_ja',
    name: 'About_Ja',
    component: About_Ja
  },
  {
    path: '/contact_ja',
    name: 'Contact_Ja',
    component: Contact_Ja
  },
  {
    path: '/:catchAll(.*)',
    name: 'NotFound',
    component: NotFound
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
