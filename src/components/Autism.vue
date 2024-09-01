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

      <!-- here is childadult 2nd section section start -->
      <section class="childadult">
        <div class="container">
          <div class="row autismchildadult">
            <div class="col-lg-6">
              <div class="textchildarea">
                <h5>Private Child ASD Assessment</h5>
                <h2>Comprehensive Private ASD Assessment</h2>
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
                  Speak With Our Consultant
                </button>
              </div>
            </div>
            <div class="col-lg-6 justify-content-end">
              <img src="/images/atisum1.png" alt="" />
            </div>
          </div>
        </div>
      </section>
      <!-- here is adultadult 2nd section section end -->

      <!-- here is childasd 3rd section section start -->
      <section class="childasd">
        <div class="container">
          <div class="row">
            <div class="col-lg-6">
              <img src="/images/atisum2.png" alt="" />
            </div>
            <div class="col-lg-6">
              <div class="textchildarea">
                <h5>Lorem Ipsum</h5>
                <h2>Why Consider A Child ASD Assessment?</h2>
                <h6>
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry.
                </h6>
                <p>
                  Lorem Ipsum is simply dummy text of the printing and type
                  setting industry. Lorem Ipsum has been the industry's standard
                  dummy text ever since the 1500s,
                </p>
                <p>
                  Lorem Ipsum is simply dummy text of the printing and type
                  setting industry. Lorem Ipsum has been the industry's standard
                  dummy text ever since the 1500s,
                </p>
                <p>
                  Lorem Ipsum is simply dummy text of the printing and type
                  setting industry. Lorem Ipsum has been the industry's standard
                  dummy text ever since the 1500s,
                </p>
                <p>
                  Lorem Ipsum is simply dummy text of the printing and type
                  setting industry. Lorem Ipsum has been the industry's standard
                  dummy text ever since the 1500s,
                </p>

                <button class="btn btnbook pt-2" href="#">
                  Book Assessment
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      <!-- here is childasd 3rd section section end -->

      <!-- here is process 4th section section start -->
      <section class="process">
        <h5 class="text-center">Process</h5>
        <h2 class="text-center">Our Child ASD Assessment Process</h2>
        <p class="text-center mb-3">
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's <br />standard dummy
          text ever since the 1500s.
        </p>
        <div class="processflex">
          <div class="processinnerbox">
            <h2>Lorem Ipsum Dolor Text</h2>
            <p>
              Lorem Ipsum is simply dummy text of the printing and type setting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled it to make a type specimen book.
            </p>
          </div>
          <div class="processinnerbox">
            <h2>Lorem Ipsum Dolor Text</h2>
            <p>
              Lorem Ipsum is simply dummy text of the printing and type setting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled it to make a type specimen book.
            </p>
          </div>
          <div class="processinnerbox">
            <h2>Lorem Ipsum Dolor Text</h2>
            <p>
              Lorem Ipsum is simply dummy text of the printing and type setting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled it to make a type specimen book.
            </p>
          </div>
          <div class="processinnerbox">
            <h2>Lorem Ipsum Dolor Text</h2>
            <p>
              Lorem Ipsum is simply dummy text of the printing and type setting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled it to make a type specimen book.
            </p>
          </div>
          <div class="processinnerbox2 processinnerbox">
            <h2>Lorem Ipsum Dolor Text</h2>
            <p>
              Lorem Ipsum is simply dummy text of the printing and type setting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled it to make a type specimen book.
            </p>
          </div>
        </div>
      </section>
      <!-- here is process 4th section section end -->
      <!-- here is Understanding 5th section section start -->
      <section class="understanding">
        <div class="container">
          <div class="row">
            <div class="col-lg-6">
              <div class="textchildarea ps-4">
                <h5>Child ASD Screening</h5>
                <h2 class="mb-3">Tailored Insights for Early Understanding</h2>
                <h6>
                  Lorem Ipsum is simply dummy text of the printing and type
                  setting industry. Lorem Ipsum has been the industry's standard
                  dummy text ever since the 1500s, when an unknown printer took
                  a galley of type and scrambled it to make a type specimen
                  book.
                </h6>
                <h6>
                  Lorem Ipsum is simply dummy text of the printing and type
                  setting industry. Lorem Ipsum has been the industry's standard
                  dummy text ever since the 1500s, when an unknown printer took
                  a galley of type and scrambled it to make a type specimen
                  book.
                </h6>
                <button class="btn btnbook mt-3" href="#">
                  Book Assessment
                </button>
              </div>
            </div>
            <div class="col-lg-6">
              <div class="textchildarea ps-4">
                <p>
                  Lorem Ipsum is simply dummy text of the printing and type
                  setting industry. Lorem Ipsum has been the industry's standard
                  dummy text ever since the 1500s,
                </p>
                <p>
                  Lorem Ipsum is simply dummy text of the printing and type
                  setting industry. Lorem Ipsum has been the industry's standard
                  dummy text ever since the 1500s,
                </p>
                <p>
                  Lorem Ipsum is simply dummy text of the printing and type
                  setting industry. Lorem Ipsum has been the industry's standard
                  dummy text ever since the 1500s,
                </p>
                <p>
                  Lorem Ipsum is simply dummy text of the printing and type
                  setting industry. Lorem Ipsum has been the industry's standard
                  dummy text ever since the 1500s,
                </p>
                <p>
                  Lorem Ipsum is simply dummy text of the printing and type
                  setting industry. Lorem Ipsum has been the industry's standard
                  dummy text ever since the 1500s,
                </p>
                <p>
                  Lorem Ipsum is simply dummy text of the printing and type
                  setting industry. Lorem Ipsum has been the industry's standard
                  dummy text ever since the 1500s,
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <!-- here is Understanding 5rd section section end -->
      <!-- here is autismbook 6th section section start -->
      <section class="autismbook">
        <div class="container">
          <div class="row">
            <div class="col-lg-6">
              <img src="/images/autismbook.png" alt="" />
            </div>
            <div class="col-lg-6">
              <div class="textchildarea">
                <h5>Book</h5>
                <h2 class="mb-3">Book Your Expert ASD Assessment Online</h2>
                <p>
                  Lorem Ipsum is simply dummy text of the printing and type
                  setting industry. Lorem Ipsum has been the industry's standard
                  dummy text ever since the 1500s, when an unknown printer took
                  a galley of type and scrambled it to make a type specimen
                  book.
                </p>
                <p>
                  Lorem Ipsum is simply dummy text of the printing and type
                  setting industry. Lorem Ipsum has been the industry's standard
                  dummy text ever since the 1500s, when an unknown printer took
                  a galley of type and scrambled it to make a type specimen
                  book.
                </p>
                <button class="btn btnbook mt-3" href="#">
                  Book Your Free 15 Minute Consultation
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
      <!-- here is autismbook 6th section section end -->

      <!-- here is Why CTA Us 5th section section start -->
      <section class="ctabg">
        <div class="container">
          <div class="row">
            <div class="col-md-9 col-sm-12 col-lg-9 col-xl-9">
              <h2 class="text-white">Get Started Today</h2>
              <p class="text-white">
                Lorem Ipsum is simply dummy text of the printing and typesetting
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
      <!-- here is Why CTA Us 5th section section end -->
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

      <!-- here is childadult 2nd section section start -->
      <section class="childadult">
        <div class="container">
          <div class="row autismchildadult">
            <div class="col-lg-6">
              <div class="textchildarea">
                <h5>Private Adult ASD Assessment</h5>
                <h2>Comprehensive Private ASD Assessment</h2>
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
                  Speak With Our Consultant
                </button>
              </div>
            </div>
            <div class="col-lg-6 justify-content-end">
              <img src="/images/autismadult.png" alt="" />
            </div>
          </div>
        </div>
      </section>
      <!-- here is adultadult 2nd section section end -->

      <!-- here is childasd 3rd section section start -->
      <section class="childasd">
        <div class="container">
          <div class="row">
            <div class="col-lg-6">
              <img src="/images/autismadult2.png" alt="" />
            </div>
            <div class="col-lg-6">
              <div class="textchildarea">
                <h5>Lorem Ipsum</h5>
                <h2>Why Consider A Adult ASD Assessment?</h2>
                <h6>
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry.
                </h6>
                <p>
                  Lorem Ipsum is simply dummy text of the printing and type
                  setting industry. Lorem Ipsum has been the industry's standard
                  dummy text ever since the 1500s,
                </p>
                <p>
                  Lorem Ipsum is simply dummy text of the printing and type
                  setting industry. Lorem Ipsum has been the industry's standard
                  dummy text ever since the 1500s,
                </p>
                <p>
                  Lorem Ipsum is simply dummy text of the printing and type
                  setting industry. Lorem Ipsum has been the industry's standard
                  dummy text ever since the 1500s,
                </p>
                <p>
                  Lorem Ipsum is simply dummy text of the printing and type
                  setting industry. Lorem Ipsum has been the industry's standard
                  dummy text ever since the 1500s,
                </p>

                <button class="btn btnbook pt-2" href="#">
                  Book Assessment
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      <!-- here is childasd 3rd section section end -->

      <!-- here is process 4th section section start -->
      <section class="process">
        <h5 class="text-center">Process</h5>
        <h2 class="text-center">Our Adult ASD Assessment Process</h2>
        <p class="text-center mb-3">
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's <br />standard dummy
          text ever since the 1500s.
        </p>
        <div class="processflex">
          <div class="processinnerbox">
            <h2>Lorem Ipsum Dolor Text</h2>
            <p>
              Lorem Ipsum is simply dummy text of the printing and type setting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled it to make a type specimen book.
            </p>
          </div>
          <div class="processinnerbox">
            <h2>Lorem Ipsum Dolor Text</h2>
            <p>
              Lorem Ipsum is simply dummy text of the printing and type setting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled it to make a type specimen book.
            </p>
          </div>
          <div class="processinnerbox">
            <h2>Lorem Ipsum Dolor Text</h2>
            <p>
              Lorem Ipsum is simply dummy text of the printing and type setting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled it to make a type specimen book.
            </p>
          </div>
          <div class="processinnerbox">
            <h2>Lorem Ipsum Dolor Text</h2>
            <p>
              Lorem Ipsum is simply dummy text of the printing and type setting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled it to make a type specimen book.
            </p>
          </div>
          <div class="processinnerbox2 processinnerbox">
            <h2>Lorem Ipsum Dolor Text</h2>
            <p>
              Lorem Ipsum is simply dummy text of the printing and type setting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled it to make a type specimen book.
            </p>
          </div>
        </div>
      </section>
      <!-- here is process 4th section section end -->
      <!-- here is Understanding 5th section section start -->
      <section class="understanding">
        <div class="container">
          <div class="row">
            <div class="col-lg-6">
              <div class="textchildarea ps-4">
                <h5>Adult ASD Screening</h5>
                <h2 class="mb-3">Tailored Insights for Early Understanding</h2>
                <h6>
                  Lorem Ipsum is simply dummy text of the printing and type
                  setting industry. Lorem Ipsum has been the industry's standard
                  dummy text ever since the 1500s, when an unknown printer took
                  a galley of type and scrambled it to make a type specimen
                  book.
                </h6>
                <h6>
                  Lorem Ipsum is simply dummy text of the printing and type
                  setting industry. Lorem Ipsum has been the industry's standard
                  dummy text ever since the 1500s, when an unknown printer took
                  a galley of type and scrambled it to make a type specimen
                  book.
                </h6>
                <button class="btn btnbook mt-3" href="#">
                  Book Assessment
                </button>
              </div>
            </div>
            <div class="col-lg-6">
              <div class="textchildarea ps-4">
                <p>
                  Lorem Ipsum is simply dummy text of the printing and type
                  setting industry. Lorem Ipsum has been the industry's standard
                  dummy text ever since the 1500s,
                </p>
                <p>
                  Lorem Ipsum is simply dummy text of the printing and type
                  setting industry. Lorem Ipsum has been the industry's standard
                  dummy text ever since the 1500s,
                </p>
                <p>
                  Lorem Ipsum is simply dummy text of the printing and type
                  setting industry. Lorem Ipsum has been the industry's standard
                  dummy text ever since the 1500s,
                </p>
                <p>
                  Lorem Ipsum is simply dummy text of the printing and type
                  setting industry. Lorem Ipsum has been the industry's standard
                  dummy text ever since the 1500s,
                </p>
                <p>
                  Lorem Ipsum is simply dummy text of the printing and type
                  setting industry. Lorem Ipsum has been the industry's standard
                  dummy text ever since the 1500s,
                </p>
                <p>
                  Lorem Ipsum is simply dummy text of the printing and type
                  setting industry. Lorem Ipsum has been the industry's standard
                  dummy text ever since the 1500s,
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <!-- here is Understanding 5rd section section end -->
      <!-- here is autismbook 6th section section start -->
      <section class="autismbook">
        <div class="container">
          <div class="row">
            <div class="col-lg-6">
              <img src="/images/autismadult3.png" alt="" />
            </div>
            <div class="col-lg-6">
              <div class="textchildarea">
                <h5>Book</h5>
                <h2 class="mb-3">Book Your Expert ASD Assessment Online</h2>
                <p>
                  Lorem Ipsum is simply dummy text of the printing and type
                  setting industry. Lorem Ipsum has been the industry's standard
                  dummy text ever since the 1500s, when an unknown printer took
                  a galley of type and scrambled it to make a type specimen
                  book.
                </p>
                <p>
                  Lorem Ipsum is simply dummy text of the printing and type
                  setting industry. Lorem Ipsum has been the industry's standard
                  dummy text ever since the 1500s, when an unknown printer took
                  a galley of type and scrambled it to make a type specimen
                  book.
                </p>
                <button class="btn btnbook mt-3" href="#">
                  Book Your Free 15 Minute Consultation
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
      <!-- here is autismbook 6th section section end -->

      <!-- here is Why CTA Us 5th section section start -->
      <section class="ctabg">
        <div class="container">
          <div class="row">
            <div class="col-md-9 col-sm-12 col-lg-9 col-xl-9">
              <h2 class="text-white">Get Started Today</h2>
              <p class="text-white">
                Lorem Ipsum is simply dummy text of the printing and typesetting
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
      <!-- here is Why CTA Us 5th section section end -->
    </div>
  </div>
