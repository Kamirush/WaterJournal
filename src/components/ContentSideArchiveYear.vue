<script>
import ContentSideArchiveYearIssue from "./ContentSideArchiveYearIssue.vue";
export default {
  props: {
    year: String,
  },

  components: { ContentSideArchiveYearIssue },
};
</script>

<template>
  <div class="year">
    <div class="year-box flex flex-row">
      <div class="animation-square"></div>
      <div class="year-name">
        {{ year }}
      </div>
    </div>

    <div class="issues">
      <ContentSideArchiveYearIssue />
      <ContentSideArchiveYearIssue />
      <ContentSideArchiveYearIssue />
    </div>
  </div>
</template>

<style scoped>
.year {
  @apply flex flex-col
            cursor-default;
}

.animation-square {
  @apply flex
            bg-sky-600
            my-1 w-2
            transition-all ease-in-out delay-75 duration-1000;
}

.year-name {
  @apply flex
            p-2 my-1 w-full
            font-semibold text-lg
            bg-slate-400;
}
.issues {
  @apply max-h-0
        overflow-hidden
        transition-all ease-in-out delay-75 duration-1000;
}

.year-box {
}
.year-box:hover > .animation-square {
  @apply px-2;
}

.year:hover > .issues {
  @apply max-h-48;
}
</style>
