<script lang="ts">
	import Button from "$lib/components/Button.svelte";
	import { Search } from "$lib/icons";

	export let value = "";
</script>

<div
	class="flex items-center justify-center px-[9px] py-[7px] bg-search-light dark:text-white dark:bg-search rounded-menu"
>
	<div class="mr-2">
		{@html Search}
	</div>

	<input
		type="text"
		class="flex-1 font-medium text-black placeholder:text-[#9AA3AB] dark:placeholder-white placeholder-opacity-50 bg-transparent outline-none dark:text-white text-menu"
		placeholder="Search Something"
		bind:value
	/>

	<Button>Search</Button>
</div>
