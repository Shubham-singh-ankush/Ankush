<template>
  <section class="dashboard">
    <div class="accordion" id="accordionExample">
      <div class="accordion-item">
        <h2 class="accordion-header" id="headingOne">
          <button
            class="accordion-button"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#About"
            aria-expanded="true"
            aria-controls="collapseOne"
          >
            Our Story
          </button>
        </h2>
        <div
          id="About"
          class="accordion-collapse collapse"
          aria-labelledby="headingOne"
          data-bs-parent="#accordionExample"
        >
          <div class="accordion-body">
            <div class="row">
              <div class="col-xl-2">
                <h4>Tittle</h4>
              </div>
              <div class="col-xl-10">
                <input
                  type="text"
                  class="form-control"
                  id="exampleFormControlInput1"
                  onlyread
                  placeholder="Enter Your Tittle"
                />
              </div>
              <div class="col-xl-2 mt-4">
                <h4>Heading</h4>
              </div>
              <div class="col-xl-10 mt-4">
                <input
                  type="text"
                  class="form-control"
                  id="exampleFormControlInput1"
                  onlyread
                  placeholder="Enter Your Heading"
                />
              </div>
              <div class="col-xl-2 mt-4">
                <h4>Description</h4>
              </div>
              <div class="col-xl-10 mt-4">
                <input
                  type="text"
                  class="form-control"
                  id="exampleFormControlInput1"
                  onlyread
                  placeholder="Enter Your Description"
                />
              </div>

              <div class="col-xl-2 mt-4">
                <h4>Button</h4>
              </div>
              <div class="col-xl-5 mt-4">
                <input
                  type="text"
                  class="form-control"
                  id="exampleFormControlInput1"
                  onlyread
                  placeholder="Button Content"
                />
              </div>
              <div class="col-xl-5 mt-4">
                <input
                  type="text"
                  class="form-control"
                  id="exampleFormControlInput1"
                  onlyread
                  placeholder="Button URL"
                />
              </div>

              <div class="col-xl-2 mt-4">
                <h4>Media</h4>
              </div>
              <div class="col-xl-3">
                <div class="disblock">
                  <div class="uploadbox widthchange">
                    <div class="imgbox">
                      <img src="/images/uploadimg.png" alt="" /><input
                        class="form-control"
                        type="file"
                        id="formFile"
                      />
                    </div>
                    <div class="bottombg bottomb row">
                      <div class="col-9">
                        <h6>Change Logo</h6>
                      </div>
                      <div class="col-3">
                        <img src="/images/admintrash.png" alt="" />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div class="col-xl-3">
                <div class="disblock">
                  <div class="uploadbox widthchange">
                    <div class="imgbox">
                      <img src="/images/uploadimg.png" alt="" /><input
                        class="form-control"
                        type="file"
                        id="formFile"
                      />
                    </div>
                    <div class="bottombg bottomb row">
                      <div class="col-9">
                        <h6>Change Logo</h6>
                      </div>
                      <div class="col-3">
                        <img src="/images/admintrash.png" alt="" />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="accordion-item">
        <h2 class="accordion-header" id="headingTwo">
          <button
            class="accordion-button collapsed"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#Our"
            aria-expanded="false"
            aria-controls="collapseTwo"
          >
            Our Mission
          </button>
        </h2>
        <div
          id="Our"
          class="accordion-collapse collapse"
          aria-labelledby="headingTwo"
          data-bs-parent="#accordionExample"
        >
          <div class="accordion-body">
            <div class="row">
              <div class="col-xl-2">
                <h4>Tittle</h4>
              </div>
              <div class="col-xl-10">
                <input
                  type="text"
                  class="form-control"
                  id="exampleFormControlInput1"
                  onlyread
                  placeholder="Enter Your Tittle"
                />
              </div>

              <div class="col-xl-2 mt-4">
                <h4>Media</h4>
              </div>
              <div class="col-xl-6">
                <div class="disblock">
                  <div class="uploadbox widthchange">
                    <div class="imgbox">
                      <img src="/images/uploadimg.png" alt="" /><input
                        class="form-control"
                        type="file"
                        id="formFile"
                      />
                    </div>
                    <div class="bottombg bottomb row">
                      <div class="col-9">
                        <h6>Change Logo</h6>
                      </div>
                      <div class="col-3">
                        <img src="/images/admintrash.png" alt="" />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div class="col-xl-4"></div>
              <div class="col-xl-2 mt-4">
                <h4>Icon</h4>
              </div>
              <div class="col-xl-6">
                <div class="disblock">
                  <div class="uploadbox widthchange">
                    <div class="imgbox">
                      <img src="/images/uploadimg.png" alt="" /><input
                        class="form-control"
                        type="file"
                        id="formFile"
                      />
                    </div>
                    <div class="bottombg bottomb row">
                      <div class="col-9">
                        <h6>Change Logo</h6>
                      </div>
                      <div class="col-3">
                        <img src="/images/admintrash.png" alt="" />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div class="col-xl-4"></div>
            </div>
          </div>
        </div>
      </div>
      <div class="accordion-item">
        <h2 class="accordion-header" id="headingThree">
          <button
            class="accordion-button collapsed"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#Parenting"
            aria-expanded="false"
            aria-controls="collapseThree"
          >
            Parenting Community
          </button>
        </h2>
        <div
          id="Parenting"
          class="accordion-collapse collapse"
          aria-labelledby="headingThree"
          data-bs-parent="#accordionExample"
        >
          <div class="accordion-body">
            <div class="row">
              <div class="col-xl-2">
                <h4>Heading</h4>
              </div>
              <div class="col-xl-10">
                <input
                  type="text"
                  class="form-control"
                  id="exampleFormControlInput1"
                  onlyread
                  placeholder="Enter Your Heading"
                />
              </div>
              <div class="col-xl-2 mt-4">
                <h4>Description 1</h4>
              </div>
              <div class="col-xl-10 mt-4">
                <input
                  type="text"
                  class="form-control"
                  id="exampleFormControlInput1"
                  onlyread
                  placeholder="Enter Your Description"
                />
              </div>

              <div class="col-xl-2 mt-4">
                <h4>Description 2</h4>
              </div>
              <div class="col-xl-10 mt-4">
                <input
                  type="text"
                  class="form-control"
                  id="exampleFormControlInput1"
                  onlyread
                  placeholder="Enter Your Description"
                />
              </div>
              <div class="col-xl-2 mt-4">
                <h4>Card 1</h4>
              </div>
              <div class="col-xl-5 mt-4">
                <input
                  type="text"
                  class="form-control"
                  id="exampleFormControlInput1"
                  onlyread
                  placeholder="Card Title"
                />
              </div>
              <div class="col-xl-5 mt-4">
                <input
                  type="text"
                  class="form-control"
                  id="exampleFormControlInput1"
                  onlyread
                  placeholder="Card Description"
                />
              </div>
              <div class="col-xl-2 mt-4">
                <h4>Card 2</h4>
              </div>
              <div class="col-xl-5 mt-4">
                <input
                  type="text"
                  class="form-control"
                  id="exampleFormControlInput1"
                  onlyread
                  placeholder="Card Title"
                />
              </div>
              <div class="col-xl-5 mt-4">
                <input
                  type="text"
                  class="form-control"
                  id="exampleFormControlInput1"
                  onlyread
                  placeholder="Card Description"
                />
              </div>
              <div class="col-xl-2 mt-4">
                <h4>Media</h4>
              </div>
              <div class="col-xl-6">
                <div class="disblock">
                  <div class="uploadbox widthchange">
                    <div class="imgbox">
                      <img src="/images/uploadimg.png" alt="" /><input
                        class="form-control"
                        type="file"
                        id="formFile"
                      />
                    </div>
                    <div class="bottombg bottomb row">
                      <div class="col-9">
                        <h6>Change Logo</h6>
                      </div>
                      <div class="col-3">
                        <img src="/images/admintrash.png" alt="" />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div class="footerbtn">
        <div class="checkbox">
          <input type="checkbox" id="checkbox" name="v" value="Bike" />
          <label for="vehicle1" class="ms-3"> Show On Website</label><br />
        </div>
        <div class="btnarea">
          <button class="btntrnprt">Reset</button>
          <button class="btnblue">Reset</button>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: "Home",
};
</script>
<style scoped>
.widthchange {
  width: 350px !important;
  height: 160px !important;
}
.bottomb {
  margin-top: 0px !important;
}
.btn-set {
  margin-top: 30px;
  margin-left: 0px !important;
}
</style>
