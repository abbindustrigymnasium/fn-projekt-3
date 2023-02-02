<template>
    <video autoplay loop muted playsinline id="BackgroundVideo">
      <source src="https://github.com/abbguslof/MazeGame/raw/main/images/VideoForFn.mp4" type="video/mp4" />
    </video>

  <header class="viewport-header">
    <h1>
      PLACEHOLDER
    </h1>
  </header>

  <main>
    <BlockWithText
      msg="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna
      aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis
      aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint
      occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Vårt projekt! blablbalba" />
  </main>
</template>

<script>
import BlockWithText from './components/BlockWithText.vue'
export default {
  name: 'App',
  components: {
    BlockWithText    
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  height: 100%;
}
html, body {
  height: 100%;
  margin: 0;
}
video {
  object-fit: cover;
  width: 100vw;
  height: 100vh;
  position: fixed;
  top: 0;
  left: 0;
}
.viewport-header {
  position: relative;
  height: 100%;
  text-align: center;
  display: flex;
  align-items: center;
  justify-content: center;
}
main {
  background: rgba(black, 0.66);
  position: relative;
}
</style>
