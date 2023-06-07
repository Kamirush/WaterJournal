<script>
    import ContentSideChiefEditor from "./ContentSideChiefEditor.vue"

    export default {

        components: {ContentSideChiefEditor}
    }
</script>


<template>
    <div class="info-side">
        <ContentSideChiefEditor/>
    </div>
</template>



<style scoped>
    .info-side {
        @apply
            flex flex-col items-center
            w-1/6 p-4
            bg-neutral-300
    }

</style>
