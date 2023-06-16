<script>
    import HeaderMenuBarItem from "./HeaderMenuBarItem.vue"
    import {ref} from 'vue'
    export default {
        setup() {
            const menuList = ref([
                {href:"/", header: "О журнале", dropDownList: [
                    {name: "Индексация журнала", href: "/"},
                    {name: "Политика открытого доступа", href: "/"}
                ]}, 
                {href:"/", header: "Редакция", dropDownList: []},
                {href:"/", header: "Авторам", dropDownList: []}, 
                {href:"/", header: "Текущий выпуск", dropDownList: []}, 
                {href:"/", header: "Архив", dropDownList: []}, 
                {href:"/", header: "Контакты", dropDownList: []}])
            return {menuList}
        },
        components: {HeaderMenuBarItem}
    }
       
</script>




<template>
    <div class="menu-list">
        <HeaderMenuBarItem v-for="item in menuList" 
            :href="item.href" :header="item.header" :dropDownList="item.dropDownList"
        />
    </div>
    
</template>


<style scoped>
    .menu-list {
        @apply
            flex flex-row justify-center
            gap-4
            font-normal
            text-base
    }
</style>