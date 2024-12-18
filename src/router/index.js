import { createRouter, createWebHistory } from "vue-router";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/:locale(eng|zh_TW|zh_CN)?/",
      name: "home",
      component: () => import("../views/HomeView.vue"),
    },
    {
      path: "/:locale(eng|zh_TW|zh_CN)?/why-elnido",
      name: "WhyElindo",
      component: () => import("../views/WhyElnido.vue"),
    },
    {
      path: "/:locale(eng|zh_TW|zh_CN)?/projects/piecelio",
      name: "ProjectsPiecelio", 
      component: () => import("../views/PieceLio.vue"),
    },
    {
      path: "/:locale(eng|zh_TW|zh_CN)?/projects/mu-hotel",
      name: "MuHotel", 
      component: () => import("../views/MUHotel.vue"),
    },
    {
      path: "/:locale(eng|zh_TW|zh_CN)?/about",
      name: "About", 
      component: () => import("../views/About.vue"),
    },
    {
      path: "/:locale(eng|zh_TW|zh_CN)?/faq",
      name: "Faq", 
      component: () => import("../views/faq.vue"),
    },
    {
      path: "/:locale(eng|zh_TW|zh_CN)?/contact",
      name: "Contact", 
      component: () => import("../views/Contact.vue"),
    },
  ],
  scrollBehavior(to, from, savedPosition) {
    if (savedPosition) {
      return savedPosition;
    } else {
      return { top: 0 };
    }
  },
});

router.beforeEach((to, from, next) => {
  const locale = to.params.locale || localStorage.getItem('locale');
  if (!locale) {
    const defaultLocale = 'zh_TW'; // 或者您想要的默認語言
    return next(`/${defaultLocale}${to.path}`);
  }
  next();
});

export default router;
