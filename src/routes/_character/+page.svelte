<script>
    let characters = [
        {
            name: 'bryan'
        },
        {
            name: 'ab'
        },
    ]
</script>

<div class="grid grid-cols-3 grid-flow-row">
    {#each characters as character}
       <button>
        {character.name}
       </button>
    {/each}
</div>