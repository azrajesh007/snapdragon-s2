<script>
	import { getContext } from 'svelte';
	import { TABS } from './Tabs.svelte';

	export let active = false;

	const tab = {active};
	const { registerTab, selectTab, selectedTab } = getContext(TABS);

	registerTab(tab);
</script>

<style>
	.tab-btn {
		background: none !important;
		cursor: pointer;
		border: none !important;
		outline: none !important;
		border-radius: 0;
		margin: 0;
		color: #677790;
		margin: 0 20px;
		font-size: 16px;
		font-weight: 500;
		font-stretch: normal;
		font-style: normal;
		line-height: normal;
		letter-spacing: 0.5px;
	}

	.tab-btn:hover {
		color: #000;
	}
	
	.selected {
		color: #000000;
		font-family: "Qualcomm Next Medium";
	}
</style>

<div class="tab-btn" class:selected="{$selectedTab === tab}" on:click="{() => selectTab(tab)}">
	<slot></slot>
</div>