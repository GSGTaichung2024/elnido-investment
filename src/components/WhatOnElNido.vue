<template>
  <!-- What's on El Nido -->
  <section class="whats-on ptb-100 bg-light">
    <div class="container">
      <div class="section-title text-center mb-50">
        <h2>What's on El Nido</h2>
      </div>

      <div class="row">
        <div class="col-lg-4 mb-4">
          <div class="news-item box-shadow">
            <a href="https://www.marieclaire.com.tw/lifestyle/issue/82539" target="_blank">
              <img
                src="/assets/img/home_news1.jpg"
                alt="Sea Turtle Conservation"
                class="w-100"
              />
              <div class="p-4">
                <h3>專訪｜菲律賓愛妮島──海龜媽媽 Sylvia，築巢10米回家路是我的使命</h3>
                <p>
                  「菲律賓巴拉望最大海龜保育中心創辦人」Sylvia 與 H Hotel Group 創辦人與總裁 Henry 以對大自然的愛和熱情，一點一滴建立海龜寶寶園區，拯救瀕臨絕種危機的海龜。
                </p>
              </div>
            </a>
          </div>
        </div>

        <div class="col-lg-4 mb-4">
          <div class="news-item box-shadow">
            <a href="https://www.businessweekly.com.tw/Archive/Article?StrId=7011263" target="_blank">
              <img
                src="/assets/img/home_news2.jpg"
                alt="El Nido Activities" 
                class="w-100"
              />
              <div class="p-4">
                <h3>划獨木舟訪大潟湖、秘境浮潛，直擊愛妮島上的台灣幫</h3>
                <p>
                  菲律賓愛妮島從未開發的原始島嶼變觀光勝地，背後推手竟是一群台灣人。許明順租土地、修繕道路，攜手日本PIECE集團蓋飯店，引進多元商業設施，打造全新旅遊體驗...
                </p>
              </div>
            </a>
          </div>
        </div>

        <div class="col-lg-4 mb-4">
          <div class="news-item box-shadow">
            <a href="https://www.businessweekly.com.tw/Archive/Article?StrId=7010827" target="_blank">
              <img
                src="/assets/img/home_news3.jpg"
                alt="Business Weekly Interview"
                class="w-100"
              />
              <div class="p-4">
                <h3>14歲創業、31歲退休當背包客，台灣夫妻變愛妮島生態旅遊推手</h3>
                <p>
                  被譽為菲律賓最美仙境的愛妮島，旅遊業崛起的重要推手竟是一對來自台灣的夫妻。從26歲投資失利到31歲背包客生活，他們在無數次海島旅遊中感受海洋生機，最終決定落腳世界最美沙灘...
                </p>
              </div>
            </a>
          </div>
        </div>
      </div>
    </div>
  </section>

</template>

<script>
import { useRouter, useRoute } from "vue-router";
import { useI18n } from "vue-i18n";

export default {
    name: "whatonelnido",
    setup() {
        const { t, locale } = useI18n();
        const currentCategory = useRoute().query.category;
        return {
            t,
            currentCategory,
            locale
        };
    },
};
</script>

<style scoped>
/* Add any custom styles here */
</style>
