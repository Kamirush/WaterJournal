<script>
    import ContentSideArchiveYearIssue from "./ContentSideArchiveYearIssue.vue"
    export default {
        props: {
            year:String
        },

        components:{ContentSideArchiveYearIssue}
    }
</script>

<template>
    <div class="year">
        <div class="year-box flex flex-row">
            <div class="animation-square"></div>
            <div class="year-name">
                {{ year }}
            </div> 
        </div>
        
        <ContentSideArchiveYearIssue/>
    </div>
</template>

<style scoped>
    .year {
        @apply
            flex flex-col
    }

    .year-box {
        
    }

    .animation-square {
        @apply
            flex
            bg-sky-600
            my-1 w-2
        
        
    }


    .year-name {
        @apply
            flex
            py-1 my-1 px-1 w-full
            font-semibold text-lg
            bg-slate-400
    }

    .year-box:hover > .animation-square {
        @apply
            transition ease-in-out delay-0 scale-x-150 translate-x-2 duration-300 
    }
</style>