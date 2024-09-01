
<template>
  <!-- here is banner 1st section section start -->
  <!-- <section class="bannnerbg">
    <div class="container">
      <div class="row">
        <div class="col-md-12 col-sm-12 col-lg-5 col-xl-5 bannertextarea">
          <h2>Our Consultants</h2>
          <p class="pt-1">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s.
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
  <!-- here is specialized 2nd section section end -->
  <section class="specializedbg">
    <div class="container">
      <div class="row">
        <h2 class="text-center pb-2">Our Specialized Doctors</h2>
        <div class="col-xl-4 col-md-6">
          <div class="specializedbox">
            <div class="doctorimgtext">
              <div class="imgset">
                <img src="/images/doctor.png" alt="" />
              </div>
              <div class="doctordetails">
                <h3>Dr. Lorem Ipsum</h3>
                <h6>
                  Consultant Lorem Ipsum <br />
                  Dolor
                </h6>
                <img src="/images/linkdin.png" alt="" />
              </div>
            </div>
            <div class="contentbox">
              <div class="flexbox">
                <h3>Dr. Lorem Ipsum</h3>
                <h6>
                  Consultant Lorem Ipsum <br />
                  Dolor
                </h6>
                <p>
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry. Lorem Ipsum has been the industry's
                  standard dummy text ever since the 1500s,
                </p>
                <img src="/images/linkdin.png" alt="" />
              </div>
            </div>
          </div>
        </div>
        <div class="col-xl-4 col-md-6">
          <div class="specializedbox">
            <div class="doctorimgtext">
              <div class="imgset">
                <img src="/images/doctor2.png" alt="" />
              </div>
              <div class="doctordetails">
                <h3>Dr. Lorem Ipsum</h3>
                <h6>
                  Consultant Lorem Ipsum <br />
                  Dolor
                </h6>
                <img src="/images/linkdin.png" alt="" />
              </div>
            </div>
            <div class="contentbox">
              <div class="flexbox">
                <h3>Dr. Lorem Ipsum</h3>
                <h6>
                  Consultant Lorem Ipsum <br />
                  Dolor
                </h6>
                <p>
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry. Lorem Ipsum has been the industry's
                  standard dummy text ever since the 1500s,
                </p>
                <img src="/images/linkdin.png" alt="" />
              </div>
            </div>
          </div>
        </div>
        <div class="col-xl-4 col-md-6">
          <div class="specializedbox">
            <div class="doctorimgtext">
              <div class="imgset">
                <img src="/images/doctor3.png" alt="" />
              </div>
              <div class="doctordetails">
                <h3>Dr. Lorem Ipsum</h3>
                <h6>
                  Consultant Lorem Ipsum <br />
                  Dolor
                </h6>
                <img src="/images/linkdin.png" alt="" />
              </div>
            </div>
            <div class="contentbox">
              <div class="flexbox">
                <h3>Dr. Lorem Ipsum</h3>
                <h6>
                  Consultant Lorem Ipsum <br />
                  Dolor
                </h6>
                <p>
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry. Lorem Ipsum has been the industry's
                  standard dummy text ever since the 1500s,
                </p>
                <img src="/images/linkdin.png" alt="" />
              </div>
            </div>
          </div>
        </div>
        <div class="col-xl-4 col-md-6">
          <div class="specializedbox">
            <div class="doctorimgtext">
              <div class="imgset">
                <img src="/images/doctor4.png" alt="" />
              </div>
              <div class="doctordetails">
                <h3>Dr. Lorem Ipsum</h3>
                <h6>
                  Consultant Lorem Ipsum <br />
                  Dolor
                </h6>
                <img src="/images/linkdin.png" alt="" />
              </div>
            </div>
            <div class="contentbox">
              <div class="flexbox">
                <h3>Dr. Lorem Ipsum</h3>
                <h6>
                  Consultant Lorem Ipsum <br />
                  Dolor
                </h6>
                <p>
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry. Lorem Ipsum has been the industry's
                  standard dummy text ever since the 1500s,
                </p>
                <img src="/images/linkdin.png" alt="" />
              </div>
            </div>
          </div>
        </div>
        <div class="col-xl-4 col-md-6">
          <div class="specializedbox">
            <div class="doctorimgtext">
              <div class="imgset">
                <img src="/images/doctor5.png" alt="" />
              </div>
              <div class="doctordetails">
                <h3>Dr. Lorem Ipsum</h3>
                <h6>
                  Consultant Lorem Ipsum <br />
                  Dolor
                </h6>
                <img src="/images/linkdin.png" alt="" />
              </div>
            </div>
            <div class="contentbox">
              <div class="flexbox">
                <h3>Dr. Lorem Ipsum</h3>
                <h6>
                  Consultant Lorem Ipsum <br />
                  Dolor
                </h6>
                <p>
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry. Lorem Ipsum has been the industry's
                  standard dummy text ever since the 1500s,
                </p>
                <img src="/images/linkdin.png" alt="" />
              </div>
            </div>
          </div>
        </div>
        <div class="col-xl-4 col-md-6">
          <div class="specializedbox">
            <div class="doctorimgtext">
              <div class="imgset">
                <img src="/images/doctor6.png" alt="" />
              </div>
              <div class="doctordetails">
                <h3>Dr. Lorem Ipsum</h3>
                <h6>
                  Consultant Lorem Ipsum <br />
                  Dolor
                </h6>
                <img src="/images/linkdin.png" alt="" />
              </div>
            </div>
            <div class="contentbox">
              <div class="flexbox">
                <h3>Dr. Lorem Ipsum</h3>
                <h6>
                  Consultant Lorem Ipsum <br />
                  Dolor
                </h6>
                <p>
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry. Lorem Ipsum has been the industry's
                  standard dummy text ever since the 1500s,
                </p>
                <img src="/images/linkdin.png" alt="" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
  <!-- here is specialized 2nd section section end -->

  <!-- here is Appointment 3rd section section start -->
  <section class="fixappointment">
    <div class="container">
      <div class="row">
        <div class="col-xl-7 col-md-6 pe-0 ps-0 pt-0 pb-0">
          <div class="inputbg">
            <h2>Fix An Appointment</h2>
            <hr />
            <form action="" class="row pt-4">
              <div class="col-6">
                <div class="input-group mb-3">
                  <label for="exampleFormControlInput1" class="form-label"
                    >Name</label
                  ><input
                    type="text"
                    class="form-control"
                    placeholder="Your Name"
                  />
                </div>
              </div>
              <div class="col-6">
                <div class="input-group mb-3">
                  <label for="exampleFormControlInput1" class="form-label"
                    >Phone</label
                  ><input
                    type="text"
                    class="form-control"
                    aria-describedby="emailHelp"
                    placeholder="Your Phone"
                  />
                </div>
              </div>
              <div class="col-6">
                <div class="input-group mb-3">
                  <label for="exampleFormControlInput1" class="form-label"
                    >Phone</label
                  ><input
                    type="email"
                    class="form-control"
                    aria-describedby="emailHelp"
                    placeholder="Your Email"
                  />
                </div>
              </div>
              <div class="col-6">
                <div class="input-group mb-3">
                  <label for="exampleFormControlInput1" class="form-label"
                    >Type Of Services</label
                  ><select
                    class="form-select"
                    aria-label="Default select example"
                  >
                    <option selected>Any Service</option>
                    <option value="1">Any Service</option>
                    <option value="2">Any Service</option>
                    <option value="3">Any Service</option>
                  </select>
                </div>
              </div>
              <div class="col-6">
                <div class="input-group mb-3">
                  <label for="exampleFormControlInput1" class="form-label"
                    >Staff</label
                  ><select
                    class="form-select"
                    aria-label="Default select example"
                  >
                    <option selected>Any Service</option>
                    <option value="1">Any Service</option>
                    <option value="2">Any Service</option>
                    <option value="3">Any Service</option>
                  </select>
                </div>
              </div>
              <div class="col-6">
                <div class="input-group mb-3">
                  <label for="exampleFormControlInput1" class="form-label"
                    >Date</label
                  ><select
                    class="form-select"
                    aria-label="Default select example"
                  >
                    <option selected>Select Date</option>
                    <option value="1">Select Date</option>
                    <option value="2">ASelect Date</option>
                    <option value="3">ASelect Datee</option>
                  </select>
                </div>
              </div>
              <div class="col-md-12">
                <label for="exampleFormControlInput1" class="form-label"
                  >Message</label
                >
                <textarea
                  name=""
                  id="textarea"
                  placeholder="Your Message"
                ></textarea>
              </div>
              <div class="col-md-12">
                <button type="submit" class="btnbook">Submit</button>
              </div>
            </form>
          </div>
        </div>
        <div class="col-xl-5 col-md-6 pe-0 ps-0 pt-0 pb-0">
          <div class="contactbg">
            <h2>Fix An Appointment</h2>
            <hr />
            <p>Need to discuss before treatment?</p>
            <div class="addressbox mt-5 row">
              <div class="col-2 iconborder">
                <img src="/images/whitecall.png" alt="" />
              </div>
              <div class="col-9 addtext">
                <h4>+91 987-654-3210</h4>
              </div>
              <div class="col-2 mt-5 iconborder">
                <img src="/images/whitemap.png" alt="" />
              </div>
              <div class="col-9 mt-5 addtext">
                <h4>123, Xyz City, Example State</h4>
              </div>
            </div>
            <div class="contactflex">
              <a href="#"><img src="/images/social.png" alt="" /></a>
              <a href="#"><img src="/images/social2.png" alt="" /></a>
              <a href="#"><img src="/images/social3.png" alt="" /></a>
              <a href="#"><img src="/images/social4.png" alt="" /></a>
            </div>
            <h6>
              The best contact you will get here lorem ipsum dolor sir amet
            </h6>
            <button class="btnwhite">Talk To A Consultant</button>
          </div>
        </div>
      </div>
    </div>
  </section>
  <!-- here is Appointment 3rd section section end -->
