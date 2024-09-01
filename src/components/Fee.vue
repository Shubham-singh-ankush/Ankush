

<template>
  <!-- here is banner 1st section section start -->
  <!-- <section class="bannnerbg">
    <div class="container">
      <div class="row">
        <div class="col-md-12 col-sm-12 col-lg-5 col-xl-5 bannertextarea">
          <h2>Fees</h2>
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
  <section class="bannnerbg" :style="{ background: 'url(' + items[0].image + ')' }">
    <div class="container">
      <div class="row" v-for="(item, index) in items" :key="index">
        <div class="col-md-12 col-sm-12 col-lg-5 col-xl-5 bannertextarea">
          <h2>{{ item.title }}</h2>
          <p class="pt-1">{{ item.description }}</p>
          <button class="btn btnbook pt-2" href="#">{{ item.buttonText }}</button>
        </div>
      </div>
    </div>
  </section>
  <!-- here is banner 1st section section end -->

  <!-- here is Treatment 2nd section section start -->
  <section class="treatmentbg">
    <div class="container">
      <div class="row">
        <div class="col-xl-6 col-md-6">
          <img src="/images/treatment.png" alt="" />
        </div>
        <div class="col-xl-6 col-md-6">
          <h5>Fees and Pricing</h5>
          <h2>Assessment and Treatment Costs for Children and Adults</h2>
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
          <button class="btnbook pt-2" href="#">Call Us Today</button>
        </div>
      </div>
    </div>
  </section>
  <!-- here is Treatment 2nd section section end -->

  <!-- here is assment 3rd section section start -->
  <section>
    <div class="container">
      <div class="row">
        <h5 class="text-center">Service Offerings</h5>
        <h2 class="text-center">Lorem Ipsum Dolor Text</h2>
        <p class="text-center pt-2">
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the <br />industry's standard dummy
          text ever since the 1500s,
        </p>
      </div>
      <div class="row">
        <div class="col-xl-4">
          <div class="serviceofferbox">
            <h3 class="text-center">ADHD Treatment</h3>
            <p class="text-center">
              Our ADHD treatment services are designed to address individual
              needs through personalized care plans. Services include:
            </p>
            <ul>
              <li>Initial Consultation: $100</li>
              <li>Follow-up Sessions: $100</li>
              <li>Medication Management: $100</li>
            </ul>
          </div>
        </div>
        <div class="col-xl-4">
          <div class="serviceofferbox">
            <h3 class="text-center">Autism Treatment</h3>
            <p class="text-center">
              We offer specialized interventions to support individuals with
              Autism spectrum disorders. Services include:
            </p>
            <ul>
              <li>Behavioral Therapy: $100</li>
              <li>Social Skills Training: $100</li>
              <li>Family Counseling: $100</li>
            </ul>
          </div>
        </div>
        <div class="col-xl-4">
          <div class="serviceofferbox">
            <h3 class="text-center">OCD Treatment</h3>
            <p class="text-center">
              Our OCD treatment programs are tailored to meet the unique needs
              of each client. Services include:
            </p>
            <ul>
              <li>Assessment and Evaluation: $100</li>
              <li>Therapy Sessions (CBT): $100</li>
              <li>Exposure and Response Prevention Therapy: $100</li>
            </ul>
          </div>
        </div>
        <div class="col-xl-4">
          <div class="serviceofferbox">
            <h3 class="text-center">Tics Treatment</h3>
            <p class="text-center">
              We provide effective treatments for managing tics and related
              disorders. Services include:
            </p>
            <ul class="pt-4">
              <li>Habit Reversal Training: $100</li>
              <li>Consultation and Assessment: $100</li>
              <li>Medication Consultation: $100</li>
            </ul>
          </div>
        </div>
        <div class="col-xl-4">
          <div class="serviceofferbox">
            <h3 class="text-center">Anxiety Treatment</h3>
            <p class="text-center">
              Our anxiety treatment programs aim to reduce symptoms and improve
              quality of life. Services include:
            </p>
            <ul>
              <li>Cognitive-Behavioral Therapy (CBT): $100</li>
              <li>Group Therapy: $100</li>
              <li>Mindfulness Training: $100</li>
            </ul>
          </div>
        </div>

        <div class="col-xl-4">
          <div class="serviceofferbox">
            <h3 class="text-center">Depression Treatment</h3>
            <p class="text-center">
              We offer comprehensive treatment options to support individuals
              struggling with depression. Services include:
            </p>
            <ul>
              <li>Psychotherapy Sessions: $100</li>
              <li>Medication Management: $100</li>
              <li>Support Groups: $100</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </section>
  <!-- here is assment 3rd section section end -->

  <!-- here is Payments 4th section section start -->

  <section class="payment">
    <div class="container">
      <div class="row">
        <h5 class="text-center">Insurance and Payment Options</h5>
        <h2 class="text-center">Lorem Ipsum Dolor</h2>
        <p class="text-center pt-2">
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the <br />industry's standard dummy
          text ever since the 1500s,
        </p>
      </div>
      <div class="row pt-3 paymentbox">
        <div class="col-xl-3 col-md-6">
          <h5 class="text-center">Lorem Ipsum</h5>
          <p class="text-center paragraph">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s,
          </p>
        </div>
        <div class="col-xl-6 col-md-6">
          <h5 class="text-center">Lorem Ipsum</h5>
          <p class="text-center paragraph parawidth">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s,
          </p>
        </div>
        <div class="col-xl-3 col-md-6 mx-auto">
          <h5 class="text-center">Lorem Ipsum</h5>
          <p class="text-center paragraph">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s,
          </p>
        </div>

        <div class="progress-steps">
          <div class="top">
            <div class="progress"><span></span></div>
            <div class="steps">
              <div class="step active" data-step="1"><span>1</span></div>
              <div class="step" data-step="2"><span>2</span></div>
              <div class="step" data-step="3"><span>3</span></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>

  <!-- here is Payments 4th section section start -->

  <!-- here is Our offerings 2nd section section start -->
  <section class="ourofferbg">
    <div class="container">
      <div class="row">
        <div class="col-xl-6 col-md-6">
          <h5 class="pb-2">Our offerings:</h5>
          <h2 class="pb-2">Lorem Ipsum Dolor Text</h2>
          <p>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s,
          </p>
          <h6 class="innertext">
            Flexible payment plans tailored to fit your budget
          </h6>

          <h6 class="innertext">
            Financing options to help manage treatment costs
          </h6>
          <button class="btnbook pt-2" href="#">Contact Us</button>
        </div>
        <div class="col-xl-6 col-md-6">
          <img src="/images/feebottom.png" alt="" />
        </div>
      </div>
    </div>
  </section>
  <!-- here is Treatment 2nd section section end -->
  <section class="ctabg">
    <div class="container">
      <div class="row">
        <div class="col-md-10 col-sm-12 col-lg-10 col-xl-10">
          <h3 class="text-white">
            For more details about our fees, insurance coverage, or to schedule
            an appointment, please reach out to us. Our friendly staff is ready
            to assist you.
          </h3>
        </div>
        <div class="col-md-2 col-sm-12 col-lg-2 col-xl-2 btnalign">
          <button class="btnwhite">Book Appointments</button>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: "Fee",
  data() {
    return {
      items: [
        {
          image: 'images/feesbg.png',
          title: 'Fees',
          description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s.',
          buttonText: 'Book Appointment'
        },
      ]
    };
  },
  methods: {
  }

};
</script>

