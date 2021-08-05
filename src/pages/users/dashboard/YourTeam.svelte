<script>
	import RequestModal from '../../../components/modal/RequestModal.svelte';
	import DeleteModal from '../../../components/modal/DeleteModal.svelte';
	import TeamInviteModal from '../../../components/modal/TeamInviteModal.svelte';
    import Modal from '../../../utils/modal.js';
    import {TeamStore, Team} from '../../../models/team';
    import {User} from '../../../models/user';
	import Profile from './Profile.svelte';
	import StatusCard from './team/StatusCard.svelte';
	import TeamMenu from './team/TeamMenu.svelte';
	import Switch from '../../../components/Switch.svelte';
	import Toast from '../../../utils/toast';
	let dropdonwMenu = false;
	const currentUser = User.getUser();
	const teamModel = Team.getInstance();
	let isLeader = false;
	let leaderObj;
	$: isLeader, $currentUser, leaderObj = isLeader ? {...$currentUser} : $TeamStore.leader;
	let hideTeam;
    TeamStore.subscribe(t => {
        if (t.leader && t.leader.id == $currentUser.id){
			isLeader = true;
        }else{
			isLeader = false;
		}
		hideTeam = !t.searchable;
	})
	const updateRequests = async (e) => {
		e.preventDefault();
		let requests = await teamModel.getRequests();
		$TeamStore.newRequests = requests.length;
	}
	
	const kickPlayer = async player => {
		Modal.open(DeleteModal, {content: `You chose to kick ${player.first_name} ${player.last_name} out of the team. You cannot reverse this.`, btnText: 'Kick player'}, async () => {
			let res = await teamModel.kickPlayer(player.id);
			if(!res.error){
				Modal.close();
			}
		})
	}
	const makeLeader = async player => {
		Modal.open(DeleteModal, {content: `You chose to make ${player.first_name} ${player.last_name} leader of the team. You will loose rights to manage the team. You cannot reverse this.`, btnText: 'Make leader'}, async () => {
			let res = await teamModel.makeLeader(player.id);
			if(!res.error){
				Modal.close();
			}
		})
	}
	const cancelRequest = async () => {
		Modal.open(DeleteModal, {content: `You chose to cancel the request to join the team "${$TeamStore.name}"`, btnText: 'Cancel request'}, async () => {
			let res = await teamModel.cancelRequest();
			if(!res.error){
				Modal.close();
			}
		})
	}
	const leaveTeam = async () => {
		if(isLeader)
			Modal.open(DeleteModal, {title: 'Cant leave!!', content: `You need to appoint a leader before you can leave the team.`, btnText: 'OK', hideCancel: true}, async () => {
				// let res = await teamModel.leaveTeam();
				// if(!res.error){
					Modal.close();
				//}
			})
		else
			Modal.open(DeleteModal, {content: `You chose to leave the team "${$TeamStore.name}"`, btnText: 'Leave team'}, async () => {
				let res = await teamModel.leaveTeam();
				if(!res.error){
					Modal.close();
				}
			})
	}
	const deleteTeam = async () => {
		Modal.open(DeleteModal, {content: 'You chose to delete the team you have created. You cannot reverse this.', btnText: 'Delete team'}, async () => {
			let res = await teamModel.deleteTeam();
			if(!res.error){
				Modal.close();
			}
		})
	}
	const invitePlayer = async e => {
		e.preventDefault();
		let img = await window.fetch('/images/WhatsAppShare.png');
		img = await img.arrayBuffer();
		let fileName = "JoinTheTeam.png";
		let filedata = new File([img], fileName, {
			type: "image/png",
			lastModified: Date.now()
		});
		let fileArray = [filedata];
		Object.freeze(fileArray);
		if(window.navigator && window.navigator.canShare && window.navigator.canShare({files: fileArray})){
			navigator.share({
				files: fileArray,
				title: 'Join the battle!',
				text: `I am inviting you to join my team ${$TeamStore.name}. Please signup at https://snapdragonconquest.com and use the code ${$TeamStore.code} to join my team.`,
				url: 'https://snapdragonconquest.com/invite/'+$TeamStore.code
			}).then(() => {
				console.log('Thanks for sharing!');
			})
			.catch(console.error);
		}
		// if (window.navigator && window.navigator.share) {
		// 	navigator.share({
		// 		title: 'Invite to team',
		// 		text: `I am inviting you to join my team ${$TeamStore.name}. Please signup at https://conquestesports.in and use the code ${$TeamStore.code} to join my team.`,
		// 		url: 'https://share.conquestesports.in/team/info/'+$TeamStore.code
		// 	}).then(() => {
		// 		console.log('Thanks for sharing!');
		// 	})
		// 	.catch(console.error);
		// }
		else{
			Modal.open(TeamInviteModal)
		}
	}
	const showHideTeam = async e => {
		let res;
		if(hideTeam){
			res = await teamModel.hideTeam();
		}else{
			res = await teamModel.showTeam();
		}
		if(!res.error){
			Toast.success('Updated visibility');
		}else{
			Toast.error('Failed to update visibility');
		}
	}
