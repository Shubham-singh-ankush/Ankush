<template>
  <section class="login-section">
    <div class="container-fluid">
      <div class="row">
        <div class="col-md-12 col-sm-12 col-lg-6 col-xl-7 first-colm">
          <div class="inner-colm space-left">
            <div class="heading-colm">
              <h5>Hello,</h5>
              <h2>Welcome Back!</h2>
            </div>
            <div class="image-colm">
              <img src="/images/logocognition.png" alt="" />
              <p>
                Lorem Ipsum is simply dummy text of the printing and type
                setting
                <br />
                industry. Lorem Ipsum has been the industry's standard dummy
                text ever <br />
                since the 1500s.
              </p>
              <p class="login-foot">
                Lorem Ipsum <span class="space-colm">|</span> Lorem Ipsum
              </p>
            </div>
          </div>
        </div>
        <div class="col-md-12 col-sm-12 col-lg-6 col-xl-5 second-colm">
          <div class="inner-colm">
            <div class="heading-colm">
              <h4>Hello!</h4>
              <h6>Sign In To Your Account</h6>
            </div>
            <div class="form-container">
              <div class="mb-0">
                <span class="rest-cls">Reset</span>
                <p class="pass-reset">Reset to your Password</p>
                <p class="email-textt">
                  Enter your email to receive a reset link, let's access our best recommendation for you.
                </p>
              </div>
              <form @submit.prevent="resetPassword">
                <div class="mb-3">
                  <input type="email" v-model="email" class="form-control" id="email" name="email"
                    aria-describedby="emailHelp" placeholder="Enter Your email" />
                  <div v-if="!emailValid" class="text-danger">{{ errorMessages.email }}</div>
                </div>
                <div class="mb-3">
                  <button type="submit" class="btn btn-primary loginbtn mb-4">
                    Reset Now
                  </button>
                </div>
              </form>
              <div class="bakck-flex">
                <span class="backto">Back To </span>
                <router-link to="/admin/login/" class="backto forgetpass">Login</router-link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import { sendResetLinkEmail } from "../../services/admin";
export default {
  name: "ResetMailPassword",
  data() {
    return {
      email: '',
      error: null,
      emailValid: true,
      errorMessages: {
        email: "",
      },
    };
  },
  methods: {
    async resetPassword() {
      try {
        this.error = null;

        // Validate email
        if (!this.email) {
          this.emailValid = false;
          this.errorMessages.email = "Please enter your email.";
          return;
        } else {
          this.emailValid = true;
          this.errorMessages.email = "";
        }

        const formData = new FormData();
        formData.append('email', this.email);

        const response = await sendResetLinkEmail(this.email);
        
        console.log("data:", response.data);
        if (response.status === 200) {  // Check response.status instead of response.data.status
          alert(response.data.message);
        }

      } catch (error) {
        if (error.response) {
          console.error("Server error:", error.response.data);
          this.error = error.response.data.message || "An error occurred. Please try again.";
        } else {
          console.error("Network error:", error.request);
          this.error = "Network error. Please try again later.";
        }
      }
    },
  },
};
</script>


<style>
.inner-colm {
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  height: 100%;
}

.login-section .space-left {
  padding-left: 50px;
}

.first-colm {
  width: 100%;
  height: 100vh;
  background-image: url("/images/bg-image.webp");
  background-repeat: no-repeat;
  background-size: cover;
  display: flex;
  justify-content: space-between;
}

.login-section h5 {
  font-size: 39.15px !important;
  font-weight: 400 !important;
  line-height: 55px;
  letter-spacing: 0.02em;
  text-align: center;
  color: #fff !important;
  padding-top: 20px !important;
  margin-bottom: 0;
}

.login-section h2 {
  font-size: 44.04px;
  font-weight: 700 !important;
  line-height: 60px;
  letter-spacing: 0.02em;
  text-align: center;
  color: #fff !important;
}

.login-section img {
  display: block;
  width: 25%;
  margin: 0 auto;
  padding-bottom: 70px;
}

.login-section p {
  color: #fff;
  text-align: center;
  line-height: 24.75px;
}

.login-foot {
  padding-top: 70px;
}

.space-colm {
  padding: 0 10px;
}

.login-section form {
  width: 100%;
}

.login-section .form-control {
  height: 60px;
  border: none;
  background-color: #f6f6f6;
  border-radius: 10px;
  padding: 0 30px;
}

.login-section input::placeholder {
  font-size: 16px;
  font-weight: 400;
  line-height: 24px;
  letter-spacing: 0.02em;
  color: #afafaf;
}

.login-section button {
  width: 100%;
}

.login-section .second-colm {
  padding-right: 8%;
}

