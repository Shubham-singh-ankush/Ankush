<template>
    <section>
      <div
        id="carouselExampleCaptions mainid"
        class="carousel slide"
        data-bs-ride="carousel"
      >
        <div class="carousel-indicators">
          <button
            type="button"
            v-for="(item, index) in items"
            :key="index"
            :data-bs-target="'#carouselExampleCaptions'"
            :data-bs-slide-to="index"
            :class="{ active: index === 0 }"
            :aria-label="'Slide ' + (index + 1)"
          ></button>
        </div>
        <div class="carousel-inner">
          <div
            v-for="(item, index) in items"
            :key="index"
            :class="['carousel-item bannertext', { active: index === 0 }]"
          >
            <img :src="item.image" class="d-block w-100" :alt="item.title" />
            <div class="carousel-caption d-md-block">
              <h6>{{ item.title }}</h6>
              <h2>{{ item.subtitle }}</h2>
              <p>{{ item.description }}</p>
              <button class="btn btnbook mt-3">
                {{ item.buttonText }}
              </button>
            </div>
          </div>
        </div>
        <div class="flexbanner">
          <a href="#"><img src="/images/social.png" alt="" /></a>
          <a href="#"><img src="/images/social2.png" alt="" /></a>
          <a href="#"><img src="/images/social3.png" alt="" /></a>
          <a href="#"><img src="/images/social4.png" alt="" /></a>
        </div>
      </div>
    </section>
  </template>
  
  <script>
  export default {
    name: 'Portfolio',
    data() {
      return {
        items: [
          {
            image: '/images/banner.png',
            title: 'Banner 1',
            subtitle: 'We Are Dedicated To Empowering You With Best Mental Health Care',
            description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.',
            buttonText: 'Get A Free Consultation'
          },
          {
            image: '/images/banner2.png',
            title: 'Banner 2',
            subtitle: 'We Are Dedicated To Empowering You With Best Mental Health Care',
            description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.',
            buttonText: 'Get A Free Consultation'
          },
          {
            image: '/images/banner3.png',
            title: 'Banner 3',
            subtitle: 'We Are Dedicated To Empowering You With Best Mental Health Care',
            description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.',
            buttonText: 'Get A Free Consultation'
          }
        ]
      };
    },
    methods: {
    }
  };
  </script>
  
  <style scoped>
/* Add your styles here */
/* here is the css of hero section */
.mainid {
  position: relative;
}
a {
  font-size: 15px !important;
}
.flexbanner {
  position: absolute;
  top: 39%;
  left: 9%;
  height: 109px;
  display: flex;
  flex-direction: column;
  justify-content: center;
}
.flexbanner a {
  padding-top: 25px;
  position: relative;
}
.flexbanner a:first-child {
  padding-left: 5px;
}
.flexbanner a:first-child::after {
  display: none;
}
.flexbanner a::after {
  position: absolute;
  content: "";
  width: 3px;
  left: 9px;
  top: 7px;
  background: #0297fe;
  height: 14px;
}
.bannertext img {
  height: 100%;
}
.carousel-item {
  height: 750px;
}
.carousel-item .btnbook {
  color: #fff;
  background-color: #0297fe;
  margin-left: -36px !important;
  border: 1px solid #0297fe;
  border-radius: 3px;
  padding: 6px 25px;
  font-weight: 600;
}
.carousel-caption {
  left: 18%;
  color: #fff;
  text-align: start !important;
  top: 25%;
}
.bannertext h2 {
  font-size: 47px;
  color: #04498c !important;
  max-width: 60%;
  margin-left: -36px !important;
  font-weight: 700;
  margin: 0px 0px 15px;
}
.bannertext h6 {
  font-size: 27px;
  font-weight: 700;
  margin-left: -36px !important;
  color: #0297fe;
  max-width: 55%;
  margin: 0px 0px 15px;
}
.blue {
  width: 8px;
  border-radius: 50%;
  height: 8px;
  margin-top: 9px;
  margin-right: 10px;
  background: #0297fe;
}
.bannertext p {
  margin-left: -36px !important;
  font-size: 21px;
  font-weight: 400;
  color: #464646 !important;
  max-width: 57%;
  margin: 0px 0px 15px;
}
.carousel-indicators [data-bs-target] {
  background: #f0efef;
  margin: 0 28px 0 0 !important;
  margin-top: -8px !important;
  height: 15px !important;
  position: relative;
  width: 19px !important;
  opacity: 1;
  border-radius: 50%;
  border: 1.6px solid #0297fe;
}
#rightbtn {
  margin: 0 0px 0 0 !important;
  margin-top: -8px !important;
}
.carousel-indicators .active {
  opacity: 1 !important;
  background: #0297fe;
  margin-top: -8px;
}
.carousel-indicators {
  background: #0297fe;
  left: 35% !important;
  margin-bottom: 30px !important;
  width: 100px !important;
  height: 2px;
}

