

<template>
  <!-- here is banner 1st section section start -->
  <!-- <section class="bannnerbg">
    <div class="container">
      <div class="row">
        <div class="col-md-12 col-sm-12 col-lg-5 col-xl-5 bannertextarea">
          <h2>About Cognition Care</h2>
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

  <!-- here is 2nd our approach section section start -->

  <section class="ourapproach">
    <div class="container">
      <div class="row">
        <h5 class="text-center">Our Approach</h5>
        <h2 class="text-center">
          Seeking help takes courage. We're here to support <br />
          you at every step
        </h2>
        <p class="text-center">
          Whether you're concerned about yourself or a loved one, we're here to
          get you the very <br />
          best help and support available.
        </p>
      </div>
      <div class="row mx-auto">
        <div class="col-md-12 col-xl-4 col-lg-6 pt-4">
          <div class="imgbox">
            <img src="/images/approach.png" alt="" />
          </div>
          <div class="textapproach">
            <div class="approchboxtext">
              <h3>Take a brief assessment</h3>
              <p>
                Our qualified clinical assessment team will listen and
                understand your concerns
              </p>
            </div>
          </div>
        </div>
        <div class="col-md-12 col-xl-4 col-lg-6 pt-4">
          <div class="imgbox">
            <img src="/images/approach2.png" alt="" />
          </div>
          <div class="textapproach">
            <div class="approchboxtext">
              <h3>Choose your clinician</h3>
              <p>
                Match with clinicians who suit your needs and pick from a list
                of recommendations
              </p>
            </div>
          </div>
        </div>
        <div class="col-md-12 col-xl-4 col-lg-6 mx-auto pt-4">
          <div class="imgbox">
            <img src="/images/approach3.png" alt="" />
          </div>
          <div class="textapproach">
            <div class="approchboxtext">
              <h3>Begin your treatment</h3>
              <p>
                Receive personalised care that's tailored to your individual
                needs
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>

  <!-- here is our approach 2nd section section end -->

  <!-- here is it works 3rd section section start -->
  <section class="itworkbg">
    <div class="container">
      <div class="row">
        <div class="col-xl-6">
          <div class="itworkimg">
            <img src="/images/itworks.png" alt="" />
          </div>
        </div>

        <div class="col-xl-6">
          <h2>How It Works</h2>
          <p>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s,
          </p>
          <div class="scrollboxx">
            <div class="textscroll">
              <h3>Expert advice and support from the start</h3>
              <p>
                Available seven days a week, our trained clinical advisors take
                the time to listen, explain your options and guide you to the
                most appropriate treatment and clinician.
              </p>
            </div>
            <div class="textscroll">
              <h3>Expert advice and support from the start</h3>
              <p>
                Available seven days a week, our trained clinical advisors take
                the time to listen, explain your options and guide you to the
                most appropriate treatment and clinician.
              </p>
            </div>
            <div class="textscroll">
              <h3>Expert advice and support from the start</h3>
              <p>
                Available seven days a week, our trained clinical advisors take
                the time to listen, explain your options and guide you to the
                most appropriate treatment and clinician.
              </p>
            </div>
            <div class="textscroll">
              <h3>Expert advice and support from the start</h3>
              <p>
                Available seven days a week, our trained clinical advisors take
                the time to listen, explain your options and guide you to the
                most appropriate treatment and clinician.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
  <!-- here is it works 3rd section section end -->

  <!-- here is regain control 4th section section start -->
  <section class="controlbg">
    <div class="container">
      <div class="row">
        <div class="col-xl-7">
          <div class="textcontrol">
            <h3>We’ll help you regain control</h3>
            <p>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              <br />
              industry. Lorem Ipsum has been the industry's standard dummy text
              <br />ever since the 1500s,
            </p>
            <div class="row pt-3">
              <div class="col-xl-4 col-sm-12 col-lg-4 col-md-6">
                <button class="btnbook">
                  <img src="/images/whitecall.png" alt="" /> +91 98765 43210
                </button>
              </div>
              <div class="col-xl-6 col-md-6 col-lg-4 col-sm-12">
                <button class="btnbook">
                  <img src="/images/whitetelegram.png" alt="" /> Send A Message
                </button>
              </div>
            </div>
          </div>
        </div>
        <div class="col-xl-5">
          <div class="controlimg">
            <img src="/images/regain.jpg" alt="" />
          </div>
        </div>
      </div>
    </div>
  </section>
  <!-- here is regain control 4th section section end -->
</template>

