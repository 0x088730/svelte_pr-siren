<script lang="ts">
	import Button from "$lib/components/Button.svelte";
	import { Right } from "$lib/icons";

	export let img: string;
	export let name: string;
	export let description: string;
	export let remaining: number;
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
				class="mt-[1px] truncate max-w-[calc(100vw-250px)] font-semibold leading-4 text-dark-text text-btn"
			>
				{description}
			</p>
		</div>
	</div>

	<div class="flex items-center pt-2">
		<p class="min-w-[max-content] font-semibold leading-3 text-menu">
			<span class="text-primary-light dark:text-primary">{remaining}</span>
			<span class="text-[10px] text-primary/70">eth</span>
		</p>
	</div>

	<div class="flex items-center pt-2">
		<Button class="w-10 h-10 [&>*]:w-6 [&>*]:h-6 p-0" isIcon>
			{@html Right}
		</Button>
	</div>
</div>
