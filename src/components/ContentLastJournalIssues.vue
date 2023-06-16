<template>
    <div class="journal-issues">

         <div class="last-issue">
            <div class="last-issue-pic">
                <a href="https://waterjournal.ru/current_issue">
                    <img src="../assets/journ1.png" width="200">
                </a>
            </div>
            
            <div class="last-issue-info">
                <p> Последний выпуск </p>
                <div class="issue-number"> №2, 2023 год </div>
                <div class="actions">
                    <button class="regular-button"> Содержание </button>
                    <button class="regular-button red-button"> Оформить подписку </button>
                </div>
            </div>
         </div>

         

         <div class="prev-issue-info">
                <p> Предыдущий выпуск </p>
                <div class="issue-number"> №1, 2023 год </div>
                <div class="actions">
                    <button class="regular-button"> Содержание </button>
                    <button class="regular-button green-button"> Скачать полный выпуск </button>
                </div>
            </div>

    </div> 
 </template>

<style scoped>
    .journal-issues {
        @apply
            flex flex-row justify-center gap-32
            mt-6 p-4
            bg-sky-600 bg-opacity-20
            
    }

    .last-issue {
        @apply
            flex flex-row justify-center gap-8
    }

    .last-issue-pic {
        @apply flex
    }

    .last-issue-info, .prev-issue-info {
        @apply
            flex flex-col justify-center
            gap-4
            text-2xl
    }
    
    .issue-number {
        @apply
            text-xl
            text-sky-200
    }

    .red-button {
        @apply
            bg-pink-600
    }

    .green-button {
        @apply
            bg-green-600
    }

    .regular-button {
        @apply
            text-base font-normal
    }

</style>