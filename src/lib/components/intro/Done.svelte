<script lang="ts">
	import { onDestroy, onMount } from "svelte";
	import Icon from "./Icon.svelte";
	import { hideGradient, hideIntroOverflow } from "$lib/store";
	import Button from "../Button.svelte";

	onMount(() => {
		$hideIntroOverflow = true;
		$hideGradient = false;
	});

	onDestroy(() => {
		$hideIntroOverflow = false;
		$hideGradient = true;
	});
</script>

<Icon iconUrl="/intro/star.png" />

<div class="flex flex-col items-center justify-center -mt-40 text-center">
	<h1 class="font-medium text-intro-title mb-md">Your group in list</h1>

	<p class="text-base font-medium text-light-text max-w-[296px]">
		please wait few seconds, after you can go to third step
	</p>
</div>

<div class="fixed left-0 w-full px-4 bottom-7">
	<Button class="block w-full mt-3 text-base">Finish</Button>
</div>
