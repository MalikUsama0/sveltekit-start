<script>
	import Popup from '$lib/Popup.svelte';
	let openModal = true;

	$: {
		console.log(openModal, 'model is open or not in main comp');
	}

	const handleModal = () => {
		openModal = false;
	};
</script>

<main>
	{#if openModal}
		<Popup on:close={handleModal} />
	{:else if !openModal}
		<button on:click={() => (openModal = true)}>Open Modal</button>
	{/if}
</main>
