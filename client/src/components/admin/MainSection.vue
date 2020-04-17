<template>
  <div id="main-section">
    <div id="add-button">
      <router-link to="/admin/dashboard/add">
        <b-button>Add Product</b-button>
      </router-link>
      <router-view></router-view>
    </div>
    <hr style="border:1px grey solid">
    <div class="list">
      <table>
        <thead >
          <tr >
            <th>Id</th>
            <th>Name</th>
            <th>Image Url</th>
            <th>Price</th>
            <th>Stock</th>
            <th>Category</th>
            <th>Description</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="item in products" :key="item.id">
            <td>{{item.id}}</td>
            <td>{{item.name}}</td>
            <td>{{item.image_url}}</td>
            <td>{{item.price}}</td>
            <td>{{item.stock}}</td>
            <td>{{item.category}}</td>
            <td>{{item.description}}</td>
            <td>
              <b-button variant="info" style="padding:3px 5px;margin:3px 3px;">Edit</b-button>
              <b-button variant="danger" style="padding:3px;margin:2px 3px;" @click="deleteItem(item)">Delete</b-button>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>

<script>
import AddProduct from "./AddProduct";

export default {
  name: "MainSection",
  components: {
    AddProduct
  },
  data() {
    return {
    };
  },
  computed: {
    products() {
      return this.$store.state.products;
    }
  },
  methods:{
    deleteItem(item){
      this.$store.dispatch('deleteData',item)
    }
  }
};
</script>

<style scoped>
  #add-button {
    text-align: center;
    margin: 20px auto;
  }
  th{
    background:rgb(235, 235, 235);
    padding: 5px 30px;
    border: 1px solid rgb(182, 182, 182);
  }
  #main-section{
    text-align: center;
    margin: auto;
  }
  td{
    border: 1px solid rgb(182, 182, 182);
  }
  table{
    margin :auto;
    margin-bottom: 20px;
  }
  
</style>