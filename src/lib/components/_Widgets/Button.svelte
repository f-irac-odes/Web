<script>
    export let isDisabled = false;
</script>

{#if isDisabled}
     <button class="btn-disabled bg-accent-content">
         <slot></slot>
     </button>
{:else}
    <button class="btn bg-accent">
        <slot></slot>
    </button>
{/if}