</template>
<script>
export default {
  name: "Diagnosis",

  data() {
    return {
      currentTab: "child",

      items: [
        {
          image: "images/atisumbg.png",
          title: "Autism",
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
</script>

<style scoped>
h5 {
  padding-top: 0px !important;
}
h2 {
  font-size: 29px !important;
}

/* here is css child adult section */
.btnsec {
  width: 22.2%;
  margin: 0px auto 50px;
}
.childadult {
  padding: 50px 0px;
}
.autismchildadult img {
  width: 95% !important;
  margin-left: 10%;
}

/* here is the css childasd */
.childasd {
  padding: 50px 0;
  background: #f8f9fa;
}
.childasd h5 {
  padding-top: 0px !important;
}
.childasd img {
  width: 98%;
}
.childasd p {
  border-bottom: 1px solid #a3a3a3;
  font-size: 13px;
  font-weight: 400;
  line-height: 19px;
  padding-bottom: 10px;
  margin-bottom: 13px;
}

/* here is the understanding section css */
.understanding {
  padding: 50px 0;
  background: #f8f9fa;
}
.textchildarea h6 {
  font-size: 15px;
  font-weight: 400;
  line-height: 22.5px;
  text-align: left;
  color: #777777;
}
.understanding p {
  border-bottom: 1px solid #a3a3a3;
  font-size: 13px;
  font-weight: 400;
  line-height: 19px;
  padding-bottom: 10px;
  margin-bottom: 13px;
}

/* here is the css of autismbook css */

.autismbook {
  background: #ffffff;
  padding: 50px 0;
}
.autismbook img {
  width: 98%;
}

/* here is the css of process */

.process {
  background: #ffffff;
  padding: 50px 0;
  margin: auto;
  width: 95%;
}
.processflex {
  padding-top: 25px;
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.processinnerbox {
  position: relative;
  z-index: 98;
  box-shadow: 0px 2px 10px 0px #8f8f8f40;
  padding: 30px 15px 20px;
  margin: 5px 60px 5px 0px;
}
.processinnerbox::after {
  content: "";
  background-image: url(/images/uparrow.png);
  position: absolute;
  z-index: 121;
  width: 60px;
  background-size: contain;
  background-position: center;
  background-repeat: no-repeat;
  height: 222px;
  top: 50px;
  right: -60px;
}
.processinnerbox:nth-child(2)::after,
.processinnerbox:nth-child(4)::after {
  content: "";
  background-image: url(/images/downarrow.png);
  position: absolute;
  z-index: 121;
  width: 60px;
  background-size: contain;
  background-position: center;
  background-repeat: no-repeat;
  height: 222px;
  top: 55px;
  right: -60px;
}
.processinnerbox h2 {
  font-size: 25px;
  font-weight: 600;
  line-height: 30px;
  text-align: center;
  padding-bottom: 15px;
  color: #0297fe;
  border-bottom: 2px solid #0297fe;
}
.processinnerbox p {
  font-size: 14px;
  padding: 10px 0 0px;
  font-weight: 400;
  line-height: 18.5px;
  text-align: center;
  margin-bottom: 5px;
  color: #777777;
}
.processinnerbox:last-child {
  margin: 5px 0px 5px !important;
}
.processinnerbox:last-child:after {
  display: none;
}
/* here is the css of cta  */

/* """"""""""""""""""""""""""""here is the media query css """""""""""""""""""""""""""""""" */
@media (max-width: 767px) {
  .processflex {
    flex-direction: column;
  }
  .processinnerbox,
  .processinnerbox:last-child {
    margin: 5px 20px 15px !important;
  }
  .processinnerbox::after {
    display: none;
  }
  .textchildarea {
    padding: 0px !important;
  }
  .autismchildadult img {
    width: 100% !important;
    margin-left: 0%;
    margin-top: 40px;
  }
  .childasd .textchildarea,
  .understanding .textchildarea {
    margin-top: 40px;
    padding: 25px 0 0;
  }
  .textchildarea h6 {
    text-align: center;
  }
  .understanding {
    padding: 0px 0 50px;
    background: #f8f9fa;
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
  .btnsec {
    width: 40%;
    margin: 0px auto 10px;
  }
  .autismchildadult .textchildarea .btnbook {
    margin: 3px auto 35px;
    display: block;
  }
  .autismchildadult img {
    width: 100% !important;
    margin-left: 0%;
    margin-bottom: 35px;
  }
  .textchildarea {
    padding: 30px 0 0 !important;
  }
  .btnbook {
    display: block;
    margin: auto;
  }
  .processinnerbox,
  .processinnerbox:last-child {
    width: 47%;
    margin: 10px 10px 15px !important;
  }
  .processflex {
    flex-wrap: wrap;
  }
  .processinnerbox::after {
    display: none !important;
  }
  .textchildarea h6 {
    text-align: center;
  }
  .understanding {
    padding: 10px 0 50px;
    background: #f8f9fa;
  }
}
@media (min-width: 1024px) and (max-width: 1279px) {
  .btnsec {
    width: 30%;
    margin: 0px auto 30px;
  }
  .textchildarea h5 {
    padding-top: 0px !important;
  }
  .autismchildadult img {
    height: 325px;
  }
  .childadult {
    padding: 40px 0;
  }
  .childasd img {
    object-fit: cover;
    height: 510px;
  }
  .processinnerbox {
    width: 30%;
    margin: 15px;
  }
  .processflex {
    flex-wrap: wrap;
    justify-content: center;
  }
  .processinnerbox::after {
    display: none;
  }
  .understanding p {
    font-size: 13px;
    padding-bottom: 4px;
    margin-bottom: 6px;
  }
  .textchildarea h2 {
    font-size: 20px;
  }
  .autismbook img {
    height: 340px;
  }
}
@media (min-width: 1280px) and (max-width: 1365px) {
  .btnsec {
    width: 25%;
    margin: 0px auto 50px;
  }
  .textchildarea h2 {
    font-size: 26px;
  }
  .childadult {
    padding: 50px 0;
  }
  .autismchildadult img {
    height: 340px;
  }
  .childasd img {
    object-fit: cover;
    height: 390px;
  }
  .autismbook img {
    height: 355px;
  }
}

@media (min-width: 1366px) and (max-width: 1439px) {
  .textchildarea h2 {
    font-size: 26px;
  }
  .btnsec {
    width: 25%;
  }
  .childadult {
    padding: 50px 0;
  }
  .autismchildadult img {
    height: 330px;
  }
  .childasd img {
    height: 385px;
  }
}
</style>
