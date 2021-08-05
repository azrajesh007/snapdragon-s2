<script>
	import {User} from '../../models/user';

	let currentUser = User.getUser();
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
					<a href="/userdashboarddayzero">
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
							{currentUser.first_name} {currentUser.last_name}
						</span>
					</li>
					<li>
						<strong>
							Free Fire ID
						</strong>
						<span>
							{currentUser.free_fire_id}
						</span>
					</li>
					<li>
						<strong>
							Mobile Number
						</strong>
						<span>
							{currentUser.mobile_number}
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
				<div class="survey-block teacm-full-details p-40">
					<div class="row">
						<div class="col-4">
							<img class="team-logo" src="images/team-pic.jpg" alt="Team">
						</div>
						<div class="col-4">
							<ul class="team-details">
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
							<ul class="team-details">
								<li>
									<strong>Status</strong>
									<span>Awaiting response</span>
								</li>
							</ul>
						</div>
					</div>
				</div>
				<div class="survey-block awating-response p-40 mt-2">
					<div class="row">
						<div class="col-12">
							<h6 class="title">
								Awaiting response
							</h6>
							<p class="response-desc">
								You request to join “TEAM NAME LONG” has been sent to the team leader. You will be notified if the team leader accepts your request to join the team.
							</p>
							<div class="d-flex">
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
								<div class="player player-pending">
									<img class="pic profile-pic-sm rounded" src="images/profile-pic.jpg" align="Profile-pic">
									<div class="player-info">
										<strong class="player-name">
											Jube Bowman
										</strong>
										<span class="player-position">
											Pending approval
										</span>
									</div>
								</div>
								<div class="player player-pending">
									<img class="pic profile-pic-sm rounded" src="images/profile-pic.jpg" align="Profile-pic">
									
								</div>
								<div class="player player-pending">
									<img class="pic profile-pic-sm rounded" src="images/profile-pic.jpg" align="Profile-pic">
								</div>
							</div>
						</div>
					</div>
					<div class="row">
						<div class="col-12">
							<div class="mt-40">
								<a href="#" class="btn secondary-btn">Cancel & leave team</a>
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

	.player-pending .pic {
		opacity: 0.2;
		border: 1px dashed #000;
	}

	.team-logo {
		width: 180px;
		height: 180px;
		border-radius: 5px;
	}
</style>