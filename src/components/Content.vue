<template>
   

   <ContentLastJournalIssues/>

   <div class="content-main">

      <ContentMain/>
      
      <ContentSide/>
   </div> 
</template>


<script>
   import ContentLastJournalIssues from "./ContentLastJournalIssues.vue"
   import ContentSide from "./ContentSide.vue"
   import ContentMain from "./ContentMain.vue"
   export default {
      components:
         {ContentLastJournalIssues, ContentSide, ContentMain}
   }
</script>

<style scoped>
   .content-main {
      @apply
         flex flex-row justify-center
         bg-zinc-200
         text-black
         mx-auto
   }
</style>