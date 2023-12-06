<script lang="ts">
	import CodeBlock from "$lib/components/CodeBlock.svelte";
	import Checking from "$lib/components/intro/Checking.svelte";
	import CreateGroup from "$lib/components/intro/CreateGroup.svelte";
	import Done from "$lib/components/intro/Done.svelte";
	import JoinGroup from "$lib/components/intro/JoinGroup.svelte";
	import LinkWallet from "$lib/components/intro/LinkWallet.svelte";
	import SetPrice from "$lib/components/intro/SetPrice.svelte";
	import VerifyGroupOwner from "$lib/components/intro/VerifyGroupOwner.svelte";
	import StepperHeading from "$lib/components/stepper/StepperHeading.svelte";
	import { hideBottomMenu, hideGradient, hideTopSpace } from "$lib/store";
	import { onDestroy, onMount } from "svelte";

	onMount(() => {
		$hideTopSpace = true;
		$hideBottomMenu = true;
	});

	onDestroy(() => {
		$hideTopSpace = false;
		$hideBottomMenu = false;
	});

	export let data;

	$: if (typeof data.step === "string") {
		$hideTopSpace = true;
		$hideBottomMenu = true;
		$hideGradient = true;
	}
</script>

{#if typeof data.step === "number" || data.step === "checking" || data.step === "success"}
	<div class="pt-4">
		<StepperHeading
			activeStep={data.step === "checking"
				? 3
				: data.step === "success"
				  ? 5
				  : data.step}
			showActiveStep={data.step !== "checking" && data.step !== "success"}
		/>
	</div>
{/if}

<div class="h-16"></div>

{#if typeof data.step === "number"}
	{#if data.step === 1}
		<LinkWallet />
	{/if}

	{#if data.step === 2}
		<VerifyGroupOwner />
	{/if}

	{#if data.step === 3}
		<CreateGroup />
	{/if}

	{#if data.step === 4}
		<SetPrice />
	{/if}
{:else if data.step === "joingroup"}
	<JoinGroup />
{:else if data.step === "checking"}
	<Checking />
{:else if data.step === "success"}
	<Done />
{/if}
