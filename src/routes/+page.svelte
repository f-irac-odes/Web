<script>
  import App from '$lib/components/App.svelte'
	import Countdown from '../lib/components/Countdown.svelte';

  let maintanence = false;
</script>

{#if maintanence === false}  
<div>
  <App />
</div>
{:else}
<div class="flex flex-col">
  <div class="flex flex-col text-center justify-center gap-y-10">
    <h1 class="text-6xl capitalize font-bold">We are under <span class="text-accent">maintenance</span></h1>
    <p>Estimeted time</p>  
    <Countdown/>
    <p>Our socials</p>
  </div>
  <a class="underline text-primary text-center mb-11" href="https://twitter.com/metawars_off"><i class="fi fi-brands-twitter"></i>Twitter</a>
</div>
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
