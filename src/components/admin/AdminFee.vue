<template>
  <section class="dashboard">
    <div class="accordion" id="accordionExample">
      <div class="accordion-item">
        <h2 class="accordion-header" id="headingOne">
          <button
            class="accordion-button"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#Pricing"
            aria-expanded="true"
            aria-controls="collapseOne"
          >
            Fees & Pricing
          </button>
        </h2>
        <div
          id="Pricing"
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
              <div class="col-xl-7 ">
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
        <h2 class="accordion-header" id="headingOne">
          <button
            class="accordion-button"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#Offerings"
            aria-expanded="true"
            aria-controls="collapseOne"
          >
            Service Offerings
          </button>
        </h2>
        <div
          id="Offerings"
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
                <h5>Sub-Heading 1</h5>
              </div>
              <div class="col-xl-5 mt-4">
                <input
                  type="text"
                  class="form-control"
                  id="exampleFormControlInput1"
                  onlyread
                  placeholder="Enter Your Sub-Heading"
                />
              </div>
              <div class="col-xl-5 mt-4">
                <input
                  type="text"
                  class="form-control"
                  id="exampleFormControlInput1"
                  onlyread
                  placeholder="Amount"
                />
              </div>

              <div class="col-xl-2 mt-4">
                <h5>Sub-Heading 2</h5>
              </div>
              <div class="col-xl-5 mt-4">
                <input
                  type="text"
                  class="form-control"
                  id="exampleFormControlInput1"
                  onlyread
                  placeholder="Enter Your Sub-Heading"
                />
              </div>
              <div class="col-xl-5 mt-4">
                <input
                  type="text"
                  class="form-control"
                  id="exampleFormControlInput1"
                  onlyread
                  placeholder="Amount"
                />
              </div>

              <div class="col-xl-2 mt-4">
                <h5>Sub-Heading 3</h5>
              </div>
              <div class="col-xl-5 mt-4">
                <input
                  type="text"
                  class="form-control"
                  id="exampleFormControlInput1"
                  onlyread
                  placeholder="Enter Your Sub-Heading"
                />
              </div>
              <div class="col-xl-5 mt-4">
                <input
                  type="text"
                  class="form-control"
                  id="exampleFormControlInput1"
                  onlyread
                  placeholder="Amount"
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
                <h5>Sub-Heading 1</h5>
              </div>
              <div class="col-xl-5 mt-4">
                <input
                  type="text"
                  class="form-control"
                  id="exampleFormControlInput1"
                  onlyread
                  placeholder="Enter Your Sub-Heading"
                />
              </div>
              <div class="col-xl-5 mt-4">
                <input
                  type="text"
                  class="form-control"
                  id="exampleFormControlInput1"
                  onlyread
                  placeholder="Amount"
                />
              </div>

              <div class="col-xl-2 mt-4">
                <h5>Sub-Heading 2</h5>
              </div>
              <div class="col-xl-5 mt-4">
                <input
                  type="text"
                  class="form-control"
                  id="exampleFormControlInput1"
                  onlyread
                  placeholder="Enter Your Sub-Heading"
                />
              </div>
              <div class="col-xl-5 mt-4">
                <input
                  type="text"
                  class="form-control"
                  id="exampleFormControlInput1"
                  onlyread
                  placeholder="Amount"
                />
              </div>

              <div class="col-xl-2 mt-4">
                <h5>Sub-Heading 3</h5>
              </div>
              <div class="col-xl-5 mt-4">
                <input
                  type="text"
                  class="form-control"
                  id="exampleFormControlInput1"
                  onlyread
                  placeholder="Enter Your Sub-Heading"
                />
              </div>
              <div class="col-xl-5 mt-4">
                <input
                  type="text"
                  class="form-control"
                  id="exampleFormControlInput1"
                  onlyread
                  placeholder="Amount"
                />
              </div>

              <div class="col-xl-2 mt-4">
                <h4>card 3</h4>
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
                <h5>Sub-Heading 1</h5>
              </div>
              <div class="col-xl-5 mt-4">
                <input
                  type="text"
                  class="form-control"
                  id="exampleFormControlInput1"
                  onlyread
                  placeholder="Enter Your Sub-Heading"
                />
              </div>
              <div class="col-xl-5 mt-4">
                <input
                  type="text"
                  class="form-control"
                  id="exampleFormControlInput1"
                  onlyread
                  placeholder="Amount"
                />
              </div>

              <div class="col-xl-2 mt-4">
                <h5>Sub-Heading 2</h5>
              </div>
              <div class="col-xl-5 mt-4">
                <input
                  type="text"
                  class="form-control"
                  id="exampleFormControlInput1"
                  onlyread
                  placeholder="Enter Your Sub-Heading"
                />
              </div>
              <div class="col-xl-5 mt-4">
                <input
                  type="text"
                  class="form-control"
                  id="exampleFormControlInput1"
                  onlyread
                  placeholder="Amount"
                />
              </div>

              <div class="col-xl-2 mt-4">
                <h5>Sub-Heading 3</h5>
              </div>
              <div class="col-xl-5 mt-4">
                <input
                  type="text"
                  class="form-control"
                  id="exampleFormControlInput1"
                  onlyread
                  placeholder="Enter Your Sub-Heading"
                />
              </div>
              <div class="col-xl-5 mt-4">
                <input
                  type="text"
                  class="form-control"
                  id="exampleFormControlInput1"
                  onlyread
                  placeholder="Amount"
                />
              </div>

              <div class="col-xl-2 mt-4">
                <h4>card 4</h4>
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
                <h5>Sub-Heading 1</h5>
              </div>
              <div class="col-xl-5 mt-4">
                <input
                  type="text"
                  class="form-control"
                  id="exampleFormControlInput1"
                  onlyread
                  placeholder="Enter Your Sub-Heading"
                />
              </div>
              <div class="col-xl-5 mt-4">
                <input
                  type="text"
                  class="form-control"
                  id="exampleFormControlInput1"
                  onlyread
                  placeholder="Amount"
                />
              </div>

              <div class="col-xl-2 mt-4">
                <h5>Sub-Heading 2</h5>
              </div>
              <div class="col-xl-5 mt-4">
                <input
                  type="text"
                  class="form-control"
                  id="exampleFormControlInput1"
                  onlyread
                  placeholder="Enter Your Sub-Heading"
                />
              </div>
              <div class="col-xl-5 mt-4">
                <input
                  type="text"
                  class="form-control"
                  id="exampleFormControlInput1"
                  onlyread
                  placeholder="Amount"
                />
              </div>

              <div class="col-xl-2 mt-4">
                <h5>Sub-Heading 3</h5>
              </div>
              <div class="col-xl-5 mt-4">
                <input
                  type="text"
                  class="form-control"
                  id="exampleFormControlInput1"
                  onlyread
                  placeholder="Enter Your Sub-Heading"
                />
              </div>
              <div class="col-xl-5 mt-4">
                <input
                  type="text"
                  class="form-control"
                  id="exampleFormControlInput1"
                  onlyread
                  placeholder="Amount"
                />
              </div>

              <div class="col-xl-2 mt-4">
                <h4>card 5</h4>
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
                <h5>Sub-Heading 1</h5>
              </div>
              <div class="col-xl-5 mt-4">
                <input
                  type="text"
                  class="form-control"
                  id="exampleFormControlInput1"
                  onlyread
                  placeholder="Enter Your Sub-Heading"
                />
              </div>
              <div class="col-xl-5 mt-4">
                <input
                  type="text"
                  class="form-control"
                  id="exampleFormControlInput1"
                  onlyread
                  placeholder="Amount"
                />
              </div>

              <div class="col-xl-2 mt-4">
                <h5>Sub-Heading 2</h5>
              </div>
              <div class="col-xl-5 mt-4">
                <input
                  type="text"
                  class="form-control"
                  id="exampleFormControlInput1"
                  onlyread
                  placeholder="Enter Your Sub-Heading"
                />
              </div>
              <div class="col-xl-5 mt-4">
                <input
                  type="text"
                  class="form-control"
                  id="exampleFormControlInput1"
                  onlyread
                  placeholder="Amount"
                />
              </div>

              <div class="col-xl-2 mt-4">
                <h5>Sub-Heading 3</h5>
              </div>
              <div class="col-xl-5 mt-4">
                <input
                  type="text"
                  class="form-control"
                  id="exampleFormControlInput1"
                  onlyread
                  placeholder="Enter Your Sub-Heading"
                />
              </div>
              <div class="col-xl-5 mt-4">
                <input
                  type="text"
                  class="form-control"
                  id="exampleFormControlInput1"
                  onlyread
                  placeholder="Amount"
                />
              </div>

              <div class="col-xl-2 mt-4">
                <h4>card 6</h4>
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
                <h5>Sub-Heading 1</h5>
              </div>
              <div class="col-xl-5 mt-4">
                <input
                  type="text"
                  class="form-control"
                  id="exampleFormControlInput1"
                  onlyread
                  placeholder="Enter Your Sub-Heading"
                />
              </div>
              <div class="col-xl-5 mt-4">
                <input
                  type="text"
                  class="form-control"
                  id="exampleFormControlInput1"
                  onlyread
                  placeholder="Amount"
                />
              </div>

              <div class="col-xl-2 mt-4">
                <h5>Sub-Heading 2</h5>
              </div>
              <div class="col-xl-5 mt-4">
                <input
                  type="text"
                  class="form-control"
                  id="exampleFormControlInput1"
                  onlyread
                  placeholder="Enter Your Sub-Heading"
                />
              </div>
              <div class="col-xl-5 mt-4">
                <input
                  type="text"
                  class="form-control"
                  id="exampleFormControlInput1"
                  onlyread
                  placeholder="Amount"
                />
              </div>

              <div class="col-xl-2 mt-4">
                <h5>Sub-Heading 3</h5>
              </div>
              <div class="col-xl-5 mt-4">
                <input
                  type="text"
                  class="form-control"
                  id="exampleFormControlInput1"
                  onlyread
                  placeholder="Enter Your Sub-Heading"
                />
              </div>
              <div class="col-xl-5 mt-4">
                <input
                  type="text"
                  class="form-control"
                  id="exampleFormControlInput1"
                  onlyread
                  placeholder="Amount"
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
            data-bs-target="#Insurance"
            aria-expanded="true"
            aria-controls="collapseOne"
          >
            Insurance and Payment Options
          </button>
        </h2>
        <div
          id="Insurance"
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
            Our Offerings
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
                  placeholder="Heading"
                />
              </div>

              <div class="col-xl-2 mt-4">
                <h4>Card 2</h4>
              </div>
              <div class="col-xl-10 mt-4">
                <input
                  type="text"
                  class="form-control"
                  id="exampleFormControlInput1"
                  onlyread
                  placeholder="Heading"
                />
              </div>

              <div class="col-xl-2 mt-4">
                <h4>Media</h4>
              </div>
              <div class="col-xl-7 ">
                <div class="disblock">
                  <div class="uploadbox">
                    <div class="imgbox">
                      <img src="/images/uploadimg.png" alt="" /><input
                        class="form-control"
                        type="file"
                        id="formFile"
                      />
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
                  placeholder=" Button URL"
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
