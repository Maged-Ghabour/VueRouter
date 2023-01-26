<template>
    <div>
        <template>{{ getProduct($route.params.productId) }} </template>

        <!-- {{ productId }} -->




        <div class="row my-5">
            <div class="col-3">
                <img :src="currentProduct.image" class="img-thumbnail w-100" alt="">
            </div>
            <div class="col-9">
                {{ currentProduct.description }}
            </div>
        </div>

        <div class="btn btn-primary">
            <router-link to="/" class="text-light text-decoration-none">Back</router-link>
        </div>

    </div>
</template>
<script>

import { products } from "./products"



export default {

    data() {
        return {
            products: products,
            currentProduct: null
        }

    },
    methods: {
        getProduct(id) {
            for (let i = 0; i < this.products.length; i++) {
                if (this.products[i].id == id) {
                    this.currentProduct = this.products[i]
                    break;
                }
            }
        }
    }


    // props: ["productId"]
}
</script>