<script lang="ts">
	import { ArrowRight, Warning } from "$lib/icons";
	import Button from "../Button.svelte";
	import CodeBlock from "../CodeBlock.svelte";
</script>

<div class="h-[10px]"></div>

<div class="flex flex-col items-center justify-center w-full text-center">
	<h1 class="text-[32px] font-medium leading-[normal]">Cool, now <br /> you need join us</h1>

	<p class="font-medium text-base my-md leading-[140%] text-light-text mb-[107px]">
		Lorem ipsum dolor sit amet, consectetur <br /> adipiscing elit
	</p>

	<p class="text-base font-medium my-md text-light-text">Are you signing:</p>

	<div class="w-full mb-3 text-left">
		<CodeBlock
			code={`toSign: {
        "telegramID": 6386201948,
        "telegramUsername": "shuib420",
        "walletAddress": 
        "0×7279553ABF75424d31772aE816C8aB1bE75aBac2",
        "message": "helo frens"
        }`}
		></CodeBlock>
	</div>

	<div class="rounded-btn dark:bg-[#31313199] bg-[#F5F8FB] p-[14px] w-full flex">
		<div class="pr-4">
			{@html Warning}
		</div>

		<div class="flex flex-col items-start justify-center text-base font-medium text-left dark:font-normal">
			<h1 class="leading-[140%]">Warning about same code</h1>

			<p class="text-xs font-medium text-light-text">
				please change in your wallet something
			</p>
		</div>
	</div>

	<div class="fixed left-0 w-full px-4 bottom-4">
		<Button class="w-full text-base">
			<span class="mr-[10px] text-base"> Join </span>
			{@html ArrowRight}
		</Button>
	</div>
</div>
