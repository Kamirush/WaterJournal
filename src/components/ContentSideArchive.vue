<script>
    import ContentSideArchiveYear from "./ContentSideArchiveYear.vue"

    export default {

        components: {ContentSideArchiveYear}
    }
</script>

<template>
    <div class="archive">
        <ContentSideArchiveYear year="2023"/>
        
    </div>

    
    
</template>


<style scoped>
    .archive {
        @apply 
            flex flex-col
            py-4
    }
    
</style>
