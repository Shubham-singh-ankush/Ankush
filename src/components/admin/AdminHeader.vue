<template>
  <header class="headermain">
    <div class="flexboxheader">
      <div class="logoimg"><img src="/images/logo.png" alt="" /></div>
      <div class="rightsec">
        <form class="d-flex">
          <input
            class="form-control inputhead"
            type="search"
            placeholder="Search"
            aria-label="Search"
          />
        </form>
        <div class="adminboc">
          <div class="adminame">
            <h6>Lorem Ipsum</h6>
            <p>Admin</p>
          </div>
          <div class="adminimg">
            <img src="/images/adminimg.png" alt="" />
            <button type="button" class="headbt" @click="handleLogout()">
              Logout
            </button>
          </div>
        </div>
      </div>
    </div>
    <!-- Your header content -->
  </header>
</template>
<script>
import Swal from "sweetalert2";
import { adminLogout } from "../../services/admin";

export default {
  name: "AdminHeader",
  methods: {
    async handleLogout() {
      try {
        const response = await adminLogout(); // Call the logout service
        console.log("Logout response:", response);

        Swal.fire({
          text: response.data.message || "Logout successful!",
          icon: "success",
        }).then(() => {
          localStorage.removeItem("authToken"); // Remove token from localStorage
          console.log("Token removed and redirecting to AdminLogin");
          this.$router.push({ name: "AdminLogin" }).catch((err) => {
            console.error("Router push error:", err);
          });
        });
      } catch (error) {
        Swal.fire({
          text:
            error.response?.data.message || "Logout failed. Please try again.",
          icon: "error",
        });
        console.error(
          "Logout error:",
          error.response ? error.response.data : error
        );
      }
    },
  },
};
</script>

<style scoped>
/* Your styles here */
.flexboxheader {
  display: flex;
  align-content: center;
  justify-content: space-between;
  align-items: center;
}

.adminame p {
  margin: 0px;
}

.adminame h6 {
  margin: 0px;
  color: #04498c;
  font-size: 16px;
  font-weight: 500;
  line-height: 24px;
  text-align: left;
}

.adminimg {
  padding-right: 35px;
}

.adminame {
  padding: 0px 20px;
}

.rightsec {
  display: flex;
  align-items: center;
}

.adminboc {
  display: flex;
  align-items: center;
}
.headbt {
  margin-left: 15px !important;
  color: #fff !important;
  border-radius: 5px;
  padding: 7px 20px !important;
  background: #04498c !important;
  border: #04498c !important;
}
.headermain {
  z-index: 999999;
  top: 0px;
  padding: 10px 50px 10px 40px;
  position: sticky;
  box-shadow: 0px 4px 10px 0px #acacac40;
  max-height: 80px;
  background: #fff !important;
}

.adminimg img {
  max-height: 60px;
  width: auto;
}

.logoimg img {
  max-height: 60px;
  width: auto;
}
</style>
