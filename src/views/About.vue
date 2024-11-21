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

    onMounted(() => {});

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
  <div
    class="inner-banner bg-shape3"
    style="
      background-image: url('/assets/img/piecelio/piece_lio_exterior/04.webp');
      background-size: cover;
      background-position: center;
    "
  >
    <div class="d-table">
      <div class="d-table-cell">
        <div class="container">
          <div class="inner-title text-center property-banner">
            <h1 class="text-white">關於Hhotelgroup</h1>
            <h5 class="text-white">Hospitality Group的創立故事</h5>
          </div>
        </div>
      </div>
    </div>
  </div>
  <!-- Inner Banner End -->

  <!-- About Details -->
  <div class="about-another pt-100 pb-70">
    <div class="container-fluid m-0 p-0">
      <div class="row align-items-center justify-content-center">
        <div class="col-lg-5">
          <div class="about-img2">
            <img src="/assets/img/henry.webp" alt="About Images" />
            <div class="icon-shape-5">
              <i class="flaticon-waves"></i>
            </div>
            <div class="icon-shape-6">
              <i class="flaticon-waves"></i>
            </div>
          </div>
        </div>

        <div class="col-lg-7">
          <div class="about-content">
            <span>About Henry</span>
            <h2>創業經驗與初心</h2>
            <p>
              我是一位來自台灣的創業家。過去創立了多家成功企業，包括知名潮牌
              Puff Nation 和 P4P
              Developments。我對探索未知的渴望，最終將我帶到了這片令人著迷的菲律賓天堂——愛妮島。
            </p>

            <p>
              愛妮島並非我們預先計劃的終點，而是在背包旅行中不斷吸引我們回來的地方。每一次返回，我們都深深被這片土地的魅力所征服。
            </p>

            <p>
              最初，我們購買了 Lio
              富人區的第一塊土地，建造了一間小木屋。這不僅是一個住所，更是我們對可持續生活的實踐：太陽能板提供電力，寬敞的庭院讓我們可以自給自足地種植蔬菜，並免費讓當地朋友居住。
            </p>

            <p>
              在 Nacpan
              海灘，我們購買的第一塊土地純粹源於一個單純的願望：保護海龜。那時的我們，只想幫助這些脆弱的生命順利孵育。
            </p>

            <p>
              <strong>改變生活，拯救生命</strong><br />
              住在海邊的生活，讓我們發現自己其實有能力影響身邊的環境。不再只是旁觀，我們可以主動去改變他人的生活，甚至拯救瀕臨危機的生命，讓生活更有意義！
            </p>

            <p>
              <strong>創業的契機：發現市場的缺口</strong><br />
              搬到愛妮島後，我們注意到一個超明顯的市場機會。這裡的旅館幾乎全年都客滿，朋友來玩的時候常常訂不到房間，這代表當地的接待能力完全供不應求。對於我這種一直熱愛創業的人來說，這根本就是老天爺送來的好機會！
            </p>
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
            <img src="https://placehold.co/400" alt="精品度假村" />
            <i class="flaticon-hotel"></i>
            <h3>精品度假村</h3>
            <p>打造獨特風格的精品度假體驗</p>
          </div>
        </div>

        <div class="col-lg-3 col-sm-6">
          <div class="choose-card">
            <img src="https://placehold.co/400" alt="豪華海景公寓" />
            <i class="flaticon-building"></i>
            <h3>豪華海景公寓</h3>
            <p>擁有絕佳視野的居住空間</p>
          </div>
        </div>

        <div class="col-lg-3 col-sm-6">
          <div class="choose-card">
            <img src="https://placehold.co/400" alt="特色主題酒店" />
            <i class="flaticon-resort"></i>
            <h3>特色主題酒店</h3>
            <p>結合在地特色的主題設計</p>
          </div>
        </div>

        <div class="col-lg-3 col-sm-6">
          <div class="choose-card">
            <img src="https://placehold.co/400" alt="綜合型度假區" />
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
            <img src="https://placehold.co/400" alt="El Nido Images" />
            <div class="trainer-content">
              <h3>Manager</h3>
              <span>主管1</span>
            </div>
          </div>
        </div>

        <div class="col-lg-3 col-sm-6">
          <div class="trainer-card">
            <img src="https://placehold.co/400" alt="El Nido Images" />
            <div class="trainer-content">
              <h3>Manager</h3>
              <span>主管1</span>
            </div>
          </div>
        </div>

        <div class="col-lg-3 col-sm-6">
          <div class="trainer-card">
            <img src="https://placehold.co/400" alt="El Nido Images" />
            <div class="trainer-content">
              <h3>Henry Hsu</h3>
              <span>開發總監</span>
            </div>
          </div>
        </div>

        <div class="col-lg-3 col-sm-6">
          <div class="trainer-card">
            <img src="https://placehold.co/400" alt="El Nido Images" />
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
                <ul style="list-style: none; text-align: center; padding: 0">
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
                <ul style="list-style: none; text-align: center; padding: 0">
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
