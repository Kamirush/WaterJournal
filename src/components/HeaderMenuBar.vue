<script>
    import {ref} from 'vue'
    export default {
        setup() {
            const menuList = ref(["О журнале", "Редакция", "Авторам", "Текущий выпуск", "Архив", "Контакты"])
            return {menuList}
        }
    }
       
</script>




<template>
    <div class="menu-list">
        <a class="menu-item__active" href="/"
            v-for="item in menuList"> {{ item }}
        </a>
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
    .menu-item {
        @apply
            py-2 px-3
            underline
            hover:text-sky-400
    }

    .menu-item__active {
        @apply
            py-2 px-3
            bg-sky-600 rounded-3xl
    }
</style>