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
            <form class="form-container" @submit.prevent="changePassword">
              <span class="mb-2 rest-cls">Change Password</span>
              <div class="mb-3 passbrd">
                <input type="password" v-model="password" class="form-control" id="password" name="password" placeholder="New Password" />
                <i class="fas" @click="toggleShow" :class="{
                  'fa-eye': showPassword,
                  'fa-eye-slash': !showPassword,
                }"></i>
                <div v-if="!passwordValid" class="text-danger">{{ errorMessages.password }}</div>
              </div>
              <div class="mb-3 passbrd">
                <input type="password" v-model="confirm_password" class="form-control" id="confirm_password" name="confirm_password" placeholder="Confirm Password" />
                <i class="fas" @click="toggleShow2" :class="{
                  'fa-eye': showConfPassword,
                  'fa-eye-slash': !showConfPassword,
                }"></i>
                <div v-if="!confirmPasswordValid" class="text-danger">{{ errorMessages.confirm_password }}</div>
              </div>
              <div class="mb-3">
                <button type="submit" class="btn btn-primary loginbtn mb-4">
                  Change Password
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
  </section>
</template>


<script>
import axios from "axios";

export default {
  name: "ResetPassword",
  data() {
    return {
      password: '',
      confirm_password: '',
      error: null,
      email: this.$route.query.email, // Capture email from URL query parameter
      showPassword: false,
      showConfPassword: false,
      passwordValid: true,
      confirmPasswordValid: true,
      errorMessages: {
        password: "",
        confirm_password: "",
      },
    };
  },
  methods: {
    async changePassword() {
      // Reset error messages
      this.errorMessages.password = "";
      this.errorMessages.confirm_password = "";

      // Validate password
      if (!this.password) {
        this.passwordValid = false;
        this.errorMessages.password = "Please enter your password.";
        return;
      } else if (this.password.length < 8) {
        this.passwordValid = false;
        this.errorMessages.password = "Password must be at least 8 characters long.";
        return;
      } else {
        this.passwordValid = true;
      }

      // Validate confirm password
      if (this.password !== this.confirm_password) {
        this.confirmPasswordValid = false;
        this.errorMessages.confirm_password = "Passwords do not match.";
        return;
      } else {
        this.confirmPasswordValid = true;
      }

      try {
        const response = await axios.post("/api/password/update", {
          email: this.email,
          password: this.password,
          password_confirmation: this.confirm_password,
        });

        Swal.fire({
          text: response.data.message || "Password updated successfully!",
          icon: "success",
        }).then((result) => {
          if (result.isConfirmed) {
            this.$router.push({ name: "AdminLogin" });
          }
        });
      } catch (error) {
        if (error.response) {
          Swal.fire({
            text: error.response.data.message || "Password update failed. Please try again.",
            icon: "error",
          });
          console.error("Server error:", error.response.data);
          this.error = error.response.data.message || "Password update failed. Please try again.";
        } else {
          Swal.fire({
            text: "Network error. Please try again later.",
            icon: "error",
          });
          console.error("Network error:", error.request);
          this.error = "Network error. Please try again later.";
        }
      }
    },

    toggleShow() {
      this.showPassword = !this.showPassword;
      document.getElementById("password").type = this.showPassword ? "text" : "password";
    },
    toggleShow2() {
      this.showConfPassword = !this.showConfPassword;
      document.getElementById("confirm_password").type = this.showConfPassword ? "text" : "password";
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
  /* padding-left: 7% !important; */
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

.login-section .flex-colm {
  display: flex;
  justify-content: space-between;
  padding-left: 10px;
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

.passbrd {
  position: relative !important;
}

.fas {
  color: #0297fe;
  position: absolute;
  top: 35%;
  right: 5%;
}

.signIn {
  font-weight: 400;
  line-height: 24px;
  letter-spacing: 0.02em;
  color: #777777;
}

.forgetpass {
  color: #0297fe;
}

.form-check-label {
  font-size: 18px;
}

#exampleCheck1 {
  width: 23px;
  height: 23px;
  border: 2px solid #777;
  border-radius: 4px;
  margin-left: 1px;
}

.form-check {
  display: flex !important;
  align-items: center;
  gap: 16px;
  padding-left: 10px !important;
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

  .signIn {
    font-size: 14px;
  }

  .form-check-label {
    font-size: 15px;
  }

  .loginbtn {
    height: 50px;
    font-size: 17px !important;
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
