<template>
  <div class="home-container">
    <div class="home-content">
      <h1 class="home-title">OMIX Development Pages</h1>
      <p class="home-subtitle">Click on any page to view it</p>
      
      <div class="pages-grid">
        <router-link 
          v-for="page in pages" 
          :key="page.path"
          :to="page.path"
          class="page-card"
        >
          <div class="page-icon">📄</div>
          <h3 class="page-name">{{ page.name }}</h3>
          <p class="page-path">{{ page.path }}</p>
        </router-link>
      </div>
    </div>
  </div>
</template>

<script setup>
const pages = [
  { name: 'Header', path: '/header' },
  { name: 'Footer', path: '/footer' },
  { name: 'Sign In', path: '/sign-in' },
  { name: 'Register', path: '/register' },
  { name: 'Product', path: '/product' },
  { name: 'Tech Features', path: '/tech-features' },
  { name: 'Purchase', path: '/purchase' },
  { name: 'My Account', path: '/my-account' },
  { name: 'Basket', path: '/basket' },
  { name: 'Carousel', path: '/carousel' }
]
</script>

<style scoped>
.home-container {
  min-height: 100vh;
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  padding: 40px 20px;
  font-family: 'Helvetica Neue', Arial, sans-serif;
}

.home-content {
  max-width: 1200px;
  margin: 0 auto;
}

.home-title {
  font-size: 48px;
  font-weight: 600;
  text-align: center;
  color: white;
  margin-bottom: 10px;
  letter-spacing: -0.5px;
}

.home-subtitle {
  text-align: center;
  color: rgba(255, 255, 255, 0.9);
  font-size: 18px;
  margin-bottom: 50px;
}

.pages-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
  gap: 25px;
  padding: 20px 0;
}

.page-card {
  background: white;
  border-radius: 12px;
  padding: 30px 20px;
  text-align: center;
  text-decoration: none;
  transition: all 0.3s ease;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  cursor: pointer;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  min-height: 180px;
}

.page-card:hover {
  transform: translateY(-5px);
  box-shadow: 0 12px 24px rgba(0, 0, 0, 0.15);
}

.page-icon {
  font-size: 48px;
  margin-bottom: 15px;
}

.page-name {
  font-size: 22px;
  font-weight: 600;
  color: #333;
  margin-bottom: 8px;
}

.page-path {
  font-size: 14px;
  color: #666;
  font-family: 'Courier New', monospace;
}

@media (max-width: 768px) {
  .home-title {
    font-size: 32px;
  }

  .home-subtitle {
    font-size: 16px;
  }

  .pages-grid {
    grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
    gap: 20px;
  }

  .page-card {
    padding: 25px 15px;
    min-height: 150px;
  }

  .page-icon {
    font-size: 36px;
  }

  .page-name {
    font-size: 18px;
  }
}

@media (max-width: 480px) {
  .pages-grid {
    grid-template-columns: 1fr;
  }
}
</style>
