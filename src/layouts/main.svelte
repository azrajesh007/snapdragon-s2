<script>
    import Header from './partials/Header.svelte';
    import Footer from './partials/Footer.svelte';
    import Compete from './partials/Compete.svelte';
    import Contest from './partials/Contest.svelte';
    import ContestDiamond from './partials/ContestDiamond.svelte';
    import Format from './partials/Format.svelte';
</script>
<Header />
<slot></slot>
<!-- <div class="home-page for-desktop">
	<Format />
</div>
<div class="format-details for-mobile-only">
	<Format />
</div> -->
<!-- <Compete /> -->
<!-- <Contest /> -->
<!-- <ContestDiamond /> -->
<Footer />