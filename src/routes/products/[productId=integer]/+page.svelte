<script>
	import { page } from '$app/stores';
	console.log($page, 'here is page in params');
	const productId = $page.params.productId;
</script>

<h3>Here is detail of product {productId}</h3>
