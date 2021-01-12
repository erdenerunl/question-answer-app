<template>
  <div class="card">
    <div class="card-header">Recommended for you</div>
    <ul class="list-group">
      <li v-for="i in 10" :key="i" class="list-group-item">
        <div class="user-card-info">
          <img
            class="img-box"
            src="https://picsum.photos/id/10/100/100"
            alt="user-photo"
          />
        </div>
        <div class="card-text">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. At autem
          earum sit eaque, atque incidunt.
        </div>
      </li>
    </ul>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
.card {
  height: 100vh;
  margin: 2rem 0 1rem 0;
}
.user-card-info {
  width: 50px;
  height: auto;
}
.img-box {
  max-width: 100%;

  border-radius: 0 50% 50% 50%;
}
</style>