<template>
  <!-- here is banner 1st section section start -->
  <section class="bannnerbg">
    <div class="container">
      <div class="row">
        <div class="col-md-12 col-sm-12 col-lg-6 col-xl-6 bannertextarea">
          <h2>Contact Us</h2>
        </div>
      </div>
    </div>
  </section>
  <!-- here is banner 1st section section end -->

  <!-- here is contact us today 2nd section section start -->
  <section class="contact">
    <div class="container">
      <div class="row">
        <div class="col-md-12 col-sm-12 col-lg-6 col-xl-6 leftimg">
          <img src="/images/contactleft.png" alt="" />
        </div>
        <div class="col-md-12 col-sm-12 col-lg-6 col-xl-6 lefttextarea">
          <h2>Contact Us Today</h2>
          <p>
            Lorem ipsum is a placeholder text commonly used to demonstrate the
            visual form of a document
          </p>
          <form @submit.prevent="contactFormSubmit" method="post">
            <div class="mb-3">
              <input type="text" class="form-control" id="name" v-model="name" placeholder="Your Name" />
              <div class="text-danger">{{ errorMessages.name }}</div>
            </div>
            <div class="mb-3">
              <input type="text" class="form-control" id="number" v-model="number" placeholder="Phone Number"
                maxlength="10" @input="validateNumber" />
              <div class="text-danger">{{ errorMessages.number }}</div>
            </div>
            <div class="mb-3">
              <input type="email" class="form-control" id="email" v-model="email" placeholder="Your Email" />
              <div class="text-danger">{{ errorMessages.email }}</div>
            </div>
            <div class="mb-3">
              <textarea class="form-control" id="message" v-model="message" rows="5" placeholder="Message"></textarea>
              <div class="text-danger">{{ errorMessages.message }}</div>
            </div>
            <button type="submit" class="btnbook pt-2">Submit</button>
          </form>
        </div>
      </div>
      <div class="row pt-5 mx-auto">
        <div class="col-md-6 col-sm-12 col-lg-4 col-xl-4">
          <div class="addbox">
            <img src="/images/callcont.png" alt="" />
            <div>
              <h5>Phone</h5>
              <p>+91 987-654-3210</p>
            </div>
          </div>
        </div>

        <div class="col-md-6 col-sm-12 col-lg-4 col-xl-4">
          <div class="addbox">
            <img src="/images/evlopcont.png" alt="" />
            <div>
              <h5>Email</h5>
              <p>example@xyz.com</p>
            </div>
          </div>
        </div>

        <div class="col-md-6 col-sm-12 col-lg-4 col-xl-4">
          <div class="addbox">
            <img src="/images/mapcont.png" alt="" />
            <div>
              <h5>Location</h5>
              <p>123, Xyz City, Example State, 123456</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
  <!-- here is contact us today 2nd section section end -->

  <!-- here is contact us today 3rd section section start -->
  <section class="adhdbg">
    <div class="container">
      <div class="row">
        <div class="col-md-12 col-sm-12 col-lg-6 col-xl-6">
          <div class="adhdtext">
            <h3>Take a free online ADHD Test</h3>
            <p>
              Lorem ipsum is a placeholder text commonly used to demonstrate the
              visual form of a document or a typeface without relying on
              meaningful content. Lorem ipsum may be used as a placeholder
              before the final copy is available.
            </p>
            <button class="btnbook btnbapp">Book Appointment</button>
          </div>
        </div>
        <div class="col-md-12 col-sm-12 col-lg-6 col-xl-6">
          <div class="adhdimg">
            <img src="/images/adhdimg.png" alt="" />
          </div>
        </div>
      </div>
    </div>
  </section>
  <!-- here is contact us today 3rd section section start -->

  <!-- here is the Testimonials 10th section start -->
  <section class="ourteam">
    <div class="container">
      <div class="row">
        <h5 class="text-center">Testimonials</h5>
        <h2 class="text-center">Real Experiences, Real Results</h2>
        <p class="text-center mt-3 mb-4">
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the <br />
          industry's standard dummy text ever since the 1500s.
        </p>
      </div>
    </div>
    <div class="container pt-3">
      <swiper :slidesPerView="1" :spaceBetween="10" :autoplay="{
        delay: 2500,
        disableOnInteraction: false,
      }" :pagination="{
        clickable: true,
      }" :breakpoints="{
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
          '@1.25': {
            slidesPerView: 4,
            spaceBetween: 30,
          },
        }" :modules="modules" class="mySwiper3 swiper3">
        <swiper-slide class="testslidebox"><img src="/images/testimonial.png" alt="" class="imgtest" />
          <p>
            Lorem Ipsum is simply dummy text of the printing and type setting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s.
          </p>
          <div class="bottombox">
            <img src="/images/testi.png" alt="" />
            <h2>Lorem Ipsum</h2>
            <h6>Manager</h6>
          </div>
        </swiper-slide>
        <swiper-slide class="testslidebox"><img src="/images/testimonial.png" alt="" class="imgtest" />
          <p>
            Lorem Ipsum is simply dummy text of the printing and type setting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s.
          </p>
          <div class="bottombox">
            <img src="/images/testi2.png" alt="" />
            <h2>Lorem Ipsum</h2>
            <h6>Manager</h6>
          </div>
        </swiper-slide>
        <swiper-slide class="testslidebox"><img src="/images/testimonial.png" alt="" class="imgtest" />
          <p>
            Lorem Ipsum is simply dummy text of the printing and type setting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s.
          </p>
          <div class="bottombox">
            <img src="/images/testi.png" alt="" />
            <h2>Lorem Ipsum</h2>
            <h6>Manager</h6>
          </div>
        </swiper-slide>

        <swiper-slide class="testslidebox"><img src="/images/testimonial.png" alt="" class="imgtest" />
          <p>
            Lorem Ipsum is simply dummy text of the printing and type setting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s.
          </p>
          <div class="bottombox">
            <img src="/images/testi.png" alt="" />
            <h2>Lorem Ipsum</h2>
            <h6>Manager</h6>
          </div>
        </swiper-slide>
        <swiper-slide class="testslidebox"><img src="/images/testimonial.png" alt="" class="imgtest" />
          <p>
            Lorem Ipsum is simply dummy text of the printing and type setting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s.
          </p>
          <div class="bottombox">
            <img src="/images/testi2.png" alt="" />
            <h2>Lorem Ipsum</h2>
            <h6>Manager</h6>
          </div>
        </swiper-slide>
        <swiper-slide class="testslidebox"><img src="/images/testimonial.png" alt="" class="imgtest" />
          <p>
            Lorem Ipsum is simply dummy text of the printing and type setting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s.
          </p>
          <div class="bottombox">
            <img src="/images/testi.png" alt="" />
            <h2>Lorem Ipsum</h2>
            <h6>Manager</h6>
          </div>
        </swiper-slide>
        <swiper-slide class="testslidebox"><img src="/images/testimonial.png" alt="" class="imgtest" />
          <p>
            Lorem Ipsum is simply dummy text of the printing and type setting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s.
          </p>
          <div class="bottombox">
            <img src="/images/testi.png" alt="" />
            <h2>Lorem Ipsum</h2>
            <h6>Manager</h6>
          </div>
        </swiper-slide>
        <div class="swiper-pagination"></div>
      </swiper>
      <div class="swiper-pagination"></div>
    </div>
  </section>
  <!-- here is the Testimonials 10th section end -->
  <!-- here is the map 5th section start -->
  <!-- <section class="mapbg"></section> -->
  <section class="mb-5 mt-5">
    <iframe
      src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d387191.0360649959!2d-74.3093289654168!3d40.69753996411731!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c24fa5d33f083b%3A0xc80b8f06e177fe62!2sNew%20York%2C%20NY%2C%20USA!5e0!3m2!1sen!2sin!4v1719843288781!5m2!1sen!2sin"
      width="100%" height="500" style="border: 0" allowfullscreen="" loading="lazy"
      referrerpolicy="no-referrer-when-downgrade"></iframe>
  </section>
  <!-- here is the map 5th section end -->
