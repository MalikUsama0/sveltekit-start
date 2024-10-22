<script>
	// export let handleModal;
	import { createEventDispatcher } from 'svelte';
	const dispatch = createEventDispatcher();
</script>

<main>
	<h2>This is popup</h2>
	<!-- <button on:click={() => handleModal()}>Close</button> -->
	<button on:click={() => dispatch('close')}>Close</button>
</main>
