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
  <div class="inner-banner bg-shape3" style="background-image: url('/assets/img/muhotel/1.jpg'); background-size: cover; background-position: center;">
    <div class="d-table">
      <div class="d-table-cell">
        <div class="container">
          <div class="inner-title text-center property-banner">
            <h1>Mu Nacpan Beach</h1>
            <h5 class="my-2">愛妮島頂級海景度假投資標的</h5>
          </div>
        </div>
      </div>
    </div>
  </div>

  <!-- Project Features -->
  <div class="features-area pt-100 pb-70 bg-light muhotel-text">
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
  <div class="facilities-area pt-100 bg-white muhotel-text">
    <div class="container">
      <div class="section-title text-center mb-50">
        <h2>完整度假設施</h2>
      </div>
      <div class="row">
        <div class="col-lg-4 col-sm-6">
          <div class="single-facility">
            <img src="/assets/img/muhotel/1.jpg" alt="無邊際泳池">
            <h5 class="my-2">無邊際泳池</h5>
          </div>
        </div>
        <div class="col-lg-4 col-sm-6">
          <div class="single-facility">
            <img src="/assets/img/muhotel/2.jpg" alt="SPA中心">
            <h5 class="my-2">SPA中心</h5>
          </div>
        </div>
        <div class="col-lg-4 col-sm-6">
          <div class="single-facility">
            <img src="/assets/img/muhotel/3.jpg" alt="特色餐廳">
            <h5 class="my-2">特色餐廳</h5>
          </div>
        </div>

        <div class="col-12 mt-5">
          <p class="text-center">
            本文件中所提供的內容及圖片僅供參考用途，所有信息及數據均基於當前掌握的資料進行整理和解釋，不具有法律約束力。最終內容以實際簽署的合約或官方文件為準，且開發商保留對內容進行修改、更新或調整的權利，恕不另行通知。我們不對因使用本文件內容而引起的任何直接或間接損失承擔責任。
          </p>
        </div>

      </div>
    </div>
  </div>

  <!-- ROI Section -->
  <div class="rooms-area pt-100 bg-white">
    <div class="container">
      <div class="row">
        <div class="col-12 col-md-6">
          <div class="room-card">
            <img
              src="/assets/img/roi_formula.webp"
              alt="ROI_formula"
              class="w-100"
              style="height: 300px; object-fit: cover"
            />
          </div>
        </div>
        <div class="col-12 col-md-6">
          <div class="room-card">
            <div class="room-content">
              <h5 style="margin-top: 100px;">報酬率計算</h5>
              <p style="color: gray; margin-top: 10px;">
                  預售中，僅需85萬台幣頭期款即可入主，預計回報7-9%，適合想擁有海景第一排地產的你。<br/>
                  NT$8,500,000起
                </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>

  <!-- Official Website Section -->
  <div class="official-website-area py-5">
    <div class="container">
      <div class="row justify-content-center">
        <div class="col-lg-6 col-12">
          <div class="website-card text-center box-shadow p-5 my-2">
            <h3 class="mb-4">訪問 Piecelio 官方網站</h3>
            <p class="mb-4">探索更多關於我們的建案特色、設施配備等詳細資訊</p>
            <a href="https://piecelio.com" target="_blank" class="btn btn-primary btn-lg">
              前往官方網站
            </a>
          </div>
        </div>

        <div class="col-lg-6 col-12">
          <div class="website-card text-center box-shadow p-5 my-2">
            <h3 class="mb-4">詢問專人</h3>
            <p class="mb-4">了解更多物件、法規、投報率等詳細資訊</p>
            <a href="https://line.me/R/ti/p/@elnido888" target="_blank" class="btn btn-primary btn-lg"  style="background-color: #4cc764; border: none;" >
              Line專人詢問
            </a>
          </div>
        </div>
      </div>
    </div>
  </div>


  <Footer />
</template>
