<template>
  <div class="container">
      <div class="row">
          <question-list-item v-for="question in questions" :key="question.id" :question="question" />
      </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
import QuestionListItem from '@/components/AppHome/QuestionListItem.vue'
export default {
    components: {
        QuestionListItem
    },

    created(){
        this.$store.dispatch('questions/FilteredQuestions', this.categoryId)
    },
    computed : {
        ...mapGetters(['questions']),
        categoryId(){
            return this.$route.params.categoryId
        }
    },
    watch : {
        categoryId(){
            this.$store.dispatch('FilteredQuestions', this.categoryId)
        }
    }
}
</script>

<style>

</style>