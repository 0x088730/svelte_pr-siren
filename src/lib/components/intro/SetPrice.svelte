<script lang="ts">
	import Button from "../Button.svelte";
	import BuilderPriceTypeOneChart from "./BuilderPriceTypeOneChart.svelte";
	import BuilderPriceTypeTwoChart from "./BuilderPriceTypeTwoChart.svelte";
	import BuilderPriceTypeThreeChart from "./BuilderPriceChart.svelte";
	import ChartOption from "./ChartOption.svelte";
	import SetPriceTextArea from "./SetPriceTextArea.svelte";

	let activeOption: 0 | 1 | 2 | 3 = 0;
</script>

<h2 class="font-semibold text-dark-text text-menu mb-sm">step 4</h2>

<h1 class="font-medium text-intro-title mb-md">
	Set price for join your group
</h1>

<div class="grid grid-cols-3 gap-[6px] mt-[46px] mb-10">
	<ChartOption
		active={activeOption === 1}
		on:click={() => (activeOption = 1)}
		disabled={activeOption === 2 || activeOption === 3}
		data={[1, 1]}
		chartOptionId="one"
	/>
	<ChartOption
		active={activeOption === 2}
		on:click={() => (activeOption = 2)}
		disabled={activeOption === 1 || activeOption === 3}
		data={[0, 1]}
		chartOptionId="two"
	/>
	<ChartOption
		active={activeOption === 3}
		on:click={() => (activeOption = 3)}
		disabled={activeOption === 1 || activeOption === 2}
		data={[
			1, 0.9793000000000001, 0.9664000000000001, 1.0351000000000001, 1.2592,
			1.7125, 2.4688, 3.6018999999999997, 5.185600000000001, 7.293700000000001,
			10,
		]}
		chartOptionId="three"
	/>
</div>

<SetPriceTextArea showIncreasingButton={activeOption === 2} />

<div class="h-7"></div>

{#if activeOption === 1}
	<p class="font-medium text-menu text-light-text mb-[10px]">
		Example builder price
	</p>

	<BuilderPriceTypeOneChart data={[1, 1, 1]} type={1} />
{/if}

{#if activeOption === 2}
	<p class="font-medium text-menu text-light-text mb-[10px]">
		Example builder price
	</p>

	<BuilderPriceTypeTwoChart data={[0, 1, 2]} type={2} />
{/if}

{#if activeOption === 3}
	<p class="font-medium text-menu text-light-text mb-[10px]">
		Example builder price
	</p>

	<BuilderPriceTypeThreeChart
		data={[1, 0.9793000000000001, 7.293700000000001]}
		type={2}
	/>
{/if}

{#if activeOption !== 0}
	<div class="fixed left-0 w-full px-4 bottom-7">
		<Button class="block w-full mt-3 text-base">Finish</Button>
	</div>
{:else}
	<div class="fixed left-0 w-full px-4 bottom-7">
		<Button class="block w-full mt-3 text-base" disabled>Finish</Button>
	</div>
{/if}
