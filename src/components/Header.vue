<script>
    import LanguageSelector from './LanguageSelector.vue';
    import SearchBar from './SearchBar.vue';
    import MenuBar from './MenuBar.vue';

    export default {
        components: {LanguageSelector, SearchBar, MenuBar}
    }
</script>

<template>
    <div class="header"> 
        <LanguageSelector/>
        <div class="title">
            <p class="text-xl p-2"> Научно-практический журнал </p>
            <p class="text-3xl p-2"> «Водное хозяйство России: проблемы, технологии, управление» </p>
        </div>
        <SearchBar/>
        <MenuBar/>
    </div>
</template>



<style scoped>
    .header {
        @apply flex flex-col
    }
    .title{
        @apply
            flex flex-col flex-wrap items-center
    }
</style>