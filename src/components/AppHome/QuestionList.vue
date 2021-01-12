<template>
  <div>
    <div class="bg-light question-box">
      <question-list-item
        v-for="question in questions"
        :key="question.id"
        :question="question"
      />
    </div>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
import QuestionListItem from "./QuestionListItem.vue";
export default {
  components: { QuestionListItem },
  created() {
    this.$store.dispatch("questions/getQuestions" ,this.selectedCategories);
  },
  computed: {
    ...mapGetters({
      questions: "questions/_questionList",
      selectedCategories: "categories/selectedCategories",
    }),
    
  },
};
</script>

<style lang="scss" scoped>
.question-box {
  height: 100vh;
  margin: 2rem 0;
}
</style>
