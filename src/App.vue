<template>
  <div id="app">
    <component :is="currentHeader"></component>

    <router-view></router-view>

    <component :is="currentFooter"></component>
  </div>
</template>

<script>
import Header from "./components/Header.vue";
import Footer from "./components/Footer.vue";
// import AdminHeader from "./components/admin/AdminHeader.vue";
// import AdminFooter from "./components/admin/AdminFooter.vue";

export default {
  name: "App",
  components: {
    Header,
    Footer,
    // AdminHeader,
    // AdminFooter,
  },
  computed: {
    currentHeader() {
      return this.$route.path.startsWith("/admin") ? "AdminHeader" : "Header";
    },
    currentFooter() {
      return this.$route.path.startsWith("/admin") ? "AdminFooter" : "Footer";
    },
  },
  watch: {
    $route(to, from) {
      this.loadStyles();
    },
  },
  mounted() {
    this.loadStyles();
  },
  methods: {
    loadStyles() {
      if (this.$route.path.startsWith("/admin")) {
        import("./components/admin/adminmain.css");
      } else {
        import("./style.css");
      }
    },
  },
};
</script>

<style>
main {
  padding: 2em;
  min-height: calc(
    100vh - 100px
  ); /* Adjust based on header and footer height */
}
</style>