</template>

<script>
// Import Swiper Vue.js components
import { Swiper, SwiperSlide } from "swiper/vue";
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

import axios from "axios";
// import required modules
import { Autoplay, Pagination } from "swiper/modules";

export default {
  name: "Contact",
  components: {
    Swiper,
    SwiperSlide,
  },
  data() {
    return {
      name: null,
      number: null,
      email: null,
      message: null,
      error: null,
      emailValid: true,
      errorMessages: {
        name: '',
        number: '',
        email: '',
        message: '',
      },
      modules: [Autoplay, Pagination],
    };
  },
  methods: {
    async contactFormSubmit() {
      this.resetValidation();

      // Validate name
      if (!this.name) {
        this.errorMessages.name = 'Please enter your name.';
      }

      // Validate number
      if (!this.number) {
        this.errorMessages.number = 'Please enter your phone number.';
      }

      // Validate message
      if (!this.message) {
        this.errorMessages.message = 'Please enter your message.';
      }

      // Validate email
      if (!this.email) {
        this.errorMessages.email = 'Please enter your email.';
      } else if (!this.isValidEmail(this.email)) {
        this.errorMessages.email = 'Please enter a valid email address.';
      }

      // If there are any error messages, stop the form submission
      if (this.errorMessages.name || this.errorMessages.number || this.errorMessages.email || this.errorMessages.message) {
        return;
      }

      try {
        const response = await axios.post('/api/contact', {
          name: this.name,
          number: this.number,
          email: this.email,
          message: this.message,
        });

        console.log('Contact form submitted successfully:', response.data);
        this.resetForm()
      } catch (error) {
        if (error.response) {
          console.error('Server error:', error.response.data);
          this.error = 'Submission failed. Please try again.';
        } else {
          console.error('Network error:', error.request);
          this.error = 'Network error. Please try again later.';
        }
      }
    },
    resetValidation() {
      this.errorMessages = {
        name: '',
        number: '',
        email: '',
        message: '',
      };
    },
    isValidEmail(email) {
      const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      return re.test(email);
    },
    validateNumber() {
      this.number = this.number.replace(/[^0-9]/g, '');
    },
    resetForm() {
      this.name = null;
      this.number = null;
      this.email = null;
      this.message = null;
    },
  },
};
</script>



