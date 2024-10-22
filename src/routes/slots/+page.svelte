<script>
	import SlotsChild from '../../lib/SlotsChild.svelte';
</script>

<div>
	<h2>Here is slots route</h2>

	<SlotsChild>
		<div slot="header">
			<h3>Header</h3>
		</div>
		<div slot="content">
			<h3>Here is main Content</h3>
		</div>

		<div slot="footer">
			<h3>@all right reserved</h3>
		</div>
	</SlotsChild>
</div>
