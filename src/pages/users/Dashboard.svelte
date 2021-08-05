<script>
	import InviteModal from '../../components/modal/InviteModal.svelte';
	import FindTeamModal from '../../components/modal/FindTeamModal.svelte';
	import Modal from '../../utils/modal.js';
	import {User} from '../../models/user';
	import {Team} from '../../models/team';
	import {TeamStore} from '../../models/team';
	import Profile from './dashboard/Profile.svelte';
	import YourTeam from './dashboard/YourTeam.svelte';
	import {getHistory} from 'swheel';
	import UserEdit from '../../components/modal/UserEdit.svelte';
	import Notify from '../../utils/toast';
	import SuccessModal from '../../components/modal/SuccessfullyEnteredContestModal.svelte';

	let newTeamName = '';
	let currentUser = User.getUser();
	let teamModel = Team.getInstance();
	let currentTeam;
	let editing = false;
	const createTeam = async (name) => {
		currentTeam = await teamModel.createTeam({name});
	}
	if(window.localStorage.getItem('firstLogin') && $currentUser.contest) {
		Modal.open(SuccessModal);
		window.localStorage.removeItem('firstLogin')
	}
	const currentPath = getHistory().currentPath;
	
	let selectedTab = 0;
	const tabs = [
		Profile,
		YourTeam
	]

	currentPath.subscribe(p => {
		if(p == '/dashboard'){
			selectedTab = 0;
		}else if(p == '/dashboard/team'){
			selectedTab = 1;
		}
	})

</script>

<section class="banner">
	<div class="container">
		<div class="text-center">
			<h1 class="main-title">
			  	Dashboard
			</h1>
		</div>
	</div>
</section>
<section class="main-content">
	<div class="profile-menu">
		<div class="container">
			<ul>
				<li class:active={selectedTab==0}>
					<a href="/dashboard">
						Profile
					</a>
				</li>
				<li class:active={selectedTab==1}>
					<a href="/dashboard/team">
						Your Team
					</a>
				</li>
				{#if $currentUser.role == 'admin'}
					<li class:active={selectedTab==1}>
						<!-- <a href="/stats">
							Team Stats
						</a> -->
					</li>
				{/if}
				<!-- <li>
					<a href="#">
						Schedule
					</a>
				</li>
				<li>
					<a href="#">
						Standings
					</a>
				</li> -->
			</ul>
		</div>
	</div>
	<div class="container">
		<div class="row no-gutters">
			<div class="col-lg-4 col-sm-12 col-xs-12 border-right text-center d-lg-block" class:d-none={selectedTab==1}>
				<a href="#" class="upload-img">
					<span class="bg-icon"></span>
				</a>
				{#if !editing}
					<ul class="profil-info">
						<li>
							<!-- after uploading For Referance -->
							<!-- <img class="profile-pic-md rounded" src="images/profile-pic.jpg" align="Profile-pic"> -->
							<strong>
								Name
							</strong>
							<span>
								{$currentUser.first_name} {$currentUser.last_name}
							</span>
						</li>
						<li>
							<strong>
								Free Fire ID
							</strong>
							<span>
								{$currentUser.free_fire_id}
							</span>
						</li>
						<li>
							<strong>
								Mobile Number
							</strong>
							<span>
								{$currentUser.mobile}
							</span>
						</li>
						<li>
							<strong>
								Email
							</strong>
							<span>
								{$currentUser.email}
							</span>
						</li>
					</ul>
					<div class="text-center">
						<button class="btn plain-btn mb-3 d-none" on:click={() => { editing = true }}>Edit</button>
						<a href="/" class="btn plain-btn" on:click={(e) => {
								//e.preventDefault();
								User.logout();
								//window.location.href = '/';
							}}>
							Log Out
						</a>
					</div>
				{:else}
					<ul class="profil-info">
						<li>
							<!-- after uploading For Referance -->
							<!-- <img class="profile-pic-md rounded" src="images/profile-pic.jpg" align="Profile-pic"> -->
							<strong>
								Name
							</strong>
							<div class="form-inline">
								<div class="form-group"><input type="text" class="form-control" bind:value={$currentUser.first_name}><label for="">First name</label></div>
								<div class="form-group"><input type="text" class="form-control" bind:value={$currentUser.last_name}><label for="">Last name</label></div>
							</div>
						</li>
						<li>
							<strong>
								Free Fire ID
							</strong>
							<span>
								{$currentUser.free_fire_id}
							</span>
						</li>
						<li>
							<strong>
								Mobile Number
							</strong>
							<span>
								{$currentUser.mobile}
							</span>
						</li>
						<li>
							<strong>
								Email
							</strong>
							<span>
								{$currentUser.email}
							</span>
						</li>
					</ul>
					<div class="text-center">
						<button class="btn plain-btn mb-3">Save</button>
						<button class="btn plain-btn" on:click={(e) => { editing = false }}>
							Cancel
						</button>
					</div>
				{/if}
			</div>
			<div class="col-lg-8 col-sm-12 col-xs-12 pl-50">
				<svelte:component this={tabs[selectedTab]} onTeamCreate={() => { selectedTab = 1}}/>
			</div>
		</div>
	</div>
</section>