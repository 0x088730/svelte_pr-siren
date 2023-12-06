<script lang="ts">
	import { Pinch, SetPriceTextArea } from "$lib/icons";
    import { onMount } from "svelte";
	import { inputEthValue, setEtheValue } from "$lib/store";
	export let showIncreasingButton = false;

	let inputValue = '';

	function handleInputChange(event: { target: { value: string; }; }) {
		inputValue = event.target.value;
		inputEthValue.set(event.target.value);
	}

	let ethereumPrice: number | null = null;

	const getEthereumPrice = async () => {
		try {
			const response = await fetch('https://api.coingecko.com/api/v3/simple/price?ids=ethereum&vs_currencies=usd');
			const data = await response.json();

			if(data && data.ethereum && data.ethereum.usd) {
				ethereumPrice = data.ethereum.usd;
				console.log(data.ethereum.usd)
				setEtheValue.set(data.ethereum.usd);
			} else {
				console.error('Error fetching Ethereum price data.');
			}
		} catch (error) {
			console.log('Error fetching Ethereum price:', error);
		}
	}

	onMount(() => {
		getEthereumPrice();
	})
</script>

<div
	class="grid {showIncreasingButton
		? 'grid-cols-12'
		: 'grid-cols-7'} overflow-hidden"
>
	<div
		class="flex col-span-7 items-center justify-center border rounded-xl dark:border-[#4E4E4ECC] border-[#9AA3AB] px-[9px]"
	>
		<div class="flex items-center justify-center mr-[10px]">
			{@html SetPriceTextArea}
		</div>

		<input
			type="number"
			class="flex-1 font-medium bg-transparent outline-none w-max text-menu h-14"
			class:w-14={showIncreasingButton}
			bind:value={inputValue}
			on:input={handleInputChange}
		/>

		<div class="font-medium text-light-text text-menu">= ${ inputValue * ethereumPrice}</div>
	</div>

	{#if showIncreasingButton}
		<div
			class="flex ml-[15px] col-span-5 items-center justify-center border rounded-xl dark:border-[#4E4E4ECC] border-[#9AA3AB] px-[9px]"
		>
			<div class="flex items-center justify-center mr-[10px]">
				{@html Pinch}
			</div>

			<div class="font-medium text-light-text text-menu">increasing</div>
		</div>
	{/if}
</div>
