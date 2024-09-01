<template>
  <div>
    <div v-if="currentTab === 'child'" class="child-area">
      <section class="child-area">
        <!-- here is banner 1st section section start -->
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

        <!-- here is banner 1st section section end -->
        <!-- here is OCD Assessment 2nd section section start -->
        <section class="childadultbg">
          <div class="container">
            <div class="row ocdchildadult">
              <div class="col-lg-6">
                <div class="row">
                  <div class="col-md-7">
                    <div class="leftimg">
                      <img src="/images/ocdleftimg.png" alt="" />
                    </div>
                  </div>
                  <div class="col-md-5">
                    <div class="rightimg">
                      <img src="/images/ocdrightimg.png" alt="" />
                    </div>
                  </div>
                </div>
              </div>
              <div class="col-lg-6">
                <div class="textareaocd">
                  <h5>OCD Assessment</h5>
                  <h2>Private OCD Assessment for Children</h2>
                  <p>
                    Lorem Ipsum is simply dummy text of the printing and
                    typesetting industry. Lorem Ipsum has been the industry's
                    standard dummy text ever since the 1500s, when an unknown
                    printer took a galley of type and scrambled it to make a
                    type specimen book.
                  </p>
                  <p>
                    Lorem Ipsum is simply dummy text of the printing and
                    typesetting industry. Lorem Ipsum has been the industry's
                    standard dummy text ever since the 1500s, when an unknown
                    printer took a galley of type and scrambled it to make a
                    type specimen book.
                  </p>
                  <button class="btn btnbook mt-2" href="#">
                    Fix An Appointment
                  </button>
                </div>
              </div>
            </div>
          </div>
        </section>
        <!-- here is OCD Symptoms 3rd section section start -->
        <div class="container symptoms">
          <div class="row">
            <h5 class="text-center">OCD Symptoms</h5>
            <h2 class="text-center pb-3 pt-2">
              What are the signs or symptoms of <br />
              OCD in a Child?
            </h2>
            <p class="text-center">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the <br />industry's standard dummy
              text ever since the 1500s,
            </p>
          </div>
          <div class="row pt-3">
            <div class="col-xl-4 col-lg-4 col-md-6">
              <div class="symptomsbox">
                <h4>Obsessions</h4>
                <p>
                  Lorem Ipsum is simply dummy text of the printing and type
                  setting industry. Lorem Ipsum has been the industry's standard
                  dummy text ever since the 1500s, when an unknown printer took
                  a galley of type and scrambled it to make a type specimen
                  book.
                </p>
              </div>
            </div>
            <div class="col-xl-4 col-lg-4 col-md-6">
              <div class="symptomsbox">
                <h4>Compulsions</h4>
                <p>
                  Lorem Ipsum is simply dummy text of the printing and type
                  setting industry. Lorem Ipsum has been the industry's standard
                  dummy text ever since the 1500s, when an unknown printer took
                  a galley of type and scrambled it to make a type specimen
                  book.
                </p>
              </div>
            </div>
            <div class="col-xl-4 col-lg-4 col-md-6">
              <div class="symptomsbox">
                <h4>Feelings</h4>
                <p>
                  Lorem Ipsum is simply dummy text of the printing and type
                  setting industry. Lorem Ipsum has been the industry's standard
                  dummy text ever since the 1500s, when an unknown printer took
                  a galley of type and scrambled it to make a type specimen
                  book.
                </p>
              </div>
            </div>
            <div class="col-12 d-flex justify-content-center">
              <button class="btn btnbook mt-3" href="#">
                Speak With Our Consultant
              </button>
            </div>
          </div>
        </div>
        <!-- here is OCD Symptoms 3rd section section end -->
        <!-- here is Assessment Process 4th section section start -->
        <section class="assessment">
          <div class="container">
            <div class="row ocdchildadult">
              <div class="col-lg-5">
                <div class="">
                  <div class="accordion" id="accordionExample">
                    <div class="accordion-item">
                      <h2 class="accordion-header" id="headingOne">
                        <button
                          class="accordion-button"
                          type="button"
                          data-bs-toggle="collapse"
                          data-bs-target="#collapseOne"
                          aria-expanded="true"
                          aria-controls="collapseOne"
                        >
                          Childhood OCD Treatments
                        </button>
                      </h2>
                      <div
                        id="collapseOne"
                        class="accordion-collapse collapse show"
                        aria-labelledby="headingOne"
                        data-bs-parent="#accordionExample"
                      >
                        <div class="accordion-body">
                          Lorem Ipsum is simply dummy text of the printing and
                          typesetting industry. Lorem Ipsum has been the
                          industry's standard dummy text ever since the 1500s,
                          when an unknown printer took a galley of type and
                          scrambled it to make a type specimen book. 
                        </div>
                      </div>
                    </div>
                    <div class="accordion-item">
                      <h2 class="accordion-header" id="headingTwo">
                        <button
                          class="accordion-button collapsed"
                          type="button"
                          data-bs-toggle="collapse"
                          data-bs-target="#collapseTwo"
                          aria-expanded="false"
                          aria-controls="collapseTwo"
                        >
                          Treating OCD at Diverse Diagnostics
                        </button>
                      </h2>
                      <div
                        id="collapseTwo"
                        class="accordion-collapse collapse"
                        aria-labelledby="headingTwo"
                        data-bs-parent="#accordionExample"
                      >
                        <div class="accordion-body">
                          Lorem Ipsum is simply dummy text of the printing and
                          typesetting industry. Lorem Ipsum has been the
                          industry's standard dummy text ever since the 1500s,
                          when an unknown printer took a galley of type and
                          scrambled it to make a type specimen book. 
                        </div>
                      </div>
                    </div>
                    <div class="accordion-item">
                      <h2 class="accordion-header" id="headingThree">
                        <button
                          class="accordion-button collapsed"
                          type="button"
                          data-bs-toggle="collapse"
                          data-bs-target="#collapseThree"
                          aria-expanded="false"
                          aria-controls="collapseThree"
                        >
                          Medication Under Shared Care
                        </button>
                      </h2>
                      <div
                        id="collapseThree"
                        class="accordion-collapse collapse"
                        aria-labelledby="headingThree"
                        data-bs-parent="#accordionExample"
                      >
                        <div class="accordion-body">
                          Lorem Ipsum is simply dummy text of the printing and
                          typesetting industry. Lorem Ipsum has been the
                          industry's standard dummy text ever since the 1500s,
                          when an unknown printer took a galley of type and
                          scrambled it to make a type specimen book. 
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div class="col-lg-7">
                <div class="textareaocd ps-5">
                  <h5>Assessment Process</h5>
                  <h2>Our Assessment Process for Childhood OCD</h2>
                  <p>
                    Lorem Ipsum is simply dummy text of the printing and
                    typesetting industry. Lorem Ipsum has been the industry's
                    standard dummy text ever since the 1500s, when an unknown
                    printer took a galley of type and scrambled it to make a
                    type specimen book.
                  </p>
                  <p>
                    Lorem Ipsum is simply dummy text of the printing and
                    typesetting industry. Lorem Ipsum has been the industry's
                    standard dummy text ever since the 1500s, when an unknown
                    printer took a galley of type and scrambled it to make a
                    type specimen book.
                  </p>
                  <button class="btn btnbook mt-2" href="#">Contact Now</button>
                </div>
              </div>
            </div>
          </div>
        </section>
        <!-- here is Assessment Process 4th section section end -->

        <!-- here is Our Services Process 5th section section start -->
        <section class="services">
          <div class="container">
            <div class="row">
              <h5 class="text-center">Our Services</h5>
              <h2 class="text-center pb-3 pt-2">Lorem Ipsum Dolor Text</h2>
              <p class="text-center">
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the <br />industry's standard
                dummy text ever since the 1500s,
              </p>
            </div>
            <div class="row pt-3">
              <div class="col-xl-4">
                <div class="ocdservicebox">
                  <div class="servicesbox">
                    <img src="/images/ocdchild1.png" alt="" />
                    <h2 class="text-center text-white">Individual Therapy</h2>
                    <div class="hidebox">
                      <h4 class="text-center text-white">Individual Therapy</h4>
                      <p class="text-center text-white">
                        Lorem Ipsum is simply dummy text of the printing and
                        type setting industry. Lorem Ipsum has been the
                        industry's standard dummy text ever since the 1500s,
                        when an unknown printer took a galley of type and
                        scrambled it to make a type specimen book.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div class="col-xl-4">
                <div class="ocdservicebox">
                  <div class="servicesbox">
                    <img src="/images/ocdchild2.png" alt="" />
                    <h2 class="text-center text-white">
                      Cognitive Behavioral Therapy
                    </h2>
                    <div class="hidebox">
                      <h4 class="text-center text-white">
                        Cognitive Behavioral Therapy
                      </h4>
                      <p class="text-center text-white">
                        Lorem Ipsum is simply dummy text of the printing and
                        type setting industry. Lorem Ipsum has been the
                        industry's standard dummy text ever since the 1500s,
                        when an unknown printer took a galley of type and
                        scrambled it to make a type specimen book.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div class="col-xl-4">
                <div class="ocdservicebox">
                  <div class="servicesbox">
                    <img src="/images/ocdchild3.png" alt="" />
                    <h2 class="text-center text-white">Family Therapy</h2>
                    <div class="hidebox">
                      <h4 class="text-center text-white">Family Therapy</h4>
                      <p class="text-center text-white">
                        Lorem Ipsum is simply dummy text of the printing and
                        type setting industry. Lorem Ipsum has been the
                        industry's standard dummy text ever since the 1500s,
                        when an unknown printer took a galley of type and
                        scrambled it to make a type specimen book.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div class="col d-flex justify-content-center mt-3">
                <button class="btn btnbook mt-3" href="#">
                  Book An Appointment
                </button>
              </div>
            </div>
          </div>
        </section>
        <!-- here is Assessment Process 5th section section end -->
        <!-- here is Why Choose Us 6th section section start -->
        <section class="choose">
          <div class="container">
            <div class="row">
              <div class="col-xl-6">
                <h5>Why Choose Us</h5>
                <h2>Why Choose Cognition Care</h2>
                <p>
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry. Lorem Ipsum has been the industry's
                  standard dummy text ever since the 1500s,
                </p>
                <ul>
                  <li class="d-flex">
                    <div class="blue"></div>
                    Expert Team
                  </li>
                  <li class="d-flex">
                    <div class="blue"></div>
                    Personalized Care
                  </li>
                  <li class="d-flex">
                    <div class="blue"></div>
                    Parent Involvement
                  </li>
                </ul>
                <button class="btn btnbook mt-1" href="#">
                  Fix Appointment
                </button>
              </div>
              <div class="col-xl-6">
                <img src="/images/ocdchildchoose.png" alt="" />
              </div>
            </div>
          </div>
        </section>
        <!-- here is Why Choose Us 6th section section end -->

        <!-- here is OCD Assessment 2nd section section end -->
        <!-- here is Why CTA Us 7th section section start -->
        <section class="ctabg">
          <div class="container">
            <div class="row">
              <div class="col-md-9 col-sm-12 col-lg-9 col-xl-9">
                <h2 class="text-white">Get Started Today</h2>
                <p class="text-white">
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry. Lorem <br />Ipsum has been the
                  industry's standard dummy text ever since the 1500s,
                </p>
              </div>
              <div class="col-md-3 col-sm-12 col-lg-3 col-xl-3 bookbtncta">
                <button class="btnwhite">Book Appointments</button>
              </div>
            </div>
          </div>
        </section>
      </section>
    </div>
    <div v-if="currentTab === 'adult'" class="adult-area">
      <section class="adult-area">
        <!-- here is banner 1st section section start -->
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
        <!-- here is OCD Assessment 2nd section section start -->
        <section class="childadultbg">
          <div class="container">
            <div class="row ocdchildadult">
              <div class="col-lg-6">
                <div class="row">
                  <div class="col-md-7">
                    <div class="leftimg">
                      <img src="/images/ocdadultleft.png" alt="" />
                    </div>
                  </div>
                  <div class="col-md-5">
                    <div class="rightimg">
                      <img src="/images/ocdadultright.png" alt="" />
                    </div>
                  </div>
                </div>
              </div>
              <div class="col-lg-6">
                <div class="textareaocd">
                  <h5>OCD Assessment</h5>
                  <h2>Private OCD Assessment for Adults</h2>
                  <p>
                    Lorem Ipsum is simply dummy text of the printing and
                    typesetting industry. Lorem Ipsum has been the industry's
                    standard dummy text ever since the 1500s, when an unknown
                    printer took a galley of type and scrambled it to make a
                    type specimen book.
                  </p>
                  <p>
                    Lorem Ipsum is simply dummy text of the printing and
                    typesetting industry. Lorem Ipsum has been the industry's
                    standard dummy text ever since the 1500s, when an unknown
                    printer took a galley of type and scrambled it to make a
                    type specimen book.
                  </p>
                  <button class="btn btnbook mt-2" href="#">
                    Fix An Appointment
                  </button>
                </div>
              </div>
            </div>
          </div>
        </section>
        <!-- here is OCD Assessment 2nd section section end -->
        <!-- here is OCD Symptoms 3rd section section start -->
        <div class="container symptoms">
          <div class="row">
            <h5 class="text-center">OCD Symptoms</h5>
            <h2 class="text-center pb-3 pt-2">
              What are the signs or symptoms of <br />
              OCD in a Adults?
            </h2>
            <p class="text-center">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the <br />industry's standard dummy
              text ever since the 1500s,
            </p>
          </div>
          <div class="row pt-3">
            <div class="col-xl-4 col-lg-4 col-md-6">
              <div class="symptomsbox">
                <h4>Obsessions</h4>
                <p>
                  Lorem Ipsum is simply dummy text of the printing and type
                  setting industry. Lorem Ipsum has been the industry's standard
                  dummy text ever since the 1500s, when an unknown printer took
                  a galley of type and scrambled it to make a type specimen
                  book.
                </p>
              </div>
            </div>
            <div class="col-xl-4 col-lg-4 col-md-6">
              <div class="symptomsbox">
                <h4>Compulsions</h4>
                <p>
                  Lorem Ipsum is simply dummy text of the printing and type
                  setting industry. Lorem Ipsum has been the industry's standard
                  dummy text ever since the 1500s, when an unknown printer took
                  a galley of type and scrambled it to make a type specimen
                  book.
                </p>
              </div>
            </div>
            <div class="col-xl-4 col-lg-4 col-md-6">
              <div class="symptomsbox">
                <h4>Feelings</h4>
                <p>
                  Lorem Ipsum is simply dummy text of the printing and type
                  setting industry. Lorem Ipsum has been the industry's standard
                  dummy text ever since the 1500s, when an unknown printer took
                  a galley of type and scrambled it to make a type specimen
                  book.
                </p>
              </div>
            </div>
            <div class="col d-flex justify-content-center">
              <button class="btn btnbook mt-3" href="#">
                Speak With Our Consultant
              </button>
            </div>
          </div>
        </div>
        <!-- here is Assessment Process 4th section section start -->
        <section class="assessment">
          <div class="container">
            <div class="row ocdchildadult">
              <div class="col-lg-5">
                <div class="">
                  <div class="accordion" id="accordionExample">
                    <div class="accordion-item">
                      <h2 class="accordion-header" id="headingOne">
                        <button
                          class="accordion-button"
                          type="button"
                          data-bs-toggle="collapse"
                          data-bs-target="#collapseOne"
                          aria-expanded="true"
                          aria-controls="collapseOne"
                        >
                          Adults OCD Treatments
                        </button>
                      </h2>
                      <div
                        id="collapseOne"
                        class="accordion-collapse collapse show"
                        aria-labelledby="headingOne"
                        data-bs-parent="#accordionExample"
                      >
                        <div class="accordion-body">
                          Lorem Ipsum is simply dummy text of the printing and
                          typesetting industry. Lorem Ipsum has been the
                          industry's standard dummy text ever since the 1500s,
                          when an unknown printer took a galley of type and
                          scrambled it to make a type specimen book. 
                        </div>
                      </div>
                    </div>
                    <div class="accordion-item">
                      <h2 class="accordion-header" id="headingTwo">
                        <button
                          class="accordion-button collapsed"
                          type="button"
                          data-bs-toggle="collapse"
                          data-bs-target="#collapseTwo"
                          aria-expanded="false"
                          aria-controls="collapseTwo"
                        >
                          Treating OCD at Diverse Diagnostics
                        </button>
                      </h2>
                      <div
                        id="collapseTwo"
                        class="accordion-collapse collapse"
                        aria-labelledby="headingTwo"
                        data-bs-parent="#accordionExample"
                      >
                        <div class="accordion-body">
                          Lorem Ipsum is simply dummy text of the printing and
                          typesetting industry. Lorem Ipsum has been the
                          industry's standard dummy text ever since the 1500s,
                          when an unknown printer took a galley of type and
                          scrambled it to make a type specimen book. 
                        </div>
                      </div>
                    </div>
                    <div class="accordion-item">
                      <h2 class="accordion-header" id="headingThree">
                        <button
                          class="accordion-button collapsed"
                          type="button"
                          data-bs-toggle="collapse"
                          data-bs-target="#collapseThree"
                          aria-expanded="false"
                          aria-controls="collapseThree"
                        >
                          Medication Under Shared Care
                        </button>
                      </h2>
                      <div
                        id="collapseThree"
                        class="accordion-collapse collapse"
                        aria-labelledby="headingThree"
                        data-bs-parent="#accordionExample"
                      >
                        <div class="accordion-body">
                          Lorem Ipsum is simply dummy text of the printing and
                          typesetting industry. Lorem Ipsum has been the
                          industry's standard dummy text ever since the 1500s,
                          when an unknown printer took a galley of type and
                          scrambled it to make a type specimen book. 
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div class="col-lg-7">
                <div class="textareaocd ps-5">
                  <h5>Assessment Process</h5>
                  <h2>Our Assessment Process for Adults OCD</h2>
                  <p>
                    Lorem Ipsum is simply dummy text of the printing and
                    typesetting industry. Lorem Ipsum has been the industry's
                    standard dummy text ever since the 1500s, when an unknown
                    printer took a galley of type and scrambled it to make a
                    type specimen book.
                  </p>
                  <p>
                    Lorem Ipsum is simply dummy text of the printing and
                    typesetting industry. Lorem Ipsum has been the industry's
                    standard dummy text ever since the 1500s, when an unknown
                    printer took a galley of type and scrambled it to make a
                    type specimen book.
                  </p>
                  <button class="btn btnbook mt-2" href="#">Contact Now</button>
                </div>
              </div>
            </div>
          </div>
        </section>
        <!-- here is Assessment Process 4th section section end -->
        <!-- here is Our Services Process 5th section section start -->
        <section class="services">
          <div class="container">
            <div class="row">
              <h5 class="text-center">Our Services</h5>
              <h2 class="text-center pb-3 pt-2">Lorem Ipsum Dolor Text</h2>
              <p class="text-center">
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the <br />industry's standard
                dummy text ever since the 1500s,
              </p>
            </div>
            <div class="row pt-3">
              <div class="col-xl-4 col-lg-6 col-md-6">
                <div class="ocdservicebox">
                  <div class="servicesbox">
                    <img src="/images/ocdadult1.png" alt="" />
                    <h2 class="text-center text-white">Individual Therapy</h2>
                    <div class="hidebox">
                      <h4 class="text-center text-white">Individual Therapy</h4>
                      <p class="text-center text-white">
                        Lorem Ipsum is simply dummy text of the printing and
                        type setting industry. Lorem Ipsum has been the
                        industry's standard dummy text ever since the 1500s,
                        when an unknown printer took a galley of type and
                        scrambled it to make a type specimen book.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div class="col-xl-4 col-lg-6 col-md-6">
                <div class="ocdservicebox">
                  <div class="servicesbox">
                    <img src="/images/ocdadult2.png" alt="" />
                    <h2 class="text-center text-white">
                      Cognitive Behavioral Therapy
                    </h2>
                    <div class="hidebox">
                      <h4 class="text-center text-white">
                        Cognitive Behavioral Therapy
                      </h4>
                      <p class="text-center text-white">
                        Lorem Ipsum is simply dummy text of the printing and
                        type setting industry. Lorem Ipsum has been the
                        industry's standard dummy text ever since the 1500s,
                        when an unknown printer took a galley of type and
                        scrambled it to make a type specimen book.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div class="col-xl-4 col-lg-6 col-md-6">
                <div class="ocdservicebox">
                  <div class="servicesbox">
                    <img src="/images/ocdadult3.png" alt="" />
                    <h2 class="text-center text-white">Family Therapy</h2>
                    <div class="hidebox">
                      <h4 class="text-center text-white">Family Therapy</h4>
                      <p class="text-center text-white">
                        Lorem Ipsum is simply dummy text of the printing and
                        type setting industry. Lorem Ipsum has been the
                        industry's standard dummy text ever since the 1500s,
                        when an unknown printer took a galley of type and
                        scrambled it to make a type specimen book.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div class="col-12 d-flex justify-content-center mt-5">
                <button class="btn btnbook" href="#">
                  Book An Appointment
                </button>
              </div>
            </div>
          </div>
        </section>
        <!-- here is Assessment Process 5th section section end -->
        <!-- here is Why Choose Us 6th section section start -->
        <section class="choose">
          <div class="container">
            <div class="row">
              <div class="col-xl-6 col-lg-6">
                <h5>Why Choose Us</h5>
                <h2>Why Choose Cognition Care</h2>
                <p>
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry. Lorem Ipsum <br />
                  has been the industry's standard dummy text ever since the
                  1500s,
                </p>
                <ul>
                  <li class="d-flex">
                    <div class="blue"></div>
                    Expert Team
                  </li>
                  <li class="d-flex">
                    <div class="blue"></div>
                    Personalized Care
                  </li>
                  <li class="d-flex">
                    <div class="blue"></div>
                    Parent Involvement
                  </li>
                </ul>
                <button class="btn btnbook mt-1" href="#">
                  Fix Appointment
                </button>
              </div>
              <div class="col-xl-6 col-lg-6">
                <img src="/images/ocdchoose.png" alt="" />
              </div>
            </div>
          </div>
        </section>
        <!-- here is Why Choose Us 6th section section end -->

        <!-- here is Why CTA Us 7th section section start -->
        <section class="ctabg">
          <div class="container">
            <div class="row">
              <div class="col-md-9 col-sm-12 col-lg-9 col-xl-9">
                <h2 class="text-white">Get Started Today</h2>
                <p class="text-white">
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry. Lorem <br />Ipsum has been the
                  industry's standard dummy text ever since the 1500s,
                </p>
              </div>
              <div class="col-md-3 col-sm-12 col-lg-3 col-xl-3 bookbtncta">
                <button class="btnwhite">Book Appointments</button>
              </div>
            </div>
          </div>
        </section>
      </section>
    </div>
  </div>
