<template>
  <footer class="footerbg">
    <div class="container">
      <div class="row ftborder">
        <div class="col-md-6 col-lg-4 col-sm-12">
          <div class="first-columnsub">
            <h3>Subscribe To Our Newsletter</h3>
          </div>
        </div>
        <div class="col-md-6 col-lg-5 col-sm-12">
          <div class="secound-column">
            <form>
              <div class="form-group">
                <input
                  type="email"
                  class="form-control"
                  id="exampleInputEmail1"
                  aria-describedby="emailHelp"
                  placeholder="Enter Your Email"
                />
                <button type="submit" id="btnsub" class="btn btn-primary">
                  Submit
                </button>
              </div>
            </form>
          </div>
        </div>
        <div class="col-md-12 col-lg-3 col-sm-12 mx-auto">
          <div class="third-column flex">
            <h4>Follow Us -</h4>
            <a href="#"><img src="/images/social.png" alt="" /></a>
            <a href="#"><img src="/images/social2.png" alt="" /></a>
            <a href="#"><img src="/images/social3.png" alt="" /></a>
            <a href="#"><img src="/images/social4.png" alt="" /></a>
          </div>
        </div>
      </div>
      <div class="row ftborder mt-5">
        <div class="col-md-5 col-lg-3 col-sm-12">
          <div class="first-column">
            <img src="/images/logo.png" alt="" />
            <p>
              Lorem Ipsum is simply dummy text of the printing and type setting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s.
            </p>
          </div>
        </div>
        <div class="col-md-7 col-lg-2 col-sm-12">
          <div class="secound-column">
            <h2>Quick Links</h2>
            <ul>
              <li><a href="#">Home</a></li>
              <li><a href="#">About Us</a></li>
              <li><a href="#">Our Services</a></li>
              <li><a href="#">Why Choose Us</a></li>
              <li><a href="#">Contact US</a></li>
            </ul>
          </div>
        </div>
        <div class="col-md-5 col-lg-3 col-sm-12">
          <div class="third-column margi-set">
            <h2>Contact</h2>
            <ul>
              <li><img src="/images/callft.png" alt="" />+91 987-654-3210</li>
              <li><img src="/images/emailft.png" alt="" />example@xyz.com</li>
              <li>
                <img src="/images/mapft.png" alt="" />123, Xyz City, Example
                State
              </li>
              <li>
                <img src="/images/clockft.png" alt="" />9:00 AM - 8:00 PM Mon To
                Sat
              </li>
            </ul>
          </div>
        </div>
        <div class="col-md-7 col-lg-4 col-sm-12">
          <div class="fourth-column">
            <h2>Recent News</h2>
            <div class="flex mt-3">
              <img src="/images/footer.png" alt="" />
              <div>
                <ul class="flex">
                  <li>
                    <img src="/images/calender.png" alt="" /> March 1, 2024
                  </li>
                  <li><img src="/images/comment.png" alt="" />0</li>
                </ul>
                <p>The best recreation areas for general immunity</p>
              </div>
            </div>
            <div class="flex mt-3">
              <img src="/images/footer2.png" alt="" />
              <div>
                <ul class="flex">
                  <li>
                    <img src="/images/calender.png" alt="" /> March 1, 2024
                  </li>
                  <li><img src="/images/comment.png" alt="" />0</li>
                </ul>
                <p>The best recreation areas for general immunity</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="row">
        <p class="text-center pt-3">
          © Cognition Care 2024, All Rights Reserved. Designed by – Vcana
          Global, Inc
        </p>
      </div>
    </div>
  </footer>
</template>

<script>
export default {
  name: "Footer",
};
</script>

<style scoped></style>
