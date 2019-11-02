import Vue from "vue";
import VueRouter from "vue-router";
//import Home from "../views/Home.vue";
 import Login from "../components/Login.vue";
 import Register from "../components/Register.vue";
import Home from "../components/Home.vue";
import serviceDetail from "../views/ServiceDetail.vue";
import service from "../views/Service";
import serviceUpload from "../views/ServiceUpload.vue";
import serviceEdit from "../views/ServiceEdit.vue";
import AdminService from "../views/AdminServiceView";
import AdminHome from "../components/AdminHome";
import ServiceLocation from "../views/ServiceLocation"
Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "home",
    component: Home
  },
  {
    path:"/adminService",
    name:"adminService",
    component:AdminService,
    meta: {
      requiresAuth: true
    }
  },
  {
    path:"/adminHome",
    name:"adminHome",
    component:AdminHome,
    meta: {
      requiresAuth: true
    }
  },
  {
    path:"/serviceUpload",
    name:"serviceUpload",
    component:serviceUpload,
    meta: {
      requiresAuth: true
    }
  },
  {
    path:"/serviceLocation",
    name:"serviceLocation",
    component:ServiceLocation,
  },
  {
path:"/serviceEdit",
name:"serviceEdit",
component:serviceEdit,
meta: {
  requiresAuth: true
}
  },
   {
     path:"/login",
    name:"Login",
     component:Login
   },
   {
    path:"/register",
   name:"register",
    component:Register
  },
   {
     path:"/serviceDetail",
     name:"serviceDetail",
     component:serviceDetail
   },
   {
path:"/service",
name:"service",
component:service
   },
  {
    path: "/about",
    name: "about",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/About.vue")
  }
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes
});
router.beforeEach((to, from, next) => {
  if (to.matched.some(record => record.meta.requiresAuth)) {
  if (!localStorage.getItem('token')) {
    next({
      path: '/login',
      query: { redirect: to.fullPath }
    })
  } else {
    next()
  }
}
else{
  next() 
}
});

export default router;
