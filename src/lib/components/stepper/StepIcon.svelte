<script lang="ts">
	import { StepDone } from "$lib/icons";

	export let status: "" | "active" | "done" = "";
	export let number = "01";
</script>

{#if status === ""}
	<button
		class="inline-flex items-center justify-center w-16 h-16 rounded-full bg-[#F0F0F0] dark:bg-btn-muted"
	>
		<span
			class="inline-flex items-center justify-center outline-transparent text-dark-text rounded-full outline outline-1 outline-offset- w-[50px] h-[50px] font-semibold"
		>
			{number}
		</span>
	</button>
{/if}

{#if status === "active"}
	<button
		class="inline-flex items-center justify-center w-16 h-16 rounded-full bg-[#F0F0F0] dark:bg-btn-muted"
	>
		<span
			class="inline-flex items-center justify-center text-[#141414] dark:text-white rounded-full outline outline-[#ddd] dark:outline-dark-text outline-1 outline-offset- w-[50px] h-[50px] font-semibold"
		>
			{number}
		</span>
	</button>
{/if}

{#if status === "done"}
	<button
		class="inline-flex items-center justify-center w-16 h-16 text-2xl text-white rounded-full dark:text-black shadow-step-active shadow-primary-light bg-primary-light dark:shadow-primary dark:bg-primary [&>*]:text-white"
	>
		{@html StepDone}
	</button>
{/if}
