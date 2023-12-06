<script lang="ts">
	import { Home, Profile, Union } from "$lib/icons";
	import { page } from "$app/stores";
	import { goto } from "$app/navigation";
</script>

<div
	class="absolute backdrop-blur-md py-2 z-50 bg-[#D2F1FF] dark:bg-[#1a1a1a83] bottom-2 rounded-2xl w-[95%] left-1/2 -translate-x-1/2 flex items-center justify-around"
>
	<a
		class="flex flex-col [&>*]:transition-all transition-all items-center justify-center text-dark-text dark:text-white
		
		{$page.route.id === '/'
			? '[&>*]:fill-primary-light dark:[&>*]:fill-white'
			: '[&>*]:fill-light-text'}
		"
		href="/"
	>
		{@html Home}

		<span
			class="mt-1 text-[10px] font-semibold
		
			{$page.route.id === '/'
				? 'text-primary-light dark:text-white'
				: 'text-[#AAAAAA] dark:text-light-text'}
		"
		>
			Home
		</span>
	</a>

	<button
		class="absolute flex items-center justify-center w-20 h-20 -mt-10 border-8 p-4 dark:border-[#192741] border-[#D2F1FF] rounded-full bg-primary-light hover:bg-primary-light/90 active:bg-primary-light/80 dark:bg-primary transition-all dark:hover:bg-primary-hover dark:active:bg-primary-active active:scale-95"
	>
		{@html Union}
	</button>

	<a
		class="flex flex-col [&>*]:transition-all transition-all items-center justify-center text-[#AAAAAA] dark:text-white

		{$page.route.id === '/profile'
			? '[&>*]:fill-primary-light dark:[&>*]:fill-white'
			: '[&>*]:fill-light-text'}
		"
		href="/profile"
	>
		{@html Profile}

		<span
			class="mt-1 text-[10px] font-semibold
			
			{$page.route.id === '/profile'
				? 'text-primary-light dark:text-white'
				: 'text-[#AAAAAA] dark:text-light-text'}"
		>
			Profile
		</span>
	</a>
</div>
