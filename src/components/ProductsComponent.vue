<template>
    <div>
        <h1 class="text-center text-primary my-2 fw-bold">Products</h1>
        <div class="row row-cols-1 row-cols-sm-2 row-cols-md-3  row-cols-lg-4 row-cols-xlg-5  g-4">
            <div class="col" v-for="product in products" :key="product.id">
                <router-link :to="'/products/' + product.id">
                    <div class="card">
                        <img :src="product.image" alt="" class=" card-image-top">
                        <div class="card-body">
                            <h5 class="card-title">{{ product.name }} </h5>
                            <p class="card-text">{{ product.description }}</p>
                        </div>
                    </div>
                </router-link>

            </div>
        </div>
    </div>

</template>

<script>
import { products } from "./products";

export default {
    data() {
        return {
            products: products
        }
    },
}
</script>

<style scoped>
a {
    text-decoration: none;
    color: inherit;
}
</style>