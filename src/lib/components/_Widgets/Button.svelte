<script>
    export let isDisabled = false;
</script>

{#if isDisabled}
     <button class="btn-disabled bg-accent-content border-none text-black hover:text-white">
         <slot></slot>
     </button>
{:else}
    <button class="btn bg-accent border-none text-black hover:text-white">
        <slot></slot>
    </button>
{/if}