<style scoped>
.bannnerbg {
  background-image: url(/images/bannercontact.png);
  background-size: cover;
  background-position: center;
  height: 70vh;
}



.bannertextarea h2 {
  font-size: 64px;
  font-weight: 600;
  line-height: 80.68px;
  color: #0297fe;
}

/* here is the css of contact section */
.contact {
  padding: 110px 0px;
}

.leftimg {
  padding: 0px;
}

.leftimg img {
  width: 100%;
}

.lefttextarea {
  padding: 65px;
  border-radius: 17px;
  background: #f1f6fa;
}

.lefttextarea p {
  padding-top: 15px;
  padding-bottom: 15px;
  font-size: 15px;
  font-weight: 400;
  line-height: 22.5px;
  text-align: left;
}

.lefttextarea .form-control {
  border: none;
  padding: 13px;
}

.addbox {
  display: flex;
  background: #f1f6fa;
  border-radius: 15px;
  align-items: center;
  padding: 15px 35px;
}

.btnbook {
  margin-top: 15px;
  padding: 6px 44px;
}

.addbox img {
  margin-right: 25px;
  width: 39px;
  height: 36px;
  object-fit: cover;
}

.addbox h5 {
  font-size: 19.46px;
  font-weight: 400;
  margin-bottom: 5px;
  text-align: left;
  color: #274760 !important;
}

.addbox p {
  font-size: 14px;
  font-weight: 400;
  line-height: 19.39px;
  text-align: left;
  color: #36556c;
}

/* here is the css of adhd section css */
.adhdbg {
  background-image: url(/images/adhdbg.jpg);
  background-size: cover;
  background-position: center;
}

.adhdtext {
  display: flex;
  height: 440px;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
}

.adhdtext h3 {
  font-size: 32px;
  font-weight: 600;
  line-height: 48px;
  text-align: left;
  color: #ffffff;
}

.adhdtext p {
  font-size: 16px;
  font-weight: 400;
  line-height: 24px;
  text-align: left;
  color: #fff;
}

.btnbapp,
.btnbapp:hover {
  color: #0297fe !important;
  padding: 8px 25px;
  background: #fff !important;
}

.adhdimg {
  display: flex;
  justify-content: flex-end;
}

.adhdimg img {
  height: 440px;
}

/* here is the css of TESTIMONIAL SECTION CSS */
.ourteam {
  padding: 50px 0px 30px;
}

.swiper3 {
  overflow: hidden;
  height: 495px;
}

.testslidebox img {
  margin: auto;
  display: block;
  text-align: center;
  width: 35px;
}

.testslidebox {
  background: #f4f8fb;
  display: flex;
  box-shadow: 0px 1.87px 5.6px 0px #7d7d7d40;
  border-radius: 8px;
  padding: 30px 0px 0px;

  max-height: 425px !important;
  flex-direction: column;
  align-items: stretch;
}

