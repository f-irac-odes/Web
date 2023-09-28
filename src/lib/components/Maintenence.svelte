<script>
  import Countdown from '../lib/components/Countdown.svelte';
</script>

<div class="flex flex-col">
    <div class="flex flex-col text-center justify-center gap-y-10">
      <h1 class="text-6xl capitalize font-bold">We are under <span class="text-accent">maintenance</span></h1>
      <p>Estimeted time</p>  
      <Countdown/>
      <p>Our socials</p>
    </div>
    <a class="underline text-primary text-center mb-11" href="https://twitter.com/metawars_off"><i class="fi fi-brands-twitter"></i>Twitter</a>
</div>

<svelte:head>
  <link href="https://cdn.jsdelivr.net/gh/yesiamrocks/cssanimation.io@1.0.3/cssanimation.min.css" rel="stylesheet">
</svelte:head>