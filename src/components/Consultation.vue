<template>
  <!-- here is banner 1st section section start -->
  <section
    class="bannnerbg"
    :style="{ background: 'url(' + items[0].image + ')' }"
  >
    <div class="container">
      <div class="row" v-for="(item, index) in items" :key="index">
        <div class="col-md-12 col-sm-12 col-lg-6 col-xl-5 bannertextarea">
          <h2>{{ item.title }}</h2>
          <h6 class="pt-1">{{ item.subtitle }}</h6>
          <p class="pt-1">{{ item.description }}</p>
          <button class="btn btnbook pt-2" href="#">
            {{ item.buttonText }}
          </button>
        </div>
      </div>
    </div>
  </section>
  <!-- here is banner 1st section section end -->

  <!-- here is Our Multidisciplinary Team 2nd section section start-->
  <section class="multidisciplinarybg">
    <div class="container">
      <div class="row">
        <h5 class="text-center">Our People</h5>
        <h2 class="text-center">Lorem Ipsum Dolor Text</h2>
        <p class="text-center">
          Lorem Ipsum&nbsp;is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has <br />
          been the industry's standard dummy text ever since the 1500s,
        </p>
      </div>
      <div>
        <swiper
          :slidesPerView="1"
          :grid="{
            rows: 2,
          }"
          :spa
          ceBetween="10"
          :pagination="{
            clickable: true,
          }"
          :breakpoints="{
            '@0.00': {
              slidesPerView: 1,
              spaceBetween: 10,
            },
            '768': {
              slidesPerView: 2,
              spaceBetween: 20,
            },
            '1024': {
              slidesPerView: 3,
              spaceBetween: 20,
            },
            '1366': {
              slidesPerView: 4,
              spaceBetween: 30,
            },
          }"
          :modules="modules"
          class="mySwiper swipebox"
        >
          <swiper-slide>
            <div class="teambox">
              <div class="inerbox">
                <h4>Psychiatrists</h4>
              </div>
              <div class="hidebox">
                <h4>Psychiatrists</h4>
                <p>
                  Our board-certified psychiatrists bring years of experience in
                  diagnosing and treating a wide range of mental health
                  conditions. They work closely with patients to develop
                  medication management plans that are tailored to individual
                  needs, ensuring the best possible outcomes.
                </p>
                <button class="btnwhite">Book Now</button>
              </div>
            </div>
          </swiper-slide>
          <swiper-slide>
            <div class="teambox">
              <div class="inerbox">
                <h4>Clinical Psychologists</h4>
              </div>
              <div class="hidebox">
                <h4>Clinical Psychologists</h4>
                <p>
                  Our board-certified psychiatrists bring years of experience in
                  diagnosing and treating a wide range of mental health
                  conditions. They work closely with patients to develop
                  medication management plans that are tailored to individual
                  needs, ensuring the best possible outcomes.
                </p>
                <button class="btnwhite">Book Now</button>
              </div>
            </div>
          </swiper-slide>
          <swiper-slide>
            <div class="teambox">
              <div class="inerbox">
                <h4>Pediatric Psychologists</h4>
              </div>
              <div class="hidebox">
                <h4>Pediatric Psychologists</h4>
                <p>
                  Our board-certified psychiatrists bring years of experience in
                  diagnosing and treating a wide range of mental health
                  conditions. They work closely with patients to develop
                  medication management plans that are tailored to individual
                  needs, ensuring the best possible outcomes.
                </p>
                <button class="btnwhite">Book Now</button>
              </div>
            </div>
          </swiper-slide>
          <swiper-slide>
            <div class="teambox">
              <div class="inerbox">
                <h4>Neuropsychologists</h4>
              </div>
              <div class="hidebox">
                <h4>Neuropsychologists</h4>
                <p>
                  Our board-certified psychiatrists bring years of experience in
                  diagnosing and treating a wide range of mental health
                  conditions. They work closely with patients to develop
                  medication management plans that are tailored to individual
                  needs, ensuring the best possible outcomes.
                </p>
                <button class="btnwhite">Book Now</button>
              </div>
            </div>
          </swiper-slide>
          <swiper-slide>
            <div class="teambox">
              <div class="inerbox">
                <h4>Behavioral Therapists</h4>
              </div>
              <div class="hidebox">
                <h4>Behavioral Therapists</h4>
                <p>
                  Our board-certified psychiatrists bring years of experience in
                  diagnosing and treating a wide range of mental health
                  conditions. They work closely with patients to develop
                  medication management plans that are tailored to individual
                  needs, ensuring the best possible outcomes.
                </p>
                <button class="btnwhite">Book Now</button>
              </div>
            </div>
          </swiper-slide>
          <swiper-slide>
            <div class="teambox">
              <div class="inerbox">
                <h4>Sleep Specialists</h4>
              </div>
              <div class="hidebox">
                <h4>Sleep Specialists</h4>
                <p>
                  Our board-certified psychiatrists bring years of experience in
                  diagnosing and treating a wide range of mental health
                  conditions. They work closely with patients to develop
                  medication management plans that are tailored to individual
                  needs, ensuring the best possible outcomes.
                </p>
                <button class="btnwhite">Book Now</button>
              </div>
            </div>
          </swiper-slide>
          <swiper-slide>
            <div class="teambox">
              <div class="inerbox">
                <h4>Occupational Therapists</h4>
              </div>
              <div class="hidebox">
                <h4>Occupational Therapists</h4>
                <p>
                  Our board-certified psychiatrists bring years of experience in
                  diagnosing and treating a wide range of mental health
                  conditions. They work closely with patients to develop
                  medication management plans that are tailored to individual
                  needs, ensuring the best possible outcomes.
                </p>
                <button class="btnwhite">Book Now</button>
              </div>
            </div>
          </swiper-slide>
          <swiper-slide>
            <div class="teambox">
              <div class="inerbox">
                <h4>Social Workers</h4>
              </div>
              <div class="hidebox">
                <h4>Social Workers</h4>
                <p>
                  Our board-certified psychiatrists bring years of experience in
                  diagnosing and treating a wide range of mental health
                  conditions. They work closely with patients to develop
                  medication management plans that are tailored to individual
                  needs, ensuring the best possible outcomes.
                </p>
                <button class="btnwhite">Book Now</button>
              </div>
            </div>
          </swiper-slide>
          <swiper-slide>
            <div class="teambox">
              <div class="inerbox">
                <h4>Psychiatrists</h4>
              </div>
              <div class="hidebox">
                <h4>Psychiatrists</h4>
                <p>
                  Our board-certified psychiatrists bring years of experience in
                  diagnosing and treating a wide range of mental health
                  conditions. They work closely with patients to develop
                  medication management plans that are tailored to individual
                  needs, ensuring the best possible outcomes.
                </p>
                <button class="btnwhite">Book Now</button>
              </div>
            </div>
          </swiper-slide>
          <swiper-slide>
            <div class="teambox">
              <div class="inerbox">
                <h4>Clinical Psychologists</h4>
              </div>
              <div class="hidebox">
                <h4>Clinical Psychologists</h4>
                <p>
                  Our board-certified psychiatrists bring years of experience in
                  diagnosing and treating a wide range of mental health
                  conditions. They work closely with patients to develop
                  medication management plans that are tailored to individual
                  needs, ensuring the best possible outcomes.
                </p>
                <button class="btnwhite">Book Now</button>
              </div>
            </div>
          </swiper-slide>
          <swiper-slide>
            <div class="teambox">
              <div class="inerbox">
                <h4>Pediatric Psychologists</h4>
              </div>
              <div class="hidebox">
                <h4>Pediatric Psychologists</h4>
                <p>
                  Our board-certified psychiatrists bring years of experience in
                  diagnosing and treating a wide range of mental health
                  conditions. They work closely with patients to develop
                  medication management plans that are tailored to individual
                  needs, ensuring the best possible outcomes.
                </p>
                <button class="btnwhite">Book Now</button>
              </div>
            </div>
          </swiper-slide>
          <swiper-slide>
            <div class="teambox">
              <div class="inerbox">
                <h4>Neuropsychologists</h4>
              </div>
              <div class="hidebox">
                <h4>Neuropsychologists</h4>
                <p>
                  Our board-certified psychiatrists bring years of experience in
                  diagnosing and treating a wide range of mental health
                  conditions. They work closely with patients to develop
                  medication management plans that are tailored to individual
                  needs, ensuring the best possible outcomes.
                </p>
                <button class="btnwhite">Book Now</button>
              </div>
            </div>
          </swiper-slide>
          <swiper-slide>
            <div class="teambox">
              <div class="inerbox">
                <h4>Behavioral Therapists</h4>
              </div>
              <div class="hidebox">
                <h4>Behavioral Therapists</h4>
                <p>
                  Our board-certified psychiatrists bring years of experience in
                  diagnosing and treating a wide range of mental health
                  conditions. They work closely with patients to develop
                  medication management plans that are tailored to individual
                  needs, ensuring the best possible outcomes.
                </p>
                <button class="btnwhite">Book Now</button>
              </div>
            </div>
          </swiper-slide>
          <swiper-slide>
            <div class="teambox">
              <div class="inerbox">
                <h4>Sleep Specialists</h4>
              </div>
              <div class="hidebox">
                <h4>Sleep Specialists</h4>
                <p>
                  Our board-certified psychiatrists bring years of experience in
                  diagnosing and treating a wide range of mental health
                  conditions. They work closely with patients to develop
                  medication management plans that are tailored to individual
                  needs, ensuring the best possible outcomes.
                </p>
                <button class="btnwhite">Book Now</button>
              </div>
            </div>
          </swiper-slide>
          <div class="swiper-pagination"></div>
        </swiper>
      </div>
    </div>
  </section>
  <!-- here is Our Multidisciplinary Team 2nd section end -->
  <!-- here is Mental Health 3rd section section start-->
  <section class="mentalhealthbg">
    <div class="container">
      <div class="row">
        <div class="col-md-12 col-sm-12 col-lg-6 col-xl-6">
          <div class="textarea pe-4">
            <h2 class="pb-1 text-white">
              Take the First Step Towards Better Mental Health Today!
            </h2>
            <p class="pb-2 text-white">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry.
            </p>
            <ul>
              <li>
                <img src="/images/whitecall.png" alt="" class="imgmental" />+91
                987-654-3210
              </li>
              <li>
                <img
                  src="/images/envolove.png"
                  alt=""
                  class="imgmental"
                />example@xyz.com
              </li>
              <li>
                <img src="/images/mapwhite.png" alt="" class="imgmental" />123,
                Xyz City, Example State
              </li>
            </ul>
            <button class="btnwhite mt-3 pe-4 ps-4" href="#">
              Book an Appointment Online
            </button>
          </div>
        </div>
        <div class="col-md-12 col-sm-12 col-lg-6 col-xl-6">
          <div class="ps-3 mentalimage">
            <img src="/images/mentalright.png" alt="" />
          </div>
        </div>
      </div>
    </div>
  </section>
  <!-- here is Mental Health 3rd section section start-->
  <!-- here is commitment 4th section section start -->
  <section class="commitmentbg">
    <div class="container">
      <div class="row">
        <div class="col-md-12 col-sm-12 col-lg-6 col-xl-6">
          <div class="commitment pe-3">
            <img src="/images/commitment.png" alt="" />
          </div>
        </div>
        <div class="col-md-12 col-sm-12 col-lg-6 col-xl-6">
          <div class="textarea ps-4">
            <h5 class="pb-1">Our Commitment to You</h5>
            <h2 class="pb-1">Lorem Ipsum Dolor Text</h2>
            <p class="pb-2">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled it to make a type specimen book.
            </p>
            <p class="pb-2">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s,
            </p>
            <button class="btn btnbook pt-2 pe-4 ps-4" href="#">
              Call Us Today
            </button>
          </div>
        </div>
      </div>
    </div>
  </section>
  <!-- here is commitment 4th section section end -->
