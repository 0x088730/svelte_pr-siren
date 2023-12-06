<script lang="ts">
	import Chart from "chart.js/auto";
	import { onMount } from "svelte";
	import { theme } from "$lib/store";

	let chartEl: HTMLCanvasElement;

	let chart = null;

	export let data: number[];

	onMount(() => {
		const ctx = chartEl.getContext("2d");

		if (!ctx) return;

		var gradient = ctx.createLinearGradient(0, 0, 0, 208);
		if ($theme == "dark") {
			gradient.addColorStop(0, "#3f72d1");
			gradient.addColorStop(0.5, "black");
		} else {
			gradient.addColorStop(0, "#41A4FF");
			gradient.addColorStop(0.5, "#fff");
		}
		
		chart = new Chart(ctx, {
			type: "line",
			data: {
				labels: data,
				datasets: [
					{
						data,
						backgroundColor: gradient,
						fill: true,
						cubicInterpolationMode: "monotone",
						tension: 0.4,
						borderColor: $theme === "dark" ? "#3076F7" : "#41A4FF",
					},
				],
			},
			options: {
				elements: {
					point: {
						radius: 0,
					},
				},
				scales: {
					y: {
						beginAtZero: true,
						grid: {
							display: false,
						},
						ticks: {
							display: false,
						},
					},
					x: {
						grid: {
							display: false,
						},
						ticks: {
							display: false,
						},
					},
				},
				plugins: {
					tooltip: {
						enabled: false,
					},
					legend: {
						display: false,
					},
				},
			},
		});
	});
	
</script>

<div
	class="max-w-[208px] overflow-hidden flex flex-col items-center justify-center"
>
	<canvas bind:this={chartEl}></canvas>
</div>
