<script lang="ts">
	export let send: any;
	export let receive: any;

	export let active = false;
	export let icon = "";
</script>

<button
	class="flex relative items-center transition-all justify-center {active
		? ''
		: 'dark:text-[#5C5F62] text-[#9AA3AB]'} flex-1 font-medium text-menu p-menu rounded-menu"
	on:click
>
	<span
		class="mr-2 [&>*]:transition-all z-20 {active
			? 'dark:[&>*]:fill-primary [&>*]:fill-primary-light'
			: 'dark:[&>*]:fill-[#5C5F62] [&>*]:fill-[#9AA3AB]'}"
	>
		{@html icon}
	</span>

	<span class="z-20">
		<slot />
	</span>

	{#if active}
		<div
			class="absolute left-0 z-10 w-full h-full bg-menu-item-active-light dark:bg-menu-item-active rounded-menu"
			in:receive={{ key: "active" }}
			out:send={{ key: "active" }}
		/>
	{/if}
</button>