<script>
export default {
  name: "Approach",

  data() {
    return {
      items: [
        {
          image: 'images/approachbg.png',
          title: 'About Cognition Care',
          description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s,',
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
  background-image: url(/images/approachbg.png);
  background-size: cover;
  background-position: center;
  padding: 100px 0;
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
.bannertextarea h6 {
  font-size: 18px;
  font-weight: 500;
  line-height: 28.05px;
  text-align: left;
  color: #464646;
}
.bannertextarea p {
  font-size: 18.68px;
  font-weight: 400;
  line-height: 28.02px;
  text-align: left;
  color: #464646;
} */
/* here is the css of ourapproach css */

.ourapproach {
  padding: 120px 0px 90px;
}
.imgbox {
  width: 98%;
  margin: auto;
}
.imgbox img {
  width: 100%;
}

.textapproach {
  position: relative;
  margin-top: -48px !important;
  width: 91%;
  border-radius: 6px;
  padding: 15px;
  box-shadow: 0px 2px 15px 0px #83838340;
  background: #f8f9fa;
  margin: auto;
}
.approchboxtext {
  border-radius: 6px;
  min-height: 150px;
  padding: 15px 25px;
  border: 1px solid #0297fe;
}
.approchboxtext h3 {
  font-size: 22px;
  font-weight: 600;
  line-height: 34.05px;
  text-align: center;
  color: #04498c;
}
.approchboxtext p {
  font-size: 18px;
  margin: 0px;
  font-weight: 400;
  line-height: 25.81px;
  text-align: center;
  color: #777777;
}

/* here is the css of  4th section */
.itworkbg {
  background: #f8f9fa;
  padding: 70px 0;
}
.itworkimg {
  width: 100%;
}
.itworkimg img {
  width: 90%;
}
.scrollboxx {
  max-height: 350px;
  overflow: auto;
}
.textscroll h3 {
  margin-top: 20px;
  font-size: 18px;
  font-weight: 600;
  line-height: 29.7px;
  text-align: left;
  color: #04498c;
}
.textscroll {
  margin-right: 30px;
  border-bottom: 1px solid #d3d3d3;
}
/* width */
.scrollboxx::-webkit-scrollbar {
  width: 8px;
  border-radius: 10px;
}

/* Track */
.scrollboxx::-webkit-scrollbar-track {
  background: #e1f3ff;
}

/* Handle */
.scrollboxx::-webkit-scrollbar-thumb {
  background: #0297fe;
  widows: 18px;
  border-radius: 10px;
}

/* Handle on hover */
.scrollboxx::-webkit-scrollbar-thumb:hover {
  background: #0127ff;
}

/* here is the css controll section */

.controlbg {
  padding: 80px 0;
}
.textcontrol {
  height: 380px;
  padding: 40px;
  border-radius: 6px;
  border: 2px solid #b1dfff;
  display: flex;
  flex-direction: column;
  justify-content: center;
}
.controlimg {
  margin-left: -80px;
}
.controlimg img {
  width: 100%;
  height: 380px;
}
.textcontrol h3 {
  font-size: 32px;
  font-weight: 600;
  line-height: 52.8px;
  text-align: left;
  color: #04498c;
}
.textcontrol p {
  font-size: 18px;
  font-weight: 400;
  line-height: 27.62px;
  text-align: left;
  color: #777777;
}

/* """"""""""""""""""""""""""""here is the css of media query""""""""""""""""""""""""""""""""""" */

@media (max-width: 767px) {
  .bannertextarea h2 {
    font-size: 28px;
    line-height: 20px;
  }
  br {
    display: none;
  }
  .bannertextarea .btnbook {
    margin: 0px !important;
  }
  .textcontrol .btnbook {
    margin-top: 25px !important;
  }
  .bannnerbg {
    padding: 0px 0;
  }
  .bannertextarea {
    min-height: 305px;
  }
  .ourapproach {
    padding: 50px 0px;
  }
  .ourapproach h2 {
    font-size: 20px;
    text-align: center;
  }
  .textcontrol p {
    margin: 0px;
  }
  .ourapproach p {
    font-size: 16px;
    text-align: center;
  }
  .approchboxtext h3 {
    font-size: 24px;
  }
  .textapproach {
    margin-top: -100px !important;
    margin-bottom: 30px !important;
  }
  .itworkimg img {
    width: 100%;
    margin-bottom: 30px !important;
  }
  .textcontrol {
    /* height: 380px; */
    padding: 30px 20px;
  }
  .textcontrol h3 {
    line-height: 33.8px;
  }
  .controlimg {
    margin-left: -0px !important;
    margin-top: 30px !important;
  }
}

@media (min-width: 768px) and (max-width: 1022px) {
  .bannnerbg {
    padding: 0px 0;
  }
  .bannertextarea p {
    font-size: 15.68px !important;
    width: 68%;
  }
  .ourapproach {
    padding: 50px 0px 50px;
  }
  br {
    display: none;
  }

  .ourapproach h2 {
    width: 70%;
    margin: 10px auto 25px;
  }
  .ourapproach p {
    width: 70%;
    margin: 0px auto;
  }
  .itworkimg img {
    width: 100%;
    margin-bottom: 30px;
  }
  .textscroll h3,
  .textcontrol h3,
  .textcontrol p {
    text-align: center;
  }
  .controlbg {
    padding: 50px 0;
  }
  .textcontrol .btnbook {
    margin: auto !important;
    display: block;
  }
  .controlimg {
    margin-top: 25px;
    margin-left: 0px !important;
  }
}
@media (min-width: 1024px) and (max-width: 1279px) {
  br {
    display: none;
  }
  .bannertextarea h2 {
    font-size: 36px;
  }
  .bannnerbg {
    padding: 0px;
  }
  .ourapproach {
    padding: 50px 0px;
  }
  .itworkimg img {
    width: 100%;
    margin-bottom: 30px;
  }
  .controlimg {
    margin-left: 0px;
    margin-top: 30px;
  }
}
@media (min-width: 1280px) and (max-width: 1366px) {
  .bannertextarea h2 {
    font-size: 44.64px;
  }
  .bannnerbg {
    padding: 0px 0;
  }
  .ourapproach {
    padding: 50px 0px 50px;
  }
  .textapproach {
    width: 96%;
    padding: 5px;
  }
  .approchboxtext {
    padding: 15px 20px;
  }
  .scrollboxx {
    max-height: 280px;
  }
  .textcontrol {
    padding: 40px 30px;
  }
  .controlimg {
    margin-left: -35px;
  }
}
</style>
