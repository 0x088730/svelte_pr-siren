<script lang="ts">
	import Menu from "$lib/components/menu/Menu.svelte";
	import MenuItem from "$lib/components/menu/MenuItem.svelte";
	import PartGroup from "$lib/components/group/PartGroup.svelte";
	import { createMenuAnimationStore } from "$lib/animationStore";
	import { Cup, Fire, New } from "$lib/icons";
	import Search from "$lib/components/Search.svelte";

	let activeMenu = "trending";

	let searchValue = "";

	let items = [
		{
			name: "Java Support",
			image:
				"https://s3-alpha-sig.figma.com/img/a6e4/dc70/ebb809785c1b29b4a94a5b13daa298ad?Expires=1701648000&Signature=dFKMs11LjavR2TpAeDaMoXN7Isl-WAlbrFIF1AueqcPQyxexM84ouY7L9P9lQpFAgEALU0lCLffKdVgGsqPkRlBfge549DD5fne67dQInup~nlTCHVhUQs6oXBoYhKJLBuXRYo~nEwIcHNwlFXtfPzXq2HsdHadTlJcKep51-sG8F3bgR1gY7E0O1tv2Db1S5G-NxOnJdR-78mOLGrv8dwDoFy97pk0qsu8jqchffKEXFcAJPt5Hp-rXB6X8th6rxLLUqi0xsGwrvriay9tJiQExIC9vS1J8GPts9JOr~TOT8jadBDqvm4G6KfOa-AsEe3Zw7NVkO3oQC-Kc~IJb7Q__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4",
			cat: 1,
		},
		{
			name: "Team Rocket",
			image:
				"https://s3-alpha-sig.figma.com/img/b798/c5de/feb8e9bbc7db068d7f803650c36c7e93?Expires=1701648000&Signature=gT6PYqRs2mYC7j2lnzs5MEDJoOxxw25vEK8H6AVIg0YDf9Jg14qHud9Qqd4w6~UFY~KxIU~8XLz6PcoQ45uIkeq4FNqlzOKfdqhkeLhVz3ILCf7i~4iul-0qJLwCmRF7IChuiAZIPVFVPI81f8Amxvof5LXXfmwXsFcyWAlaZjRPOsF-9FTXVV--r8oWLsX14mEN6IPcCYannDZpxvA37cJGK6D9DUkTeZiCH7WqCb~-dEcWvDYwJBY0o8mX2iD2eWFRDbWV8b8n4Zu6BUnW3U1Kuudo~j0zJnl4SWdgKzqEqR3jkUZhjLjd5FV-Ry1WwQZb2gGwbH~99LeV5FIYSg__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4",
			cat: 2,
		},
		{
			name: "LDAP Admins",
			image:
				"https://s3-alpha-sig.figma.com/img/b0d6/4d89/b6664253121d00f82b93bcdc6dbd414e?Expires=1701648000&Signature=WH6~4DIN3yhY99i1fnlthJ7pr1XuTUOp~5QlmClcdGpYO4whc-H5laKOWh-q0LpSpq~H3h-~WXZreDWRanHEcmwPhYr--VcpG3idIlfmNsLzvTsygfo5IH0rzBMN4kwiksRXjkrUpK2pnlUrrloL1dHia5qpCXDj24r-DzQ~LyS4tMylOJcrawLHjuDYMurEIghQzH86BZ9YUk07p3brpWS18TsNLOUHyCbfzlqX7QC7n7nTY6JNBqEb5P18JVBN6pwaV8~TPsGOGOa5DDQIC0d8ItRJewr-~UA5oCCYk0eOoWfam~k3fZGqSYBvrrb50jKyuxjeRSo~97glKeoPjQ__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4",
			cat: 3,
		},
		{
			name: "Application Support",
			image:
				"https://s3-alpha-sig.figma.com/img/e550/f961/d826ace62b195268230da36e777ff945?Expires=1701648000&Signature=VlYHAoe8fPJPkZ-jNLvkj4GAbYwmDBdHQBld9Wzvnx64pwW9h1C-ADEMaLe15wPNrReHwL7JNG3g8uxirRBmGCX8pfVIIKHNFZiVxJaAtnCUlczQ5HeXZx5HzJJWEenW~D7MNHmmhLreuk-VPZVKOv92pv4R3eXjZ3acM7qcFbe-0yQIGs~Z~LTBwziyq7mlI3qtzc02ObwWc6XYzQ6N6lxRw7xBK3NzBtT4noD3cQi9lxsY165wwtGz3H0QksD6D4M2JQovKCRzbiUetUoKFeOBo3DlpDxTUUzkAsXTxvki9Qv3Ye6X2u6k12BfWlPglBwhEK9xStpsGA6wIrcqNQ__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4",
			cat: 4,
		},
		{
			name: "Team Galactics",
			image:
				"https://s3-alpha-sig.figma.com/img/9db4/4cf6/43e62ad21860d99cd29386c472e3d49a?Expires=1701648000&Signature=G789OJ-A9vex2luu~2WR0pSF467dG2r7H92QPggEwlNjzyNJ1a7qKMuNMZKhTrzbpaTxPuJlP3DbOhK3oP0XD3j~-boPwR0QjhseU~CQdVQ9mGQvhGh1oiH4ADoxcQswHolhyelucPA8Ap8c732f-5yN~sfQD6DUv4UlUGjZNgVRnxRQeKiTwn5zX6cLpQCssDkb5t6cvVlUyII06Oqm5Zrn6c3lgaQ5LJZA1Be9OpGjALolJV5nuJ443S1v4f3Hw3~rA-DXK9t8OiMUofAk1GTYuRpYqa9J9XsACR0z2gqDF~ePULqqh8~seJ-ucMdcm8LBuEnsy5u7dOUbLToblw__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4",
			cat: 5,
		},
		{
			name: "Team Magma",
			image: "http://picsum.photos/seed/1/100/100",
			cat: 6,
		},
		{
			name: "Java Admins",
			image: "http://picsum.photos/seed/2/100/100",
			cat: 7,
		},
		{
			name: "Python",
			image: "http://picsum.photos/seed/3/100/100",
			cat: 8,
		},
		{
			name: "Database admin",
			image: "http://picsum.photos/seed/4/100/100",
			cat: 9,
		},
		{
			name: "Frontend ",
			image: "http://picsum.photos/seed/5/100/100",
			cat: 10,
		},
		{
			name: "UI/UX",
			image: "http://picsum.photos/seed/6/100/100",
			cat: 11,
		},
		{
			name: "Networks",
			image: "http://picsum.photos/seed/7/100/100",
			cat: 12,
		},
		{
			name: "DevOps Specialists",
			image: "http://picsum.photos/seed/8/100/100",
			cat: 13,
		},
		{
			name: "Mobile App devs",
			image: "http://picsum.photos/seed/9/100/100",
			cat: 14,
		},
		{
			name: "Quality Assurance",
			image: "http://picsum.photos/seed/10/100/100",
			cat: 15,
		},
	];

	let filteredItems = [...items];

	$: if (searchValue) {
		filteredItems = items.filter((item) =>
			item.name.toLowerCase().includes(searchValue.toLowerCase())
		);
	} else {
		filteredItems = items;
	}

	const animationStore = createMenuAnimationStore();
	let { send, receive } = $animationStore;
</script>

<Search bind:value={searchValue} />

<div class="space"></div>

<Menu>
	<MenuItem
		icon={Fire}
		active={activeMenu === "trending"}
		on:click={() => (activeMenu = "trending")}
		{send}
		{receive}
	>
		Trending
	</MenuItem>
	<MenuItem
		icon={Cup}
		active={activeMenu === "top"}
		on:click={() => (activeMenu = "top")}
		{send}
		{receive}
	>
		Top
	</MenuItem>
	<MenuItem
		icon={New}
		active={activeMenu === "new"}
		on:click={() => (activeMenu = "new")}
		{send}
		{receive}
	>
		New
	</MenuItem>
</Menu>

<p class="my-[26px] font-medium leading-3 text-light-text text-menu">
	45 Groups Available
</p>

<div class="space-y-6">
	{#each filteredItems.sort( (a, b) => ([...activeMenu].reduce((acc, cur) => acc + cur.charCodeAt(0), 0) % 2 ? a.cat - b.cat : b.cat - a.cat) ) as item}
		<PartGroup
			img={item.image}
			name={item.name}
			description="45 Available"
			remaining={54324}
		/>
	{/each}
</div>
