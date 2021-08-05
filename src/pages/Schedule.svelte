<script>
	import Calendar from '../components/Calendar.svelte';
	import Video from '../components/Video.svelte';
import Insider from '../layouts/partials/Insider.svelte';
</script>
<svelte:head>
	<link
		href="https://fonts.googleapis.com/icon?family=Material+Icons"
		rel="stylesheet" />
</svelte:head>
<div class="top-section schedule-block">
	<h1 class="title">Schedule</h1>
	<Video url="https://www.youtube.com/watch?v=-gyBzQnsGT0" thumb="/images/day10_conquest_trailer_thumb_trailer.jpg"/>
	<!-- <h4 class="video-caption">Registrations open now</h4> -->
</div>
<div class="container">
	<div class="calendar-box">
		<h1 class="tournamnet-title">Tournament Calendar</h1>
		<Calendar/>
	</div>
</div>
<Insider />
<style>
	.top-section {
		min-height: 559px;
		background: url("../images/inner-banner.png") no-repeat center;
		background-size: cover;
	}

	.title {
		font-size: 42px;
		font-family:'Qualcomm Next Medium';
		text-align: center;
		letter-spacing: 0;
		color: #ffffff;
		padding: 80px 0 40px 0;
	}

	.video-caption {
		padding: 40px 0;
		padding-bottom: 80px;
		font-size: 16px;
		text-align: center;
		letter-spacing: 0;
		color: #ffffff;
	}
</style>