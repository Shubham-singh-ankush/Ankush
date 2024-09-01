<template>
  <div>
    <!-- Child content -->
    <div v-if="currentTab === 'child'" class="child-area">
      <!-- <section class="bannnerbg">
        <div class="container">
          <div class="row">
            <div class="col-md-12 col-sm-12 col-lg-5 col-xl-5 bannertextarea">
              <h2>ADHD</h2>
              <p class="pt-1">
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
                text ever since the 1500s,
              </p>
              <button class="btn btnbook pt-2" href="#">
                Book Appointment
              </button>
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
      <!-- Tab buttons -->
      <div class="container pt-5">
        <div class="row pt-3">
          <div class="col-md-12 mx-auto btnsec">
            <button
              class="btn btnbook pt-2"
              @click="activeTab('child')"
              :class="{ active: currentTab === 'child' }"
            >
              For Child
            </button>
            <button
              class="btn btnwhite ms-3"
              @click="activeTab('adult')"
              :class="{ active: currentTab === 'adult' }"
            >
              For Adult
            </button>
          </div>
        </div>
      </div>
      <section class="childadult">
        <div class="container">
          <div class="row">
            <div class="col-xl-6 lg:mb-5 col-lg-12">
              <div class="imgarea">
                <img src="/images/childimg1.png" alt="Child Image 1" />
              </div>
            </div>
            <div class="col-xl-6 lg:mb-5 col-lg-12">
              <div class="textchildarea ps-4">
                <h5>What Is Child ADHD</h5>
                <h2>Lorem Ipsum Dolor Text</h2>
                <p>
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry. Lorem Ipsum has been the industry's
                  standard dummy text ever since the 1500s, when an unknown
                  printer took a galley of type and scrambled it to make a type
                  specimen book.
                </p>
                <p>
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry. Lorem Ipsum has been the industry's
                  standard dummy text ever since the 1500s, when an unknown
                  printer took a galley of type and scrambled it to make a type
                  specimen book.
                </p>
                <button class="btn btnbook pt-2" href="#">
                  Take A Free Consultation
                </button>
              </div>
            </div>
            <div class="col-lg-12 col-xl-6">
              <div class="textchildarea2 pe-4 mt-5">
                <h5>Assessment Journey</h5>
                <h2>Navigating Our Child ADHD Assessment Journey</h2>
                <p>
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry. Lorem Ipsum has been the industry's
                  standard dummy text ever since the 1500s, when an unknown
                  printer took a galley of type and scrambled it to make a type
                  specimen book.
                </p>
                <h6>Our assessment journey includes:</h6>
                <h4>Lorem Ipsum is simply dummy text</h4>
                <p>
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry. Lorem Ipsum has been the industry's
                  standard dummy text ever since the 1500s, when an unknown
                  printer took a galley of type and scrambled it to make a type
                  specimen book.
                </p>
                <h4>Lorem Ipsum is simply dummy text</h4>
                <p>
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry. Lorem Ipsum has been the industry's
                  standard dummy text ever since the 1500s, when an unknown
                  printer took a galley of type and scrambled it to make a type
                  specimen book.
                </p>
              </div>
            </div>
            <div class="col-xl-6 col-lg-12 lastimg">
              <div class="imgarea mt-5">
                <img src="/images/childimg2.png" alt="Child Image 2" />
              </div>
            </div>
          </div>
        </div>
      </section>
      <!-- here is adahcare 3rd section section start -->
      <section class="adahcare">
        <div class="container">
          <div class="row">
            <div class="col-lg-6"></div>
            <div class="col-lg-6">
              <div class="textchildarea">
                <h5>What Is Child ADHD</h5>
                <h2>Lorem Ipsum Dolor Text</h2>
                <p>
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry. Lorem Ipsum has been the industry's
                  standard dummy text ever since the 1500s, when an unknown
                  printer took a galley of type and scrambled it to make a type
                  specimen book.
                </p>
                <p>
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry. Lorem Ipsum has been the industry's
                  standard dummy text ever since the 1500s, when an unknown
                  printer took a galley of type and scrambled it to make a type
                  specimen book.
                </p>
                <button class="btn btnbook pt-2" href="#">
                  Take A Free Consultation
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
      <!-- here is adahcare 3rd section section end -->
      <!-- here is the Benefits 4th section start -->
      <section class="benefitsbg">
        <div class="container">
          <div class="row">
            <h5 class="text-center">Benefits</h5>
            <h2 class="text-center">
              Benefits of our Expert Child ADHD Assessments
            </h2>
            <p class="text-center mt-3 mb-4">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been <br />the industry's standard dummy
              text ever since the 1500s.
            </p>
          </div>
        </div>
        <div class="container pt-4">
          <swiper
            :slidesPerView="1"
            :spaceBetween="10"
            :pagination="{
              clickable: true,
            }"
            :autoplay="{
              delay: 2500,
              disableOnInteraction: false,
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
            }"
            :modules="modules"
            class="mySwiper benefitsswiper"
          >
            <swiper-slide>
              <div class="benefitbox">
                <img src="/images/benefit1.png" alt="" class="" />
                <div class="benefitextbox">
                  <h5 class="text-center">Lorem Ipsum Dolor Text</h5>
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
              <div class="benefitbox">
                <img src="/images/benefit2.png" alt="" class="" />
                <div class="benefitextbox">
                  <h5 class="text-center">Lorem Ipsum Dolor Text</h5>
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
              <div class="benefitbox">
                <img src="/images/benefit3.png" alt="" class="" />
                <div class="benefitextbox">
                  <h5 class="text-center">Lorem Ipsum Dolor Text</h5>
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
              <div class="benefitbox">
                <img src="/images/benefit1.png" alt="" class="" />
                <div class="benefitextbox">
                  <h5 class="text-center">Lorem Ipsum Dolor Text</h5>
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
              <div class="benefitbox">
                <img src="/images/benefit2.png" alt="" class="" />
                <div class="benefitextbox">
                  <h5 class="text-center">Lorem Ipsum Dolor Text</h5>
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
              <div class="benefitbox">
                <img src="/images/benefit3.png" alt="" class="" />
                <div class="benefitextbox">
                  <h5 class="text-center">Lorem Ipsum Dolor Text</h5>
                  <p class="text-center">
                    Lorem Ipsum is simply dummy text of the printing and
                    typesetting industry. Lorem Ipsum has been the industry's
                    standard dummy text ever since the 1500s, when an unknown
                    printer took a galley of type and scrambled.
                  </p>
                </div>
              </div>
            </swiper-slide>
            <div class="swiper-pagination"></div>
          </swiper>
        </div>
      </section>
      <!-- here is the Benefits 4th section end -->
      <!-- here is the ctabg 5th section end -->
      <section class="ctabg">
        <div class="container">
          <div class="row">
            <div class="col-md-3 col-sm-12 col-lg-3 col-xl-3">
              <div class="comment row">
                <div class="col-md-3 col-sm-4">
                  <img src="/images/commentwhiteft.png" alt="" />
                </div>
                <div class="col-md-9 col-sm-8">
                  <p>GET SUPPORT</p>
                  <h6>example@xyz.com</h6>
                </div>
              </div>
            </div>
            <div class="col-md-7 col-sm-12 col-lg-7 col-xl-7">
              <h2 class="text-white">
                Make Your Appointment With Our Specialist
              </h2>
            </div>
            <div class="col-md-2 col-sm-12 col-lg-2 col-xl-2">
              <button class="btnwhite">Book Appointments</button>
            </div>
          </div>
        </div>
      </section>
    </div>

    <!-- Adult content -->
    <div v-if="currentTab === 'adult'" class="adult-area">
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
      <!-- Tab buttons -->
      <div class="container pt-5">
        <div class="row pt-3">
          <div class="col-md-12 mx-auto btnsec">
            <button
              class="btn btnwhite me-3"
              @click="activeTab('child')"
              :class="{ active: currentTab === 'child' }"
            >
              For Child
            </button>
            <button
              class="btn btnbook pt-2"
              @click="activeTab('adult')"
              :class="{ active: currentTab === 'adult' }"
            >
              For Adult
            </button>
          </div>
        </div>
      </div>
      <section class="childadult">
        <div class="container">
          <div class="row">
            <div class="col-lg-6 mb-5">
              <div class="imgarea">
                <img src="/images/adult1.png" alt="Adult Image 1" />
              </div>
            </div>
            <div class="col-lg-6 mb-5">
              <div class="textchildarea ps-4">
                <h5>What Is Adult ADHD</h5>
                <h2>Lorem Ipsum Dolor Text</h2>
                <p>
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry. Lorem Ipsum has been the industry's
                  standard dummy text ever since the 1500s, when an unknown
                  printer took a galley of type and scrambled it to make a type
                  specimen book.
                </p>
                <p>
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry. Lorem Ipsum has been the industry's
                  standard dummy text ever since the 1500s, when an unknown
                  printer took a galley of type and scrambled it to make a type
                  specimen book.
                </p>
                <button class="btn btnbook pt-2" href="#">
                  Take A Free Consultation
                </button>
              </div>
            </div>
            <div class="col-lg-6">
              <div class="textchildarea2 pe-4 mt-5">
                <h5>Assessment Journey</h5>
                <h2>Navigating Our Adult ADHD Assessment Journey</h2>
                <p>
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry. Lorem Ipsum has been the industry's
                  standard dummy text ever since the 1500s, when an unknown
                  printer took a galley of type and scrambled it to make a type
                  specimen book.
                </p>
                <h6>Our assessment journey includes:</h6>
                <h4>Lorem Ipsum is simply dummy text</h4>
                <p>
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry. Lorem Ipsum has been the industry's
                  standard dummy text ever since the 1500s, when an unknown
                  printer took a galley of type and scrambled it to make a type
                  specimen book.
                </p>
                <h4>Lorem Ipsum is simply dummy text</h4>
                <p>
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry. Lorem Ipsum has been the industry's
                  standard dummy text ever since the 1500s, when an unknown
                  printer took a galley of type and scrambled it to make a type
                  specimen book.
                </p>
              </div>
            </div>
            <div class="col-lg-6">
              <div class="imgarea mt-5">
                <img src="/images/adult2.png" alt="Adult Image 2" />
              </div>
            </div>
          </div>
        </div>
      </section>
      <!-- here is adahcare 3rd section section start -->
      <section class="adultadahcare">
        <div class="container">
          <div class="row">
            <div class="col-lg-6"></div>
            <div class="col-lg-6 pe-5 adulttextbg">
              <div class="textadultarea ps-4 pe-4">
                <h5>What Is Adult ADHD</h5>
                <h2>Lorem Ipsum Dolor Text</h2>
                <p>
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry. Lorem Ipsum has been the industry's
                  standard dummy text ever since the 1500s, when an unknown
                  printer took a galley of type and scrambled it to make a type
                  specimen book.
                </p>
                <p>
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry. Lorem Ipsum has been the industry's
                  standard dummy text ever since the 1500s, when an unknown
                  printer took a galley of type and scrambled it to make a type
                  specimen book.
                </p>
                <button class="btn btnbook pt-2" href="#">
                  Take A Free Consultation
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
      <!-- here is adahcare 3rd section section end -->
      <!-- here is the Benefits 4th section start -->
      <section class="benefitsbg">
        <div class="container">
          <div class="row">
            <h5 class="text-center">Benefits</h5>
            <h2 class="text-center">
              Benefits of our Expert Adult ADHD Assessments
            </h2>
            <p class="text-center mt-3 mb-4">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been <br />the industry's standard dummy
              text ever since the 1500s.
            </p>
          </div>
        </div>
        <div class="container pt-4">
          <div class="swiper benefitsswiper">
            <swiper
              :slidesPerView="1"
              :spaceBetween="10"
              :pagination="{
                clickable: true,
              }"
              :autoplay="{
                delay: 2500,
                disableOnInteraction: false,
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
              }"
              :modules="modules"
              class="mySwiper"
            >
              <swiper-slide class="benefiwraper">
                <div class="benefitbox">
                  <img src="/images/adultsli.png" alt="" class="" />
                  <div class="benefitextbox">
                    <h5 class="text-center">Lorem Ipsum Dolor Text</h5>
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
                <div class="benefitbox">
                  <img src="/images/adultsli2.png" alt="" class="" />
                  <div class="benefitextbox">
                    <h5 class="text-center">Lorem Ipsum Dolor Text</h5>
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
                <div class="benefitbox">
                  <img src="/images/adultsli3.png" alt="" class="" />
                  <div class="benefitextbox">
                    <h5 class="text-center">Lorem Ipsum Dolor Text</h5>
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
                <div class="benefitbox">
                  <img src="/images/adultsli.png" alt="" class="" />
                  <div class="benefitextbox">
                    <h5 class="text-center">Lorem Ipsum Dolor Text</h5>
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
                <div class="benefitbox">
                  <img src="/images/adultsli2.png" alt="" class="" />
                  <div class="benefitextbox">
                    <h5 class="text-center">Lorem Ipsum Dolor Text</h5>
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
                <div class="benefitbox">
                  <img src="/images/adultsli3.png" alt="" class="" />
                  <div class="benefitextbox">
                    <h5 class="text-center">Lorem Ipsum Dolor Text</h5>
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
                <div class="benefitbox">
                  <img src="/images/adultsli.png" alt="" class="" />
                  <div class="benefitextbox">
                    <h5 class="text-center">Lorem Ipsum Dolor Text</h5>
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
                <div class="benefitbox">
                  <img src="/images/adultsli2.png" alt="" class="" />
                  <div class="benefitextbox">
                    <h5 class="text-center">Lorem Ipsum Dolor Text</h5>
                    <p class="text-center">
                      Lorem Ipsum is simply dummy text of the printing and
                      typesetting industry. Lorem Ipsum has been the industry's
                      standard dummy text ever since the 1500s, when an unknown
                      printer took a galley of type and scrambled.
                    </p>
                  </div>
                </div>
              </swiper-slide>

              <div class="swiper-pagination"></div>
            </swiper>
          </div>
        </div>
      </section>
      <!-- here is the Benefits 4th section end -->

      <!-- here is the ctabg 5th section end -->
      <section class="ctabg">
        <div class="container">
          <div class="row">
            <div class="col-md-3 col-sm-12 col-lg-3 col-xl-3">
              <div class="comment row">
                <div class="col-md-3 col-sm-4">
                  <img src="/images/commentwhiteft.png" alt="" />
                </div>
                <div class="col-md-9 col-sm-8">
                  <p>GET SUPPORT</p>
                  <h6>example@xyz.com</h6>
                </div>
              </div>
            </div>
            <div class="col-md-7 col-sm-12 col-lg-7 col-xl-7">
              <h2 class="text-white">
                Make Your Appointment With Our Specialist
              </h2>
            </div>
            <div class="col-md-2 col-sm-12 col-lg-2 col-xl-2">
              <button class="btnwhite">Book Appointments</button>
            </div>
          </div>
        </div>
      </section>
    </div>
  </div>
