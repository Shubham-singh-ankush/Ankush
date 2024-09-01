<template>
  <section
    class="bannnerbg"
    :style="{ background: 'url(' + items[0].image + ')' }"
  >
    <div class="container">
      <div class="row" v-for="(item, index) in items" :key="index">
        <div class="col-md-12 col-sm-12 col-lg-6 col-xl-6 bannertextarea">
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
  <section class="comprehensivebg">
    <div class="container">
      <div class="row">
        <div class="col-md-12 col-sm-12 col-lg-6 col-xl-6">
          <div class="comprehensive pe-3">
            <img src="/images/comperhensive.png" alt />
          </div>
        </div>
        <div class="col-md-12 col-sm-12 col-lg-6 col-xl-6">
          <div class="textarea ps-4">
            <h5 class="pb-1">Comprehensive Diagnosis & Assessment</h5>
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
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled it to make a type specimen book.
            </p>
            <button class="btn btnbook pt-2 pe-4 ps-4" href="#">
              Contact Us
            </button>
          </div>
        </div>
      </div>
    </div>
  </section>
  <!-- here is Commitment 2nd section section end -->

  <!-- here is Diagnostic 3rd section section start -->
  <section class="diagnosticbg">
    <div class="container">
      <div class="row">
        <h5 class="text-center">Our Diagnostic Services</h5>
        <h2 class="text-center">Lorem Ipsum Dolor Text</h2>
        <p class="text-center">
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the<br />
          industry's standard dummy text ever since the 1500s.
        </p>
      </div>
      <div class="row pt-2">
        <div class="col-lg-4">
          <div class="servicebox">
            <img src="/images/comservice1.png" alt />
            <div class="innerbox">
              <h3 class="text-center">
                Attention-Deficit/Hyperactivity Disorder (ADHD)
              </h3>
              <p>
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry.
              </p>
              <h4>Behavioral Assessments:</h4>
              <h6>Lorem Ipsum is simply dummy text of the printing.</h6>

              <h4 class="pt-2">Psychological Testing:</h4>
              <h6>Lorem Ipsum is simply dummy text of the printing.</h6>
              <button class="btnbook mt-3">Take a Free ADHD Test</button>
              <button class="btnbook mt-2">
                Schedule a Free ADHD Consultation
              </button>
            </div>
          </div>
        </div>
        <div class="col-lg-4">
          <div class="servicebox">
            <img src="/images/comservice2.png" alt />
            <div class="innerbox">
              <h3 class="text-center">Autism Spectrum Disorder (ASD)</h3>
              <p>
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry.
              </p>
              <h4>Developmental History:</h4>
              <h6>Lorem Ipsum is simply dummy text of the printing.</h6>

              <h4 class="pt-2">Standardized Tools:</h4>
              <h6 class="paddingbottom">
                Lorem Ipsum is simply dummy text of the printing.
              </h6>
              <button class="btnbook mt-4">Take a Free Autism Test</button>
              <button class="btnbook mt-2">
                Schedule a Free Autism Consultation
              </button>
            </div>
          </div>
        </div>
        <div class="col-lg-4">
          <div class="servicebox">
            <img src="/images/comservice3.png" alt />
            <div class="innerbox">
              <h3 class="text-center">Obsessive-Compulsive Disorder (OCD)</h3>
              <p>
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry.
              </p>
              <h4>Clinical Interviews:</h4>
              <h6>Lorem Ipsum is simply dummy text of the printing.</h6>

              <h4 class="pt-2">Behavioral Assessments:</h4>
              <h6>Lorem Ipsum is simply dummy text of the printing.</h6>
              <button class="btnbook mt-3">Take a Free OCD Test</button>
              <button class="btnbook mt-2">
                Schedule a Free OCD Consultation
              </button>
            </div>
          </div>
        </div>
        <div class="col-lg-4">
          <div class="servicebox">
            <img src="/images/comservice4.png" alt />
            <div class="innerbox">
              <h3 class="text-center">Tics and Tourette Syndrome</h3>
              <p>
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry.
              </p>
              <h4>Observation:</h4>
              <h6>Lorem Ipsum is simply dummy text of the printing.</h6>

              <h4 class="pt-2">Family Interviews:</h4>
              <h6>Lorem Ipsum is simply dummy text of the printing.</h6>
              <button class="btnbook mt-3">Take a Free Tics Test</button>
              <button class="btnbook mt-2">
                Schedule a Free Tics Consultation
              </button>
            </div>
          </div>
        </div>
        <div class="col-lg-4">
          <div class="servicebox">
            <img src="/images/comservice5.png" alt />
            <div class="innerbox">
              <h3 class="text-center">Anxiety Disorders</h3>
              <p>
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry.
              </p>
              <h4>Anxiety Scales:</h4>
              <h6>Lorem Ipsum is simply dummy text of the printing.</h6>

              <h4 class="pt-2">Clinical Interviews:</h4>
              <h6>Lorem Ipsum is simply dummy text of the printing.</h6>
              <button class="btnbook mt-3">Take a Free Anxiety Test</button>
              <button class="btnbook mt-2">
                Schedule a Free Anxiety Consultation
              </button>
            </div>
          </div>
        </div>
        <div class="col-lg-4">
          <div class="servicebox">
            <img src="/images/comservice6.png" alt />
            <div class="innerbox">
              <h3 class="text-center">Depression</h3>
              <p>
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry.
              </p>
              <h4>Mood Assessments:</h4>
              <h6>Lorem Ipsum is simply dummy text of the printing.</h6>

              <h4 class="pt-2">Behavioral Observations:</h4>
              <h6>Lorem Ipsum is simply dummy text of the printing.</h6>
              <button class="btnbook mt-3">Take a Free Depression Test</button>
              <button class="btnbook mt-2">
                Schedule a Free Depression Consultation
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
  <!-- here is Diagnostic 3rd section section start -->

  <!-- here is Bright Futures 4th section section start -->
  <section class="comprehensivebg">
    <div class="container">
      <div class="row">
        <div class="col-md-12 col-sm-12 col-lg-6 col-xl-6">
          <div class="textarea">
            <h5 class="pb-1">Why Choose Cognitive Care</h5>
            <h2 class="pb-1">Lorem Ipsum Dolor Text</h2>
            <p class="">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s.
            </p>
            <div class="row pt-3">
              <div class="col-md-4 intext">
                <ul>
                  <li class="d-flex">
                    <div class="blue"></div>
                    Expert Team:
                  </li>
                </ul>
              </div>
              <div class="col-md-8 intext2">
                <p>
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry.
                </p>
              </div>
              <div class="col-md-4 intext">
                <ul>
                  <li class="d-flex">
                    <div class="blue"></div>
                    Personalized Approach:
                  </li>
                </ul>
              </div>
              <div class="col-md-8 intext2">
                <p>
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry.
                </p>
              </div>
              <div class="col-md-4 intext">
                <ul>
                  <li class="d-flex">
                    <div class="blue"></div>
                    Comprehensive Care:
                  </li>
                </ul>
              </div>
              <div class="col-md-8 intext2">
                <p>
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry.
                </p>
              </div>
            </div>
            <div class="flex">
              <button class="btn btnbook mt-2 pe-3 ps-3" href="#">
                Learn More About Our Team</button
              ><button class="btn btnbook ms-3 mt-2 pe-4 ps-4" href="#">
                Read Our Success Stories
              </button>
            </div>
          </div>
        </div>
        <div class="col-md-12 col-sm-12 col-lg-6 col-xl-6">
          <div class="comprehensive">
            <img src="/images/futuresection.png" alt />
          </div>
        </div>
      </div>
    </div>
  </section>
  <!-- here is Bright Futures 4th section section start -->

  <!-- here is Understanding the Conditions 5th section section start -->
  <section class="diagnosticbg">
    <div class="container">
      <div class="row">
        <h5 class="text-center">Understanding the Conditions 5th</h5>
        <h2 class="text-center">Lorem Ipsum Dolor Text</h2>
        <p class="text-center">
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the<br />
          industry's standard dummy text ever since the 1500s.
        </p>
      </div>
      <div class="row pt-2">
        <div class="col-lg-4">
          <div class="conditionbox">
            <h3>ADHD</h3>
            <p>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s.
            </p>
            <a href="#">Learn More</a>
          </div>
        </div>
        <div class="col-lg-4">
          <div class="conditionbox">
            <h3>Autism</h3>
            <p>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s.
            </p>
            <a href="#">Learn More</a>
          </div>
        </div>
        <div class="col-lg-4">
          <div class="conditionbox">
            <h3>OCD</h3>
            <p>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s.
            </p>
            <a href="#">Learn More</a>
          </div>
        </div>
        <div class="col-lg-4">
          <div class="conditionbox">
            <h3>Tics</h3>
            <p>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s.
            </p>
            <a href="#">Learn More</a>
          </div>
        </div>
        <div class="col-lg-4">
          <div class="conditionbox">
            <h3>Anxiety</h3>
            <p>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s.
            </p>
            <a href="#">Learn More</a>
          </div>
        </div>
        <div class="col-lg-4">
          <div class="conditionbox">
            <h3>Depression</h3>
            <p>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s.
            </p>
            <a href="#">Learn More</a>
          </div>
        </div>
      </div>
    </div>
  </section>
  <!-- here is Understanding the Conditions 5th section section start -->
  <!-- here is Success Stories 6th section section start -->
  <section class="comprehensivebg">
    <div class="container">
      <div class="row">
        <div class="col-md-12 col-sm-12 col-lg-6 col-xl-6">
          <div class="comprehensive pe-3">
            <img src="/images/sucess.png" alt />
          </div>
        </div>
        <div class="col-md-12 col-sm-12 col-lg-6 col-xl-6">
          <div class="textarea">
            <h5 class="pb-1">Success Stories</h5>
            <h2 class="pb-1">Lorem Ipsum Dolor Text</h2>
            <ul class="sucesstext">
              <li>
                Liam’s Journey
                <span class="ps-1">
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry.
                </span>
              </li>
              <li>
                Sophia’s Progress
                <span class="ps-1">
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry.
                </span>
              </li>
            </ul>
            <button class="btn btnbook pt-2 pe-4 ps-4" href="#">
              Read More Success Stories
            </button>
          </div>
        </div>
      </div>
    </div>
  </section>
  <!-- here is Success Stories 6th section section start -->
  <!-- here is Why CTA Us 7th section section start -->
  <section class="ctabg">
    <div class="container">
      <div class="row">
        <div class="col-md-9 col-sm-12 col-lg-9 col-xl-9">
          <h2 class="text-white">Take A Free Test</h2>
          <p class="text-white">
            Lorem Ipsum is simply dummy text of the printing and typesetting
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
export default {
  name: "Assessment",
  data() {
    return {
      items: [
        {
          image: "images/assessment.png",
          title: "Diagnosis & Assessment",
          description:
            "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
          buttonText: "Book Appointment",
        },
      ],
    };
  },
  methods: {},
};
</script>

