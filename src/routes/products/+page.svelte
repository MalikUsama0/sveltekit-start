<script>
	const num = 8;
	const products = ['mobile', 'laptop', 'earbuds'];
	const productss = [];
	let count = 0;
	let totalCount = count;
	$: anotherCount = totalCount + count;

	const addProduct = () => {
		count = count + 1;
		// totalCount = count;
	};
</script>

<h2>here is list of products</h2>

{#each products as product, index (product)}
	<h2 key={index}>{index + 1}{product}</h2>
{:else}
	<h4>No Product found</h4>
{/each}

{#if num >= 0}
	<h5>{num} is positive number</h5>
	<h5>its ok</h5>
{:else if num < 0}
	<h2>{num} is negative number</h2>
{:else}
	<h2>{num} is not a number</h2>
{/if}
<p>Products {count}</p>
<p>Total Products {anotherCount}</p>
<p>Total Counts {totalCount}</p>
<button on:click={addProduct}>Add Product</button>
