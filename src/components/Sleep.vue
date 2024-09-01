<template>
  <!-- here is banner 1st section section start -->
  <!-- <section class="bannnerbg">
    <div class="container">
      <div class="row">
        <div class="col-md-12 col-sm-12 col-lg-5 col-xl-5 bannertextarea">
          <h2>Sleep Disorders</h2>
          <p class="pt-1">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s,
          </p>
          <button class="btn btnbook pt-2" href="#">Book Appointment</button>
        </div>
      </div>
    </div>
  </section> -->
  <section
    class="bannnerbg"
    :style="{ background: 'url(' + items[0].image + ')' }"
  >
    <div class="container">
      <div class="row" v-for="(item, index) in items" :key="index">
        <div class="col-md-12 col-sm-12 col-lg-5 col-xl-5 bannertextarea">
          <h2>{{ item.title }}</h2>
          <p class="pt-1">{{ item.description }}</p>
          <button class="btn btnbook pt-2" href="#">
            {{ item.buttonText }}
          </button>
        </div>
      </div>
    </div>
  </section>

  <!-- here is banner 1st section section end -->

  <!-- here is sleepdeasoder 2nd  section section start -->
  <section class="sleepdisorders">
    <div class="container">
      <div class="row sleepinner">
        <div class="col-xl-6">
          <img src="/images/mensleep.png" alt="" />
        </div>
        <div class="col-xl-6">
          <h5>Sleep Disorders</h5>
          <h2>What are sleep disorders?</h2>
          <p>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book. 
          </p>
          <p>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book. 
          </p>
          <button class="btnbook mt-2" href="#" data-v-527fb4c8="">
            Book Appointment
          </button>
        </div>
      </div>
      <div class="row">
        <div class="col-xl-6 sleeptextarea">
          <h5>Lorem Ipsum</h5>
          <h2>Why are Sleep Disorders so important to address?</h2>
          <p>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s,
          </p>
          <ul>
            <li class="d-flex">
              <div class="blue"></div>
              Lorem Ipsum Dolor Text
            </li>
            <li class="d-flex">
              <div class="blue"></div>
              Lorem Ipsum Dolor Text
            </li>
            <li class="d-flex">
              <div class="blue"></div>
              Lorem Ipsum Dolor Text
            </li>
            <li class="d-flex">
              <div class="blue"></div>
              Lorem Ipsum Dolor Text
            </li>
          </ul>
          <button class="btnbook mt-2" href="#" data-v-527fb4c8="">
            Book Appointment
          </button>
        </div>
        <div class="col-xl-6">
          <img src="/images/womensleep.png" alt="" />
        </div>
      </div>
    </div>
  </section>
  <!-- here is sleepdeasoder 2nd  section section end -->

  <!-- here is Signs And Symptoms 3th section section start -->
  <section class="symptomsbg">
    <div class="container">
      <div class="row">
        <h5 class="text-center">Signs And Symptoms</h5>
        <h2 class="text-center pb-3 pt-2">Sleep Disorder Signs and Symptoms</h2>
        <p class="text-center">
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the <br />industry's standard dummy
          text ever since the 1500s,
        </p>
      </div>
      <div class="row pt-3">
        <div class="col-xl-4 col-lg-6 col-md-6">
          <div class="symptoms">
            <div class="symptomsbox">
              <img src="/images/symptoms.png" alt="" />
              <div class="hidebox">
                <h4 class="text-center text-white">Lorem Ipsum </h4>
                <p class="text-center text-white">
                  Lorem Ipsum is simply dummy text of the printing and type
                  setting industry. Lorem Ipsum has been the industry's standard
                  dummy text ever since the 1500s, when an unknown printer took
                  a galley of type and scrambled it to make a type specimen
                  book.
                </p>
              </div>
            </div>
          </div>
        </div>
        <div class="col-xl-4 col-lg-6 col-md-6">
          <div class="symptoms">
            <div class="symptomsbox">
              <img src="/images/symptoms2.png" alt="" />
              <div class="hidebox">
                <h4 class="text-center text-white">Lorem Ipsum </h4>
                <p class="text-center text-white">
                  Lorem Ipsum is simply dummy text of the printing and type
                  setting industry. Lorem Ipsum has been the industry's standard
                  dummy text ever since the 1500s, when an unknown printer took
                  a galley of type and scrambled it to make a type specimen
                  book.
                </p>
              </div>
            </div>
          </div>
        </div>
        <div class="col-xl-4 col-lg-6 col-md-6">
          <div class="symptoms">
            <div class="symptomsbox">
              <img src="/images/symptoms3.png" alt="" />
              <div class="hidebox">
                <h4 class="text-center text-white">Lorem Ipsum </h4>
                <p class="text-center text-white">
                  Lorem Ipsum is simply dummy text of the printing and type
                  setting industry. Lorem Ipsum has been the industry's standard
                  dummy text ever since the 1500s, when an unknown printer took
                  a galley of type and scrambled it to make a type specimen
                  book.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
  <!-- here is Signs And Symptoms 3th section section end -->

  <!-- here is Our Services 4th section section start -->
  <section class="our-services">
    <div class="container">
      <div class="row">
        <h5 class="text-center">Our Services</h5>
        <h2 class="text-center pb-3 pt-2">Sleep Disorder Signs and Symptoms</h2>
        <p class="text-center">
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the <br />industry's standard dummy
          text ever since the 1500s,
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
          class="mySwiper3 swiper3"
        >
          <swiper-slide class="slidehight">
            <div class="boxheight">
              <div class="innerbox">
                <h4 class="text-center">Lorem Ipsum</h4>
                <p class="text-center">
                  Lorem Ipsum is simply dummy text of the printing and
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
                  Lorem Ipsum is simply dummy text of the printing and
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
                  Lorem Ipsum is simply dummy text of the printing and
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
                  Lorem Ipsum is simply dummy text of the printing and
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
                  Lorem Ipsum is simply dummy text of the printing and
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
                  Lorem Ipsum is simply dummy text of the printing and
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
  </section>
  <!-- here is Our Services 4th section section end -->

  <!-- here is sleepdeasoder 2nd  section section start -->
  <section class="sleepdisorders">
    <div class="container">
      <div class="row">
        <div class="col-xl-6">
          <img src="/images/chooseus.png" alt="" />
        </div>
        <div class="col-xl-6 choosetextarea">
          <h5>Why Choose Us</h5>
          <h2>How Our Experts Can Help</h2>
          <p>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s,
          </p>
          <p>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s,
          </p>
          <ul>
            <li class="d-flex">
              <div class="blue"></div>
              Lorem Ipsum
            </li>
            <li class="d-flex">
              <div class="blue"></div>
              Lorem Ipsum
            </li>
            <li class="d-flex">
              <div class="blue"></div>
              Lorem Ipsum
            </li>
          </ul>
          <button class="btnbook mt-2" href="#" data-v-527fb4c8="">
            Book Appointment
          </button>
        </div>
      </div>
    </div>
  </section>
  <!-- here is sleepdeasoder 2nd  section section end -->

  <!-- here is Why CTA Us 5th section section start -->
  <section class="ctabg">
    <div class="container">
      <div class="row">
        <div class="col-md-9 col-sm-12 col-lg-9 col-xl-9">
          <h2 class="text-white">Get Started Today</h2>
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
  <!-- here is Why CTA Us 5th section section end -->
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
  name: "Sleep",
  components: {
    Swiper,
    SwiperSlide,
  },
  setup() {
    return {
      modules: [Autoplay, Pagination],
      items: [
        {
          image: "images/sleepbg.png",
          title: "Sleep Disorders",
          description:
            "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.",
          buttonText: "Book Appointment",
        },
      ],
    };
  },
};
</script>

