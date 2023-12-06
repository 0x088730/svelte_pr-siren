<script lang="ts">
	import { ClosedArrow, OpenedArrow } from "$lib/icons";
	import { fly, scale, slide } from "svelte/transition";

	export let onClick: () => void;
	export let expanded = false;
	export let icon: string;
	export let title: string;
	export let subtitle: string;
	export let showBorder = false;

	let className = "";

	export { className as class };
</script>

<div class="mb-[12px] {className}">
	<button
		class="h-[60px] flex items-center w-full justify-start"
		on:click={onClick}
	>
		<div
			class="flex items-center dark:bg-[#202224]  bg-[#F0F0F0] justify-center rounded-full h-[60px] w-[60px]"
		>
			{@html icon}
		</div>

		<div class="flex ml-[13px] flex-col flex-1 text-left">
			<div class="text-base font-medium leading-[120%]">{title}</div>
			<div class="font-medium text-btn text-dark-text">{subtitle}</div>
		</div>

		<div class="relative flex items-center !text-black dark:!text-white justify-center">
			{#if expanded}
				<div in:scale out:scale class="absolute right-0">
					{@html OpenedArrow}
				</div>
			{:else}
				<div in:scale out:scale class="absolute right-0">
					{@html ClosedArrow}
				</div>
			{/if}
		</div>
	</button>

	{#if expanded}
		<div class="mt-7" in:slide out:slide>
			<slot />
		</div>
	{/if}
</div>

{#if showBorder}
	<div
		class="w-[calc(100%-60px)] h-[1px] rounded-full bg-[#DDDDDD] dark:bg-[#202224] ml-[60px] mt-3 mb-3"
	></div>
{/if}
