<template>
  <!-- here is banner 1st section section start -->
  <section
    class="bannnerbg"
    :style="{ background: 'url(' + items[0].image + ')' }"
  >
    <div class="container">
      <div class="row" v-for="(item, index) in items" :key="index">
        <div class="col-md-12 col-sm-12 col-lg-5 col-xl-6 bannertextarea">
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

  <!-- Our Treatment section start -->
  <section class="our-treatment">
    <div class="container">
      <div class="row">
        <div class="col-md-12 col-sm-12 col-lg-6 col-xl-6 tab-align-cls">
          <img class="treatment-image" src="/images/ourtratement.png" />
        </div>
        <div class="col-md-12 col-sm-12 col-lg-6 col-xl-6 spacing-cls">
          <div class="inner-text">
            <h5>Our Treatment</h5>
            <h2>Lorem Ipsum Dolor Text</h2>
            <p>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled it to make a type specimen book.
            </p>
            <p>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s,
            </p>
            <h3>Lorem ipsum dolor text dummy</h3>
            <ul class="treat-list">
              <li>
                <div class="blue"></div>
                ADHD
              </li>
              <li>
                <div class="blue"></div>
                Autism
              </li>
              <li>
                <div class="blue"></div>
                OCD
              </li>
              <li>
                <div class="blue"></div>
                Mood Disorder
              </li>
              <li>
                <div class="blue"></div>
                Sleep Disorder
              </li>
              <li>
                <div class="blue"></div>
                Tics
              </li>
            </ul>
            <button class="btn btnbook pt-2" href="#">
              Fix An Appointment
            </button>
          </div>
        </div>
      </div>
    </div>
  </section>
  <!-- Our Treatment section end -->

  <!-- here is the ADHD section start -->
  <section class="adhd-section">
    <div class="container">
      <div class="row">
        <h5 class="text-center">ADHD</h5>
        <h2 class="text-center">Lorem Ipsum Dolor Text</h2>
        <p class="text-center mt-3 mb-4 first-descrip">
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's<br />
          standard dummy text ever since the 1500s.
        </p>
      </div>

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
            spaceBetween: 30,
          },
        }"
        :modules="modules"
        class="mySwiper servceswipe"
      >
        <swiper-slide class="adhdslidebox">
          <div>
            <img src="/images/adhd1.png" alt="" />
            <h3 class="text-center">ADHD In Men</h3>
            <p class="text-center">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s,
            </p>
            <a href="#">Read More</a>
          </div>
        </swiper-slide>
        <swiper-slide class="adhdslidebox">
          <div>
            <img src="/images/adhd2.png" alt="" />
            <h3 class="text-center">ADHD In Women</h3>
            <p class="text-center">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s,
            </p>
            <a href="#">Read More</a>
          </div> </swiper-slide
        ><swiper-slide class="adhdslidebox">
          <div>
            <img src="/images/adhd3.png" alt="" />
            <h3 class="text-center">ADHD In Child</h3>
            <p class="text-center">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s,
            </p>
            <a href="#">Read More</a>
          </div> </swiper-slide
        ><swiper-slide class="adhdslidebox">
          <div>
            <img src="/images/adhd1.png" alt="" />
            <h3 class="text-center">ADHD In Men</h3>
            <p class="text-center">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s,
            </p>
            <a href="#">Read More</a>
          </div>
        </swiper-slide>
        <swiper-slide class="adhdslidebox">
          <div>
            <img src="/images/adhd2.png" alt="" />
            <h3 class="text-center">ADHD In Women</h3>
            <p class="text-center">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s,
            </p>
            <a href="#">Read More</a>
          </div> </swiper-slide
        ><swiper-slide class="adhdslidebox">
          <div>
            <img src="/images/adhd3.png" alt="" />
            <h3 class="text-center">ADHD In Child</h3>
            <p class="text-center">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s,
            </p>
            <a href="#">Read More</a>
          </div>
        </swiper-slide>

        <div class="swiper-pagination"></div>
      </swiper>
    </div>
  </section>
  <!-- here is the ADHD section end -->

  <!-- here is the we care section start -->
  <section class="we-care">
    <div class="container">
      <div class="row">
        <div class="col-md-12 col-sm-12 col-lg-5 col-xl-5 fst-column">
          <h5>We Care For You & Your Children</h5>
          <h2>Most Effective Treatments</h2>
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
          <a class="btn btnbook mt-3" href="#"> Read More </a>
        </div>
        <div class="col-md-12 col-sm-12 col-lg-7 col-xl-7 accord-bgclr">
          <div class="accordion" id="accordionExample">
            <div class="accordion-item">
              <h2 class="accordion-header">
                <button
                  class="accordion-button"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#collapseOne"
                  aria-expanded="true"
                  aria-controls="collapseOne"
                >
                  Austin In Men
                </button>
              </h2>
              <div
                id="collapseOne"
                class="accordion-collapse collapse show"
                data-bs-parent="#accordionExample"
              >
                <div class="accordion-body">
                  <p>
                    Lorem Ipsum is simply dummy text of the printing and
                    typesetting industry. Lorem Ipsum has been the industry's
                    standard dummy text ever since the 1500s, when an unknown
                    printer took a galley of type and scrambled it to make a
                    type specimen book. It has survived not only five centuries,
                  </p>
                  <p>
                    Lorem Ipsum is simply dummy text of the printing and
                    typesetting industry. Lorem Ipsum has been the industry's
                    standard dummy text ever since the 1500s,
                  </p>
                </div>
              </div>
            </div>
            <div class="accordion-item">
              <h2 class="accordion-header">
                <button
                  class="accordion-button collapsed"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#collapseTwo"
                  aria-expanded="false"
                  aria-controls="collapseTwo"
                >
                  Austin In Women
                </button>
              </h2>
              <div
                id="collapseTwo"
                class="accordion-collapse collapse"
                data-bs-parent="#accordionExample"
              >
                <div class="accordion-body">
                  <p>
                    Lorem Ipsum is simply dummy text of the printing and
                    typesetting industry. Lorem Ipsum has been the industry's
                    standard dummy text ever since the 1500s, when an unknown
                    printer took a galley of type and scrambled it to make a
                    type specimen book. It has survived not only five centuries,
                  </p>
                  <p>
                    Lorem Ipsum is simply dummy text of the printing and
                    typesetting industry. Lorem Ipsum has been the industry's
                    standard dummy text ever since the 1500s,
                  </p>
                </div>
              </div>
            </div>
            <div class="accordion-item">
              <h2 class="accordion-header">
                <button
                  class="accordion-button collapsed"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#collapse3Two"
                  aria-expanded="false"
                  aria-controls="collapseTwo"
                >
                  Austin In Child
                </button>
              </h2>
              <div
                id="collapse3Two"
                class="accordion-collapse collapse"
                data-bs-parent="#accordionExample"
              >
                <div class="accordion-body">
                  <p>
                    Lorem Ipsum is simply dummy text of the printing and
                    typesetting industry. Lorem Ipsum has been the industry's
                    standard dummy text ever since the 1500s, when an unknown
                    printer took a galley of type and scrambled it to make a
                    type specimen book. It has survived not only five centuries,
                  </p>
                  <p>
                    Lorem Ipsum is simply dummy text of the printing and
                    typesetting industry. Lorem Ipsum has been the industry's
                    standard dummy text ever since the 1500s,
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
  <!-- here is the we care section end -->

  <!-- here is the OCD section start -->
  <section class="our-treatment OCD-section">
    <div class="container">
      <div class="row">
        <div class="col-md-12 col-sm-12 col-lg-6 col-xl-6 tab-align-cls">
          <img class="treatment-image" src="/images/ocd-image.png" />
        </div>
        <div class="col-md-12 col-sm-12 col-lg-6 col-xl-6 spacing-col2">
          <div class="inner-text">
            <h5>OCD (Obsessive Compulsive Disorder)</h5>
            <h2>
              Private OCD Assessment for<br />
              Adult & Child
            </h2>
            <p>
              Obsessive-Compulsive Disorder (OCD) is a mental health condition
              that presents as obsessive thoughts and compulsive behaviours.
              This means that it causes children to have thoughts and urges to
              perform certain actions without being able to control them.
            </p>
            <h3>Common Misconceptions about OCD</h3>
            <p>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled it to make a type specimen book.
            </p>
            <a class="btn btnbook mt-2" href="#"> Know More </a>
          </div>
        </div>
      </div>
    </div>
  </section>
  <!-- here is the OCD section end -->

  <!-- here is the Depression and Anxiety section start -->
  <section class="depression-section">
    <div class="container">
      <div class="row">
        <div class="col-md-12 col-sm-12 col-lg-6 col-xl-6 spacing-cls">
          <div class="inner-text">
            <h5>Mood Disorder (Depression & Anxiety)</h5>
            <h2>Depression & Anxiety Assessment for Adult & Child</h2>
            <p>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s,
            </p>
            <h3>Symptoms of Depression</h3>
            <ul class="treat-list">
              <li>
                <div class="blue dot-white"></div>
                Persistent low mood or sadness
              </li>
              <li>
                <div class="blue dot-white"></div>
                Irritability
              </li>
              <li>
                <div class="blue dot-white"></div>
                Decreased interest in things they used to enjoy
              </li>
              <li>
                <div class="blue dot-white"></div>
                Feeling constantly tired
              </li>
              <li>
                <div class="blue dot-white"></div>
                Sleep troubles
              </li>
              <li>
                <div class="blue dot-white"></div>
                Difficulty concentrating
              </li>
              <li>
                <div class="blue dot-white"></div>
                Decreased appetite
              </li>
            </ul>
            <a class="btnwhite" href="#"> Know More </a>
          </div>
        </div>
        <div class="col-md-12 col-sm-12 col-lg-6 col-xl-6 last-colm">
          <img
            class="treatment-image dep1"
            src="/images/depressionimage1.png"
          />
          <img
            class="treatment-image dep2"
            src="/images/depressionimage2.png"
          />
        </div>
      </div>
    </div>
  </section>
  <!-- here is the Depression and Anxiety section end -->

  <!-- here is the Sleep Disorders section start -->
  <section class="OCD-section sleep-dis-section">
    <div class="container">
      <div class="row">
        <div class="col-md-12 col-sm-12 col-lg-6 col-xl-6 tab-align-cls">
          <img class="treatment-image" src="/images/sleep-disorder.png" />
        </div>
        <div class="col-md-12 col-sm-12 col-lg-6 col-xl-6 spacing-col2">
          <div class="inner-text">
            <h5>Sleep Disorders</h5>
            <h2>Why are sleep disorders so important to address?</h2>
            <p>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled it to make a type specimen book.
            </p>
            <p class="slp-sub-heading">
              A lack of sleep in children can have a significant impact on their
              lives, and it can be the reason for:
            </p>
            <div class="row sleep-sect">
              <ul class="col-md-12 col-sm-12 col-lg-5 col-xl-5 treat-list">
                <li>
                  <div class="blue"></div>
                  Accidents
                </li>
                <li>
                  <div class="blue"></div>
                  Behaviour issues
                </li>
                <li>
                  <div class="blue"></div>
                  Impulsiveness
                </li>
                <li>
                  <div class="blue"></div>
                  Mood disorders
                </li>
              </ul>
              <ul class="col-md-12 col-sm-12 col-lg-7 col-xl-7 treat-list">
                <li>
                  <div class="blue"></div>
                  Lack of concentration / Learning problems
                </li>
                <li>
                  <div class="blue"></div>
                  Slower reactions
                </li>
                <li>
                  <div class="blue"></div>
                  Overeating
                </li>
                <li>
                  <div class="blue"></div>
                  Memory issues
                </li>
              </ul>
            </div>
            <a class="btn btnbook" href="#"> Read More </a>
          </div>
        </div>
      </div>
    </div>
  </section>
  <!-- here is the Sleep Disorders section end -->

  <!-- here is the Tic section start -->
  <section class="OCD-section tic-section">
    <div class="container">
      <div class="row">
        <div class="col-md-12 col-sm-12 col-lg-6 col-xl-6 space-cls1">
          <div class="inner-text">
            <h5>Tic</h5>
            <h2>What are Tics?</h2>
            <p>
              They are repetitive movements (motor tics) that happen without any
              control of the child, it can also include repetitive sounds
              (phonic tics). Usually, they appear at age 5, and they can improve
              with therapy over time.
            </p>
            <p class="slp-sub-heading">
              Tics can happen without any motive or they can be associated with
              a trigger, such as anxiety or stress for example. Some of the tics
              a child can have are:
            </p>
            <div class="row sleep-sect">
              <ul class="col-md-12 col-sm-12 col-lg-5 col-xl-5 treat-list">
                <li>
                  <div class="blue"></div>
                  Blinking repetitively
                </li>
                <li>
                  <div class="blue"></div>
                  Banging their heads
                </li>
                <li>
                  <div class="blue"></div>
                  Clicking their fingers
                </li>
              </ul>
              <ul class="col-md-12 col-sm-12 col-lg-7 col-xl-7 treat-list">
                <li>
                  <div class="blue"></div>
                  Repeating a sound / Phrase
                </li>
                <li>
                  <div class="blue"></div>
                  Wrinkling their nose
                </li>
              </ul>
            </div>
            <a class="btn btnbook" href="#"> Know More </a>
          </div>
        </div>
        <div class="col-md-12 col-sm-12 col-lg-6 col-xl-6 space-cls2">
          <img class="treatment-image" src="/images/ticimage.png" />
        </div>
      </div>
    </div>
  </section>
  <!-- here is the Tic section end -->

  <!-- here is the Book of slot section start -->
  <section class="bookslot-section">
    <div class="container">
      <div class="row">
        <div class="col-md-12 col-sm-12 col-lg-12 col-xl-12">
          <h4 class="desk-hide">Book Your Slot</h4>
          <form class="row gx-5 gy-5">
            <div class="col-md-12 col-sm-12 col-lg-3 col-xl-3">
              <input type="text" class="form-control" placeholder="Name" />
            </div>
            <div class="col-md-12 col-sm-12 col-lg-6 col-xl-6">
              <input
                type="text"
                class="form-control"
                placeholder="Reason For Appointment"
              />
            </div>
            <div class="col-md-12 col-sm-12 col-lg-3 col-xl-3 mobl-hide">
              <h4>Book Your Slot</h4>
            </div>
            <div class="col-md-12 col-sm-12 col-lg-3 col-xl-3">
              <input
                type="email"
                class="form-control"
                placeholder="Your Email"
              />
            </div>
            <div class="col-md-12 col-sm-12 col-lg-3 col-xl-3">
              <input
                type="datetime-local"
                class="form-control"
                aria-placeholder="Date & Time"
              />
            </div>
            <div class="col-md-12 col-sm-12 col-lg-3 col-xl-3">
              <select
                id="inputState"
                class="form-select slect1"
                placeholder="Treatment Type"
              >
                <option>Treatment Type</option>
                <option>option2</option>
                <option>option2</option>
                <option>option2</option>
              </select>
            </div>
            <div class="col-md-12 col-sm-12 col-lg-3 col-xl-3">
              <button type="submit" @click="" class="btn btn-primary sub-btn">
                Fix An Appointment
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  </section>
  <!-- here is the Book of slot section end -->
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
  components: {
    Swiper,
    SwiperSlide,
  },
  setup() {
    return {
      modules: [Autoplay, Pagination],
      items: [
        {
          image: "images/cognitionbg.png",
          title: "Treatment & Conditions",
          description:
            "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.",
          buttonText: "Book Appointment",
        },
      ],
    };
  },
};
</script>
<style>
/* Our Treatment section css start */

