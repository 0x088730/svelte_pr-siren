<script lang="ts">
	import { onDestroy, onMount } from "svelte";
	import Icon from "./Icon.svelte";
	import { hideGradient, hideIntroOverflow, theme } from "$lib/store";

	onMount(() => {
		$hideIntroOverflow = true;
		$hideGradient = false;
	});

	onDestroy(() => {
		$hideIntroOverflow = false;
		$hideGradient = true;
	});
</script>

<Icon iconUrl="/intro/loading{$theme == 'light' ? '-light' : ''}.png" />

<div class="flex flex-col items-center justify-center -mt-40 text-center">
	<h1 class="font-medium text-intro-title mb-md">We will check</h1>

	<p class="text-base font-medium text-light-text max-w-[296px]">
		please wait few seconds, after you can go to third step
	</p>
</div>
