<template>
  <section class="dashboard">
    <div class="element">
      <h2>
        <div>
          <img src="/images/logo.png" alt="" />
        </div>
      </h2>
    </div>
  </section>
</template>

<script>
export default {
  name: "AdminDashboard",
};
</script>

<style scoped>
@keyframes moveBackAndForth {
  0% {
    top: 0;
    left: 0;
  }
  16.67% {
    top: calc(100% - 100px);
    left: calc(100% - 100px);
  }
  33.33% {
    top: 0;
    left: 0;
  }
  50% {
    top: calc(100% - 100px);
    left: calc(100% - 100px);
  }
  66.67% {
    top: 0;
    left: 0;
  }
  83.33% {
    top: calc(100% - 100px);
    left: calc(100% - 100px);
  }
  100% {
    top: 0;
    left: 0;
  }
}

.element {
  position: fixed;
  border-radius: 50%;
  display: flex;
  width: 250px;
  height: 250px;
  margin: 50px 250px 250px;
  background-color: #fff;
  animation: moveBackAndForth 40s linear infinite;
}
.element h2 {
  text-align: center !important;
  color: #04498c !important;
  display: flex;
  align-items: center;
}
</style>
