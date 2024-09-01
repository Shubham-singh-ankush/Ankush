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
  <!-- here is blog all layout start -->
  <section class="bloglayout">
    <div class="container">
      <div class="row">
        <div class="col-lg-12 col-xl-3">
          <div class="firstborder">
            <h5 class="pt-0">Blog</h5>
            <h2>Our Latest Blogs</h2>
          </div>
        </div>
        <div class="col-xl-7 col-lg-9">
          <div class="blofflex">
            <p>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled it to make a type specimen book.
            </p>
          </div>
        </div>
        <div class="col-xl-2 col-lg-3">
          <div class="blofflex">
            <button class="btnbook">Contact Us</button>
          </div>
        </div>
      </div>
      <div class="row headersaprate">
        <div class="col-lg-3">
          <div class="cotegryboxbg">
            <div class="categorybox">
              <h4>Categories</h4>
            </div>
            <ul>
              <li>Child ADHD</li>
              <li>Adult ADHD</li>
              <li>Child Autism</li>
              <li>Adult Autism</li>
              <li>Child OCD</li>
              <li>Adult OCD</li>
              <li>Child Depressions</li>
              <li>Adult Depressions</li>
              <li>Child Anxiety</li>
              <li>Adult Anxiety</li>
              <li>Sleep Disorder</li>
              <li>Tics</li>
            </ul>
          </div>
        </div>
        <div class="col-lg-9">
          <div class="row">
            <div class="col-lg-12 col-xl-6 col-md-12 col-sm-12">
              <router-link to="/blogs/inner-blogs">
                <div class="blogbox">
                  <img src="/images/blog1.png" alt="" />
                  <div class="blogtext">
                    <div class="iconboc d-flex">
                      <div class="innericon">
                        <img src="/images/blogicon.png" alt="" />
                        <p>Lorem Ipsum</p>
                      </div>
                      <div class="innericon2 ps-2">
                        <img src="/images/blogicon2.png" alt="" />
                        <p>July 01, 2024</p>
                      </div>
                    </div>
                    <h3>Lorem Ipsum Dolor Text</h3>
                    <p>
                      Lorem Ipsum is simply dummy text of the printing and type
                      setting industry. Lorem Ipsum has been the industry's
                      standard dummy text ever since the 1500s, when an unknown
                      printer took a galley of type and scrambled it to make a
                      type specimen book.
                    </p>
                  </div>
                </div>
              </router-link>
            </div>
            <div class="col-lg-12 col-xl-6 col-md-12 col-sm-12">
              <router-link to="/blogs/inner-blogs"
                ><div class="blogbox">
                  <img src="/images/blog2.png" alt="" />
                  <div class="blogtext">
                    <div class="iconboc d-flex">
                      <div class="innericon">
                        <img src="/images/blogicon.png" alt="" />
                        <p>Lorem Ipsum</p>
                      </div>
                      <div class="innericon2 ps-2">
                        <img src="/images/blogicon2.png" alt="" />
                        <p>July 01, 2024</p>
                      </div>
                    </div>
                    <h3>Lorem Ipsum Dolor Text</h3>
                    <p>
                      Lorem Ipsum is simply dummy text of the printing and type
                      setting industry. Lorem Ipsum has been the industry's
                      standard dummy text ever since the 1500s, when an unknown
                      printer took a galley of type and scrambled it to make a
                      type specimen book.
                    </p>
                  </div>
                </div></router-link
              >
            </div>
            <div class="col-lg-12 col-xl-6 col-md-12 col-sm-12">
              <router-link to="/blogs/inner-blogs">
                <div class="blogbox">
                  <img src="/images/blog3.png" alt="" />
                  <div class="blogtext">
                    <div class="iconboc d-flex">
                      <div class="innericon">
                        <img src="/images/blogicon.png" alt="" />
                        <p>Lorem Ipsum</p>
                      </div>
                      <div class="innericon2 ps-2">
                        <img src="/images/blogicon2.png" alt="" />
                        <p>July 01, 2024</p>
                      </div>
                    </div>
                    <h3>Lorem Ipsum Dolor Text</h3>
                    <p>
                      Lorem Ipsum is simply dummy text of the printing and type
                      setting industry. Lorem Ipsum has been the industry's
                      standard dummy text ever since the 1500s, when an unknown
                      printer took a galley of type and scrambled it to make a
                      type specimen book.
                    </p>
                  </div>
                </div></router-link
              >
            </div>
            <div class="col-lg-12 col-xl-6 col-md-12 col-sm-12">
              <router-link to="/blogs/inner-blogs">
                <div class="blogbox">
                  <img src="/images/blog4.png" alt="" />
                  <div class="blogtext">
                    <div class="iconboc d-flex">
                      <div class="innericon">
                        <img src="/images/blogicon.png" alt="" />
                        <p>Lorem Ipsum</p>
                      </div>
                      <div class="innericon2 ps-2">
                        <img src="/images/blogicon2.png" alt="" />
                        <p>July 01, 2024</p>
                      </div>
                    </div>
                    <h3>Lorem Ipsum Dolor Text</h3>
                    <p>
                      Lorem Ipsum is simply dummy text of the printing and type
                      setting industry. Lorem Ipsum has been the industry's
                      standard dummy text ever since the 1500s, when an unknown
                      printer took a galley of type and scrambled it to make a
                      type specimen book.
                    </p>
                  </div>
                </div></router-link
              >
            </div>
            <div class="col-lg-12 col-xl-6 col-md-12 col-sm-12">
              <router-link to="/blogs/inner-blogs"
                ><div class="blogbox">
                  <img src="/images/blog5.png" alt="" />
                  <div class="blogtext">
                    <div class="iconboc d-flex">
                      <div class="innericon">
                        <img src="/images/blogicon.png" alt="" />
                        <p>Lorem Ipsum</p>
                      </div>
                      <div class="innericon2 ps-2">
                        <img src="/images/blogicon2.png" alt="" />
                        <p>July 01, 2024</p>
                      </div>
                    </div>
                    <h3>Lorem Ipsum Dolor Text</h3>
                    <p>
                      Lorem Ipsum is simply dummy text of the printing and type
                      setting industry. Lorem Ipsum has been the industry's
                      standard dummy text ever since the 1500s, when an unknown
                      printer took a galley of type and scrambled it to make a
                      type specimen book.
                    </p>
                  </div>
                </div></router-link
              >
            </div>
            <div class="col-lg-12 col-xl-6 col-md-12 col-sm-12">
              <router-link to="/blogs/inner-blogs">
                <div class="blogbox">
                  <img src="/images/blog6.png" alt="" />
                  <div class="blogtext">
                    <div class="iconboc d-flex">
                      <div class="innericon">
                        <img src="/images/blogicon.png" alt="" />
                        <p>Lorem Ipsum</p>
                      </div>
                      <div class="innericon2 ps-2">
                        <img src="/images/blogicon2.png" alt="" />
                        <p>July 01, 2024</p>
                      </div>
                    </div>
                    <h3>Lorem Ipsum Dolor Text</h3>
                    <p>
                      Lorem Ipsum is simply dummy text of the printing and type
                      setting industry. Lorem Ipsum has been the industry's
                      standard dummy text ever since the 1500s, when an unknown
                      printer took a galley of type and scrambled it to make a
                      type specimen book.
                    </p>
                  </div>
                </div></router-link
              >
            </div>
            <div class="col-lg-12 col-xl-6 col-md-12 col-sm-12">
              <router-link to="/blogs/inner-blogs">
                <div class="blogbox">
                  <img src="/images/blog7.png" alt="" />
                  <div class="blogtext">
                    <div class="iconboc d-flex">
                      <div class="innericon">
                        <img src="/images/blogicon.png" alt="" />
                        <p>Lorem Ipsum</p>
                      </div>
                      <div class="innericon2 ps-2">
                        <img src="/images/blogicon2.png" alt="" />
                        <p>July 01, 2024</p>
                      </div>
                    </div>
                    <h3>Lorem Ipsum Dolor Text</h3>
                    <p>
                      Lorem Ipsum is simply dummy text of the printing and type
                      setting industry. Lorem Ipsum has been the industry's
                      standard dummy text ever since the 1500s, when an unknown
                      printer took a galley of type and scrambled it to make a
                      type specimen book.
                    </p>
                  </div>
                </div></router-link
              >
            </div>
            <div class="col-lg-12 col-xl-6 col-md-12 col-sm-12">
              <router-link to="/blogs/inner-blogs">
                <div class="blogbox">
                  <img src="/images/blog8.png" alt="" />
                  <div class="blogtext">
                    <div class="iconboc d-flex">
                      <div class="innericon">
                        <img src="/images/blogicon.png" alt="" />
                        <p>Lorem Ipsum</p>
                      </div>
                      <div class="innericon2 ps-2">
                        <img src="/images/blogicon2.png" alt="" />
                        <p>July 01, 2024</p>
                      </div>
                    </div>
                    <h3>Lorem Ipsum Dolor Text</h3>
                    <p>
                      Lorem Ipsum is simply dummy text of the printing and type
                      setting industry. Lorem Ipsum has been the industry's
                      standard dummy text ever since the 1500s, when an unknown
                      printer took a galley of type and scrambled it to make a
                      type specimen book.
                    </p>
                  </div>
                </div></router-link
              >
            </div>
            <div class="pegination">
              <nav aria-label="Page navigation example">
                <ul class="pagination">
                  <li class="page-item">
                    <a class="page-link" href="#" aria-label="Previous">
                      <span aria-hidden="true">&laquo;</span>
                    </a>
                  </li>
                  <li class="page-item"><a class="page-link" href="#">1</a></li>
                  <li class="page-item"><a class="page-link" href="#">2</a></li>
                  <li class="page-item"><a class="page-link" href="#">3</a></li>
                  <li class="page-item">
                    <a class="page-link" href="#" aria-label="Next">
                      <span aria-hidden="true">&raquo;</span>
                    </a>
                  </li>
                </ul>
              </nav>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
  <!-- here is blog all layout end -->
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
<style scoped>
.bloglayout {
  padding: 120px 0;
}
.firstborder h2 {
  margin: 0px;
}
.firstborder {
  border-right: 2.6px solid #0297fe;
}
.pegination {
  width: 19%;
  margin: 25px auto 0px;
}
.pagination .page-item a.page-link {
  color: #0297fe !important;
}
.page .pagination {
  border: 2px solid #0297fe !important;
}
.cotegryboxbg {
  box-shadow: 0px 1px 15px 0px #8f8f8f40;
  position: sticky;
  top: 80px;
  bottom: 80px;
  border-radius: 0px 0px 5px 5px;
}
.blofflex {
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  height: 70px;
  justify-content: center;
}
.blofflex p {
  margin: 0px !important;
}
.cotegryboxbg ul {
  padding: 20px 20px !important;
  margin-bottom: 0px;
}
.cotegryboxbg ul li {
  font-size: 18px;
  font-weight: 500;
  text-decoration: underline;
  line-height: 27px;
  text-align: left;
  padding-top: 14px !important;
}
.categorybox {
  background: linear-gradient(180deg, #0297fe 0%, #04498c 100%);
  border-radius: 5px 5px 0px 0px;
  padding: 15px;
  color: #fff;
}
.categorybox h4 {
  margin: 0px !important;
}
.headersaprate {
  margin-top: 50px;
}
.blogbox img {
  width: 100%;
}
.blogbox {
  margin: 10px 10px 25px;
  box-shadow: 0px 0px 9px 0px #98989840 !important;
}
.blogbox h3 {
  padding-top: 20px;
  width: 100%;
  color: #04498c;
  border-bottom: 2px solid #04498c;
  padding-bottom: 15px;
  font-size: 26px;
  font-weight: 500;
  line-height: 32.78px;
  text-align: left;
}
.blogtext {
  padding: 30px 20px;
}
.innericon {
  border-right: 1px solid grey;
  padding-right: 20px;
}
.innericon2 {
  padding-left: 20px !important;
}
.innericon p,
.innericon2 p {
  color: #464646;
  padding: 0px !important;
}
.innericon,
.innericon2 {
  display: flex;
}
.blogtext p {
  font-size: 15px;
  font-weight: 400;
  line-height: 22.5px;
  text-align: justified;
  color: #777777;
  padding-top: 10px;
  margin: 0px;
}
.innericon img,
.innericon2 img {
  width: 20px;
  margin-right: 15px;
  height: 20px;
}

/* """""""""""""""""""""""""""here is the css of the media query"""""'""""""""""""""""""""""' */

@media (max-width: 767px) {
  .bloglayout {
    padding: 60px 0;
  }
  .col-lg-7 .blofflex {
    height: 150px;
  }
  .blofflex .btnbook {
    margin: 10px auto 0px;
  }
  .blogbox {
    margin: 35px 0px 15px;
  }
  .blogtext p {
    text-align: center !important;
  }
  .blogtext {
    display: flex;
    flex-direction: column;
    align-content: center;
    align-items: center;
  }
  .blogbox h3 {
    text-align: center;
  }
  .pegination {
    width: 43%;
  }
  .firstborder {
    border-right: none !important;
  }
  .bookbtncta {
    width: 48%;
  }
}

@media (min-width: 768px) and (max-width: 1023px) {
  .bloglayout {
    padding: 60px 0;
  }
  .blofflex {
    height: 104px;
    align-items: flex-start !important;
  }

  .blofflex .btnbook {
    margin: 10px auto 0px;
  }
  .blogbox {
    margin: 35px 0px 15px;
  }
  .blogtext p {
    text-align: center !important;
  }
  .blogtext {
    display: flex;
    flex-direction: column;
    align-content: center;
    align-items: center;
  }
  .blogbox h3 {
    text-align: center;
  }
  .pegination {
    width: 24%;
  }
  .firstborder {
    border-right: none !important;
  }
  .bookbtncta {
    width: 48%;
  }
}
</style>
<script>
export default {
  name: "Blogs",
  data() {
    return {
      items: [
        {
          image: "images/blogbannerbg.png",
          title: "Blog",
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
