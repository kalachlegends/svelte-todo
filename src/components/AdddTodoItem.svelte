<script>
    import {
        afterUpdate,
        beforeUpdate,
        onDestroy,
        onMount,
        tick,
    } from "svelte";
    import { onInterval } from "../utils/onIterval";
    import { getTodos } from "../utils/getTodos";

    import { format } from "../utils/format";
    export let title = "You can add todoList";
    export let buttonTitle = "Add Todo";

    // console.log($$props);
    let items = [];

    function hadnleAddClick() {
        items = [...items, "item"];

        // To working variable ,need
    }
    // You can use operator :$ to add Reactive to variable
    // $: console.log("items", items);
    // And more add computed property to Variable
    onMount(() => {
        console.log("onMount");
        // getTodos().then((value) => {
        //     items = value;
        // });

        const get = async () => {
            items = await getTodos();
        };
        get();
    });
    // beforeUpdate(() => {
    //     console.log("beforeUpdate");
    // });
    // afterUpdate(() => {
    //     console.log("afterUpdate");
    // });
    // let auto add to variable because $: gives this opportunity
    // $: console.log(items);
    $: len = items.length;
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

    let text = "";
    async function haddleTextChange(event) {
        const { selectionStart, selectionEnd, value } = this;
        text = await format(event.target.value);

        await tick();
        this.selectionStart = selectionStart;
        this.selectionEnd = selectionEnd;
    }
</script>

<label for="">ASDASDSAD</label>
<div class="main-container">
    {counter}
    <label for="todo-text"> {title}</label>
    <input
        type="text"
        class="todo-input"
        id="todo-text"
        value={text}
        on:input={haddleTextChange}
    />
    <button on:click={hadnleAddClick}>{buttonTitle}</button>
</div>
{JSON.stringify(items, null, 2)}

<style>
    :global(label) {
        color: cornflowerblue;
    }
    .main-container {
        background-color: lightseagreen;
        border-radius: 5px;
        padding: 10px;
    }
    .todo-input {
        width: 100%;
    }
</style>
