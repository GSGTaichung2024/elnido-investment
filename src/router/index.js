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
      path: "/:locale(eng|zh_TW|zh_CN)?/company",
      name: "company",
      component: () => import("../views/CompanyView.vue"),
    }
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
