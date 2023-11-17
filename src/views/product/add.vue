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
                    <h1 class="m0">Add Product</h1>
                    <p class="mt5 mb20 tc-green">Make your product looking good for customer</p>
                </div>
            </div>
            <hr class="uline-grey">
            <div class="mt50 row">
                <div class="w20">
                    <label class="form-label">Product Image</label>
                </div>
                <div class="w80">
                    <div class="form-upload">
                        <input type="file" name="myfile" id="myfile" accept="image/*" />
                        <label for="myfile" class="btn">
                            <img src="../../assets/icons/file-image.svg" style="width: 30px;">
                        </label>
                    </div>
                </div>
            </div>
            <div class="mt30 row">
                <div class="w20">
                    <label class="form-label">Product Code</label>
                </div>
                <div class="w80 p-relative">
                    <input v-model="product_code" @input="countProductCode" class="form-text" maxlength="8" type="text"
                        placeholder="Product Code">
                    <div class="character-count detail-title-bold">| {{ productCodeLength }} / 8</div>
                </div>
            </div>
            <div class="mt30 row">
                <div class="w20">
                    <label class="form-label">Product Name</label>
                </div>
                <div class="w80 p-relative">
                    <input v-model="product_name" @input="countProductName" maxlength="20" class="form-text" type="text"
                        placeholder="Product Name">
                    <div class="character-count detail-title-bold">| {{ productNameLength }} / 20</div>
                </div>
            </div>
            <div class="mt30 row">
                <div class="w20">
                    <label class="form-label">Price</label>
                </div>
                <div class="w80">
                    <input class="form-text" type="text" placeholder="Price">
                </div>
            </div>
            <div class="mt30 row">
                <div class="w20">
                    <label class="form-label">Product Description</label>
                </div>
                <div class="w80">
                    <textarea class="form-text-area" placeholder="Masukkan Product Description" cols="30"
                        rows="10"></textarea>
                </div>
            </div>
            <div class="mt30 row">
                <div class="w20">
                    <label class="form-label">Unit</label>
                </div>
                <div class="w80">
                    <input class="form-text" type="number" placeholder="Unit">
                </div>
            </div>
            <div class="mt30 row">
                <div class="w20">
                    <label class="form-label">Min Purchase</label>
                </div>
                <div class="w80">
                    <input class="form-text" type="number" placeholder="Masukkan Min Purchase">
                </div>
            </div>
            <div class="mt30 row">
                <div class="w20">
                    <label class="form-label">Max Purchase</label>
                </div>
                <div class="w80">
                    <input class="form-text" type="number" placeholder="Masukkan Max Purchase">
                </div>
            </div>
            <div class="mt30 row">
                <div class="w20">
                    <label class="form-label">Category</label>
                </div>
                <div class="w80">
                    <select class="form-select">
                        <option disabled selected>Pilih Category</option>
                        <option value="1">Electronics</option>
                        <option value="2">Clothing and Apparel</option>
                        <option value="3">Home Appliances and Furniture</option>
                    </select>
                </div>
            </div>
            <div class="flex mt30">
                <router-link to="/list-user">
                    <button class="bt-submit-green">Add Product</button>
                </router-link>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'add-user',
    data() {
        return {
            product_code: '',
            productCodeLength: 0,
            product_name: '',
            productNameLength: 0
        }
    },
    methods: {
        countProductCode() {
            this.productCodeLength = this.product_code.length
        },
        countProductName() {
            this.productNameLength = this.product_name.length
        }
    }
}
</script>