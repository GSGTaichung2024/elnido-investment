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

        <!-- Banner Area -->
        <div class="banner-area">
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

                            <div class="col-lg-6">
                                <div class="banner-img">
                                    <img src="/assets/img/banner-image.webp" alt="Banner Images">
                                </div>
                            </div>



                        </div>
                    </div>
                </div>
            </div>
        </div> 
        <!-- Banner Area End -->

        <!-- About Another -->
        <div class="about-another pt-100 pb-70">
            <div class="container-fluid m-0 p-0">
                <div class="row align-items-center justify-content-center">
                    <div class="col-lg-5">
                        <div class="about-img2">
                            <img src="/assets/img/about/2.png" alt="About Images">
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
                            <span>About Us</span>
                            <h2>探索愛尼島的自然與文化之美</h2>
                            <p>
                                愛尼島是菲律賓巴拉望省最著名的度假勝地之一，擁有純淨的白沙灘、清澈的海水和豐富的海洋生態。這裡不僅有壯麗的自然景觀，更保存了當地原住民的傳統文化。
                            </p>
                            <h4>精選旅遊路線</h4>
                            <ul>
                                <li>路線A：大小瀉湖探索之旅</li>
                                <li>路線B：七個群島跳島之旅</li>
                                <li>路線C：浮潛與海底探索之旅</li>
                                <li>路線D：日落沙灘文化體驗</li>
                            </ul>
                            <div class="about-more-btn">
                                <a href="about.html" class="default-btn4">查看更多旅遊資訊</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <!-- About Another End -->

        <!-- Service Area Two -->
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
                            <a href="service-details.html" class="service-item-icon">
                                <i class="flaticon-swimming"></i>
                            </a>
                            <a href="service-details.html" class="service-head">
                                <h3>觀光業蓬勃發展</h3>
                            </a>
                            <p>
                                愛尼島每年吸引超過百萬遊客到訪，旅遊業持續成長，為投資者帶來穩定收益。酒店、餐飲等相關產業具有極大發展潛力。
                            </p>
                        </div>
                    </div>

                    <div class="col-lg-4 col-md-6">
                        <div class="service-item box-shadow">
                            <a href="service-details.html" class="service-item-icon">
                                <i class="flaticon-teacher"></i>
                            </a>
                            <a href="service-details.html" class="service-head">
                                <h3>優質自然資源</h3>
                            </a>
                            <p>
                                擁有原始海灘、珊瑚礁和熱帶雨林等豐富自然資源，適合發展生態旅遊、度假村等項目，具有獨特的競爭優勢。
                            </p>
                        </div>
                    </div>

                    <div class="col-lg-4 col-md-6">
                        <div class="service-item box-shadow">
                            <a href="service-details.html" class="service-item-icon">
                                <i class="flaticon-flipper"></i>
                            </a>
                            <a href="service-details.html" class="service-head">
                                <h3>完善基礎設施</h3>
                            </a>
                            <p>
                                政府持續投入基礎建設，包括機場擴建、道路優化等，大幅提升島嶼可及性與便利性，有利於各類投資項目的開展。
                            </p>
                        </div>
                    </div>

                    <div class="col-lg-4 col-md-6">
                        <div class="service-item box-shadow">
                            <a href="service-details.html" class="service-item-icon">
                                <i class="flaticon-swimmer"></i>
                            </a>
                            <a href="service-details.html" class="service-head">
                                <h3>投資政策優惠</h3>
                            </a>
                            <p>
                                當地政府提供多項投資優惠政策，包括稅收減免、土地使用優惠等，降低投資成本，提高投資回報率。
                            </p>
                        </div>
                    </div>

                    <div class="col-lg-4 col-md-6">
                        <div class="service-item box-shadow">
                            <a href="service-details.html" class="service-item-icon">
                                <i class="flaticon-dive"></i>
                            </a>
                            <a href="service-details.html" class="service-head">
                                <h3>人力資源豐富</h3>
                            </a>
                            <p>
                                當地擁有充足的勞動力資源，且工資成本相對較低，有利於勞動密集型產業的發展與經營。
                            </p>
                        </div>
                    </div>

                    <div class="col-lg-4 col-md-6">
                        <div class="service-item box-shadow">
                            <a href="service-details.html" class="service-item-icon">
                                <i class="flaticon-oxigen"></i>
                            </a>
                            <a href="service-details.html" class="service-head">
                                <h3>增值潛力大</h3>
                            </a>
                            <p>
                                隨著旅遊業發展和基礎設施完善，島上房地產和土地價值持續上漲，具有極大的資產增值空間。
                            </p>
                        </div>
                    </div>
                    
                    <div class="text-center">
                        <a href="services.html" class="default-btn4">了解更多投資機會</a>
                    </div>
                </div>
            </div>
        </section>
        <!-- Service Area Two End -->

        <!-- Apply Another -->
        <div class="apply-another">
            <div class="container">
                <div class="apply-text">
                    <span>Q&A</span>
                    <h2>投資人常見問題</h2>
                </div>
            </div>
        </div>
        <!-- Apply Another End -->

        <!-- FAQ Area -->
        <div class="faq-area pt-100 pb-70">
            <div class="container">
                <div class="faq-area">
                    <ul class="accordion">
                        <li class="accordion-item">
                            <a class="accordion-title active" href="javascript:void(0)">
                                <i class="fas fa-chevron-circle-right"></i> 
                                在愛尼島投資需要具備哪些條件？
                            </a>
                            <p class="accordion-content show">
                                外國投資者在愛尼島投資需要符合菲律賓相關法規要求。一般而言，您需要：1) 有效的護照和簽證；2) 在當地註冊成立公司或與當地合作夥伴合資；3) 符合外資持股比例限制；4) 取得相關部門的投資許可證。建議您可以諮詢專業的投資顧問，以了解詳細的投資流程。
                            </p>
                        </li>                        
                        <li class="accordion-item">
                            <a class="accordion-title" href="javascript:void(0)">
                                <i class="fas fa-chevron-circle-right"></i>
                                愛尼島的土地產權制度是如何運作的？
                            </a>
                            <p class="accordion-content">
                                根據菲律賓法律，外國人不能直接擁有土地，但可以通過以下方式投資：1) 與菲律賓公民成立合資公司，外資持股不超過40%；2) 簽訂長期租賃合約，最長可達50年，並可再延長25年；3) 購買公寓或住宅單位的所有權。我們可以協助您評估最適合的投資方式。
                            </p>
                        </li>
                        <li class="accordion-item">
                            <a class="accordion-title" href="javascript:void(0)">
                                <i class="fas fa-chevron-circle-right"></i> 
                                投資愛尼島的旅遊業有哪些優勢？
                            </a>
                            <p class="accordion-content">
                                愛尼島擁有多項投資優勢：1) 觀光資源豐富，自然景觀優美；2) 政府大力支持旅遊業發展，提供稅收優惠；3) 遊客數量逐年增長，市場潛力大；4) 土地和營運成本相對較低；5) 基礎設施持續改善，交通便利性提高。這些因素都使愛尼島成為極具吸引力的旅遊投資目的地。
                            </p>
                        </li>
                        <li class="accordion-item">
                            <a class="accordion-title" href="javascript:void(0)">
                                <i class="fas fa-chevron-circle-right"></i>
                                投資回報期大約需要多久？
                            </a>
                            <p class="accordion-content">
                                投資回報期因項目類型而異。一般而言，酒店和度假村項目的回收期約為5-7年，商業地產約為3-5年，住宅項目約為2-4年。但實際回報期會受到多種因素影響，如經營管理能力、市場條件、投資規模等。我們建議投資者進行詳細的可行性研究，以做出更準確的評估。
                            </p>
                        </li>
                        <li class="accordion-item">
                            <a class="accordion-title" href="javascript:void(0)">
                                <i class="fas fa-chevron-circle-right"></i>
                                有哪些投資風險需要注意？
                            </a>
                            <p class="accordion-content">
                                主要風險包括：1) 政策法規變動風險；2) 匯率波動風險；3) 自然災害風險；4) 市場競爭風險；5) 經營管理風險。建議投資者做好風險評估和管理，選擇可靠的合作夥伴，並制定完善的風險應對方案。我們的專業團隊可以為您提供相關諮詢服務。
                            </p>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
        <!-- FAQ Area End -->



  <Footer />
</template>