</template>

<script>
import { Swiper, SwiperSlide } from "swiper/vue";
import { Autoplay, Pagination } from "swiper/modules";

export default {
  name: "Diagnosis",

  components: {
    Swiper,
    SwiperSlide,
  },

  data() {
    return {
      currentTab: "child",
      modules: [Autoplay, Pagination],

      items: [
        {
          image: "images/dipration.png",
          title: "ADHD",
          description:
            "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.",
          buttonText: "Book Appointment",
        },
      ],
    };
  },

  methods: {
    activeTab(tab) {
      this.currentTab = tab;
    },
  },
};
// Import Swiper Vue.js components
// import { Swiper, SwiperSlide } from "swiper/vue";

// Import Swiper styles

// export default {
//   name: "Home",
//   components: {
//     Swiper,
//     SwiperSlide,
//   },
//   setup() {
//     return {
//       modules: [Autoplay, Pagination],
//     };
//   },
// };
</script>
<style scoped>
/* here is the banner section css */
/* .bannnerbg {
  background-image: url(/images/dipration.png);
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

.bannertextarea p {
  font-size: 18.68px;
  font-weight: 400;
  line-height: 28.02px;
  text-align: left;
  color: #464646;
} */

/* here is css child adult section */
.btnwhite {
  background: #ffffff;
  color: #0297fe;
  border-radius: 3px;
  padding: 6px 25px;
  border: 1px solid #0297fe;
}

