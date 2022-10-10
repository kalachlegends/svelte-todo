<script>
    let reply;
    const questionsReplies = [
        {
            id: 1,
            text: "First reply",
        },
        {
            id: 2,
            text: "Second reply",
        },
        {
            id: 3,
            text: "Third reply",
        },
    ];
</script>

<p>Choose correct one:</p>
<div>
    {#each questionsReplies as { id, text } (id)}
        <label for="">
            <input type="radio" bind:group={reply} value={id} />
        </label>
    {/each}
    Reply: {reply}
</div>
