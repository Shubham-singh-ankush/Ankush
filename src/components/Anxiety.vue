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
      <section class="dipassessment">
        <div class="container">
          <div class="row ocdchildadult pb-3">
            <div class="col-lg-6 pe-5">
              <div class="textareadipretion">
                <h5>Anxiety</h5>
                <h2>Anxiety Assessment for Children</h2>
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
              <img src="/images/axientychild1.png" alt="" />
            </div>
          </div>
          <div class="row ocdchildadult pt-5">
            <div class="col-lg-6 pe-5">
              <img src="/images/axientychild2.png" alt="" />
            </div>
            <div class="col-lg-6 pe-5">
              <div class="textareadipretion anxiety2">
                <h5>Causes</h5>
                <h2>What Causes Anxiety In Child</h2>
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
      <!-- here is Anxiety Symptoms 3rd section section end -->
      <section class="depesymptoms">
        <div class="container">
          <div class="row">
            <h5 class="text-center">Anxiety Symptoms</h5>
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
      <!-- here is Anxiety Symptoms 3rd section section end -->
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
                  <img src="/images/axientyser1.png" alt="" />
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
                  <img src="/images/axientyser2.png" alt="" />
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
                  <img src="/images/axientyser3.png" alt="" />
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
              <button class="btn btnbook mt-5 anxe" href="#">
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
              <img src="/images/anxietybottom.png" class="dipchoose" alt="" />
            </div>
            <div class="col-lg-6 ps-5 pt-3">
              <h5>Why Choose Us</h5>
              <h2>How Our Experts Can Help Your Child Combat Anxiety?</h2>
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
            <div class="col-md-9 col-sm-12 col-lg-9 col-xl-9">
              <h2 class="text-white">Get Started Today</h2>
              <p class="text-white">
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem <br />Ipsum has been the industry's standard
                dummy text ever since the 1500s,
              </p>
            </div>
            <div class="col-md-3 col-sm-12 col-lg-3 col-xl-3 bookbtncta">
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
      <!-- here is banner 1st section section end -->
      <!-- here is Anxiety Assessment 2nd section section start -->
      <section class="dipassessment">
        <div class="container">
          <div class="row ocdchildadult pb-3">
            <div class="col-lg-6 pe-5">
              <div class="textareadipretion">
                <h5>Anxiety</h5>
                <h2>Anxiety Assessment for Adult</h2>
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
              <img src="/images/anxietyadult1.png" alt="" />
            </div>
          </div>
          <div class="row ocdchildadult pt-5">
            <div class="col-lg-6 pe-5">
              <img src="/images/anxietyadult2.png" alt="" />
            </div>
            <div class="col-lg-6 pe-5">
              <div class="textareadipretion anxiety2">
                <h5>Causes</h5>
                <h2>What Causes Anxiety In Adult</h2>
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
      <!-- here is Anxiety Assessment 2nd section section end -->

      <!-- here is Anxiety Symptoms 3rd section section end -->
      <section class="depesymptoms">
        <div class="container">
          <div class="row">
            <h5 class="text-center">Anxiety Symptoms</h5>
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
      <!-- here is Anxiety Symptoms 3rd section section end -->
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
              <button class="btn btnbook mt-5 anxe" href="#">
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
          <div class="row ocdchildadult">
            <div class="col-lg-6">
              <img
                src="/images/anxietyadultbottom.png"
                class="dipchoose"
                alt=""
              />
            </div>
            <div class="col-lg-6 ps-5 pt-3">
              <h5>Why Choose Us</h5>
              <h2>How Our Experts Can Help Your Adult Combat Anxiety?</h2>
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
            <div class="col-md-9 col-sm-12 col-lg-9 col-xl-9">
              <h2 class="text-white">Get Started Today</h2>
              <p class="text-white">
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem <br />Ipsum has been the industry's standard
                dummy text ever since the 1500s,
              </p>
            </div>
            <div class="col-md-3 col-sm-12 col-lg-3 col-xl-3 bookbtncta">
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
  name: "Anxiety",

  components: {
    Swiper,
    SwiperSlide,
  },

  data() {
    return {
      items: [
        {
          image: "images/anxietybg.png",
          title: "Anxiety",
          description:
            "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.",
          buttonText: "Book Appointment",
        },
      ],

      currentTab: "child",
      modules: [Autoplay, Pagination],
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
.dipassessment {
  padding: 100px 0;
}

.dipassessment img {
  height: 390px;
  width: 100%;
}

.textareadipretion {
  height: 390px;
  display: flex;
  flex-wrap: wrap;
  flex-direction: column;
  align-content: center;
  align-items: flex-start;
  justify-content: center;
}

.textareadipretion li {
  padding-top: 5px;
  list-style: none;
}

.textareadipretion h5 {
  padding-top: 0px !important;
}

.blue {
  width: 8px;
  border-radius: 50%;
  height: 8px;
  margin-top: 9px;
  margin-right: 10px;
  background: #0297fe;
}

/* here is the css of depesymptoms slide css */
.dipration-slide {
  background: #ffffff;
  padding: 40px 30px;
  margin-top: 50px;
  height: 250px !important;
}

.dipretionservce {
  height: 440px !important;
}

.dipretionservce .swiper-pagination {
  bottom: 60px !important;
}

.depesymptoms {
  background: #f8f9fa;
  padding: 70px 0 40px;
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
  height: 430px;
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
/* """"""""""""""""""""""here is the css of media query"""""""""""""""""""""""""'""""'""'''' */
@media (max-width: 767px) {
  .btnsec .btnbook {
    display: inline !important;
    margin-top: 0px !important;
  }
  .btnsec {
    width: 55% !important;
  }
  .textareadipretion {
    height: 500px;
  }
  .ocdchildadult .col-lg-6.pe-5 {
    padding-right: 10px !important;
    padding-left: 10px !important;
  }
  .row.ocdchildadult.pt-5 {
    display: flex;
    flex-direction: column-reverse !important;
    padding: 0px !important;
  }
  .dipassessment {
    padding: 10px 0 50px;
  }
  .textareadipretion .btnbook {
    display: block;
    margin: 10px auto 0px;
  }
  .textareadipretion {
    height: 450px;
    padding-top: 20px;
  }
  .textareadipretion ul {
    display: flex;
    justify-content: space-evenly;
    flex-wrap: wrap;
  }
  .anxiety2 {
    height: 340px !important;
    padding-top: 0px !important;
  }
  .services {
    padding: 50px 0;
  }
  .ocdservicebox {
    margin-bottom: 35px !important;
  }
  .anxe {
    margin-top: 0px !important;
  }
  .ocdchildadult .col-lg-6.ps-5.pt-3 {
    padding-right: 10px !important;
    padding-left: 10px !important;
  }
  .dipratiolast {
    display: flex;
    justify-content: center;
    align-items: center;
    align-content: center;
    flex-wrap: wrap;
  }
  .bookbtncta {
    display: flex;
    margin-top: 20px !important;
    align-items: flex-end;
    justify-content: center !important;
  }
}
@media (min-width: 767px) and (max-width: 1023px) {
  .btnsec .btnbook {
    display: inline !important;
    margin-top: 0px !important;
  }
  .btnsec {
    width: 33.2% !important;
  }
  h2 {
    text-align: center !important;
    width: 100%;
  }
  .textareadipretion {
    height: 500px;
  }
  .ocdchildadult .col-lg-6.pe-5 {
    padding-right: 10px !important;
    padding-left: 10px !important;
  }
  .row.ocdchildadult.pt-5 {
    display: flex;
    flex-direction: column-reverse !important;
    padding: 0px !important;
  }
  .dipassessment {
    padding: 10px 0 50px;
  }
  .textareadipretion li {
    padding-right: 18px;
  }
  .textareadipretion .btnbook {
    display: block;
    margin: 10px auto 0px;
  }
  .textareadipretion {
    height: 350px;
    padding-top: 0px;
  }
  .textareadipretion ul {
    display: flex;
    justify-content: space-evenly;
    flex-wrap: wrap;
  }
  .anxiety2 {
    height: 340px !important;
    padding-top: 0px !important;
  }
  .services {
    padding: 50px 0;
  }
  .ocdservicebox {
    margin-bottom: 35px !important;
  }
  .anxe {
    margin-top: 0px !important;
  }
  .ocdchildadult .col-lg-6.ps-5.pt-3 {
    padding-right: 10px !important;
    padding-left: 10px !important;
  }
  .dipratiolast {
    display: flex;
    align-content: center;
    flex-direction: column;
  }
  .ocdchildadult .btnbook {
    display: block;
    margin: auto;
  }
  .bannertextarea p {
    text-align: center !important;
  }
  .bannertextarea .btnbook.pt-2 {
    margin: 10px auto;
  }
  .bookbtncta {
    display: flex;
    margin-top: 20px !important;
    align-items: flex-end;
    justify-content: center !important;
  }
}
</style>
