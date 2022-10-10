<script>
	import { onMount, onDestroy } from "svelte";
	import AdddTodoItem from "./components/AdddTodoItem.svelte";
	import { getTodos } from "./utils/getTodos";
	import TodoItem from "./components/TodoItem.svelte";
	import { cubicIn } from "svelte/easing";
	import { v4 as uuid } from "uuid";
	import { crossfade } from "svelte/transition";
	import { todoItems } from "./store/customStore";
	import { mousePosition } from "./store/mousePosition";
	import { todoStats } from "./store/todoStats";
	import { flip } from "svelte/animate";
	// You can use spreat operator to send variable
	// USE props ... in components
	// const props = {
	// 	title: "What to do?",
	// 	buttonTitle: "Go!",
	// 	someProp: "someProp", - key value in Components
	// };

	let title = "";
	let items = [];
	const [send, receive] = crossfade({
		duration: 5000,
		fallback(node, params) {
			const style = getComputedStyle(node);
			const transform = style.transform === node ? "" : style.transform;

			return {
				duration: 600,
				easing: cubicIn,
				css: (t) => `
				transform: ${transform} scale(${t});
				opacity: ${t}
				`,
			};
		},
	});
	const unsubscribe = todoItems.subscribe((value) => {
		items = value;
	});

	function hadnleAddClick(event) {
		todoItems.add(event.detail);
	}
	// onMount(() => {
	// 	console.log("onMount");
	// 	// getTodos().then((value) => {
	// 	//     items = value;
	// 	// });
	// 	const get = async () => {
	// 		items = await getTodos();
	// 	};
	// 	get();
	// });

	onDestroy(() => {
		//	unsubscribe();
	});

	function handleDoneChange(id, done) {
		todoItems.setDone(id, done);
	}

	function handleRemove(id) {
		console.log(id);
		todoItems.remove(id);
	}
</script>

{JSON.stringify($mousePosition)}
<AdddTodoItem on:add={hadnleAddClick} />
<div class="todo-container">
	<div class="todo-items-container">
		<main>
			<div>
				{$todoStats.doneCount} / {$todoStats.totalCount}
				{$todoStats.leftTodoCount}
			</div>
			{#each items.filter((item) => !item.done) as { id, text, done }, index (id)}
				<div
					class="todo-item-container"
					in:receive={{ key: id }}
					out:send={{ key: id }}
					animate:flip={{ deration: 500 }}
				>
					<TodoItem
						bind:done
						title={`${index} ${text}`}
						on:doneChange={(event) =>
							handleDoneChange(id, event.detail)}
						on:remove={handleRemove(id)}
					/>
				</div>
			{:else}
				Жду
			{/each}
		</main>
	</div>
	<div class="todo-items-container">
		<main>
			<div>
				{$todoStats.doneCount} / {$todoStats.totalCount}
				{$todoStats.leftTodoCount}
			</div>
			{#each items.filter((item) => item.done) as { id, text, done }, index (id)}
				<div
					class="todo-item-container"
					in:receive={{ key: id }}
					out:send={{ key: id }}
				>
					<TodoItem
						bind:done
						title={`${index} ${text}`}
						on:doneChange={(event) =>
							handleDoneChange(id, event.detail)}
						on:remove={handleRemove(id)}
					/>
				</div>
			{:else}
				Жду
			{/each}
		</main>
	</div>
</div>

<style>
	.todo-container {
		display: flex;
		width: 100%;
	}
	main {
		display: flex;
		flex-direction: column;
		gap: 10px;
	}
	.todo-items-container {
		flex: 1;
		padding: 5px;
	}
</style>
