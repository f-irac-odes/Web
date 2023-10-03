<script>
    export let title_needed = true; 
    export let description_needed = false; 
    export let title = "Hello";
    export let description = "";
</script>

<div class="min-h-screen flex xl:flex-row flex-col relative">
    <div class="flex flex-1 justify-between py-8 sm:px-12 px-8 flex-col">
        <div class="flex flex-col items-center cursor-pointer text-center">
            {#if title_needed}
                <h1 class="text-6xl uppercase font-extrabold text-accent">{title}</h1>
            {/if}
            {#if description_needed}
                <p>{description}</p>
            {/if}
        </div>
        <div class="flex-1 flex justify-center flex-col xl:mt-0 my-16">
            <div class="flex flex-col justify-center items-center">
                <slot></slot>
            </div>
        </div>
    </div>
</div>