</template>

<script>
export default {
  name: "Consultation",

  data() {
    return {
      items: [
        {
          image: 'images/consultantbg.png',
          title: 'Our Consultants',
          description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s.',
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
  background-image: url(/images/consultantbg.png);
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
} */

/* here is the css of specialize section details */
.specializedbg {
  padding: 80px 0;
}
.specializedbox {
  position: relative;
  padding: 20px;
  margin-top: 40px;
  height: 680px;
  border: 1px solid #dfdfdf;
  border-radius: 5px;
}
.imgset img {
  width: 100%;
}
.doctordetails {
  background: #f8f8f9;
  padding: 30px 20px 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
}
.doctordetails h3,
.flexbox h3 {
  font-size: 23px;
  font-weight: 500;
  line-height: 31.52px;
  text-align: center;
  color: #04498c;
}
.flexbox h3 {
  font-size: 23px;
  font-weight: 500;
  line-height: 31.52px;
  text-align: center;
  color: #0297fe;
}
.flexbox h6 {
  font-size: 20px;
  margin-bottom: 10px;
  font-weight: 400;
  line-height: 27.73px;
  text-align: center;
  color: #fff;
}

.doctordetails h6 {
  font-size: 20px;
  margin-bottom: 10px;
  font-weight: 400;
  line-height: 27.73px;
  text-align: center;
  color: #464646;
}
.flexbox p {
  font-size: 16px;
  font-weight: 400;
  line-height: 28.8px;
  text-align: center;
  color: #fff;
}
.contentbox {
  opacity: 0;
  background: #000000f0;
  position: absolute;
  margin: 20px 0px 20px;
  top: 0;
  padding: 30px;
  width: 365px;
  height: 640px;
  display: flex;
  justify-content: center;
  align-items: center;
}
.flexbox {
  display: flex;
  flex-direction: column;
  align-items: center;
}
.specializedbox:hover .contentbox {
  opacity: 1;
}
.specializedbox:hover .doctordetails {
  display: none !important;
}

/* here is the css of specialize section details */

.fixappointment {
  background-image: url(/images/fixappointment.png);
  background-size: cover;
  padding: 120px 0;
  background-position: center;
}
.inputbg {
  background: white;
  min-height: 650px;
  max-height: 650px;
  padding: 50px;
}
.inputbg hr {
  border: 3.44px solid #0297fe;
  max-width: 55px;
  opacity: 1 !important;
}
.inputbg .form-label {
  width: 100%;
}
.inputbg #textarea {
  width: 100%;
  margin-bottom: 25px;
}
.inputbg input,
.inputbg select,
.inputbg #textarea {
  margin-bottom: 10px;
  border-bottom: 1px solid grey;
  border-top: none;
  border-right: none;
  border-left: none;
}
.inputbg ::placeholder {
  font-size: 15.48px;
  font-weight: 400;
  line-height: 19.52px;
  text-align: left;
  color: #a3a3a3;
}

.contactbg {
  background: #04498c;
  padding: 50px;
}
.contactbg hr {
  border: 3.44px solid #ffffff;
  max-width: 55px;
  opacity: 1 !important;
}
.contactbg h2 {
  color: #fff !important;
}
.contactbg p {
  font-size: 14.62px;
  font-weight: 600;
  line-height: 21.93px;
  text-align: left;
  color: #fff;
}
.iconborder {
  margin-bottom: 0px;
  padding: 10px;
  border-right: 2px solid #fff;
}
.addtext {
  display: flex;
}
.addtext h4 {
  font-size: 23px;
  font-weight: 500;
  margin: 0px;
  text-align: left;
  color: #fff;
}
.addtext {
  display: flex;
  align-items: center;
  padding-left: 15px;
}
.contactflex {
  margin: 35px 0;
}
.contactflex a {
  margin-top: 35px;
  margin-right: 20px;
  filter: brightness(0) invert(1);
}
.contactbg h6 {
  font-size: 17.2px;
  padding-right: 32px;
  padding-top: 25px;
  font-weight: 500;
  line-height: 25.8px;
  text-align: left;
  color: #fff;
}
.btnwhite {
  margin-top: 35px;
  background: #ffffff;
  color: #0297fe;
  border-radius: 3px;
  padding: 6px 25px;
  border: 2px solid #fff;
}
.contactbg {
  background: #04498c;
  padding: 50px;
  min-height: 650px;
  max-height: 650px;
}

/* """"""""""""""""""""""""""here is the media query""""""""""""""""""""""""" */

@media (max-width: 767px) {
  .btnbook {
    margin: 0px !important;
  }
  .bannnerbg {
    padding: 0px 0;
  }
  .contentbox {
    width: 330px;
  }
  .inputbg,
  .contactbg {
    min-height: 600px;
    max-height: 620px;
    padding: 35px 20px;
  }
  .inputbg h2,
  .contactbg h2 {
    text-align: start;
  }
}

@media (min-width: 768px) and (max-width: 1023px) {
  .btnbook {
    margin: 0px !important;
  }
  .fixappointment {
    padding: 50px 0;
  }
  .bannertextarea p {
    max-width: 56%;
  }
  .bannnerbg {
    padding: 0px 0;
  }

  .inputbg,
  .contactbg {
    min-height: 610px;
    max-height: 610px;
    padding: 35px 20px;
  }
  .inputbg h2,
  .contactbg h2 {
    text-align: start;
  }
  .specializedbox {
    height: 580px;
  }
  .contentbox {
    height: 540px;
    width: 285px;
  }
}

@media (min-width: 1024px) and (max-width: 1279px) {
  .btnbook {
    margin: 0px !important;
  }
  .bannertextarea p {
    max-width: 56%;
  }
  .bannnerbg {
    padding: 0px 0;
  }

  .inputbg,
  .contactbg {
    min-height: 600px;
    max-height: 600px;
    padding: 35px 20px;
  }
  .inputbg h2,
  .contactbg h2 {
    text-align: start;
  }
  .contentbox {
    height: 690px;
    width: 400px;
  }
  .specializedbox {
    height: 730px;
  }
  .fixappointment {
    padding: 50px 0;
  }
}
@media (min-width: 1280px) and (max-width: 1439px) {
  .contentbox {
    width: 310px;
    height: 570px;
  }
  .specializedbox {
    height: 610px;
  }
}
</style>
