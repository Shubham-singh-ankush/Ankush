<template>
  <section
    class="bannnerbg"
    :style="{ background: 'url(' + items[0].image + ')' }"
  >
    <div class="container">
      <div class="row" v-for="(item, index) in items" :key="index">
        <div class="col-md-12 col-sm-12 col-lg-7 col-xl-7 bannertextarea">
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

  <!-- here is Commitment 2nd section section start -->
  <section class="commitmentbg">
    <div class="container">
      <div class="row">
        <div class="col-md-12 col-sm-12 col-lg-6 col-xl-6">
          <div class="commitment pe-3">
            <img src="/images/accrediationtop.png" alt="" />
          </div>
        </div>
        <div class="col-md-12 col-sm-12 col-lg-6 col-xl-6">
          <div class="textarea ps-4">
            <h5 class="pb-1">Our Commitment to Excellence</h5>
            <h2 class="pb-1">Lorem Ipsum Dolor Text</h2>
            <p class="pb-2">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s,
            </p>
            <p class="pb-2">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s,
            </p>
            <button class="btn btnbook pt-2 pe-4 ps-4" href="#">
              Take a Free Test
            </button>
          </div>
        </div>
      </div>
    </div>
  </section>
  <!-- here is Commitment 2nd section section end -->
  <!-- here is Certifications 3rd section section end -->
  <section class="certifications">
    <div class="container">
      <div class="row">
        <h5 class="text-center">Certifications</h5>
        <h2 class="text-center pb-3">Lorem Ipsum Dolor Text</h2>
        <p class="text-center">
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the<br />
          industry's standard dummy text ever since the 1500s,
        </p>
      </div>
      <div class="row pt-5">
        <div class="col-xl-4 col-lg-6 col-md-6">
          <div class="certifify">
            <div class="certtextbox">
              <h4>Licensed Clinical Psychologists and Therapists</h4>
              <div class="certihide">
                <h3>Licensed Clinical Psychologists and Therapists</h3>
                <p>
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry. Lorem Ipsum has been the industry's
                  standard dummy text ever since the 1500s, when an unknown
                  printer took a galley of type and scrambled it to make a type
                  specimen book.
                </p>
              </div>
            </div>
          </div>
        </div>
        <div class="col-xl-4 col-lg-6 col-md-6">
          <div class="certifify">
            <div class="certtextbox">
              <h4>Board-Certified Pediatricians</h4>
              <div class="certihide">
                <h3>Board-Certified Pediatricians</h3>
                <p>
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry. Lorem Ipsum has been the industry's
                  standard dummy text ever since the 1500s, when an unknown
                  printer took a galley of type and scrambled it to make a type
                  specimen book.
                </p>
              </div>
            </div>
          </div>
        </div>
        <div class="col-xl-4 col-lg-6 col-md-6">
          <div class="certifify">
            <div class="certtextbox">
              <h4>Certified Behavior Analysts</h4>
              <div class="certihide">
                <h3>Certified Behavior Analysts</h3>
                <p>
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry. Lorem Ipsum has been the industry's
                  standard dummy text ever since the 1500s, when an unknown
                  printer took a galley of type and scrambled it to make a type
                  specimen book.
                </p>
              </div>
            </div>
          </div>
        </div>
        <div class="col-12 mt-5">
          <button class="btn btnbook pt-2" href="#">Contact Us Today</button>
        </div>
      </div>
    </div>
  </section>
  <!-- here is Certifications 3rd section section end -->
  <!-- here is Accreditations 4th section section end -->
  <section class="accreditations">
    <div class="container">
      <div class="row">
        <h5 class="text-center">Accreditations</h5>
        <h2 class="text-center pb-3">Lorem Ipsum Dolor Text</h2>
        <p class="text-center">
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the<br />
          industry's standard dummy text ever since the 1500s,
        </p>
      </div>
      <div class="row pt-5">
        <div class="col-xl-4 col-lg-6 col-md-6">
          <div class="certifify">
            <div class="certtextbox accredibox">
              <h4>American Psychological Association (APA)</h4>
              <div class="certihide">
                <h3>American Psychological Association (APA)</h3>
                <p>
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry. Lorem Ipsum has been the industry's
                  standard dummy text ever since the 1500s, when an unknown
                  printer took a galley of type and scrambled it to make a type
                  specimen book.
                </p>
              </div>
            </div>
          </div>
        </div>
        <div class="col-xl-4 col-lg-6 col-md-6">
          <div class="certifify">
            <div class="certtextbox accredibox">
              <h4>
                Joint Commission on Accreditation of Healthcare Organizations
                (JCAHO)
              </h4>
              <div class="certihide">
                <h3>
                  Joint Commission on Accreditation of Healthcare Organizations
                  (JCAHO)
                </h3>
                <p>
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry. Lorem Ipsum has been the industry's
                  standard dummy text ever since the 1500s, when an unknown
                  printer took a galley of type and scrambled it to make a type
                  specimen book.
                </p>
              </div>
            </div>
          </div>
        </div>
        <div class="col-xl-4 col-lg-6 col-md-6">
          <div class="certifify">
            <div class="certtextbox accredibox">
              <h4>Council on Accreditation (COA)</h4>
              <div class="certihide">
                <h3>Council on Accreditation (COA)</h3>
                <p>
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry. Lorem Ipsum has been the industry's
                  standard dummy text ever since the 1500s, when an unknown
                  printer took a galley of type and scrambled it to make a type
                  specimen book.
                </p>
              </div>
            </div>
          </div>
        </div>

        <div class="col-12 mt-5">
          <button class="btn btnbook pt-2" href="#">Fix An Appointment</button>
        </div>
      </div>
    </div>
  </section>
  <!-- here is Accreditations 4th section section end -->

  <!-- here is Certifications 3rd section section end -->
  <section class="certifications">
    <div class="container">
      <div class="row">
        <h5 class="pb-3">Specialized Certifications</h5>
        <h2 class="pb-5">Lorem Ipsum Dolor Text</h2>
      </div>
      <div class="row">
        <div class="accordion" id="accordionExample">
          <div class="accordion-item">
            <h2 class="accordion-header" id="headingOne">
              <button
                class="accordion-button"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#ADHD"
                aria-expanded="true"
                aria-controls="collapseOne"
              >
                ADHD
              </button>
            </h2>
            <div
              id="ADHD"
              class="accordion-collapse collapse show"
              aria-labelledby="headingOne"
              data-bs-parent="#accordionExample"
            >
              <div class="accordion-body">
                <span class="colorch"
                  >Certified ADHD Professionals (ADHD-CCSP):
                </span>
                Our specialists in ADHD hold certifications from the Institute
                of Certified ADHD Professionals, demonstrating their expertise
                in diagnosing and treating ADHD.
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
                Autism
              </button>
            </h2>
            <div
              id="collapseTwo"
              class="accordion-collapse collapse"
              aria-labelledby="headingTwo"
              data-bs-parent="#accordionExample"
            >
              <div class="accordion-body">
                <span class="colorch"
                  >Certified ADHD Professionals (ADHD-CCSP):
                </span>
                Our specialists in ADHD hold certifications from the Institute
                of Certified ADHD Professionals, demonstrating their expertise
                in diagnosing and treating ADHD.
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
                OCD
              </button>
            </h2>
            <div
              id="collapseThree"
              class="accordion-collapse collapse"
              aria-labelledby="headingThree"
              data-bs-parent="#accordionExample"
            >
              <div class="accordion-body">
                <span class="colorch"
                  >Certified ADHD Professionals (ADHD-CCSP):
                </span>
                Our specialists in ADHD hold certifications from the Institute
                of Certified ADHD Professionals, demonstrating their expertise
                in diagnosing and treating ADHD.
              </div>
            </div>
          </div>
          <div class="accordion-item">
            <h2 class="accordion-header" id="headingOne">
              <button
                class="accordion-button"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#Tics"
                aria-expanded="true"
                aria-controls="collapseOne"
              >
                Tics
              </button>
            </h2>
            <div
              id="Tics"
              class="accordion-collapse collapse"
              aria-labelledby="headingOne"
              data-bs-parent="#accordionExample"
            >
              <div class="accordion-body">
                <span class="colorch"
                  >Certified ADHD Professionals (ADHD-CCSP):
                </span>
                Our specialists in ADHD hold certifications from the Institute
                of Certified ADHD Professionals, demonstrating their expertise
                in diagnosing and treating ADHD.
              </div>
            </div>
          </div>
          <div class="accordion-item">
            <h2 class="accordion-header" id="headingTwo">
              <button
                class="accordion-button collapsed"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#Anxiety"
                aria-expanded="false"
                aria-controls="Anxiety"
              >
                Anxiety
              </button>
            </h2>
            <div
              id="Anxiety"
              class="accordion-collapse collapse"
              aria-labelledby="headingTwo"
              data-bs-parent="#accordionExample"
            >
              <div class="accordion-body">
                <span class="colorch"
                  >Certified ADHD Professionals (ADHD-CCSP):
                </span>
                Our specialists in ADHD hold certifications from the Institute
                of Certified ADHD Professionals, demonstrating their expertise
                in diagnosing and treating ADHD.
              </div>
            </div>
          </div>
          <div class="accordion-item">
            <h2 class="accordion-header" id="headingThree">
              <button
                class="accordion-button collapsed"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#Depression"
                aria-expanded="false"
                aria-controls="Depression"
              >
                Depression
              </button>
            </h2>
            <div
              id="Depression"
              class="accordion-collapse collapse"
              aria-labelledby="headingThree"
              data-bs-parent="#accordionExample"
            >
              <div class="accordion-body">
                <span class="colorch"
                  >Certified ADHD Professionals (ADHD-CCSP):
                </span>
                Our specialists in ADHD hold certifications from the Institute
                of Certified ADHD Professionals, demonstrating their expertise
                in diagnosing and treating ADHD.
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
  <!-- here is Certifications 3rd section section end -->
  <!-- here is Our Team 6th section section start -->
  <section class="commitmentbg">
    <div class="container">
      <div class="row">
        <div class="col-md-12 col-sm-12 col-lg-6 col-xl-6">
          <div class="textarea pe-4">
            <h5 class="pb-1">Our Team’s Continuous Development</h5>
            <h2 class="pb-1">Lorem Ipsum Dolor Text</h2>
            <p class="pb-2">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s,
            </p>
            <p class="pb-2">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s,
            </p>
            <button class="btn btnbook pt-2 pe-4 ps-4" href="#">
              Schedule a Free Consultation
            </button>
          </div>
        </div>

        <div class="col-md-12 col-sm-12 col-lg-6 col-xl-6">
          <div class="commitment ps-3">
            <img src="/images/accrediationbottom.png" alt="" />
          </div>
        </div>
      </div>
    </div>
  </section>
  <!-- here is Our Team 6th section section end -->
  <!-- here is Why CTA Us 7th section section start -->
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
</template>