</template>
<script>
// Import Swiper Vue.js components
import { Swiper, SwiperSlide } from "swiper/vue";
// Import Swiper styles
import "swiper/css";
import "swiper/css/grid";

import "swiper/css/pagination";

// import required modules
import { Autoplay, Pagination, Grid } from "swiper/modules";

export default {
  name: "Leader",
  components: {
    Swiper,
    SwiperSlide,
  },
  setup() {
    return {
      modules: [Autoplay, Pagination, Grid],
    };
  },
  data() {
    return {
      items: [
        {
          image: "/images/leaderbg.png",
          title: "Our Consultants",
          description:
            " Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s. ",
          buttonText: "Book Appointment",
        },
      ],
    };
  },
  methods: {},
};
</script>
<style scoped>
/* here is the css of multidisciplinarybg  */
.multidisciplinarybg {
  padding: 120px 0px 200px;
}
.teambox {
  border-radius: 9px;
  box-shadow: 0px 0px 10px 0px #83818133;
  padding: 15px;
  position: relative;
}
.inerbox {
  border-radius: 5px;
  display: flex;
  min-height: 270px;
  padding: 25px 10px;
  border: 1px solid #04498c;
  align-items: center;
  justify-content: center;
}
.inerbox h4 {
  font-size: 20px;
  font-weight: 600;
  text-align: center;
  color: #04498c;
}
.teambox:hover .hidebox {
  opacity: 1;
}
.hidebox {
  border-radius: 9px;
  opacity: 0;
  position: absolute;
  left: 0;
  padding: 15px;
  top: 0;
  color: #fff;
  width: 100%;
  background: linear-gradient(180deg, #0297fe -54.69%, #04498c 100%);
  align-items: center;
  justify-content: center;
  display: flex;
  min-height: 290px;
  flex-direction: column;
}

.swipebox {
  height: 740px;
}
.swiper-slide-active {
  background: transparent !important;
}
.swiper-slide.swiper-slide-next {
  background: transparent !important;
}
.hidebox h4 {
  font-size: 20px;
  font-weight: 600;
  text-align: center;
}
.hidebox p {
  font-size: 13px !important;
  font-weight: 400;
  line-height: 23px;
  text-align: center;
  color: #fff;
}
/* here is the css of commitmentbg */
.commitmentbg {
  padding: 120px 0;
}
.commitmentbg img {
  width: 100% !important;
}

/* here is the css of mentalhealth section */
.mentalhealthbg {
  background-image: url(/images/mentalhealthbg.png);
  background-repeat: no-repeat;
  padding: 70px 0;
  background-size: cover;
  color: #fff !important;
}
.btnwhite {
  border: 1px solid white !important;
}
.mentalimage img {
  width: 100%;
  margin-top: -250px;
  height: 550px;
}
.imgmental {
  height: 15px;
  width: 30px;
  padding-right: 15px;
}
.textarea li {
  margin-bottom: 12px;
}
.mentalimage {
  display: flex;
  justify-content: flex-end;
}
.mentalimage img {
  width: 90%;
  margin-top: -250px;
  height: 600px;
  margin-bottom: -70px;
}
.swiper-slide {
  max-height: 300px !important;
  margin-top: 40px !important;
}

/* """"""""""""""""""""""""""""""""""here is the css of media query"""""""""""""""""""""""""""""""""""""" */
@media (max-width: 767px) {
  h2 {
    width: 100%;
    text-align: center !important;
  }
  p {
    width: 100%;
    text-align: center !important;
  }
  .bannnerbg {
    background-position: left !important;
    padding: 10px 0 !important;
  }
  .bannertextarea .btnbook {
    display: block !important;
    margin: 10px auto;
  }
  .swipebox {
    height: 420px;
  }
  .multidisciplinarybg,
  .commitmentbg {
    padding: 50px 0px;
  }
  .mentalimage img {
    width: 100%;
    margin-top: 30px;
    margin-bottom: 0px;
    height: 400px;
  }
  .textarea ul {
    display: flex;
    flex-direction: column;
    align-items: center;
  }
  .btnwhite {
    margin: auto;
    display: block;
  }
  .commitment,
  .textarea {
    padding: 0px !important;
  }
  .mentalimage {
    padding: 0px !important;
  }
}
@media (min-width: 768px) and (max-width: 1023px) {
  .bannnerbg {
    background-position: left center;
    padding: 10px 0 !important;
  }
  .textarea ul {
    display: flex;
    flex-direction: column;
    align-items: center;
  }
  .btnwhite {
    margin: auto;
    display: block;
  }
  .mentalimage {
    padding: 0px !important;
  }
  .bannertextarea p {
    width: 59%;
  }
  .multidisciplinarybg {
    padding: 60px 0px;
  }
  .swipebox {
    height: 420px;
  }
  .mentalimage img {
    width: 100%;
    margin-top: 30px;
    height: 500px;
  }
  .commitmentbg {
    padding: 60px 0;
  }
  .textarea {
    padding: 0 !important;
  }
  .commitmentbg .btnbook {
    display: block;
    margin: auto;
  }
}
@media (min-width: 1024px) and (max-width: 1279px) {
  .swipebox {
    height: 420px;
  }
  .swiper-slide {
    height: 300px !important;
  }
  .bannnerbg {
    background-position: left center !important;
    padding: 10px 0 !important;
  }
  .mentalimage {
    padding: 0px !important;
  }
  a {
    margin-left: 6px;
    font-size: 13px !important;
  }
  .mentalimage img {
    width: 100%;
    margin-top: 0px;
    object-fit: contain;
    height: 360px;
    margin-bottom: -70px;
  }
  .commitmentbg img {
    width: 100% !important;
    height: 380px;
    object-fit: cover;
    object-position: left;
  }
}
@media (min-width: 1280px) and (max-width: 1365px) {
  .commitmentbg img {
    width: 100% !important;
    height: 335px;
    object-fit: cover;
    object-position: left;
  }
  .swipebox {
    height: 420px;
  }
  .swiper-slide {
    height: 300px !important;
  }
  .mentalimage img {
    width: 100%;
    margin-top: 0px;
    object-fit: contain;
    height: 360px;
    margin-bottom: -70px;
  }
}
</style>
