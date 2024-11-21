<script>
import { useRouter, useRoute } from "vue-router";
import { onMounted, ref } from "vue";
import Header from "@/components/Header.vue";
import Footer from "@/components/Footer.vue";
import WhatOnElNido from "@/components/WhatOnElNido.vue";
import { useI18n } from "vue-i18n";

export default {
  components: {
    Header,
    Footer,
    WhatOnElNido
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


          </div>
        </div>
      </div>
    </div>
  </div>
  <!-- About Details End -->
  <div class="about-area pt-100 pb-70">
    <div class="container">
      <div class="row align-items-center justify-content-center">
        <div class="col-lg-6">
          <div class="about-text">
            <div class="section-title">
              <span>Why Choose El Nido?</span>
              <h2>為什麼選擇愛妮島</h2>
              <section>
                <p>
                  愛妮島，不僅是世界上最美麗的島嶼之一，更是一個充滿無限可能的天堂。它以其驚人的自然美景和獨特的魅力，被《Culture
                  Trip》評選為<strong>「亞洲最酷的目的地」</strong>，並獲得多項國際殊榮：
                </p>
                <ul>
                  <li><strong>被評選為世界最美島嶼之一</strong></li>
                  <li><strong>入選全球20大最美海灘</strong></li>
                  <li><strong>被譽為「亞洲的馬爾地夫」</strong></li>
                </ul>
                <p>
                  這片美麗的土地不僅吸引了來自世界各地的遊客，也擁有巨大的潛在市場：每年周邊600萬的潛在遊客，讓這裡充滿無限商機。然而，定居後我發現了一個明顯的問題——<strong>旅館供不應求</strong>。朋友想來拜訪，卻常常訂不到房間，這顯示出當地住宿市場的供需嚴重失衡。
                </p>
                <br>
                <p>
                  作為一個熱愛創業、對挑戰充滿熱情的人，我不僅看到了這個機會，也決定將它變成我的實踐目標。<strong
                    >既然訂不到房，那我們就自己來蓋！</strong
                  >
                </p>
                <p>
                  因此我打造了愛妮島Nacpan海灘上的第一棟獨棟Airbnb民宿，以「好玩的心態」去嘗試，卻用經營旅館的專業態度來管理。在2019年，我的努力得到了肯定，這棟民宿被《Culture
                  Trip》評選為<strong>「愛妮島最酷的Airbnb」</strong>。
                </p>
                <br>
                <p>
                  選擇留在愛妮島，不僅是因為它的自然之美，更是因為它的無限潛力。這裡是一個讓人可以實現夢想的地方，一個能讓熱情與創意閃耀的舞台。在這片天堂，我找到了一個屬於自己的方向，並用實際行動為它注入更多可能性。
                </p>
                <p>
                  愛妮島的美麗是無需多言的，而它的未來，才是最吸引我的地方。
                </p>
              </section>
            </div>

          </div>
        </div>

        <div class="col-lg-6">
          <div class="about-right">
            <div class="play-area p-0">
              <img src="/assets/img/first-airbnb.jpeg">
            </div>

            <div class="icon-shape-1">
              <i class="flaticon-waves"></i>
            </div>
            <div class="icon-shape-2">
              <i class="flaticon-waves"></i>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>

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

  <WhatOnElNido/>

  <Footer />
</template>