.btnsec {
  width: 22.2%;
  margin: 0px auto 50px;
}

.childadult {
  padding: 70px 0;
}

.imgarea {
  box-shadow: 0px 2px 20px 0px #83838340;
  padding: 18px;
}

.imgarea img {
  max-width: 100%;
}

.textchildarea2 h6 {
  font-size: 25px;
  font-weight: 500;
  line-height: 37.5px;
  text-align: left;
  color: #464646;
}

.textchildarea2 h4 {
  padding-top: 0px !important;
  margin-bottom: 5px;
  font-size: 18px;
  color: #0297fe;
}

.textchildarea2 h5 {
  padding-top: 0px !important;
  margin-bottom: 5px;
}

.textchildarea2 p {
  padding-top: 0px !important;
  margin-bottom: 10px;
}

/* here is css adah care section */
.adahcare {
  background-image: url(/images/adahcare.png);
  background-size: cover;
  background-position: center;
  padding: 70px 0;
}

.adahcare .textchildarea,
.adultadahcare .textchildarea {
  padding: 0px 85px 0 20px;
}

.adultadahcare {
  background-image: url(/images/adultbg.png);
  background-size: cover;
  background-position: center;
}

.adulttextbg {
  background: #ffffff8c;
  padding: 70px 0;
}

