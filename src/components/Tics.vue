<template>
  <!-- here is banner 1st section section start -->
  <!-- <section class="herobanner">
    <div class="container">
      <div class="row">
        <div class="col-md-12 col-sm-12 col-lg-5 col-xl-5 bannertextarea">
          <h2>Tics</h2>
          <p class="pt-1">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s,
          </p>
          <button class="btn btnbook pt-2" href="#">Book Appointment</button>
        </div>
      </div>
    </div>
  </section> -->
  <section class="bannnerbg" :style="{ background: 'url(' + items[0].image + ')' }">
    <div class="container">
      <div class="row" v-for="(item, index) in items" :key="index">
        <div class="col-md-12 col-sm-12 col-lg-5 col-xl-5 bannertextarea">
          <h2>{{ item.title }}</h2>
          <p class="pt-1">{{ item.description }}</p>
          <button class="btn btnbook pt-2" href="#">{{ item.buttonText }}</button>
        </div>
      </div>
    </div>
  </section>
  
  <!-- here is banner 1st section section end -->
  <!-- Understanding Tics section start -->
  <div class="under_section">
    <div class="container">
      <div class="row">
        <div class="col-md-6">
          <div class="unimg">
            <img src="/images/unlist.png" />
          </div>
        </div>
        <div class="col-md-6">
          <div class="unimg_text">
            <h5>Understanding Tics</h5>
            <h2>Lorem Ipsum Dolor Text</h2>
            <li>What Are Tics?</li>
            <p>
              Tics are sudden, repetitive movements or sounds that children
              cannot easily control. They are categorized as:
            </p>
            <p>
              <b>Motor Tics:</b> Lorem Ipsum is simply dummy text of the
              printing and type setting industry.
            </p>
            <p>
              <b>Vocal Tics:</b> Vocal Tics: Lorem Ipsum is simply dummy text of
              the printing and type setting industry.
            </p>
            <li>Causes of Tics</li>
            <p>Tics can be influenced by a variety of factors, including:</p>
            <p><b>Genetics:</b> Family history of tic disorders.</p>
            <p><b>Neurological Factors:</b> Differences in brain function.</p>
            <p>
              <b>Environmental Stressors:</b>Stressful life events or infections
            </p>
            <button class="btn btnbook pt-2" href="#">Book Appointment</button>
          </div>
        </div>
      </div>
    </div>
  </div>
  <!-- Understanding Tics section section end -->
  <!-- Symptoms section section end -->
  <div class="under_section spacebuttom">
    <div class="container">
      <div class="row">
        <div class="col-md-6">
          <div class="unimg_text list">
            <h5>Signs And Symptoms</h5>
            <h2>Tics Signs and Symptoms</h2>
            <p>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s,
            </p>
            <li>Causes of Tics</li>
            <li>Causes of Tics</li>
            <li>Causes of Tics</li>
            <li>Causes of Tics</li>
            <button class="btn btnbook pt-2" href="#">
              Fix An Appointment
            </button>
          </div>
        </div>
        <div class="col-md-6">
          <div class="unimg">
            <img src="/images/sny.png" />
          </div>
        </div>
      </div>
    </div>
  </div>
  <!-- Symptoms section end -->
  <!-- service section start -->
  <div class="services_sectionmain">
    <div class="container">
      <div class="row">
        <div class="col-md-12">
          <h5>Our Services</h5>
          <h2>Lorem Ipsum Dolor Text</h2>
          <p>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. <br />
            Lorem Ipsum has been the industry's standard dummy text ever since
            the 1500s,
          </p>
        </div>
        <div class="container pt-3">
          <swiper
            :slidesPerView="1"
            :spaceBetween="10"
            :autoplay="{
              delay: 2500,
              disableOnInteraction: false,
            }"
            :pagination="{
              clickable: true,
            }"
            :breakpoints="{
              '@0.00': {
                slidesPerView: 1,
                spaceBetween: 10,
              },
              '@0.75': {
                slidesPerView: 2,
                spaceBetween: 20,
              },
              '@1.00': {
                slidesPerView: 3,
                spaceBetween: 20,
              },
            }"
            :modules="modules"
            class="mySwiper3 swiper9 Tics"
          >
            <swiper-slide class="slidehight">
              <div class="boxheight">
                <div class="innerbox">
                  <h4 class="text-center">Lorem Ipsum</h4>
                  <p class="text-center">
                    Lorem Ipsum is simply dummy text of the printing and
                    typesetting industry. Lorem Ipsum has been the industry's
                    standard dummy text ever since the 1500s, when an unknown
                    printer took a galley of type and scrambled.
                  </p>
                </div>
              </div>
            </swiper-slide>
            <swiper-slide>
              <div class="boxheight">
                <div class="innerbox">
                  <h4 class="text-center">Lorem Ipsum</h4>
                  <p class="text-center">
                    Lorem Ipsum is simply dummy text of the printing and
                    typesetting industry. Lorem Ipsum has been the industry's
                    standard dummy text ever since the 1500s, when an unknown
                    printer took a galley of type and scrambled.
                  </p>
                </div>
              </div>
            </swiper-slide>
            <swiper-slide>
              <div class="boxheight">
                <div class="innerbox">
                  <h4 class="text-center">Lorem Ipsum</h4>
                  <p class="text-center">
                    Lorem Ipsum is simply dummy text of the printing and
                    typesetting industry. Lorem Ipsum has been the industry's
                    standard dummy text ever since the 1500s, when an unknown
                    printer took a galley of type and scrambled.
                  </p>
                </div>
              </div>
            </swiper-slide>
            <swiper-slide>
              <div class="boxheight">
                <div class="innerbox">
                  <h4 class="text-center">Lorem Ipsum</h4>
                  <p class="text-center">
                    Lorem Ipsum is simply dummy text of the printing and
                    typesetting industry. Lorem Ipsum has been the industry's
                    standard dummy text ever since the 1500s, when an unknown
                    printer took a galley of type and scrambled.
                  </p>
                </div>
              </div>
            </swiper-slide>
            <swiper-slide>
              <div class="boxheight">
                <div class="innerbox">
                  <h4 class="text-center">Lorem Ipsum</h4>
                  <p class="text-center">
                    Lorem Ipsum is simply dummy text of the printing and
                    typesetting industry. Lorem Ipsum has been the industry's
                    standard dummy text ever since the 1500s, when an unknown
                    printer took a galley of type and scrambled.
                  </p>
                </div>
              </div>
            </swiper-slide>
            <swiper-slide>
              <div class="boxheight">
                <div class="innerbox">
                  <h4 class="text-center">Lorem Ipsum</h4>
                  <p class="text-center">
                    Lorem Ipsum is simply dummy text of the printing and
                    typesetting industry. Lorem Ipsum has been the industry's
                    standard dummy text ever since the 1500s, when an unknown
                    printer took a galley of type and scrambled.
                  </p>
                </div>
              </div>
            </swiper-slide>
          </swiper>
          <div class="swiper-pagination"></div>
        </div>
      </div>
    </div>
  </div>
  <!-- service section end -->
  <div class="under_section spacebuttom">
    <div class="container">
      <div class="row">
        <div class="col-md-6">
          <div class="unimg">
            <img src="/images/whyc.png" />
          </div>
        </div>
        <div class="col-md-6">
          <div class="unimg_text list">
            <h5>Why Choose Us</h5>
            <h2>How Our Experts Can Help</h2>
            <p>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s.
            </p>
            <p>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s,
            </p>
            <li>Causes of Tics</li>
            <li>Causes of Tics</li>
            <li>Causes of Tics</li>
            <button class="btn btnbook pt-2" href="#">Book Now</button>
          </div>
        </div>
      </div>
    </div>
  </div>
  <!-- here is the Testimonials 10th section start -->
  <section class="ourteam">
    <div class="container">
      <div class="row">
        <h5 class="text-center">Testimonials</h5>
        <h2 class="text-center">Real Experiences, Real Results</h2>
        <p class="text-center mt-3 mb-4">
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the <br />
          industry's standard dummy text ever since the 1500s.
        </p>
      </div>
    </div>
    <div class="container pt-3">
      <swiper
        :slidesPerView="1"
        :spaceBetween="10"
        :autoplay="{
          delay: 2500,
          disableOnInteraction: false,
        }"
        :pagination="{
          clickable: true,
        }"
        :breakpoints="{
          '@0.00': {
            slidesPerView: 1,
            spaceBetween: 10,
          },
          '@0.75': {
            slidesPerView: 2,
            spaceBetween: 20,
          },
          '@1.00': {
            slidesPerView: 3,
            spaceBetween: 40,
          },
          '@1.50': {
            slidesPerView: 4,
            spaceBetween: 50,
          },
        }"
        :modules="modules"
        class="mySwiper3 swiper5"
      >
        <swiper-slide class="testslidebox">
          <img src="/images/testimonial.png" alt="" class="imgtest" />
          <p>
            Lorem Ipsum is simply dummy text of the printing and type setting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s.
          </p>
          <div class="bottombox">
            <img src="/images/testi.png" alt="" />
            <h2>Lorem Ipsum</h2>
            <h6>Manager</h6>
          </div>
        </swiper-slide>
        <swiper-slide class="testslidebox">
          <img src="/images/testimonial.png" alt="" class="imgtest" />
          <p>
            Lorem Ipsum is simply dummy text of the printing and type setting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s.
          </p>
          <div class="bottombox">
            <img src="/images/testi2.png" alt="" />
            <h2>Lorem Ipsum</h2>
            <h6>Manager</h6>
          </div>
        </swiper-slide>
        <swiper-slide class="testslidebox">
          <img src="/images/testimonial.png" alt="" class="imgtest" />
          <p>
            Lorem Ipsum is simply dummy text of the printing and type setting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s.
          </p>
          <div class="bottombox">
            <img src="/images/testi.png" alt="" />
            <h2>Lorem Ipsum</h2>
            <h6>Manager</h6>
          </div>
        </swiper-slide>
        <swiper-slide class="testslidebox">
          <img src="/images/testimonial.png" alt="" class="imgtest" />
          <p>
            Lorem Ipsum is simply dummy text of the printing and type setting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s.
          </p>
          <div class="bottombox">
            <img src="/images/testi.png" alt="" />
            <h2>Lorem Ipsum</h2>
            <h6>Manager</h6>
          </div>
        </swiper-slide>
        <swiper-slide class="testslidebox">
          <img src="/images/testimonial.png" alt="" class="imgtest" />
          <p>
            Lorem Ipsum is simply dummy text of the printing and type setting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s.
          </p>
          <div class="bottombox">
            <img src="/images/testi.png" alt="" />
            <h2>Lorem Ipsum</h2>
            <h6>Manager</h6>
          </div>
        </swiper-slide>
        <swiper-slide class="testslidebox">
          <img src="/images/testimonial.png" alt="" class="imgtest" />
          <p>
            Lorem Ipsum is simply dummy text of the printing and type setting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s.
          </p>
          <div class="bottombox">
            <img src="/images/testi2.png" alt="" />
            <h2>Lorem Ipsum</h2>
            <h6>Manager</h6>
          </div>
        </swiper-slide>
        <swiper-slide class="testslidebox">
          <img src="/images/testimonial.png" alt="" class="imgtest" />
          <p>
            Lorem Ipsum is simply dummy text of the printing and type setting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s.
          </p>
          <div class="bottombox">
            <img src="/images/testi.png" alt="" />
            <h2>Lorem Ipsum</h2>
            <h6>Manager</h6>
          </div>
        </swiper-slide>
      </swiper>
      <div class="swiper-pagination"></div>
    </div>
  </section>
  <!-- here is the Testimonials 10th section end -->
  <div class="under_section spacebuttom">
    <div class="container">
      <div class="row">
        <div class="col-md-6">
          <div class="unimg_text list">
            <h5>Schedule a Free Consultation</h5>
            <h2>Lorem Ipsum Dolor Text</h2>
            <p>
              Our team is here to guide you through the assessment process and
              answer any questions you may have. Schedule a free consultation
              with one of our specialists to discuss your concerns and learn
              more about our diagnostic services.
            </p>
            <button class="btn btnbook pt-2" href="#">
              Schedule a Free Consultation
            </button>
          </div>
        </div>
        <div class="col-md-6">
          <div class="unimg">
            <img src="/images/free.png" />
          </div>
        </div>
      </div>
    </div>
  </div>
  <!-- here is Why CTA Us 7th section section start -->
  <section class="ctabg">
    <div class="container">
      <div class="row">
        <div class="col-md-9 col-sm-12 col-lg-9 col-xl-9">
          <h2 class="text-white">Take the First Step Today</h2>
          <p class="text-white">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem <br />Ipsum has been the industry's standard dummy
            text ever since the 1500s,
          </p>
        </div>
        <div class="col-md-3 col-sm-12 col-lg-3 col-xl-3 bookbtncta">
          <button class="btnwhite">Book Appointments</button>
        </div>
      </div>
    </div>
  </section>
  <!-- here is Why CTA Us 7th section section start -->
