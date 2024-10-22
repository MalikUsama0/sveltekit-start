<script>
	import Greet from '$lib/Greet.svelte';
	import { named } from '../../lib/Greet.svelte';
</script>

<main>
	<h3>Hello dashboard</h3>
	<Greet name="usama nusrat" />
	<p>{named}</p>
</main>
