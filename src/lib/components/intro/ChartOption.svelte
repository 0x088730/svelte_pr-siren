<script lang="ts">
	import { hideGradient, theme } from "$lib/store";
	import { onDestroy, onMount } from "svelte";
	import ChartOptionChart from "./ChartOptionChart.svelte";

	export let data: number[];
	export let active = false;
	export let disabled = false;
	export let chartOptionId = "one";
	onMount(() => {
		$hideGradient = true;
	});

	onDestroy(() => {
		$hideGradient = false;
	});
</script>

<button
	class="text-center transition-all flex items-center justify-center flex-col rounded-btn bg-[#F5F8FB] dark:bg-white/5 px-[14px] py-[11px] {active
		? `

    ring-inset ring-2 dark:ring-primary ring-primary-light
`
		: ''}"
	on:click
>
	<h1 class="font-medium text-menu mb-[46px]">Type {chartOptionId}</h1>

	{#key `chart-${active}-${disabled}-${$theme}`}
		<ChartOptionChart {data} {disabled} />	
	{/key}

	<p
		class="font-semibold transition-all text-btn mt-[18px]"
		class:text-primary={active}
		class:text-dark-text={disabled}
	>
		Choose{active ? "n" : ""}
	</p>
</button>
