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
          target="_blank"
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
@import url('https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&display=swap');

* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

.home-container {
  min-height: 100vh;
  background: linear-gradient(135deg, #1e1e2e 0%, #2d2d44 50%, #1a1a2e 100%);
  background-size: 400% 400%;
  animation: gradientShift 15s ease infinite;
  padding: 60px 20px;
  font-family: 'Inter', 'Helvetica Neue', Arial, sans-serif;
  position: relative;
  overflow: hidden;
}

.home-container::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: 
    radial-gradient(circle at 20% 50%, rgba(120, 119, 198, 0.15) 0%, transparent 50%),
    radial-gradient(circle at 80% 80%, rgba(255, 121, 198, 0.15) 0%, transparent 50%);
  pointer-events: none;
}

@keyframes gradientShift {
  0% { background-position: 0% 50%; }
  50% { background-position: 100% 50%; }
  100% { background-position: 0% 50%; }
}

.home-content {
  max-width: 1400px;
  margin: 0 auto;
  position: relative;
  z-index: 1;
}

.home-title {
  font-size: 64px;
  font-weight: 700;
  text-align: center;
  background: linear-gradient(135deg, #ffffff 0%, #e0e0e0 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  margin-bottom: 16px;
  letter-spacing: -1.5px;
  animation: fadeInDown 0.8s ease-out;
  text-shadow: 0 4px 20px rgba(255, 255, 255, 0.1);
}

@keyframes fadeInDown {
  from {
    opacity: 0;
    transform: translateY(-30px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

.home-subtitle {
  text-align: center;
  color: rgba(255, 255, 255, 0.7);
  font-size: 20px;
  font-weight: 400;
  margin-bottom: 60px;
  animation: fadeInUp 0.8s ease-out 0.2s both;
  letter-spacing: 0.5px;
}

@keyframes fadeInUp {
  from {
    opacity: 0;
    transform: translateY(20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

.pages-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
  gap: 30px;
  padding: 20px 0;
}

.page-card {
  background: rgba(255, 255, 255, 0.05);
  backdrop-filter: blur(10px);
  -webkit-backdrop-filter: blur(10px);
  border: 1px solid rgba(255, 255, 255, 0.1);
  border-radius: 20px;
  padding: 40px 30px;
  text-align: center;
  text-decoration: none;
  transition: all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275);
  box-shadow: 
    0 8px 32px rgba(0, 0, 0, 0.2),
    inset 0 1px 0 rgba(255, 255, 255, 0.1);
  cursor: pointer;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  min-height: 200px;
  position: relative;
  overflow: hidden;
  animation: fadeInScale 0.6s ease-out both;
  animation-delay: calc(var(--card-index) * 0.05s);
}

@keyframes fadeInScale {
  from {
    opacity: 0;
    transform: scale(0.9);
  }
  to {
    opacity: 1;
    transform: scale(1);
  }
}

.page-card::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: linear-gradient(135deg, rgba(255, 255, 255, 0.1) 0%, transparent 100%);
  opacity: 0;
  transition: opacity 0.4s ease;
}

.page-card:hover::before {
  opacity: 1;
}

.page-card:hover {
  transform: translateY(-10px) scale(1.02);
  box-shadow: 
    0 20px 60px rgba(0, 0, 0, 0.4),
    inset 0 1px 0 rgba(255, 255, 255, 0.2),
    0 0 30px rgba(120, 119, 198, 0.3);
  border-color: rgba(255, 255, 255, 0.2);
  background: rgba(255, 255, 255, 0.08);
}

.page-card:active {
  transform: translateY(-8px) scale(1);
}

.page-icon {
  font-size: 56px;
  margin-bottom: 20px;
  filter: drop-shadow(0 4px 8px rgba(0, 0, 0, 0.2));
  transition: transform 0.4s ease;
}

.page-card:hover .page-icon {
  transform: scale(1.15) rotate(5deg);
}

.page-name {
  font-size: 24px;
  font-weight: 600;
  color: #ffffff;
  margin-bottom: 12px;
  letter-spacing: -0.3px;
  transition: all 0.3s ease;
}

.page-card:hover .page-name {
  color: #ffffff;
  text-shadow: 0 2px 10px rgba(255, 255, 255, 0.3);
}

.page-path {
  font-size: 14px;
  color: rgba(255, 255, 255, 0.5);
  font-family: 'SF Mono', 'Monaco', 'Courier New', monospace;
  font-weight: 400;
  letter-spacing: 0.5px;
  padding: 8px 16px;
  background: rgba(0, 0, 0, 0.2);
  border-radius: 8px;
  transition: all 0.3s ease;
}

.page-card:hover .page-path {
  color: rgba(255, 255, 255, 0.8);
  background: rgba(0, 0, 0, 0.3);
}

/* Add staggered animation to cards */
.page-card:nth-child(1) { --card-index: 1; }
.page-card:nth-child(2) { --card-index: 2; }
.page-card:nth-child(3) { --card-index: 3; }
.page-card:nth-child(4) { --card-index: 4; }
.page-card:nth-child(5) { --card-index: 5; }
.page-card:nth-child(6) { --card-index: 6; }
.page-card:nth-child(7) { --card-index: 7; }
.page-card:nth-child(8) { --card-index: 8; }
.page-card:nth-child(9) { --card-index: 9; }
.page-card:nth-child(10) { --card-index: 10; }

@media (max-width: 768px) {
  .home-title {
    font-size: 42px;
    letter-spacing: -1px;
  }

  .home-subtitle {
    font-size: 18px;
  }

  .pages-grid {
    grid-template-columns: repeat(auto-fill, minmax(240px, 1fr));
    gap: 20px;
  }

  .page-card {
    padding: 30px 20px;
    min-height: 170px;
  }

  .page-icon {
    font-size: 44px;
  }

  .page-name {
    font-size: 20px;
  }

  .page-path {
    font-size: 13px;
  }
}

@media (max-width: 480px) {
  .home-container {
    padding: 40px 15px;
  }

  .home-title {
    font-size: 36px;
  }

  .home-subtitle {
    font-size: 16px;
    margin-bottom: 40px;
  }

  .pages-grid {
    grid-template-columns: 1fr;
    gap: 16px;
  }

  .page-card {
    min-height: 160px;
  }
}

/* Smooth scrollbar */
.home-container::-webkit-scrollbar {
  width: 8px;
}

.home-container::-webkit-scrollbar-track {
  background: rgba(255, 255, 255, 0.05);
}

.home-container::-webkit-scrollbar-thumb {
  background: rgba(255, 255, 255, 0.2);
  border-radius: 4px;
}

.home-container::-webkit-scrollbar-thumb:hover {
  background: rgba(255, 255, 255, 0.3);
}
</style>
