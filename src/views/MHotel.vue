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
  <div class="inner-banner bg-shape3 bg-color4">
    <div class="d-table">
      <div class="d-table-cell">
        <div class="container">
          <div class="inner-title text-center">
            <h1>暫名M海岸旅館</h1>
            <h3>愛妮島頂級海景度假投資標的</h3>
          </div>
        </div>
      </div>
    </div>
  </div>

  <!-- Project Features -->
  <div class="features-area pt-100 pb-70 bg-light">
    <div class="container">
      <div class="section-title text-center mb-50">
        <h2>頂級海景規劃設計</h2>
      </div>

      <div class="row">
        <div class="col-lg-6">
          <div class="feature-content">
            <h3>建築設計特色</h3>
            <ul>
              <li>精心設計的面海視野，每個單位都能享有壯麗的海景</li>
              <li>建築量體以水平展開方式規劃，最大化海景視野</li>
              <li>空間規劃強調與自然環境的和諧共存</li>
              <li>融入當地地形特色，創造獨特的建築美學</li>
            </ul>
          </div>
        </div>

        <div class="col-lg-6">
          <div class="feature-content">
            <h3>多元房型規劃</h3>
            <ul>
              <li>精緻套房 - 適合個人或情侶入住</li>
              <li>家庭式套房 - 舒適寬敞的家庭空間</li>
              <li>豪華海景房 - 擁有最佳視野位置</li>
              <li>彈性投資方案 - 提供純投資及自住兼投資模式</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </div>

  <!-- Facilities Section -->
  <div class="facilities-area pt-100 pb-70 bg-white">
    <div class="container">
      <div class="section-title text-center mb-50">
        <h2>完整度假設施</h2>
      </div>
      <div class="row">
        <div class="col-lg-3 col-sm-6">
          <div class="single-facility">
            <img src="https://placehold.co/400x300" alt="無邊際泳池">
            <h3>無邊際泳池</h3>
          </div>
        </div>
        <div class="col-lg-3 col-sm-6">
          <div class="single-facility">
            <img src="https://placehold.co/400x300" alt="SPA中心">
            <h3>SPA中心</h3>
          </div>
        </div>
        <div class="col-lg-3 col-sm-6">
          <div class="single-facility">
            <img src="https://placehold.co/400x300" alt="特色餐廳">
            <h3>特色餐廳</h3>
          </div>
        </div>
        <div class="col-lg-3 col-sm-6">
          <div class="single-facility">
            <img src="https://placehold.co/400x300" alt="多功能宴會廳">
            <h3>多功能宴會廳</h3>
          </div>
        </div>
      </div>
    </div>
  </div>

  <!-- Investment Benefits -->
  <div class="benefits-area pt-100 pb-70 bg-light">
    <div class="container">
      <div class="section-title text-center mb-50">
        <h2>投資優勢分析</h2>
      </div>
      <div class="row">
        <div class="col-lg-4">
          <div class="benefit-card">
            <i class="fas fa-map-marker-alt fa-2x mb-3"></i>
            <h3>區位優勢</h3>
            <ul>
              <li>位於愛妮島重要發展區域</li>
              <li>鄰近主要景點及碼頭</li>
              <li>便捷的交通網絡</li>
            </ul>
          </div>
        </div>
        <div class="col-lg-4">
          <div class="benefit-card">
            <i class="fas fa-chart-line fa-2x mb-3"></i>
            <h3>專業管理</h3>
            <ul>
              <li>專業酒店管理團隊進駐</li>
              <li>24小時禮賓服務</li>
              <li>租賃管理一條龍服務</li>
            </ul>
          </div>
        </div>
        <div class="col-lg-4">
          <div class="benefit-card">
            <i class="fas fa-home fa-2x mb-3"></i>
            <h3>市場前景</h3>
            <ul>
              <li>愛妮島旅遊業持續成長</li>
              <li>國際旅客需求增加</li>
              <li>資產增值空間可期</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </div>

  <!-- Gallery Section -->
  <div class="gallery-area pt-100 pb-70 bg-white">
    <div class="container">
      <div class="section-title text-center mb-50">
        <h2>建案實景展示</h2>
      </div>
      <div class="row">
        <div class="col-lg-4 col-md-6">
          <div class="gallery-item">
            <img src="https://placehold.co/600x400" alt="海景房示意圖">
            <div class="gallery-content">
              <h3>豪華海景房</h3>
            </div>
          </div>
        </div>
        <div class="col-lg-4 col-md-6">
          <div class="gallery-item">
            <img src="https://placehold.co/600x400" alt="公共設施">
            <div class="gallery-content">
              <h3>度假設施</h3>
            </div>
          </div>
        </div>
        <div class="col-lg-4 col-md-6">
          <div class="gallery-item">
            <img src="https://placehold.co/600x400" alt="特色服務">
            <div class="gallery-content">
              <h3>特色服務</h3>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>

  <Footer />
</template>