<style scoped>
h5 {
  font-size: 21px !important;
  padding-top: 0px !important;
  font-weight: 500 !important;
  color: #0297fe !important;
}
/* here is the banner section css */
/* .bannnerbg {
  background-image: url(/images/sleepbg.png) !important;
  background-size: cover;
  background-position: center;
  padding: 100px 0;
}
.bannertextarea {
  display: flex;
  flex-direction: column;
  min-height: 385px;
  align-items: flex-start;
  justify-content: center;
}
.bannertextarea h2 {
  font-size: 47.64px;
  font-weight: 600;
  line-height: 60.05px;
  text-align: left;
  color: #04498c !important;
}
.bannertextarea h6 {
  font-size: 18px;
  font-weight: 500;
  line-height: 28.05px;
  text-align: left;
  color: #464646;
}
.bannertextarea p {
  font-size: 18.68px;
  font-weight: 400;
  line-height: 28.02px;
  text-align: left;
  color: #464646;
} */
/* here is the 2nd section css  */
.sleepdisorders {
  padding: 120px 0;
}
.sleepdisorders img {
  width: 100%;
}
.sleepinner {
  padding: 0 0 120px;
}
.blue {
  width: 8px;
  border-radius: 50%;
  height: 8px;
  margin-top: 9px;
  margin-right: 10px;
  background: #0297fe;
}
.sleeptextarea li {
  color: #777777;
  padding-top: 10px;
  font-size: 15px;
  font-weight: 400;
  line-height: 22.5px;
  text-align: left;
}
.sleepdisorders p {
  font-size: 13.95px;
  font-weight: 400;
  color: #777777;
}

