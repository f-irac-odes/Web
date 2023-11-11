<script>
  import App from '$lib/components/App.svelte'
  import { Canvas } from '@threlte/core';
	import Maintenece from '../lib/components/Maintenece.svelte';

  let maintenence = true
</script>

{#if maintenence === false}  
<div>
  <App />
</div>

{:else}
  
<div>
  <Canvas>
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
    background: linear-gradient(180deg, rgba(13, 19, 32, 1) 0%, rgba(8, 12, 21, 1) 100%);
  }
  .ontop{
    position: fixed;
    bottom : 12px;
  }
</style>
