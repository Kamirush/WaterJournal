<script>
    import ContentSideArchiveYear from "./ContentSideArchiveYear.vue"

    export default {

        components: {ContentSideArchiveYear}
    }
</script>

<template>
    <div class="archive">
        <ContentSideArchiveYear year="2021 год"/>
        <ContentSideArchiveYear year="2022 год"/>
        <ContentSideArchiveYear year="2023 год"/>
        
    </div>

    
    
</template>


<style scoped>
    .archive {
        @apply 
            flex flex-col
            py-4
            
    }
    
</style>
