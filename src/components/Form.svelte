<script>
    import { createEventDispatcher, onMount, tick } from "svelte";
    import TodoItem from "./TodoItem.svelte";
    import { onInterval } from "../utils/onIterval";
    //import { Form } from "./Form.svelte";
    import { v4 as uuid } from "uuid";
    import { format } from "../utils/format";
    import { typewriter } from "../transition/typewriter";
    export let title = "You <i>can add todoList</i>";
    export let buttonTitle = "Add Todo";
    let text = "";
    // console.log($$props);
    // let items = getTodos();
    const dispatch = createEventDispatcher();
    function hadnleAddClick() {
        console.log(text);
        dispatch("add", text);
    }
    // You can use operator :$ to add Reactive to variable
    // $: console.log("items", items);
    // And more add computed property to Variable
    let show = false;
    onMount(() => {
        // console.log("onMount");
        // // getTodos().then((value) => {
        // //     items = value;
        // // });
        // const get = async () => {
        //     items = await getTodos();
        // };
        // get();
        show = true;
    });
    // beforeUpdate(() => {
    //     console.log("beforeUpdate");
    // });
    // afterUpdate(() => {
    //     console.log("afterUpdate");
    // });
    // let auto add to variable because $: gives this opportunity
    // $: console.log(items);
    // $: len = items.length;
    let counter = 0;
    // let interval;

    // onInterval(() => {
    //     counter++;
    // }, 1000);
    // Add hard block
    // $: {
    //     if (items.length > 5) {
    //         console.log(items);
    //     }
    // }

    async function haddleTextChange(event) {
        text = event.target.value;
    }
</script>

<label for="">ASDASDSAD</label>
<div class="main-container">
    {counter}
    {#if show}
        <label for="todo-text" in:typewriter> {title}</label>
    {/if}
    <input type="text" class="todo-input" id="todo-text" bind:value={text} />
    <button on:click={hadnleAddClick}>{buttonTitle}</button>
</div>
<!-- {#await items}
    <p>In progres....</p>
{:then _items}
    {#if _items.length < 0}
        {JSON.stringify(_items, null, 2)}
    {:else}
        {#each _items as { id, text }, index (id)}
            <TodoItem title={`${index} ${text}`} />
        {/each}
        Нету элементов
    {/if}
{:catch Error}
    Error : {Error.message}
{/await}
{#key items}
{/key} -->

<!-- {@debug items} -->
<style>
    /* :global(label) {
        color: pink;
    } */
    .main-container {
        background-color: lightseagreen;
        border-radius: 5px;
        padding: 10px;
    }
    .todo-input {
        width: 100%;
    }
</style>
