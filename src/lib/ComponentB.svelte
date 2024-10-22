<script>
	import { getContext, onMount } from 'svelte';
	const contextData = getContext('main-data');
	const { message, greet } = contextData;
	console.log(contextData, 'here is context data');
	// greet();
	onMount(() => {
		console.log('onmount call');
		greet();
		return () => {
			console.log('component unmount');
		};
	});
</script>

<main>
	<h3>hello here is component B</h3>
	<p>{message}</p>
</main>