/* here is the css of benefitsbg  */
.benefitsbg {
  padding: 70px 0;
}

.benefitsswiper {
  width: 100%;
  height: 560px !important;
  overflow: hidden;
}

.benefitbox {
  background: #fff !important;
  padding: 0px 0px !important;
  box-shadow: 0px 2px 10px 0px #71717140 !important;
  border-radius: 10px !important;
  height: 510px !important;
}

.benefitbox img {
  width: 100%;
  border-radius: 10px 10px 0px 0px;
}

.benefitextbox p {
  padding-left: 10px !important;
  padding-right: 10px !important;
  font-size: 17px !important;
  margin: 0px;
  font-weight: 400 !important;
  line-height: 2spx !important;
}

.benefitextbox h5 {
  padding-top: 0px !important;
}

.swiper-pagination {
  position: relative !important;
  bottom: 20px !important;
}

.benefitextbox {
  padding: 20px 0;
  margin: 15px;
  border: 1px solid #0297fe;
}

/* here is the css of cta  */

.ctabg {
  background: #04498c;
  padding: 50px 0;
}

.comment p {
  font-size: 14px !important;
  color: #fff;
  margin: 0px 0 4px;
}
.benefiwraper {
  height: 570px;
}
.comment h6 {
  font-size: 20px !important;
  color: #fff;
  margin: 0px 0px;
}

