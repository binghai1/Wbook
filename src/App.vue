<template>
  <div id="app">
    <span>2233322</span>
    <router-view/>
  </div>
</template>

<script>
  import {mapGetters} from 'vuex'
export default{
  mounted(){
    console.log(this.test)
  },
  computed:{
    ...mapGetters(['test'])
  }
}
    document.addEventListener('DOMContentLoaded',()=>{
      let html=document.querySelector('html')
      let fontSize=window.innerWidth/10;
      console.log(fontSize,33)
      html.style.fontSize=fontSize+'px'
    })
</script>
<style <style lang="scss" scoped>
@import './assets/styles/global.scss';
 span{
   font-size: px2rem(16);
 }
</style>