<script>
export default {
  name: "Accrediation",
  data() {
    return {
      items: [
        {
          image: "images/accrediationbg.png",
          title: "Accrediation & Certifications",
          description:
            "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.",
          buttonText: "Book Appointment",
        },
      ],
    };
  },
  methods: {},
};
</script>

<style scoped>
/* .bannnerbg {
  background-image: url(/images/accrediationbg.png);
} */

/* hereis the commitmentbg css */
.commitmentbg {
  padding: 120px 0;
}

.certifications .btnbook,
.accreditations .btnbook {
  display: block;
  margin: auto;
  padding: 6px 25px !important;
}
.commitment img {
  width: 100%;
}
.bannertextarea p {
  padding-right: 135px; 
}
/* here is certifications css */
.certifications {
  background: #f8f9fa;
  padding: 120px 0;
}

.certtextbox {
  padding: 50px 30px;
  box-shadow: 0px 0px 10px 0px #a6a6a640;
  margin-left: 6px;
  margin-right: 6px;
  display: flex;
  background: #fff;
  position: relative;
  border-radius: 5px;
  height: 360px;
  justify-content: center;
  align-items: center;
}
.colorch {
  font-weight: 600 !important;
  color: #04498c !important;
}
.certtextbox h4 {
  color: #04498c;
  font-size: 30px;
  font-weight: 600;
  line-height: 45px;
  text-align: center;
}

