<template>
  <div>
    <!-- Child content -->
    <div v-if="currentTab === 'child'" class="child-area">
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
        <div class="row pt-3 dept">
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
      <section class="dipassessment">
        <div class="container">
          <div class="row ocdchildadult pb-3">
            <div class="col-lg-6 pe-5">
              <div class="textareadipretion">
                <h5>Depression</h5>
                <h2>Depression Assessment for Children</h2>
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
                <button class="btn btnbook mt-2" href="#">
                  Fix An Appointment
                </button>
              </div>
            </div>
            <div class="col-lg-6">
              <img src="/images/dipretion1st.png" alt="" />
            </div>
          </div>
          <div class="row ocdchildadult pt-5">
            <div class="col-lg-6 pe-5">
              <img src="/images/dipretion2nd.png" alt="" />
            </div>
            <div class="col-lg-6 pe-5">
              <div class="textareadipretion">
                <h5>Causes</h5>
                <h2>What Causes Depression In Child</h2>
                <p>
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry. Lorem Ipsum has been the industry's
                  standard dummy text ever since the 1500s,
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
                  <li class="d-flex">
                    <div class="blue"></div>
                    Lorem Ipsum
                  </li>
                  <li class="d-flex">
                    <div class="blue"></div>
                    Lorem Ipsum
                  </li>
                </ul>
                <button class="btn btnbook mt-2" href="#">
                  Fix An Appointment
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
      <!-- here is Depression Symptoms 3rd section section end -->
      <section class="depesymptoms">
        <div class="container">
          <div class="row">
            <h5 class="text-center">Depression Symptoms</h5>
            <h2 class="text-center">Sign & Symptoms In Children</h2>
            <p class="text-center pt-3">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the<br />
              industry's standard dummy text ever since the 1500s,
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
              '640': {
                slidesPerView: 1,
                spaceBetween: 10,
              },
              '768': {
                slidesPerView: 2,
                spaceBetween: 20,
              },
              '1024': {
                slidesPerView: 3,
                spaceBetween: 40,
              },
            }"
            :modules="modules"
            class="mySwiper swiper dipretionservce"
          >
            <swiper-slide class="dipration-slide">
              <div>
                <h4 class="text-center">Lorem Ipsum</h4>
                <p class="text-center pt-2">
                  Lorem Ipsum is simply dummy text of the printing and type
                  setting industry. Lorem Ipsum has been the industry's standard
                  dummy text ever since the 1500s, when an unknown printer took
                  a galley of type and scrambled it to make a type specimen
                  book.
                </p>
              </div>
            </swiper-slide>
            <swiper-slide class="dipration-slide">
              <div>
                <h4 class="text-center">Lorem Ipsum</h4>
                <p class="text-center pt-2">
                  Lorem Ipsum is simply dummy text of the printing and type
                  setting industry. Lorem Ipsum has been the industry's standard
                  dummy text ever since the 1500s, when an unknown printer took
                  a galley of type and scrambled it to make a type specimen
                  book.
                </p>
              </div> </swiper-slide
            ><swiper-slide class="dipration-slide">
              <div>
                <h4 class="text-center">Lorem Ipsum</h4>
                <p class="text-center pt-2">
                  Lorem Ipsum is simply dummy text of the printing and type
                  setting industry. Lorem Ipsum has been the industry's standard
                  dummy text ever since the 1500s, when an unknown printer took
                  a galley of type and scrambled it to make a type specimen
                  book.
                </p>
              </div> </swiper-slide
            ><swiper-slide class="dipration-slide">
              <div>
                <h4 class="text-center">Lorem Ipsum</h4>
                <p class="text-center pt-2">
                  Lorem Ipsum is simply dummy text of the printing and type
                  setting industry. Lorem Ipsum has been the industry's standard
                  dummy text ever since the 1500s, when an unknown printer took
                  a galley of type and scrambled it to make a type specimen
                  book.
                </p>
              </div> </swiper-slide
            ><swiper-slide class="dipration-slide">
              <div>
                <h4 class="text-center">Lorem Ipsum</h4>
                <p class="text-center pt-2">
                  Lorem Ipsum is simply dummy text of the printing and type
                  setting industry. Lorem Ipsum has been the industry's standard
                  dummy text ever since the 1500s, when an unknown printer took
                  a galley of type and scrambled it to make a type specimen
                  book.
                </p>
              </div> </swiper-slide
            ><swiper-slide class="dipration-slide">
              <div>
                <h4 class="text-center">Lorem Ipsum</h4>
                <p class="text-center pt-2">
                  Lorem Ipsum is simply dummy text of the printing and type
                  setting industry. Lorem Ipsum has been the industry's standard
                  dummy text ever since the 1500s, when an unknown printer took
                  a galley of type and scrambled it to make a type specimen
                  book.
                </p>
              </div> </swiper-slide
            ><swiper-slide class="dipration-slide">
              <div>
                <h4 class="text-center">Lorem Ipsum</h4>
                <p class="text-center pt-2">
                  Lorem Ipsum is simply dummy text of the printing and type
                  setting industry. Lorem Ipsum has been the industry's standard
                  dummy text ever since the 1500s, when an unknown printer took
                  a galley of type and scrambled it to make a type specimen
                  book.
                </p>
              </div>
            </swiper-slide>
            <!-- </div> -->
            <div class="swiper-pagination"></div>
          </swiper>
        </div>
      </section>
      <!-- here is Depression Symptoms 3rd section section end -->
      <!-- here is Our Services slide 4th section section start -->
      <section class="services">
        <div class="container">
          <div class="row">
            <h5 class="text-center">Our Services</h5>
            <h2 class="text-center pb-3 pt-2">Lorem Ipsum Dolor Text</h2>
            <p class="text-center">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the <br />industry's standard dummy
              text ever since the 1500s,
            </p>
          </div>
          <div class="row pt-3">
            <div class="col-xl-4 col-lg-6 col-md-6">
              <div class="ocdservicebox">
                <div class="depservicesbox">
                  <img src="/images/diprationserv.png" alt="" />
                  <h2 class="text-center text-white">Lorem Ipsum</h2>
                  <div class="dephidebox">
                    <h4 class="text-center text-white">Lorem Ipsum</h4>
                    <p class="text-center text-white">
                      Lorem Ipsum is simply dummy text of the printing and type
                      setting industry. Lorem Ipsum has been the industry's
                      standard dummy text ever since the 1500s, when an unknown
                      printer took a galley of type and scrambled it to make a
                      type specimen book.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div class="col-xl-4 col-lg-6 col-md-6">
              <div class="ocdservicebox">
                <div class="depservicesbox">
                  <img src="/images/diprationserv2.png" alt="" />
                  <h2 class="text-center text-white">Lorem Ipsum</h2>
                  <div class="dephidebox">
                    <h4 class="text-center text-white">Lorem Ipsum</h4>
                    <p class="text-center text-white">
                      Lorem Ipsum is simply dummy text of the printing and type
                      setting industry. Lorem Ipsum has been the industry's
                      standard dummy text ever since the 1500s, when an unknown
                      printer took a galley of type and scrambled it to make a
                      type specimen book.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div class="col-xl-4 col-lg-6 col-md-6">
              <div class="ocdservicebox">
                <div class="depservicesbox">
                  <img src="/images/diprationserv3.png" alt="" />
                  <h2 class="text-center text-white">Lorem Ipsum</h2>
                  <div class="dephidebox">
                    <h4 class="text-center text-white">Lorem Ipsum</h4>
                    <p class="text-center text-white">
                      Lorem Ipsum is simply dummy text of the printing and type
                      setting industry. Lorem Ipsum has been the industry's
                      standard dummy text ever since the 1500s, when an unknown
                      printer took a galley of type and scrambled it to make a
                      type specimen book.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div class="col-12 d-flex justify-content-center">
              <button class="btn btnbook mt-5" href="#">
                Book An Appointment
              </button>
            </div>
          </div>
        </div>
      </section>
      <!-- here is Assessment slide 4th section section end -->
      <!-- here is Why Choose Us 5th section section start -->
      <section class="dipassessment">
        <div class="container">
          <div class="row ocdchildadult pb-3">
            <div class="col-lg-6">
              <img src="/images/dipchooseimg.png" class="dipchoose" alt="" />
            </div>
            <div class="col-lg-6 ps-5 pt-3">
              <h5>Why Choose Us</h5>
              <h2>How Our Experts Can Help Your Child Combat Depression?</h2>
              <p>
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
                text ever since the 1500s,
              </p>
              <div class="row">
                <div class="col-6">
                  <ul class="dipratiolast">
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
                </div>
                <div class="col-6">
                  <ul class="dipratiolast">
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
                </div>
              </div>
              <button class="btn btnbook mt-2" href="#">
                Fix An Appointment
              </button>
            </div>
          </div>
        </div>
      </section>
      <!-- here is Why Choose Us 5th section section end -->
      <!-- here is Why CTA Us 7th section section start -->
      <section class="ctabg">
        <div class="container">
          <div class="row">
            <div class="col-md-8 col-sm-12 col-lg-9 col-xl-9">
              <h2 class="text-white">Get Started Today</h2>
              <p class="text-white">
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem <br />Ipsum has been the industry's standard
                dummy text ever since the 1500s,
              </p>
            </div>
            <div class="col-md-4 col-sm-12 col-lg-3 col-xl-3 bookbtncta">
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
        <div class="row pt-3 dept">
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
      <!-- here is banner 1st section section end -->
      <!-- here is Depression Assessment 2nd section section start -->
      <section class="dipassessment">
        <div class="container">
          <div class="row ocdchildadult pb-3">
            <div class="col-lg-6 pe-5">
              <div class="textareadipretion">
                <h5>Depression</h5>
                <h2>Depression Assessment for Adult</h2>
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
                <button class="btn btnbook mt-2" href="#">
                  Fix An Appointment
                </button>
              </div>
            </div>
            <div class="col-lg-6">
              <img src="/images/depadult1st.png" alt="" />
            </div>
          </div>
          <div class="row ocdchildadult pt-5">
            <div class="col-lg-6 pe-5">
              <img src="/images/depadult2nd.png" alt="" />
            </div>
            <div class="col-lg-6 pe-5">
              <div class="textareadipretion">
                <h5>Causes</h5>
                <h2>What Causes Depression In Adult</h2>
                <p>
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry. Lorem Ipsum has been the industry's
                  standard dummy text ever since the 1500s,
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
                  <li class="d-flex">
                    <div class="blue"></div>
                    Lorem Ipsum
                  </li>
                  <li class="d-flex">
                    <div class="blue"></div>
                    Lorem Ipsum
                  </li>
                </ul>
                <button class="btn btnbook mt-2" href="#">
                  Fix An Appointment
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
      <!-- here is Depression Assessment 2nd section section end -->

      <!-- here is Depression Symptoms 3rd section section end -->
      <section class="depesymptoms">
        <div class="container">
          <div class="row">
            <h5 class="text-center">Depression Symptoms</h5>
            <h2 class="text-center">Sign & Symptoms In Children</h2>
            <p class="text-center pt-3">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the<br />
              industry's standard dummy text ever since the 1500s,
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
              '640': {
                slidesPerView: 1,
                spaceBetween: 10,
              },
              '768': {
                slidesPerView: 2,
                spaceBetween: 20,
              },
              '1024': {
                slidesPerView: 3,
                spaceBetween: 40,
              },
            }"
            :modules="modules"
            class="mySwiper swiper dipretionservce"
          >
            <swiper-slide class="dipration-slide">
              <div>
                <h4 class="text-center">Lorem Ipsum</h4>
                <p class="text-center pt-2">
                  Lorem Ipsum is simply dummy text of the printing and type
                  setting industry. Lorem Ipsum has been the industry's standard
                  dummy text ever since the 1500s, when an unknown printer took
                  a galley of type and scrambled it to make a type specimen
                  book.
                </p>
              </div>
            </swiper-slide>
            <swiper-slide class="dipration-slide">
              <div>
                <h4 class="text-center">Lorem Ipsum</h4>
                <p class="text-center pt-2">
                  Lorem Ipsum is simply dummy text of the printing and type
                  setting industry. Lorem Ipsum has been the industry's standard
                  dummy text ever since the 1500s, when an unknown printer took
                  a galley of type and scrambled it to make a type specimen
                  book.
                </p>
              </div> </swiper-slide
            ><swiper-slide class="dipration-slide">
              <div>
                <h4 class="text-center">Lorem Ipsum</h4>
                <p class="text-center pt-2">
                  Lorem Ipsum is simply dummy text of the printing and type
                  setting industry. Lorem Ipsum has been the industry's standard
                  dummy text ever since the 1500s, when an unknown printer took
                  a galley of type and scrambled it to make a type specimen
                  book.
                </p>
              </div> </swiper-slide
            ><swiper-slide class="dipration-slide">
              <div>
                <h4 class="text-center">Lorem Ipsum</h4>
                <p class="text-center pt-2">
                  Lorem Ipsum is simply dummy text of the printing and type
                  setting industry. Lorem Ipsum has been the industry's standard
                  dummy text ever since the 1500s, when an unknown printer took
                  a galley of type and scrambled it to make a type specimen
                  book.
                </p>
              </div> </swiper-slide
            ><swiper-slide class="dipration-slide">
              <div>
                <h4 class="text-center">Lorem Ipsum</h4>
                <p class="text-center pt-2">
                  Lorem Ipsum is simply dummy text of the printing and type
                  setting industry. Lorem Ipsum has been the industry's standard
                  dummy text ever since the 1500s, when an unknown printer took
                  a galley of type and scrambled it to make a type specimen
                  book.
                </p>
              </div> </swiper-slide
            ><swiper-slide class="dipration-slide">
              <div>
                <h4 class="text-center">Lorem Ipsum</h4>
                <p class="text-center pt-2">
                  Lorem Ipsum is simply dummy text of the printing and type
                  setting industry. Lorem Ipsum has been the industry's standard
                  dummy text ever since the 1500s, when an unknown printer took
                  a galley of type and scrambled it to make a type specimen
                  book.
                </p>
              </div> </swiper-slide
            ><swiper-slide class="dipration-slide">
              <div>
                <h4 class="text-center">Lorem Ipsum</h4>
                <p class="text-center pt-2">
                  Lorem Ipsum is simply dummy text of the printing and type
                  setting industry. Lorem Ipsum has been the industry's standard
                  dummy text ever since the 1500s, when an unknown printer took
                  a galley of type and scrambled it to make a type specimen
                  book.
                </p>
              </div>
            </swiper-slide>
            <!-- </div> -->
            <div class="swiper-pagination"></div>
          </swiper>
        </div>
      </section>
      <!-- here is Depression Symptoms 3rd section section end -->
      <!-- here is Our Services slide 4th section section start -->
      <section class="services">
        <div class="container">
          <div class="row">
            <h5 class="text-center">Our Services</h5>
            <h2 class="text-center pb-3 pt-2">Lorem Ipsum Dolor Text</h2>
            <p class="text-center">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the <br />industry's standard dummy
              text ever since the 1500s,
            </p>
          </div>
          <div class="row pt-3">
            <div class="col-xl-4 col-lg-6 col-md-6">
              <div class="ocdservicebox">
                <div class="depservicesbox">
                  <img src="/images/depservic1.png" alt="" />
                  <h2 class="text-center text-white">Lorem Ipsum</h2>
                  <div class="dephidebox">
                    <h4 class="text-center text-white">Lorem Ipsum</h4>
                    <p class="text-center text-white">
                      Lorem Ipsum is simply dummy text of the printing and type
                      setting industry. Lorem Ipsum has been the industry's
                      standard dummy text ever since the 1500s, when an unknown
                      printer took a galley of type and scrambled it to make a
                      type specimen book.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div class="col-xl-4 col-lg-6 col-md-6">
              <div class="ocdservicebox">
                <div class="depservicesbox">
                  <img src="/images/depservic2.png" alt="" />
                  <h2 class="text-center text-white">Lorem Ipsum</h2>
                  <div class="dephidebox">
                    <h4 class="text-center text-white">Lorem Ipsum</h4>
                    <p class="text-center text-white">
                      Lorem Ipsum is simply dummy text of the printing and type
                      setting industry. Lorem Ipsum has been the industry's
                      standard dummy text ever since the 1500s, when an unknown
                      printer took a galley of type and scrambled it to make a
                      type specimen book.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div class="col-xl-4 col-lg-6 col-md-6">
              <div class="ocdservicebox">
                <div class="depservicesbox">
                  <img src="/images/depservic3.png" alt="" />
                  <h2 class="text-center text-white">Lorem Ipsum</h2>
                  <div class="dephidebox">
                    <h4 class="text-center text-white">Lorem Ipsum</h4>
                    <p class="text-center text-white">
                      Lorem Ipsum is simply dummy text of the printing and type
                      setting industry. Lorem Ipsum has been the industry's
                      standard dummy text ever since the 1500s, when an unknown
                      printer took a galley of type and scrambled it to make a
                      type specimen book.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div class="col-12 d-flex justify-content-center">
              <button class="btn btnbook mt-5" href="#">
                Book An Appointment
              </button>
            </div>
          </div>
        </div>
      </section>
      <!-- here is Assessment slide 4th section section end -->
      <!-- here is Why Choose Us 5th section section start -->
      <section class="dipassessment">
        <div class="container">
          <div class="row ocdchildadult pb-3">
            <div class="col-lg-6">
              <img src="/images/depbottom.png" class="dipchoose" alt="" />
            </div>
            <div class="col-lg-6 ps-5 pt-3">
              <h5>Why Choose Us</h5>
              <h2>How Our Experts Can Help Your Adult Combat Depression?</h2>
              <p>
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
                text ever since the 1500s,
              </p>
              <div class="row">
                <div class="col-6">
                  <ul class="dipratiolast">
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
                </div>
                <div class="col-6">
                  <ul class="dipratiolast">
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
                </div>
              </div>
              <button class="btn btnbook mt-2" href="#">
                Fix An Appointment
              </button>
            </div>
          </div>
        </div>
      </section>
      <!-- here is Why Choose Us 5th section section end -->
      <!-- here is Why CTA Us 7th section section start -->
      <section class="ctabg">
        <div class="container">
          <div class="row">
            <div class="col-md-8 col-sm-12 col-lg-9 col-xl-9">
              <h2 class="text-white">Get Started Today</h2>
              <p class="text-white">
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem <br />Ipsum has been the industry's standard
                dummy text ever since the 1500s,
              </p>
            </div>
            <div class="col-md-4 col-sm-12 col-lg-3 col-xl-3 bookbtncta">
              <button class="btnwhite">Book Appointments</button>
            </div>
          </div>
        </div>
      </section>
      <!-- here is Why CTA Us 7th section section start -->
    </div>
  </div>
