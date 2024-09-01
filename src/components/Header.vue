<template>
  <header>
    <nav class="navbar navbar-expand-lg bg-body-tertiary">
      <div class="container">
        <a class="navbar-brand" href="/"><img src="/images/logo.png" alt="Logo" /></a>
        <button
          class="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse mainnav" id="navbarSupportedContent">
          <ul class="navbar-nav me-1 ms-auto mb-2 mb-lg-0">
            <li class="nav-item">
              <router-link to="/" class="nav-link active" aria-current="page">Home</router-link>
            </li>
            <li class="nav-item dropdown">
              <a
                class="nav-link dropdown-toggle"
                href="#"
                id="navbarDropdownAbout"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                About +
              </a>
              <ul class="dropdown-menu" aria-labelledby="navbarDropdownAbout">
                <li><router-link to="/about" class="dropdown-item">About Us</router-link></li>
                <li><router-link to="/our-approach" class="dropdown-item">Our Approach</router-link></li>
                <li><router-link to="/our-consultation" class="dropdown-item">Our Consultants</router-link></li>
                <li><router-link to="/#" class="dropdown-item">Leadership Team</router-link></li>
                <li><router-link to="/accrediation" class="dropdown-item">Accreditation & Certification</router-link></li>
              </ul>
            </li>
            <li class="nav-item dropdown">
              <a
                class="nav-link dropdown-toggle"
                href="#"
                id="navbarDropdownTreatment"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                Treatment & Conditions +
              </a>
              <ul class="dropdown-menu" aria-labelledby="navbarDropdownTreatment">
                <li><router-link to="/treatment-conditions" class="dropdown-item">Treatment & Conditions</router-link></li>
                <li><router-link to="/adhd" class="dropdown-item">ADHD</router-link></li>
                <li><router-link to="/autism" class="dropdown-item">Autism</router-link></li>
                <li><router-link to="/ocd" class="dropdown-item">OCD</router-link></li>
                <li><router-link to="/depressions" class="dropdown-item">Depression</router-link></li>
                <li><router-link to="/anxiety" class="dropdown-item">Anxiety</router-link></li>
                <li><router-link to="/sleep-disorders" class="dropdown-item">Sleep Disorders</router-link></li>
                <li><router-link to="/tics" class="dropdown-item">Tics</router-link></li>
              </ul>
            </li>
            <li class="nav-item dropdown">
              <a
                class="nav-link dropdown-toggle"
                href="#"
                id="navbarDropdownSupport"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                Parent Support Group +
              </a>
              <ul class="dropdown-menu" aria-labelledby="navbarDropdownSupport">
                <li><router-link to="/" class="dropdown-item">Parent Support Group</router-link></li>
                <li><router-link to="/" class="dropdown-item">ADHDs</router-link></li>
                <li><router-link to="/" class="dropdown-item">Autisms</router-link></li>
              </ul>
            </li>
            <li class="nav-item">
              <router-link class="nav-link" to="/assessment" id="navbarDropdown">Diagnosis & Assessment</router-link>
            </li>
            <li class="nav-item">
              <router-link class="nav-link" to="/blog" id="navbarDropdown">Blog</router-link>
            </li>
            <li class="nav-item">
              <router-link class="nav-link" to="/fee" id="navbarDropdown">Fees</router-link>
            </li>
            <li class="nav-item">
              <router-link class="nav-link" to="/contact" id="navbarDropdown">Contact</router-link>
            </li>
            <button class="btn btnsubm" type="submit">
              <img src="/images/search.png" alt="Search" />
            </button>
          </ul>
          <button class="btnbook" href="#">Book Now</button>
        </div>
      </div>
    </nav>
  </header>
</template>

<script>
export default {
  name: "Header",
};
</script>

<style scoped>
.btnbook {
  padding: 6px 6px !important;
}
</style>
