<template>
  <!-- Start Navbar Area -->
  <div class="navbar-area">
    <!-- Menu For Mobile Device -->
    <div class="mobile-nav mean-container">
      <div class="mean-bar">
        <a href="#nav" class="meanmenu-reveal" style="background:;color:;right:0;left:auto;"><span><span><span></span></span></span></a>
        <nav class="mean-nav">
          <ul class="navbar-nav m-auto" style="display: none;">
            <li class="nav-item">
              <a href="/" :class="['nav-link', currentRouteName === 'home' ? 'active' : '']">首頁</a>
            </li>
            <li class="nav-item">
              <a href="/why-elnido" :class="['nav-link', currentRouteName === 'WhyElindo' ? 'active' : '']">為什麼選擇愛尼島</a>
            </li>
            <li class="nav-item">
              <a href="#" :class="['nav-link', currentRouteName.includes('projects') ? 'active' : '']">
                投資項目
                <i class="fas fa-chevron-right"></i>
              </a>
              <ul class="dropdown-menu" style="display: none;">
                <li class="nav-item">
                  <a href="/projects/piecelio" :class="['nav-link', currentRouteName === 'ProjectsPiecelio' ? 'active' : '']">Piecelio</a>
                </li>
                <li class="nav-item">
                  <a href="/projects/m-hotel" :class="['nav-link', currentRouteName === 'ProjectsMHotel' ? 'active' : '']">暱名M海岸旅館</a>
                </li>
              </ul>
              <a class="mean-expand" href="#" style="font-size: 24px">+</a>
            </li>
            <li class="nav-item">
              <a href="#" :class="['nav-link', currentRouteName.includes('about') ? 'active' : '']">
                關於我們
                <i class="fas fa-chevron-right"></i>
              </a>
              <ul class="dropdown-menu" style="display: none;">
                <li class="nav-item">
                  <a href="/about/hhotelgroup" :class="['nav-link', currentRouteName === 'AboutHhotelgroup' ? 'active' : '']">hhotelgroup</a>
                </li>
                <li class="nav-item">
                  <a href="/about/piece-hostel" :class="['nav-link', currentRouteName === 'AboutPieceHostel' ? 'active' : '']">Piece Hostel</a>
                </li>
              </ul>
              <a class="mean-expand" href="#" style="font-size: 24px">+</a>
            </li>
            <li class="nav-item">
              <a href="/faq" :class="['nav-link', currentRouteName === 'FAQ' ? 'active' : '']">常見問題</a>
            </li>
            <li class="nav-item mean-last">
              <a href="/contact" :class="['nav-link', currentRouteName === 'Contact' ? 'active' : '']">聯絡我們</a>
            </li>
          </ul>
        </nav>
      </div>
      <a href="/" class="logo">
        <img src="/assets/img/elnido_logo_2.webp" alt="Logo" class="logo-img" />
      </a>
    </div>

    <!-- Menu For Desktop Device -->
    <div class="main-nav nav-top">
      <div class="container">
        <nav class="navbar navbar-expand-md navbar-light">
          <a class="navbar-brand" href="/">
            <img src="/assets/img/elnido_logo_2.webp" alt="Logo" class="logo-img" />
          </a>
          <div class="collapse navbar-collapse mean-menu" id="navbarSupportedContent">
            <ul class="navbar-nav m-auto">
              <li class="nav-item">
                <a href="/" :class="['nav-link', currentRouteName === 'home' ? 'active' : '']">首頁</a>
              </li>
              <li class="nav-item">
                <a href="/why-elnido" :class="['nav-link', currentRouteName === 'WhyElindo' ? 'active' : '']">為什麼選擇愛尼島</a>
              </li>
              <li class="nav-item">
                <a href="#" :class="['nav-link', currentRouteName.includes('projects') ? 'active' : '']">
                  投資項目
                  <i class="fas fa-chevron-right"></i>
                </a>
                <ul class="dropdown-menu">
                  <li class="nav-item">
                    <a href="/projects/piecelio" :class="['nav-link', currentRouteName === 'ProjectsPiecelio' ? 'active' : '']">Piecelio</a>
                  </li>
                  <li class="nav-item">
                    <a href="/projects/m-hotel" :class="['nav-link', currentRouteName === 'ProjectsMHotel' ? 'active' : '']">暱名M海岸旅館</a>
                  </li>
                </ul>
              </li>
              <li class="nav-item">
                <a href="#" :class="['nav-link', currentRouteName.includes('about') ? 'active' : '']">
                  關於我們
                  <i class="fas fa-chevron-right"></i>
                </a>
                <ul class="dropdown-menu">
                  <li class="nav-item">
                    <a href="/about/hhotelgroup" :class="['nav-link', currentRouteName === 'AboutHhotelgroup' ? 'active' : '']">hhotelgroup</a>
                  </li>
                  <li class="nav-item">
                    <a href="/about/piece-hostel" :class="['nav-link', currentRouteName === 'AboutPieceHostel' ? 'active' : '']">Piece Hostel</a>
                  </li>
                </ul>
              </li>
              <li class="nav-item">
                <a href="/faq" :class="['nav-link', currentRouteName === 'FAQ' ? 'active' : '']">常見問題</a>
              </li>
              <li class="nav-item">
                <a href="/contact" :class="['nav-link', currentRouteName === 'Contact' ? 'active' : '']">聯絡我們</a>
              </li>
            </ul>


          </div>
        </nav>
      </div>
    </div>
  </div>
  <!-- End Navbar Area -->

  <!-- Start Sidebar Modal -->
  <div class="sidebar-modal">
    <div
      class="modal right fade"
      id="myModal2"
      tabindex="-1"
      role="dialog"
      aria-labelledby="myModalLabel2"
      aria-hidden="true"
    >
      <div class="modal-dialog" role="document">
        <div class="modal-content">
          <div class="modal-header">
            <button
              type="button"
              class="close"
              data-bs-dismiss="modal"
              aria-label="Close"
            >
              <span aria-hidden="true">
                <i class="fas fa-times"></i>
              </span>
            </button>
            <h2 class="modal-title" id="myModalLabel2">
              <a href="/">
                <img src="/assets/img/elnido_logo_2.webp" alt="Logo" class="logo-img" />
              </a>
            </h2>
          </div>

          <div class="modal-body">
            <div class="sidebar-modal-widget">
              <h3 class="title">關於我們</h3>
              <p>
                我們致力於在愛尼島打造永續發展的優質住宿體驗，結合自然環境與現代設計，為您提供最佳的投資與度假選擇。
              </p>
            </div>
            <div class="sidebar-modal-widget">
              <h3 class="title">快速連結</h3>
              <ul>
                <li>
                  <a href="/faq">常見問題</a>
                </li>
                <li>
                  <a href="/contact">聯絡我們</a>
                </li>
              </ul>
            </div>

            <div class="sidebar-modal-widget">
              <h3 class="title">聯絡資訊</h3>
              <ul class="contact-info">
                <li>
                  <i class="fas fa-map-marker-alt"></i>
                  地址
                  <span>菲律賓愛尼島</span>
                </li>
                <li>
                  <i class="far fa-envelope"></i>
                  Email
                  <span>contact@elnido-investment.com</span>
                </li>
                <li>
                  <i class="fab fa-line"></i>
                  LINE
                  <span>@elnido-investment</span>
                </li>
              </ul>
            </div>

            <div class="sidebar-modal-widget">
              <h3 class="title">社群媒體</h3>
              <ul class="social-list">
                <li>
                  <a href="https://www.facebook.com/elnidoinvestment" target="_blank">
                    <i class="fab fa-facebook-f"></i>
                  </a>
                </li>
                <li>
                  <a href="https://www.instagram.com/elnidoinvestment" target="_blank">
                    <i class="fab fa-instagram"></i>
                  </a>
                </li>
                <li>
                  <a href="https://line.me/elnidoinvestment" target="_blank">
                    <i class="fab fa-line"></i>
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  <!-- End Sidebar Modal -->
</template>

