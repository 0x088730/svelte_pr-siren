<script lang="ts">
	import Button from "$lib/components/Button.svelte";
	import Menu from "$lib/components/menu/Menu.svelte";
	import MenuItem from "$lib/components/menu/MenuItem.svelte";
	import ProfileGroup from "$lib/components/group/ProfileGroup.svelte";
	import { createMenuAnimationStore } from "$lib/animationStore";
	import { Heart, LogOut, Members } from "$lib/icons";
	import SparkLineChart from "$lib/components/SparkLineChart.svelte";
	import DarkModeToggle from "$lib/components/DarkModeToggle.svelte";
	import { theme } from "$lib/store";

	const animationStore = createMenuAnimationStore();

	let { send, receive } = $animationStore;
	let active = "follow";

	const data = [0, 50, 25, 45, 40, 55, 50, 50, 100];
</script>

<div class="flex">
	<div class="flex flex-1 gap-3">
		<img
			src="https://s3-alpha-sig.figma.com/img/0e5c/9b51/01935d4e8c56f4d03da5a80f26c079d4?Expires=1701648000&Signature=MOibvfEBjliwCFmDbFTa1HqLYxl6LiZeSfBSwe5JyY16POHger4lCX-xCRa7IVD2pz9yAm2Pu7UhzOjYOb9UnGjDmfSHh4F44fHir76oblhmJ7EdGUFsZJwTAfoiSxj-8fnz4xwauvHJAPgtGXHTD6d6Aw5yq5eQJcLlscuLbUW4JwBbiZa~E8GQoHvggAKy6YKi8h2pTYjPIAjWWQ8AGcom1K~I4-GADRFbd5RBWoO3CZpvse5LHEyp8ZPCwyBh6Zgge4oX9H4a85GIyHta0XaXAlUxSGrDI8k58V6wL~RZ1lfSLnJuXpoTOgdDVe3zqGmWajl~-gZd7iX~N0ARKQ__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4"
			alt=""
			class="w-[75px] h-[75px] rounded-full"
		/>

		<div class="flex flex-col items-start justify-center">
			<h1 class="text-2xl font-medium">Cameron</h1>

			<p class="text-xs font-medium leading-5 text-light-text">
				0x388c818ca8b9251b393131c
			</p>
		</div>
	</div>
	<div class="flex items-center justify-end">
		<Button class="w-10 h-10 [&>*]:w-6 [&>*]:h-6 p-0" isIcon muted>
			{@html LogOut}
		</Button>
	</div>
</div>

<div class="p-2"></div>

<DarkModeToggle />

<div class="p-2"></div>

