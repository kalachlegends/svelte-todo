<script>
    import { createEventDispatcher } from "svelte";
    import { tweened, spring } from "svelte/motion";
    import { cubicIn } from "svelte/easing";
    import { format } from "../utils/format";
    import { fade, fly, blur } from "svelte/transition";
    import { skew } from "../transition/skew";
    import { interpolateLab } from "d3-interpolate";
    import { draggable } from "../actions/draggble";
    const dispatch = createEventDispatcher();
    const doneMotion = tweened("#faf792", {
        delay: 0,
        duration: 300,
        easing: cubicIn,
        interpolate: interpolateLab,
    });

    // const containerPos = spring(
    //     {
    //         left: -100,
    //         top: -100,
    //     },
    //     {
    //         stiffness: 0.1,
    //         damping: 0.3,
    //     }
    // );
    export let title;
    export let done;
    function handleDoneChange(event) {
        console.log(event.target.checked);

        doneMotion.set(event.target.checked ? "#64ad80" : "#faf792");
        dispatch("doneChange", event.target.checked);
    }
    function handleRemoveItem() {
        dispatch("remove");
    }
    let coords = { x: 0, y: 0 };
    function handleDragStart() {}
    function handleMouseMove(event) {
        console.log(event.detail);
        coords = {
            x: coords.x + event.detail.dx,
            y: coords.y + event.detail.dy,
        };
    }
    function handleDragEnd(event) {
        coords = { x: 0, y: 0 };
    }
</script>

<div
    class="main-container"
    transition:fly|local={{ duration: 1000 }}
    style="background-color: {$doneMotion};
    transform: translate({coords.x}px, {coords.y}px)"
    use:draggable
    on:dragstart={handleDragStart}
    on:dragmove={handleMouseMove}
    on:dragend={handleDragEnd}
>
    <input type="checkbox" checked={done} on:input={handleDoneChange} />
    <p class="title">{title}</p>
    <button
        class="btn-remove"
        on:click={() => console.log("remove")}
        on:click={handleRemoveItem}>Remove</button
    >
</div>

<style>
    .main-container {
        display: flex;
        height: 50px;
        border-radius: 10px;
        background-color: darkseagreen;
        padding: 0 15px;
        align-items: center;
    }
    input {
        margin: 0;
        margin-right: 20px;
    }
    p {
        margin: 0;
    }
    .btn-remove {
        background: red;
    }
    .title {
        flex: 1;
    }
</style>
