import Vue from 'vue';
import VueRouter from 'vue-router';
import AdminLogin from '../views/AdminLogin.vue';
import AdminDashboard from '../views/AdminDashboard.vue';
import AddProduct from '../components/admin/AddProduct.vue';
// import store from '../store/index'

Vue.use(VueRouter);

const routes = [
  {
    path: '/admin/login',
    name: 'AdminLogin',
    component: AdminLogin,
  },
  {
    path: '/admin/dashboard',
    name: 'About',
    component: AdminDashboard,
    beforeEnter: (to, from, next) => {
      let token = localStorage.getItem('access_token')
      if (token) {
        next();
      } else{
        next({
          path: '/admin/login'
        });
      };
    },
    children:[
      {
        path:'add',
        component: AddProduct,
      }
    ]
  },
];

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
});

export default router;