<div class="grid grid-cols-2 gap-4">
	<div class="flex items-center justify-center col-span-1">
		{#key $theme}
			<SparkLineChart {data} />
		{/key}
	</div>

	<div class="flex flex-col items-center justify-center col-span-1">
		<div>
			<span class="text-[10px] font-semibold dark:text-green text-[#23CFAD]"
				>+7964 eth</span
			>
			<h3 class="text-lg font-semibold">7954 <span>eth</span></h3>
			<span class="text-light-text text-btn">Your Profit</span>
		</div>
	</div>
</div>

<div class="p-2"></div>

<Menu>
	<MenuItem
		icon={Heart}
		active={active === "follow"}
		on:click={() => (active = "follow")}
		{send}
		{receive}
	>
		Follow Group
	</MenuItem>
	<MenuItem
		icon={Members}
		active={active === "members"}
		on:click={() => (active = "members")}
		{send}
		{receive}
	>
		Your Groups
	</MenuItem>
</Menu>

<div class="p-2"></div>

<div class="space-y-6">
	<ProfileGroup
		img="https://s3-alpha-sig.figma.com/img/223d/713f/7147601485bffb8229fbd6b7c9cc44d0?Expires=1701648000&Signature=XPYGKwn2RA2ETRrQpWJhLhJ4CSkyAoG3UfUS27vcJF-QicWBeAR1YENLmYkR1ppid1SbbwVtxCo-Zm9GMJuX85iGG2yGA~VmGvydEwNAcCTY7xftFSveafrXIGpSWvj~fELfT9YVKZAYSJWvR8ce0C4gNy1cBHdHE-ry5rhkkL5yp8NMaz2jor1VlQ~ebQtfuR1Mk1oQp98Gedw6hvaZkcyRLaQTBRqc1h9N2iplY-tdJz9fGRuYpKKmaP7V4IXEgr7r3z8O4rvFXw-cT3mFIdiN9GhB5qtE5ksjBJYBR8hILWQ4B3O8iD1ksN44VZOLs3oY-EWeQxt~dMwT5BMbgw__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4"
		description="545 Members"
		name="Apache server"
	/>

	<ProfileGroup
		img="https://s3-alpha-sig.figma.com/img/ee4b/388d/27b3f34ce778b21ccece8b64bd1e752e?Expires=1701648000&Signature=hEx-JrT3IMQpH4sfU0-jV29QKepXq8h-X7KBQ2cHYZOd-03aK3qFFLx4EGwHmofwgGkMZoVfD~~EALA3Y0CJti~ddPsBk6fXuxeSDKxt-o8d9-PAF4QTBLiD~U9Hl7J-OzTL~2ezkXdFhoglIrKPgt8iIfjR~q1swGk5H-tTMbY2iMbkEFUti8w~FzrLe5zJGLi3fsNZfsHj31OT1GCTvpTnxyI4YsHOJaR~nHkrc2wn8YtHJgu-51XQAK4bgxvGIY57e87rOxYFO331p4lh~wsGYxOzdBAzHn91iECFmXBLImX-eQxCG2AYRR-4I1OZ5wD76KUaytdhnR2TnyqkVw__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4"
		description="545 Members"
		name="Team Phoenix"
	/>

	<ProfileGroup
		img="https://s3-alpha-sig.figma.com/img/00f8/66ba/c5fe08cb8407af08ec128fa7b82b9b83?Expires=1701648000&Signature=pNeazirmgsxaz212WP9PiN5jT42pJUo0Ucf1iIYks~5GEihVmFc0Z8YorugCpYvFy4aTreRgIkeHOqrSZrOUeb6mMr1vYLXrguXrl9fhSJQQ8m9oB6fmVBw1qQfkV9vfxH2O7yxOFNY2TJElFWQbF1RgMMEoiG1xv-y~YW7BLaPKWf~dwcoch89qs06ztBtnO73I6dyQ3BCLH13kMujyCzqeSX54Kz0kAgQoeYuUx9CkIy2pVk5NFCVlSDAjT1iOpBNzktBiVNxpJSk5SStn7zelqTbM6LA-JwlMr~hCASQ7GQk~GsJkyG2Kap5kqgzctBT~khe99Nr9H9p0S0kcLQ__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4"
		description="545 Members"
		name="Unix Support Group"
	/>

	<ProfileGroup
		img="https://s3-alpha-sig.figma.com/img/fac1/1404/d68d3967fd1447cbc0f9ff5efd2b4b42?Expires=1701648000&Signature=G8mYSZNxjqrkFzOHk6vv2Z~rmKmOHEpg5KP-~IvVreqjEKSfumJdj3YtHbeBjtT1liU68aVsCZJ6uhkccC33Yat1nqabkFVav~wmz813bQVtvVaEoNsVoh8mu~viVKCEOuWCRlKH-YXNfm3pMhc5o6mwlDncbAi-0maudpWfeLCZzpDDi5bCz8Kl0WATs6CvX6nso2qFHAA5AXXS1AzZMMI~fhFakApAyRojSIQcwI3vVCuEA4SOFRCvez5NcyBDzm9BICezgxmCMhNrm9njPTa13vG56T6jyVMcGv4jI~6k9dIO7ehJHnPkDNY-Br4JF7ATaDZtZLZnOmZlNTr6PA__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4"
		description="545 Members"
		name="Team Angels"
	/>

	<ProfileGroup
		img="https://s3-alpha-sig.figma.com/img/b0d6/4d89/b6664253121d00f82b93bcdc6dbd414e?Expires=1701648000&Signature=WH6~4DIN3yhY99i1fnlthJ7pr1XuTUOp~5QlmClcdGpYO4whc-H5laKOWh-q0LpSpq~H3h-~WXZreDWRanHEcmwPhYr--VcpG3idIlfmNsLzvTsygfo5IH0rzBMN4kwiksRXjkrUpK2pnlUrrloL1dHia5qpCXDj24r-DzQ~LyS4tMylOJcrawLHjuDYMurEIghQzH86BZ9YUk07p3brpWS18TsNLOUHyCbfzlqX7QC7n7nTY6JNBqEb5P18JVBN6pwaV8~TPsGOGOa5DDQIC0d8ItRJewr-~UA5oCCYk0eOoWfam~k3fZGqSYBvrrb50jKyuxjeRSo~97glKeoPjQ__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4"
		description="545 Members"
		name="Windows Support Group"
	/>

	<ProfileGroup
		img="https://s3-alpha-sig.figma.com/img/e550/f961/d826ace62b195268230da36e777ff945?Expires=1701648000&Signature=VlYHAoe8fPJPkZ-jNLvkj4GAbYwmDBdHQBld9Wzvnx64pwW9h1C-ADEMaLe15wPNrReHwL7JNG3g8uxirRBmGCX8pfVIIKHNFZiVxJaAtnCUlczQ5HeXZx5HzJJWEenW~D7MNHmmhLreuk-VPZVKOv92pv4R3eXjZ3acM7qcFbe-0yQIGs~Z~LTBwziyq7mlI3qtzc02ObwWc6XYzQ6N6lxRw7xBK3NzBtT4noD3cQi9lxsY165wwtGz3H0QksD6D4M2JQovKCRzbiUetUoKFeOBo3DlpDxTUUzkAsXTxvki9Qv3Ye6X2u6k12BfWlPglBwhEK9xStpsGA6wIrcqNQ__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4"
		description="545 Members"
		name="Linux Support Group"
	/>
</div>