</template>

<script>
import { Swiper, SwiperSlide } from "swiper/vue";
import { Autoplay, Pagination } from "swiper/modules";

export default {
  name: "Ocd",

  components: {
    Swiper,
    SwiperSlide,
  },

  data() {
    return {
      items: [
        {
          image: "images/ocdbg.png",
          title: "OCD",
          description:
            "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry`s standard dummy text ever since the 1500s.",
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
/* .bannnerbg {
  background-image: url(images/ocdbg.png) !important;
  background-position: top;
} */
.active {
  background-color: #007bff;
  color: white;
}
.btnsec {
  width: 22.2%;
  margin: 0px auto 50px;
}

.childadultbg {
  padding: 100px 0;
}

.leftimg img {
  width: 90%;
  border-radius: 80px;
  max-height: 380px;
  box-shadow: 0px 2px 15px 0px #85858540;
  border: 8px solid #ffffff;
}
.rightimg img {
  border-radius: 80px;
  max-height: 330px;
  margin-left: -75px;
  box-shadow: 0px 2px 15px 0px #85858540;
  border: 8px solid #ffffff;
}
.rightimg {
  height: 380px;
  display: flex;
  align-items: center;
}

/* here is the css of OCD Symptoms */
.symptoms {
  padding: 100px 0px;
}
.symptomsbox {
  margin: 20px 15px;
  padding: 20px;
  border-radius: 5px;
  border: 1.5px solid #d9d9d9;
}
.symptomsbox h4 {
  color: #464646;
  font-size: 22px;
  font-weight: 600;
  line-height: 27.73px;
  text-align: center;
}
.symptomsbox p {
  font-size: 15px;
  font-weight: 400;
  line-height: 26px;
  text-align: center;
  color: #a3a3a3;
}

/* here is the 4th section css */
.assessment {
  padding: 100px 0;
  max-height: 440px !important;
  min-height: 440px !important;
}
.accordion-body {
  padding: 15px 10px !important;
}
.assessment .accordion-item {
  padding: 0px 0px !important;
  margin-bottom: 20px !important;
  border: none !important;
}
.assessment .accordion-button {
  background: #f6f6f6 !important;
}
.assessment .accordion-button:not(.collapsed) {
  color: #464646;
}
.assessment h5 {
  padding-top: 10px;
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
.servicesbox {
  height: 440px;
  position: relative;
}
.servicesbox:hover .hidebox {
  opacity: 1;
}
.hidebox {
  opacity: 0;
  display: flex;
  z-index: 9999;
  padding: 50px;
  transition: 1s;
  top: 0;
  color: #ffffff;
  width: 100%;
  height: 438px;
  position: absolute;
  background: linear-gradient(
    180.05deg,
    rgba(4, 73, 140, 0.6) -25.36%,
    #04498c 99.96%
  );
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
.servicesbox img {
  width: 100%;
}
.servicesbox h2 {
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
.servicesbox:hover h2 {
  display: none !important;
}

/* here is the css of choose */
.choose {
  padding: 100px 0;
}
.choose li {
  font-weight: 600;
  padding-top: 6px;
  color: #777777;
}
.blue {
  width: 8px;
  border-radius: 50%;
  height: 8px;
  margin-top: 9px;
  margin-right: 10px;
  background: #0297fe;
}
/* '""""""""""""""""""""" media query for all divice"""""""""""""""""""""""""' */

@media (max-width: 767px) {
  .choose img {
    width: 100%;
    margin-top: 30px;
  }
  .btnsec .btnbook {
    display: inline-block;
  }
  .btnsec {
    width: 70%;
    margin: 0px auto 30px;
  }
  .leftimg img {
    width: 100%;
    border-radius: 10px;
    border: 3px solid #ffffff;
  }
  .rightimg img {
    margin: 0px 0px !important;
    border-radius: 10px;
    max-height: 380px;
    width: 100%;
    border: 2px solid #ffffff;
  }
  .rightimg {
    margin: 40px 0px !important;
  }

  .childadultbg,
  .assessment {
    padding: 30px 0;
  }
  .choose,
  .services {
    padding: 0px 0 30px;
  }
  .choose ul {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-around;
    align-items: center;
  }
  .textareaocd {
    padding: 0px !important;
  }
  .assessment {
    padding: 10px 0;
    max-height: 770px !important;
    min-height: 770px !important;
  }
  .servicesbox {
    height: 415px;
  }
}
@media (min-width: 768px) and (max-width: 1023px) {
  .btnsec {
    width: 40%;
  }
  .ocdchildadult .btnbook {
    display: block;
    margin: auto;
  }
  .choose .btnbook {
    display: block;
    margin: auto;
  }
  .choose img {
    padding-top: 50px;
    width: 100%;
  }
  .assessment {
    max-height: 640px !important;
    min-height: 640px !important;
  }
  .textareaocd {
    padding: 0px !important;
  }
  .servicesbox {
    height: 740px;
  }
  .choose ul {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-around;
    align-items: center;
  }
  .services,
  .childadultbg {
    padding: 30px 0;
  }

  .choose {
    padding: 20px 0;
  }
}

@media (min-width: 1024px) and (max-width: 1279px) {
  .btnsec {
    width: 30%;
  }
  .choose img {
    width: 100%;
    height: 320px;
  }
  .leftimg img {
    width: 100%;
    height: 380px;
  }
  .rightimg img {
    height: 315px;
    width: 215px;
    margin-left: -45px;
  }
  .servicesbox {
    height: 500px;
  }
  .hidebox {
    height: 465px;
  }
}

@media (min-width: 1280px) and (max-width: 1365px) {
  .rightimg img {
    height: 310px;
    width: 240px !important;
  }
  .hidebox {
    padding: 50px 30px;
    height: 365px;
  }
  .choose img {
    width: 100%;
    height: 320px;
  }
  .ctabg h2 {
    text-align: start !important;
  }
}
</style>
