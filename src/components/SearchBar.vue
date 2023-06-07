<script>

</script>

<template>
    <div class="search-bar">
        <input type="text" placeholder="Поиск">
    </div>
</template>

<style scoped>
    .search-bar {
        @apply
            flex flex-col items-center pt-2 pb-12
    }
    input {
        @apply
            border outline-none border-solid border-white focus:border-black
            bg-transparent
            w-64 h-9 p-2
            
    }

    ::placeholder {
        @apply 
            text-slate-50 font-normal
            p-1
    }

    input:focus::placeholder {
        color: transparent
    }
</style>
