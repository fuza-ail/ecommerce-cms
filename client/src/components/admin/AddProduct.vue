<template>
  <div id="add-product">
    <b-form>
      <b-input placeholder="Product's Name"></b-input>
      <b-input placeholder="Product's Image URL"></b-input>
      <b-input placeholder="Price" type="number"></b-input>
      <b-input placeholder="Stock" type="number"></b-input>
      <b-form-select v-model="selected" :options="category"></b-form-select>
      <b-form-textarea id="textarea" placeholder="Description" rows="3" max-rows="6"></b-form-textarea>
      <b-button type="submit" variant="info" id="login-button">Create</b-button>
      <br />
    </b-form>
    <b-button @click="back" type="submit" variant="dark" id="login-button">Cancel</b-button>
  </div>
</template>

<script>
export default {
  name: "AddProduct",
  data() {
    return {
      selected: null,
      category: [
        { value: null, text: "Category" },
        { value: "smartphone", text: "smartphone" },
        { value: "tablet", text: "tablet" },
        { value: "laptop", text: "laptop" }
      ]
    };
  },
  methods: {
    back() {
      this.$router.push({ path: "/admin/dashboard" });
    }
  }
};
</script>

<style scoped>
#add-product {
  margin: auto;
  text-align: center;
}
input,
textarea,
button,
select {
  margin: 5px auto;
  width: 300px;
}
</style>