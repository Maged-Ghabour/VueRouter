<template>
  <div>
    <ul class="list-group list-group-horizontal justify-content-center mt-3">
      <li class="list-group-item">
        <router-link active-class="active" to="/">Home</router-link>
      </li>
      <li class="list-group-item">
        <router-link active-class="active" to="/about">About</router-link>
      </li>
      <li class="list-group-item">
        <router-link active-class="active" to="/contact">Contact</router-link>
      </li>
      <li class="list-group-item">
        <router-link active-class="active" to="/products">Products</router-link>
      </li>
    </ul>
  </div>


  <div class="container">
    <router-view>

    </router-view>
  </div>

</template>

<script>

export default {

}
</script>

<style scoped>
ul li:hover {
  background-color: #eee;
  cursor: pointer;
}

.active {
  background-color: #accaff88;
}

li {
  padding: 0;
}


a {
  text-decoration: none;
  color: #007876;
  font-weight: bold;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 10px;

}
</style>
