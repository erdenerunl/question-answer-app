<template>
  <div class="card text-left mb-3">
    <div class="card-body">
      <div class="upper-menu mb-3">
        <i class="custom-text-light fa fa-user-circle me-1"></i>
        <span class="custom-text-light"> User1212 </span>
        <small class="text-muted ms-3"> {{ question.created_at }} </small>
        <i class="fas fa-times text-muted float-end" style="cursor: pointer"></i>
      </div>
      <h5 class="card-title">{{ question.title }}</h5>
      <div class="mt-3">
        <p class="text-muted"> {{ question.details }} </p>
        <div class="d-flex justify-content-end align-items-center">
          <div class="custom-text-light"> {{ question.category.title }} </div>
        </div>
      </div>
    </div>
    <div class="card-footer text-muted py-3 question-footer d-flex justify-content-between align-items-center">
      <div>
        <span class="comment-container">
          <i style="cursor:pointer;" title="Upwote" class="fas fa-angle-up fa-lg"></i>
          <small class="ms-1">1.1k</small>
          <span class="custom-seperator mx-2"> | </span>
          <i style="cursor:pointer;" class="fas fa-angle-down fa-lg"></i>
          <small class="ms-1">56</small>
          <i style="cursor:pointer;" class="fas fa-share-alt fa-md ms-5"></i>
          <i style="cursor:pointer;" class="fas fa-comment ms-5"></i>
        </span>
        
      </div>
      <button class="btn-sm btn btn-success">Show the question</button>
    </div>
  </div>
</template>

<script>
export default {
  props: ["question"],
};
</script>

<style>
</style>