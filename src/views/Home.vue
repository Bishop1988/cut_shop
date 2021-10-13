<template>
  <div class="home">
    <h1>All Materials</h1>
    <div class="materials">
      <div v-for="material in materials" :key="material.name">
        <router-link
          :to="{ name: 'materialsDetails', params: { slug: material.slug } }"
        >
          <h2>{{ material.name }}</h2>
        </router-link>
        <figure>
          <router-link
            :to="{ name: 'materialsDetails', params: { slug: material.slug } }"
          >
            <img
              :src="require(`@/assets/${material.image}`)"
              :alt="material.name"
            />
          </router-link>
        </figure>
      </div>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import store from "@/store.js";
export default {
  name: "Home",
  components: {},
  data() {
    return {
      materials: store.materials,
    };
  },
};
</script>

<style scoped>
.home {
  max-width: 1400px;
  margin: 0 auto;
}

img {
  max-width: 200px;
}

.materials {
  display: flex;
  justify-content: center;
}

a {
  color: lightseagreen;
  text-decoration: none;
}

a:hover,
a:visited {
  text-decoration: underline;
}

/* @media only screen and (max-width: 1140px) {
  .materials {
    flex-direction: column;
  }
} */
</style>
