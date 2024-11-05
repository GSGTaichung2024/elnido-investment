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
    const isIntroScolled = ref(false);
    const { t, locale } = useI18n();

    const handleScroll = () => {
      const targetDiv = document.getElementById("intro");
      const rect = targetDiv.getBoundingClientRect();

      if (rect.top >= 0 && rect.bottom <= window.innerHeight) {
        isIntroScolled.value = true;
      }
    };

    onMounted(() => {
      window.addEventListener("scroll", handleScroll);
    });

    return {
      isIntroScolled,
      t,
      locale,
    };
  },
};
</script>

<template>
  <Header />

  <!--===== HERO AREA STARTS =======-->
  <div class="hero1-section-area">
    <div class="container">
      <div class="row">
        <div class="col-lg-12">
          <div class="header-main-content heading1">
            <img
              src="/assets/img/elements/star1.png"
              alt=""
              class="star1 keyframe5"
            />
            <img
              src="/assets/img/elements/star1.png"
              alt=""
              class="star2 keyframe5"
            />
            <h1 class="text-anim">
              為什麼投資愛尼島？<br class="d-lg-block d-none" />
              探索無限潛力的投資天堂
            </h1>
          </div>
        </div>
        <div class="space74 d-lg-block d-none"></div>
        <div class="space30 d-lg-none d-block"></div>
        <div class="col-lg-3">
          <div class="header-pera heading1">
            <img
              src="/assets/img/elements/star2.png"
              alt=""
              class="star3 keyframe5"
            />
            <p class="text-anim">
              愛尼島擁有絕美的自然景觀和豐富的生態資源，正在快速發展的旅遊業和不斷完善的基礎設施，
              為投資者提供了獨特的投資機會。無論您是尋找度假屋投資還是商業發展機會，愛尼島都能滿足您的需求。
            </p>
            <div class="video-btn-area">
              <a
                href="https://www.youtube.com/watch?v=wWgSuG3QPTo"
                class="popup-youtube"
              >
                <span class="video"><i class="fa-brands fa-line"></i></span>
                <span class="play">影片導覽</span>
              </a>
            </div>
          </div>
        </div>
        <div class="col-lg-7"></div>
        <div class="col-lg-2">
          <div class="all-counter-area">
            <div
              class="counter-area"
              data-aos="fade-left"
              data-aos-duration="800"
            >
              <h2><span class="counter">4</span></h2>
              <p>精選旅遊路線</p>
            </div>
            <div class="space60"></div>
            <div
              class="counter-area"
              data-aos="fade-left"
              data-aos-duration="1000"
            >
              <h2><span class="counter">50</span>+</h2>
              <p>自然景點</p>
            </div>
            <div class="space60"></div>
            <div
              class="counter-area"
              data-aos="fade-left"
              data-aos-duration="1100"
            >
              <h2><span class="counter">20</span>+</h2>
              <p>水上活動項目</p>
            </div>
            <div class="space60"></div>
            <div
              class="counter-area"
              data-aos="fade-left"
              data-aos-duration="1200"
            >
              <img src="/assets/img/all-images/others-img1.png" alt="" />
              <div class="space16"></div>
              <h2><span class="counter">2</span></h2>
              <p>精品投資項目</p>
            </div>
          </div>
        </div>
        <div class="col-lg-10 m-auto">
          <div class="header-images text-center">
            <div class="img1" data-aos="fade-down" data-aos-duration="1200">
              <img src="/assets/img/all-images/header-img1.png" alt="愛尼島全景" />
            </div>
            <p class="aniamtion-key-1">
              <img src="/assets/img/icons/logo-icon.svg" alt="" />探索愛尼島的無限可能
            </p>

            <div class="circle-area">
              <a href="#investment">
                <img
                  src="/assets/img/elements/circle.png"
                  alt=""
                  class="keyframe5 circle" />
                <img src="/assets/img/icons/arrow2.svg" alt="" class="arrow2"
              /></a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>


  <!--===== ABOUT AREA STARTS =======-->
  <div class="about1-section-area sp1">
    <div class="container">
      <div class="row align-items-center">
        <div class="col-lg-7">
          <div class="about-images-area">
            <div class="row">
              <div class="col-lg-6 col-md-6">
                <div class="space90"></div>
                <div class="author-images">
                  <div class="img1 image-anime reveal">
                    <img src="/assets/img/all-images/about-img1.png" alt="愛尼島自然景觀" />
                  </div>
                  <div class="city-area">
                    <div class="icons">
                      <img src="/assets/img/icons/logo-icon1.svg" alt="" />
                    </div>
                    <div class="content">
                      <a href="#">自然生態寶地</a>
                      <p>
                        位於菲律賓巴拉望省，擁有原始珊瑚礁群及豐富的海洋生態系統。
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <div class="col-lg-6 col-md-6">
                <div class="author-images">
                  <div class="img1 image-anime reveal">
                    <img src="/assets/img/all-images/about-img2.png" alt="愛尼島水上活動" />
                  </div>
                  <div class="space30"></div>
                  <div class="img1 image-anime reveal">
                    <img src="/assets/img/all-images/about-img3.png" alt="愛尼島文化體驗" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div class="col-lg-5">
          <div class="about-content-header heading2">
            <h5 class="text-anim">
              <img src="/assets/img/icons/logo-icon1.svg" alt="" />關於愛尼島
            </h5>
            <h2 class="text-anim">
              探索愛尼島的自然與文化之美
            </h2>
            <div class="space24"></div>
            <p class="text-anim">
              愛尼島是菲律賓巴拉望省最著名的度假勝地之一，擁有純淨的白沙灘、清澈的海水和豐富的海洋生態。這裡不僅有壯麗的自然景觀，更保存了當地原住民的傳統文化。
            </p>
            <div class="space32"></div>
            <div class="tour-routes text-anim">
              <h4>精選旅遊路線：</h4>
              <ul>
                <li>路線A：大小瀉湖探索之旅</li>
                <li>路線B：七個群島跳島之旅</li>
                <li>路線C：浮潛與海底探索之旅</li>
                <li>路線D：日落沙灘文化體驗</li>
              </ul>
            </div>
            <div class="space32"></div>
            <div class="btn-area1 text-anim">
              <a href="/tours" class="header-btn1"
                >查看更多旅遊資訊 <img src="/assets/img/icons/arrow1.svg" alt=""
              /></a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  <!--===== ABOUT AREA ENDS =======-->

  <!--===== ABOUT AREA STARTS =======-->
  <div class="about1-section-area sp1">
    <div class="container">
      <div class="row align-items-center">
        <div class="col-lg-5">
          <div class="about-content-header heading2">
            <h5 class="text-anim">
              <img src="/assets/img/icons/logo-icon1.svg" alt="" />投資愛尼島
            </h5>
            <h2 class="text-anim">
              探索愛尼島的無限投資潛力
            </h2>
            <div class="space24"></div>
            <p class="text-anim">
              愛尼島擁有得天獨厚的自然資源和發展優勢。這裡不僅有原始的自然生態系統，
              更有完善的基礎設施規劃。隨著旅遊業的蓬勃發展，愛尼島正逐步成為最具投資
              價值的度假勝地之一。
            </p>
            <div class="space32"></div>
            <div class="btn-area1 text-anim">
              <a href="/investment" class="header-btn1"
                >深入了解投資機會 <img src="/assets/img/icons/arrow1.svg" alt=""
              /></a>
            </div>
          </div>
        </div>

        <div class="col-lg-7">
          <div class="about-images-area">
            <div class="row">
              <div class="col-lg-6 col-md-6">
                <div class="space90"></div>
                <div class="author-images">
                  <div class="img1 image-anime reveal">
                    <img src="/assets/img/all-images/about-img1.png" alt="愛尼島自然景觀" />
                  </div>
                  <div class="city-area">
                    <div class="icons">
                      <img src="/assets/img/icons/logo-icon1.svg" alt="" />
                    </div>
                    <div class="content">
                      <a href="#">自然生態系統</a>
                      <p>
                        擁有原始珊瑚礁群及豐富的海洋生態，是難得一見的自然寶地。
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <div class="col-lg-6 col-md-6">
                <div class="author-images">
                  <div class="img1 image-anime reveal">
                    <img src="/assets/img/all-images/about-img2.png" alt="愛尼島水上活動" />
                  </div>
                  <div class="space30"></div>
                  <div class="img1 image-anime reveal">
                    <img src="/assets/img/all-images/about-img3.png" alt="愛尼島基礎設施" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  <!--===== ABOUT AREA ENDS =======-->


  <!--===== INVESTMENT AREA STARTS =======-->
  <div class="properties1-section-area sp1">
    <div class="container">
      <div class="row">
        <div class="col-lg-4 m-auto">
          <div class="property-header text-center heading2">
            <h5 class="text-anim">
              <img src="/assets/img/icons/logo-icon1.svg" alt="" />投資項目
            </h5>
            <h2 class="text-anim">愛尼島投資機會</h2>
          </div>
        </div>
      </div>

      <div class="row">
        <div class="col-lg-8 m-auto">
          <div class="property-slider-area owl-carousel">
            <div class="property-boxarea">
              <div class="img1 image-anime reveal">
                <img src="/assets/img/all-images/property-img1.png" alt="Piecelio外觀" />
              </div>

              <div class="content-area">
                <h2>Piecelio</h2>
                <ul>
                  <li>
                    <a href="#"
                      ><img src="/assets/img/icons/sqft.svg" alt="" />現代設計</a
                    >
                  </li>
                  <li>
                    <a href="#"
                      ><img src="/assets/img/icons/bed.svg" alt="" />環保建築</a
                    >
                  </li>
                  <li class="m-0">
                    <a href="#"
                      ><img src="/assets/img/icons/bath.svg" alt="" />文化融合</a
                    >
                  </li>
                </ul>
                <p>結合現代設計與在地文化的精品住宅</p>
                <div class="space16"></div>
                <p>採用環保建材，打造與自然共生的生活空間</p>
                <div class="btn-area1">
                  <a href="/investment/piecelio" class="header-btn1"
                    >了解更多 <img src="/assets/img/icons/arrow3.svg" alt=""
                  /></a>
                </div>
              </div>
            </div>

            <div class="property-boxarea">
              <div class="img1 image-anime reveal">
                <img src="/assets/img/all-images/property-img2.png" alt="M海岸旅館外觀" />
              </div>

              <div class="content-area">
                <h2>M海岸旅館</h2>
                <ul>
                  <li>
                    <a href="#"
                      ><img src="/assets/img/icons/sqft.svg" alt="" />臨海設計</a
                    >
                  </li>
                  <li>
                    <a href="#"
                      ><img src="/assets/img/icons/bed.svg" alt="" />水上活動</a
                    >
                  </li>
                  <li class="m-0">
                    <a href="#"
                      ><img src="/assets/img/icons/bath.svg" alt="" />度假體驗</a
                    >
                  </li>
                </ul>
                <p>擁抱海洋的度假旅館</p>
                <div class="space16"></div>
                <p>提供豐富水上活動，打造完美度假體驗</p>
                <div class="btn-area1">
                  <a href="/investment/m-coast" class="header-btn1"
                    >了解更多 <img src="/assets/img/icons/arrow3.svg" alt=""
                  /></a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div class="row mt-5">
        <div class="col-lg-12 text-center">
          <div class="btn-area1">
            <a href="/investment" class="header-btn1"
              >查看所有投資項目 <img src="/assets/img/icons/arrow3.svg" alt=""
            /></a>
          </div>
        </div>
      </div>
    </div>
  </div>
  <!--===== INVESTMENT AREA ENDS =======-->


  <!--===== FAQ AREA STARTS =======-->
  <div class="faq-section-area sp2">
    <div class="container">
      <div class="row">
        <div class="col-lg-5 m-auto">
          <div class="faq-header heading2 text-center">
            <h5>
              <img src="/assets/img/icons/logo-icon1.svg" alt="" />常見問題
            </h5>
            <h2 class="text-anim">投資人常見問題</h2>
          </div>
        </div>
      </div>

      <div class="row">
        <div class="col-lg-10 m-auto">
          <div class="accordian-area">
            <div class="accordion accordion-flush" id="accordionFlushExample">
              <div class="accordion-item">
                <h2 class="accordion-header">
                  <button class="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseOne" aria-expanded="false" aria-controls="flush-collapseOne">
                    如何前往愛尼島？
                  </button>
                </h2>
                <div id="flush-collapseOne" class="accordion-collapse collapse show" data-bs-parent="#accordionFlushExample">
                  <div class="accordion-body">
                    從馬尼拉搭乘國內航班至愛尼島機場，航程約1小時。也可從巴拉望省府普林塞薩港搭乘快艇，航程約4小時。我們提供接送機服務，確保您的行程便利舒適。
                  </div>
                </div>
              </div>
              <div class="space16"></div>
              <div class="accordion-item">
                <h2 class="accordion-header">
                  <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseTwo" aria-expanded="false" aria-controls="flush-collapseTwo">
                    愛尼島有哪些熱門活動？
                  </button>
                </h2>
                <div id="flush-collapseTwo" class="accordion-collapse collapse" data-bs-parent="#accordionFlushExample">
                  <div class="accordion-body">
                    愛尼島提供豐富的水上活動，包括浮潛、潛水、跳島遊覽等。您也可以體驗當地特色文化活動，如傳統市集、手工藝製作。我們的度假設施提供完整的活動規劃服務。
                  </div>
                </div>
              </div>
              <div class="space16"></div>
              <div class="accordion-item">
                <h2 class="accordion-header">
                  <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseThree" aria-expanded="false" aria-controls="flush-collapseThree">
                    投資愛尼島的優勢？
                  </button>
                </h2>
                <div id="flush-collapseThree" class="accordion-collapse collapse" data-bs-parent="#accordionFlushExample">
                  <div class="accordion-body">
                    愛尼島擁有快速發展的旅遊業和不斷完善的基礎設施。政府支持觀光發展，提供投資優惠政策。自然資源豐富，具有長期發展潛力。
                  </div>
                </div>
              </div>
              <div class="space16"></div>
              <div class="accordion-item">
                <h2 class="accordion-header">
                  <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseFour" aria-expanded="false" aria-controls="flush-collapseFour">
                    投資建議與諮詢？
                  </button>
                </h2>
                <div id="flush-collapseFour" class="accordion-collapse collapse" data-bs-parent="#accordionFlushExample">
                  <div class="accordion-body">
                    我們的專業團隊提供完整的投資諮詢服務，協助您評估投資機會、了解當地法規，並提供全方位的投資建議。
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div class="row mt-5">
        <div class="col-lg-12 text-center">
          <div class="contact-btn-area">
            <h4>有更多問題？</h4>
            <div class="btn-area1">
              <a href="/contact" class="header-btn1 me-3">
                立即聯絡我們 <img src="/assets/img/icons/arrow3.svg" alt="" />
              </a>
              <a href="#" class="header-btn1">
                <i class="fa-brands fa-line me-2"></i>加入 Line
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  <!--===== FAQ AREA ENDS =======-->

  <!--===== CONTACT AREA STARTS =======-->
  <div class="contact1-section-area sp1">
    <div class="container">
      <div class="row">
        <div class="col-lg-7 m-auto">
          <div class="contact-header text-center heading2">
            <h5 class="text-anim">
              <img src="/assets/img/icons/logo-icon1.svg" alt="" />Valuation
            </h5>
            <h2 class="text-anim">Request Your Property Valuation</h2>
          </div>
        </div>
      </div>

      <div class="row">
        <div
          class="col-lg-10 m-auto"
          data-aos="zoom-in"
          data-aos-duration="1000"
        >
          <div class="contact-author-boxarea">
            <h3>Personal Information</h3>
            <div class="row">
              <div class="col-lg-4">
                <div class="contact-input-area">
                  <select name="country" class="nice-select">
                    <option value="1" data-display="Select">Select</option>
                    <option value="">Residential Property</option>
                    <option value="">Commercial Property</option>
                    <option value="">Industrial Property</option>
                    <option value="">Land Property</option>
                    <option value="">Mixed-Use Property</option>
                  </select>
                </div>
              </div>

              <div class="col-lg-4">
                <div class="contact-input-area">
                  <input type="text" placeholder="First Name" />
                </div>
              </div>

              <div class="col-lg-4">
                <div class="contact-input-area">
                  <input type="text" placeholder="Last Name" />
                </div>
              </div>

              <div class="col-lg-8">
                <div class="contact-input-area">
                  <input type="email" placeholder="Email Address" />
                </div>
              </div>

              <div class="col-lg-4">
                <div class="contact-input-area">
                  <input type="number" placeholder="Phone Number" />
                </div>
              </div>
              <div class="space50"></div>
              <h3>Property Information</h3>
              <div class="row">
                <div class="col-lg-4">
                  <div class="contact-input-area">
                    <select name="country" class="nice-select">
                      <option value="1" data-display="Type">Type</option>
                      <option value="">Residential Property</option>
                      <option value="">Commercial Property</option>
                      <option value="">Industrial Property</option>
                      <option value="">Land Property</option>
                      <option value="">Mixed-Use Property</option>
                    </select>
                  </div>
                </div>

                <div class="col-lg-4">
                  <div class="contact-input-area">
                    <input type="text" placeholder="Zip Code" />
                  </div>
                </div>

                <div class="col-lg-4">
                  <div class="contact-input-area">
                    <select name="country" class="nice-select">
                      <option value="1" data-display="City">City</option>
                      <option value="">France City</option>
                      <option value="">Belgium City</option>
                      <option value="">Norway City</option>
                      <option value="">Italy City</option>
                      <option value="">Denmark City</option>
                    </select>
                  </div>
                </div>

                <div class="col-lg-4">
                  <div class="contact-input-area">
                    <input type="text" placeholder="Number of Bedrooms" />
                  </div>
                </div>

                <div class="col-lg-4">
                  <div class="contact-input-area">
                    <input type="text" placeholder="N. of bathrooms" />
                  </div>
                </div>

                <div class="col-lg-4">
                  <div class="contact-input-area">
                    <input type="text" placeholder="Your Budget" />
                  </div>
                </div>
                <div class="space16"></div>
                <div class="col-lg-12">
                  <div class="contact-input-area">
                    <button type="submit" class="header-btn1">
                      Submit Now
                      <img src="/assets/img/icons/arrow1.svg" alt="" />
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  <!--===== CONTACT AREA ENDS =======-->

  <Footer />
</template>
