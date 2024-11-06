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

        <!-- Banner Area -->
        <div class="banner-area">
            <div class="d-table">
                <div class="d-table-cell">
                    <div class="container-fluid m-0 p-0">
                        <div class="row align-items-center justify-content-center">
                          <div class="col-lg-6">
                                <div class="banner-img">
                                    <img src="/assets/img/banner-image.webp" alt="Banner Images">
                                </div>
                            </div>
                            <div class="col-lg-6">
                                <div class="banner-content">
                                    <h2>探索無限潛力的旅遊天堂</h2>
                                    <p>
                                        愛尼島是菲律賓最後一片淨土，擁有純淨的海灘、壯麗的石灰岩地形和豐富的海洋生態。
                                        這裡不僅是度假天堂，更是充滿投資潛力的新興旅遊勝地。讓我們帶您探索愛尼島的無限可能。
                                    </p>
                                    <div class="banner-btn">
                                        <a href="https://www.youtube.com/watch?v=wWgSuG3QPTo" target="_blank" class="banner-btn1 border-radius">探索愛尼島的無限可能</a>
                                        <a href="contact.html" class="banner-btn2 border-radius ml-20">影片導覽</a>
                                    </div>
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
                            <h2>Dobby is a Private Service Since 2009</h2>
                            <p>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla lobortis eros id urna 
                                sollicitudin feugiat. In imperdiet at dui nec vehicula. Aenean nec sapien odio. 
                                Nunc laoreet auctor mollis. Duis posuere eros in nisi efficitur facilisis. 
                                Aliquam in magna lacinia, hendrerit elit vel, aliquet metus. Cras quis suscipit est. 
                                Vivamus fringilla blandit rutrum. Phasellus vitae massa tincidunt, placerat risus ac,
                                tincidunt tellus. Maecenas eu sem nec urna ultricies auctor. Etiam sodales sapien eget 
                                est tincidunt volutpat. Integer dapibus nisl nec arcu fermentum ornare. Proin at est non 
                                ex aliquam imperdiet. Integer id ornare dui. Maecenas dignissim, odio sit amet aliquet accumsan, 
                                ipsum tortor venenatis turpis, suscipit congue odio turpis a leo.
                            </p>
                            <p> 
                                Maecenas quis ipsum augue. Cras laoreet massa eget neque mattis, quis venenatis erat eleifend. 
                                Curabitur consectetur odio sit amet diam vehicula, nec rutrum leo aliquet. Quisque quis felis 
                                tristique, cursus nisi eu, mattis neque. Duis facilisis leo id mauris malesuada, non pulvinar 
                                leo laoreet. Nam efficitur dolor quis pulvinar porttitor. Nullam mollis vulputate felis eu 
                                fermentum. Duis id risus erat. Donec laoreet ante nunc, in maximus mauris bibendum sit amet.
                            </p>
                            <div class="about-more-btn">
                                <a href="about.html" class="default-btn4">Read More</a>
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
                    <span>Our Services</span>
                    <h2>Dobby Provides Services</h2>
                    <p>
                        The introduced now, the they expect, animals the desk, and catch temple. 
                        More seven my couldn't it the character using recommended.
                    </p>
                </div>

                <div class="row justify-content-center">
                    <div class="col-lg-4 col-md-6">
                        <div class="service-item box-shadow">
                            <a href="service-details.html" class="service-item-icon">
                                <i class="flaticon-swimming"></i>
                            </a>
                            <a href="service-details.html" class="service-head">
                                <h3>Swimming & Diving</h3>
                            </a>
                            <p>
                                As sign what each derided to organizaasd tion. Remodelling 
                                that, win word as have the proceeded lots subject
                            </p>
                        </div>
                    </div>

                    <div class="col-lg-4 col-md-6">
                        <div class="service-item box-shadow">
                            <a href="service-details.html" class="service-item-icon">
                                <i class="flaticon-teacher"></i>
                            </a>
                            <a href="service-details.html" class="service-head">
                                <h3>Teaching Swimming & Diving</h3>
                            </a>
                            <p>
                                As sign what each derided to organizaasd tion. Remodelling
                                that, win word as have the proceeded lots subject
                            </p>
                        </div>
                    </div>

                    <div class="col-lg-4 col-md-6">
                        <div class="service-item box-shadow">
                            <a href="service-details.html" class="service-item-icon">
                                <i class="flaticon-flipper"></i>
                            </a>
                            <a href="service-details.html" class="service-head">
                                <h3>Swimming Equipments</h3>
                            </a>
                            <p>
                                As sign what each derided to organizaasd tion. Remodelling 
                                that, win word as have the proceeded lots subject
                            </p>
                        </div>
                    </div>

                    <div class="col-lg-4 col-md-6">
                        <div class="service-item box-shadow">
                            <a href="service-details.html" class="service-item-icon">
                                <i class="flaticon-swimmer"></i>
                            </a>
                            <a href="service-details.html" class="service-head">
                                <h3>Monthly Swimming Event</h3>
                            </a>
                            <p>
                                As sign what each derided to organizaasd tion. Remodelling that, 
                                win word as have the proceeded lots subject
                            </p>
                        </div>
                    </div>

                    <div class="col-lg-4 col-md-6">
                        <div class="service-item box-shadow">
                            <a href="service-details.html" class="service-item-icon">
                                <i class="flaticon-dive"></i>
                            </a>
                            <a href="service-details.html" class="service-head">
                                <h3>Monthly Diving Event</h3>
                            </a>
                            <p>
                                As sign what each derided to organizaasd tion. Remodelling that, 
                                win word as have the proceeded lots subject
                            </p>
                        </div>
                    </div>

                    <div class="col-lg-4 col-md-6">
                        <div class="service-item box-shadow">
                            <a href="service-details.html" class="service-item-icon">
                                <i class="flaticon-oxigen"></i>
                            </a>
                            <a href="service-details.html" class="service-head">
                                <h3>Scuba Diving Equipments</h3>
                            </a>
                            <p>
                                As sign what each derided to organizaasd tion. Remodelling that, 
                                win word as have the proceeded lots subject
                            </p>
                        </div>
                    </div>
                    
                    <div class="visit-btn text-center">
                        Visit More<a href="services.html">Services</a> 
                    </div> 
                </div>
            </div>
        </section>
        <!-- Service Area Two End -->

        <!-- Apply Another -->
        <div class="apply-another">
            <div class="container">
                <div class="apply-text">
                    <span>Apply for Job</span>
                    <h2>We Are Hiring Expertise for Three Different Categories</h2>
                    <p>
                        It willingly room, drew even in place structure  he its holding to view. Need harder my in how 
                        there's into receive wanted ambushed that home, his this it position. Room, on by was it heard parks.
                        Compared one Room. Testimony you mister music.Discipline assets briefs with tone completely
                    </p>

                    <div class="apply-btn">
                        <a href="contact.html" class="default-btn3">Apply Now</a>
                        <a href="service-details.html" class="default-btn4 ml-20">Our Career</a>
                    </div>
                </div>
            </div>
        </div>
        <!-- Apply Another End -->

        <!-- Course Area -->
        <div class="course-other pt-100 pb-70">
            <div class="container">
                <div class="section-title text-center mb-50">
                    <span>Our Courses</span>
                    <h2>We Are Taking Two Courses</h2>
                    <p>
                        The introduced now, the they expect, animals the desk, and catch temple.
                        More seven my couldn't it the character using recommended.
                    </p>
                </div>
                <div class="row justify-content-center">
                    <div class="col-lg-6">
                        <div class="course-card active">
                            <img src="/assets/img/course/2.jpg" alt="Course Images">
                            <div class="couser-delt">
                                <h3>Diving Course</h3>
                                <p>
                                    Being last that. Fresh client back by their and de rived his than withdraw are imitation; He must
                                    by their project to privilege a overgrown can wait well good volumes and story.
                                </p>

                                <div class="course-delt-btn">
                                    <a href="courses.html" class="default-btn3">Take Course</a>
                                    <a href="service-details.html" class="default-btn4 ml-20">Know Details</a>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div class="col-lg-6">
                        <div class="course-card">
                            <img src="/assets/img/course/1.jpg" alt="Course Images">
                            <div class="couser-delt">
                                <h3>Swimming Course</h3>
                                <p>
                                    Being last that. Fresh client back by their and de rived his than withdraw are imitation; He must
                                    by their project to privilege a overgrown can wait well good volumes and story.
                                </p>

                                <div class="course-delt-btn">
                                    <a href="courses.html" class="default-btn3">Take Course</a>
                                    <a href="service-details.html" class="default-btn4 ml-20">Know Details</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <!-- Course Area End -->

        <!-- Product Area -->
        <section class="product-area pt-100 pb-70">
            <div class="container">
                <div class="section-title text-center mb-50">
                    <span>Our Products</span>
                    <h2> Buy the Equipment You Need</h2>
                    <p>
                        The introduced now, the they expect, animals the desk, and catch 
                        temple. More seven my couldn't it the character using recommended.
                    </p>
                </div>
                <div class="row justify-content-center">
                    <div class="col-lg-3 col-sm-6">
                        <div class="product-item">
                            <a href="shop-details.html">
                                <img src="/assets/img/product/1.jpg" alt="Product Images">
                            </a>
                            <div class="product-cotent">
                                <div class="product-text">
                                    <a href="shop-details.html"> 
                                        <h3>Diving Glass</h3>
                                    </a>
                                    <span>$35</span>
                                </div>
                                <a href="shop-details.html" class="add-product border-radius">
                                    <i class="flaticon-plus"></i>
                                </a>
                            </div>
                        </div>
                    </div>

                    <div class="col-lg-3 col-sm-6">
                        <div class="product-item">
                            <a href="shop-details.html">
                                <img src="/assets/img/product/2.jpg" alt="Product Images">
                            </a>
                            <div class="product-cotent">
                                <div class="product-text">
                                    <a href="shop-details.html"> 
                                        <h3>Diving Rite</h3>
                                    </a>
                                    <span>$30</span>
                                </div>
                                <a href="shop-details.html" class="add-product border-radius">
                                    <i class="flaticon-plus"></i>
                                </a>
                            </div>
                        </div>
                    </div>

                    <div class="col-lg-3 col-sm-6">
                        <div class="product-item">
                            <a href="shop-details.html">
                                <img src="/assets/img/product/3.jpg" alt="Product Images border-radius">
                            </a>
                            <div class="product-cotent">
                                <div class="product-text">
                                    <a href="shop-details.html"> 
                                        <h3>Fins Bungee</h3>
                                    </a>
                                    <span>$75</span>
                                </div>
                                <a href="shop-details.html" class="add-product border-radius">
                                    <i class="flaticon-plus"></i>
                                </a>
                            </div>
                        </div>
                    </div>

                    <div class="col-lg-3 col-sm-6">
                        <div class="product-item">
                            <a href="shop-details.html">
                                <img src="/assets/img/product/4.jpg" alt="Product Images border-radius">
                            </a>
                            <div class="product-cotent">
                                <div class="product-text">
                                    <a href="shop-details.html"> 
                                        <h3>Life Jacket</h3>
                                    </a>
                                    <span>$25</span>
                                </div>
                                <a href="shop-details.html" class="add-product border-radius">
                                    <i class="flaticon-plus"></i>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        <!-- Product Area End -->

        <!-- Gallery Area -->
        <section class="gallery-area pt-100 pb-70">
            <div class="container">
                <div class="section-title text-center mb-50">
                    <span>Our Gallery</span>
                    <h2>Amazing Photos at Our Daily Dobby</h2>
                    <p>
                        The introduced now, the they expect, animals the desk, and catch
                        temple. More seven my couldn't it the character using recommended.
                    </p>
                </div>
                <div class="gallery-view">
                    <div class="row justify-content-center">
                        <div class="col-lg-4 col-sm-6">
                            <div class="gallery-item">
                                <a href="assets/img/gallery/1.jpg">
                                    <img class="border-radius-top" src="/assets/img/gallery/1.jpg" alt="Gallery Images">
                                </a>
                                <div class="gallery-text">
                                    <h3>Baby Girl Learn Swimming</h3>
                                </div>
                            </div>
                        </div>
    
                        <div class="col-lg-4 col-sm-6">
                            <div class="gallery-item">
                                <a href="assets/img/gallery/2.jpg">
                                    <img class="border-radius-top" src="/assets/img/gallery/2.jpg" alt="Gallery Images">
                                </a>
                                <div class="gallery-text">
                                    <h3>John at His Swim Event</h3>
                                </div>
                            </div>
                        </div>
    
                        <div class="col-lg-4 col-sm-6">
                            <div class="gallery-item">
                                <a href="assets/img/gallery/3.jpg">
                                    <img class="border-radius-top" src="/assets/img/gallery/3.jpg" alt="Gallery Images">
                                </a>
                                <div class="gallery-text">
                                    <h3>Scuba Diving Instruction</h3>
                                </div>
                            </div>
                        </div>
    
                        <div class="col-lg-4 col-sm-6">
                            <div class="gallery-item">
                                <a href="assets/img/gallery/4.jpg">
                                    <img class="border-radius-top" src="/assets/img/gallery/4.jpg" alt="Gallery Images">
                                </a>
                                <div class="gallery-text">
                                    <h3>Under Water Scuba Diving</h3>
                                </div>
                            </div>
                        </div>
    
                        <div class="col-lg-4 col-sm-6">
                            <div class="gallery-item">
                                <a href="assets/img/gallery/5.jpg">
                                    <img class="border-radius-top" src="/assets/img/gallery/5.jpg" alt="Gallery Images">
                                </a>
                                <div class="gallery-text">
                                    <h3>Mike’s Frist Dive for Dobby</h3>
                                </div>
                            </div>
                        </div>
    
                        <div class="col-lg-4 col-sm-6">
                            <div class="gallery-item">
                                <a href="assets/img/gallery/6.jpg">
                                    <img class="border-radius-top" src="/assets/img/gallery/6.jpg" alt="Gallery Images">
                                </a>
                                <div class="gallery-text">
                                    <h3>Boy Learning Swimming</h3>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        <!-- Gallery Area End -->

        <!-- Testimonial Area -->
        <div class="testimonial-area ptb-100">
            <div class="container">
                <div class="section-title text-center mb-50">
                    <span>Testimonial</span>
                    <h2 class="color-white">What People Said About Dobby</h2>
                    <p class="color-white">
                        The introduced now, the they expect, animals the desk, and catch temple. 
                        More seven my couldn't it the character using recommended.
                    </p>
                </div>
                <div class="testimonial-slider owl-carousel owl-theme">
                    <div class="testimonial-slide">
                        <div class="row align-items-center justify-content-center">
                            <div class="col-lg-5">
                                <div class="testimonial-img text-center">
                                    <img src="/assets/img/testimonial/1.png" alt="Testimonial Images">
                                    <div class="shape-img">
                                        <img src="/assets/img/shape/img-shape.png" alt="Images">
                                    </div>
                                </div>
                            </div>

                            <div class="col-lg-7">
                                <div class="testimonial-item">
                                    <p>
                                        “Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do ei
                                        usmod tempor incididunt ut labore et dolore magna aliqua. 
                                        Quis ipsum suspendisse ultrices gravida. Risus commodo.”
                                    </p>
                                    <h3>Smith Doe</h3>
                                    <span>Software Engineer</span>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div class="testimonial-slide">
                        <div class="row align-items-center justify-content-center">
                            <div class="col-lg-5">
                                <div class="testimonial-img text-center">
                                    <img src="/assets/img/testimonial/2.png" alt="Testimonial Images">
                                    <div class="shape-img">
                                        <img src="/assets/img/shape/img-shape.png" alt="Images">
                                    </div>
                                </div>
                            </div>

                            <div class="col-lg-7">
                                <div class="testimonial-item">
                                    <p>
                                        “Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do ei
                                        usmod tempor incididunt ut labore et dolore magna aliqua. 
                                        Quis ipsum suspendisse ultrices gravida. Risus commodo.”
                                    </p>
                                    <h3>Evana Doe</h3>
                                    <span>Market Manager</span>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div class="testimonial-slide">
                        <div class="row align-items-center justify-content-center">
                            <div class="col-lg-5">
                                <div class="testimonial-img text-center">
                                    <img src="/assets/img/testimonial/3.png" alt="Testimonial Images">
                                    <div class="shape-img">
                                        <img src="/assets/img/shape/img-shape.png" alt="Images">
                                    </div>
                                </div>
                            </div>

                            <div class="col-lg-7">
                                <div class="testimonial-item">
                                    <p>
                                        “Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do ei
                                        usmod tempor incididunt ut labore et dolore magna aliqua. 
                                        Quis ipsum suspendisse ultrices gravida. Risus commodo.”
                                    </p>
                                    <h3>John Doe</h3>
                                    <span>Designer</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <!-- Testimonial Area End -->

       <!-- Trainers Area -->
       <section class="trainers-area pt-100 pb-70">
        <div class="container">
            <div class="section-title text-center mb-50">
                <span>Our Trainers</span>
                <h2>Our Professional Trainers</h2>
                <p>
                    The introduced now, the they expect,animals the desk, and catch temple. 
                    More seven my couldn't it the character using recommended.
                </p>
            </div>
            <div class="row justify-content-center">
                <div class="col-lg-3 col-sm-6">
                    <div class="trainer-card border-radius-top">
                        <a href="instructor.html">
                            <img class="border-radius-top" src="/assets/img/trainers/1.jpg" alt="Trainers Images">
                        </a>
                        <div class="trainer-content">
                            <a href="instructor.html">
                                <h3>John Doe</h3>
                            </a>
                            <span>Professional Diver</span>
                            <div class="social-icon">
                                <ul>
                                    <li class="border-radius">
                                        <a href="https://www.facebook.com/login/" target="_blank">
                                            <i class="fab fa-facebook-f"></i>
                                        </a>
                                    </li>
                                    <li class="border-radius">
                                        <a href="https://twitter.com/i/flow/login" target="_blank">
                                            <i class="fab fa-twitter"></i>
                                        </a>
                                    </li>
                                    <li class="border-radius">
                                        <a href="https://www.instagram.com/accounts/login/?hl=en" target="_blank">
                                            <i class="fab fa-instagram"></i>
                                        </a>
                                    </li>
                                    <li class="border-radius">
                                        <a href="https://www.google.com/" target="_blank">
                                                <i class="fab fa-google-plus-g"></i>
                                        </a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>

                <div class="col-lg-3 col-sm-6">
                    <div class="trainer-card">
                        <a href="instructor.html">
                            <img class="border-radius-top" src="/assets/img/trainers/2.jpg" alt="Trainers Images">
                        </a>
                        <div class="trainer-content">
                            <a href="instructor.html">
                                <h3>Evana Doe</h3>
                            </a>
                            <span>Professional Trainer</span>
                            <div class="social-icon">
                                <ul>
                                    <li class="border-radius">
                                        <a href="https://www.facebook.com/login/" target="_blank">
                                                <i class="fab fa-facebook-f"></i>
                                            </a>
                                    </li>
                                    <li class="border-radius">
                                        <a href="https://twitter.com/i/flow/login" target="_blank">
                                                <i class="fab fa-twitter"></i>
                                            </a>
                                    </li>
                                    <li class="border-radius">
                                        <a href="https://www.instagram.com/accounts/login/?hl=en" target="_blank">
                                                <i class="fab fa-instagram"></i>
                                            </a>
                                    </li>
                                    <li class="border-radius">
                                        <a href="https://www.google.com/" target="_blank">
                                                <i class="fab fa-google-plus-g"></i>
                                            </a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>

                <div class="col-lg-3 col-sm-6">
                    <div class="trainer-card">
                        <a href="instructor.html">
                            <img class="border-radius-top" src="/assets/img/trainers/3.jpg" alt="Trainers Images">
                        </a>
                        <div class="trainer-content active">
                            <a href="instructor.html">
                                <h3>Smith Doe</h3>
                            </a>
                            <span>Professional Swimmer</span>
                            <div class="social-icon active">
                                <ul>
                                    <li class="border-radius">
                                        <a href="https://www.facebook.com/login/" target="_blank">
                                                <i class="fab fa-facebook-f"></i>
                                            </a>
                                    </li>
                                    <li class="border-radius">
                                        <a href="https://twitter.com/i/flow/login" target="_blank">
                                                <i class="fab fa-twitter"></i>
                                            </a>
                                    </li>
                                    <li class="border-radius">
                                        <a href="https://www.instagram.com/accounts/login/?hl=en" target="_blank">
                                                <i class="fab fa-instagram"></i>
                                            </a>
                                    </li>
                                    <li class="border-radius">
                                        <a href="https://www.google.com/" target="_blank">
                                                <i class="fab fa-google-plus-g"></i>
                                            </a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>

                <div class="col-lg-3 col-sm-6">
                    <div class="trainer-card">
                        <a href="instructor.html">
                            <img class="border-radius-top" src="/assets/img/trainers/4.jpg" alt="Trainers Images">
                        </a>
                        <div class="trainer-content">
                            <a href="instructor.html">
                                <h3>Marida Doe</h3>
                            </a>
                            <span>Professional Instructor</span>
                            <div class="social-icon">
                                <ul>
                                    <li class="border-radius">
                                        <a href="https://www.facebook.com/login/" target="_blank">
                                                <i class="fab fa-facebook-f"></i>
                                            </a>
                                    </li>
                                    <li class="border-radius">
                                        <a href="https://twitter.com/i/flow/login" target="_blank">
                                                <i class="fab fa-twitter"></i>
                                            </a>
                                    </li>
                                    <li class="border-radius">
                                        <a href="https://www.instagram.com/accounts/login/?hl=en" target="_blank">
                                                <i class="fab fa-instagram"></i>
                                            </a>
                                    </li>
                                    <li class="border-radius">
                                        <a href="https://www.google.com/" target="_blank">
                                                <i class="fab fa-google-plus-g"></i>
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
    <!-- Trainers Area End -->

        <!-- News Area -->
        <section class="news-area pb-70">
            <div class="container">
                <div class="section-title text-center mb-50">
                    <span>Our News</span>
                    <h2>Daily Updates of Our Dobby</h2>
                    <p>
                        The introduced now, the they expect, animals the desk, and catch temple. 
                        More seven my couldn't it the character using recommended.
                    </p>
                </div>
                <div class="row justify-content-center">
                    <div class="col-lg-4 col-md-6">
                        <div class="news-card">
                            <div class="news-img">
                                <a href="news-details.html">
                                    <img class="border-radius-top" src="/assets/img/news/1.jpg" alt="News Images">
                                </a>
                                <div class="sub-text">
                                    <a href="news-details.html">SCUBA DIVING</a>
                                </div>
                            </div>
                            <ul>
                                <li>
                                   <a href="news-details.html">John Doe</a> 
                                </li>
                                <li>26 APR 2024</li>
                            </ul>
                            <div class="news-content">
                                <a href="news-details.html">
                                    <h3>New Scuba Diving Course Sheet Will Update Soon</h3>
                                </a>
                                <p>
                                    Less entirely counter. Parent, curiously, must would frequency,
                                    would very of wellfeigned legs, doctor back in the business.
                                </p>
                                <a href="news-details.html" class="news-icon">
                                    Read More 
                                </a>
                            </div>
                        </div>
                    </div>

                    <div class="col-lg-4 col-md-6">
                        <div class="news-card border-radius-top">
                            <div class="news-img">
                                <a href="news-details.html">
                                    <img class="border-radius-top" src="/assets/img/news/2.jpg" alt="News Images">
                                </a>
                                <div class="sub-text"> 
                                    <a href="news-details.html">
                                        SWIMMING EVENT
                                    </a>
                                </div>
                            </div>
                            <ul>
                                <li>
                                    <a href="news-details.html">John Doe</a> 
                                </li>
                                <li>27 APR 2024</li>
                            </ul>
                            <div class="news-content">
                                <a href="news-details.html">
                                    <h3>A Diving Event Will Happen at Dobby Center</h3>
                                </a>
                                <p>
                                    Less entirely counter. Parent, curiously, must would frequency,
                                    would very of wellfeigned legs, doctor back in the business.
                                </p>
                                <a href="news-details.html" class="news-icon">
                                    Read More 
                                </a>
                            </div>
                        </div>
                    </div>

                    <div class="col-lg-4  col-md-6 ">
                        <div class="news-card border-radius-top">
                            <div class="news-img">
                                <a href="news-details.html">
                                    <img class="border-radius-top" src="/assets/img/news/3.jpg" alt="News Images">
                                </a>
                                <div class="sub-text">
                                    <a href="news.html">EQUIPMENT</a>
                                </div>
                            </div>
                            <ul>
                                <li>
                                    <a href="news-details.html">John Doe</a> 
                                </li>
                                <li>28 APR 2024</li>
                            </ul>
                            <div class="news-content">
                                <a href="news-details.html">
                                    <h3>A Swimming Event Will Happen at Dobby Center</h3>
                                </a>
                                <p>
                                    Less entirely counter. Parent, curiously, must would frequency,
                                    would very of wellfeigned legs, doctor back in the business.
                                </p>
                                <a href="news-details.html" class="news-icon">
                                    Read More 
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