<style scoped>
/* here is the banner section css */
/* .bannnerbg {
  background-image: url(/images/feesbg.png);
  background-size: cover;
  padding: 100px 0;
  background-position: center;
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
}
.ctabg .btnwhite::after {
  display: none !important;
}
.btnalign {
  display: flex;
  align-items: center;
  justify-content: flex-end;
} */
/* here  is the css of treatment section */

.treatmentbg {
  padding: 110px 0;
}
.treatmentbg img {
  width: 95%;
}

/* here is the css of serviceofferbox section */
.serviceofferbox {
  border: 2px solid #04498c;
  margin-top: 40px;
  margin-right: 5px;
  margin-left: 5px;
  min-height: 320px;
  max-height: 320px;
  padding: 40px 20px 25px;
  border-radius: 10px;
}
.serviceofferbox h3 {
  font-size: 30px;
  font-weight: 600;
  color: #04498c;
  text-decoration: underline;
  margin-bottom: 20px;
  text-align: center;
}
.serviceofferbox li {
  font-size: 17px;
  font-weight: 500;
  line-height: 30px;
  text-align: center;
  color: #464646;
}
/* here is the css of payment section */

.payment {
  padding: 90px 0 80px;
}
.paymentbox h5 {
  font-size: 25px;
  font-weight: 400;
  line-height: 31.52px;
  text-align: center;
  color: #04498c;
}
.paymentbox {
  position: relative;
}
.progress-steps {
  position: absolute;
  bottom: 100px;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 1070px;
}
.progress-steps .top {
  margin-bottom: 30px;
  position: relative;
}
.progress-steps .top .progress {
  width: 100%;
  height: 1px;
  background-color: #777777;
  position: absolute;
  top: 50%;
  z-index: -1;
}
.progress-steps .top .progress span {
  position: absolute;
  width: 0%;
  height: 100%;
  left: 0px;
  top: 0px;
  background: #3498db;
  transition: 0.5s;
}
.progress-steps .top .steps {
  display: flex;
  justify-content: space-between;
}

