<template>
  <div id="app">
    <router-view />
  </div>
</template>

<script>
export default {
  name: 'App'
};
</script>

<style>
* {
  margin: 0;
  padding: 0;
  z-index: 1;
}
.img {
    width: 100%;
    height: 100vh;
}
.mobile-wrapper {
  margin: 0 auto;
  max-width: 360px;
  width: 100%;
}
.indent {
  padding: 15px;
}
.telegram-link {
  text-decoration: none;
  color: white;
}
.width-100 {
  width: 100%;
}
.padding-bottom {
  padding-bottom: 30px;
}
.padding-top {
  padding-top: 30px;
}
</style>