<script>

</script>

<template>
    <div class="lang-selector">
        <div class="lang-images">
            <img src="../assets/ru.jpg">
            <img src="../assets/en.jpg">
        </div>
        
        <div class="indexes">
            <p>ISSN 1999-4508 (Print)</p>
            <p>ISSN 2686-8253 (Online)</p>
        </div>   
    </div> 
</template>

<style scoped>
    .lang-selector {
        margin-right: 27%;
        @apply
            flex flex-wrap flex-col self-end
            
    }

    .lang-images {
        @apply flex flex-row justify-center p-1
    }
    
    img {
        @apply p-1 w-8
    }

    .indexes {
        @apply
            flex flex-col items-center
            p-1
            text-blue-200 text-xs
    }

</style>