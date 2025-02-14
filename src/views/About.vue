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
      background-image: url('/assets/img/about_banner.webp');
      background-size: cover;
      background-position: center;
    "
  >
    <div class="d-table">
      <div class="d-table-cell">
        <div class="container">
          <div class="inner-title text-center property-banner">
            <h1 class="text-white" style="text-shadow: 1px 1px 5px #333">
              關於Hhotelgroup
            </h1>
            <h5 class="text-white" style="text-shadow: 1px 1px 5px #333">
              Hospitality Group的創立故事
            </h5>
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
              Henry是一位擁有豐富創業經驗的國際企業家，他的商業觸角遍及亞太地區。在2019年，他被愛妮島的自然之美深深吸引，決定在這片被譽為「亞洲馬爾地夫」的天堂投資發展。
            </p>

            <p>
              作為H Group Properties 和 H Hospitality Group 的創辦人兼CEO，Henry深知可持續發展的重要性。他不僅關注商業發展，更致力於環境保護和社區發展。在納克潘Nacpan海灘，集團建立了海龜保育計劃，為瀕危物種提供安全的棲息地。
            </p>

            <p>
              H Group
              Properties目前在愛妮島擁有七家酒店，平均入住率維持在85%以上，年投資報酬率達7-9%。其中，與日本豪華精品酒店品牌Piece
              Hotels的合作項目—Piece Lio，更獲得了4.7星的卓越評價。
            </p>

            <p>
              在Henry的領導下，H Group
              Properties不僅創造了優異的投資回報，更實踐了企業社會責任。集團積極僱用當地員工，提供專業培訓，並支持在地小農，打造永續共生的商業模式。
            </p>

            <p>
              <strong>願景與使命</strong><br />
              H Group
              Properties致力於在保護愛妮島自然環境的同時，打造世界級的度假體驗。我們相信，透過負責任的開發和永續經營，能為投資者帶來穩定收益，同時為當地社區創造更美好的未來。
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
                  愛妮島以其純淨的自然美景和獨特魅力，被國際媒體譽為「亞洲的馬爾地夫」。這片天堂般的土地不僅擁有令人屏息的景致，更獲得多項國際殊榮：
                </p>
                <ul>
                  <li>被《Condé Nast Traveler》評選為世界最美島嶼之一</li>
                  <li>入選《National Geographic》全球20大最美海灘</li>
                  <li>獲《Culture Trip》評為「亞洲最酷的旅遊目的地」</li>
                </ul>
                <p>
                  愛妮島擁有龐大的旅遊市場潛力，每年來自亞太地區的潛在遊客高達六億人次。然而，當地優質住宿供不應求的情況，也凸顯了這片天堂的發展機遇。
                </p>
                <br />
                <p>
                  H Group
                  Properties把握這個契機，在愛妮島建立了七家精品酒店，平均入住率維持在85%以上，為投資者帶來7-9%的年投資報酬率。其中，與日本豪華精品酒店品牌Piece
                  Hotels的合作項目—Piece Lio，更獲得了4.7星的卓越評價。
                </p>
                <p>
                  集團不僅注重商業發展，更致力於環境保護和社區發展。在納克潘Nacpan海灘，我們建立了海龜保育計劃，為瀕危物種提供安全的棲息地。同時，集團積極僱用當地員工，提供專業培訓，並支持在地小農，打造永續共生的商業模式。
                </p>
                <br />
                <p>
                  愛妮島不僅是一個令人嚮往的度假勝地，更是一個充滿投資潛力的新興市場。H
                  Group
                  Properties致力於在保護這片淨土的同時，為投資者創造穩定的收益，並為當地社區帶來長遠的發展機會。
                </p>
              </section>
            </div>
          </div>
        </div>

        <div class="col-lg-6">
          <div class="about-right">
            <div class="play-area p-0">
              <img src="/assets/img/first-airbnb.jpeg" />
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
  <div class="course-area container pt-100 pb-70">
    <div class="container-fluid m-0 p-0">
      <div class="row justify-content-center">
        <div class="col-lg-5 col-xxl-6">
          <div class="course-img-1">
            <img src="/assets/img/about_turtle_1.webp" alt="Course Images" />
          </div>
          <div class="course-dots-2">
            <img src="/assets/img/shape/dots-pink.png" alt="Dots Images" />
          </div>
        </div>

        <div class="col-lg-7 col-xxl-6">
          <div class="course-item-2">
            <div class="course-text">
              <span>Sea Turtle Protect Mission</span>
              <h2>Sylvia與海龜保育的意外使命</h2>
              <p>
                動物一直是我的熱愛。從小我就夢想成為動物志工，因為對動物的無比熱愛，我已經如素14年。當我定居愛妮島時，驚訝地發現當地人有吃海龜蛋的習慣。我的第一反應是：「我們拿錢把蛋買回來！」這份衝動的初心成為了改變的開端。花了整整兩年的時間，我們逐漸影響了當地人，成功改變了這樣的文化習慣。
              </p>
              <p>
                海龜寶寶的自然存活率極低，僅約1/1000。我們請教了專家，從零開始，逐步建立了海龜孵育中心。這一路走來，我們不斷學習，不停向專家請教，只希望能為海龜寶寶建立一個最安全的家，提升牠們的孵育率。
              </p>
              <p>
                八年間，我們已成功孵育並野放了<strong>48,663隻</strong>海龜寶寶。這份成果源於最初的初心，也因持續的努力而更加堅定。
              </p>
            </div>
          </div>
        </div>
      </div>

      <div class="course-another pt-70">
        <div class="row justify-content-center">
          <div class="col-lg-7 col-xxl-6">
            <div class="course-item-2">
              <div class="course-text">
                <span>Challenge</span>
                <h2>從默默守護到疫情的挑戰</h2>
                <p>
                  一開始，我們的海龜保育是默默進行的，並未對外開放。然而，Covid疫情的來襲讓我們的旅客與經費瞬間歸零。於是，我們發起了「海龜寶寶認養」活動，希望藉此延續保育工作。
                </p>
                <p>
                  參與認養的朋友可以選擇單隻或整窩的海龜寶寶，並會收到認養證書。我們還提供整個孵育箱的認養與彩繪選項。透過這個活動，我們不僅得到了身邊朋友的支持，更收到來自世界各地陌生人的愛心。這份溫暖使得認養活動能夠持續至今。
                </p>
                <h3>教育與行動：為海洋未來努力</h3>
                <p>
                  除了海龜保育，我們也致力於社區教育。我們長期贊助附近的學校，並帶著孩子們一起淨灘，親近大自然。每年，我們還舉辦限定的海龜團活動，邀請參與者一起體驗海龜野放，並參與淨灘、海底垃圾清潔，以及海龜保育課程。
                </p>
                <p>
                  我們相信，教育是改變的起點。透過孩子影響家庭，進而影響到來的旅客，讓更多人了解正確的海洋知識。我們希望這份愛與責任感，能夠傳遞到更遠的地方，為海洋與海龜的未來帶來更多希望。
                </p>
              </div>
            </div>
          </div>

          <div class="col-lg-5 col-xxl-6">
            <div class="course-img-2">
              <img src="/assets/img/about_turtle_2.webp" alt="Course Images" />
            </div>
            <div class="course-dots-2">
              <img src="/assets/img/shape/dots-pink.png" alt="Dots Images" />
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="icon-shape-3">
      <i class="flaticon-swimming"></i>
    </div>
    <!-- <div class="icon-shape-4">
      <i class="flaticon-diver"></i>
    </div> -->
  </div>

  <!-- Introduction Section -->
  <div class="intro-area pt-100">
    <div class="container">
      <div class="section-title text-center mb-50">
        <h2>旗下事業</h2>
        <p>
          H Group
          集團以「創造永續價值，守護天堂之美」為核心理念，專注於打造結合自然美景與現代設計的頂級旅遊與生活體驗。我們的事業範疇涵蓋豪華度假村、精品酒店、餐飲品牌、健康與休閒設施，及交通服務，致力於提供與當地文化深度連結的卓越服務。我們堅持永續發展原則，融合國際標準與當地特色，不僅為旅客帶來獨特的旅遊體驗，亦助力社區繁榮與環境保護。讓每一位客人都能擁有屬於自己的天堂角落。
        </p>
      </div>
    </div>
  </div>

  <!-- Full Width Image -->
  <div class="full-width-image pb-50">
    <img
      src="/assets/img/group-investment-with-bg.webp"
      alt="Piece Lio Exterior"
      class="w-100"
    />
  </div>

  <!-- CSR Section -->
  <div class="csr-area pt-100 pb-70">
    <div class="container">
      <div class="section-title text-center mb-50">
        <h2>企業社會責任</h2>
        <p>
          H Hospitality Group不僅致力於提供卓越的酒店服務，更重視對社區和環境的貢獻。自在愛妮島巴拉望成立以來，我們持續透過各種計劃支持當地居民並保護環境，創造正面影響。
        </p>
      </div>

      <div class="row mb-3">
        <div class="col-lg-6">
          <div class="csr-content p-4">
            <h3>社會支持</h3>
            <p>
              作為愛妮島最大的旅館集團，我們為300個家庭提供穩定工作機會，其中70%是當地居民。我們提供具競爭力的薪資福利，並致力於建立培養性的工作環境，相信這是建立繁榮社區的關鍵。
            </p>
            <div class="row g-3">
              <div class="col-4">
                <img
                  class="img-fluid rounded"
                  src="/assets/img/csr/community1.webp"
                  alt="Community Support 1"
                />
              </div>
              <div class="col-4">
                <img
                  class="img-fluid rounded"
                  src="/assets/img/csr/community2.webp"
                  alt="Community Support 2"
                />
              </div>
              <div class="col-4">
                <img
                  class="img-fluid rounded"
                  src="/assets/img/csr/community3.webp"
                  alt="Community Support 3"
                />
              </div>
            </div>
          </div>
        </div>

        <div class="col-lg-6">
          <div class="csr-content p-4">
            <h3>海龜保護</h3>
            <p>
              我們重視海龜保育工作，定期為員工提供培訓並教育旅客認識海龜保育的重要性。每年釋放8,000至10,000隻海龜回歸大海，截至2024年已成功拯救超過49,500隻海龜。
            </p>
            <div class="row g-3">
              <div class="col-4">
                <img
                  class="img-fluid rounded"
                  src="/assets/img/csr/turtle1.webp"
                  alt="Turtle Conservation 1"
                />
              </div>
              <div class="col-4">
                <img
                  class="img-fluid rounded"
                  src="/assets/img/csr/turtle2.webp"
                  alt="Turtle Conservation 2"
                />
              </div>
              <div class="col-4">
                <img
                  class="img-fluid rounded"
                  src="/assets/img/csr/turtle3.webp"
                  alt="Turtle Conservation 3"
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      <div class="row mb-3">
        <div class="col-lg-6">
          <div class="csr-content p-4">
            <h3>Brigada Eskwela 計劃</h3>
            <p>
              我們積極參與Brigada Eskwela學校援助計劃，提供建材和人力支援學校修繕工作。目前已援助Bucana國立高中和Calitang小學，並計劃認養一所學校。同時，我們也為學生提供各部門的實習機會，支持教育發展。
            </p>
            <div class="row g-3">
              <div class="col-4">
                <img
                  class="img-fluid rounded"
                  src="/assets/img/csr/brigada1.webp"
                  alt="Brigada Eskwela 1"
                />
              </div>
              <div class="col-4">
                <img
                  class="img-fluid rounded"
                  src="/assets/img/csr/brigada2.webp"
                  alt="Brigada Eskwela 2"
                />
              </div>
              <div class="col-4">
                <img
                  class="img-fluid rounded"
                  src="/assets/img/csr/brigada3.webp"
                  alt="Brigada Eskwela 3"
                />
              </div>
            </div>
          </div>
        </div>

        <div class="col-lg-6">
          <div class="csr-content p-4">
            <h3>通過社區參與追求卓越</h3>
            <p>
              我們支持當地運動和藝術活動，籃球隊在2023年贏得冠軍。今年將成立合唱團和舞蹈俱樂部，展現員工多元才能，促進工作生活平衡，並透過表演活動回饋社區。
            </p>
            <div class="row g-3">
              <div class="col-4">
                <img
                  class="img-fluid rounded"
                  src="/assets/img/csr/engagement1.webp"
                  alt="Community Engagement 1"
                />
              </div>
              <div class="col-4">
                <img
                  class="img-fluid rounded"
                  src="/assets/img/csr/engagement2.webp"
                  alt="Community Engagement 2"
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      <div class="row mb-3">
        <div class="col-lg-6">
          <div class="csr-content p-4">
            <h3>HHG 合唱團：愛妮島的音樂之聲</h3>
            <p>
              HHG合唱團是愛妮島首個酒店業合唱團，由13位來自各部門的員工組成。2024年8月首次亮相，展現了集團重視員工才藝發展的理念。合唱團不僅促進員工交流，更計劃透過表演與社區互動。
            </p>
            <div class="row g-3">
              <div class="col-4">
                <img
                  class="img-fluid rounded"
                  src="/assets/img/csr/music1.jpg"
                  alt="HHG Glee Club 1"
                />
              </div>
              <div class="col-4">
                <img
                  class="img-fluid rounded"
                  src="/assets/img/csr/music2.jpg"
                  alt="HHG Glee Club 2"
                />
              </div>
              <div class="col-4">
                <img
                  class="img-fluid rounded"
                  src="/assets/img/csr/music3.jpg"
                  alt="HHG Glee Club 3"
                />
              </div>
            </div>
          </div>
        </div>

        <div class="col-lg-6">
          <div class="csr-content p-4">
            <h3>流浪狗與貓結紮行動</h3>
            <p>
              與馬尼拉Vet in Practice動物醫院合作，每週舉辦免費結紮活動。每月接待6組獸醫團隊，為他們提供住宿，共同為控制流浪動物數量及改善社區環境努力。
            </p>
            <div class="row g-3">
              <div class="col-4">
                <img
                  class="img-fluid rounded"
                  src="/assets/img/csr/spaying1.webp"
                  alt="Spaying and Neutering 1"
                />
              </div>
              <div class="col-4">
                <img
                  class="img-fluid rounded"
                  src="/assets/img/csr/spaying2.webp"
                  alt="Spaying and Neutering 2"
                />
              </div>
              <div class="col-4">
                <img
                  class="img-fluid rounded"
                  src="/assets/img/csr/spaying3.webp"
                  alt="Spaying and Neutering 3"
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      <div class="row mb-3">
        <div class="col-lg-6">
          <div class="csr-content p-4">
            <h3>營養午餐計畫</h3>
            <p>
              為解決學童營養不良問題，我們推出營養午餐計畫，提供均衡營養餐點，確保孩子們獲得成長與學習所需的基本營養。
            </p>
            <div class="row g-3">
              <div class="col-4">
                <img
                  class="img-fluid rounded"
                  src="/assets/img/csr/lunchProgram1.webp"
                  alt="Nutritional Lunch Program 1"
                />
              </div>
            </div>
          </div>
        </div>

        <div class="col-lg-6">
          <div class="csr-content p-4">
            <h3>聖誕禮物贈送活動</h3>
            <p>
              每年聖誕節期間，我們舉辦禮物分送活動，為當地學童帶來節日歡樂，增進與社區的連結。
            </p>
            <div class="row g-3">
              <div class="col-4">
                <img
                  class="img-fluid rounded"
                  src="/assets/img/csr/christmasGiftGiving1.webp"
                  alt="Christmas Gift Giving 1"
                />
              </div>
              <div class="col-4">
                <img
                  class="img-fluid rounded"
                  src="/assets/img/csr/christmasGiftGiving2.webp"
                  alt="Christmas Gift Giving 2"
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      <div class="text-center mt-5">
        <p>
          H Hospitality Group持續致力於為人民、社區和環境創造永續未來，透過各項企業社會責任計畫，在愛妮島及周邊地區產生正面影響。
        </p>
      </div>
    </div>
  </div>

  <WhatOnElNido />

  <Footer />
</template>