.testslidebox p {
  padding-top: 15px;
  font-size: 14.94px;
  font-style: italic;
  font-weight: 500;
  line-height: 28px;
  text-align: center;
  color: #777777;
  padding-bottom: 40px;
}

.bottombox {
  position: relative;
  border-radius: 0 0 8px 8px;
  background: white;
  padding: 19px 0 22px;
}

.bottombox img {
  margin: auto;
  box-shadow: 0px 0.93px 11.21px 0px #6a6a6a4a;
  border: 6px solid #fff;
  display: block;
  width: 70px;
  border-radius: 50%;
  margin-top: -54px;
}

.bottombox h2 {
  font-size: 23.35px;
  font-weight: 600;
  padding-top: 10px;
  color: #777777;
  line-height: 29.44px;
  text-align: center;
}

.bottombox h6 {
  font-size: 14.94px;
  font-weight: 500;
  line-height: 18.84px;
  text-align: center;
  color: #0297fe;
}

/* here is the map section css  */

.mapbg {
  background-image: url(/images/mapbg.png);
  background-size: cover;
  background-position: center;
  margin: 30px 0px 90px;
  min-height: 500px;
}

/* """"""""""""""""""""""""""""""""here is the media query css""""""""""""""""""""""""""""""""""" */

@media (max-width: 767px) {
  .bannnerbg {
    padding: 10px 0;
  }

  .bannertextarea h2 {
    font-size: 30px;
  }

  .bannertextarea {
    min-height: 130px;
  }

  .contact {
    padding: 30px 0px;
  }

  .leftimg img,
  .addbox {
    margin-bottom: 25px;
  }

  .lefttextarea {
    padding: 40px 25px;
  }

  .adhdbg {
    padding: 40px 8px 0px;
  }

  .adhdtext h3 {
    line-height: 33px;
    font-size: 23px;
  }

  .adhdtext {
    height: auto !important;
  }

  .btnbook {
    margin: 0px;
  }

  .adhdimg img {
    padding-top: 35px;
  }

  .mapbg {
    margin: 10px 0px 40px;
    min-height: 250px;
  }
}

@media (min-width: 768px) and (max-width: 1023px) {
  .bannnerbg {
    padding: 10px 0;
  }

  .bannertextarea h2 {
    font-size: 54px !important;
  }

  .contact {
    padding: 50px 0px;
  }

  .addbox {
    margin-top: 30px;
  }

  .adhdtext {
    padding-top: 40px;
    height: auto !important;
  }

  .ourteam {
    padding: 40px 0;
  }

  .mapbg {
    margin: 30px 0px 50px;
    min-height: 300px;
  }
}

@media (min-width: 1024px) and (max-width: 1279px) {
  .bannnerbg {
    padding: 10px 0;
  }

  .bannertextarea h2 {
    font-size: 54px !important;
  }

  .contact {
    padding: 50px 0px;
  }

  .addbox {
    min-height: 140px !important;
    margin-top: 30px;
  }

  .addbox {
    margin-top: 30px;
  }

  .adhdtext {
    padding-top: 40px;
    height: auto !important;
  }

  .ourteam {
    padding: 40px 0;
  }

  .mapbg {
    margin: 30px 0px 50px;
    min-height: 300px;
  }

  .lefttextarea {
    padding: 40px !important;
  }

  .lefttextarea .form-control {
    max-height: 90px;
  }

  .leftimg img {
    height: 540px;
  }
}

@media (min-width: 1280px) and (max-width: 1365px) {
  .lefttextarea .form-control {
    max-height: 90px;
  }

  .leftimg img {
    height: 540px;
  }

  .lefttextarea {
    padding: 30px;
    border-radius: 17px;
    background: #f1f6fa;
  }

  .addbox {
    min-height: 130px !important;
    margin-top: 30px;
  }

  .mapbg {
    margin: 30px 0px 30px;
    min-height: 400px;
  }
}

@media (min-width: 1366px) and (max-width: 1440px) {
  .lefttextarea .form-control {
    max-height: 90px;
  }

  .leftimg img {
    height: 540px;
  }

  .lefttextarea {
    padding: 30px;
    border-radius: 17px;
    background: #f1f6fa;
  }

  .addbox {
    min-height: 130px !important;
    margin-top: 30px;
  }

  .mapbg {
    margin: 30px 0px 30px;
    min-height: 400px;
  }
}
</style>
