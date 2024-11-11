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
                    <div class="conatiner">
                        <div class="inner-title text-center">
                            <h3>常見問題</h3>
                            <ul>
                                <li>
                                    <a href="/">首頁</a>
                                </li>
                                <li>
                                    <i class="fas fa-chevron-right"></i>
                                </li>
                                <li>
                                    常見問題 
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <!-- Inner Banner End -->

        <!-- Faq Section -->
        <section class="faq-section pt-100 pb-70">
            <div class="container">
                <!-- <div class="section-title text-center mb-50">
                    <span>FAQ</span>
                    <h2>常見問題解答</h2>
                </div> -->
                <div class="faq-area">
                    <ul class="accordion">
                        <li class="accordion-item">
                            <a class="accordion-title active" href="javascript:void(0)">
                                <i class="fas fa-chevron-circle-right"></i> 
                                如何從台灣前往愛妮島？
                            </a>
                            <p class="accordion-content show">
                                目前從台灣前往愛妮島主要透過馬尼拉或巴拉旺的轉機路線：<br>
                                - 第一段：從台灣搭乘約3.5-4小時航班至馬尼拉國際機場<br>
                                - 第二段：轉搭國內線前往愛妮島機場，飛行時間約1-1.5小時<br>
                                - 總行程時間：需預留5-6小時路程時間，建議選擇2-3小時以上的轉機時間<br>
                                - 航空公司選擇：菲律賓航空、宿霧太平洋航空等<br><br>
                                提醒：建議提早3個月以上訂購機票，可享有較優惠票價。旺季時段更要提前規劃。
                            </p>
                        </li>                        
                        <li class="accordion-item">
                            <a class="accordion-title" href="javascript:void(0)">
                                <i class="fas fa-chevron-circle-right"></i>
                                愛妮島有哪些熱門旅遊活動？
                            </a>
                            <p class="accordion-content">
                                熱門活動包括跳島行程、潛水和浮潛、沙灘活動和探險等：<br>
                                - Tour A路線：探索小瀉湖和大瀉湖，最適合拍攝美照<br>
                                - Tour B路線：洞穴探險和沙灘，適合尋幽探祕<br>
                                - Tour C路線：適合浮潛和海上活動愛好者<br>
                                - Tour D路線：尋訪秘境沙灘，人潮較少<br><br>
                                特別推薦：<br>
                                - Las Cabanas Beach觀賞日落<br>
                                - 豐富海洋生態浮潛活動<br>
                                - 獨木舟探索隱密海灣<br>
                                - 叢林健行體驗自然生態<br><br>
                                建議提前預訂行程，旺季期間名額有限。
                            </p>
                        </li>
                        <li class="accordion-item">
                            <a class="accordion-title" href="javascript:void(0)">
                                <i class="fas fa-chevron-circle-right"></i> 
                                投資愛妮島需要注意什麼？
                            </a>
                            <p class="accordion-content">
                                投資前務必考慮以下關鍵因素：<br>
                                - 法律規範：<br>
                                  * 了解當地土地法規<br>
                                  * 外資投資限制<br>
                                  * 經營許可要求<br>
                                - 環保政策：<br>
                                  * 建築規範<br>
                                  * 環境影響評估<br>
                                  * 永續發展要求<br>
                                - 市場趨勢：<br>
                                  * 旅遊業發展前景<br>
                                  * 投資回報評估<br>
                                  * 風險管理策略<br><br>
                                建議尋求專業顧問協助，確保投資程序合法完整。
                            </p>
                        </li>
                        <li class="accordion-item">
                            <a class="accordion-title" href="javascript:void(0)">
                                <i class="fas fa-chevron-circle-right"></i>
                                有關當地餐飲的推薦？
                            </a>
                            <p class="accordion-content">
                                愛妮島提供多樣化的餐飲選擇：<br>
                                - 當地特色：傳統泰式餐廳、海鮮燒烤、在地小吃攤<br>
                                - 異國料理：義大利餐廳、法式餐廳、日本料理<br>
                                - 推薦餐廳：<br>
                                  * Art Cafe：早午餐首選<br>
                                  * Altrove：義大利料理<br>
                                  * Midtown Bakery：麵包甜點<br><br>
                                價格範圍：<br>
                                - 平價餐點：200-400披索<br>
                                - 中價餐廳：500-800披索<br>
                                - 高級餐廳：1000披索以上
                            </p>
                        </li>
                        <li class="accordion-item">
                            <a class="accordion-title" href="javascript:void(0)">
                                <i class="fas fa-chevron-circle-right"></i>
                                如何獲取更多資訊？
                            </a>
                            <p class="accordion-content">
                                有多種管道可以獲得愛妮島更多資訊：<br>
                                - 線上諮詢：<br>
                                  * 官方Line帳號<br>
                                  * Facebook粉絲專頁<br>
                                  * Instagram官方帳號<br>
                                - 實體諮詢：<br>
                                  * 台灣辦事處<br>
                                  * 旅遊說明會<br>
                                  * 投資展覽會<br>
                                - 定期資訊：<br>
                                  * 電子報訂閱<br>
                                  * 最新優惠通知<br>
                                  * 活動更新資訊
                            </p>
                        </li>
                    </ul>
                </div>
            </div>
        </section>
        <!-- Faq Section End -->

  <Footer />
</template>
