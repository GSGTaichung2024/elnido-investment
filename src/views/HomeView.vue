<script>
import { useRouter, useRoute } from "vue-router";
import { onMounted, ref, onBeforeUnmount } from "vue";
import Header from "@/components/Header.vue";
import Footer from "@/components/Footer.vue";
import WhatOnElNido from "@/components/WhatOnElNido.vue";
import { useI18n } from "vue-i18n";
import { useTouch } from "@/composables/useTouch"; // Create this composable

export default {
  components: {
    Header,
    Footer,
    WhatOnElNido,
  },
  setup() {
    const router = useRouter();
    const { t, locale } = useI18n();
    const currentSlide = ref(0);
    const totalSlides = 4;
    let slideInterval;

    const setSlide = (index) => {
      if(index < 0){
        currentSlide.value = totalSlides - 1;
      }else if(index >= totalSlides){
        currentSlide.value = 0;
      }else{
        currentSlide.value = Number(index);
      }
    };

    const startSlideShow = () => {
      slideInterval = setInterval(() => {
        currentSlide.value = (currentSlide.value + 1) % totalSlides;
      }, 5000);
    };

    onMounted(() => {
      startSlideShow();
    });

    onBeforeUnmount(() => {
      if(slideInterval) {
        clearInterval(slideInterval);
      }
    });

    const { touchStart, touchMove, touchEnd } = useTouch((direction) => {
      // Swipe left moves to next slide
      if (direction === "left") {
        currentSlide.value = (currentSlide.value + 1) % totalSlides;
      }
      // Swipe right moves to previous slide
      else if (direction === "right") {
        currentSlide.value =
          (currentSlide.value - 1 + totalSlides) % totalSlides;
      }
      // Reset interval after manual navigation
      clearInterval(slideInterval);
      startSlideShow();
    });

    return {
      t,
      locale,
      currentSlide,
      setSlide,
      touchStart,
      touchMove,
      touchEnd,
    };
  },
};
</script>

