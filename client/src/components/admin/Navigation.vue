<template>
  <div id="navigation">
    <h2>Dasboard</h2>
    <b-button variant="info" id="logout-button" @click="logout">Logoout</b-button>
  </div>
</template>

<script>
  export default {
    methods:{
      logout(){
        localStorage.removeItem('access_token')
        this.$router.push({path:"/admin/login"})
      }
    }
  };
</script>

<style scoped>
  #navigation{
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    background: rgb(197, 197, 197);
    padding: 1px 20px;
    width: 100%;
  }
  #logout-button{
    padding: 2px 5px;
  }
</style>