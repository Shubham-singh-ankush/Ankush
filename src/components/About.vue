<template>
  <!-- here is banner 1st section section start -->
  <section class="bannnerbg" :style="{ background: 'url(' + items[0].image + ')' }">
    <div class="container">
      <div class="row" v-for="(item, index) in items" :key="index">
        <div class="col-md-12 col-sm-12 col-lg-5 col-xl-5 bannertextarea">
          <h2>{{ item.title }}</h2>
          <h6 class="pt-1">{{ item.subtitle }}</h6>
          <p class="pt-1">{{ item.description }}</p>
          <button class="btn btnbook pt-2" href="#">{{ item.buttonText }}</button>
        </div>
      </div>
    </div>
  </section>


  <!-- <section class="bannnerbg">
    <div class="container">
      <div class="row">
        <div class="col-md-12 col-sm-12 col-lg-5 col-xl-5 bannertextarea">
          <h2>About Cognition Care</h2>
          <h6 class="pt-1">
            Empowering Mental Well-being with a Patient Focused, Psychiatrist
            Led Approach
          </h6>
          <p class="pt-1">
            Cognition Care is a trusted destination for comprehensive
            assessments and tailored treatment plans for ADHD, ASD and other
            conditions. Explore our story, meet our experts, and discover our
            partnerships.
          </p>
          <button class="btn btnbook pt-2" href="#">Book Appointment</button>
        </div>
      </div>
    </div>
  </section> -->
  
  <!-- here is banner 1st section section end -->

  <!-- here is our story 2nd section section start -->
  <section class="ourstory">
    <div class="container">
      <div class="row">
        <div class="col-md-12 col-sm-12 col-lg-6 col-xl-6">
          <div class="row">
            <div class="col-md-12 col-sm-12 col-lg-6 col-xl-5">
              <div class="leftaboutimg">
                <img src="/images/left.png" alt="" />
              </div>
            </div>
            <div class="col-lg-6 col-xl-7">
              <div class="rightabout">
                <img src="/images/rightabout.png" alt="" />
              </div>
            </div>
          </div>
        </div>
        <div class="col-md-12 col-sm-12 col-lg-6 col-xl-6">
          <div class="textarea">
            <h5>Our Story</h5>
            <h2>Lorem Ipsum is simply dummy text of the printing</h2>
            <p>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled it to make a type specimen book.
            </p>
            <p>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled it to make a type specimen book.
            </p>
            <button class="btn btnbook pt-2" href="#">Book Appointment</button>
          </div>
        </div>
      </div>
    </div>
  </section>
  <!-- here is our story 2nd section section end -->

  <!-- here is our mission 3rd section section start -->
  <section class="ourmission">
    <div class="container">
      <div class="row">
        <div class="col-12 whiteicon">
          <img src="/images/white.png" alt="" />
        </div>
        <h3>
          Our mission is to Lorem Ipsum is simply dummy text of the printing and
          typesetting industry. Lorem Ipsum has been the industry's standard
          dummy text ever since the 1500s,
        </h3>
        <div class="col-12 whiteicon">
          <img src="/images/white.png" alt="" />
        </div>
      </div>
    </div>
  </section>
  <!-- here is our mission 3rd section section end -->

  <!-- here isparent 4th section section start -->
  <section class="parent">
    <div class="container">
      <div class="row">
        <div class="col-md-12 col-sm-12 col-lg-6 col-xl-6">
          <div class="textparent">
            <h2>Join Our Online Parenting Community</h2>
            <p class="pt-2">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled it to make a type specimen book.
            </p>
            <p class="pt-2">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled it to make a type specimen book.
            </p>
            <div class="row">
              <div class="col-md-6 col-sm-12 col-lg-6 col-xl-6">
                <div class="parentbox">
                  <h2>24 H</h2>
                  <h6>Turnaround Time</h6>
                </div>
              </div>
              <div class="col-md-6 col-sm-12 col-lg-6 col-xl-6">
                <div class="parentbox">
                  <h2>99%</h2>
                  <h6>Accuracy Rate</h6>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="col-md-12 col-sm-12 col-lg-6 col-xl-6">
          <div class="parentimg">
            <img src="/images/parents.png" alt="" />
          </div>
        </div>
      </div>
    </div>
  </section>
  <!-- here is parent 4th section section start -->
</template>