/* here is the about us css */
.about-us-bg {
  padding: 120px 0px;
}
.abouttext .btnbook {
  padding: 6px 30px;
}
.aboutimg img {
  width: 97%;
  object-fit: cover;
  border-radius: 10px;
  height: 500px;
}
.abouttext {
  display: flex;
  flex-direction: column;
}
.proimg img {
  width: 50px;
  height: 50px;
  padding: 2px;
  border-radius: 50%;
  border: 1px solid #04498c;
}
.textpro h6 {
  font-size: 15px;
  font-weight: 600;
  margin-bottom: 5px;
  color: #04498c;
}
.abouttext .flex {
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: space-between;
}
.btnbookwhite {
  background: transparent !important;
  color: #fff !important;
  border-radius: 3px;
  padding: 6px 25px !important;
  border: 2px solid #fff !important;
}
.btnbookwhite:hover {
  color: #fff;
  background-color: #0297fe !important;
  border: 2px solid #0297fe;
  border-radius: 3px;
  padding: 6px 25px !important;
  font-weight: 600;
}
.abouttext .flex li {
  font-size: 14.94px;
  font-weight: 500;
  line-height: 24.66px;
  margin-right: 50px;
  margin-top: 7px;
}
.abouttext .flex img {
  margin-right: 15px;
}
.textpro p {
  font-size: 14px;
  margin: 0px;
}
.profi {
  display: flex;
  align-items: center;
}
.feesection {
  padding-top: 120px;
}
.feesection .abouttext {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  height: 495px;
}
.feesection .abouttext li {
  padding-bottom: 10px;
  font-size: 14px;
  font-weight: 400;
  line-height: 23.1px;
  text-align: left;
  color: #777777;
}
.feesection .abouttext h5 {
  padding-top: 0px;
}
.abouttext h4 {
  margin-bottom: 10px;
  font-size: 16px;
  font-weight: 400;
  line-height: 26.4px;
  text-align: left;
  color: #777777;
}
.abouttext h6 {
  margin: 0px;
  font-size: 16px;
  font-weight: 600;
  line-height: 26.4px;
  text-align: left;
  color: #777777;
}
/* here is the book appointment css*/
.bookappointmentbg {
  padding: 120px 0 150px;
  margin-bottom: 100px;
  background-image: url(/images/bookbg.png);
  background-size: cover;
  background-position: center;
  position: relative;
  /* background-attachment: fixed; */
}
.bookappointmentbg h3 {
  font-size: 15.88px;
  font-weight: 500;
  line-height: 26.2px;
  text-align: center;
}

