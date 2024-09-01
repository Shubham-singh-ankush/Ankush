<template>
  <section class="dashboard">
    <div class="accordion" id="accordionExample">
      <div class="accordion-item">
        <h2 class="accordion-header" id="headingOne">
          <button
            class="accordion-button"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#ADHD"
            aria-expanded="true"
            aria-controls="collapseOne"
          >
            ADHD
          </button>
        </h2>
        <div
          id="ADHD"
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
                <h4>URL</h4>
              </div>
              <div class="col-xl-10 mt-4">
                <input
                  type="text"
                  class="form-control"
                  id="exampleFormControlInput1"
                  onlyread
                  placeholder="Enter Your URL"
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
            data-bs-target="#Autism"
            aria-expanded="true"
            aria-controls="collapseOne"
          >
          Autism
          </button>
        </h2>
        <div
          id="Autism"
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
                <h4>URL</h4>
              </div>
              <div class="col-xl-10 mt-4">
                <input
                  type="text"
                  class="form-control"
                  id="exampleFormControlInput1"
                  onlyread
                  placeholder="Enter Your URL"
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
