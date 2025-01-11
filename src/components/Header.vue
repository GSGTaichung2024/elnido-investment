<template>
  <!-- Start Navbar Area -->
  <div class="navbar-area">
    <!-- Menu For Mobile Device -->
    <div class="mobile-nav mean-container">
      <div class="mean-bar">
        <a @click="toggleDropdown()" class="meanmenu-reveal" style="right: 0; left: auto"
          ><span
            ><span><span></span></span></span
        ></a>
        <nav class="mean-nav">
          <ul class="navbar-nav m-auto" :class="isToggle ? `active` : ``">
            <li class="nav-item">
              <a
                href="/"
                :class="[
                  'nav-link',
                  currentRouteName === 'home' ? 'active' : '',
                ]"
                >首頁</a
              >
            </li>
            <li class="nav-item">
              <a
                href="/why-elnido"
                :class="[
                  'nav-link',
                  currentRouteName === 'WhyElindo' ? 'active' : '',
                ]"
                >為什麼選擇愛妮島</a
              >
            </li>
            <li class="nav-item">
              <a
                @click="subMenuOpen('projects')"
                :class="[
                  'nav-link',
                  currentRouteName.includes('projects') ? 'active' : '',
                ]"
              >
                投資項目
                <i class="fas fa-chevron-right"></i>
              </a>
              <ul class="dropdown-menu" :class="isSubMenuOpen == 'projects' ? 'active' : ''">
                <li class="nav-item">
                  <a
                    href="/projects/piecelio"
                    :class="[
                      'nav-link',
                      currentRouteName === 'ProjectsPiecelio' ? 'active' : '',
                    ]"
                    >Piece Lio</a
                  >
                </li>
                <li class="nav-item">
                  <a
                      href="/projects/mu-hotel"
                      :class="[
                        'nav-link',
                        currentRouteName === 'MuHotel' ? 'active' : '',
                      ]"
                      >Mu Nacpan Beach</a
                    >
                </li>
              </ul>
              <a class="mean-expand" @click="subMenuOpen('projects')"
              style="font-size: 24px">+</a>
            </li>
            <li class="nav-item">
              <a
                href="/about"
                :class="[
                  'nav-link',
                  currentRouteName.includes('about') ? 'active' : '',
                ]"
                >關於我們</a
              >
            </li>
            <li class="nav-item">
              <a
                href="/faq"
                :class="[
                  'nav-link',
                  currentRouteName === 'FAQ' ? 'active' : '',
                ]"
                >常見問題</a
              >
            </li>
            <li class="nav-item mean-last">
              <a
                href="/contact"
                :class="[
                  'nav-link',
                  currentRouteName === 'Contact' ? 'active' : '',
                ]"
                >聯絡我們</a
              >
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
            <img
              src="/assets/img/elnido_logo_2.webp"
              alt="Logo"
              class="logo-img"
            />
          </a>
          <div
            class="collapse navbar-collapse mean-menu"
            id="navbarSupportedContent"
          >
            <ul class="navbar-nav m-auto">
              <li class="nav-item">
                <a
                  href="/"
                  :class="[
                    'nav-link',
                    currentRouteName === 'home' ? 'active' : '',
                  ]"
                  >首頁</a
                >
              </li>
              <li class="nav-item">
                <a
                  href="/why-elnido"
                  :class="[
                    'nav-link',
                    currentRouteName === 'WhyElindo' ? 'active' : '',
                  ]"
                  >為什麼選擇愛妮島</a
                >
              </li>
              <li class="nav-item">
                <a
                  href="#"
                  :class="[
                    'nav-link',
                    currentRouteName.includes('projects') ? 'active' : '',
                  ]"
                >
                  投資項目
                  <i class="fas fa-chevron-right"></i>
                </a>
                <ul class="dropdown-menu">
                  <li class="nav-item">
                    <a
                      href="/projects/piecelio"
                      :class="[
                        'nav-link',
                        currentRouteName === 'ProjectsPiecelio' ? 'active' : '',
                      ]"
                      >Piece Lio</a
                    >
                  </li>
                  <li class="nav-item">
                    <a
                      href="/projects/mu-hotel"
                      :class="[
                        'nav-link',
                        currentRouteName === 'MuHotel' ? 'active' : '',
                      ]"
                      >Mu Nacpan Beach</a
                    >
                  </li>
                </ul>
              </li>
              <li class="nav-item">
                <a
                  href="/about"
                  :class="[
                    'nav-link',
                    currentRouteName === 'About' ? 'active' : '',
                  ]"
                >
                  關於我們
                </a>
              </li>
              <li class="nav-item">
                <a
                  href="/faq"
                  :class="[
                    'nav-link',
                    currentRouteName === 'FAQ' ? 'active' : '',
                  ]"
                  >常見問題</a
                >
              </li>
              <li class="nav-item">
                <a
                  href="/contact"
                  :class="[
                    'nav-link',
                    currentRouteName === 'Contact' ? 'active' : '',
                  ]"
                  >聯絡我們</a
                >
              </li>

              <li class="nav-item">
                <a
                  href="https://line.me/R/ti/p/@elnido888"
                  target="_blank"
                  class="nav-link"
                  >Line詢問</a
                >
              </li>
            </ul>
          </div>
        </nav>
      </div>
    </div>
  </div>
  <!-- End Navbar Area -->


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
    const isToggle = ref(false)
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
    const isSubMenuOpen = ref('')

    const toggleDropdown = () => {
      isToggle.value = !isToggle.value
    };

    const subMenuOpen = (menuName) => {
      if(menuName == isSubMenuOpen.value){
        isSubMenuOpen.value = ''
      }else{
        isSubMenuOpen.value = menuName
      }
    }

    const isHome = computed(() => {
      return route.name === "home";
    });

    const currentRouteName = computed(() => {
      return route.name || "";
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

      if (window.location.hostname === "localhost") {
        window.location.href = newPath;
      } else {
        window.location.href = `https://elnido888.com${newPath}`;
      }
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

      if (window.location.hostname === "localhost") {
        window.location.href = newPath;
      } else {
        window.location.href = `https://elnido888.com${newPath}`;
      }
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
      isToggle,
      toggleDropdown,
      subMenuOpen,
      isSubMenuOpen
    };
  },
};
</script>
