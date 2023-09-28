<script>
  import App from '$lib/components/App.svelte'
	import Maintenence from '$lib/components/Maintenence.svelte';

  let maintanence = true;
</script>

{#if maintanence === false}  
<div>
  <App />
</div>
{:else}
  <Maintenence/>
{/if}

<style>
  @import url('https://cdn-uicons.flaticon.com/uicons-brands/css/uicons-brands.css');
  :global(body) {
    margin: 0;
  }

  div {
    width: 100vw;
    height: 100vh;
  }
</style>