<script>
import { useI18n } from "vue-i18n";
import { ref, onMounted, computed } from "vue";
import { useRouter, useRoute } from "vue-router";

export default {
  name: "Header",
  setup() {
    const { t, locale } = useI18n();
    const route = useRoute();
    const router = useRouter();

    const localeOptions = ref([
      {
        lang: "eng",
        name: "English",
      },
      {
        lang: "zh_TW",
        name: "繁中",
      },
      {
        lang: "zh_CN",
        name: "簡中",
      },
    ]);

    const isHome = computed(() => {
      return route.name === "home";
    });

    const currentRouteName = computed(() => {
      return route.name || '';
    });

    const urlSetLocale = (lang) => {
      const currentPath = route.path;
      const currentName = route.name;
      const currentParams = route.params;

      let newPath = `/${lang}`;

      if (currentName) {
        const matchedRoute = route.matched[route.matched.length - 1];
        if (matchedRoute) {
          newPath += matchedRoute.path.replace(/^\/[^\/]+/, "");
        }

        if (Object.keys(currentParams).length > 0) {
          for (const [key, value] of Object.entries(currentParams)) {
            if (key !== "locale") {
              newPath = newPath.replace(`:${key}`, value);
            }
          }
        }
      } else {
        newPath = currentPath.replace(/^\/[^\/]+/, `/${lang}`);
      }

      window.location.href = newPath;
    };

    const setLocale = (lang) => {
      locale.value = lang;
      localStorage.setItem("locale", lang);

      const currentPath = route.path;
      const currentName = route.name;
      const currentParams = route.params;

      let newPath = `/${lang}`;

      if (currentName) {
        const matchedRoute = route.matched[route.matched.length - 1];
        if (matchedRoute) {
          newPath += matchedRoute.path.replace(/^\/[^\/]+/, "");
        }

        if (Object.keys(currentParams).length > 0) {
          for (const [key, value] of Object.entries(currentParams)) {
            if (key !== "locale") {
              newPath = newPath.replace(`:${key}`, value);
            }
          }
        }
      } else {
        newPath = currentPath.replace(/^\/[^\/]+/, `/${lang}`);
      }

      window.location.href = newPath;
    };

    onMounted(() => {
      const urlLocale = route.params.locale;
      const storedLocale = localStorage.getItem("locale");

      if (!urlLocale && !storedLocale) {
        setLocale("zh_TW");
      } else if (urlLocale && urlLocale !== storedLocale) {
        setLocale(urlLocale);
      } else if (!urlLocale && storedLocale) {
        locale.value = storedLocale;
      }
    });

    return {
      t,
      locale,
      setLocale,
      urlSetLocale,
      localeOptions,
      isHome,
      currentRouteName,
    };
  },
};
</script>
