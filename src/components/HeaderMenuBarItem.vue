<script>
    import { ref } from 'vue'
    import { onClickOutside } from '@vueuse/core'


    export default {
        props: {
            header: String,
            dropDownList: Array,
            href: String
        },

        setup() {

            const isVisible = ref(false)
            const item = ref(null)

            const toggleVisible = (event) => {
                isVisible.value = !isVisible.value
            }

            onClickOutside(item, () => {
                isVisible.value = false
            })

            return {toggleVisible, isVisible, item}
        }
    }
</script>

<template>

    <div class="item"  ref="item">
        <div class="item-header__active" @click="toggleVisible">
            {{ header }}
        </div>

        <div class="item-drop-down-list" v-if="isVisible">
            <a class="item-drop-down-list-element"
            v-for="element in dropDownList" :href=element.href>
                {{ element.name }}
            </a>
        </div>
    </div>

</template>

<style scoped>
    .item {
        @appy
            flex flex col
    }

    .item:hover {
        @apply
            cursor-pointer
    }

    .item-header {
        @apply
            py-2 px-3
            underline
            hover:text-sky-400
    }

    .item-header__active {
        @apply
            py-2 px-3
            bg-sky-600 rounded-3xl
    }

    .item-drop-down-list {
        @apply
            absolute
            flex flex-col
            my-4
            bg-zinc-200
            text-black
            rounded-md
    }

    .item-drop-down-list-element {
        @apply
            px-2 py-1
    }

    .item-drop-down-list-element:hover {
        @apply
            bg-zinc-300
            overflow-hidden
    }
</style>