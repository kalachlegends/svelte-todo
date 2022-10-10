<script>
    import Form from "./Form.svelte";
    import Examples from "./Examples.svelte";
    export let title = "You <i>can add todoList</i>";
    export let buttonTitle = "Add Todo";
    let text = "";
</script>

<Examples />
<Form {title} {buttonTitle} on:add />
