<style scoped></style>
<template>
    <div>
        <div class="container">
            <div class="row">
                <div class="mr40 mt20">
                    <router-link to="/list-product">
                        <img src="../../assets/icons/back.svg">
                    </router-link>
                </div>
                <div>
                    <h1 class="m0">Detail Product</h1>
                    <p class="mt5 mb20 tc-green">Your product details</p>
                </div>
            </div>
            <hr class="uline-grey">
            <div class="col-2">
                <div class="product-container">
                    <div class="product-image">
                        <img v-if="datas.product_image" :src="getGambarURL(datas.product_image)" alt="Nama Produk">
                        <div class="mt20">
                            <span class="">Status</span>
                            <hr class="uline-black mb20 w25">
                            <label v-if="datas.publish == true" class="label-green">Publish</label>
                            <label v-if="datas.publish == false" class="label-red">Not Publish</label>
                        </div>
                        <div class="mt20">
                            <span class="">Product Status</span>
                            <hr class="uline-black mb20 w25">
                            <label v-if="datas.product_status == true" class="label-green">Availability</label>
                            <label v-if="datas.product_status == false" class="label-red">Not Availability</label>
                        </div>
                    </div>
                    <div class="product-details">
                        <p>{{ datas.product_code }}</p>
                        <div class="product-title">
                            {{ datas.product_name }}
                        </div>
                        <h3>{{ datas.price }}</h3>
                        <div class="product-description">
                            <p class="text-bold">Product Description : </p>
                            {{ datas.description }}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import { listProduct } from '../../store/dummy';
export default {
    name: 'detail-product',
    data() {
        return {
            datas: listProduct[this.$route.params.id - 1]
        }
    },
    methods: {
        getGambarURL(namaGambar) {
            return require(`@/assets/images/product/${namaGambar}`);
        }
    }
}
</script>