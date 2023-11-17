<script>
	import { characters } from "../lib/components/character";
	import { user } from "../lib/components/user";

    
</script>

<div class="flex m-10">
    <div class="container grid grid-cols-3">
        {#each characters as character, x}
        <div class="flex flex-col px-20 py-10 w-20 variant-glass-primary">
            {character.name}
            <div>
                Stats
                <ul class="list w-full">
                    <p class="list-item">{character.attack.damage}</p>
                </ul>
            </div>
            <a class="w-full btn variant-ghost-primary" href="/game" on:click={() => {user.gameStats.character_chose === characters[x]}}>select</a>
        </div>
        {/each}
    </div>
</div>