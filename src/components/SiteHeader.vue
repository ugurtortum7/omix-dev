<template>
  <header class="site-header">
    <div class="top-line"></div>
    <div class="header-inner">
      <div class="left">
        <div class="logo">
          <img v-if="!showText" src="/logo_black.png" alt="OMIX logo" class="logo-img" @error="showText = true" />
        </div>
      </div>

      <nav class="main-nav">
        <a href="#">Mobil</a>
        <a href="#">Akıllı Ürünler</a>
        <a href="#">MixO IoT</a>
        <a href="#">Aksesuarlar</a>
        <a href="#">Destek</a>
        <a href="#">Hakkında</a>
      </nav>

      <div class="right">
        <div class="icons">
          <span class="icon">👤</span>
          <span class="icon">🛒</span>
        </div>
        <div class="lang">TR / EN</div>
      </div>
    </div>
  </header>
</template>

<script setup>
// purely presentational component
import { ref } from 'vue'
const showText = ref(false)
</script>

<style scoped>
.site-header {
  background: white;
  border-bottom: 1px solid #e6e6e6;
  font-family: system-ui, -apple-system, "Segoe UI", Roboto, "Helvetica Neue", Arial;
}
.top-line{
  height: 6px;
  background: #fff;
}
.header-inner{
  max-width: 1100px;
  margin: 0 auto;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 12px 16px;
}
.logo{
  font-weight: 700;
  letter-spacing: 2px;
  font-size: 22px;
}
.main-nav{
  display: flex;
  gap: 22px;
  align-items: center;
}
.main-nav a{
  color: #333;
  text-decoration: none;
  font-size: 14px;
}
.main-nav a:hover{ color: #000 }
.right{
  display: flex;
  align-items: center;
  gap: 16px;
}
.icons .icon{ margin-right: 8px }
.lang{ font-size: 13px; color: #666 }

@media (max-width: 720px){
  .main-nav{ display:none }
}
</style>
