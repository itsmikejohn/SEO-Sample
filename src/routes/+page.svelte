<script lang="ts">
	import { createSearchStore, searchHandler, userData } from "$lib";
	import type { UserType } from "$lib/types";
	import { onDestroy } from "svelte";

	const searchPattern: UserType[] = userData.map( (item) => ({...item, searchPattern: `${item.name} ${item.address} ${item.age}`}));
	
	const searchStore = createSearchStore(searchPattern);

	const unsubscribe = searchStore.subscribe( (model) => searchHandler(model));

	onDestroy(() => unsubscribe());
</script>


<main class="mx-auto sm:max-w-xl mt-[10vh]">
	<input type="text" class="input rounded-none" bind:value={$searchStore.search}/>

	{#each $searchStore.filtered as data }
		<div class="p-2 border-[0.1rem] mt-2">
			<p><b class="text-red-200">Name: </b>{data.name}</p>
			<p><b class="text-red-200">Address: </b>{data.address}</p>
			<p><b class="text-red-200">Age: </b>{data.age}</p>
		</div>
	{/each}
</main>