.our-treatment .blue,
.depression-section .blue,
.sleep-dis-section .blue,
.tic-section .blue {
  margin-top: 7px;
}
.our-treatment {
  padding: 120px 0;
}

.treatment-image {
  width: 100%;
}

.inner-text h2 {
  font-weight: 600;
  padding-top: 0.5rem;
  padding-bottom: 1rem;
}
.bannertextarea p {
  padding-right: 25px;
  font-size: 18.68px !important;
}
.inner-text p {
  font-size: 15px;
  line-height: 25.63px;
}

.inner-text h3 {
  font-size: 20px;
  font-weight: 500;
  line-height: 34.17px;
  color: #464646;
  padding-top: 0;
  padding-bottom: 0;
}

.treat-list {
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  padding-bottom: 1.2rem !important;
}

.treat-list li {
  font-size: 15px;
  font-weight: 400;
  line-height: 22.5px;
  color: #777777;
  display: flex;
}

.our-treatment .spacing-cls {
  padding-left: 0rem;
  padding-right: 0px;
}

.our-treatment .tab-align-cls {
  padding-right: 40px;
}

.treat-list img {
  padding-right: 10px;
}

.our-treatment h5 {
  padding-top: 0;
}
.our-treatment ul {
  margin-bottom: 10px;
}
/* Our Treatment section css end */

