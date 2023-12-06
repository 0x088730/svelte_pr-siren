<script lang="ts">
	import { theme } from "$lib/store";
</script>

<div
	class="flex items-center justify-center px-[14px] py-4 border rounded-menu border-menu-light dark:border-menu"
>
	<div class="flex-1">
		<h1 class="text-base font-semibold">Switch on light mode</h1>
		<p class="text-btn text-light-text">
			All interface in app wil changed to light
		</p>
	</div>

	<div>
		<label class="relative inline-flex items-center cursor-pointer">
			<input
				type="checkbox"
				value=""
				class="sr-only peer"
				on:change={() => {
					if (localStorage.getItem("theme") === "dark") {
						localStorage.setItem("theme", "light");
					} else {
						localStorage.setItem("theme", "dark");
					}

                    // @ts-ignore
					$theme = localStorage.getItem("theme");
				}}
                checked={$theme === "light"}
			/>
			<div
				class="w-[63px] h-8 bg-gray-200 dark:bg-[#434343] peer-focus:outline-none rounded-btn peer peer-checked:after:translate-x-[31px] after:content-[''] after:absolute after:top-[2px] after:start-[2px] after:bg-white after:rounded-[8px] after:h-[24px] after:w-[24px] after:transition-all after:mt-[2px] after:ml-[2px] peer-checked:bg-primary-light"
			></div>
		</label>
	</div>
</div>
