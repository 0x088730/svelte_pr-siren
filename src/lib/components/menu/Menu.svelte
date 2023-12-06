<script>
	let className = "";

	export { className as class };
</script>

<div
	class="flex items-center justify-center p-1 border rounded-menu border-menu-light dark:border-menu {className}"
>
	<slot />
</div>
