<script>
    import HeaderLanguageSelector from './HeaderLanguageSelector.vue';
    import HeaderSearchBar from './HeaderSearchBar.vue';
    import HeaderMenuBar from './HeaderMenuBar.vue';

    export default {
        components: {HeaderLanguageSelector, HeaderSearchBar, HeaderMenuBar}
    }
</script>

<template>
    <div class="header">

        <HeaderLanguageSelector/>

        <div class="title">
            <p class="text-xl p-2"> Научно-практический журнал </p>
            <p class="text-3xl p-2"> «Водное хозяйство России: проблемы, технологии, управление» </p>
        </div>

        <HeaderSearchBar/>

        <HeaderMenuBar/>
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