.certtextbox:hover .certihide {
  opacity: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}

.certihide {
  position: absolute;
  top: 0;
  height: 100%;
  border-radius: 5px;
  opacity: 0;
  background: #04498c;
  box-shadow: 0px 2px 10px 0px #a6a6a666;
  padding: 40px 35px;
}

.certihide h3 {
  color: #ffffff;
  font-size: 22px;
  font-weight: 600;
  line-height: 33px;
  margin-bottom: 20px;
  text-align: center;
}

.certihide p {
  color: #ffffff;
  font-size: 15px;
  font-weight: 400;
  line-height: 23px;
  text-align: center;
  margin: 0px;
}

/* here is the css accreditations */
.accreditations {
  padding: 80px 0 120px;
}

.accredibox {
  background: #f4f8fb !important;
}

.certifications .accordion-header {
  box-shadow: 0px 0px 5px 0px #86868640;
  padding: 0px 0px;
}

.certifications .accordion-body {
  border: none;
  box-shadow: none;
}

.certifications .accordion-item {
  margin-bottom: 30px;
  border-radius: 0px !important;
  background: transparent;
  border: none;
  box-shadow: none;
}

.certifications .accordion-button {
  padding: 20px;
}

.certifications .accordion-button::after {
  background-image: none !important;
}

.certifications .accordion-button:not(.collapsed) {
  background-color: #fff;
}
</style>
