<template>
  <section class="dashboard">
    <h5 class="heading">For Child</h5>

    <div class="accordion" id="accordionExample">
      <div class="accordion-item">
        <h2 class="accordion-header" id="headingOne">
          <button
            class="accordion-button"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#Depression"
            aria-expanded="true"
            aria-controls="collapseOne"
          >
            Depression
          </button>
        </h2>
        <div
          id="Depression"
          class="accordion-collapse collapse"
          aria-labelledby="headingOne"
          data-bs-parent="#accordionExample"
        >
          <div class="accordion-body">
            <div class="row">
              <div class="col-xl-2 mt-4">
                <h4>Tittle</h4>
              </div>
              <div class="col-xl-10 mt-4">
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
                  placeholder="Button url"
                />
              </div>

              <div class="col-xl-2 mt-4"><h4>Media</h4></div>
              <div class="col-xl-10">
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
                        <h6>Change Image</h6>
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
        <h2 class="accordion-header" id="headingOne">
          <button
            class="accordion-button"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#Causes"
            aria-expanded="true"
            aria-controls="collapseOne"
          >
            Causes
          </button>
        </h2>
        <div
          id="Causes"
          class="accordion-collapse collapse"
          aria-labelledby="headingOne"
          data-bs-parent="#accordionExample"
        >
          <div class="accordion-body">
            <div class="row">
              <div class="col-xl-2 mt-4">
                <h4>Tittle</h4>
              </div>
              <div class="col-xl-10 mt-4">
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
                  placeholder="Button url"
                />
              </div>

              <div class="col-xl-2 mt-4">
                <h4>Card 1</h4>
              </div>
              <div class="col-xl-5 mt-4 iconupdate">
                <input
                  type="text"
                  class="form-control"
                  id="exampleFormControlInput1"
                  onlyread
                  placeholder=" Heading"
                />
              </div>
              <div class="col-xl-5 mt-4">
                <input
                  type="text"
                  class="form-control"
                  id="exampleFormControlInput1"
                  onlyread
                  placeholder=" Heading "
                />
              </div>

              <div class="col-xl-2 mt-4">
                <h4>Card 2</h4>
              </div>
              <div class="col-xl-5 mt-4 iconupdate">
                <input
                  type="text"
                  class="form-control"
                  id="exampleFormControlInput1"
                  onlyread
                  placeholder=" Heading"
                />
              </div>
              <div class="col-xl-5 mt-4">
                <input
                  type="text"
                  class="form-control"
                  id="exampleFormControlInput1"
                  onlyread
                  placeholder=" Heading "
                />
              </div>

              <div class="col-xl-2 mt-4">
                <h4>Card 3</h4>
              </div>
              <div class="col-xl-5 mt-4 iconupdate">
                <input
                  type="text"
                  class="form-control"
                  id="exampleFormControlInput1"
                  onlyread
                  placeholder=" Heading"
                />
              </div>
              <div class="col-xl-5 mt-4">
                <input
                  type="text"
                  class="form-control"
                  id="exampleFormControlInput1"
                  onlyread
                  placeholder=" Heading "
                />
              </div>

              <div class="col-xl-2 mt-4">
                <h4>Card 4</h4>
              </div>
              <div class="col-xl-5 mt-4 iconupdate">
                <input
                  type="text"
                  class="form-control"
                  id="exampleFormControlInput1"
                  onlyread
                  placeholder=" Heading"
                />
              </div>
              <div class="col-xl-5 mt-4">
                <input
                  type="text"
                  class="form-control"
                  id="exampleFormControlInput1"
                  onlyread
                  placeholder=" Heading "
                />
              </div>

              <div class="col-xl-2 mt-4">
                <h4>Card 5</h4>
              </div>
              <div class="col-xl-5 mt-4 iconupdate">
                <input
                  type="text"
                  class="form-control"
                  id="exampleFormControlInput1"
                  onlyread
                  placeholder=" Heading"
                />
              </div>
              <div class="col-xl-5 mt-4">
                <input
                  type="text"
                  class="form-control"
                  id="exampleFormControlInput1"
                  onlyread
                  placeholder=" Heading "
                />
              </div>

              <div class="col-xl-2 mt-4"><h4>Media</h4></div>
              <div class="col-xl-10">
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
                        <h6>Change Image</h6>
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
        <h2 class="accordion-header" id="headingOne">
          <button
            class="accordion-button"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#Symptoms"
            aria-expanded="true"
            aria-controls="collapseOne"
          >
            Depression Symptoms
          </button>
        </h2>
        <div
          id="Symptoms"
          class="accordion-collapse collapse"
          aria-labelledby="headingOne"
          data-bs-parent="#accordionExample"
        >
          <div class="accordion-body">
            <div class="row">
              <div class="col-xl-2 mt-4">
                <h4>Tittle</h4>
              </div>
              <div class="col-xl-10 mt-4">
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
                <h4>Card 1</h4>
              </div>
              <div class="col-xl-5 mt-4">
                <input
                  type="text"
                  class="form-control"
                  id="exampleFormControlInput1"
                  onlyread
                  placeholder="Card Heading"
                />
              </div>
              <div class="col-xl-5 mt-4">
                <input
                  type="text"
                  class="form-control"
                  id="exampleFormControlInput1"
                  onlyread
                  placeholder="  Description"
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
                  placeholder="Card Heading"
                />
              </div>
              <div class="col-xl-5 mt-4">
                <input
                  type="text"
                  class="form-control"
                  id="exampleFormControlInput1"
                  onlyread
                  placeholder="  Description"
                />
              </div>

              <div class="col-xl-2 mt-4">
                <h4>Card 3</h4>
              </div>
              <div class="col-xl-5 mt-4">
                <input
                  type="text"
                  class="form-control"
                  id="exampleFormControlInput1"
                  onlyread
                  placeholder="Card Heading"
                />
              </div>
              <div class="col-xl-5 mt-4">
                <input
                  type="text"
                  class="form-control"
                  id="exampleFormControlInput1"
                  onlyread
                  placeholder="  Description"
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      <div class="accordion-item">
        <h2 class="accordion-header" id="headingOne">
          <button
            class="accordion-button"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#Our"
            aria-expanded="true"
            aria-controls="collapseOne"
          >
            Our Services
          </button>
        </h2>
        <div
          id="Our"
          class="accordion-collapse collapse"
          aria-labelledby="headingOne"
          data-bs-parent="#accordionExample"
        >
          <div class="accordion-body">
            <div class="row">
              <div class="col-xl-2 mt-4">
                <h4>Tittle</h4>
              </div>
              <div class="col-xl-10 mt-4">
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
                  placeholder="Button url"
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
                  placeholder="Heading"
                />
              </div>
              <div class="col-xl-5 mt-4">
                <input
                  type="text"
                  class="form-control"
                  id="exampleFormControlInput1"
                  onlyread
                  placeholder="Description"
                />
              </div>

              <div class="col-xl-2 mt-4"><h4> </h4></div>

              <div class="col-xl-10">
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
                      <div class="col-9"><h6>Change Image</h6></div>
                      <div class="col-3">
                        <img src="/images/admintrash.png" alt="" />
                      </div>
                    </div>
                  </div>
                </div>
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
                  placeholder="Heading"
                />
              </div>
              <div class="col-xl-5 mt-4">
                <input
                  type="text"
                  class="form-control"
                  id="exampleFormControlInput1"
                  onlyread
                  placeholder="Description"
                />
              </div>

              <div class="col-xl-2 mt-4"><h4> </h4></div>

              <div class="col-xl-10">
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
                      <div class="col-9"><h6>Change Image</h6></div>
                      <div class="col-3">
                        <img src="/images/admintrash.png" alt="" />
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div class="col-xl-2 mt-4">
                <h4>Card 3</h4>
              </div>
              <div class="col-xl-5 mt-4">
                <input
                  type="text"
                  class="form-control"
                  id="exampleFormControlInput1"
                  onlyread
                  placeholder="Heading"
                />
              </div>
              <div class="col-xl-5 mt-4">
                <input
                  type="text"
                  class="form-control"
                  id="exampleFormControlInput1"
                  onlyread
                  placeholder="Description"
                />
              </div>

              <div class="col-xl-2 mt-4"><h4> </h4></div>

              <div class="col-xl-10">
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
                      <div class="col-9"><h6>Change Image</h6></div>
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
        <h2 class="accordion-header" id="headingOne">
          <button
            class="accordion-button"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#Us"
            aria-expanded="true"
            aria-controls="collapseOne"
          >
            Why Choose Us
          </button>
        </h2>
        <div
          id="Us"
          class="accordion-collapse collapse"
          aria-labelledby="headingOne"
          data-bs-parent="#accordionExample"
        >
          <div class="accordion-body">
            <div class="row">
              <div class="col-xl-2 mt-4">
                <h4>Tittle</h4>
              </div>
              <div class="col-xl-10 mt-4">
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
                  placeholder="Button url"
                />
              </div>

              <div class="col-xl-2 mt-4">
                <h4>Card 1</h4>
              </div>
              <div class="col-xl-5 mt-4 iconupdate">
                <input
                  type="text"
                  class="form-control"
                  id="exampleFormControlInput1"
                  onlyread
                  placeholder="icon"
                />
              </div>
              <div class="col-xl-5 mt-4">
                <input
                  type="text"
                  class="form-control"
                  id="exampleFormControlInput1"
                  onlyread
                  placeholder="Heading"
                />
              </div>

              <div class="col-xl-2 mt-4">
                <h4>Card 2</h4>
              </div>
              <div class="col-xl-5 mt-4 iconupdate">
                <input
                  type="text"
                  class="form-control"
                  id="exampleFormControlInput1"
                  onlyread
                  placeholder="icon"
                />
              </div>
              <div class="col-xl-5 mt-4">
                <input
                  type="text"
                  class="form-control"
                  id="exampleFormControlInput1"
                  onlyread
                  placeholder="Heading"
                />
              </div>

              <div class="col-xl-2 mt-4">
                <h4>Card 3</h4>
              </div>
              <div class="col-xl-5 mt-4 iconupdate">
                <input
                  type="text"
                  class="form-control"
                  id="exampleFormControlInput1"
                  onlyread
                  placeholder="icon"
                />
              </div>
              <div class="col-xl-5 mt-4">
                <input
                  type="text"
                  class="form-control"
                  id="exampleFormControlInput1"
                  onlyread
                  placeholder="Heading"
                />
              </div>

              <div class="col-xl-2 mt-4">
                <h4>Card 4</h4>
              </div>
              <div class="col-xl-5 mt-4 iconupdate">
                <input
                  type="text"
                  class="form-control"
                  id="exampleFormControlInput1"
                  onlyread
                  placeholder="icon"
                />
              </div>
              <div class="col-xl-5 mt-4">
                <input
                  type="text"
                  class="form-control"
                  id="exampleFormControlInput1"
                  onlyread
                  placeholder="Heading"
                />
              </div>

              <div class="col-xl-2 mt-4">
                <h4>Card 5</h4>
              </div>
              <div class="col-xl-5 mt-4 iconupdate">
                <input
                  type="text"
                  class="form-control"
                  id="exampleFormControlInput1"
                  onlyread
                  placeholder="icon"
                />
              </div>
              <div class="col-xl-5 mt-4">
                <input
                  type="text"
                  class="form-control"
                  id="exampleFormControlInput1"
                  onlyread
                  placeholder="Heading"
                />
              </div>

              <div class="col-xl-2 mt-4">
                <h4>Card 6</h4>
              </div>
              <div class="col-xl-5 mt-4 iconupdate">
                <input
                  type="text"
                  class="form-control"
                  id="exampleFormControlInput1"
                  onlyread
                  placeholder="icon"
                />
              </div>
              <div class="col-xl-5 mt-4">
                <input
                  type="text"
                  class="form-control"
                  id="exampleFormControlInput1"
                  onlyread
                  placeholder="Heading"
                />
              </div>



              <div class="col-xl-2 mt-4"><h4>Media</h4></div>

              <div class="col-xl-10">
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
                      <div class="col-9"><h6>Change Image</h6></div>
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
        <h2 class="accordion-header" id="headingOne">
          <button
            class="accordion-button"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#CTA"
            aria-expanded="true"
            aria-controls="collapseOne"
          >
            CTA
          </button>
        </h2>
        <div
          id="CTA"
          class="accordion-collapse collapse"
          aria-labelledby="headingOne"
          data-bs-parent="#accordionExample"
        >
          <div class="accordion-body">
            <div class="row">
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
                  placeholder="Button url"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <h5 class="heading">For Adult</h5>

    <div class="accordion" id="accordionExample">
      
      <div class="accordion-item">
        <h2 class="accordion-header" id="headingOne">
          <button
            class="accordion-button"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#ression"
            aria-expanded="true"
            aria-controls="collapseOne"
          >
            Depression
          </button>
        </h2>
        <div
          id="ression"
          class="accordion-collapse collapse"
          aria-labelledby="headingOne"
          data-bs-parent="#accordionExample"
        >
          <div class="accordion-body">
            <div class="row">
              <div class="col-xl-2 mt-4">
                <h4>Tittle</h4>
              </div>
              <div class="col-xl-10 mt-4">
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
                  placeholder="Button url"
                />
              </div>

              <div class="col-xl-2 mt-4"><h4>Media</h4></div>
              <div class="col-xl-10">
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
                        <h6>Change Image</h6>
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
        <h2 class="accordion-header" id="headingOne">
          <button
            class="accordion-button"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#Cuses"
            aria-expanded="true"
            aria-controls="collapseOne"
          >
            Causes
          </button>
        </h2>
        <div
          id="Cuses"
          class="accordion-collapse collapse"
          aria-labelledby="headingOne"
          data-bs-parent="#accordionExample"
        >
          <div class="accordion-body">
            <div class="row">
              <div class="col-xl-2 mt-4">
                <h4>Tittle</h4>
              </div>
              <div class="col-xl-10 mt-4">
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
                  placeholder="Button url"
                />
              </div>

              <div class="col-xl-2 mt-4">
                <h4>Card 1</h4>
              </div>
              <div class="col-xl-5 mt-4 iconupdate">
                <input
                  type="text"
                  class="form-control"
                  id="exampleFormControlInput1"
                  onlyread
                  placeholder=" Heading"
                />
              </div>
              <div class="col-xl-5 mt-4">
                <input
                  type="text"
                  class="form-control"
                  id="exampleFormControlInput1"
                  onlyread
                  placeholder=" Heading "
                />
              </div>

              <div class="col-xl-2 mt-4">
                <h4>Card 2</h4>
              </div>
              <div class="col-xl-5 mt-4 iconupdate">
                <input
                  type="text"
                  class="form-control"
                  id="exampleFormControlInput1"
                  onlyread
                  placeholder=" Heading"
                />
              </div>
              <div class="col-xl-5 mt-4">
                <input
                  type="text"
                  class="form-control"
                  id="exampleFormControlInput1"
                  onlyread
                  placeholder=" Heading "
                />
              </div>

              <div class="col-xl-2 mt-4">
                <h4>Card 3</h4>
              </div>
              <div class="col-xl-5 mt-4 iconupdate">
                <input
                  type="text"
                  class="form-control"
                  id="exampleFormControlInput1"
                  onlyread
                  placeholder=" Heading"
                />
              </div>
              <div class="col-xl-5 mt-4">
                <input
                  type="text"
                  class="form-control"
                  id="exampleFormControlInput1"
                  onlyread
                  placeholder=" Heading "
                />
              </div>

              <div class="col-xl-2 mt-4">
                <h4>Card 4</h4>
              </div>
              <div class="col-xl-5 mt-4 iconupdate">
                <input
                  type="text"
                  class="form-control"
                  id="exampleFormControlInput1"
                  onlyread
                  placeholder=" Heading"
                />
              </div>
              <div class="col-xl-5 mt-4">
                <input
                  type="text"
                  class="form-control"
                  id="exampleFormControlInput1"
                  onlyread
                  placeholder=" Heading "
                />
              </div>

              <div class="col-xl-2 mt-4">
                <h4>Card 5</h4>
              </div>
              <div class="col-xl-5 mt-4 iconupdate">
                <input
                  type="text"
                  class="form-control"
                  id="exampleFormControlInput1"
                  onlyread
                  placeholder=" Heading"
                />
              </div>
              <div class="col-xl-5 mt-4">
                <input
                  type="text"
                  class="form-control"
                  id="exampleFormControlInput1"
                  onlyread
                  placeholder=" Heading "
                />
              </div>

              <div class="col-xl-2 mt-4"><h4>Media</h4></div>
              <div class="col-xl-10">
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
                        <h6>Change Image</h6>
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
        <h2 class="accordion-header" id="headingOne">
          <button
            class="accordion-button"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#SySymptoms"
            aria-expanded="true"
            aria-controls="collapseOne"
          >
            Depression Symptoms
          </button>
        </h2>
        <div
          id="SySymptoms"
          class="accordion-collapse collapse"
          aria-labelledby="headingOne"
          data-bs-parent="#accordionExample"
        >
          <div class="accordion-body">
            <div class="row">
              <div class="col-xl-2 mt-4">
                <h4>Tittle</h4>
              </div>
              <div class="col-xl-10 mt-4">
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
                <h4>Card 1</h4>
              </div>
              <div class="col-xl-5 mt-4">
                <input
                  type="text"
                  class="form-control"
                  id="exampleFormControlInput1"
                  onlyread
                  placeholder="Card Heading"
                />
              </div>
              <div class="col-xl-5 mt-4">
                <input
                  type="text"
                  class="form-control"
                  id="exampleFormControlInput1"
                  onlyread
                  placeholder="  Description"
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
                  placeholder="Card Heading"
                />
              </div>
              <div class="col-xl-5 mt-4">
                <input
                  type="text"
                  class="form-control"
                  id="exampleFormControlInput1"
                  onlyread
                  placeholder="  Description"
                />
              </div>

              <div class="col-xl-2 mt-4">
                <h4>Card 3</h4>
              </div>
              <div class="col-xl-5 mt-4">
                <input
                  type="text"
                  class="form-control"
                  id="exampleFormControlInput1"
                  onlyread
                  placeholder="Card Heading"
                />
              </div>
              <div class="col-xl-5 mt-4">
                <input
                  type="text"
                  class="form-control"
                  id="exampleFormControlInput1"
                  onlyread
                  placeholder="  Description"
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      <div class="accordion-item">
        <h2 class="accordion-header" id="headingOne">
          <button
            class="accordion-button"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#Services"
            aria-expanded="true"
            aria-controls="collapseOne"
          >
            Our Services
          </button>
        </h2>
        <div
          id="Services"
          class="accordion-collapse collapse"
          aria-labelledby="headingOne"
          data-bs-parent="#accordionExample"
        >
          <div class="accordion-body">
            <div class="row">
              <div class="col-xl-2 mt-4">
                <h4>Tittle</h4>
              </div>
              <div class="col-xl-10 mt-4">
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
                  placeholder="Button url"
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
                  placeholder="Heading"
                />
              </div>
              <div class="col-xl-5 mt-4">
                <input
                  type="text"
                  class="form-control"
                  id="exampleFormControlInput1"
                  onlyread
                  placeholder="Description"
                />
              </div>

              <div class="col-xl-2 mt-4"><h4> </h4></div>

              <div class="col-xl-10">
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
                      <div class="col-9"><h6>Change Image</h6></div>
                      <div class="col-3">
                        <img src="/images/admintrash.png" alt="" />
                      </div>
                    </div>
                  </div>
                </div>
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
                  placeholder="Heading"
                />
              </div>
              <div class="col-xl-5 mt-4">
                <input
                  type="text"
                  class="form-control"
                  id="exampleFormControlInput1"
                  onlyread
                  placeholder="Description"
                />
              </div>

              <div class="col-xl-2 mt-4"><h4> </h4></div>

              <div class="col-xl-10">
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
                      <div class="col-9"><h6>Change Image</h6></div>
                      <div class="col-3">
                        <img src="/images/admintrash.png" alt="" />
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div class="col-xl-2 mt-4">
                <h4>Card 3</h4>
              </div>
              <div class="col-xl-5 mt-4">
                <input
                  type="text"
                  class="form-control"
                  id="exampleFormControlInput1"
                  onlyread
                  placeholder="Heading"
                />
              </div>
              <div class="col-xl-5 mt-4">
                <input
                  type="text"
                  class="form-control"
                  id="exampleFormControlInput1"
                  onlyread
                  placeholder="Description"
                />
              </div>

              <div class="col-xl-2 mt-4"><h4> </h4></div>

              <div class="col-xl-10">
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
                      <div class="col-9"><h6>Change Image</h6></div>
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
        <h2 class="accordion-header" id="headingOne">
          <button
            class="accordion-button"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#Why"
            aria-expanded="true"
            aria-controls="collapseOne"
          >
            Why Choose Us
          </button>
        </h2>
        <div
          id="Why"
          class="accordion-collapse collapse"
          aria-labelledby="headingOne"
          data-bs-parent="#accordionExample"
        >
          <div class="accordion-body">
            <div class="row">
              <div class="col-xl-2 mt-4">
                <h4>Tittle</h4>
              </div>
              <div class="col-xl-10 mt-4">
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
                  placeholder="Button url"
                />
              </div>

              <div class="col-xl-2 mt-4">
                <h4>Card 1</h4>
              </div>
              <div class="col-xl-5 mt-4 iconupdate">
                <input
                  type="text"
                  class="form-control"
                  id="exampleFormControlInput1"
                  onlyread
                  placeholder="icon"
                />
              </div>
              <div class="col-xl-5 mt-4">
                <input
                  type="text"
                  class="form-control"
                  id="exampleFormControlInput1"
                  onlyread
                  placeholder="Heading"
                />
              </div>

              <div class="col-xl-2 mt-4">
                <h4>Card 2</h4>
              </div>
              <div class="col-xl-5 mt-4 iconupdate">
                <input
                  type="text"
                  class="form-control"
                  id="exampleFormControlInput1"
                  onlyread
                  placeholder="icon"
                />
              </div>
              <div class="col-xl-5 mt-4">
                <input
                  type="text"
                  class="form-control"
                  id="exampleFormControlInput1"
                  onlyread
                  placeholder="Heading"
                />
              </div>

              <div class="col-xl-2 mt-4">
                <h4>Card 3</h4>
              </div>
              <div class="col-xl-5 mt-4 iconupdate">
                <input
                  type="text"
                  class="form-control"
                  id="exampleFormControlInput1"
                  onlyread
                  placeholder="icon"
                />
              </div>
              <div class="col-xl-5 mt-4">
                <input
                  type="text"
                  class="form-control"
                  id="exampleFormControlInput1"
                  onlyread
                  placeholder="Heading"
                />
              </div>

              <div class="col-xl-2 mt-4">
                <h4>Card 4</h4>
              </div>
              <div class="col-xl-5 mt-4 iconupdate">
                <input
                  type="text"
                  class="form-control"
                  id="exampleFormControlInput1"
                  onlyread
                  placeholder="icon"
                />
              </div>
              <div class="col-xl-5 mt-4">
                <input
                  type="text"
                  class="form-control"
                  id="exampleFormControlInput1"
                  onlyread
                  placeholder="Heading"
                />
              </div>

              <div class="col-xl-2 mt-4">
                <h4>Card 5</h4>
              </div>
              <div class="col-xl-5 mt-4 iconupdate">
                <input
                  type="text"
                  class="form-control"
                  id="exampleFormControlInput1"
                  onlyread
                  placeholder="icon"
                />
              </div>
              <div class="col-xl-5 mt-4">
                <input
                  type="text"
                  class="form-control"
                  id="exampleFormControlInput1"
                  onlyread
                  placeholder="Heading"
                />
              </div>

              <div class="col-xl-2 mt-4">
                <h4>Card 6</h4>
              </div>
              <div class="col-xl-5 mt-4 iconupdate">
                <input
                  type="text"
                  class="form-control"
                  id="exampleFormControlInput1"
                  onlyread
                  placeholder="icon"
                />
              </div>
              <div class="col-xl-5 mt-4">
                <input
                  type="text"
                  class="form-control"
                  id="exampleFormControlInput1"
                  onlyread
                  placeholder="Heading"
                />
              </div>



              <div class="col-xl-2 mt-4"><h4>Media</h4></div>

              <div class="col-xl-10">
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
                      <div class="col-9"><h6>Change Image</h6></div>
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
        <h2 class="accordion-header" id="headingOne">
          <button
            class="accordion-button"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#CA"
            aria-expanded="true"
            aria-controls="collapseOne"
          >
            CTA
          </button>
        </h2>
        <div
          id="CA"
          class="accordion-collapse collapse"
          aria-labelledby="headingOne"
          data-bs-parent="#accordionExample"
        >
          <div class="accordion-body">
            <div class="row">
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
                  placeholder="Button url"
                />
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
  name: "ocdAdmin",
};
</script>
<style scoped>
.heading {
  font-size: 30px !important;
  color: #04498c !important;
  font-weight: 600 !important;
  line-height: 45px !important;
  margin-bottom: 35px;
  text-align: left;
}
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
