<script>
import { useRouter, useRoute } from "vue-router";
import { onMounted, ref } from "vue";
import Header from "@/components/Header.vue";
import Footer from "@/components/Footer.vue";
import { useI18n } from "vue-i18n";

export default {
  components: {
    Header,
    Footer,
  },
  setup() {
    const router = useRouter();
    const { t, locale } = useI18n();
    const currentSlide = ref(0);

    const setSlide = (index) => {
      currentSlide.value = index;
    };

    onMounted(() => {
      // FAQ accordion functionality
      const accordionItems = document.querySelectorAll('.accordion-item');
      
      accordionItems.forEach(item => {
        const title = item.querySelector('.accordion-title');
        const content = item.querySelector('.accordion-content');
        
        title.addEventListener('click', () => {
          title.classList.toggle('active');
          content.classList.toggle('show');
          
          accordionItems.forEach(otherItem => {
            if(otherItem !== item) {
              otherItem.querySelector('.accordion-title').classList.remove('active');
              otherItem.querySelector('.accordion-content').classList.remove('show');
            }
          });
        });
      });

      // Auto advance carousel
      setInterval(() => {
        currentSlide.value = (currentSlide.value + 1) % 3;
      }, 5000);
    });

    return {
      t,
      locale,
      currentSlide,
      setSlide
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
                  愛尼島是菲律賓最後一片淨土，擁有純淨的海灘、壯麗的石灰岩地形和豐富的海洋生態。
                  這裡不僅是度假天堂，更是充滿投資潛力的新興旅遊勝地。讓我們帶您探索愛尼島的無限可能。
                </p>
                <div class="banner-btn">
                  <a href="https://www.youtube.com/watch?v=wWgSuG3QPTo" target="_blank" class="banner-btn1 border-radius">探索愛尼島的無限可能</a>
                  <a href="contact.html" class="banner-btn2 border-radius mx-2">影片導覽</a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>

  <!-- Full Width Image -->
  <div class="full-width-image">
    <img src="https://placehold.co/1920x600?text=Beautiful+Ocean+View" alt="El Nido Panorama" class="w-100">
  </div>

  <!-- About Carousel -->
  <div class="about-carousel position-relative pt-100 pb-70">
    <div class="container">
      <div class="carousel-container">
        <div class="carousel-wrapper">
          <transition-group name="slide" mode="out-in">
            <div class="carousel-slide" v-show="currentSlide === 0" :key="0">
              <div class="row align-items-center">
                <div class="col-lg-6">
                  <img src="https://placehold.co/800x600?text=Island+Life" alt="Island Life" class="w-100 rounded shadow">
                </div>
                <div class="col-lg-6">
                  <div class="about-content">
                    <h2 class="mb-4">探索愛尼島的自然之美</h2>
                    <p class="lead">純淨的白沙灘、清澈的海水和豐富的海洋生態，這裡是您的度假天堂。</p>
                  </div>
                </div>
              </div>
            </div>

            <div class="carousel-slide" v-show="currentSlide === 1" :key="1">
              <div class="row align-items-center">
                <div class="col-lg-6">
                  <img src="https://placehold.co/800x600?text=Marine+Life" alt="Marine Life" class="w-100 rounded shadow">
                </div>
                <div class="col-lg-6">
                  <div class="about-content">
                    <h2 class="mb-4">豐富的海洋生態</h2>
                    <p class="lead">探索繽紛的珊瑚礁和海洋生物，體驗大自然的奧妙。</p>
                  </div>
                </div>
              </div>
            </div>

            <div class="carousel-slide" v-show="currentSlide === 2" :key="2">
              <div class="row align-items-center">
                <div class="col-lg-6">
                  <img src="https://placehold.co/800x600?text=Sunset+View" alt="Sunset View" class="w-100 rounded shadow">
                </div>
                <div class="col-lg-6">
                  <div class="about-content">
                    <h2 class="mb-4">令人屏息的日落美景</h2>
                    <p class="lead">在這裡，每天都能欣賞到最動人的日落景致。</p>
                  </div>
                </div>
              </div>
            </div>
          </transition-group>
        </div>

        <div class="carousel-dots">
          <span 
            v-for="n in 3" 
            :key="n"
            :class="['dot', { active: currentSlide === n - 1 }]"
            @click="setSlide(n - 1)"
          ></span>
        </div>
      </div>
    </div>
  </div>

  <!-- Full Width Image -->
  <div class="full-width-image">
    <img src="https://placehold.co/1920x600?text=Tropical+Paradise" alt="Tropical Paradise" class="w-100">
  </div>

  <!-- Service Area -->
  <section class="service-area-two ptb-100">
    <div class="container">
      <div class="section-title text-center mb-50">
        <span>投資愛尼島</span>
        <h2>探索愛尼島的無限投資潛力</h2>
        <p>
          愛尼島擁有得天獨厚的自然資源和發展優勢。這裡不僅有原始的自然生態系統，
          更有完善的基礎設施規劃。隨著旅遊業的蓬勃發展，愛尼島正逐步成為最具投資
          價值的度假勝地之一。
        </p>
      </div>

      <div class="row justify-content-center">
        <div class="col-lg-4 col-md-6">
          <div class="service-item box-shadow">
            <img src="https://placehold.co/400x300?text=Tourism" alt="Tourism" class="w-100 mb-4">
            <h3>觀光業蓬勃發展</h3>
            <p>愛尼島每年吸引超過百萬遊客到訪，旅遊業持續成長，為投資者帶來穩定收益。</p>
          </div>
        </div>

        <div class="col-lg-4 col-md-6">
          <div class="service-item box-shadow">
            <img src="https://placehold.co/400x300?text=Nature" alt="Nature" class="w-100 mb-4">
            <h3>優質自然資源</h3>
            <p>擁有原始海灘、珊瑚礁和熱帶雨林等豐富自然資源，適合發展生態旅遊。</p>
          </div>
        </div>

        <div class="col-lg-4 col-md-6">
          <div class="service-item box-shadow">
            <img src="https://placehold.co/400x300?text=Infrastructure" alt="Infrastructure" class="w-100 mb-4">
            <h3>完善基礎設施</h3>
            <p>政府持續投入基礎建設，包括機場擴建、道路優化等，大幅提升島嶼可及性。</p>
          </div>
        </div>
      </div>
    </div>
  </section>

  <!-- What's on El Nido -->
  <section class="whats-on ptb-100 bg-light">
    <div class="container">
      <div class="section-title text-center mb-50">
        <h2>What's on El Nido</h2>
      </div>
      
      <div class="row">
        <div class="col-lg-4 mb-4">
          <div class="news-item box-shadow">
            <img src="https://placehold.co/600x400?text=Sea+Turtle+Conservation" alt="Sea Turtle Conservation" class="w-100">
            <div class="p-4">
              <h3>海龜保育計畫取得重大進展</h3>
              <p>愛尼島的海龜保育工作獲得國際認可，成功保護多個瀕危物種。透過在地居民與保育團隊的共同努力，建立了完整的海龜棲息地保護網...</p>
              <a href="#" class="btn btn-primary">閱讀更多</a>
            </div>
          </div>
        </div>
        
        <div class="col-lg-4 mb-4">
          <div class="news-item box-shadow">
            <img src="https://placehold.co/600x400?text=Sustainable+Development" alt="Sustainable Development" class="w-100">
            <div class="p-4">
              <h3>國際媒體聚焦愛尼島永續發展</h3>
              <p>CNN報導：愛尼島如何平衡旅遊發展與環境保護，成為菲律賓生態旅遊的典範。透過創新的管理模式，實現經濟發展與環境永續...</p>
              <a href="#" class="btn btn-primary">閱讀更多</a>
            </div>
          </div>
        </div>

        <div class="col-lg-4 mb-4">
          <div class="news-item box-shadow">
            <img src="https://placehold.co/600x400?text=Business+Weekly+Interview" alt="Business Weekly Interview" class="w-100">
            <div class="p-4">
              <h3>Henry夫婦的愛尼島創業之路</h3>
              <p>商業周刊專訪：從台灣到愛尼島，Henry夫婦如何在這片淨土上開創事業，並致力於推動當地永續發展與文化保存...</p>
              <a href="#" class="btn btn-primary">閱讀更多</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>

  <Footer />
</template>

<style scoped>
.carousel-container {
  position: relative;
  overflow: hidden;
  min-height: 600px; /* 設定固定高度 */
}

.carousel-wrapper {
  position: absolute;
  width: 100%;
  height: 100%;
}

.carousel-slide {
  position: absolute;
  width: 100%;
  height: 100%;
}

.carousel-dots {
  position: absolute;
  bottom: -30px;
  left: 50%;
  transform: translateX(-50%);
  display: flex;
  gap: 10px;
}

.dot {
  width: 12px;
  height: 12px;
  border-radius: 50%;
  background-color: #ddd;
  cursor: pointer;
  transition: background-color 0.3s ease;
}

.dot.active {
  background-color: #333;
}

.slide-enter-active,
.slide-leave-active {
  transition: all 0.5s ease;
}

.slide-enter-from {
  opacity: 0;
  transform: translateX(100%);
}

.slide-leave-to {
  opacity: 0;
  transform: translateX(-100%);
}

.about-content {
  padding: 2rem;
}

.about-content h2 {
  color: #333;
  font-weight: bold;
}

.about-content .lead {
  color: #666;
  line-height: 1.6;
}

.carousel-slide img {
  transition: transform 0.3s ease;
}

.carousel-slide img:hover {
  transform: scale(1.02);
}
</style>
