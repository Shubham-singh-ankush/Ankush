<template>
  <div class="container-fluid">
    <AdminHeader />
    <div class="row">
      <AdminSidebar
        :sidebarState="sidebarState"
        @toggleSidebar="toggleSidebar"
        class="col-auto"
      />
      <router-view
        :class="{
          dashboardclose: sidebarState === 'open',
          'col-xl-9': sidebarState === 'open',
          'col-xl-10': sidebarState === 'closed',
          dashboardbg: sidebarState === 'closed',
        }"
      />
    </div>
  </div>
</template>

<script>
import AdminHeader from "../../components/admin/AdminHeader.vue";
import AdminSidebar from "../../components/admin/AdminSidebar.vue";

export default {
  name: "AdminLayout",
  components: {
    AdminHeader,
    AdminSidebar,
  },
  data() {
    return {
      sidebarState: "open",
    };
  },
  methods: {
    toggleSidebar(newState) {
      this.sidebarState = newState;
    },
  },
};
</script>

<style scoped>
.container-fluid {
  overflow: hidden !important;
  max-height: 100vh !important;
  padding: 0px;
}

.dashboardbg {
  margin-left: 170px;
  padding: 10px;
  width: 90%;
  transition: 1s;
}
.dashboardclose {
  transition: 0.5s;
  margin-left: 260px;
  width: 87%;
  padding: 10px;
}
</style>
