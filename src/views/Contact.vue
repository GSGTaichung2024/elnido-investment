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
        <div class="inner-banner bg-shape2 bg-color2">
            <div class="d-table">
                <div class="d-table-cell">
                    <div class="conatiner">
                        <div class="inner-title text-center">
                            <h3>聯絡我們</h3>
                            <ul>
                                <li>
                                    <a href="index.html">首頁</a>
                                </li>
                                <li>
                                    <i class="fas fa-chevron-right"></i>
                                </li>
                                <li>
                                    聯絡我們
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <!-- Inner Banner End -->
        
        <!-- Contact Area -->
        <div class="contact-area pt-100 pb-70">
            <div class="container">
                <div class="row justify-content-center">
                    <div class="col-lg-4 col-md-6">
                        <div class="contact-item">
                            <div class="icon-contact text-center"><i class="far fa-clock"></i></div>
                            <h3>週一至週五：上午9:00 - 下午6:00</h3>
                        </div>
                    </div>
                    <div class="col-lg-4 col-md-6">
                        <div class="contact-item">
                            <div class="icon-contact text-center"><i class="fas fa-map-marker-alt"></i></div>
                            <h3>Palawan, El Nido, Philippines</h3>
                        </div>
                    </div>
                    <div class="col-lg-4 col-md-6">
                        <div class="contact-item">
                            <div class="icon-contact text-center"><i class="fab fa-facebook-f"></i></div>
                            <h3>
                                <a href="https://www.facebook.com/elnidogroup" target="_blank">
                                    elnidogroup
                                </a>
                            </h3>
                        </div>
                    </div>
                    <div class="col-lg-4 col-md-6">
                        <div class="contact-item">
                            <div class="icon-contact text-center"><i class="fab fa-line"></i></div>
                            <h3>Line ID: @elnidogroup</h3>
                        </div>
                    </div>
                    <div class="col-lg-4 col-md-6">
                        <div class="contact-item text-center">
                            <div class="icon-contact"><i class="flaticon-telephone"></i></div>
                            <h3>
                                <a href="tel:+886912345678">
                                    +886 912-345-678
                                </a>
                            </h3>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <!-- Contact Area End -->

  <Footer />
</template>
