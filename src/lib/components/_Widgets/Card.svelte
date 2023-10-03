<script>
    export let image = "";
    export let title = "";
</script>

<div class="card card-compact w-96 rounded-none">
    <img src={image} alt={image}>
    <div class="card-body">
        <h1 class="card-title font-bold text-3xl">
            {title}
        </h1>
        <div class="card-actions justify-end">
                <slot><!-- optional fallback --></slot>
            </div>
    </div>
</div>