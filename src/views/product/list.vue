<template>
    <div>
        <Menu />
        <div class="container">
            <!-- <pre>{{ hasil_cari }}</pre> -->
            <h1 class="m0">Product</h1>
            <div class="row">
                <div class="col">
                    <p class="mt5 mb20 tc-green">Manage your product details</p>
                </div>
                <div class="col flex">
                    <router-link to="/add-product">
                        <button class="bt-green">+ Add</button>
                    </router-link>
                </div>
            </div>
            <div class="row bg-blue mt10 p10">
                <div class="col">
                    <input v-model="cari" class="search-field" type="text" id="deskripsi"
                        placeholder="Search by invoice number, name, amount" />
                </div>
                <div class="col flex">
                    <button class="bt-blue" @click="findProduct(cari)">Filter</button>
                </div>
            </div>
            <div class="mt50">
                <table>
                    <thead>
                        <tr>
                            <th>PRODUCT CODE</th>
                            <th>PRODUCT NAME</th>
                            <th>PRICE</th>
                            <th>STATUS</th>
                            <th>PRODUCT CATEGORY</th>
                            <th>UNIT</th>
                            <th>PRODUCT STATUS</th>
                            <th>PRODUCT IMAGE</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr v-for="item of list_product" :key="item.id">
                            <td class="center">{{ item.product_code }}</td>
                            <td class="center">{{ item.product_name }}</td>
                            <td class="center">{{ item.price }}</td>
                            <td class="center">
                                <div v-if="item.publish === true">
                                    <label class="label-green">Publish</label>
                                </div>
                                <div v-if="item.publish === false">
                                    <label class="label-red">Not Publish</label>
                                </div>
                            </td>
                            <td class="center">{{ item.product_category }}</td>
                            <td class="center">{{ item.unit }}</td>
                            <td class="center">
                                <div v-if="item.product_status === true">
                                    <label class="label-green">Availability</label>
                                </div>
                                <div v-if="item.product_status === false">
                                    <label class="label-red">Not Availability</label>
                                </div>
                            </td>
                            <td class="center">
                                <img v-if="item.product_image" :src="getGambarURL(item.product_image)" width="125px">
                            </td>
                            <td class="center">
                                <div class="mt5">
                                    <router-link to="/edit-user">
                                        <img src="../../assets/icons/edit.svg">
                                    </router-link>
                                </div>
                                <div class="mt5">
                                    <router-link :to="{ name: 'detail-product/id', params: { id: item.id } }">
                                        <img src="../../assets/icons/detail.svg">
                                    </router-link>
                                </div>
                                <div class="mt5">
                                    <img src="../../assets/icons/delete.svg">
                                </div>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    </div>
</template>

<script>
import Menu from "../../components/menu"
import { listProduct } from '../../store/dummy'


export default {
    name: 'list-user',
    components: {
        Menu
    },
    methods: {
        getGambarURL(namaGambar) {
            return require(`@/assets/images/product/${namaGambar}`);
        },
        findProduct(searchData) {
            searchData = searchData.toLowerCase();
            if (searchData == '') {
                this.list_product = listProduct
                return
            } else {
                this.list_product = this.list_product.filter(product => {
                    const productNameLower = product.product_name.toLowerCase();
                    const productCodeLower = product.product_code.toLowerCase();
                    const totalUnitLower = product.unit.toString().toLowerCase();

                    return productNameLower.includes(searchData) ||
                        productCodeLower.includes(searchData) ||
                        totalUnitLower.includes(searchData);
                });
            }
        }
    },
    data() {
        return {
            list_product: listProduct,
        }
    }
}
</script>