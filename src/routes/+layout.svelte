<script>
	import '../app.postcss';
	import { AppShell, AppBar } from '@skeletonlabs/skeleton';

	// Floating UI for Popups
	import { computePosition, autoUpdate, flip, shift, offset, arrow } from '@floating-ui/dom';
	import { storePopup } from '@skeletonlabs/skeleton';
	storePopup.set({ computePosition, autoUpdate, flip, shift, offset, arrow });

	import {playerCoins, playerName, gemsCoins} from '../lib/stores'

let coins;
let gems;
let name;
playerCoins.subscribe((value) => {
	coins = value;
})
playerName.subscribe((value) => {
	name = value;
})
gemsCoins.subscribe((value) => {
	gems = value;
})
</script>

<!-- App Shell -->
<AppShell>
	<svelte:fragment slot="header">
		<AppBar>
			<svelte:fragment slot="lead">
				<p class="p-5 variant-soft-primary">{name}</p>
			</svelte:fragment>
			<svelte:fragment slot="trail">
				<p class="btn variant-soft-warning">Coin number: {coins}</p>
				<p class="btn variant-soft-warning">Gems number: {gems}</p>
			</svelte:fragment>
		</AppBar>
	</svelte:fragment>
	<!-- Page Route Content -->
	<slot/>
	<svelte:fragment slot="footer">
		<AppBar>
			<svelte:fragment slot="lead">
				<div class="flex flex-row space-x-6">
					<a class="btn variant-soft-primary " href="/_game">
						shop
					</a>
					<a class="btn variant-soft-primary " href="/_game">
						metas
					</a>
				</div>
			</svelte:fragment>
			<svelte:fragment slot="trail">
				<a class="btn variant-ghost-primary " href="/_game">
					Play
				</a>	
			</svelte:fragment>
		</AppBar>
	</svelte:fragment>
</AppShell>
