<template>
<div>
  <section class="material">
    <h1>{{ material.name }}</h1>
    <div class="material-details">
      <img :src="require(`@/assets/${material.image}`)" :alt="material.name" />
    </div>
  </section>
  <section class="material-types">
    <div class="cards">
      <div v-for="type in material.types" 
      :key="type.slug"
      class="card">
        <span class="card__text">
          {{ type.name }}
        </span>
        <img :src="require(`@/assets/${type.image}`)" :alt="type.name">
      </div>
    </div>
  </section>
</div>
</template>

<script>
import store from "../store"
export default {
  data() {
    return {};
  },
  props: {
    slug: {
      type: String,
      required: true
    }
  },
  computed: {
      material() {
          return store.materials.find(
              material => material.slug === this.slug
          )
      }
  }
};
</script>

<style scoped>
img {
  max-width: 200px;
  height: auto;
  width: 100%;
  max-height: 400px;
}
.material-types {
  padding: 40px 0;
}
.material-details {
  display: flex;
  justify-content: center;
}
p {
  margin: 0 40px;
  font-size: 20px;
  text-align: left;
}
.cards {
  display: flex;
  justify-content: center;
  
}
.cards img {
  max-height: 200px;
}
.card {
  padding: 1rem;
}
/* .card__text {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  color: white;
  font-size: 25px;
  font-weight: bold;
  text-decoration: none;
} */
</style>