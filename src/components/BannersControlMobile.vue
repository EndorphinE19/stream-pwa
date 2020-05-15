<template>
    <div class="banners-control-mobile">
        <h2 class="banners-control-mobile__title">Управляй трансляцией с телефона</h2>
        <img class="banners-control-mobile__qr" src="../assets/photo_2020-05-13_19-17-20.jpg">
    </div>
</template>
<script>
export default {
    name: 'BannersControlMobile'
}
</script>
<style scoped>
.banners-control-mobile {
    max-width: 600px;
    width: 100%;
    background-image: linear-gradient(45deg, #f0f0f0, rgba(0,0,0,0));
    padding: 10px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    flex-wrap: nowrap;
}
.banners-control-mobile__title {
    width: 33%;
    text-align: left;
}
.banners-control-mobile__qr {
    width: 33%;
}
.banners-control-mobile__arrow {
    font-size:50px;
}
</style>