/* here is the ADHD section css start  */
.adhd-section {
  padding-top: 50px;
  padding-bottom: 120px;
}

.first-descrip {
  font-size: 15px;
  line-height: 22.5px;
}

.swiper-slide.swiper-slide-next {
  box-shadow: rgba(153, 153, 153, 0.2) 0px 2px 25px 0;
  background: #fff;
  border-radius: 4px;
}

/* here is the css of sliderbox */
.servceswipe {
  height: 560px;
  padding: 10px 20px;
  border-radius: 5px;
}
.adhdslidebox img {
  width: 100%;
}
.adhdslidebox h3 {
  font-size: 27.58px;
  padding-top: 30px;
  font-weight: 500;
  line-height: 34.77px;
  text-align: center;
  color: #464646;
}
.adhdslidebox {
  height: 490px;
  box-shadow: 0px 0px 15px 0px #99999933;
  padding: 25px;
}
.adhdslidebox a {
  text-decoration: underline !important;
  font-size: 13.25px !important;
  display: block;
  font-weight: 500 !important;
  line-height: 19.86px !important;
  text-align: center !important;
  color: #0297fe !important;
}
/* here is the ADHD section css end  */

/* here is the we care sectin css start  */
.we-care {
  background-image: url("/images/we-carebg.png");
  background-repeat: no-repeat;
  background-size: cover;
  padding: 100px 0;
  min-height: 670px;
}

