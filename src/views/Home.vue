<template>
  <div class="home">
    <broadcast-waiting />
  </div>
</template>

<script>
import BroadcastWaiting from '../components/BroadcastWaiting'
export default {
  name: 'Home',
  components: {
    BroadcastWaiting
  }
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
</style>