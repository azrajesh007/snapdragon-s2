<script>
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
				<li class="active">
					<a href="#">
						Profile
					</a>
				</li>
				<li>
					<a href="/dayzeroplayer">
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
			<div class="col-4 border-right text-center">
				<a href="#" class="upload-img">
					<span class="bg-icon"></span>
					<span class="material-icons">
						add_circle_outline
					</span>
					<strong>
						Add Profile Pic
					</strong>
				</a>
				<ul class="profil-info">
					<li>
						<!-- after uploading For Referance -->
						<!-- <img class="profile-pic-md rounded" src="images/profile-pic.jpg" align="Profile-pic"> -->
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
					<button class="btn btn-primary plain-btn">
						Log Out
					</button>
				</div>
			</div>
			<div class="col-8 pl-50">
				<div class="survey-block survey-bg">
					<div class="row">
						<div class="col-6">
							<div class="survey-txt text-color">
								Congratulations. Your team Qualified for
							</div>
							<h4 class="">
								In-game Qualifiers Stage
							</h4>
							<p class="survey-info-txt">
								Quid ex ea voluptate ponit, quod omnium philosophorum sententia tale debet esse, ut ratione neque disputatione, quam ostendis sed quia dolor sit numeranda nec segniorem ad modum, quaeso, interpretaris.
							</p>
							<!-- <div>
								<a href="#" class="survey-link">
									Watch explainer video
									<span class="material-icons">
										keyboard_arrow_right
									</span>
								</a>
							</div> -->
						</div>
					</div>
				</div>
				<div class="row">
					<div class="col-6">
						<div class="team-box">
							<span class="team-title text-color">
								Schedule
							</span>
                            <div class="survey-txt text-color">
								In-game Qualifiers
							</div>
							<h4 class="mt-2">
								16-24 October 2020
							</h4>
							<p class="survey-info-txt text-color">
								Play any number of matches with your team. Your top 10 scores will be considered.
							</p>
							<div>
								<a href="#" class="survey-link margin-zero" on:click="{() => showModal = true}">
									See full schedule
									<span class="material-icons">
										keyboard_arrow_right
									</span>
								</a>
							</div>
						</div>
					</div>
					<div class="col-6">
						<div class="team-box box-right">
							<span class="team-title text-color">
								Standings
							</span>
                            <div class="survey-txt text-color">
								In-game Qualifiers
							</div>
							<h4 class="mt-2">
								Ongoing…
							</h4>
							<p class="survey-info-txt text-color">
								Check back on 26 October 2020 for results.
							</p>
						</div>
					</div>
				</div>
			</div>
		</div>
	</div>
</section>

<style>

	.popup-title {
		font-size: 24px;
		color: #0b2742;
		font-weight: 500;
		font-stretch: normal;
		font-style: normal;
		line-height: normal;
		letter-spacing: normal;
	}

	.request-info-txt {
		font-size: 16px;
		color: #0b2742;
		font-weight: normal;
		font-stretch: normal;
		font-style: normal;
		line-height: 1.25;
		letter-spacing: normal;
	}

	.text-box-transparent {
		height: 56px;
		width: 100%;
		padding: 0 15px;
		color: #3253dc;
		font-size: 24px;
		font-weight: 500;
		font-stretch: normal;
		font-style: normal;
		line-height: normal;
		letter-spacing: 1px;
		background: none;
		border-radius: 5px;
		border: solid 2px #465a77;
	}

	.text-box-transparent:focus {
		outline: none;
	}

    .text-color {
        color:#0b2742;
    }

    .team-box h4 {
        color:#3253dc;
    }

    .box-right {
        height:94%;
    }

</style>