.we-care .fst-column {
  padding-right: 3.5rem;
}

.we-care h5 {
  font-size: 20.55px;
  line-height: 30.82px;
}

.we-care h2 {
  font-weight: 600;
  line-height: 40.34px;
  color: #fff !important;
  padding-top: 0.5rem;
  padding-bottom: 0.8rem;
}

.we-care p {
  font-size: 16px;
  line-height: 27.2px;
  color: #fff;
}

.we-care .accord-bgclr {
  background-color: #fff;
  padding: 0.5rem 2rem 1.2rem 2rem;
  border-radius: 5px;
}

.we-care .accordion-item {
  padding: 10px !important;
  border: none;
}

.we-care .accordion-button:not(.collapsed) {
  background-color: transparent;
  border-radius: 0;
  color: #464646;
  box-shadow: none;
}

.we-care .accordion-button:focus {
  box-shadow: none;
}

.we-care .accordion-button {
  color: #464646;
  font-size: 20px;
  font-weight: 500;
  line-height: 25.21px;
  padding: 10px 0px;
  border-radius: 0px !important;
  border-bottom: 1px solid #cccccc;
}

.accordion-button::after {
  background-image: url("/images/plusiImage.png") !important;
  background-size: 80% !important;
}

.accordion-button:not(.collapsed)::after {
  background-image: url("/images/minusImage.png") !important;
  background-size: 80%;
}

