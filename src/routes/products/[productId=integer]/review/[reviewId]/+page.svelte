<script>
import {page} from '$app/stores'
console.log($page,'here is nested page')
const {reviewId, productId} = $page.params
</script>

<h2>
    review {reviewId} of product {productId}
</h2>