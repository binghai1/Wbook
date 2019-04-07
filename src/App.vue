<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<script>
  import {mapGetters} from 'vuex'
export default{
  mounted(){
  },
  computed:{
  }
}
    document.addEventListener('DOMContentLoaded',()=>{
      let html=document.querySelector('html')
      let fontSize=window.innerWidth/10;
      html.style.fontSize=fontSize+'px'
    })
</script>
<style <style lang="scss" scoped>
@import './assets/styles/global.scss';

</style>