.we-care .accordion-body {
  padding: 0px;
}

.we-care .accordion-body p {
  font-size: 14.34px;
  font-weight: 400;
  line-height: 25px;
  color: #8f8f8f;
}

/* here is the we care sectin css end  */

/* here is the OCD section css start */
.OCD-section h3 {
  padding: 0rem !important;
}

.OCD-section .spacing-col2 {
  padding-left: 3rem;
}

/* here is the OCD section css end */

/* here is the Depression and Anxiety section css start */
.depression-section {
  background-image: url("/images/doctor-nurse.png");
  background-repeat: no-repeat;
  background-size: cover;
  margin: 120px 0;
}

.depression-section h5,
.depression-section h2,
.depression-section p,
.depression-section h3,
.depression-section .treat-list li {
  color: #fff !important;
}

.depression-section h5 {
  padding-top: 0;
}

.depression-section .btnwhite {
  border-color: rgb(255 255 255) !important;
}

.depression-section .last-colm {
  display: flex;
  flex-direction: column;
  gap: 2rem;
}

.depression-section .dep1 {
  margin-top: -3rem;
}

.depression-section .dep2 {
  margin-bottom: -3rem;
}

.depression-section .spacing-cls {
  display: flex;
  flex-direction: column;
  justify-content: center;
}