</template>
<script>
// Import Swiper Vue.js components
import { Swiper, SwiperSlide } from "swiper/vue";

// Import Swiper styles
import "swiper/css";

import "swiper/css/pagination";

// import required modules
import { Autoplay, Pagination } from "swiper/modules";

export default {
  name: "Tics",
  components: {
    Swiper,
    SwiperSlide,
  },
  setup() {
    return {
      modules: [Autoplay, Pagination],
      items: [
        {
          image: 'images/ticsbanner.png',
          title: 'Tics',
          description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s.',
          buttonText: 'Book Appointment'
        },
      ]

    };
  },
};
</script>
<style scoped>
/* here is the banner section css */
/* .herobanner {
  background-image: url(/images/ticsbanner.png);
  background-size: cover;
  background-position: center;
  padding: 100px 0;
  height: 700px;
  display: flex;
  align-items: center;
} */
.under_section {
  padding: 140px 0px 0px 0px;
}
.unimg img {
  width: 100%;
}
.unimg_text li {
  font-size: 20px;
  padding: 8px;
  background: #f4f8fb;
  margin-bottom: 14px;
  color: #04498c;
  font-weight: 600;
}
.unimg_text.list li {
  background: no-repeat;
  font-family: Poppins;
  font-size: 18px;
  font-weight: 400;
  text-align: left;
  padding: 0;
  list-style: disc;
  color: #777777;
}
.under_section.spacebuttom {
  padding-bottom: 140px;
}
li::marker {
  color: #0297fe;
}
.services_sectionmain {
  background: #f8f9fa;
  padding: 70px 0px;
}
.services_sectionmain {
  text-align: center;
}
.innerbox {
  background: #fff;
  padding: 43px;
  box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
  margin: 16px;
  border-radius: 50px 0;
}
.swiper9 {
  overflow: hidden;
  height: 380px;
}
.swiper5 {
  overflow: hidden;
  height: 500px;
}
.testslidebox {
  background: #f4f8fb !important;
  display: flex;
  box-shadow: 0px 1.87px 5.6px 0px #7d7d7d40;
  border-radius: 8px;
  padding: 50px 0px 10px;
  max-height: 420px !important;
  flex-direction: column;
  align-items: stretch;
}
.swiper-slide.swiper-slide-next {
  box-shadow: none;
  background: transparent !important;
  border-radius: 4px;
}
.swiper-slide.swiper-slide-active {
  background: transparent !important;
}
section.ourteam {
  padding: 60px 0px;
  background: #f8f9fa;
}
.testslidebox img {
  margin: auto;
  display: block;
  width: 35px;
}
.testslidebox p {
  padding-top: 15px;
  font-size: 14.94px;
  font-style: italic;
  font-weight: 500;
  line-height: 28px;
  padding: 0px 20px;
  text-align: center;
  color: #777777;
  padding-bottom: 30px;
}
.bottombox {
  position: relative;
  border-radius: 0 0 8px 8px;
  background: white;
  padding: 19px 0 22px;
}
.bottombox img {
  margin: auto;
  box-shadow: 0px 0.93px 11.21px 0px #6a6a6a4a;
  border: 6px solid #fff;
  display: block;
  width: 70px;
  border-radius: 50%;
  margin-top: -54px;
}
.bottombox h2 {
  font-size: 23.35px;
  font-weight: 600;
  padding-top: 10px;
  color: #777777;
  line-height: 29.44px;
  text-align: center;
}
.bottombox h6 {
  font-size: 14.94px;
  font-weight: 500;
  line-height: 18.84px;
  text-align: center;
  color: #0297fe;
}
</style>
