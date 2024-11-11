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
  <div class="inner-banner bg-shape1 bg-color1">
    <div class="d-table">
      <div class="d-table-cell">
        <div class="conatiner">
          <div class="inner-title text-center">
            <h3>愛妮島投資機會</h3>
            <ul>
              <li>
                <a href="index.html">首頁</a>
              </li>
              <li>
                <i class="fas fa-chevron-right"></i>
              </li>
              <li>
                關於愛妮島
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
      <div class="common-dtel-img">
        <img src="/assets/img/about/about-detl.jpg" alt="El Nido Images">
      </div>
      <div class="row justify-content-center">
        <div class="col-lg-8">
          <div class="common-dtel-text">
            <h2>愛妮島 - 您的下一個投資新機遇</h2>
            <p>
              愛妮島正處於蓬勃發展階段，其旅遊市場展現出巨大的增長潛力。根據觀光數據顯示，近年來到訪遊客持續上升，年增長率保持在30%以上。
              這樣的成長趨勢預期將持續維持，為投資者提供絕佳的市場切入時機。
            </p>
            <p>
              當地政府正積極推動基礎設施的現代化建設，包括機場擴建工程，提升國際航班容量；道路系統優化，改善島內交通網絡；
              供水供電系統升級，確保穩定供應。這些基礎建設的完善，將大幅提升愛妮島的投資價值。
            </p>
            <p>
              投資愛妮島不僅是購置一處度假物業，更是參與這座美麗島嶼未來發展的良機。隨著愛妮島旅遊業的蓬勃發展，現在正是投資的最佳時機。
            </p>
          </div>
        </div>

        <div class="col-lg-4">
          <div class="common-offer">
            <div class="drive-img">
              <img src="/assets/img/drive.png" alt="Investment">
            </div>
            <div class="common-offer-text">
              <h3>了解投資機會</h3>
              <a href="#" class="call-btn">立即諮詢</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  <!-- About Details End -->

  <!-- Projects Area -->
  <section class="product-area pt-100 pb-70">
    <div class="container">
      <div class="section-title text-center mb-50">
        <span>精選建案</span>
        <h2>頂級投資標的</h2>
        <p>
          為您精選愛妮島最具潛力的投資建案，結合優質地段與專業規劃，
          打造最佳投資組合。
        </p>
      </div>
      <div class="row justify-content-center">
        <div class="col-lg-6 col-sm-6">
          <div class="product-item">
            <a href="project-details.html">
              <!-- <img src="/assets/img/product/piecelio.jpg" alt="Piecelio"> -->
              <img src="/assets/img/about/about-detl.jpg" alt="El Nido Images">
            </a>
            <div class="product-cotent">
              <div class="product-text">
                <a href="project-details.html"> 
                  <h3>Piecelio</h3>
                </a>
                <span>精品度假村</span>
              </div>
              <a href="project-details.html" class="add-product">
                <i class="flaticon-plus"></i>
              </a>
            </div>
          </div>
        </div>

        <div class="col-lg-6 col-sm-6">
          <div class="product-item">
            <a href="project-details.html">
              <!-- <img src="/assets/img/product/m-coast.jpg" alt="M海岸旅館"> -->
              <img src="/assets/img/about/about-detl.jpg" alt="El Nido Images">
            </a>
            <div class="product-cotent">
              <div class="product-text">
                <a href="project-details.html"> 
                  <h3>M海岸旅館</h3>
                </a>
                <span>海濱度假村</span>
              </div>
              <a href="project-details.html" class="add-product">
                <i class="flaticon-plus"></i>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
  <!-- Projects Area End -->

  <!-- Team Area -->
  <section class="trainers-area pt-100 pb-70">
    <div class="container">
      <div class="section-title text-center mb-50">
        <span>開發團隊</span>
        <h2>專業開發商：hhotelgroup</h2>
        <p>
          擁有豐富的度假村開發與管理經驗，在東南亞地區建立良好品牌信譽，
          專業團隊確保項目品質與進度。
        </p>
      </div>
      <div class="row justify-content-center">
        <div class="col-lg-3 col-sm-6">
          <div class="trainer-card">
            <a href="team-details.html">
              <!-- <img src="/assets/img/team/1.jpg" alt="Team Images"> -->
              <img src="/assets/img/about/about-detl.jpg" alt="El Nido Images">
            </a>
            <div class="trainer-content">
              <a href="team-details.html">
                <h3>John Chen</h3>
              </a>
              <span>執行長</span>
              <div class="social-icon">
                <ul>
                  <li>
                    <a href="https://www.linkedin.com/" target="_blank">
                      <i class="fab fa-linkedin"></i>
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        <div class="col-lg-3 col-sm-6">
          <div class="trainer-card">
            <a href="team-details.html">
              <!-- <img src="/assets/img/team/2.jpg" alt="Team Images"> -->
              <img src="/assets/img/about/about-detl.jpg" alt="El Nido Images">
            </a>
            <div class="trainer-content">
              <a href="team-details.html">
                <h3>Sarah Lin</h3>
              </a>
              <span>設計總監</span>
              <div class="social-icon">
                <ul>
                  <li>
                    <a href="https://www.linkedin.com/" target="_blank">
                      <i class="fab fa-linkedin"></i>
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        <div class="col-lg-3 col-sm-6">
          <div class="trainer-card">
            <a href="team-details.html">
              <!-- <img src="/assets/img/team/3.jpg" alt="Team Images"> -->
              <img src="/assets/img/about/about-detl.jpg" alt="El Nido Images">
            </a>
            <div class="trainer-content">
              <a href="team-details.html">
                <h3>Michael Wang</h3>
              </a>
              <span>開發總監</span>
              <div class="social-icon">
                <ul>
                  <li>
                    <a href="https://www.linkedin.com/" target="_blank">
                      <i class="fab fa-linkedin"></i>
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        <div class="col-lg-3 col-sm-6">
          <div class="trainer-card">
            <a href="team-details.html">
              <!-- <img src="/assets/img/team/4.jpg" alt="Team Images"> -->
              <img src="/assets/img/about/about-detl.jpg" alt="El Nido Images">
            </a>
            <div class="trainer-content">
              <a href="team-details.html">
                <h3>Lisa Zhang</h3>
              </a>
              <span>投資顧問</span>
              <div class="social-icon">
                <ul>
                  <li>
                    <a href="https://www.linkedin.com/" target="_blank">
                      <i class="fab fa-linkedin"></i>
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
  <!-- Team Area End -->

  <!-- News Area -->
  <section class="news-area pb-70">
    <div class="container">
      <div class="section-title text-center mb-50">
        <span>最新消息</span>
        <h2>愛妮島發展動態</h2>
        <p>
          掌握愛妮島最新發展資訊，了解投資機會與市場動向。
        </p>
      </div>
      <div class="row justify-content-center">
        <div class="col-lg-4 col-md-6">
          <div class="news-card">
            <div class="news-img">
              <a href="news-details.html">
                <!-- <img src="/assets/img/news/airport.jpg" alt="News Images"> -->
                <img src="/assets/img/about/about-detl.jpg" alt="El Nido Images">
              </a>
              <div class="sub-text">
                <a href="news-details.html">基礎建設</a>
              </div>
            </div>
            <ul>
              <li>
                <a href="news-details.html">基礎建設部</a> 
              </li>
              <li>2024年3月</li>
            </ul>
            <div class="news-content">
              <a href="news-details.html">
                <h3>愛妮島機場擴建工程啟動</h3>
              </a>
              <p>
                為提升國際航班容量，愛妮島機場擴建工程正式展開，
                預計2025年完工。
              </p>
              <a href="news-details.html" class="news-icon">
                閱讀更多
              </a>
            </div>
          </div>
        </div>

        <div class="col-lg-4 col-md-6">
          <div class="news-card">
            <div class="news-img">
              <a href="news-details.html">
                <!-- <img src="/assets/img/news/tourism.jpg" alt="News Images"> -->
                <img src="/assets/img/about/about-detl.jpg" alt="El Nido Images">
              </a>
              <div class="sub-text">
                <a href="news-details.html">旅遊發展</a>
              </div>
            </div>
            <ul>
              <li>
                <a href="news-details.html">觀光局</a> 
              </li>
              <li>2024年2月</li>
            </ul>
            <div class="news-content">
              <a href="news-details.html">
                <h3>2023年觀光人數創新高</h3>
              </a>
              <p>
                2023年愛妮島接待遊客突破百萬人次，
                年增長率達35%。
              </p>
              <a href="news-details.html" class="news-icon">
                閱讀更多
              </a>
            </div>
          </div>
        </div>

        <div class="col-lg-4 col-md-6">
          <div class="news-card">
            <div class="news-img">
              <a href="news-details.html">
                <!-- <img src="/assets/img/news/investment.jpg" alt="News Images"> -->
                <img src="/assets/img/about/about-detl.jpg" alt="El Nido Images">
              </a>
              <div class="sub-text">
                <a href="news-details.html">投資機會</a>
              </div>
            </div>
            <ul>
              <li>
                <a href="news-details.html">投資部</a> 
              </li>
              <li>2024年1月</li>
            </ul>
            <div class="news-content">
              <a href="news-details.html">
                <h3>新度假村開發計畫公布</h3>
              </a>
              <p>
                hhotelgroup宣布新度假村開發計畫，
                預計投資規模達5000萬美元。
              </p>
              <a href="news-details.html" class="news-icon">
                閱讀更多
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
  <!-- News Area End -->

  <Footer />
</template>
