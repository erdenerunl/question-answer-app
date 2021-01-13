<template>
  <div class="container question-detail-page">
    <div class="row mt-3">
      <div class="col-10 offset-1">
        <div class="card text-left mb-3">
          <div class="card-body">
            <h3 class="card-title">{{ question.title }}</h3>
            <div class="mt-3">
              <p class="text-muted">
                {{ question.details }}
              </p>

              <div class="d-flex justify-content-between align-items-center">
                <div class="custom-text-light">
                  <i class="fa fa-user-circle me-1"></i>
                   User123 <span class="ms-5">{{ timeDetail(question.created_at) }}</span>
                </div>
                <div class="custom-text-light">
                  {{ question?.category?.title || "-" }}
                </div>
              </div>
            </div>
          </div>
          <div
            class="card-footer text-muted py-3 question-footer flex-column d-flex justify-content-between align-items-center"
          >
            <!-- CEVAPLAR-->
            <template class="w-100" v-if="question?.comments?.length > 0">
              <div
                v-for="comment in question.comments"
                :key="comment.id"
                class="card text-left mb-3 ms-1 w-100"
              >
                <div class="card-body">
                  <div class="mt-3">
                    <p class="text-muted">
                      {{ comment.details }}
                    </p>
                  </div>
                </div>
                <div
                  class="card-footer text-muted py-2 question-footer d-flex justify-content-between align-items-center"
                >
                  <div class="custom-text-light">
                    <i class="fa fa-user-circle me-1"></i>
                     User1212 {{ timeDetail(comment.created_at) }}
                  </div>
                  <div class="question-action-container">
                    <a href="#" class="like-btn text-muted me-2">
                      <i class="fa fa-thumbs-up"></i> (2)
                    </a>
                    <a href="#" class="dislike-btn text-muted">
                      <i class="fa fa-thumbs-down"></i> (3)
                    </a>
                  </div>
                </div>
              </div>
            </template>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import moment from 'moment'
import { appAxios } from "@/utils/AppAxios.js";
import { mapGetters } from "vuex";
export default {
  data() {
    return {
      question: ''
    };
  },
  created() {
    appAxios
      .get(
        `/questions/${this.$route.params.id}?_expand=category&_embed=comments`
      )
      .then((response) => {
        // console.log(response?.data?.title)
        this.question = response?.data || null;

      }).catch(e => console.log(e))
  },
  methods: {
    timeDetail(time){
      return moment(time).fromNow()
    }
  }
};
</script>
