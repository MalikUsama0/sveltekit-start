<script>
	import { goto } from '$app/navigation';
	const handleClick = () => {
		goto('slots');
	};
</script>

<h2>Welcome home</h2>

<button on:click={handleClick}>Goto slots</button>
