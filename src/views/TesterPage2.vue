<template>
  <div>
    <label>Material Type</label>
    <select name="Material" v-model="materialType">
      <option :value="-1">Please Select</option>
      <option v-for="(materialObject, index) in materials" :value="index">
        {{ materialObject.name }}
      </option>
    </select>
  </div>
</template>
<script>
import store from "@/store.js";
export default {
  name: "testerPage2",
  data() {
    return {
      materialType: -1,
      materials: store.materials,
    };
  },
};
</script>