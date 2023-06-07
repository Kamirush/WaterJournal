<script>
  import Content from './components/Content.vue';
  import Header from './components/Header.vue';
  import Footer from './components/Footer.vue'

  export default {

    components: {Content, Header, Footer},

  }
</script>

<template>
  <div class="page">
    <Header/>
    <Content/>
    <Footer/>
  </div>  
</template>

<style scoped>
  .page {
    @import url(https://fonts.googleapis.com/css?family=Nunito)
    font-family-sans-serif: "Nunito", sans-serif;
    @apply 
      flex basis-1 flex-col py-2
      text-white
  }
</style>
