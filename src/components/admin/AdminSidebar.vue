<template>
  <aside>
    <div class="sidebarbox">
      <div :class="['sidebar', sidebarState]" id="mySidebar">
        <router-link to="/admin/dashboard"
          ><img src="/images/aside1.png" alt="" />
          <span>Dashboard</span></router-link
        >
        <router-link to="/admin/header"
          ><img src="/images/aside2.png" alt="" />
          <span>Header</span></router-link
        >
        <!-- <router-link to="/admin/header" >
            <img src="/images/aside7.png" alt="" />
            <span>Header Section</span>
            <img class="ps-2" @click.prevent="toggleDropdownCate" src="/images/arrowdrop.png" alt="" />
          </router-link>
          <ul class="menudropcs" v-if="isShowingCate">
            <li><router-link to="/admin/tab-sections">Tab Sections</router-link></li>
            <li><router-link to="/admin/sub-tab-sections">Sub Sections</router-link></li>
          </ul> -->
        <router-link to="/admin/footer"
          ><img src="/images/aside3.png" alt="" />
          <span>Footer</span></router-link
        >
        <router-link to="/fee"
          ><img src="/images/aside44.png" alt="" />
          <span>Banner</span></router-link
        >
        <router-link to="/admin/dashboard" class="pagemode"
          ><img src="/images/asidehome.png" alt="" />
          <span>Pages</span></router-link
        >
        <router-link to="/admin/home"
          ><img src="/images/aside4.png" alt="" />
          <span>Home</span></router-link
        >
        <router-link to="/admin/admin-about">
          <img src="/images/aside5.png" alt="" />
          <span> About </span>
          <img
            class="toggarrow"
            @click.prevent="toggleDropdownabout"
            src="/images/arrowdrop.png"
            alt=""
          />
        </router-link>
        <ul class="menudrop" v-if="isShowingabout">
          <li>
            <router-link to="/admin/about-approach">Our Approach</router-link>
          </li>
          <li>
            <router-link to="/admin/about-consultants"
              >Our Consultants</router-link
            >
          </li>
          <li>
            <router-link to="/admin/about-leadership"
              >Leadership Team</router-link
            >
          </li>
          <li>
            <router-link to="/admin/about-accreditation"
              >Accreditation & Certifications</router-link
            >
          </li>
        </ul>

        <router-link to="/admin/admin-treatment">
          <img src="/images/aside6.png" alt="" />
          <span> Treatment & Conditions</span>
          <img
            class="ps-2"
            @click.prevent="toggleDropdowntreat"
            src="/images/arrowdrop.png"
            alt=""
          />
        </router-link>
        <ul class="menudrop" v-if="isShowingtreat">
          <li><router-link to="/admin/treatment-adah">ADHD</router-link></li>
          <li>
            <router-link to="/admin/treatment-autism ">Autism</router-link>
          </li>
          <li><router-link to="/admin/treatment-ocdadmin">OCD</router-link></li>
          <li><router-link to="/admin/treatment-depressions">Depressions</router-link></li>
          <li><router-link to="/admin/treatment-anxiety">Anxiety</router-link></li>
          <li><router-link to="#">Sleep Disorder</router-link></li>
          <li><router-link to="#">Tics</router-link></li>
        </ul>
        <router-link to="/admin/admin-diagnosis"
          ><img src="/images/aside7.png" alt="" />
          <span>Diagnosis & Assessment</span></router-link
        >
        <router-link to="/admin/admin-parent"
          ><img src="/images/aside8.png" alt="" />
          <span>Parent Support Group</span></router-link
        >
        <router-link to="/fee"
          ><img src="/images/aside9.png" alt="" />
          <span>Blogs</span></router-link
        >
        <router-link to="/admin/admin-fee"
          ><img src="/images/aside10.png" alt="" />
          <span>Fees</span></router-link
        >
        <router-link to="/admin/admin-Contact"
          ><img src="/images/aside11.png" alt="" />
          <span>Contact</span></router-link
        >

        <div v-if="sidebarState === 'open'" class="sidebar-header slide1">
          <button class="toggle-btn" @click="toggleNav()">
            <img src="/images/asidehide.png" alt="" />
          </button>
        </div>
        <div v-if="sidebarState === 'closed'" class="sidebar-header slide2">
          <button class="toggle-btn" @click="toggleNav()">
            <img src="/images/asidehide2.png" alt="" />
          </button>
        </div>
      </div>
    </div>
  </aside>
</template>