.comment img {
  width: 100%;
}

.ctabg .btnwhite {
  padding: 7px 20px;
  position: relative;
}

.ctabg .btnwhite::after {
  content: "";
  width: 60px;
  height: 2.5px;
  background-color: #fff;
  left: -95px;
  top: 20px;
  position: absolute;
}

/* """"""""""""""""""""""""""media query or all device"""""""""""""""""""""""""""""""""" */

@media (max-width: 767px) {
  .btnsec .btnbook {
    display: inline-block;
  }

  .btnsec {
    width: 70%;
    margin: 0px auto 30px;
  }

  .textchildarea {
    padding-left: 0px !important;
  }

  .childadult,
  .benefitsbg {
    padding: 40px 0;
  }

  .textchildarea2 {
    padding: 0px !important;
    margin-top: 20px !important;
  }

  .textchildarea2 h4 {
    text-align: center;
  }

  .adahcare {
    background-position: 73%;
    padding: 40px 0;
  }

  .textchildarea {
    padding: 0px 15px !important;
  }

  .benefitsbg p {
    margin: 0px !important;
    padding: 0px !important;
  }

  .comment p {
    text-align: start;
  }

  .comment .col-md-3.col-sm-4 {
    width: 25%;
  }

  .comment .col-md-9.col-sm-8 {
    width: 46%;
  }

  .comment.row {
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .ctabg h2 {
    font-size: 15px;
    margin-top: 15px;
    text-align: center;
  }

  .ctabg .btnwhite {
    display: block;
    margin: 15px auto 0;
  }

  .ctabg .btnwhite::after {
    display: none;
  }
}

@media (min-width: 768px) and (max-width: 1023px) {
  .btnsec .btnbook {
    display: inline-block;
  }

  .btnsec {
    width: 39.8%;
    margin: 0px auto 30px;
  }

  .textchildarea {
    padding-left: 0px !important;
  }

  .childadult,
  .benefitsbg {
    padding: 40px 0;
  }

  .textchildarea2 {
    padding: 0px !important;
    margin-top: 20px !important;
  }

  .textchildarea2 h4 {
    text-align: center;
  }

  .adahcare {
    background-position: 100%;
    padding: 40px 0;
  }

  .benefitsbg p {
    margin: 0px !important;
    padding: 0px !important;
  }

  .textchildarea {
    padding: 0px 15px 0px 0px !important;
    max-width: 68%;
    margin: auto;
  }

  .comment p {
    text-align: start;
  }

  .comment .col-md-3.col-sm-4 {
    width: 35%;
  }

  .comment .col-md-9.col-sm-8 {
    width: 65%;
  }

  .comment h6 {
    font-size: 13px !important;
  }

  .comment.row {
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .ctabg h2 {
    font-size: 17px !important;
    margin-top: 10px;
    text-align: center;
  }

  .footerbg {
    padding: 0px 5px;
  }

  .ctabg .btnwhite {
    font-size: 10px;
    padding: 7px 15px;
  }

  .adahcare .btnbook,
  .textchildarea .btnbook {
    display: block;
    margin: 15px auto 0;
  }

  .ctabg .btnwhite::after {
    display: none;
  }

  .textchildarea2 h6 {
    font-size: 20px;
    text-align: center;
  }
}

@media (min-width: 1024px) and (max-width: 1279px) {
  .adahcare .textchildarea {
    padding: 0px 25px 0 20px;
  }

  .btnsec {
    width: 30.2%;
  }

  .imgarea img {
    min-width: 100%;
  }

  .textchildarea {
    padding: 25px 0px 1px !important;
  }

  .ctabg .btnwhite::after {
    display: none;
  }

  .ctabg h2 {
    font-size: 23px !important;
    margin-top: 10px;
    text-align: center;
  }
}

@media (min-width: 1280px) and (max-width: 1365px) {
  .adahcare .textchildarea {
    padding: 0px 25px 0 20px;
  }

  .btnsec {
    width: 25%;
  }

  .imgarea img {
    min-width: 100%;
    min-height: 360px;
  }

  .textchildarea {
    padding: 25px 0px 1px !important;
  }

  .ctabg .btnwhite::after {
    display: none;
  }

  .ctabg h2 {
    font-size: 23px !important;
    margin-top: 10px;
    text-align: center;
  }

  .lastimg .imgarea img {
    min-width: 100%;
    min-height: 460px;
  }
}

@media (min-width: 1366px) and (max-width: 1439px) {
  .adahcare .textchildarea {
    padding: 0px 25px 0 20px;
  }

  .btnsec {
    width: 25%;
  }

  .imgarea img {
    min-width: 100%;
    min-height: 360px;
  }

  .textchildarea {
    padding: 25px 0px 1px !important;
  }

  .ctabg h2 {
    font-size: 26px !important;
    margin-top: 10px;
    text-align: start;
  }

  .lastimg .imgarea img {
    min-width: 100%;
    min-height: 460px;
  }

  .ctabg .btnwhite {
    padding: 7px 9px;
    position: relative;
  }
}
</style>
