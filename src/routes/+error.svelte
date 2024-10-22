<script>
	import { page } from '$app/stores';
	console.log($page, 'here is page comp');
</script>

<h1>{$page.status}: {$page.error.message}</h1>