.dot-white {
  background: #ffffff !important;
}

/* here is the Depression and Anxiety section css end */

/* here is the Sleep Disorders section css start */
.sleep-dis-section {
  padding: 120px 0;
}

.slp-sub-heading {
  font-weight: 500;
  color: #464646;
}

.sleep-sect ul {
  padding-left: 12px !important;
}

/* here is the Sleep Disorders section css end */

/* here is the Tic section css start */
.tic-section {
  background-color: #f8f9fa;
  padding: 100px 0;
  margin-top: 50px;
  margin-bottom: 120px;
}

.tic-section .space-cls1 {
  padding-right: 2rem;
}

.tic-section .space-cls2 {
  padding-left: 2rem;
}

/* here is the Tic section css end */

/* here is the Book of slot sectoin css start */
.bookslot-section {
  padding: 0px 0 120px 0;
}

.bookslot-section .form-control,
.bookslot-section .form-select {
  color: #a3a3a3 !important;
  border: none;
  border-bottom: 1px solid #a3a3a3;
  border-radius: 0px;
}

.bookslot-section .form-control:focus,
.bookslot-section .form-select:focus {
  outline: none;
  box-shadow: none;
}

.bookslot-section input::placeholder,
.bookslot-section select {
  font-size: 14px;
  font-weight: 600;
  line-height: 21px;
  letter-spacing: 0.08em;
  color: #464646;
}

.bookslot-section .slect1 {
  padding: 0.95rem 2.25rem 0.375rem 0.75rem;
}

.bookslot-section h4 {
  font-size: 32px;
  font-weight: 600;
  line-height: 40.34px;
  text-align: center;
  color: #464646;
}

.bookslot-section .sub-btn {
  width: 100%;
  padding: 9px;
  background-color: #0297fe;
  color: #fff;
  border-color: #0297fe;
  font-size: 16px;
  font-weight: 600;
  line-height: 24px;
}

.desk-hide {
  display: none;
}

/* here is the Book of slot sectoin css end */

