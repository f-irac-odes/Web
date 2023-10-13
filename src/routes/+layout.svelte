<script>
	import '../app.postcss';
	import { AppShell, AppBar } from '@skeletonlabs/skeleton';

	// Floating UI for Popups
	import { computePosition, autoUpdate, flip, shift, offset, arrow } from '@floating-ui/dom';
	import { storePopup } from '@skeletonlabs/skeleton';
	import { popup } from '@skeletonlabs/skeleton';
	storePopup.set({ computePosition, autoUpdate, flip, shift, offset, arrow });

	const popupFeatured = {
	// Represents the type of event that opens/closed the popup
	event: 'click',
	// Matches the data-popup value on your popup element
	target: 'popupFeatured',
	// Defines which side of your trigger the popup will appear
	placement: 'bottom',
	}

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

<div class="fixed w-full">
		<AppBar background="bg-trasparent">
			<svelte:fragment slot="lead">
				<p class="p-5 variant-soft-primary">{name}</p>
			</svelte:fragment>
			<svelte:fragment slot="trail">
				<p class="btn variant-soft-warning"  use:popup={popupFeatured}>🌌 {coins}</p>
				<div class="card p-4 w-32 shadow-xl" data-popup="popupFeatured">
					<div><p>your coins</p></div>
					<div class="arrow bg-surface-100-800-token" />
				</div>
				<p class="btn variant-soft-warning">💎 {gems}</p>
			</svelte:fragment>
		</AppBar>
</div>
	<!-- Page Route Content -->

		<slot/>

		<div class="fixed w-full bottom-0">

			<AppBar background="bg-trasparent">
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
	</div>
