<script>
    import { T } from "@threlte/core";
    import Ably from 'ably'

    let gameStarted = false;
    let gameOver = false;
    let killed = false;
    
    let player_in_lobby = [];
    let player_in_my_squad = []
    let realtime = new Ably.Realtime('ygxxLQ.qKUV6Q:xhX-DtdDQXgV9QweAlfb7DaRmY65yFuPG6fmdJdWJKU');
    let channel = realtime.channels.get('game-channel')

    while(player_in_lobby > 10){
        gameStarted = false
    }
</script>

{#if player_in_lobby < 10}
    
{/if}

