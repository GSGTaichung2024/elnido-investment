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

    onMounted(() => {
      // FAQ accordion functionality
      const accordionItems = document.querySelectorAll('.accordion-item');
      
      accordionItems.forEach(item => {
        const title = item.querySelector('.accordion-title');
        const content = item.querySelector('.accordion-content');
        
        title.addEventListener('click', () => {
          // Toggle active class on title
          title.classList.toggle('active');
          
          // Toggle show class on content
          content.classList.toggle('show');
          
          // Close other accordion items
          accordionItems.forEach(otherItem => {
            if(otherItem !== item) {
              otherItem.querySelector('.accordion-title').classList.remove('active');
              otherItem.querySelector('.accordion-content').classList.remove('show');
            }
          });
        });
      });
    });

    return {
      t,
      locale,
    };
  },
};
</script>

<template>
  <Header />

  <!-- Inner Banner -->
  <div class="inner-banner bg-shape3 bg-color3">
    <div class="d-table">
      <div class="d-table-cell">
        <div class="container">
          <div class="inner-title text-center">
            <h3>關於Hhotelgroup</h3>
            <ul>
              <li>
                <a href="index.html">首頁</a>
              </li>
              <li>
                <i class="fas fa-chevron-right"></i>
              </li>
              <li>
                開於我們
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </div>
  <!-- Inner Banner End -->

  <!-- About Details -->
  <div class="about-detl pt-100 pb-70">
    <div class="container">
      <div class="row justify-content-center">
        <div class="col-lg-10">
          <div class="section-title text-center mb-50">
            <h2>Hhotelgroup 經營理念</h2>
            <p>專注於高品質度假項目開發，融合在地文化與國際標準，打造獨特的度假體驗</p>
          </div>
        </div>
      </div>

      <div class="row">
        <div class="col-lg-4 col-md-6">
          <div class="single-features">
            <img src="https://placehold.co/600x400" alt="專注開發">
            <h3>專注於高品質度假項目開發</h3>
            <p>深耕東南亞度假市場多年，專注於高端度假物業開發，強調永續發展理念，重視在地文化融合。</p>
          </div>
        </div>

        <div class="col-lg-4 col-md-6">
          <div class="single-features">
            <img src="https://placehold.co/600x400" alt="文化溝通">
            <h3>獨特的文化溝通能力</h3>
            <p>擅長融合當地特色與國際標準，深入理解在地文化內涵，創造具有文化深度的度假體驗。</p>
          </div>
        </div>

        <div class="col-lg-4 col-md-6">
          <div class="single-features">
            <img src="https://placehold.co/600x400" alt="品牌影響力">
            <h3>強大的品牌影響力</h3>
            <p>擁有多個成功案例，獲得國際獎項認可，建立優質的品牌口碑，深受投資者信任。</p>
          </div>
        </div>
      </div>
    </div>
  </div>
  <!-- About Details End -->

  <!-- Business Development -->
  <section class="choose-area pt-100 pb-70 bg-color">
    <div class="container">
      <div class="section-title text-center mb-50">
        <h2>商業發展策略</h2>
        <p>多元化的項目開發與創新的營運模式</p>
      </div>

      <div class="row justify-content-center">
        <div class="col-lg-3 col-sm-6">
          <div class="choose-card">
            <img src="https://placehold.co/400" alt="精品度假村">
            <i class="flaticon-hotel"></i>
            <h3>精品度假村</h3>
            <p>打造獨特風格的精品度假體驗</p>
          </div>
        </div>

        <div class="col-lg-3 col-sm-6">
          <div class="choose-card">
            <img src="https://placehold.co/400" alt="豪華海景公寓">
            <i class="flaticon-building"></i>
            <h3>豪華海景公寓</h3>
            <p>擁有絕佳視野的居住空間</p>
          </div>
        </div>

        <div class="col-lg-3 col-sm-6">
          <div class="choose-card">
            <img src="https://placehold.co/400" alt="特色主題酒店">
            <i class="flaticon-resort"></i>
            <h3>特色主題酒店</h3>
            <p>結合在地特色的主題設計</p>
          </div>
        </div>

        <div class="col-lg-3 col-sm-6">
          <div class="choose-card">
            <img src="https://placehold.co/400" alt="綜合型度假區">
            <i class="flaticon-architecture"></i>
            <h3>綜合型度假區</h3>
            <p>一站式的度假生活體驗</p>
          </div>
        </div>
      </div>
    </div>
  </section>
  <!-- Business Development End -->

  <!-- Management Team -->
  <section class="trainers-area pt-100 pb-70">
    <div class="container">
      <div class="section-title text-center mb-50">
        <h2>專業的管理團隊</h2>
        <p>擁有豐富國際經驗的專業團隊，確保項目品質與營運效益</p>
      </div>

      <div class="row justify-content-center">
        <div class="col-lg-3 col-sm-6">
          <div class="trainer-card">
            <img src="https://placehold.co/400" alt="El Nido Images">
            <div class="trainer-content">
              <h3>Manager</h3>
              <span>主管1</span>
            </div>
          </div>
        </div>

        <div class="col-lg-3 col-sm-6">
          <div class="trainer-card">
            <img src="https://placehold.co/400" alt="El Nido Images">
            <div class="trainer-content">
              <h3>Manager</h3>
              <span>主管1</span>
            </div>
          </div>
        </div>

        <div class="col-lg-3 col-sm-6">
          <div class="trainer-card">
            <img src="https://placehold.co/400" alt="El Nido Images">
            <div class="trainer-content">
              <h3>Henry Hsu</h3>
              <span>開發總監</span>
            </div>
          </div>
        </div>

        <div class="col-lg-3 col-sm-6">
          <div class="trainer-card">
            <img src="https://placehold.co/400" alt="El Nido Images">
            <div class="trainer-content">
              <h3>Manager</h3>
              <span>主管1</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
  <!-- Management Team End -->

  <!-- Investment Protection -->
  <section class="faq-area pt-100 pb-70">
    <div class="container">
      <div class="section-title text-center mb-50">
        <h2>投資者權益保障</h2>
        <p>完善的法律保障與穩健的投資回報</p>
      </div>

      <div class="row justify-content-center">
        <div class="col-lg-6">
          <div class="faq-accordion">
            <div class="accordion-item">
              <h3 class="accordion-title">
                <i class="fas fa-balance-scale me-2"></i>
                完善的法律保障
              </h3>
              <div class="accordion-content">
                <ul style="list-style: none; text-align: center; padding: 0;">
                  <li>嚴格的合約制度</li>
                  <li>透明的交易流程</li>
                  <li>完整的產權保障</li>
                  <li>專業的法律諮詢</li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        <div class="col-lg-6">
          <div class="faq-accordion">
            <div class="accordion-item">
              <h3 class="accordion-title">
                <i class="fas fa-chart-line me-2"></i>
                穩健的投資回報
              </h3>
              <div class="accordion-content">
                <ul style="list-style: none; text-align: center; padding: 0;">
                  <li>多元化收益來源</li>
                  <li>專業資產管理</li>
                  <li>透明的收益分配</li>
                  <li>長期增值潛力</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
  <!-- Investment Protection End -->

  <Footer />
</template>