.btnsection {
  width: 395px !important;
  margin: 40px auto 20px;
  display: flex;
  justify-content: space-between;
}
.adddeatilbg {
  background: #f8f8f8;
  position: absolute;
  left: 21%;
  border-radius: 5px;
  bottom: -60px;
}
.deatil {
  background: #f8f8f8;
  width: 1000px;
  margin: auto;
  box-shadow: rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;
  padding: 25px 50px;
  border-radius: 5px;
}
.deatil .flex h4 {
  font-size: 15.88px;
  font-weight: 600;
  line-height: 23.82px;
  margin: 0 0 5px 30px;
  color: #0297fe;
}
.deatil .flex p {
  font-size: 16.81px;
  font-weight: 400;
  line-height: 23.28px;
  margin: 0 0 0 30px;
  color: #777777;
}

.deatil .flex img {
  width: 51.37px;
  height: 51.37px;
}
/* here is the css of choose css */
.choosebg img {
  width: 100%;
  border-radius: 8px;
  object-fit: cover;
  height: 460px;
}

.choosebox {
  padding: 10px 15px;
  border-radius: 4px;
  margin-bottom: 20px;
  border: 1.4px solid #d3d3d3;
}
.choosebox h6 {
  font-size: 16px !important;
  font-weight: 600 !important;
  margin-bottom: 6px;
  padding: 0px;
  color: #04498c !important;
}
.choosebox p {
  font-size: 12.7px;
  font-weight: 400;
  line-height: 18px;
}

/* here is the services swiper js */

.servicesbg {
  background-image: url(/images/servicebg.png);
  padding: 120px 0px;
  background-repeat: no-repeat;
  background-size: cover;
}
.swiper {
  width: 100%;
  height: 600px;
}

.swiper-slide {
  box-shadow: rgba(0, 0, 0, 0.1) 0px 4px 12px;
  text-align: end;
  background: #fff;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 4px;
  padding-bottom: 35px;
  margin-top: 25px;
  max-height: 490px;
}
.swiper-pagination-clickable .swiper-pagination-bullet {
  background: #0297fe !important;
  width: 14px;
  margin-right: 10px !important;
  height: 14px;
}
.swiper-slide img {
  width: 100%;
}
.swiper-pagination-bullet-active {
  width: 14px !important;
  height: 14px !important;
}
.swiper-slide h3 {
  color: #04498c;
  font-size: 20.55px;
  font-weight: 600;
  padding-left: 30px;
  padding-top: 25px;
  text-align: left;
}
.swiper-slide p {
  font-size: 13.08px;
  font-weight: 400;
  padding-left: 30px;
  padding-right: 20px;
  text-align: left;
  line-height: 23px;
}
.swiper-slide a {
  font-size: 13.08px !important;
  font-weight: 500;
  text-decoration: none;
  padding-bottom: 3px;
  margin-right: 35px;
  border-bottom: 2px solid #0297fe;
  color: #0297fe !important;
}

/* here is the css of ourteam  */
.ourteam {
  padding: 120px 0;
}
.swiper2 {
  width: 100%;
  height: 270px;
  overflow: hidden;
}
.slidebox {
  background: #f4f8fb;
  padding: 40px 14px;
  max-height: 200px;
  margin-top: 25px;
  display: flex;
  flex-direction: column;
  box-shadow: none !important;
  align-content: center;
  margin-top: 0px !important;
  justify-content: center;
  align-items: center;
}
.swiperbox {
  margin-top: 0px !important;
  max-height: 200px;
  padding: 0px !important;
}
.slidebox h3 {
  color: #464646;
  padding: 0px;
  font-size: 16.42px;
  font-weight: 600;
  text-align: center;
}
.slidebox img {
  display: block;
  width: 70%;
  margin: auto;
  border: 10px solid #ffff;
  border-radius: 50%;
}
.slidebox h5 {
  color: #464646;
  font-size: 16.42px;
  font-weight: 600;
  text-align: center;
}
.slidebox .btnbook {
  display: block;
  font-size: 13px;
  margin: auto;
  width: 57%;
  padding: 1px 6px;
}
.slidebox p {
  padding-top: 11px;
  text-align: center;
  font-size: 12.5px;
  line-height: 17px;
}
.slidebox .flex img {
  border: none !important;
  margin: auto;
  width: 15px;
  object-fit: contain;
  margin-right: 25px;
  border-radius: 0px !important;
  height: 15px;
}
.slidebox ul {
  width: 47%;
  margin: auto;
}

