import Vue from 'vue'
import Router from 'vue-router'

// User
import User from '../views/user/list'
import AddUser from '../views/user/add';
import EditUser from '../views/user/edit'
import DetailUser from '../views/user/detail'

// Product
import Product from '../views/product/list'
import AddProduct from '../views/product/add'
import EditProduct from '../views/product/edit'
import DetailProduct from '../views/product/detail'

Vue.use(Router)

export default new Router({
	routes: [
		// User Router
		{
			path: '/list-user',
			name: 'list-user',
			component: User
		},
		{
			path: '/add-user',
			name: 'add-user',
			component: AddUser
		},
		{
			path: '/edit-user',
			name: 'edit-user',
			component: EditUser
		},
		{
			path: '/detail-user',
			name: 'detail-user',
			component: DetailUser
		},
		// Router Product
		{
			path: '/',
			name: 'list-product',
			component: Product
		},
		{
			path: '/list-product',
			name: 'list-product',
			component: Product
		},
		{
			path: '/add-product',
			name: 'add-product',
			component: AddProduct
		},
		{
			path: '/edit-product',
			name: 'edit-product',
			component: EditProduct
		},
		{
			path: '/detail-product',
			name: 'detail-product',
			component: DetailProduct
		},
		{
			path: '/detail-product/:id',
			name: 'detail-product/id',
			component: DetailProduct
		}
	]
})
