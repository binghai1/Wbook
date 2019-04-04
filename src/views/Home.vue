<template>
  <div class="home">
    <div id='read'></div>
  </div>
</template>

<script>
  import Epub from 'epubjs'
  global.epub=Epub
export default {
    mounted(){
       this.book= new Epub('/2018_Book_EarthObservationOpenScienceAnd.epub')
       this.book.renderTo('read',{
         width:window.innerWidth,
         height:window.innerHeight
       }).display()
    }
}
</script>
