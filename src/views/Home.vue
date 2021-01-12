<template>
  <div>
    <div class="container-fluid">
      <div class="row">
        <div class="col-lg-3">
          <category-list />
        </div>
        <div class="col-lg-6">
          <question-list />
        </div>
        <div class="col-lg-3">
          <trend-topics  />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import CategoryList from "@/components/AppHome/CategoryList";
import QuestionList from "@/components/AppHome/QuestionList";
import TrendTopics from '../components/AppHome/TrendTopics.vue';
export default {
  components: {
    CategoryList,
    QuestionList,
    TrendTopics
  },
};
</script>

<style>
</style>