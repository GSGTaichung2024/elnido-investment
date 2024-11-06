<template>
  <!-- Start Preloader -->
  <div class="preloader">
    <div class="preloader-wave"></div>
  </div>
  <!-- End Preloader -->

  <!-- Start Navbar Area -->
  <div class="navbar-area">
    <!-- Menu For Mobile Device -->
    <div class="mobile-nav">
      <a href="index.html" class="logo">
        <img src="/assets/img/logo.png" alt="Logo" />
      </a>
    </div>

    <!-- Menu For Desktop Device -->
    <div class="main-nav nav-top">
      <div class="container">
        <nav class="navbar navbar-expand-md navbar-light">
          <a class="navbar-brand" href="index.html">
            <img src="/assets/img/logo.png" alt="Logo" />
          </a>
          <div
            class="collapse navbar-collapse mean-menu"
            id="navbarSupportedContent"
          >
            <ul class="navbar-nav m-auto">
              <li class="nav-item">
                <a href="#" class="nav-link active">
                  Home
                  <i class="fas fa-chevron-right"></i>
                </a>
                <ul class="dropdown-menu">
                  <li class="nav-item">
                    <a href="index.html" class="nav-link"> Home One </a>
                  </li>
                  <li class="nav-item">
                    <a href="index-two.html" class="nav-link active">
                      Home Two
                    </a>
                  </li>
                </ul>
              </li>
              <li class="nav-item">
                <a href="#" class="nav-link">
                  Pages
                  <i class="fas fa-chevron-right"></i>
                </a>
                <ul class="dropdown-menu">
                  <li class="nav-item">
                    <a href="appointments.html" class="nav-link">
                      Book Appointments
                    </a>
                  </li>
                  <li class="nav-item">
                    <a href="instructor.html" class="nav-link"> Instructor </a>
                  </li>
                  <li class="nav-item">
                    <a href="courses.html" class="nav-link"> Courses </a>
                  </li>
                  <li class="nav-item">
                    <a href="pricing.html" class="nav-link"> Pricing </a>
                  </li>
                  <li class="nav-item">
                    <a href="testimonials.html" class="nav-link">
                      Testimonials
                    </a>
                  </li>
                  <li class="nav-item">
                    <a href="terms-condition.html" class="nav-link">
                      Terms & Conditions
                    </a>
                  </li>
                  <li class="nav-item">
                    <a href="privacy-policy.html" class="nav-link">
                      Privacy Policy
                    </a>
                  </li>
                  <li class="nav-item">
                    <a href="404.html" class="nav-link"> 404 Page </a>
                  </li>
                  <li class="nav-item">
                    <a href="faq.html" class="nav-link"> FAQ </a>
                  </li>
                  <li class="nav-item">
                    <a href="login.html" class="nav-link"> Log In </a>
                  </li>
                  <li class="nav-item">
                    <a href="register.html" class="nav-link"> Register </a>
                  </li>
                </ul>
              </li>
              <li class="nav-item">
                <a href="about.html" class="nav-link"> About </a>
              </li>
              <li class="nav-item">
                <a href="#" class="nav-link">
                  Services
                  <i class="fas fa-chevron-right"></i>
                </a>
                <ul class="dropdown-menu">
                  <li class="nav-item">
                    <a href="services.html" class="nav-link"> Services </a>
                  </li>
                  <li class="nav-item">
                    <a href="service-details.html" class="nav-link">
                      Service Details
                    </a>
                  </li>
                </ul>
              </li>
              <li class="nav-item">
                <a href="gallery.html" class="nav-link"> Gallery </a>
              </li>
              <li class="nav-item">
                <a href="#" class="nav-link">
                  News
                  <i class="fas fa-chevron-right"></i>
                </a>
                <ul class="dropdown-menu">
                  <li class="nav-item">
                    <a href="news.html" class="nav-link"> News </a>
                  </li>
                  <li class="nav-item">
                    <a href="news-details.html" class="nav-link">
                      News Details
                    </a>
                  </li>
                </ul>
              </li>
              <li class="nav-item">
                <a href="#" class="nav-link">
                  Shop
                  <i class="fas fa-chevron-right"></i>
                </a>
                <ul class="dropdown-menu">
                  <li class="nav-item">
                    <a href="shop.html" class="nav-link"> Shop </a>
                  </li>
                  <li class="nav-item">
                    <a href="cart.html" class="nav-link"> Cart </a>
                  </li>
                  <li class="nav-item">
                    <a href="checkout.html" class="nav-link"> Checkout </a>
                  </li>
                  <li class="nav-item">
                    <a href="shop-details.html" class="nav-link">
                      Shop Details
                    </a>
                  </li>
                </ul>
              </li>
              <li class="nav-item">
                <a href="contact.html" class="nav-link"> Contact </a>
              </li>
            </ul>

            <div class="other-side">
              <div class="search-area">
                <div class="other-option">
                  <div class="search-item">
                    <a href="#" class="search-btn">
                      <i class="flaticon-magnifying-glass"></i>
                    </a>
                    <i class="close-btn fas fa-times"></i>
                    <div class="search-overlay search-popup">
                      <div class="search-box">
                        <form class="search-form">
                          <input
                            class="search-input"
                            name="search"
                            placeholder="Search"
                            type="text"
                          />
                          <button class="search-button" type="submit">
                            <i class="flaticon-magnifying-glass"></i>
                          </button>
                        </form>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div class="search-text">Search</div>

              <div class="cart-area">
                <a class="cart-icon" href="cart.html">
                  <i class="flaticon-shopping-cart"></i>
                  <p>Cart <span>(2)</span></p>
                </a>
              </div>

              <div class="modal-menu">
                <a
                  href="#"
                  class="burger-menu"
                  data-bs-toggle="modal"
                  data-bs-target="#myModal2"
                >
                  <i class="flaticon-menu"></i>
                </a>
              </div>
            </div>
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
              <a href="index.html">
                <img src="/assets/img/logo.png" alt="Logo" />
              </a>
            </h2>
          </div>

          <div class="modal-body">
            <div class="sidebar-modal-widget">
              <h3 class="title">About Us</h3>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Commodi, asperiores doloribus eum laboriosam praesentium
                delectus unde magni aut perspiciatis cumque deserunt dolore
                voluptate, autem pariatur.
              </p>
            </div>
            <div class="sidebar-modal-widget">
              <h3 class="title">Additional Links</h3>
              <ul>
                <li>
                  <a href="log-in.html">Log In</a>
                </li>
                <li>
                  <a href="sign-up.html">Sign Up</a>
                </li>
                <li>
                  <a href="faq.html">FAQ</a>
                </li>
                <li>
                  <a href="log-in.html">Logout</a>
                </li>
              </ul>
            </div>

            <div class="sidebar-modal-widget">
              <h3 class="title">Contact Info</h3>
              <ul class="contact-info">
                <li>
                  <i class="fas fa-map-marker-alt"></i>
                  Address
                  <span>28/A street, New York, USA</span>
                </li>
                <li>
                  <i class="far fa-envelope"></i>
                  Email
                  <span>email@dobby.com</span>
                </li>
                <li>
                  <i class="fas fa-mobile-alt"></i>
                  Phone
                  <span>+1 123 456 789, +1 123 454 699</span>
                </li>
              </ul>
            </div>

            <div class="sidebar-modal-widget">
              <h3 class="title">Connect With Us</h3>
              <ul class="social-list">
                <li>
                  <a href="https://www.facebook.com/login/" target="_blank">
                    <i class="fab fa-facebook-f"></i>
                  </a>
                </li>
                <li>
                  <a href="https://twitter.com/i/flow/login" target="_blank">
                    <i class="fab fa-twitter"></i>
                  </a>
                </li>
                <li>
                  <a
                    href="https://www.instagram.com/accounts/login/?hl=en"
                    target="_blank"
                  >
                    <i class="fab fa-instagram"></i>
                  </a>
                </li>
                <li>
                  <a href="https://www.google.com/" target="_blank">
                    <i class="fab fa-google-plus-g"></i>
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
    };
  },
};
</script>
