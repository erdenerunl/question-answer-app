<template>
  <div>
    <div class="category-box bg-light">
      <div class="list-group d-flex text-center align-items-center">
        <router-link
          class="ask-button py-3 list-group-item list-group-item-action"
          to="/newquestion"
          >Ask a Question <i class="far fa-edit"></i>
        </router-link>
        <a
          v-for="category in categories"
          :key="category.id"
          href="#"
          class="py-3 list-group-item list-group-item-action"
          @click.prevent="category.selected = !category.selected"
          :class="{ active: category.selected }"
        >
          {{ category.title }}
        </a>
      </div>
    </div>
  </div>
</template>

<script>
import { appAxios } from "@/utils/AppAxios.js";
import { mapGetters } from "vuex";
export default {
  methods: {},
  computed: {
    ...mapGetters({
      categories: "categories/_categoryList",
      selectedCategories: "categories/selectedCategories",
    }),
  },
  watch: {
    categories: {
      deep: true,
      handler(categories) {
        this.$store.dispatch("questions/getQuestions", categories);
      },
    },
  },
};
</script>

<style lang="scss" scoped>
.category-box {
  height: auto;
  margin: 2rem 0 1rem 0;
}
a {
  border-width: 1px;
  color: #0f5132 !important;
  background-color: #fff;

  &:hover {
    background-color: #bacbe6;
  }
}
.active {
  color: #fff !important;
  background-color: #198754 !important;
  border-color: #0f5132;
}
.ask-button{
  color: #fff!important;
  background-color: #198754;
  border-color: #0f5132;

  &:hover{
    background-color: #1a6b45;
  }
}
</style>