.sleepdisorders .col-xl-6 {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
}
.symptomsbg .symptoms {
  padding: 0px 0px !important;
}
/* here is the css of services section */
.symptomsbg {
  padding: 120px 0;
  background: #f8f9fa;
}
.symptoms {
  margin-right: 20px;
}
.symptoms:last-child {
  margin-right: 0px !important;
}
.symptomsbox {
  height: 430px;
  position: relative;
}
.symptomsbox:hover .hidebox {
  opacity: 1;
}
.hidebox {
  opacity: 0;
  display: flex;
  z-index: 9999;
  padding: 50px;
  transition: 1s;
  border-radius: 65px;
  top: 0;
  color: #ffffff;
  width: 100%;
  height: 430px;
  position: absolute;
  background: #04498cc4;
  justify-content: center;
  align-items: center;
  flex-direction: column;
}

.hidebox p {
  padding-top: 20px;
  font-size: 18px;
  font-weight: 400;
  line-height: 27px;
  text-align: center;
}
.symptomsbg .symptomsbox {
  margin: 20px 15px;
  padding: 0px;
  border-radius: 60px;
  border: none;
}
.symptomsbox img {
  width: 100%;
  height: 100%;
}
.symptomsbox h2 {
  position: absolute;
  font-size: 25px;
  width: 100%;
  padding: 10px 0px;
  height: 60px;
  background: linear-gradient(
    179.39deg,
    rgba(4, 73, 140, 0) 0.2%,
    #04498c 90.48%
  );
  margin-top: -60px;
}
.symptomsbox:hover h2 {
  display: none !important;
}

/* here is the css of servicebox */

.our-services {
  padding-top: 120px;
}
.boxheight {
  box-shadow: 0px 2px 15px 0px #97979740;
  padding: 15px;
  margin-top: 15px;
  margin-right: 10px;
}
.innerbox {
  border: 1px solid #0297fe;
  padding: 25px;
  border-radius: 4.86px 0px 0px 0px;
}
.innerbox h4 {
  color: #04498c;
  font-size: 22px;
  font-weight: 600;
  line-height: 27.73px;
  text-align: center;
}
.innerbox p {
  color: #777777;
  font-size: 16px;
  font-weight: 400;
  line-height: 25.6px;
  text-align: center;
}
.slidehight {
  height: 360px;
}
.swiper3 .swiper-wrapper {
  padding: 5px;
}

.choosetextarea li {
  color: #777777;
  font-size: 15px;
  font-weight: 700;
  line-height: 22.5px;
  text-align: left;
}

/* """"""""""""""""""""""""""here is the media css"""""""""""""""""""""""""""""""""" */
@media (max-width: 767px) {
  .bannnerbg {
    padding: 40px 0;
  }
  h2 {
    font-size: 36px !important;
  }
  .btnbook {
    display: block;
    margin: 0 auto;
  }
  .bannertextarea p,
  h5 {
    text-align: center;
  }
  .bannertextarea {
    align-items: center;
  }
  .sleepdisorders {
    padding: 50px 0;
  }
  h5 {
    padding-top: 25px !important;
    text-align: center;
    width: 100%;
  }
  .sleepinner {
    padding: 0 0 30px;
  }
  .sleeptextarea h2 {
    margin-top: 10px;
    font-size: 25px !important;
  }
  .sleeptextarea ul {
    width: 100%;
    display: flex;
    flex-direction: column;
    align-content: center;
    align-items: center;
  }
  .sleepdisorders img {
    margin-top: 10px;
  }
  .symptomsbg {
    padding: 60px 0;
    background: #f8f9fa;
  }
  h2 {
    font-size: 25px !important;
    width: 100%;
    text-align: center !important;
  }
  .symptoms {
    margin-top: 35px;
    margin-right: 0px;
  }
  .our-services {
    padding-top: 60px;
  }
  .boxheight {
    margin-left: 10px;
  }
  .symptomsbg h2 {
    font-size: 25px !important;
  }
}
</style>
