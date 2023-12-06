<script lang="ts">
	import { createMenuAnimationStore } from "$lib/animationStore";
	import { hideGradient, theme } from "$lib/store";
	import { onDestroy, onMount } from "svelte";
	import Menu from "../menu/Menu.svelte";
	import MenuItem from "../menu/MenuItem.svelte";
	import { ArrowRight, List, Play, Telegram, Twitter, Video } from "$lib/icons";
	import Expandable from "../Expandable.svelte";
	import CodeBlock from "../CodeBlock.svelte";
	import Button from "../Button.svelte";

	onMount(() => {
		$hideGradient = true;
	});

	onDestroy(() => {
		$hideGradient = false;
	});

	const animationStore = createMenuAnimationStore();

	let { send, receive } = $animationStore;

	let active: "telegram" | "twitter" = "telegram";
	let activeExpandable = "";

	const handleClick = (id: string) => {
		if (activeExpandable === id) return (activeExpandable = "");
		activeExpandable = id;
	};
</script>

<h2 class="font-semibold text-dark-text text-menu mb-sm">step 2</h2>

<h1 class="font-medium text-intro-title mb-md">Verify group owner</h1>

<p class="text-base font-medium text-light-text max-w-[367px]">
	Lorem ipsum dolor sit amet, consectetur adipiscing elit
</p>

<Menu class="my-7">
	<MenuItem
		icon={Telegram}
		active={active === "telegram"}
		on:click={() => (active = "telegram")}
		{send}
		{receive}
	>
		Telgram
	</MenuItem>
	<MenuItem
		icon={Twitter}
		active={active === "twitter"}
		on:click={() => (active = "twitter")}
		{send}
		{receive}
	>
		Twitter
	</MenuItem>
</Menu>

<Expandable
	title="Video instruction"
	subtitle="click for see"
	icon={Video}
	onClick={() => handleClick("video")}
	expanded={activeExpandable === "video"}
	showBorder
>
	<div
		class="h-[193px] flex items-center justify-center rounded-btn bg-[#F5F8FB] dark:bg-white/5 w-full mb-7"
	>
		{@html Play} <span class="ml-2 font-semibold text-btn">play video</span>
	</div>

	<CodeBlock
		code={`async def message(bot, chat_id):  # mostly used in \ntests for edit_message
    out = await bot.send_message(
        chat_id, "Text", disable_web_page_preview=True, disable_notification=True`}
		showCopyButton
	/>

	<div class="p-2"></div>
</Expandable>

<Expandable
	title="Text instruction"
	subtitle="click for see"
	icon={List}
	expanded={activeExpandable === "text"}
	onClick={() => handleClick("text")}
>
	<h2 class="font-medium">
		<span class="inline-block mr-2 font-semibold text-primary">01</span>

		Open bot and put <span class="text-primary">/start</span>
	</h2>

	<img src="/intro/start{$theme == 'light' ? '-light' : ''}.svg" alt="" class="w-full mt-4 mb-2" />

	<Button outline class="w-full">
		<span class="[&>*]:fill-current">{@html Telegram}</span>
		<span class="ml-2">Open Group</span>
	</Button>

	<h2 class="mt-10 font-medium">
		<span class="inline-block mr-2 font-semibold text-primary">02</span>

		Add this bot to your group
	</h2>

	<img
		src="/intro/add-to-group{$theme == 'light' ? '-light' : ''}.svg"
		alt=""
		class="w-full mt-4 mb-2"
	/>

	<h2 class="mt-10 mb-4 font-medium">
		<span class="inline-block mr-2 font-semibold text-primary">03</span>

		Copy code and paste to your group
	</h2>

	<CodeBlock
		code={`async def message(bot, chat_id):  # mostly used in \ntests for edit_message
    out = await bot.send_message(
        chat_id, "Text", disable_web_page_preview=True, disable_notification=True`}
		showCopyButton
	/>

	<h2 class="flex mt-10 mb-4 font-medium">
		<span class="inline-block mr-2 font-semibold text-primary">04</span>

		<span>Go back to app and click below button Next Step</span>
	</h2>
</Expandable>

<div class="fixed left-0 w-full px-4 bottom-4">
	<Button class="w-full text-base">
		<span class="mr-[10px] text-base"> Next Step </span>
		{@html ArrowRight}
	</Button>
</div>
