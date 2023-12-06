<script lang="ts">
	import { theme } from "$lib/store";
	import Chart from "chart.js/auto";
	import { onMount } from "svelte";
	import { fade } from "svelte/transition";

	let chartEl: HTMLCanvasElement;

	export let data: number[];
	export let disabled = false;

	onMount(() => {
		const ctx = chartEl.getContext("2d");

		if (!ctx) return;

		var gradient = ctx.createLinearGradient(0, 0, 0, 208);
		if ($theme === "dark") {
			gradient.addColorStop(0.02, disabled ? "#3c3e3f" : "#284a89");
			gradient.addColorStop(0.5, "transparent");
		}
		{
			gradient.addColorStop(0.02, disabled ? "#ACAFB2" : "#9BCEFD");
			gradient.addColorStop(1, "transparent");
		}

		new Chart(ctx, {
			type: "line",
			data: {
				labels: data,
				datasets: [
					{
						data,
						backgroundColor: gradient,
						fill: true,
						cubicInterpolationMode: "default",
						tension: 0.5,
						borderColor: disabled
							? "#5c5f62"
							: $theme === "dark"
							  ? "#3076F7"
							  : "#41A4FF",
						borderWidth: 2,
					},
				],
			},
			options: {
				maintainAspectRatio: false,
				animation: false,
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
	class="min-w-[91px] h-[52px] w-full flex-1 overflow-hidden flex flex-col items-center justify-center"
>
	<canvas bind:this={chartEl} height="52px"></canvas>
</div>
