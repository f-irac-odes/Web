<script>
  import App from '$lib/components/App.svelte'
  import { Canvas } from '@threlte/core';
	import Maintenece from '../lib/components/Maintenece.svelte';
	import { HTML } from '@threlte/extras';

  let maintenence = true
</script>

{#if maintenence === false}  
<div>
  <App />
</div>

{:else}
  
<div>
  <Canvas>
    <HTML center position.y={3.5}>
      <p class="title">Maintenence on.</p>
    </HTML>
    <Maintenece />
  </Canvas>
</div>
{/if}

<style>
  :global(body) {
    margin: 0;
  }

  div {
    width: 100vw;
    height: 100vh;
    background: rgb(13, 19, 32);
    background: linear-gradient(180deg, rgb(24, 37, 65) 0%, rgb(152, 31, 189) 100%);
  }
  .title{
    color : white;
    font-weight: bold;
    text-transform: uppercase;
    font-size: 30px;
  }
</style>