</template>

<script>
import { Swiper, SwiperSlide } from "swiper/vue";
import { Autoplay, Pagination } from "swiper/modules";

export default {
  name: "Depressions",

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
          image: "images/diprationbg.png",
          title: "Depression",
          description:
            "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.",
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
</script>

<style scoped>
img {
  width: 100%;
}

/* here is the css of depesymptoms slide css */
.dipration-slide {
  background: #ffffff;
  padding: 40px 30px;
  margin-top: 50px;
  height: 250px !important;
}
.dipassessment {
  padding: 120px 0;
}
.dipretionservce {
  height: 440px !important;
}

.dipretionservce .swiper-pagination {
  bottom: 60px !important;
}

.depesymptoms {
  background: #f8f9fa;
  padding: 80px 0 60px;
}

/* here is the css of services section */
.ocdservicebox {
  margin-right: 20px;
}

.ocdservicebox:last-child {
  margin-right: 0px !important;
}

.services {
  padding: 100px 0;
}

.depservicesbox {
  height: 440px;
  position: relative;
}

.depservicesbox:hover .dephidebox {
  opacity: 1;
}

.dephidebox {
  opacity: 0;
  display: flex;
  z-index: 9999;
  padding: 50px;
  transition: 1s;
  top: 0;
  color: #ffffff;
  width: 100%;
  height: 430px;
  position: absolute;
  background: rgb(0 0 0 / 80%);
  justify-content: center;
  align-items: center;
  flex-direction: column;
}

.dephidebox p {
  padding-top: 20px;
  font-size: 18px;
  font-weight: 400;
  line-height: 27px;
  text-align: center;
}

.depservicesbox img {
  width: 100%;
}

.depservicesbox h2 {
  position: absolute;
  font-size: 25px;
  width: 100%;
  bottom: 0;
  padding: 10px 0px;
  height: 50%;
  background: linear-gradient(
    179.39deg,
    rgba(0, 0, 0, 0) 21.52%,
    #000000 79.48%
  );
  margin-top: -60px;
}

.depservicesbox:hover h2 {
  display: none !important;
}

.dipchoose {
  border-radius: 5px;
}

.dipratiolast li {
  color: #777777;
  opacity: 0.8;
  font-size: 15px;
  font-weight: 700;
  line-height: 22.5px;
  text-align: left;
}

/*"""""""""""""""""""""""""""""" here is the css of media querry """"""""""""""""""""""""""*/
@media (max-width: 767px) {
  .bannertextarea p {
    padding-right: 0px;
  }
  .dept .btnbook {
    margin-top: 0px;
    display: inline !important;
  }
  .btnsec {
    width: 54.5% !important;
  }
  .dipassessment {
    padding: 60px 0;
  }
  .ocdchildadult .col-lg-6.pe-5,
  .ocdchildadult .col-lg-6.ps-5.pt-3 {
    padding-left: 10px !important;
    padding-right: 10px !important;
  }
  .ocdchildadult .col-lg-6.pe-5 .btnbook {
    margin-bottom: 35px;
  }
  .row.ocdchildadult.pt-5 {
    display: flex;
    flex-direction: column-reverse !important;
  }
  .textareadipretion ul,
  .ocdchildadult ul {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-evenly;
  }
  .bookbtncta {
    display: flex;
    margin-top: 20px !important;
    align-items: flex-end;
    justify-content: center !important;
  }
  .dipretionservce {
    height: 400px !important;
  }
  .depesymptoms,
  .services {
    padding: 50px 0;
  }
  .dephidebox {
    padding: 23px;
    height: 370px;
  }
  .depservicesbox {
    height: 390px;
    margin-bottom: 30px;
  }
  .services .btnbook {
    margin-top: 0px !important;
  }
}

@media (min-width: 767px) and (max-width: 1023px) {
  .bannertextarea p {
    padding-right: 0px;
  }
  .dept .btnbook {
    margin-top: 0px;
    display: inline !important;
  }
  .btnsec {
    width: 32.2% !important;
  }
  .dipassessment {
    padding: 30px 0 60px;
  }
  .ocdchildadult .col-lg-6.pe-5,
  .ocdchildadult .col-lg-6.ps-5.pt-3 {
    padding-left: 10px !important;
    padding-right: 10px !important;
  }
  .ocdchildadult .col-lg-6.pe-5 .btnbook {
    margin-bottom: 35px;
    display: block !important;
    width: 30%;
    margin: 0 auto 35px;
  }
  .row.ocdchildadult.pt-5 {
    display: flex;
    flex-direction: column-reverse !important;
  }
  .textareadipretion ul,
  .ocdchildadult ul {
    display: flex;
    flex-wrap: wrap;
    flex-direction: column;
    align-content: space-around;
    align-items: stretch;
  }
  .bookbtncta {
    display: flex;
    margin-top: 20px !important;
    align-items: flex-end;
    justify-content: center !important;
  }
  .ocdchildadult .btnbook {
    display: block;
    margin: auto;
  }
  .dipretionservce {
    height: 400px !important;
  }
  .dephidebox {
    padding: 23px;
    height: 290px;
  }
  .depesymptoms,
  .services {
    padding: 50px 0;
  }

  .depservicesbox {
    height: 297px;
    margin-bottom: 30px;
  }
  .services .btnbook {
    margin-top: 0px !important;
  }
  .ctabg h2 {
    text-align: start !important;
  }
}
@media (min-width: 1024px) and (max-width: 1279px) {
  .dipassessment {
    padding: 10px 0 60px;
  }
  .btnsec {
    width: 24.1% !important;
  }
  .ocdchildadult img {
    width: 100%;
    height: 390px;
  }
  .depservicesbox {
    height: 370px;
    margin-bottom: 30px;
  }
  .dephidebox {
    padding: 23px;
    height: 363px;
  }
}
@media (min-width: 1280px) and (max-width: 1441px) {
  .ocdchildadult img {
    width: 100%;
    height: 390px;
  }
}
</style>
