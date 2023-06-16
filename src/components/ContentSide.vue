<script>
    import ContentSideChiefEditor from "./ContentSideChiefEditor.vue"
    import ContentSideArchive from "./ContentSideArchive.vue"

    export default {

        components: {ContentSideChiefEditor, ContentSideArchive}
    }
</script>


<template>
    <div class="info-side">

        <ContentSideArchive/>
        
        <ContentSideChiefEditor/>

    </div>
</template>



<style scoped>
    .info-side {
        width: 15%;
        @apply
            flex flex-col items-center items-stretch
            p-4
            bg-neutral-300
    }
</style>