/* Mobile Media Queries Start  */
@media (max-width: 767px) {
  .our-treatment .tab-align-cls {
    padding-right: 12px;
  }
  .depression-section h5 {
    padding-top: 20px;
  }
  .our-treatment h5 {
    padding-top: 15px;
  }
  .our-treatment h2 {
    font-size: 22px;
    line-height: 1.4em;
  }

  .adhd-section h2 {
    font-size: 22px;
    line-height: 1.4em;
  }

  .we-care h2 {
    font-size: 22px;
    line-height: 1.4em;
  }

  .depression-section h2 {
    font-size: 22px;
    line-height: 1.4em;
  }

  .sleep-dis-section h2 {
    font-size: 22px;
    line-height: 1.4em;
  }

  .tic-section h2 {
    font-size: 22px;
    line-height: 1.4em;
  }

  .bookslot-section h4 {
    font-size: 22px;
  }

  .our-treatment {
    padding: 50px 0;
  }

  .our-treatment .spacing-cls {
    padding-left: 12px;
    padding-right: 12px;
  }

  .inner-text h3 {
    text-align: center;
  }

  .inner-text h2 {
    padding-bottom: 0.5rem;
  }

  .adhd-section {
    padding-top: 0px;
    padding-bottom: 50px;
  }

  .we-care {
    padding: 50px 0;
  }

  .we-care .fst-column {
    padding: 0 12px;
    margin-bottom: 2rem;
  }

  .we-care .accord-bgclr {
    padding: 0.5rem 1rem 1.2rem 0.5rem;
  }

  .we-care .accordion-body p {
    text-align: left;
  }

  .accordion-button::after {
    background-size: 1rem;
  }

  .we-care .accordion-button {
    font-size: 18px;
  }

  .OCD-section .spacing-col2 {
    padding: 0 12px;
  }

  .depression-section {
    margin: 0px;
  }

  .depression-section .dep2 {
    margin-bottom: 0rem;
  }

  .depression-section .dep1 {
    margin-top: 0rem;
  }

  .depression-section .spacing-cls {
    padding: 0 10px;
  }

  .depression-section .last-colm {
    padding: 2rem 0.7rem 3rem 0.7rem;
  }

  .sleep-dis-section {
    padding: 50px 0;
  }

  .treat-list {
    padding-bottom: 0rem;
  }

  .tic-section {
    padding: 30px 0;
    margin-top: 20px;
    margin-bottom: 50px;
  }

  .tic-section .space-cls1 {
    padding: 0 12px;
  }

  .tic-section .space-cls2 {
    padding-top: 2rem;
    padding-left: 12px;
    padding-right: 12px;
  }

  .mobl-hide {
    display: none;
  }

  .desk-hide {
    display: block;
    padding-bottom: 2rem;
  }

  .bookslot-section {
    padding: 0px 0 50px 0;
  }

  .treat-list {
    flex-direction: row;
    gap: 1rem;
    flex-wrap: wrap;
    align-items: center;
    align-content: center;
    margin: 0;
    padding: 0 1rem 1rem 1rem !important;
  }

  .btnbook {
    margin-top: 1rem;
    display: block !important;
  }

  .depression-section .btnwhite {
    display: block;
    text-align: center;
  }

  /* p {
    font-size: 13.95px !important;
  } */
}

/* Mobile Media Queries End */

