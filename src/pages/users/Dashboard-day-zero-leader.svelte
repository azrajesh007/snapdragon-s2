<script>
	import RequestModal from '../../components/modal/RequestModal.svelte';
	import DeleteModal from '../../components/modal/DeleteModal.svelte';
	import TeamInviteModal from '../../components/modal/TeamInviteModal.svelte';
	import Modal from '../../utils/modal.js';

	let dropdonwMenu = false;
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
				<li>
					<a href="/">
						Profile
					</a>
				</li>
				<li class="active">
					<a href="#">
						Your Team
					</a>
				</li>
				<li>
					<a href="#">
						Schedule
					</a>
				</li>
				<li>
					<a href="#">
						Standings
					</a>
				</li>
			</ul>
		</div>
	</div>
	<div class="container">
		<div class="row">
			<div class="col-4 border-right">
				<ul class="profil-info">
					<li>
						<img class="profile-pic-md rounded" src="images/profile-pic.jpg" align="Profile-pic">
						<strong>
							Name
						</strong>
						<span>
							Victor Pacheco
						</span>
					</li>
					<li>
						<strong>
							Free Fire ID
						</strong>
						<span>
							victor@qconquest.com
						</span>
					</li>
					<li>
						<strong>
							Mobile Number
						</strong>
						<span>
							+91 9988776655
						</span>
					</li>
				</ul>
				<div class="text-center">
					<button class="btn plain-btn">
						Log Out
					</button>
				</div>
			</div>
			<div class="col-8 pl-50">
				<div class="upload-block teacm-full-details p-40">
					<div class="row">
						<div class="col-4">
							<a class="team-details text-center upload-team-logo">
								<span class="material-icons upload-img-static">
									backup
								</span>
								<span>Upload team logo</span>
								<small>.jpg or .png file. Min 500px / 500px</small>
							</a>
						</div>
						<div class="col-4">
							<ul class="team-details pt-30">
								<li>
									<strong>Team Name</strong>
									<span>Team Name Long</span>
								</li>
								<li>
									<strong>Team ID</strong>
									<span>QERT1124897</span>
								</li>
							</ul>
						</div>
						<div class="col-4">
							<ul class="team-details reqeust pt-30">
								<li>
									<strong>Status</strong>
									<span>Incomplete</span>
								</li>
								<li class="no-margin">
									<strong>Requests</strong>
									<span>3 new requests</span>
								</li>
							</ul>
							<div class="mt-2">
								<a href="#" class="survey-link no-margin" on:click="{() => Modal.open(RequestModal)}">
									See all reqeusts
									<span class="material-icons">
										keyboard_arrow_right
									</span>
								</a>
							</div>
						</div>
					</div>
				</div>
				<div class="upload-block awating-response p-40 mt-20">
					<div class="row">
						<div class="col-12">
							<h6 class="title">
								Complete your team
								<div class="dropdown team-actions-dropdown">
									<button class="dropbtn" on:click={() => dropdonwMenu = !dropdonwMenu}>
										<span class="material-icons">
												more_horiz
											</span>
									</button>
									{#if dropdonwMenu}
										<div class="dropdown-content" on:clickoutside={dropdonwMenu}>
											<a href="#">Invite player</a>
											<a href="#" on:click="{() => Modal.open(DeleteModal)}">Delete team</a>
										</div>
									{/if}
								</div>
							</h6>
							<p class="response-desc">
								Make sure you form your team by 12 October 2020. Incomplete teams will not qualify for In-game qualifiers stage. Good luck!
							</p>
							<div class="d-flex overflow-x">
								<div class="player">
									<img class="pic profile-pic-sm rounded" src="images/profile-pic.jpg" align="Profile-pic">
									<div class="player-info">
										<strong class="player-name">
											Victor Pacheco
										</strong>
										<span class="player-position">
											Team Leader
										</span>
									</div>
								</div>
								<div class="player">
									<a href="#" class="upload-img add-player-upload" on:click="{() => Modal.open(TeamInviteModal)}">
										<span class="bg-icon">
										</span>
										<span class="material-icons">add_circle_outline</span>
										<strong>Add player</strong>
									</a>
									<div class="dropdown">
										<button class="dropbtn" on:click={() => dropdonwMenu = !dropdonwMenu}>
											<span class="material-icons">
													more_horiz
												</span>
										</button>
										{#if dropdonwMenu}
											<div class="dropdown-content">
												<a href="#">Kick Player</a>
												<a href="#">Make Leader</a>
											</div>
										{/if}
									</div>
								</div>
								<div class="player">
									<a href="#" class="upload-img add-player-upload" on:click="{() => Modal.open(TeamInviteModal)}">
										<span class="bg-icon">
										</span>
										<span class="material-icons">add_circle_outline</span>
										<strong>Add player</strong>
									</a>
									<div class="dropdown">
										<button class="dropbtn" on:click={() => dropdonwMenu = !dropdonwMenu}>
											<span class="material-icons">
													more_horiz
												</span>
										</button>
										{#if dropdonwMenu}
											<div class="dropdown-content">
												<a href="#">Kick Player</a>
												<a href="#">Make Leader</a>
											</div>
										{/if}
									</div>
								</div>
								<div class="player">
									<a href="#" class="upload-img add-player-upload" on:click="{() => Modal.open(TeamInviteModal)}">
										<span class="bg-icon">
										</span>
										<span class="material-icons">add_circle_outline</span>
										<strong>Add player</strong>
									</a>
									<div class="dropdown">
										<button class="dropbtn" on:click={() => dropdonwMenu = !dropdonwMenu}>
											<span class="material-icons">
													more_horiz
												</span>
										</button>
										{#if dropdonwMenu}
											<div class="dropdown-content">
												<a href="#">Kick Player</a>
												<a href="#">Make Leader</a>
											</div>
										{/if}
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	</div>
</section>

<style>

	.btn-primary {
		height: 40px;
		margin-top: 60px;
		min-width: 160px;
		border-radius: 25px;
		background-color: #3253dc;
	}

	.team-details li {
		display: block;
		margin-bottom: 20px;
		width: 100%;
	}

	.team-details li strong {
		font-size: 14px;
		margin-bottom: 10px;
		display: block;
		width: 100%;
		color: #465a77;
		font-weight: 500;
		font-stretch: normal;
		font-style: normal;
		line-height: normal;
		letter-spacing: normal;
	}

	.team-details li span {
		font-size: 18px;
		display: block;
		width: 100%;
		font-weight: normal;
		font-stretch: normal;
		font-style: normal;
		line-height: normal;
		letter-spacing: normal;
		color: #000000;
	}

	.title {
		font-size: 24px;
		color: #3253dc;
		font-weight: 500;
		font-stretch: normal;
		font-style: normal;
		line-height: normal;
		letter-spacing: normal;
	}

	.player {
		margin-right: 25px;
		position: relative;
		border: 1px solid transparent;
	}

	.player .pic {
		border: 1px solid transparent;
	}

	.player-info {
		margin-top: 10px;
		text-align: center;
	}

	.player-name {
		font-size: 14px;
		color: #0b2742;
		font-weight: normal;
		font-stretch: normal;
		font-style: normal;
		line-height: normal;
		letter-spacing: normal;
		text-align: center;
	}
	
	.player-position {
		font-size: 12px;
		display: block;
		color: #677790;
		font-weight: normal;
		font-stretch: normal;
		font-style: normal;
		line-height: normal;
		letter-spacing: normal;
		text-align: center;
	}

	.response-desc {
		font-size: 14px;
		color: #465a77;
		font-weight: normal;
		font-stretch: normal;
		font-style: normal;
		line-height: normal;
		letter-spacing: normal;
	}

	.upload-team-logo {
		width: 100%;
		display: inline-block;
		height: 180px;
		border: 1px dashed #465a77;
		border-radius: 5px;
		background: #e9ebee;
	}

	.upload-team-logo span {
		font-size: 14px;
		display: block;
		font-weight: 500;
		color: #3253dc;
	}

	.upload-team-logo small {
		font-size: 10px;
		color: #465a77;
	}

	.upload-block {
		background:rgba(131, 147, 170, 0.1);
	} 

	.upload-img-static {
		/*width: 36px;
		height: 34px;*/
		font-size: 36px !important;
		color: #3253dc;
		margin: 0 auto;
		margin-top: 44px;
	}

	.reqeust .all-request {
		font-size: 1rem;
		color: #3253dc;
	}

	.add-player-btn {
		border:none;
		border-radius: 50%;
		border:1px #677790 dashed;
		margin-right: 20px;
		outline: none;
		height:120px;
		background-image:url(/images/white-player.png);
		background-repeat: no-repeat;
	}

	.upload-team-logo span {
		font-size: 14px;
		font-weight: 500;
		color:#3253dc;
	}

	.upload-team-logo small {
		font-size: 10px;
		font-weight: 500;
		color:#465a77;
	}
 
	.add-player-btn ul li {
		list-style: none;
		width: 120px;
		height: 120px;
	}

	.add-player-btn img {
		opacity: 0.2;
		width: 40px;
		height:40px;	
		margin-top:28px;	
	}

	.player-txt {
		font-size: 14px;
		font-weight: 500;
		color:#3253dc;
		margin-top:14px;
	}

	.pt-30 {
		padding-top: 30px;
	}

	.dropbtn {
		background: transparent;
		cursor: pointer;
		color: #3253dc;
		font-size: 16px;
		border: none;
		outline: none;
	}

	.dropdown {
		position: absolute;
		display: inline-block;
		top: 0px;
		right: -6px;
	}

	.dropdown-content {
		/*display: none;*/
		overflow: hidden;
		position: absolute;
		background-color: #fff;
		/*box-shadow: 0px 8px 16px 0px rgba(0,0,0,0.2);*/
		z-index: 1;
		border-radius: 5px;
		border: solid 1px #8393aa;
		width: 120px;
		border: solid 1px #8393aa;
		right: -8px;
		top: -8px;
	}

	.dropdown-content a {
		font-size: 12px;
		color: #677790;
		font-family: 'Qualcomm Next';
		padding: 14px 16px;
		text-decoration: none;
		display: block;
		font-weight: normal;
		font-stretch: normal;
		font-style: normal;
		line-height: normal;
		letter-spacing: normal;
	}

	.dropdown-content a:hover {
		background-color: #EFF4FE;
	}

	.dropdown:hover .dropdown-content {
		/*display: block;*/
	}

	.add-player-btn ul li .dropdown {
		position: absolute;
		margin-left: 75px;
	}

	.add-player-upload {
		width: 120px;
		height: 120px;
	}

	.add-player-upload .material-icons {
		font-size: 40px;
		top: 50%;
	}

	.add-player-upload .bg-icon {
		width: 120px;
		height: 120px;	
	}

	.add-player-upload strong {
		font-size: 14px;
		width: 100%;
		top: 75%;
	}

	.team-actions-dropdown {
		right: 20px;
	}

	.team-actions-dropdown .dropdown-content {
		right: 0;
	}

	.text-box {
		width: 100%;
	}
</style>