.progress-steps .top .steps .step {
  color: #fff !important;
  background-color: #0d6efd;
  border: 3px solid #0d6efd;
  border-radius: 50%;
  padding: 2px 10px;
}

.paragraph {
  margin-top: 120px;
}

.parawidth {
  padding: 0px 14%;
}

/* here is the css of ourofferbg  */

.ourofferbg {
  padding: 120px 0;
}
.ourofferbg img {
  width: 100%;
}
.ourofferbg p {
  padding-right: 45px;
}
.innertext {
  margin-bottom: 30px;
  margin-right: 45px;
  box-shadow: 0px 1px 4px 0px #6a6a6a40;
  padding: 13px 35px;
  border-radius: 5px;
}
h5 {
  padding-top: 0px;
}
/* """""""""""""""here is the css of media query"""""""""""""""""""""""""""'' */
@media (max-width: 767px) {
  .btnbook {
    margin: 0px !important;
  }
  .treatmentbg img {
    width: 100%;
  }
  .bannnerbg {
    padding: 0px 0;
  }
  .treatmentbg {
    padding: 40px 0;
  }
  .treatmentbg .btnbook {
    margin: auto !important;
  }

  .progress-steps {
    display: none !important;
  }
  .paragraph {
    margin-top: 20px;
    padding-bottom: 20px;
    border-bottom: 1px solid #d9d9d9;
  }
  .payment {
    padding: 40px 0;
  }
}
@media (min-width: 768px) and (max-width: 1023px) {
  .btnbook {
    margin: 0px !important;
  }
  .bannertextarea p {
    width: 56%;
  }
  .treatmentbg img {
    width: 100%;
  }
  .bannnerbg {
    padding: 0px 0;
  }
  .bannertextarea {
    min-height: 300px;
  }
  .treatmentbg {
    padding: 40px 0;
  }
  .treatmentbg .btnbook {
    margin: auto !important;
    display: block;
  }

  .progress-steps {
    display: none !important;
  }
  .paragraph {
    margin-top: 20px;
    padding-bottom: 20px;
    border-bottom: 1px solid #d9d9d9;
  }
  .payment {
    padding: 40px 0;
  }
  .parawidth {
    padding: 0px 0px 20px;
  }
  .paymentbox h5 {
    font-size: 22px;
  }
  .innerdata h4 {
    font-size: 14px;
  }
  .treatmentbg img {
    width: 100%;
    object-fit: cover;
    height: 315px;
    border-radius: 5px;
  }
}

@media (min-width: 1024px) and (max-width: 1279px) {
  .btnbook {
    margin: 0px !important;
  }

  .treatmentbg img {
    width: 100%;
  }
  .bannnerbg {
    padding: 0px 0;
  }
  .bannertextarea {
    min-height: 300px;
  }
  .treatmentbg {
    padding: 40px 0;
  }
  .treatmentbg h5 {
    padding-top: 0px !important;
  }

  .progress-steps {
    display: none !important;
  }
  .paragraph {
    margin-top: 20px;
    padding-bottom: 20px;
    border-bottom: 1px solid #d9d9d9;
  }
  .payment {
    padding: 40px 0;
  }
  .parawidth {
    padding: 0px 0px 20px;
  }
  .paymentbox h5 {
    font-size: 22px;
  }
  .innerdata h4 {
    font-size: 14px;
  }
  .treatmentbg img {
    width: 100%;
    object-fit: cover;
    height: 315px;
    border-radius: 5px;
  }
}

@media (min-width: 1280px) and (max-width: 1365px) {
  .treatmentbg h5 {
    padding-top: 0px !important;
  }
  .progress-steps {
    width: 900px;
  }
  .treatmentbg img {
    width: 100%;
    object-fit: cover;
    height: 335px;
    border-radius: 5px;
  }
  .parawidth {
    padding: 0px 26%;
  }
}

@media (min-width: 1366px) and (max-width: 1439px) {
  .treatmentbg h5 {
    padding-top: 0px !important;
  }
  .treatmentbg img {
    width: 98%;
    object-fit: cover;
    height: 335px;
    border-radius: 5px;
  }
  .parawidth {
    padding: 0px 26%;
  }
  .progress-steps {
    width: 900px;
  }
}
</style>
