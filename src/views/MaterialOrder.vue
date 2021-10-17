<template>
  <section class="layout">
    <h1>Material Order: {{ materialType.name }}</h1>
    <div class="card">
      <div class="material-details">
        <img
          :src="require(`@/assets/${materialType.image}`)"
          :alt="materialType.name"
        />
      </div>
      <div class="material_type">
        <select name="material" v-model="types">
          <option :value="-1">Please Select</option>
          <option
            v-for="(materialTypeObject, index) in materialType.type"
            :value="index"
            :key="index"
            class="types"
          >
            {{ materialTypeObject.name }}
          </option>
        </select>
      </div>

      <span v-if="types > -1" class="material_type">
        <select name="materialSizes" v-model="size">
          <option :value="-1">Please Select</option>
          <option
            v-for="(materialTypeObject, index) in materialType.type[types].sizes"
            :key="index"
            :value="index"
            class="sizes"
          >
            {{ materialTypeObject.thickness }}mm
          </option>
        </select>
      </span>

      <span v-if="size > -1" class="material_type">
        <p>The price per SqM for {{materialType.type[types].sizes[size].thickness}}mm {{materialType.type[types].name}} {{materialType.name}} is £{{materialType.type[types].sizes[size].priceSqM}}</p>
      </span>
    </div>
  </section>
</template>

<script>
import store from "@/store.js";
export default {
  props: {
    slug: {
      type: String,
      required: true,
    },
    materialTypeSlug: {
      type: String,
      required: true,
    },
  },
  data() {
    return {
      types: -1,
      size: -1,
    }
  },
  computed: {
    material() {
      return store.materials.find((material) => material.slug === this.slug);
    },
    materialType() {
      return this.material.types.find(
        (materialType) => materialType.slug === this.materialTypeSlug
      );
    },
  },
};
</script>

<style scoped>
img {
  max-width: 200px;
  height: auto;
  width: 100%;
  max-height: 400px;
}

.material_type {
  display: inline-block;
}
</style>
