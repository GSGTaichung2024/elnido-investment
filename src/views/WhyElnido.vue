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
    WhatOnElNido,
  },
  setup() {
    const router = useRouter();
    const { t, locale } = useI18n();

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
      background-image: url('/assets/img/whyelnido_banner.webp');
      background-size: cover;
      background-repeat: no-repeat;
      background-position: center center;
    "
  >
    <div class="d-table">
      <div class="d-table-cell">
        <div class="container">
          <div class="inner-title text-center property-banner">
            <h1 class="text-white">為什麼選擇愛妮島？</h1>
            <h5 class="text-white">亞洲新興度假天堂的投資機會</h5>
            <small
              class="text-white"
              style="
                opacity: 0.9;
                position: absolute;
                bottom: 10px;
                left: 0;
                text-align: center;
                width: 100%;
              "
              >H Hotel 集團旗下 H Hotel 實景拍攝</small
            >
          </div>
        </div>
      </div>
    </div>
  </div>

  <!-- Introduction Section -->
  <div class="about-detl pt-100 pb-70">
    <div class="container">
      <div class="row justify-content-center">
        <div class="col-lg-6">
          <div class="common-offer">
            <div class="drive-img">
              <img
                src="/assets/img/tourist-grow-up.png"
                alt="Investment"
                class="w-100 rounded shadow"
              />
            </div>
          </div>
        </div>
        <div class="col-lg-6">
          <div class="common-dtel-text pl-3">
            <h2>爆發性觀光成長</h2>
            <p>
              自2014年以來，愛妮島的遊客人數一直穩步增長，增長率在2019年範圍從16%到93%。2023年1月和2月的遊客預計人數為92,934人，超過2019年的總遊客人數，這表明愛妮島旅遊業有著巨大的增長潛力。2024年第一季的入境遊客數達到了200,000人，顯示了旅遊業的顯著增長。根據最近的趨勢和分析，我們預計這一數字將迅速上升到600,000人。這一預測突顯了旅遊市場的強勁恢復，並突顯了我們的目的地對國際旅行者的持續吸引力。
            </p>
            <ul>
              <li>
                觀光人數7年成長700%，從2014年6.39萬人躍升至2024年預計60萬人
              </li>
              <li>2024年第一季入境旅客已達20萬人，顯示強勁增長趨勢</li>
              <li>微信搜尋關鍵字成長率達2294%，展現巨大市場潛力</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </div>

  <!-- Introduction Section -->
  <div class="team-area pt-100 pb-70 bg-light">
    <div class="container">
      <div class="row justify-content-center">
        <div class="col-lg-6">
          <div class="common-dtel-text">
            <h2>市場潛力無限</h2>
            <p>
              Palawan = Maldives of
              Asia，在4小時飛行距離內，約有6億潛在旅客，目前僅有207家酒店、3100間房間，相較普吉島(3000+酒店)和峇里島(13000+酒店)發展空間巨大。每位旅客平均停留2-4天，消費達17,000披索。
            </p>
            <ul>
              <li>
                愛妮島酒店房間與遊客之間的比例為1:193，表明該地區需要更多的住宿設施以滿足日益增多的遊客需求。
              </li>
              <li>
                儘管愛妮島的酒店和酒店房間數量較普吉島和峇里島少，但仍能吸引每年440,000名國際直接遊客，表明愛妮島旅遊業投資回報的潛力很高。
              </li>
            </ul>
          </div>
        </div>

        <div class="col-lg-6">
          <div class="common-offer">
            <div class="drive-img">
              <img
                src="/assets/img/tourist-destination.png"
                alt="Investment"
                class="w-100 rounded shadow"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>

  <div class="team-area pb-70 pt-100">
    <div class="container">
      <div class="row justify-content-center">
        <div class="col-lg-6">
          <div class="common-offer">
            <div class="drive-img">
              <img
                src="/assets/img/international-destination.png"
                alt="Investment"
                class="w-100 rounded shadow"
              />
            </div>
          </div>
        </div>
        <div class="col-lg-6">
          <div class="common-dtel-text">
            <h2>國際級旅遊目的地</h2>
            <p>
              根據統計，愛妮島以294,065名遊客到訪量排名第一，緊隨其後的是普林塞薩市（269,090名）、科隆（75,756名）、聖文森特（52,057名）和林納帕坎（16,654名）。其他遊客到訪量最多的鎮包括布魯克點（13,709名）、納拉（10,704名）、布蘇安加（8,121名）、庫利昂（6,768名）和泰泰（5,399名）。
            </p>
            <ul>
              <li>獲選「全球最美島嶼」</li>
              <li>恩塔盧拉海灘(Entalula Beach)榮獲2024年全球第四美海灘</li>
              <li>納克潘Nacpan海灘躋身全球20大最美海灘之列</li>
              <li>被譽為「亞洲馬爾地夫」，媲美世界級度假勝地</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </div>

  <div class="testimonial-area pt-100 pb-70 text-white">
    <div class="container">
      <div class="section-title text-left mb-30">
        <h2>集團的蓬勃發展</h2>
      </div>
      <div class="row">
        <div class="col-md-6">
          <div class="room-card">
            <img
              src="/assets/img/about_timeline.jpeg"
              alt="總統閣樓"
              class="w-100 rounded shadow"
              style="height: 350px; object-fit: contain; background: #fff"
            />
            <div class="room-content">
              <h5 class="my-2">多元化商業版圖</h5>
              <p class="text-light">
                擁有多家高評分酒店：H Hotel（Agoda 9.3分）、S
                Resort（8.8分）等，經營範疇橫跨住宿、餐飲、旅遊、交通等全方位服務，納克潘Nacpan海灘接駁車服務占市場25%份額，掌握台灣赴愛妮島旅遊市場65%份額
              </p>
            </div>
          </div>
        </div>
        <div class="col-md-6">
          <div class="room-card">
            <img
              src="/assets/img/about_turtle_csr.jpeg"
              alt="行政套房"
              class="w-100 rounded shadow"
              style="height: 350px; object-fit: cover"
            />
            <div class="room-content">
              <h5 class="my-2">永續發展理念</h5>
              <p class="text-light">
                經營區域最大海龜保育中心，已成功放生超過48,000隻海龜<br />發展環保旅宿與素食餐廳，符合國際旅遊趨勢
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>

  <div class="rooms-area pt-100 pb-70 bg-light">
    <div class="container">
      <div class="section-title text-left mb-30">
        <h2>投資優勢</h2>
      </div>
      <div class="row">
        <div class="col-md-6">
          <div class="room-card">
            <img
              src="/assets/img/piecelio/room/presidential-loft/01.webp"
              alt="總統閣樓"
              class="w-100 rounded shadow"
              style="height: 350px; object-fit: cover"
            />
            <div class="room-content">
              <h5 class="my-2">市場定位精準</h5>
              <p>
                房間供需比為1:193，遠高於普吉島(1:114)和峇里島(1:42)，顯示住宿需求強勁。酒店平均入住率維持高檔，具備穩定獲利能力，且為區域內唯一擁有合法開發商銷售執照的開發集團。
              </p>
            </div>
          </div>
        </div>
        <div class="col-md-6">
          <div class="room-card">
            <img
              src="/assets/img/piecelio/room/executive-studio/cover.webp"
              alt="行政套房"
              class="w-100 rounded shadow"
              style="height: 350px; object-fit: cover"
            />
            <div class="room-content">
              <h5 class="my-2">增值潛力巨大</h5>
              <p>
                觀光產業正處於快速成長期，土地取得成本相對低廉。政府支持觀光發展，法規環境友善。
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>

  <!-- Official Website Section -->
  <div class="official-website-area ptb-100">
    <div class="container">
      <div class="row justify-content-center">
        <div class="col-lg-8">
          <div class="website-card text-center box-shadow p-5">
            <h3 class="mb-4">聯繫專人</h3>
            <p class="mb-4">
              把握愛妮島觀光產業起飛的黃金時機，與我們一同開創亞洲新興度假勝地的美好未來。
            </p>
            <a
              href="https://www.facebook.com/iloveelnido"
              target="_blank"
              class="btn btn-primary btn-lg"
            >
              前往Facebook粉絲專頁
            </a>
          </div>
        </div>
      </div>
    </div>
  </div>

  <Footer />
</template>
