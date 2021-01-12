<template>
  <div class="card">
    <div class="card-header">Recommended for you</div>
    <ul class="list-group">
      <li v-for="recommend in customRecommendations" :key="recommend" class="list-group-item">
        <div class="user-card-info">
          <div class="img-box">
            <img
            :src="recommend.imageUrl"
            alt="recommend.title"
          />
          </div>
          <div class="card-text text-muted">
           {{ recommend.category.title }}
          </div>
        </div>
        <div class="card-title mt-2">
          {{ recommend.title }}
        </div>
      </li>
    </ul>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
export default {
  computed: {
    ...mapGetters({
      recommendations: "questions/_questionList"
    }),
    customRecommendations(){
      // ileride random olarak eklemek gerekirse burası değiştirilecek.
     return this.recommendations.slice(0,5).sort(()=> (Math.random() -0.5))
    }
  }
};
</script>

<style lang="scss" scoped>
.card {
  height: auto;
  margin: 2rem 0 1rem 0;
}
.user-card-info{
  display: flex;
  align-items: center;
  justify-content: space-between;
}
.img-box {
  width: 50px;
  height: auto;
}
img {
  max-width: 100%;
  border-radius: 0 50% 50% 50%;
}
.card-title{
  width: 100%;
  display: -webkit-box;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 2;
  overflow: hidden;
}
.list-group-item {
  border: 0;
  border-bottom: 1px solid rgba(0,0,0,.125) ;
}
</style>