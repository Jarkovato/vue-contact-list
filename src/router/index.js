import Vue from 'vue'
import VueRouter from 'vue-router'
import SearchList from '../components/SearchList'
import EditContact from '../components/EditContact'
import CreateContact from '../components/CreateContact'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Searchlist',
    component: SearchList
  },
  {
    path: '/contact/:id',
    props: true,
    name: 'EditContact',
    component: EditContact
  },
  {
    path: '/new',
    name: 'CreateContact',
    component: CreateContact
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
