<script>
 	import Format from '../layouts/partials/Format.svelte';
	import { Tabs, TabList, TabPanel, Tab } from '../components/tabs/tabs.js';
	import Video from '../components/Video.svelte';
</script>
<div class="format-page">
	<div class="top-section">
		<h1 class="title">Format</h1>
		<Video url="https://www.youtube.com/watch?v=obJ469oN0Vg" thumb="/images/day_13_conquest_format-explainer_thumb_HINDI.jpg"/>
		<div class="format-details">
			<Format />
		</div>
	</div>
</div>
<style>
	
	.col-heading {
		font-size: 16px;
		font-family: "Qualcomm Next Medium";
		font-stretch: normal;
		font-style: normal;
		line-height: 1.5;
		letter-spacing: normal;
		letter-spacing: 0;
		color: #0b2742;
	}

	.col-paragraph {
		font-size: 16px;
		line-height: 24px;
		font-weight: normal;
		font-stretch: normal;
		font-style: normal;
		letter-spacing: normal;
		letter-spacing: 0;
		color: #0b2742;
		margin-bottom: 2rem;
	}


</style>