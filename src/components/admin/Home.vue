<template>
  <section class="dashboard">
    <div class="footer">
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
              About
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
                    placeholder="Button URL"
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
                    placeholder="Icon 1"
                  />
                </div>
                <div class="col-xl-5 mt-4">
                  <input
                    type="text"
                    class="form-control"
                    id="exampleFormControlInput1"
                    onlyread
                    placeholder="Heading 1"
                  />
                </div>
                <div class="col-xl-2 mt-4">
                  <h4></h4>
                </div>
                <div class="col-xl-5 mt-4 iconupdate">
                  <input
                    type="text"
                    class="form-control"
                    id="exampleFormControlInput1"
                    onlyread
                    placeholder="Icon 2"
                  />
                </div>
                <div class="col-xl-5 mt-4">
                  <input
                    type="text"
                    class="form-control"
                    id="exampleFormControlInput1"
                    onlyread
                    placeholder="Heading 2"
                  />
                </div>

                <div class="col-xl-2 mt-4">
                  <h4></h4>
                </div>
                <div class="col-xl-5 mt-4 iconupdate">
                  <input
                    type="text"
                    class="form-control"
                    id="exampleFormControlInput1"
                    onlyread
                    placeholder="Icon 3"
                  />
                </div>
                <div class="col-xl-5 mt-4">
                  <input
                    type="text"
                    class="form-control"
                    id="exampleFormControlInput1"
                    onlyread
                    placeholder="Heading 3"
                  />
                </div>
                <div class="col-xl-2 mt-4">
                  <h4></h4>
                </div>
                <div class="col-xl-5 mt-4 iconupdate">
                  <input
                    type="text"
                    class="form-control"
                    id="exampleFormControlInput1"
                    onlyread
                    placeholder="Icon 4"
                  />
                </div>
                <div class="col-xl-5 mt-4">
                  <input
                    type="text"
                    class="form-control"
                    id="exampleFormControlInput1"
                    onlyread
                    placeholder="Heading 4"
                  />
                </div>
                <div class="col-xl-2 mt-4">
                  <h4></h4>
                </div>
                <div class="col-xl-5 mt-4 iconupdate">
                  <input
                    type="text"
                    class="form-control"
                    id="exampleFormControlInput1"
                    onlyread
                    placeholder="Icon 5"
                  />
                </div>
                <div class="col-xl-5 mt-4">
                  <input
                    type="text"
                    class="form-control"
                    id="exampleFormControlInput1"
                    onlyread
                    placeholder="Heading 5"
                  />
                </div>
                <div class="col-xl-2 mt-4">
                  <h4></h4>
                </div>
                <div class="col-xl-5 mt-4 iconupdate">
                  <input
                    type="text"
                    class="form-control"
                    id="exampleFormControlInput1"
                    onlyread
                    placeholder="Icon 6"
                  />
                </div>
                <div class="col-xl-5 mt-4">
                  <input
                    type="text"
                    class="form-control"
                    id="exampleFormControlInput1"
                    onlyread
                    placeholder="Heading 6"
                  />
                </div>
                <div class="col-xl-2 mt-4">
                  <h4>Doctor Profile</h4>
                </div>
                <div class="col-xl-5 mt-4">
                  <input
                    type="text"
                    class="form-control"
                    id="exampleFormControlInput1"
                    onlyread
                    placeholder="Doctor Name"
                  />
                </div>
                <div class="col-xl-5 mt-4">
                  <input
                    type="text"
                    class="form-control"
                    id="exampleFormControlInput1"
                    onlyread
                    placeholder="Position"
                  />
                </div>
                <div class="col-xl-2"></div>
                <div class="col-xl-6">
                  <div class="disblock">
                    <div class="uploadbox widthchange">
                      <div class="imgbox">
                        <img src="/images/uploadimg.png" alt="" />
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
                  <h4>Media</h4>
                </div>
                <div class="col-xl-6">
                  <div class="disblock">
                    <div class="uploadbox widthchange">
                      <div class="imgbox">
                        <img src="/images/uploadimg.png" alt="" />
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
              data-bs-target="#Fees"
              aria-expanded="false"
              aria-controls="collapseTwo"
            >
              Fees & Pricing
            </button>
          </h2>
          <div
            id="Fees"
            class="accordion-collapse collapse"
            aria-labelledby="headingTwo"
            data-bs-parent="#accordionExample"
          >
            <div class="accordion-body">
              <div class="row">
                <div class="col-xl-2">
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
                    placeholder="Button URL"
                  />
                </div>
                <div class="col-xl-2 mt-4">
                  <h4>Card 1</h4>
                </div>
                <div class="col-xl-10 mt-4">
                  <input
                    type="text"
                    class="form-control"
                    id="exampleFormControlInput1"
                    onlyread
                    placeholder="Card Title"
                  />
                </div>
                <div class="col-xl-2 mt-4">
                  <h4></h4>
                </div>
                <div class="col-xl-5 mt-4 iconupdate">
                  <input
                    type="text"
                    class="form-control"
                    id="exampleFormControlInput1"
                    onlyread
                    placeholder="Icon 1"
                  />
                </div>
                <div class="col-xl-5 mt-4">
                  <input
                    type="text"
                    class="form-control"
                    id="exampleFormControlInput1"
                    onlyread
                    placeholder="Heading 1"
                  />
                </div>
                <div class="col-xl-2 mt-4">
                  <h4></h4>
                </div>
                <div class="col-xl-5 mt-4 iconupdate">
                  <input
                    type="text"
                    class="form-control"
                    id="exampleFormControlInput1"
                    onlyread
                    placeholder="Icon 2"
                  />
                </div>
                <div class="col-xl-5 mt-4">
                  <input
                    type="text"
                    class="form-control"
                    id="exampleFormControlInput1"
                    onlyread
                    placeholder="Heading 2"
                  />
                </div>
                <div class="col-xl-2 mt-4">
                  <h4></h4>
                </div>
                <div class="col-xl-5 mt-4 iconupdate">
                  <input
                    type="text"
                    class="form-control"
                    id="exampleFormControlInput1"
                    onlyread
                    placeholder="Icon 3"
                  />
                </div>
                <div class="col-xl-5 mt-4">
                  <input
                    type="text"
                    class="form-control"
                    id="exampleFormControlInput1"
                    onlyread
                    placeholder="Heading 3"
                  />
                </div>
                <div class="col-xl-2 mt-4">
                  <h4></h4>
                </div>
                <div class="col-xl-5 mt-4 iconupdate">
                  <input
                    type="text"
                    class="form-control"
                    id="exampleFormControlInput1"
                    onlyread
                    placeholder="Icon 4"
                  />
                </div>
                <div class="col-xl-5 mt-4">
                  <input
                    type="text"
                    class="form-control"
                    id="exampleFormControlInput1"
                    onlyread
                    placeholder="Heading 4"
                  />
                </div>
                <div class="col-xl-2 mt-4">
                  <h4></h4>
                </div>
                <div class="col-xl-5 mt-4 iconupdate">
                  <input
                    type="text"
                    class="form-control"
                    id="exampleFormControlInput1"
                    onlyread
                    placeholder="Icon 5"
                  />
                </div>
                <div class="col-xl-5 mt-4">
                  <input
                    type="text"
                    class="form-control"
                    id="exampleFormControlInput1"
                    onlyread
                    placeholder="Heading 5"
                  />
                </div>
                <div class="col-xl-2 mt-4">
                  <h4></h4>
                </div>
                <div class="col-xl-5 mt-4 iconupdate">
                  <input
                    type="text"
                    class="form-control"
                    id="exampleFormControlInput1"
                    onlyread
                    placeholder="Icon 6"
                  />
                </div>
                <div class="col-xl-5 mt-4">
                  <input
                    type="text"
                    class="form-control"
                    id="exampleFormControlInput1"
                    onlyread
                    placeholder="Heading 6"
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
                    placeholder=" Title"
                  />
                </div>
                <div class="col-xl-5 mt-4">
                  <input
                    type="text"
                    class="form-control"
                    id="exampleFormControlInput1"
                    onlyread
                    placeholder="Content"
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
                    placeholder=" Title"
                  />
                </div>
                <div class="col-xl-5 mt-4">
                  <input
                    type="text"
                    class="form-control"
                    id="exampleFormControlInput1"
                    onlyread
                    placeholder="Content"
                  />
                </div>
                <div class="col-xl-2 mt-4">
                  <h4>Media</h4>
                </div>
                <div class="col-xl-6">
                  <div class="disblock">
                    <div class="uploadbox widthchange">
                      <div class="imgbox">
                        <img src="/images/uploadimg.png" alt="" />
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
          <h2 class="accordion-header" id="headingThree">
            <button
              class="accordion-button collapsed"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#CTA"
              aria-expanded="false"
              aria-controls="collapseThree"
            >
              CTA
            </button>
          </h2>
          <div
            id="CTA"
            class="accordion-collapse collapse"
            aria-labelledby="headingThree"
            data-bs-parent="#accordionExample"
          >
            <div class="accordion-body">
              <div class="row">
                <div class="col-xl-2">
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
                  <h4>Button 1</h4>
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
                  <h4>Button 2</h4>
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
                <div class="col-xl-5 mt-4 iconupdate">
                  <input
                    type="text"
                    class="form-control"
                    id="exampleFormControlInput1"
                    onlyread
                    placeholder="Icon"
                  />
                </div>
                <div class="col-xl-2 mt-4">
                  <h4></h4>
                </div>
                <div class="col-xl-5 mt-4">
                  <input
                    type="text"
                    class="form-control"
                    id="exampleFormControlInput1"
                    onlyread
                    placeholder="Phone Number"
                  />
                </div>
                <div class="col-xl-5 mt-4">
                  <input
                    type="text"
                    class="form-control"
                    id="exampleFormControlInput1"
                    onlyread
                    placeholder="Email"
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
                    placeholder="Address"
                  />
                </div>
                <div class="col-xl-5 mt-4 iconupdate">
                  <input
                    type="text"
                    class="form-control"
                    id="exampleFormControlInput1"
                    onlyread
                    placeholder="Icon"
                  />
                </div>
                <div class="col-xl-2 mt-4">
                  <h4></h4>
                </div>
                <div class="col-xl-5 mt-4 iconupdate">
                  <input
                    type="text"
                    class="form-control"
                    id="exampleFormControlInput1"
                    onlyread
                    placeholder="City"
                  />
                </div>
                <div class="col-xl-5 mt-4">
                  <input
                    type="text"
                    class="form-control"
                    id="exampleFormControlInput1"
                    onlyread
                    placeholder="State"
                  />
                </div>
                <div class="col-xl-2 mt-4">
                  <h4></h4>
                </div>
                <div class="col-xl-5 mt-4 iconupdate">
                  <input
                    type="text"
                    class="form-control"
                    id="exampleFormControlInput1"
                    onlyread
                    placeholder="ZIP Code"
                  />
                </div>
                <div class="col-xl-5 mt-4"></div>
                <div class="col-xl-2 mt-4">
                  <h4>Card 3</h4>
                </div>
                <div class="col-xl-5 mt-4">
                  <input
                    type="text"
                    class="form-control"
                    id="exampleFormControlInput1"
                    onlyread
                    placeholder="Title"
                  />
                </div>
                <div class="col-xl-5 mt-4 iconupdate">
                  <input
                    type="text"
                    class="form-control"
                    id="exampleFormControlInput1"
                    onlyread
                    placeholder="Icon"
                  />
                </div>
                <div class="col-xl-2 mt-4">
                  <h4></h4>
                </div>
                <div class="col-xl-5 mt-4">
                  <input
                    type="text"
                    class="form-control"
                    id="exampleFormControlInput1"
                    onlyread
                    placeholder="Start Time"
                  />
                </div>
                <div class="col-xl-5 mt-4">
                  <input
                    type="text"
                    class="form-control"
                    id="exampleFormControlInput1"
                    onlyread
                    placeholder="End Time"
                  />
                </div>
                <div class="col-xl-2 mt-4"></div>
                <div class="col-xl-5 mt-4">
                  <input
                    type="text"
                    class="form-control"
                    id="exampleFormControlInput1"
                    onlyread
                    placeholder="Start Day"
                  />
                </div>
                <div class="col-xl-5 mt-4">
                  <input
                    type="text"
                    class="form-control"
                    id="exampleFormControlInput1"
                    onlyread
                    placeholder="End Day"
                  />
                </div>
                <div class="col-xl-2 mt-4">
                  <h4>Media</h4>
                </div>
                <div class="col-xl-6">
                  <div class="disblock">
                    <div class="uploadbox widthchange">
                      <div class="imgbox">
                        <img src="/images/uploadimg.png" alt="" />
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
          <h2 class="accordion-header" id="headingThree">
            <button
              class="accordion-button collapsed"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#Choose"
              aria-expanded="false"
              aria-controls="collapseThree"
            >
              Why Choose Us
            </button>
          </h2>
          <div
            id="Choose"
            class="accordion-collapse collapse"
            aria-labelledby="headingThree"
            data-bs-parent="#accordionExample"
          >
            <div class="accordion-body">
              <div class="row">
                <div class="col-xl-2">
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
                    placeholder="Heading Title 1"
                  />
                </div>
                <div class="col-xl-5 mt-4">
                  <input
                    type="text"
                    class="form-control"
                    id="exampleFormControlInput1"
                    onlyread
                    placeholder="Change Description"
                  />
                </div>
                <div class="col-xl-2 mt-4">
                  <h4></h4>
                </div>
                <div class="col-xl-5 mt-4">
                  <input
                    type="text"
                    class="form-control"
                    id="exampleFormControlInput1"
                    onlyread
                    placeholder="Heading Title 2"
                  />
                </div>
                <div class="col-xl-5 mt-4">
                  <input
                    type="text"
                    class="form-control"
                    id="exampleFormControlInput1"
                    onlyread
                    placeholder="Change Description"
                  />
                </div>
                <div class="col-xl-2 mt-4">
                  <h4></h4>
                </div>
                <div class="col-xl-5 mt-4">
                  <input
                    type="text"
                    class="form-control"
                    id="exampleFormControlInput1"
                    onlyread
                    placeholder="Heading Title 3"
                  />
                </div>
                <div class="col-xl-5 mt-4">
                  <input
                    type="text"
                    class="form-control"
                    id="exampleFormControlInput1"
                    onlyread
                    placeholder="Change Description"
                  />
                </div>
                <div class="col-xl-2 mt-4">
                  <h4></h4>
                </div>
                <div class="col-xl-5 mt-4">
                  <input
                    type="text"
                    class="form-control"
                    id="exampleFormControlInput1"
                    onlyread
                    placeholder="Heading Title 4"
                  />
                </div>
                <div class="col-xl-5 mt-4">
                  <input
                    type="text"
                    class="form-control"
                    id="exampleFormControlInput1"
                    onlyread
                    placeholder="Change Description"
                  />
                </div>
                <div class="col-xl-2 mt-4">
                  <h4>Media</h4>
                </div>
                <div class="col-xl-6">
                  <div class="disblock">
                    <div class="uploadbox widthchange">
                      <div class="imgbox">
                        <img src="/images/uploadimg.png" alt="" />
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
          <h2 class="accordion-header" id="headingThree">
            <button
              class="accordion-button collapsed"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#Services"
              aria-expanded="false"
              aria-controls="collapseThree"
            >
              Our Services
            </button>
          </h2>
          <div
            id="Services"
            class="accordion-collapse collapse"
            aria-labelledby="headingThree"
            data-bs-parent="#accordionExample"
          >
            <div class="accordion-body">
              <div class="row">
                <div class="col-xl-2">
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
                <div class="col-xl-2 mt-4">
                  <h4></h4>
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
                  <h4></h4>
                </div>
                <div class="col-xl-6">
                  <div class="disblock">
                    <div class="uploadbox widthchange">
                      <div class="imgbox">
                        <img src="/images/uploadimg.png" alt="" />
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
                <div class="col-xl-2 mt-4">
                  <h4></h4>
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
                  <h4></h4>
                </div>
                <div class="col-xl-6">
                  <div class="disblock">
                    <div class="uploadbox widthchange">
                      <div class="imgbox">
                        <img src="/images/uploadimg.png" alt="" />
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
                <div class="col-xl-2 mt-4">
                  <h4></h4>
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
                  <h4></h4>
                </div>
                <div class="col-xl-6">
                  <div class="disblock">
                    <div class="uploadbox widthchange">
                      <div class="imgbox">
                        <img src="/images/uploadimg.png" alt="" />
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
          <h2 class="accordion-header" id="headingThree">
            <button
              class="accordion-button collapsed"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#team"
              aria-expanded="false"
              aria-controls="collapseThree"
            >
              Our Team
            </button>
          </h2>
          <div
            id="team"
            class="accordion-collapse collapse"
            aria-labelledby="headingThree"
            data-bs-parent="#accordionExample"
          >
            <div class="accordion-body">
              <div class="row">
                <div class="col-xl-2">
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
                <div class="col-xl-2 mt-4">
                  <h4></h4>
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
                <div class="col-xl-2 mt-4">
                  <h4></h4>
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
                <div class="col-xl-2 mt-4">
                  <h4></h4>
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
                  <h4>Card 4</h4>
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
                <div class="col-xl-2 mt-4">
                  <h4></h4>
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
                  <h4>Card 5</h4>
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
                <div class="col-xl-2 mt-4">
                  <h4></h4>
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
                  <h4>Card 6</h4>
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
                <div class="col-xl-2 mt-4">
                  <h4></h4>
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
                  <h4>Card 7</h4>
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
                <div class="col-xl-2 mt-4">
                  <h4></h4>
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
                  <h4>Card 8</h4>
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
                <div class="col-xl-2 mt-4">
                  <h4></h4>
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
              data-bs-target="#book"
              aria-expanded="false"
              aria-controls="collapseThree"
            >
              Book An Appointment
            </button>
          </h2>
          <div
            id="book"
            class="accordion-collapse collapse"
            aria-labelledby="headingThree"
            data-bs-parent="#accordionExample"
          >
            <div class="accordion-body">
              <div class="row">
                <div class="col-xl-2">
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
                  <h4>Card 1</h4>
                </div>
                <div class="col-xl-5 mt-4">
                  <input
                    type="text"
                    class="form-control"
                    id="exampleFormControlInput1"
                    onlyread
                    placeholder="Full Name"
                  />
                </div>
                <div class="col-xl-5 mt-4">
                  <input
                    type="text"
                    class="form-control"
                    id="exampleFormControlInput1"
                    onlyread
                    placeholder="Phone Number"
                  />
                </div>
                <div class="col-xl-2 mt-4">
                  <h4></h4>
                </div>
                <div class="col-xl-5 mt-4">
                  <input
                    type="text"
                    class="form-control"
                    id="exampleFormControlInput1"
                    onlyread
                    placeholder="Email Address"
                  />
                </div>
                <div class="col-xl-5 mt-4">
                  <input
                    type="text"
                    class="form-control"
                    id="exampleFormControlInput1"
                    onlyread
                    placeholder="Please Enter Your Message"
                  />
                </div>

                <div class="col-xl-2 mt-4">
                  <h4>Card 2</h4>
                </div>
                <div class="col-xl-10 mt-4">
                  <div class="row">
                    <div class="col-xl-4">
                      <input
                        type="text"
                        class="form-control"
                        id="exampleFormControlInput1"
                        onlyread
                        placeholder="Cashless Claims"
                      />
                    </div>
                    <div class="col-xl-4">
                      <input
                        type="text"
                        class="form-control"
                        id="exampleFormControlInput1"
                        onlyread
                        placeholder="Online Consultation"
                      />
                    </div>
                    <div class="col-xl-4">
                      <input
                        type="text"
                        class="form-control"
                        id="exampleFormControlInput1"
                        onlyread
                        placeholder="World-class Facilities"
                      />
                    </div>
                  </div>
                </div>

                <div class="col-xl-2 mt-4"><h4>Media</h4></div>
                <div class="col-xl-6">
                  <div class="disblock">
                    <div class="uploadbox widthchange">
                      <div class="imgbox">
                        <img src="/images/uploadimg.png" alt="" />
                      </div>
                      <div class="bottombg bottomb row">
                        <div class="col-9"><h6>Change Logo</h6></div>
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
          <h2 class="accordion-header" id="headingThree">
            <button
              class="accordion-button collapsed"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#Nationwide"
              aria-expanded="false"
              aria-controls="collapseThree"
            >
              Our Nationwide Reach
            </button>
          </h2>
          <div
            id="Nationwide"
            class="accordion-collapse collapse"
            aria-labelledby="headingThree"
            data-bs-parent="#accordionExample"
          >
            <div class="accordion-body">
              <div class="row">
                <div class="col-xl-2">
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
                  <h4>Media</h4>
                </div>
                <div class="col-xl-6">
                  <div class="disblock">
                    <div class="uploadbox widthchange">
                      <div class="imgbox">
                        <img src="/images/uploadimg.png" alt="" />
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
          <h2 class="accordion-header" id="headingThree">
            <button
              class="accordion-button collapsed"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#faqs"
              aria-expanded="false"
              aria-controls="collapseThree"
            >
              FAQs
            </button>
          </h2>
          <div
            id="faqs"
            class="accordion-collapse collapse"
            aria-labelledby="headingThree"
            data-bs-parent="#accordionExample"
          >
            <div class="accordion-body">
              <div class="row">
                <div class="col-xl-2">
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

                <div class="col-xl-2 mt-4">
                  <h4>Card 4</h4>
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
              data-bs-target="#Testimonials"
              aria-expanded="false"
              aria-controls="collapseThree"
            >
              Testimonials
            </button>
          </h2>
          <div
            id="Testimonials"
            class="accordion-collapse collapse"
            aria-labelledby="headingThree"
            data-bs-parent="#accordionExample"
          >
            <div class="accordion-body">
              <div class="row">
                <div class="col-xl-2">
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
                  <h4>Card 1</h4>
                </div>
                <div class="col-xl-10 mt-4">
                  <input
                    type="text"
                    class="form-control"
                    id="exampleFormControlInput1"
                    onlyread
                    placeholder="Reviews"
                  />
                </div>
                <div class="col-xl-2 mt-4">
                  <h4></h4>
                </div>
                <div class="col-xl-5 mt-4">
                  <input
                    type="text"
                    class="form-control"
                    id="exampleFormControlInput1"
                    onlyread
                    placeholder="Customer Name"
                  />
                </div>

                <div class="col-xl-5 mt-4">
                  <input
                    type="text"
                    class="form-control"
                    id="exampleFormControlInput1"
                    onlyread
                    placeholder="Customer Designation"
                  />
                </div>
                <div class="col-xl-2 mt-4">
                  <h4>Icon</h4>
                </div>
                <div class="col-xl-6">
                  <div class="disblock">
                    <div class="uploadbox widthchange">
                      <div class="imgbox">
                        <img src="/images/uploadimg.png" alt="" />
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
                  <h4>Media</h4>
                </div>
                <div class="col-xl-6">
                  <div class="disblock">
                    <div class="uploadbox widthchange">
                      <div class="imgbox">
                        <img src="/images/uploadimg.png" alt="" />
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
                  <h4>Card 2</h4>
                </div>
                <div class="col-xl-10 mt-4">
                  <input
                    type="text"
                    class="form-control"
                    id="exampleFormControlInput1"
                    onlyread
                    placeholder="Reviews"
                  />
                </div>
                <div class="col-xl-2 mt-4">
                  <h4></h4>
                </div>
                <div class="col-xl-5 mt-4">
                  <input
                    type="text"
                    class="form-control"
                    id="exampleFormControlInput1"
                    onlyread
                    placeholder="Customer Name"
                  />
                </div>

                <div class="col-xl-5 mt-4">
                  <input
                    type="text"
                    class="form-control"
                    id="exampleFormControlInput1"
                    onlyread
                    placeholder="Customer Designation"
                  />
                </div>
                <div class="col-xl-2 mt-4">
                  <h4>Icon</h4>
                </div>
                <div class="col-xl-6">
                  <div class="disblock">
                    <div class="uploadbox widthchange">
                      <div class="imgbox">
                        <img src="/images/uploadimg.png" alt="" />
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
                  <h4>Media</h4>
                </div>
                <div class="col-xl-6">
                  <div class="disblock">
                    <div class="uploadbox widthchange">
                      <div class="imgbox">
                        <img src="/images/uploadimg.png" alt="" />
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
                  <h4>Card 3</h4>
                </div>
                <div class="col-xl-10 mt-4">
                  <input
                    type="text"
                    class="form-control"
                    id="exampleFormControlInput1"
                    onlyread
                    placeholder="Reviews"
                  />
                </div>
                <div class="col-xl-2 mt-4">
                  <h4></h4>
                </div>
                <div class="col-xl-5 mt-4">
                  <input
                    type="text"
                    class="form-control"
                    id="exampleFormControlInput1"
                    onlyread
                    placeholder="Customer Name"
                  />
                </div>

                <div class="col-xl-5 mt-4">
                  <input
                    type="text"
                    class="form-control"
                    id="exampleFormControlInput1"
                    onlyread
                    placeholder="Customer Designation"
                  />
                </div>
                <div class="col-xl-2 mt-4">
                  <h4>Icon</h4>
                </div>
                <div class="col-xl-6">
                  <div class="disblock">
                    <div class="uploadbox widthchange">
                      <div class="imgbox">
                        <img src="/images/uploadimg.png" alt="" />
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
                  <h4>Media</h4>
                </div>
                <div class="col-xl-6">
                  <div class="disblock">
                    <div class="uploadbox widthchange">
                      <div class="imgbox">
                        <img src="/images/uploadimg.png" alt="" />
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
                  <h4>Card 4</h4>
                </div>
                <div class="col-xl-10 mt-4">
                  <input
                    type="text"
                    class="form-control"
                    id="exampleFormControlInput1"
                    onlyread
                    placeholder="Reviews"
                  />
                </div>
                <div class="col-xl-2 mt-4">
                  <h4></h4>
                </div>
                <div class="col-xl-5 mt-4">
                  <input
                    type="text"
                    class="form-control"
                    id="exampleFormControlInput1"
                    onlyread
                    placeholder="Customer Name"
                  />
                </div>

                <div class="col-xl-5 mt-4">
                  <input
                    type="text"
                    class="form-control"
                    id="exampleFormControlInput1"
                    onlyread
                    placeholder="Customer Designation"
                  />
                </div>
                <div class="col-xl-2 mt-4">
                  <h4>Icon</h4>
                </div>
                <div class="col-xl-6">
                  <div class="disblock">
                    <div class="uploadbox widthchange">
                      <div class="imgbox">
                        <img src="/images/uploadimg.png" alt="" />
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
                  <h4>Media</h4>
                </div>
                <div class="col-xl-6">
                  <div class="disblock">
                    <div class="uploadbox widthchange">
                      <div class="imgbox">
                        <img src="/images/uploadimg.png" alt="" />
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
                  <button class="btntrnprt btn-set">
                    Add More Testimonials
                  </button>
                </div>
                <div class="col-xl-4"></div>
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
