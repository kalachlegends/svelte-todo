<script>
	import { onMount } from "svelte";
	import AdddTodoItem from "./components/AdddTodoItem.svelte";
	export let name;

	// You can use spreat operator to send variable
	// USE props ... in components
	// const props = {
	// 	title: "What to do?",
	// 	buttonTitle: "Go!",
	// 	someProp: "someProp", - key value in Components
	// };

	let title = "";
</script>

<main>
	<h1>Hello {name}!</h1>
	<p>
		Visit the <a href="https://svelte.dev/tutorial">Svelte tutorial</a> to learn
		how to build Svelte apps.
	</p>
</main>
<AdddTodoItem />

<style>
	main {
		text-align: center;
		padding: 1em;
		max-width: 240px;
		margin: 0 auto;
	}

	h1 {
		color: #ff3e00;
		text-transform: uppercase;
		font-size: 4em;
		font-weight: 100;
	}

	@media (min-width: 640px) {
		main {
			max-width: none;
		}
	}
</style>
