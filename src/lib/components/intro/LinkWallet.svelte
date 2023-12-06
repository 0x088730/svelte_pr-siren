<script lang="ts">
	import { onDestroy, onMount } from "svelte";
	import Icon from "./Icon.svelte";
	import { hideIntroOverflow } from "$lib/store";
	import Button from "../Button.svelte";
	import { ArrowRight } from "$lib/icons";

    onMount(() => {
        $hideIntroOverflow = true;
    });

    onDestroy(() => {
        $hideIntroOverflow = false;
    });
</script>

<h2 class="font-semibold text-dark-text text-menu mb-sm">step 1</h2>

<h1 class="font-medium text-intro-title mb-md">Link your wallet</h1>

<p class="text-base font-medium text-light-text max-w-[367px]">
	Lorem ipsum dolor sit amet, consectetur adipiscing elit
</p>

<Icon />

<div class="fixed flex w-full pr-8 bottom-5">
    <Button muted class="text-base bg-[#4E4E4E66] w-[111px]">
        Close
    </Button>

    <Button class="flex-1 ml-2 text-base">
        <span class="block mr-2">
            Next Step
        </span>

        {@html ArrowRight}
    </Button>
</div>