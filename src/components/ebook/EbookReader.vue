<template>
    <div>
        <div id="read"></div>
    </div>
</template>

<script>
import Epub from 'epubjs'
global.epub=Epub
import {eBookMixin} from '@/utils/mixin'
import {mapGetters} from 'vuex'
    export default {
        mixins:[eBookMixin],
        methods:{
            nextPage(){
                if(this.rendition){
                    this.rendition.next()
                    this.setShowMenu(false)
                }
            },
            prevPage(){
                if(this.rendition){
                    this.rendition.prev()
                    this.setShowMenu(false)
                }
            },
            toggleMenuVisiable(){
                if(this.showMenu){
                    this.setSettingVisible(-1)
                }
                this.setShowMenu(!this.showMenu)
                
            },
          initEpub(){
              const url='http://localhost:8100/epub/'+this.fileName+'.epub'
              this.book=new Epub(url)
              this.rendition=this.book.renderTo('read',{
                  width:innerWidth,
                  height:innerHeight,
                //   method:'default'//兼容微信客户端
              })    
              this.rendition.display()
              this.rendition.on('touchstart',e=>{
                this.touchStartX=e.changedTouches[0].clientX
                this.touchStartTime=e.timeStamp
              })
              this.rendition.on('touchend',e=>{
                const offsetX=e.changedTouches[0].clientX-this.touchStartX
                const time=e.timeStamp-this.touchStartTime
                if(offsetX>50&&time<500){
                    this.prevPage()
                }else if(offsetX<-50&&time<500){
                    
                    this.nextPage()
                }
                else{
                    this.toggleMenuVisiable()
                }
                e.preventDefault()
                e.stopPropagation()


              })
          }
        },
        computed: {
            ...mapGetters(['fileName'])
        },
        mounted() {
            var str=this.$route.params.fileName.replace('|','/')
            console.log(str)
            this.$store.dispatch('setFileName',str).then(()=>{
                this.initEpub()
            })
        },
        
    }
</script>

<style scoped>

</style>