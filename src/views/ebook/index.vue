<template>
    <div>
        <ebook-title></ebook-title>
        <ebook-reader></ebook-reader>
        <ebook-menubar></ebook-menubar>
    </div>
</template>

<script>
import EbookReader from '@/components/ebook/EbookReader'
import EbookTitle from '@/components/ebook/EbookTitle'
import EbookMenubar from '@/components/ebook/EbookMenubar'
    export default {
        components:{
            EbookReader,
            EbookTitle,
            EbookMenubar
        }
        
    }
</script>

<style scoped>

</style>