.login-section h4 {
  font-size: 46px;
  font-weight: 600;
  line-height: 60px;
  letter-spacing: 0.02em;
  text-align: center;
  color: #04498c;
}

.login-section h6 {
  font-size: 24px;
  font-weight: 500;
  line-height: 30px;
  letter-spacing: 0.02em;
  text-align: center;
  color: #464646;
}

.forgetpass {
  color: #0297fe;
}

.loginbtn {
  background-color: #04498c !important;
  height: 60px;
  border-radius: 10px !important;
  border: none !important;
  font-size: 20px !important;
  font-weight: 400 !important;
  line-height: 30px !important;
  letter-spacing: 0.02em;
  margin-top: 10px;
}

.loginbtn:hover {
  background-color: transparent !important;
  color: #04498c !important;
  border: 1px solid #04498c !important;
}

.form-container {
  display: flex;
  flex-direction: column;
  gap: 17px;
}

.rest-cls {
  font-size: 22px;
  font-weight: 500;
  line-height: 33px;
  letter-spacing: 0.02em;
  color: #04498c;
}

.pass-reset {
  font-size: 16px;
  font-weight: 400;
  line-height: 24px;
  letter-spacing: 0.02em;
  text-align: left !important;
  color: #464646 !important;
  padding-top: 10px;
  margin-bottom: 6px;
}

.email-textt {
  font-size: 14px !important;
  font-weight: 400;
  line-height: 21px;
  text-align: left !important;
  color: #777777 !important;
}

.backto {
  font-size: 18px !important;
  font-weight: 400;
  line-height: 27px;
  letter-spacing: 0.02em;
  text-align: left;
  color: #777777;
}

@media (max-width: 767px) {
  .login-section .space-left {
    padding-left: 0px;
  }

  .first-colm {
    height: 64vh;
    padding-top: 30px;
    padding-bottom: 30px;
  }

  .login-section h2 {
    line-height: 30px;
  }

  .login-foot {
    padding-top: 30px;
  }

  .login-section img {
    padding-bottom: 54px;
    width: 30%;
  }

  .login-section h5 {
    font-size: 25px !important;
    line-height: 40px;
    padding-top: 0px !important;
  }

  .login-section h4 {
    font-size: 25px;
    line-height: 30px;
  }

  .login-section h6 {
    font-size: 20px;
    line-height: 23px;
  }

  .login-section .second-colm {
    padding: 30px 15px;
  }

  .inner-colm {
    gap: 30px;
  }

  .login-section .form-control {
    height: 50px;
    padding: 0 20px;
  }

  .login-section input::placeholder {
    font-size: 14px;
    line-height: 20px;
  }

  .loginbtn {
    height: 50px;
    font-size: 17px !important;
  }

  .rest-cls {
    display: block;
    text-align: center;
  }

  .pass-reset {
    text-align: center !important;
  }

  .email-textt {
    text-align: center !important;
  }

  .bakck-flex {
    display: block;
    text-align: center;
  }
}

@media (min-width: 768px) and (max-width: 1023px) {
  .login-section .space-left {
    padding-left: 0px;
  }

  .first-colm {
    height: 60vh;
    background-size: auto;
  }

  .login-section h5 {
    font-size: 30px !important;
    line-height: 50px;
    padding-top: 0px !important;
  }

  .login-section h2 {
    line-height: 35px;
  }

  .login-foot {
    padding-top: 30px;
  }

  .login-section .second-colm {
    padding: 30px 20px;
  }

  .login-section h4 {
    font-size: 35px;
    line-height: 43px;
  }

  .login-section form {
    padding-top: 30px;
  }

  .rest-cls {
    display: block;
    text-align: center;
  }

  .pass-reset {
    text-align: center !important;
  }

  .email-textt {
    text-align: center !important;
  }

  .bakck-flex {
    display: block;
    text-align: center;
  }
}

@media (min-width: 1024px) and (max-width: 1279px) {
  .login-section .space-left {
    padding-left: 0px;
  }

  .login-section p br {
    display: none;
  }

  .login-section .second-colm {
    padding: 0 30px;
  }

  .inner-colm {
    justify-content: space-evenly;
  }
}

@media (min-width: 1280px) and (max-width: 1365px) {
  .login-section .space-left {
    padding-left: 0px;
    padding-right: 100px;
  }

  .login-section .second-colm {
    padding-right: 7%;
  }
}

@media (min-width: 1366px) and (max-width: 1439px) {
  .login-section .space-left {
    padding-left: 0px;
    padding-right: 100px;
  }
}

@media (min-width: 1400px) and (max-width: 1600px) {
  .login-section .space-left {
    padding-left: 0px;
    padding-right: 100px;
  }
}
</style>
