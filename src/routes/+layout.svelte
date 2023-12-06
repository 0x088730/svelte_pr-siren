<script lang="ts">
	import BottomMenu from "$lib/components/menu/BottomMenu.svelte";
	import { onMount } from "svelte";
	import "./app.css";
	import { fly } from "svelte/transition";
	import {
		hideBottomMenu,
		hideIntroOverflow,
		hideTopSpace,
		theme,
		hideGradient,
	} from "$lib/store";

	export let data;

	onMount(() => {
		//@ts-ignore
		$theme = localStorage.getItem("theme") || "light";
		document.body.classList.add($theme);
	});

	$: if ($theme) {
		document.body.classList.remove("light");
		document.body.classList.remove("dark");
		document.body.classList.add($theme);
		document.documentElement.classList.remove("light");
		document.documentElement.classList.remove("dark");
		document.documentElement.classList.add($theme);
	}
</script>

<div
	class="relative max-h-screen min-h-[100dvh] h-[100dvh] mx-auto overflow-hidden {$theme ===
	'light'
		? ''
		: 'dark'}"
>
	{#if !$hideTopSpace}
		<div class="space"></div>
	{/if}

	{#key data.url}
		<div
			class="px-4 pb-24 max-h-[calc(100vh)] {$hideIntroOverflow
				? 'overflow-hidden'
				: 'overflow-auto'}  overflow-x-hidden relative"
			in:fly={{ y: -20, duration: 300, delay: 300, opacity: 0 }}
			out:fly={{ y: 20, duration: 300, opacity: 0 }}
			id="content__layout"
		>
			<slot />
		</div>
	{/key}

	{#if !$hideGradient}
		<div
			class="fixed max-w-[100vw] bottom-0 w-screen min-h-screen overflow-hidden pointer-events-none -z-10 max-w-screen"
		>
			<img
				src={$theme === "light" ? "/bg-light.png" : "/bg.png"}
				alt=""
				class="absolute bottom-0 -z-10 -translate-x-1/2 left-1/2 w-full min-w-[400px]"
			/>

			{#if $theme !== "light"}
				<div
					class="h-[453px] w-[510px] -z-20 rounded-full absolute -bottom-28 blur-3xl isolate left-1/2 -translate-x-1/2 bg-primary/60"
				></div>
			{/if}
		</div>
	{/if}

	{#if !$hideBottomMenu}
		<BottomMenu />
	{/if}
</div>

<style>
	:global(body) {
		background: #141414;
		color: #fff;
		color-scheme: dark;
	}

	:global(body.light) {
		background: #fff;
		color: #141414;
		color-scheme: light;
	}
</style>
