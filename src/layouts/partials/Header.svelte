<script>
	export let menuMobile = false;
	export let menuDropdown = false;
	import {User} from '../../models/user';
	import UserMenu from './header/UserMenu.svelte';
	import { scrollto } from "svelte-scrollto";
	
	let user = User.getUser();
</script>
<svelte:head>
	{#if menuMobile}
		<style>
			body {
				overflow: hidden;
			}
		</style>
	{/if}
</svelte:head>
<header>
	<div class="row no-gutters main-navigation">
		<button class="menu-btn" class:open="{menuMobile}" on:click={()=>{ menuMobile = !menuMobile; return false; }}>
			<svg width=32 height=24>
				<line id="top" x1=0 y1=2  x2=32 y2=2/>
				<line id="middle" x1=0 y1=12 x2=32 y2=12/>
				<line id="bottom" x1=0 y1=22 x2=32 y2=22/>
			</svg>
		</button>
		<!-- <div class="col-lg-2 col-sm-12 col-xs-11">
			<a href="/" class="brand-logo">
				<img src="/images/logo-conquest-small.png" alt="Logo">
			</a>
		</div> -->
		<div class="col-lg-7 col-sm-12 col-xs-12 menu-sec">
			<a href="/" class="brand-logo">
				<img src="/images/logo-conquest-small.png" alt="Logo">
			</a>
			
		</div>
		<div class="col-lg-5 col-sm-4 col-xs-12">
			<div class="menu-block" class:menuopen="{menuMobile}">
				<ul class="menu" >
					<li>
						<a href="/">
							Home
						</a>
					</li>
					<li>
						<a href="/teamsandstandings">
							Teams
						</a>
					</li>
					<li>
						<a href="/schedule">
							Schedule
						</a>
					</li>
					<li>
						<a href="/videos">
							Videos
						</a>
					</li>
					<!-- <li>
						<a href="/format">
							Format
						</a>
					</li>
					
					
					<li>
						<a href="/leaderboard">
							Leaderboard
						</a>
					</li> -->
					
					<!-- <li>
						<a href="#">
							Contests
						</a>
					</li> -->
					<!-- <li>
						<a href="/faqs" target="_top">
							FAQs
						</a>
					</li> -->
					<!-- <li>
						<a href="/vote" > Vote </a>
					</li> -->
				</ul>
			</div>
		</div>
	</div>
</header>
<style>

	.main-navigation {
		display: flex;
		align-items: center;
		height: 100%;
	}
</style>