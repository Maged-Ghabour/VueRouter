<template>
    <div>
        <h1>Home Component </h1>
        <div class="card" v-for="product in products" :key="product.id">
            {{ products.name }}
        </div>
    </div>
</template>
<script>
import products from "./products"

export default {
    data() {
        return {
            products: products
        }
    },
}

</script>