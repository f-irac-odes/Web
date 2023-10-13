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

<div >
    <div class="grid grid-cols-3 grid-flow-row">
        {#each characters as character}
        <button class="btn w-32 h-32 variant-glass-surface">
            <p>{character.name}</p>
        </button>
        {/each}
    </div>
</div>