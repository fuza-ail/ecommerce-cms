<template>
  <div id="main-section">
    <div id="add-button">
      <router-link to="/admin/dashboard/add">
        <b-button>Add Product</b-button>
      </router-link>
      <router-view></router-view>
    </div>
    <hr style="border:1px grey solid" />
    <div class="list">
      <table>
        <thead>
          <tr>
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
          <tr v-for="item in products" :key="item.id" :dataItem="item">
            <td>{{item.id}}</td>
            <td>{{item.name}}</td>
            <td>{{item.image_url}}</td>
            <td>{{item.price}}</td>
            <td>{{item.stock}}</td>
            <td>{{item.category}}</td>
            <td>{{item.description}}</td>
            <td>
              <b-button
                v-b-modal.modal-center
                variant="info"
                style="padding:3px 5px;margin:3px 3px;"
              >
                <i class="fa fa-edit"></i>
              </b-button>
              <b-button
                variant="danger"
                style="padding:3px 5px;margin:3px 3px;"
                @click="deleteItem(item)"
              >
                <i class="fa fa-trash"></i>
              </b-button>
            </td>
            <b-modal
              id="modal-center"
              centered
              title="Edit Item"
              ok-only
              ok-variant="secondary"
              ok-title="Cancel"
            >
              <EditForm :product="item"></EditForm>
            </b-modal>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>

<script>
import AddProduct from "./AddProduct";
import EditForm from "./EditForm";

export default {
  name: "MainSection",
  components: {
    AddProduct,
    EditForm
  },
  data() {
    return {
      dataItem: null
    };
  },
  computed: {
    products() {
      return this.$store.state.products;
    }
  },
  methods: {
    deleteItem(item) {
      Swal.fire({
        title: "Are you sure?",
        text: "You won't be able to revert this!",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Yes, delete it!"
      }).then(result => {
        if (result.value) {
          this.$store.dispatch("deleteData", item);
          Swal.fire("Deleted!", "Your file has been deleted.", "success");
        }
      });
    }
  }
};
</script>

<style scoped>
#add-button {
  text-align: center;
  margin: 20px auto;
}
th {
  background: rgb(235, 235, 235);
  padding: 5px 5px;
  border: 1px solid rgb(182, 182, 182);
}
#main-section {
  text-align: center;
  margin: auto;
}
td {
  border: 1px solid rgb(182, 182, 182);
  padding: 3px;
}
table {
  margin: auto;
  margin-bottom: 20px;
  width: 90%;
}
</style>