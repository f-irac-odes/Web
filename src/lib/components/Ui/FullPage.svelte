<script>
    import {AppBar} from '@skeletonlabs/skeleton'
</script>

<div class="fixed top-0 w-full">
    <AppBar background="bg-transparent">
        <svelte:fragment slot="lead">
            <slot name="leadTop">
                <p>Nothing to see here</p>
            </slot>
        </svelte:fragment>
        <svelte:fragment slot="trail">
            <slot name="trailTop">
            </slot>
        </svelte:fragment>
    </AppBar>
</div>

<div class="fixed bottom-0 w-full">
    <AppBar background="variant-glass-surface">
        <svelte:fragment slot="lead">
            <slot name="leadBottom"></slot>
        </svelte:fragment>
        <svelte:fragment slot="trail">
            <slot name="trailBottom"></slot>
        </svelte:fragment>
    </AppBar>
</div>
