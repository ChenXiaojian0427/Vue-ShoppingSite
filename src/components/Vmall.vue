<template>
	<keep-alive>
	<div class="pure-g">
		<div class="pure-u-1-4" v-for="product in products" :key="product.id">
			<div class="panel">
				<img :src="product.pic" class="pure-img" />
		        <h3>{{product.name}}</h3>
				<p>{{product.price | currency}}</p>
				<div class="panel-btn">
					<buy-btn @addToCart="addToCart(product.id)" 
						@removeFromCart="removeFromCart(product.id)"></buy-btn>
				</div>
			</div>
		</div>
	</div>
	</keep-alive>
</template>

<script>
	import BuyBtn from "./BuyBtn";
	
	export default {
		name: "Vmall",
		data() {
			return {
				products: [] //商品数组
			}
		},
		components: {BuyBtn},
		methods: {
			addToCart: function(productId) {
				//console.log("Add to cart ...");
				this.$product.$emit("addToCart", productId);
			},
			removeFromCart: function(productId) {
				//console.log("Remove from cart ...");
				this.$product.$emit("removeFromCart", productId);
			}
		},
		beforeMount: function() {
			this.$http.get("./static/data/products.json").then(function(resp) {
				//console.log("Success: ", resp.data);
				this.products = resp.data;
			},function(resp) {
				// eslint-disable-next-line
				console.log("Fail: ",resp.status,resp.statusText);
			});
		}
	}
</script>

<style>
    .pure-u-1-4{margin:40px 0 0 0;}
	.pure-g {margin:10px -10px;}
	.panel {position:relative;margin:0 10px;border:1px solid #ccc;}
	.panel img {display:block;margin-bottom:20px;width:100%;height:250px;}
	.panel h3, 
	.panel p {margin:10px 0;padding:0 10px;line-height:1em;}
	.panel-btn {position:absolute;right:10px;bottom:10px;}
</style>