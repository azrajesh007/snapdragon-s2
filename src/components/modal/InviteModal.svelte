<script>
	import {Team} from '../../models/team';
	import Modal from '../../utils/modal.js';
	import FindTeamModal from './FindTeamModal.svelte';
	let code = '';
	if(window.localStorage.getItem('inviteCode')){
		code = window.localStorage.getItem('inviteCode').toUpperCase();
		window.localStorage.removeItem('inviteCode')
	}
	const joinTeam = async e => {
		e.preventDefault();
		let res = await Team.getInstance().requestToJoin(code);
		if(!res.error) {
			window.location.href = '/dashboard/team';
		}
	}
</script>
<div class="svelte-modal-header">
    <h2 class="popup-title">
        Join a team with invite code
    </h2>
    <small class="request-info-txt">
        Input or paste your invite code below to join an exisiting team.
    </small>
</div>
<div class="bg-icon">
	<span class="material-icons">
		star_border
	</span>
</div>
<div class="row no-gutters">
    <div class="col-12 mt-4">
        <form>
            <div class="form-group">
                <input type="text" name="" class="text-box-transparent" bind:value={code}>
            </div>
            <div>
                <a href="#" class="btn btn-primary" on:click={joinTeam}>
                    Join team
                </a>
            </div>
        </form>
    </div>
</div>
<small class="request-info-txt mt-40 mb-3 d-block">
    Alternatively, you can find a team to join from the list of teams accepting players.
</small>
<a href="#" class="survey-link no-margin" on:click="{() => Modal.open(FindTeamModal)}">
    Find a team to join
    <span class="material-icons">
        keyboard_arrow_right
    </span>
</a>
<style>
	.requestie-details {
		padding: 20px 0;
		border-bottom: 1px solid rgba(103, 119, 144, 0.5);
	}

	.requestie-name {
		font-size: 20px;
		margin-bottom: 10px;
		display: block;
		width: 100%;
		color: #0b2742;
		font-weight: normal;
		font-stretch: normal;
		font-style: normal;
		line-height: normal;
		letter-spacing: normal;
	}

	.requestie-mail {
		font-size: 16px;
		display: block;
		width: 100%;
		color: #677790;
		font-weight: normal;
		font-stretch: normal;
		font-style: normal;
		line-height: normal;
		letter-spacing: normal;
	}

	.svelte-modal-header {
		/*margin-bottom: 36px;*/
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

	.add-btn span {
		color: #3253dc;
		margin-right: 16px;
		font-size: 32px;
	}

	.remove-btn span {
		color: #3253dc;
		font-size: 32px;
	}

	.last {
		border-bottom: none;
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

	.bg-icon {
		position: absolute;
		top: -26px;
		right: -24px;
	}

	.bg-icon span {
		font-size: 15em;
		color: rgba(74, 183, 202, 0.1);
	}

</style>