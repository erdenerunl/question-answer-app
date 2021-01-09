<template>
  <div>
      <div class=" bg-light question-box">
          <question-list-item v-for="question in questions" :key="question.id" question="question"  />
      </div>
  </div>
</template>

<script>
import QuestionListItem from './QuestionListItem.vue'
export default {
  components: { QuestionListItem },
    data(){
        return {
            questions : [1]
        }
    }
}
</script>

<style lang="scss" scoped>
.question-box {
    height: 100vh;
    margin: 2rem 0;
}
</style>
