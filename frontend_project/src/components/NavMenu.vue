<template>
  <div class="NavMenu" id="NavMenu">
    <router-link class="link" to="/">Home</router-link>
    <router-link class="link" to="/userList">User List</router-link>
    <router-link class="link" to="/User">User Data</router-link>
    <router-link class="link" to="/Registration">Create User</router-link>
  </div>
</template>



<script>
export default {  
  
}

</script>

<style scoped>
.NavMenu {	
  background-color: #333;
  overflow: hidden;
}

.NavMenu a {
  float: left;
  color: #f2f2f2;
  text-align: center;
  padding: 14px 16px;
  text-decoration: none;
  font-size: 17px;
}

.NavMenu a:hover {
  background-color: #ddd;
  color: black;
}

.NavMenu a.active {
  background-color: #4CAF50;
  color: white;
}
</style>