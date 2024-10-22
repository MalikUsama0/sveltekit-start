<script>
	import { setContext } from 'svelte';
	import ComponentB from './ComponentB.svelte';
	let data = {
		message: 'welcome',
		greet() {
			alert('hello');
		}
	};

	setContext('main-data', data);
</script>

<main>
	<h3>hello here is component A</h3>
	<ComponentB />
</main>
