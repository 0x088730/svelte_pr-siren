<script>
	let classes = "";

	export let isIcon = false;
	export let muted = false;
	export let outline = false;
	export let disabled = false;

	export { classes as class };
</script>

<button
	class="font-semibold transition-all backdrop-blur-md
		{outline
		? 'dark:text-primary !text-primary-light bg-primary-light/20 dark:bg-inherit hover:bg-primary-light/30 active:bg-primary-light/40 dark:ring-inset dark:ring-[1px] dark:ring-btn-outline-border dark:hover:bg-primary/10'
		: ''}

		{muted
		? 'bg-primary-light hover:bg-primary-light/90 active:bg-primary-light/80 dark:bg-btn-muted dark:hover:bg-btn-muted-hover dark:active:bg-btn-muted-active text-white dark:text-light-text'
		: ''}

		{disabled
		? 'dark:bg-primary-disabled bg-[#F0F0F0] text-[#14141466] dark:text-[#FFFFFF4D] pointer-events-none'
		: ''}

		bg-primary-light hover:bg-primary-light/90 active:bg-primary-light/80 text-white dark:bg-primary dark:hover:bg-primary-hover dark:active:bg-primary-active'} flex items-center justify-center rounded-btn {isIcon
		? ''
		: 'text-btn p-btn'}

		{classes}"
	on:click
	{disabled}
>
	<slot />
</button>
