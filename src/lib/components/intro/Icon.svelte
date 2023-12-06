<script>
	export let iconUrl = "/icons/wallet.png";
</script>

<div
	class="rounded-full relative p-[94px] w-[150vw] h-[150vw] bg-primary-light/10 dark:shadow-gray-900/10 dark:bg-gradient-to-t dark:from-transparent dark:shadow-lg dark:to-primary/10 transform -mt-20 -translate-x-[20.25%] scale-105"
>
	<div
		class="w-full h-full rounded-full dark:bg-gradient-to-t bg-primary-light/10 dark:shadow-gray-900/10 dark:from-transparent dark:to-primary/20 p-[94px] dark:shadow-lg flex items-center justify-center"
	>
		<div
			class="flex items-center justify-center w-full h-full rounded-full bg-primary/10"
		>
			<div
				class="h-[134px] w-[134px] flex items-center justify-center rounded-full bg-primary-light/40 dark:bg-primary/40"
			>
				<img class="rounded-full" src={iconUrl} alt="icon" />
			</div>
		</div>
	</div>
</div>
