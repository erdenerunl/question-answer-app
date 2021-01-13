<template>
  <div>
    <div class="bg-light question-box" v-if="questions.length > 0">
      <question-list-item
        v-for="question in questions"
        :key="question.id"
        :question="question"
      />
    </div>
    <div class="bg-light alert-box" v-else>
      <div class="alert alert-primary" role="alert">
        There is no any question in this category.
        <a href="#">If you want to be first <i class="far fa-edit"></i>. </a>
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
import QuestionListItem from "./QuestionListItem.vue";
export default {
  components: { QuestionListItem },
  created() {
    this.$store.dispatch("questions/getQuestions", this.selectedCategories);
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
  height: auto;
  margin: 2rem 0;
}
.alert-box {
  margin: 2rem 0;
}
</style>