<template>
  <Header />

  <!-- Banner Area -->
  <div class="banner-area bg-shape2">
    <div class="d-table">
      <div class="d-table-cell">
        <div class="container-fluid m-0 p-0">
          <div class="row align-items-center justify-content-center">
            <div class="col-lg-6 text-right float-right">
              <div class="banner-content">
                <h2>探索無限潛力的旅遊天堂</h2>
                <p>
                  愛妮島是菲律賓最後一片淨土，擁有純淨的海灘、壯麗的石灰岩地形和豐富的海洋生態。
                  這裡不僅是度假天堂，更是充滿投資潛力的新興旅遊勝地。讓我們帶您探索愛妮島的無限可能。
                </p>
                <div class="banner-btn">
                  <a
                    href="https://www.youtube.com/watch?v=wWgSuG3QPTo"
                    target="_blank"
                    class="banner-btn1 border-radius"
                    >探索愛妮島的無限可能</a
                  >

                  <a
                    href="https://line.me/R/ti/p/@elnido888"
                    target="_blank"
                    class="banner-btn1 border-radius"
                    style="background-color: #4cc764; margin: 0 10px;"
                    >Line專人詢問</a
                  >
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  <!-- About Carousel -->
  <div
    class="about-carousel position-relative pt-100 pb-70"
    @touchstart.prevent="touchStart"
    @touchmove.prevent="touchMove"
    @touchend.prevent="touchEnd"
  >
    <div class="container">
      <div class="carousel-container">
        <div class="carousel-wrapper">
          <transition-group name="slide"  mode="out-in">
            <div class="carousel-slide" v-show="currentSlide === 0" :key="0">
              <div class="row align-items-center">
                <div class="col-lg-6">
                  <img
                    src="/assets/img/home_island.webp"
                    alt="Island Life"
                    class="w-100 rounded shadow"
                  />
                </div>
                <div class="col-lg-6">
                  <div class="about-content">
                    <h2 class="mb-4">探索愛妮島的自然之美</h2>
                    <p class="lead">
                      純淨的白沙灘、清澈的海水和豐富的海洋生態，這裡是您的度假天堂。
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div class="carousel-slide" v-show="currentSlide === 1" :key="1">
              <div class="row align-items-center">
                <div class="col-lg-6">
                  <img
                    src="/assets/img/home_environment.webp"
                    alt="Marine Life"
                    class="w-100 rounded shadow"
                  />
                </div>
                <div class="col-lg-6">
                  <div class="about-content">
                    <h2 class="mb-4">優質自然資源</h2>
                    <p class="lead">
                      探索繽紛的珊瑚礁和海洋生物，體驗大自然的奧妙。
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div class="carousel-slide" v-show="currentSlide === 2" :key="2">
              <div class="row align-items-center">
                <div class="col-lg-6">
                  <img
                    src="/assets/img/home_sunset.webp"
                    alt="Sunset View"
                    class="w-100 rounded shadow"
                  />
                </div>
                <div class="col-lg-6">
                  <div class="about-content">
                    <h2 class="mb-4">令人屏息的日落美景</h2>
                    <p class="lead">在這裡，每天都能欣賞到最動人的日落景致。</p>
                  </div>
                </div>
              </div>
            </div>

            <div class="carousel-slide" v-show="currentSlide === 3" :key="3">
              <div class="row align-items-center">
                <div class="col-lg-6">
                  <img
                    src="/assets/img/home-infra.jpeg"
                    alt="Sunset View"
                    class="w-100 rounded shadow"
                  />
                </div>
                <div class="col-lg-6">
                  <div class="about-content">
                    <h2 class="mb-4">完善基礎設施</h2>
                    <p class="lead">政府持續投入基礎建設，包括機場擴建、道路優化等，大幅提升島嶼可及性。</p>
                  </div>
                </div>
              </div>
            </div>
          </transition-group>
        </div>

        <div class="carousel-dots">
          <span
            v-for="n in 4"
            :key="n"
            :class="['dot', { active: currentSlide === n - 1 }]"
            @click="setSlide(n - 1)"
          ></span>
        </div>

        <div class="carousel-controls">
          <button @click="setSlide(currentSlide - 1)">
            <i class="fas fa-arrow-left"></i>
          </button>
          <button @click="setSlide(currentSlide + 1)">
            <i class="fas fa-arrow-right"></i>
          </button>
        </div>
      </div>
    </div>
  </div>

  <!-- Full Width Image -->
  <div class="full-width-image">
    <img
      src="/assets/img/home_full_image2.jpg"
      alt="Tropical Paradise"
      class="w-100"
      style="height: 700px; object-fit: cover; object-position: center center"
    />
  </div>

  <!-- Service Area -->
  <section class="service-area-two ptb-100">
    <div class="container">
      <div class="section-title text-center mb-50">
        <span>為什麼選擇愛妮島</span>
        <h2>探索愛妮島的無限投資潛力</h2>
        <p>
          愛妮島擁有得天獨厚的自然資源和發展優勢。這裡不僅有原始的自然生態系統，
          更有完善的基礎設施規劃。隨著旅遊業的蓬勃發展，愛妮島正逐步成為最具投資
          價值的度假勝地之一。
        </p>
      </div>

      <div class="row justify-content-center">
        <div class="col-lg-4 col-md-6">
          <div class="service-item box-shadow">
            <img
              src="/assets/img/home-tourism.png"
              alt="Tourism"
              class="w-100 mb-4"
              style="height: 250px; object-fit: cover"
            />
            <h3>觀光業蓬勃發展</h3>
            <p>
              愛妮島的遊客人數一直穩步增長，觀光人數7年成長700%，從2014年6.39萬人躍升至2024年預計60萬人
            </p>
          </div>
        </div>


        <div class="col-lg-4 col-md-6">
          <div class="service-item box-shadow">
            <img
              src="/assets/img/tourist-destination.png"
              alt="Tourism"
              class="w-100 mb-4"
              style="height: 250px; object-fit: cover"
            />
            <h3>市場潛力無限</h3>
            <p>
              在4小時飛行距離內，約有6億潛在旅客，目前僅有207家酒店、3100間房間，發展淺力巨大。
            </p>
          </div>
        </div>


        <div class="col-lg-4 col-md-6">
          <div class="service-item box-shadow">
            <img
              src="/assets/img/international-destination.png"
              alt="Tourism"
              class="w-100 mb-4"
              style="height: 250px; object-fit: cover"
            />
            <h3>國際級旅遊目的地</h3>
            <p>
              愛妮島以294,065名遊客到訪量排名第一，Nacpan海灘躋身全球20大最美海灘之列，被譽為「亞洲馬爾地夫」。
            </p>
          </div>
        </div>

      </div>
    </div>
  </section>

  <!-- Latest Properties -->
  <section class="latest-properties ptb-100">
    <div class="container">
      <div class="section-title text-center mb-50">
        <h2>最新物業項目</h2>
      </div>

      <div class="row">
        <div class="col-lg-6 mb-4">
          <div class="property-item box-shadow">
            <a href="/projects/mu-hotel">
              <img
                src="/assets/img/muhotel/1.jpg"
                alt="Mu Nacpan Beach"
                class="w-100"
              />
              <div class="p-4">
                <h3 class="muhotel-text">Mu Nacpan Beach</h3>
                <p>
                  位於愛妮島頂級海景區，Mu
                  Hotel以精心設計面海視野，建築量體以水平展開方式規劃，並融入當地地形特色，創造獨特的建築美學。配備無邊際泳池、SPA中心等完整度假設施，由專業酒店管理團隊進駐營運。
                </p>
                <p style="color: gray; font-size: 0.9em; margin-top: 10px;">
                  預售中，僅需85萬台幣頭期款即可入主，預計回報7-9%，適合想擁有海景第一排地產的你。<br/>
                  NT$8,500,000起
                </p>

              </div>
            </a>
          </div>
        </div>

        <div class="col-lg-6 mb-4">
          <div class="property-item box-shadow">
            <a href="/projects/piecelio">
              <img
                src="/assets/img/home_piecelio.webp"
                alt="Piecelio"
                class="w-100"
              />
              <div class="p-4">
                <h3>Piece Lio</h3>
                <p>
                  愛妮島最具特色的投資標的，由國際知名建築團隊打造，融合熱帶度假風格與現代簡約設計。採用環保建材與永續理念，配備空中花園、無邊際泳池等頂級設施，為您提供絕佳的居住與投資價值。
                </p>
                <p style="color: gray; font-size: 0.9em; margin-top: 10px;">
                  專為高資產客戶打造，現已成屋，投資回報率達8-12%，立即入主尊享海景奢華生活。<br>
                  NT$12,000,000台幣起
                </p>
              </div>
            </a>
          </div>
        </div>
      </div>
    </div>
  </section>

  <!-- Full Width Image -->
  <div class="full-width-image">
    <img
      src="/assets/img/home_full_image3.jpg"
      alt="Tropical Paradise"
      class="w-100"
      style="height: 700px; object-fit: cover; object-position: center center"
    />
  </div>

  <WhatOnElNido />

  <Footer />
</template>