</script>
<svelte:body on:mouseup={
	e => {
		if($TeamStore.players && !e.target.classList.contains('dropbtn')){
			setTimeout(() => {$TeamStore.players = $TeamStore.players.map(p => ({...p, showMenu: false}));}, 200);
		}
	}
}/>
{#if $TeamStore.name && $TeamStore.status != 'deleted' && $TeamStore.status != 'team_full' && $TeamStore.status != 'cancelled' && $TeamStore.status != 'left_team' && $TeamStore.status != 'rejected'}
    <div class="upload-block teacm-full-details p-40">
        <div class="row">
            <div class="col-lg-4 col-sm-7 col-xs-12">
                <div class="box">
					<div class="content rounded-circle"> {$TeamStore.name.indexOf(' ') != -1 ? $TeamStore.name.split(' ').map(a => a[0]).join('').substr(0,2) : $TeamStore.name.substr(0,2)} </div>
                </div>
			</div>
			<div class="col-lg-8">
				<div class="row">
					<div class="col-lg-6 col-sm-6 col-xs-12">
						<ul class="team-details pt-30">
							<li>
								<strong>Team Name</strong>
								<span>{$TeamStore.name}</span>
							</li>
							<li>
								<strong>Team Code</strong>
								<span>{$TeamStore.code}</span>
							</li>
						</ul>
					</div>
					<div class="col-lg-6 col-sm-6 col-xs-12">
						<ul class="team-details reqeust pt-30">
							<li>
								<strong>Status</strong>
								<span>
									{#if $TeamStore.status == 'active'}
										{#if $TeamStore.players && $TeamStore.players.length < 4}
											Incomplete
										{:else}
											Complete
										{/if}
									{:else if $TeamStore.status == 'requested'}
										{$TeamStore.players.length < 4 ? 'Awaiting response' : 'Team is full'}
									{/if}
								</span>
							</li>
						</ul>
					</div>
				</div>
			</div>
        </div>
    </div>
    <div class="upload-block awating-response p-40 mt-20">
        <div class="row">
            <div class="col-12">
				<h6 class="title">
					Team members
				</h6>
				<p class="response-desc">
					{#if $TeamStore.notice}
						{@html $TeamStore.notice}
					{:else if $TeamStore.status == 'active' && $TeamStore.players.length == 4}
						Your team did not qualify to the further phases of the tournament based on your score. Thank you for your participation and good luck for future tournaments. 
					{:else}
						You did not qualify for the In-Game Qualifiers as you were not a part of a completed team. Good luck for your future events.
					{/if}
				</p>
                <div class="row player-section">
                    {#if $TeamStore.leader}
                        <div class="player col-6 col-md-3">
                            <img class="pic profile-pic-sm rounded" src="/images/white-player.png" align="Profile-pic">
                            <div class="player-info">
                                <strong class="player-name">
                                    {leaderObj.first_name} {leaderObj.last_name}
                                </strong>
                                <span class="player-position">
                                    Team Leader
								</span>
								<span class="player-position">FF{leaderObj.free_fire_id}</span>
                            </div>
                        </div>
                    {/if}
                    {#if isLeader}
                        {#each $TeamStore.players.filter(p => p.id != $TeamStore.leader.id) as player, i}
                            <div class="player col-6 col-md-3">
                                <img class="pic profile-pic-sm rounded" src="/images/white-player.png" align="Profile-pic">
                                <div class="player-info">
                                    <strong class="player-name">
                                        {player.first_name} {player.last_name}
                                    </strong>
                                    <span class="player-position">
                                        Player {i+2}
									</span>
									<span class="player-position">FF{player.free_fire_id}</span>
                                </div>
                            </div>
                        {/each}
                    {:else}
						{#each $TeamStore.players.filter(p => p.id != $TeamStore.leader.id) as player, i}
							{#if player.id == $currentUser.id}
								<div class="player col-6 col-md-3">
									<img class="pic profile-pic-sm rounded" src="/images/white-player.png" align="Profile-pic">
									<div class="player-info">
										<strong class="player-name">
											{$currentUser.first_name} {$currentUser.last_name}
										</strong>
										<span class="player-position">
											Player {i+2}
										</span>
										<span class="player-position">FF{$currentUser.free_fire_id}</span>
									</div>
								</div>
							{:else}
                            <div class="player col-6 col-md-3">
                                <img class="pic profile-pic-sm rounded" src="/images/white-player.png" align="Profile-pic">
                                <div class="player-info">
                                    <strong class="player-name">
                                        {player.first_name} {player.last_name}
                                    </strong>
                                    <span class="player-position">
                                        Player {i+2}
									</span>
									<span class="player-position">FF{player.free_fire_id}</span>
                                </div>
							</div>
							{/if}
                        {/each}
                    {/if}
				</div>
            </div>
        </div>
    </div>
{/if}
<style>
    .box {
        position: relative;
        margin: 5px;
	}
	.box:before {
    	content: "";
    	display: block;
    	padding-top: 100%;
    	/* initial ratio of 1:1*/
	}
	img {
    	/*min-width: 100%;*/
    	height: auto;
	}
	.content {
    	position: absolute;
    	top: 0;
    	left: 0;
    	bottom: 0;
    	right: 0;
    	background: #fff;
    	color: #3253dc;
    	/*   display: flex;
    	align-items: center; */
    	line-height:100%;
    	height:100%;
    	text-align: center;
    	display: flex;
    	align-items: center;
    	justify-content: center;
    	font-size: 3em;
    	font-weight: bold;
	}
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
		font-family: 'Qualcomm Next Medium';
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
		font-family: 'Qualcomm Next Medium';
		font-stretch: normal;
		font-style: normal;
		line-height: normal;
		letter-spacing: normal;
	}
	.player {
		/*margin-right: 25px;*/
		position: relative;
		border: 1px solid transparent;
		text-align: center;
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
		font-family: 'Qualcomm Next Medium';
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
		font-family: 'Qualcomm Next Medium';
		color:#3253dc;
	}
	.upload-team-logo small {
		font-size: 10px;
		font-family: 'Qualcomm Next Medium';
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
		font-family: 'Qualcomm Next Medium';
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

	.hide-team {
		font-size: 18px;
		margin-bottom: 0;
		font-weight: normal;
		font-stretch: normal;
		font-style: normal;
		letter-spacing: normal;
		color: #000000;
	}

	.hide-team-small {
		font-size: 12px;
		color: #8393aa;
		letter-spacing: 0;
		font-weight: normal;
		font-stretch: normal;
		font-style: normal;
		letter-spacing: normal;
	}

	.refresh-btn {
		color: #3253dc;
		top: 2px;
		font-size: 16px;
		position: absolute;
		margin-left: 6px;
	}

</style>