<script>
export default {
  name: 'About',
  data() {
    return {
      items: [
        {
          image: 'images/aboutbanner.png',
          title: 'About Cognition Care',
          subtitle: 'Empowering Mental Well-being with a Patient Focused, Psychiatrist Led Approach',
          description: 'Cognition Care is a trusted destination for comprehensive assessments and tailored treatment plans for ADHD, ASD and other conditions. Explore our story, meet our experts, and discover our partnerships.',
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
/* here is the css of our story  */
.ourstory {
  padding: 120px 0;
}
.textarea {
  height: 560px;
  display: flex;
  align-items: flex-start;
  justify-content: center;
  flex-direction: column;
}
.leftaboutimg {
  /* margin-right: -74px; */
  height: 455px;
  margin-top: 65px;
  /* margin-left: 56px; */
  display: flex;
  align-items: flex-start;
  justify-content: center;
  flex-direction: column;
}
.rightabout {
  margin-left: -33px;
}
.leftaboutimg img {
  width: 100%;
  object-fit: cover;
  height: 100%;
}
.rightabout img {
  width: 90%;
  object-fit: contain;
  height: 96%;
}
/* here is the css of our mission  */

.ourmission {
  background-image: url(/images/ourmission.jpg);
  background-size: cover;
  background-position: center;
  padding: 60px;
}
.ourmission h3 {
  margin: 20px 0;
  font-size: 41px;
  font-weight: 600;
  line-height: 53px;
  text-align: center;
  color: #fff;
}

.whiteicon {
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  max-height: 65px;
  padding: 15px;
}

.whiteicon img {
  width: 30px;
  height: 30px;
}
.whiteicon::before {
  content: "";
  left: 65px;
  position: absolute;
  height: 2px;
  background: #fff;
  width: 540px;
}
.whiteicon::after {
  content: "";
  right: 65px;
  position: absolute;
  height: 2px;
  background: #fff;
  width: 540px;
}

/* here is the css of parent */
.parent {
  padding: 90px 0;
}
.textparent {
  padding-right: 35px;
  display: flex;
  flex-direction: column;
  justify-content: center;
}

.parentimg img {
  width: 100%;
}
.textparent p {
  font-size: 15.95px;
  font-weight: 400;
  color: #777777;
}
.parentbox {
  margin-top: 12px;
  padding: 12px;
  border-radius: 4px;
  display: flex;
  border: 1.5px solid #d3d3d3;
  flex-direction: column;
  align-items: center;
}
.parentbox h2 {
  color: #0297fe !important;
  font-size: 39px;
  font-weight: 600;
  text-align: center;
}
.parentbox h6 {
  font-size: 20px;
  text-align: center;
  color: #777777;
}
@media (max-width: 767px) {
  .ourmission h3 {
    font-size: 22px;
    line-height: 32px;
  }
  .ourmission {
    padding: 15px;
  }
  .whiteicon::before {
    width: 140px;
    left: 0px;
  }
  .whiteicon::after {
    width: 140px;
    right: 0px;
  }
  .bannertextarea h2 {
    font-size: 28px;
    line-height: 20px;
  }
  .bannertextarea h6 {
    font-size: 16px;
    line-height: 23.05px;
  }
  .bannnerbg {
    padding: 0px 0;
    background-position: left;
  }
  .bannertextarea .btnbook {
    display: block;
    margin: 0px !important;
  }
  .ourstory {
    padding: 50px 0;
  }
  .leftaboutimg {
    display: none;
  }
  .leftaboutimg img {
    width: 68%;
    margin: auto;
    height: 100%;
  }
  .rightabout {
    margin-left: 0px;
  }
  .rightabout img {
    width: 100%;
  }
  .textarea {
    height: 410px;
    align-items: center;
  }
  .textarea .btnbook {
    margin: 0px;
  }
  .textparent {
    padding-right: 0px !important;
  }
  .parent {
    padding: 50px 0;
  }
  .parentimg img {
    margin-top: 25px;
  }
}
@media (min-width: 768px) and (max-width: 1023px) {
  .ourmission h3 {
    font-size: 28px;
    line-height: 41px;
  }
  .ourmission {
    padding: 15px;
  }
  .whiteicon::before {
    width: 250px;
    left: 50px;
  }
  .whiteicon::after {
    width: 250px;
    right: 50px;
  }
  .bannertextarea h2 {
    font-size: 28px;
    line-height: 20px;
  }
  .bannertextarea h6 {
    max-width: 50%;
    font-size: 16px;
    line-height: 23.05px;
  }
  .bannertextarea p {
    max-width: 50%;
    font-size: 13.65px !important;
    line-height: 23.05px;
  }
  .bannnerbg {
    padding: 0px 0;
    background-position: center;
  }
  .bannertextarea .btnbook {
    display: block;
    margin: 0px !important;
  }
  .ourstory {
    padding: 50px 0;
  }
  .leftaboutimg {
    display: none;
  }
  .leftaboutimg img {
    width: 68%;
    margin: auto;
    height: 100%;
  }
  .rightabout {
    margin-left: 0px;
  }
  .rightabout img {
    width: 100%;
    height: 500px;
  }
  .textarea {
    height: 350px;
    align-items: center;
  }
  .textarea .btnbook {
    margin: 0px;
  }
  .textparent {
    padding-right: 0px !important;
  }
  .parent {
    padding: 50px 0;
  }
  .parentimg img {
    margin-top: 25px;
  }
}

@media (min-width: 1024px) and (max-width: 1279px) {
  .bannertextarea h2 {
    font-size: 32px !important;
  }
  .bannertextarea h6 {
    font-size: 17px !important;
  }
  .ourmission h3 {
    font-size: 29px !important;
    line-height: 46px !important;
  }
  .bannnerbg {
    padding: 30px 0;
  }
  .parentbox h6 {
    font-size: 18px !important;
  }
  .leftaboutimg {
    height: 383px;
    margin-top: 42px;
  }
  .textarea {
    height: 450px;
  }
  .leftaboutimg img {
    width: 94%;
    object-fit: contain;
  }
  .rightabout img {
    width: 100%;
    object-fit: contain;
    height: 450px;
  }
  .rightabout {
    margin-left: -48px;
  }

  .ourstory,
  .parent {
    padding: 50px 0;
  }
  .parent h2 {
    font-size: 20.95px;
  }
  .textparent p {
    margin-bottom: 10px;
  }
  .whiteicon::before,
  .whiteicon::after {
    width: 333px;
  }
  .parentimg img {
    height: 410px;
    border-radius: 15px;
    object-fit: cover;
    object-position: right;
  }
}
@media (min-width: 1280px) and (max-width: 1365px) {
  .bannertextarea h2 {
    font-size: 35.64px !important;
  }
  .leftaboutimg {
    height: 383px;
    margin-top: 42px;
  }
  .whiteicon::before,
  .whiteicon::after {
    width: 444px;
  }
  .textarea {
    height: 450px;
  }
  .leftaboutimg img {
    width: 94%;
    object-fit: contain;
  }
  .rightabout img {
    width: 100%;
    object-fit: contain;
    height: 450px;
  }
  .rightabout {
    margin-left: -148px;
  }
  .ourmission h3 {
    font-size: 37px;
  }
  .ourstory,
  .parent {
    padding: 50px 0;
  }
  .parent h2 {
    font-size: 20.95px;
  }
  .textparent p {
    margin-bottom: 10px;
  }
  .parentimg img {
    height: 360px;
    border-radius: 15px;
    object-fit: cover;
    object-position: right;
  }
}
@media (min-width: 1366px) and (max-width: 1440px) {
  .whiteicon::before,
  .whiteicon::after {
    width: 445px;
  }
  .bannertextarea h2 {
    font-size: 40.64px !important;
  }
  .rightabout {
    margin-left: -50px;
  }
  .rightabout img {
    width: 100%;
    object-fit: contain;
    height: 566px;
  }
  .bannertext h2 {
    width: 65% !important;
  }
  .parent h2 {
    font-size: 24px;
  }
  .parentimg img {
    height: 380px;
  }
  .ourmission h3 {
    font-size: 39px;
  }
}

@media (min-width: 1440px) and (max-width: 1470px) {
  .whiteicon::before,
  .whiteicon::after {
    width: 495px;
  }
  .bannertext h2 {
    width: 61% !important;
  }
  .rightabout {
    margin-left: -100px;
  }
  .rightabout img {
    width: 100%;
    object-fit: contain;
    height: 566px;
  }
  .parent h2 {
    font-size: 24px;
  }
  .parentimg img {
    height: 380px;
  }
  .ourmission h3 {
    font-size: 39px;
  }
}
</style>
