<script>
import { ref } from "vue";
export default {
  setup() {
    const isVisible = ref(false);

    const toggleVisible = (event) => {
      if (!event.target.classList.contains("issue-content")) {
        isVisible.value = !isVisible.value;
      }
    };

    return { toggleVisible, isVisible };
  },
};
</script>

<template>
  <div class="issue">
    <div class="issue-link">№1, 2023</div>
    <button class="regular-button" @click="toggleVisible">Содержание</button>
  </div>

  <div
    class="issue-content-background"
    v-if="isVisible"
    @click.self="toggleVisible"
  >
    <div class="issue-content">
      <p>1 номер 2023 год</p>
      <p>"Водное хозяйство России: проблемы, технологии, управление"</p>
    </div>
  </div>

  <hr class="border-black" />
</template>

<style scoped>
.issue {
  @apply flex flex-row items-center justify-between
            p-1;
}

.issue-link {
  @apply text-sky-900;
}

.regular-button {
  @apply text-white
            py-1;
}
.issue-content-background {
  @apply flex fixed justify-center
            w-full h-full p-2
            top-0 left-0
            bg-black/80;
}
.issue-content {
  @apply flex flex-col
            w-3/5 my-8 p-2
            rounded-md
            bg-white
            overflow-auto;
}
</style>