<script>
export default {
  name: "AdminSidebar",
  props: {
    sidebarState: {
      type: String,
      default: "open",
    },
  },
  data() {
    return {
      isShowing: false,
      isShowingCate: false,
      isShowingtreat: false,
      isShowingabout: false,
    };
  },
  methods: {
    toggleNav() {
      const newState = this.sidebarState === "open" ? "closed" : "open";
      this.$emit("toggleSidebar", newState);
    },
    toggleDropdownabout() {
      this.isShowingabout = !this.isShowingabout;
    },
    toggleDropdowntreat() {
      this.isShowingtreat = !this.isShowingtreat;
    },
    toggleDropdown() {
      this.isShowing = !this.isShowing;
    },
    toggleDropdownCate() {
      this.isShowingCate = !this.isShowingCate;
    },
   
  },
};
</script>

<style scoped>
.toggarrow {
  margin-left: 130px;
}
/* width */
::-webkit-scrollbar {
  width: 10px !important;
}

/* Track */
::-webkit-scrollbar-track {
  background: #04498c !important;
  border-radius: 15px;
}

/* Handle */
::-webkit-scrollbar-thumb {
  border-radius: 15px;
  background: #e4e4e4 !important;
  height: 250px !important;
}

/* Handle on hover */
::-webkit-scrollbar-thumb:hover {
  background: #555;
}

img {
  filter: brightness(0) invert(1);
}
.sidebar .menudrop li {
  position: relative;
  margin-left: 30px;
}
.sidebar .menudrop li::after {
  position: absolute;
  content: "";
  width: 6px;
  top: 16px;
  left: 0px;
  border-radius: 50%;
  background: #fff;
  height: 6px;
}
.sidebar .menudrop a:active,
.sidebar .menudrop a:focus {
  color: #fff !important;
}
.sidebar .menudrop a {
  padding: 10px 15px !important;
  font-size: 12px !important;
  font-weight: 500 !important;
  color: #b1b1b1 !important;
  line-height: 18px !important;
  text-align: left !important;
}

.pagemode span {
  font-family: Source Serif Pro;
  text-decoration: underline;
  font-size: 23px !important;
  font-weight: 600;
}

.sidebar {
  padding: 10px 10px 80px;
  width: 270px;
  position: fixed;
  z-index: 1;
  top: 80px;
  left: 0;
  height: 100vh;
  background: #04498c;
  overflow-x: hidden;
  overflow-y: scroll;
  transition: 0.3s;
  box-shadow: 0 0 15px rgba(0, 0, 0, 0.1);
  white-space: nowrap;
}

.sidebar-header {
  padding: 17px 20px 20px;
  display: flex;
  align-items: center;
  justify-content: space-between;
}

.sidebar-header h3 {
  margin: 0;
  font-size: 1.2em;
  color: #fff;
}

.toggle-btn {
  background: none;
  border: none;
  color: var(--text-color);
  font-size: 20px;
  cursor: pointer;
  transition: 0.2s;
}

.toggle-btn:hover {
  color: red;
}

.sidebar a span {
  padding-left: 15px;
}

.sidebar a {
  padding: 14px 15px;
  text-decoration: none;
  font-size: 13px !important;
  color: #fff !important;
  display: flex;
  align-items: center;
  transition: 0.2s;
}

.sidebar a:hover img {
  filter: none;
}

.sidebar a:hover {
  background-color: #fff !important;
  color: #04498c !important;
}

.sidebar a i {
  min-width: 30px;
  font-size: 20px;
}

#main {
  transition: margin-left 0.3s;
  padding: 20px;
  margin-left: 250px;
}

.sidebar.closed {
  width: 150px;
  padding: 20px 40px 80px;
}
.sidebar.closed img {
  width: 25px !important;
  height: auto !important;
}

.sidebar.closed .sidebar-header h3 {
  display: none;
}

.sidebar.closed a span {
  display: none;
}

.sidebar.closed ~ #main {
  margin-left: 70px;
}

@media screen and (max-width: 768px) {
  .sidebar {
    width: 70px;
  }

  .sidebar .sidebar-header h3 {
    display: none;
  }

  .sidebar a span {
    display: none;
  }

  #main {
    margin-left: 70px;
  }

  .sidebar.open {
    width: 250px;
  }

  .sidebar.open .sidebar-header h3 {
    display: block;
  }

  .sidebar.open a span {
    display: inline;
  }

  .sidebar.open ~ #main {
    margin-left: 250px;
  }
}
</style>