<style scoped>
/* hereis the comprehensive css */
.comprehensivebg {
  padding: 80px 0;
}
.paddingbottom {
  margin-bottom: 27px;
}
.comprehensive img {
  width: 100%;
}

/* here is Diagnostic css */
.diagnosticbg {
  padding: 60px 0 80px;
  background: #f8f9fa;
}
.servicebox {
  background: #fff;
  margin-top: 40px;
}
.servicebox img {
  width: 100%;
}
.innerbox {
  padding: 25px 15px;
  display: flex;
  height: 400px;
  flex-direction: column;
}
.innerbox h3 {
  font-size: 22px;
  font-weight: 600;
  line-height: 27.73px;
  text-align: center;
  color: #04498c;
}
.innerbox p {
  font-size: 16px;
  font-weight: 400;
  line-height: 24px;
  text-align: left;
  color: #777777;
}
.innerbox h4 {
  font-size: 16px;
  font-weight: 500;
  line-height: 24px;
  text-align: left;
  color: #464646;
}
.innerbox h6 {
  font-size: 14px;
  font-weight: 400;
  line-height: 21px;
  text-align: left;
  color: #777777;
}
.innerbox .btnbook {
  width: 90%;
  margin: 5px auto;
  font-size: 14.01px;
}
.intext ul li {
  padding: 2px 0px;
  font-size: 14px;
  font-weight: 600;
}
.intext ul li span {
  font-size: 16px;
  font-weight: 400;
  line-height: 27.2px;
  text-align: left;
}
.intext2 p {
  font-size: 13px !important;
}
.intext2 {
  padding: 0px !important;
}
/* here is the css of condition section css */
.conditionbox {
  box-shadow: 0px 2px 15px 0px #98989840;
  background-color: #fff;
  height: 260px;
  margin: 40px 10px 0px;
  display: flex;
  padding: 30px 25px;
  border-radius: 0px 0px 100px 0px;
  flex-direction: column;
}
.conditionbox h3 {
  margin: 0px;
  font-size: 26px;
  font-weight: 600;
  line-height: 32.78px;
  text-align: center;
  color: #04498c;
}
.conditionbox p {
  margin: 20px 0px;
  font-size: 15px !important;
  font-weight: 400;
  line-height: 25.5px;
  text-align: center;
  color: #777777;
}
.conditionbox a {
  width: 100%;
  text-decoration: underline !important;
  font-size: 12px !important;
  font-weight: 500;
  line-height: 20.4px;
  text-align: center;
  color: #0297fe !important;
}
.conditionbox:hover {
  transition: 1.5s;
  border-radius: 5px;
  background: linear-gradient(180deg, #0297fe 0%, #04498c 100%) !important;
}
.conditionbox:hover.conditionbox a,
.conditionbox:hover.conditionbox p,
.conditionbox:hover.conditionbox h3 {
  color: #fff !important;
}
/* here is the css of sucess page css */

.sucesstext li {
  font-size: 18px;
  font-weight: 500;
  line-height: 30.6px;
  text-align: left;
}
.sucesstext li span {
  font-size: 15px;
  font-weight: 400;
  line-height: 27.2px;
  text-align: left;
}
</style>
