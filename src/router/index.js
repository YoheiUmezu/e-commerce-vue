import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../components/Home.vue'
import Menu from '../components/Menu.vue'
import Admin from '../components/Admin.vue'
import About from '../components/About.vue'
import Contact from '../components/Contact.vue'
import History from '../components/History.vue'
import Delivery from '../components/Delivery.vue'
import OrderingGuide from '../components/OrderingGuide.vue'

Vue.use(VueRouter)

const routes = [
  //不明なURLに行った時は全部ホーム画面にリダイレクトする
  {
    path: '*',
    redirect: '/'
  },
  {
    path: '/',
    name: 'homeLink',
    components: {
      default: Home,
      'ordering-guide': OrderingGuide,
      'delivery': Delivery,
      'history': History
    }
  }, 
  {
    path: '/menu',
    name: 'menuLink',
    component: Menu
  },
  {
    path: '/contact',
    name: 'contactLink',
    component: Contact
  },
  {
    path: '/admin',
    name: 'adminLink',
    component: Admin,
    beforeEnter: (to, from, next) => {
      alert('This alert is for authorized user only, please login to continue.')
      next()
    }
  },
  {
    path: '/about',
    name: 'aboutLink',
    component: About,
    children: [
      {
        path: '/history',
        name: 'historyLink',
        component: History,
      },
      {
        path: '/delivery',
        name: 'deliveryLink',
        component: Delivery,
      },
      {
        path: '/ordering-guide',
        name: 'orderingGuideLink',
        component: OrderingGuide,
      }
    ]
  },
  // {
  //   path: '/menu/:items',
  //   name: 'Menu',
  //   component: Menu
  // },
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  }
]

// router.beforeEach((to, from, next) => {
//   // alert('navigation triggered')
//   // next(false)
//   if(to.path == '/menu') {
//     next()
//   } else {
//     next(false)
//   }
// })

// router.afterEach(() => {
//   alert('after each')
// })

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
  // スクロールされた場所から始まる
  // scrollBehavior(to) {
  //     // return { x: 0, y: 200}
  //     // id=basketの位置から始まる
  //     // return { selector: '.basket' }
  //     if(to.hash) {
  //       return { selector: to.hash }
  //     }
  //     else {
  //       return { x: 0, y: 0 }
  //     }
  // }
})

export default router