/* Tablet Media Queries Start */
@media (min-width: 768px) and (max-width: 1023px) {
  .our-treatment .tab-align-cls {
    padding-right: 12px;
  }
  .depression-section h5 {
    padding-top: 20px;
  }
  .our-treatment {
    padding: 50px 0;
  }

  .treat-list {
    flex-direction: row;
    gap: 1rem;
    padding-bottom: 1.2rem !important;
    flex-wrap: wrap;
    width: 100%;
    justify-content: center;
    margin: 0 auto;
  }

  .our-treatment .btnbook {
    margin-top: 2rem;
    display: block !important;
    margin-inline: auto;
  }

  .inner-text h3 {
    text-align: center;
  }

  .our-treatment .spacing-cls {
    padding-top: 20px;
    padding-left: 0.7rem;
  }

  .adhd-section {
    padding-top: 25px;
    padding-bottom: 50px;
  }

  .we-care {
    padding: 30px 0;
    min-height: 920px !important;
  }

  .we-care .fst-column {
    padding-right: 0.6rem;
  }

  .we-care .accord-bgclr {
    margin-top: 2rem;
    margin-bottom: 2rem;
    padding: 0.2rem 1rem 1rem 1rem;
  }

  .we-care .accordion-body p {
    text-align: left;
  }

  .we-care .btnbook,
  .OCD-section .btnbook {
    display: block !important;
    width: 26%;
    margin-inline: auto;
  }

  .depression-section .btnwhite {
    display: block;
    width: 26%;
    margin-inline: auto;
    text-align: center;
  }

  .OCD-section .spacing-col2 {
    padding-left: 0.6rem;
  }

  .OCD-section .inner-text {
    margin-top: 1rem;
  }

  .depression-section {
    margin: 0px 0;
  }

  .depression-section .dep1 {
    margin-top: 0rem;
  }

  .depression-section .dep2 {
    margin-bottom: 0rem;
  }

  .depression-section .last-colm {
    padding-bottom: 50px;
    padding-top: 2rem;
  }

  .depression-section .treat-list {
    width: 100%;
    gap: 0.8rem;
  }

  .depression-section .spacing-cls {
    padding-right: 0.6rem;
  }

  .sleep-dis-section {
    padding: 50px 0;
  }

  .tic-section {
    padding: 30px 0;
    margin-top: 20px;
    margin-bottom: 50px;
  }

  .tic-section .space-cls1 {
    padding-right: 0.6rem;
  }

  .tic-section .space-cls2 {
    padding-left: 0.6rem;
    padding-top: 2rem;
  }

  .mobl-hide {
    display: none;
  }

  .desk-hide {
    display: block;
    padding-bottom: 2rem;
  }
}

/* Tablet Media Queries end */

/* desktop Media Queries 1366px start */
@media (min-width: 1200px) and (max-width: 1366px) {
  .treat-list {
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    gap: 12px;
  }
  .depression-section .spacing-cls {
    padding-bottom: 30px;
  }

  .depression-section .dep1 {
    margin-top: -1.5rem;
  }

  .depression-section .last-colm {
    gap: 3rem;
  }

  .our-treatment {
    padding: 90px 0;
  }

  .adhd-section {
    padding-top: 20px;
    padding-bottom: 90px;
  }

  .depression-section {
    margin: 50px 0;
  }

  .sleep-dis-section {
    padding: 90px 0;
  }

  .tic-section {
    padding: 80px 0;
    margin-top: 20px;
    margin-bottom: 90px;
  }

  .bookslot-section {
    padding: 0px 0px 100px;
  }
}

/* desktop Media Queries 1366px end */

/* landscape 1024 media Queries start */
@media (min-width: 991px) and (max-width: 1024px) {
  .treat-list {
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
  }

  .depression-section .dep1 {
    margin-top: 0rem;
  }

  .depression-section .dep2 {
    margin-bottom: 0rem;
  }

  .depression-section .last-colm {
    justify-content: center;
  }

  .our-treatment {
    padding: 50px 0;
  }

  .adhd-section {
    padding-top: 20px;
    padding-bottom: 90px;
  }

  .depression-section {
    margin: 20px 0;
  }

  .sleep-dis-section {
    padding: 50px 0;
  }

  .tic-section {
    padding: 50px 0;
    margin-top: 20px;
    margin-bottom: 90px;
  }

  .bookslot-section {
    padding: 0px 0px 100px;
  }

  .bookslot-section h4 {
    font-size: 25px;
  }

  .tic-section .space-cls2 {
    display: flex;
    flex-direction: column;
    justify-content: center;
  }

  .tab-align-cls {
    display: flex;
    flex-direction: column;
    justify-content: center;
  }

  .we-care .fst-column {
    padding-right: 2rem;
  }

  .we-care .accord-bgclr {
    padding: 0.5rem 1rem 1.2rem 1rem;
  }

  .we-care {
    padding: 50px 0;
    min-height: 620px;
  }
}

/* landscape 1024 media Queries end */
</style>