.social {
  position: relative;
}
.social::after {
  content: "";
  position: absolute;
  width: 12px;
  background: #0297fe;
  height: 1.5px;
  top: 7.6px;
  right: 6px;
}
.swiper-pagination {
  position: relative !important;
  bottom: 25px !important;
}
/* here is the css of contact cta */

.bookcontactbg {
  padding: 120px 0;
  background-image: url(/images/bookcontact.png);
  background-size: cover;
  background-position: center;
}

.bookimg img {
  width: 100%;
}

.contactside {
  margin-top: 15px;
  box-shadow: 0px 1.87px 18.68px 0px #a3a3a340;
  padding: 16px 40px;
  border-radius: 5px;
  margin-left: 20px;
  background: #fff;
}
.form-control::placeholder {
  font-size: 14.01px;
  font-weight: 400;
  line-height: 23.12px;
  color: #bbbbbb;
}
#textarea::placeholder {
  font-size: 14.01px;
  font-weight: 400;
  line-height: 23.12px;
  color: #bbbbbb;
}
#textarea {
  padding: 10px;
  border: 1px solid #ced4da;
  border-radius: 3px;
}
.flexcontact {
  display: flex;
  justify-content: space-between;
}
.form-check-label {
  font-size: 14.01px;
  font-weight: 500;
  line-height: 23.12px;
  color: #8a8a8a;
}

/* here is the css of ournation wide  */

.ournationbg {
  padding: 120px 0;
}

/* here  is the css of faqs  */
.faqbg .accordion-item {
  padding: 10px 0px !important;
  background-color: transparent !important;
  border: none !important;
}
.faqbg {
  padding: 120px 0;
  background: #f8f9fa;
}
.accordion-button::after {
  background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='16' height='16' fill='currentColor' class='bi bi-plus' viewBox='0 0 16 16'%3E%3Cpath d='M8 4a.5.5 0 0 1 .5.5v3h3a.5.5 0 0 1 0 1h-3v3a.5.5 0 0 1-1 0v-3h-3a.5.5 0 0 1 0-1h3v-3A.5.5 0 0 1 8 4z'/%3E%3C/svg%3E");
}
.accordion-button:not(.collapsed)::after {
  background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='16' height='16' fill='white' class='bi bi-dash' viewBox='0 0 16 16'%3E%3Cpath d='M4 8a.5.5 0 0 1 .5-.5h7a.5.5 0 0 1 0 1h-7A.5.5 0 0 1 4 8z'/%3E%3C/svg%3E");
}
.accordion-button:not(.collapsed) {
  color: #ffffff;
  background: #0297fe;
  border-radius: 6px;
  box-shadow: inset 0 -1px 0 rgba(0, 0, 0, 0.125);
}
.accordion-item {
  padding: 10px 50px !important;
  background-color: transparent !important;
  border: none !important;
}
.accordion-body {
  padding: 1.6rem 5rem;
}

/* here is the css of TESTIMONIAL SECTION CSS */

.swiper3 {
  overflow: hidden;
  height: 530px;
}
.testslidebox {
  background: #f4f8fb !important;
  display: flex;
  box-shadow: 0px 1.87px 5.6px 0px #7d7d7d40;
  border-radius: 8px;
  padding: 50px 0px 10px;
  height: 430px;
  flex-direction: column;
  align-items: stretch;
}
.testslidebox img {
  margin: auto;
  display: block;
  width: 35px;
}
.testslidebox p {
  padding-top: 15px;
  font-size: 14.94px;
  font-style: italic;
  font-weight: 500;
  line-height: 28px;
  text-align: center;
  color: #777777;
  padding-bottom: 30px;
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
</style>