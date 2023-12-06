<script lang="ts">
	import { theme, inputEthValue } from "$lib/store";
	import Chart from "chart.js/auto";
	import { onMount } from "svelte";
	let chartEl: HTMLCanvasElement;

	const pointSvg = `data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxMSIgaGVpZ2h0PSIxMSIgdmlld0JveD0iMCAwIDExIDExIiBmaWxsPSJub25lIj4KICA8Y2lyY2xlIGN4PSI1LjUiIGN5PSI1LjUiIHI9IjUuNSIgZmlsbD0id2hpdGUiLz4KICA8Y2lyY2xlIGN4PSI1LjUiIGN5PSI1LjUiIHI9IjMuNSIgZmlsbD0iIzIwMjIyNCIvPgo8L3N2Zz4=`;

	const pointSvgLight = `data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxMSIgaGVpZ2h0PSIxMSIgdmlld0JveD0iMCAwIDExIDExIiBmaWxsPSJub25lIj4KICA8Y2lyY2xlIGN4PSI1LjUiIGN5PSI1LjUiIHI9IjUuNSIgZmlsbD0id2hpdGUiLz4KICA8Y2lyY2xlIGN4PSI1LjUiIGN5PSI1LjUiIHI9IjMuNSIgZmlsbD0iIzQxQTRGRiIvPgo8L3N2Zz4=`;

	export let data: number[];

	let dataPoints: {
		x: number;
		y: number;
	}[] = [];

	let inputEtherValue;

	$: inputEtherValue = $inputEthValue;

	export let type: 1 | 2 | 3 = 1;

	onMount(() => {
		const ctx = chartEl.getContext("2d");

		if (!ctx) return;

		const chart = new Chart(ctx, {
			type: "line",
			data: {
				labels: data,
				datasets: [
					{
						data,
						borderColor: $theme === "dark" ? "#fff" : "#41A4FF",
						borderWidth: 3,
						pointStyle: $theme === "dark" ? pointSvg : pointSvgLight,
						pointRadius: 11 / 2,
						pointHoverRadius: 11 / 2,
						pointHoverBackgroundColor: "#202020",
						pointBackgroundColor: "#202020",
						pointHoverBorderWidth: 3,
					},
				],
			},
			options: {
				animation: false,
				plugins: {
					legend: { display: false },
					tooltip: { enabled: false },
				},
				layout: {
					padding: { x: 800 },
				},
				scales: {
					x: {
						display: false,
					},
					y: {
						display: false,
					},
				},
				elements: {
					line: {
						cubicInterpolationMode: 'monotone'
					}
				}
			},
		});

		var meta = chart.getDatasetMeta(0);
		if (!meta) return;

		dataPoints = meta.data.map((point) => ({
			x: point.x,
			y: point.y,
		}));
	});
</script>

<div
	class="relative flex flex-col h-[193px] items-center justify-center w-full pt-[2em] dark:chartbg dark:bg-white/5 bg-[#F5F8FB] rounded-btn"
>
	<canvas bind:this={chartEl}></canvas>

	{#if dataPoints.length > 0}
		{#each dataPoints as point, i}
			<div
				class="absolute top-0 left-0 flex flex-col items-center justify-center"
				style="transform: translate(calc({point.x}px - {{
					1: i === 0 ? '20%' : i === dataPoints.length - 1 ? '80%' : '50%',
					2: i === 0 ? '-40%' : i === dataPoints.length - 1 ? '96%' : '50%',
					3: i === 0 ? 1 : 50,
				}[type]}), calc({point.y}px - {{
					1: '120%',
					2: i === 0 ? '220%' : i === dataPoints.length - 1 ? '20%' : '120%',
					3: i === 0 ? 0 : 50,
				}[type]}));"
			>
				<p class="text-dark-text text-[10px] font-semibold">ticket {i == 0 ? 1 : i == 2 ? 1000: i ==3 ? 10000: 100}</p>
				<p class="font-medium text-menu">{inputEtherValue * (i == 0 ? 1 : i == 2 ? 1000: i ==3 ? 10000: 100)} eth</p>
			</div>
		{/each}
	{/if}
</div>

<style>
	.chartbg {
		background-image: url("/intro/chartbg.png");
		background-size: cover;
		background-position: center;
		background-repeat: no-repeat;
	}
</style>
