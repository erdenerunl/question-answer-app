<template>
  <div class="container">
    <div class="row mt-3">
      <div class="col-8 offset-2">
        <div class="card">
          <div class="card-header p-3 bg-darky">Add a New Question</div>
          <div class="card-body">
            <div class="mb-3">
              <label for="question-title" class="form-label">Title</label>
              <input
                v-model="userData.title"
                type="text"
                class="form-control"
                id="question-title"
                placeholder="What is what?"
              />
            </div>
            <div class="mb-3">
              <label for="question-details" class="form-label">Details</label>
              <textarea
                v-model="userData.details"
                class="form-control"
                id="question-details"
                placeholder="Add some detail..."
                rows="3"
              ></textarea>
            </div>
            <div class="mb-3">
              <label for="question-category" class="form-label"
                >Categories</label
              >
              <select
                v-model="userData.categoryId"
                id="question-category"
                class="form-select"
              >
                <option
                  v-for="category in categories"
                  :value="category.id"
                  :key="category.id"
                >
                  {{ category.title }}
                </option>
              </select>
            </div>
          </div>
          <div
            class="bg-darky card-footer text-muted d-flex justify-content-end align-items-center"
          >
            <button
              :disabled="notAbleToSave"
              class="btn btn-sm btn-success px-3"
              @click="onSave"
            >
              Submit
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { appAxios } from "@/utils/AppAxios.js";
import { mapGetters } from "vuex";
export default {
  data() {
    return {
      userData: {
        title: null,
        details: null,
        categoryId: null,
      },
    };
  },
    created() {
    this.userData.categoryId = this.$route.query?.categoryId || null;
    
  },
  
  methods: {
    onSave() {
      appAxios
        .post("/questions", { ...this.userData, created_at: new Date(), imageUrl: "https://picsum.photos/100/100/?random=8" })
        .then((response) => {
          this.$router.push({ name: "Home" })
        });
    },
  },
  computed: {
    ...mapGetters({
      categories: "categories/_categoryList",
    }),
    notAbleToSave(){
      return 
    }
  },
};
</script>

<style lang="scss" scoped>
.bg-darky {
  background-color: rgba(0, 0, 0, 0.2);
}
</style>