<script>
  import { Canvas } from '@threlte/core'
  import Lobby from './Lobby.svelte'
  import Game from './Game.svelte';
</script>

<Canvas>
  <Game />
</Canvas>

<div class="fixed bottom-4 left-[50%]">
  <button class="px-5 py-2 bg-blue-800">Play</button>
</div>