<script lang="ts">
	import Button from "$lib/components/Button.svelte";
	import { Bookmark, Right } from "$lib/icons";

	export let img: string;
	export let name: string;
	export let description: string;
	export let btnClickAction: () => void = () => {};
	export let btnClickAction2: () => void = () => {};
</script>

<div class="flex items-center gap-3">
	<div class="flex items-center flex-1">
		<div class="mr-[18px]">
			<img
				src={img}
				alt={name}
				class="w-[60px] h-[60px] min-w-[60px] min-h-[60px] rounded-full"
			/>
		</div>

		<div class="flex-1">
			<h3 class="font-medium truncate text-menu-item max-w-[120px]">{name}</h3>
			<p
				class="mt-[1px] truncate max-w-[calc(100vw-250px)] font-semibold leading-4 text-[#9AA3AB] dark:text-dark-text text-btn"
			>
				{description}
			</p>
		</div>
	</div>

	<div class="flex items-center pt-2">
		<Button
			class="mr-2 bg-primary-light/20 dark:bg-primary/20 dark:!text-primary !text-primary-light hover:bg-primary-light/30 active:bg-primary-light/40 dark:hover:bg-primary-hover/20 dar:active:bg-primary-active/20 backdrop-blur-lg"
			on:click={btnClickAction}
		>
			<span class="[&>*]:fill-primary mr-2">
				{@html Bookmark}
			</span>
			Sell
		</Button>

		<Button
			class="w-10 h-10 [&>*]:w-6 [&>*]:h-6 p-0"
			isIcon
			on:click={btnClickAction2}
		>
			{@html Right}
		</Button>
	</div>
</div>
