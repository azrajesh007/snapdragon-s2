<script>
	import {TeamStore} from '../../models/team';
	import {Team} from '../../models/team';
	import CopyClipBoard from '../../utils/Clipboard.svelte';
	import toast from '../../utils/toast';
	import Tags from "svelte-tags-input";
	import Modal from '../../utils/modal.js';

	const teamModel = Team.getInstance();
	let emails = [];

	const copy = e => {
		e.preventDefault();
		const app = new CopyClipBoard({
			target: document.getElementById('clipboard'),
			props: { name: $TeamStore.code },
		});
		app.$destroy();
		toast.success('Copied to clipboard');
	}

	const onTags = e => {
		emails = emails.filter(t => {
			if(/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/.test(t)){
				return true;
			}else{
				toast.error(t+' is invalid email');
				return false;
			}
		})
	}

	const sendInvite = async e => {
		e.preventDefault();
		let res = await teamModel.sendInvite(emails);
		if(!res.error) {
			toast.success('Invitation sent successfully!');
			Modal.close();
		}
	}
</script>
<div id="clipboard"></div>
<div class="svelte-modal-header">
	<h2 class="popup-title">
		Invite players to your team
	</h2>
	<small class="request-info-txt">
	   Copy the below code and share it with your friends to invite them into your team.
	</small>
</div>
<div class="bg-icon">
	<span class="material-icons">
		star_border
	</span>
</div>
<div class="row no-gutters">
	<div class="col-12 mt-3">
		<div class="invitation-code">
			{$TeamStore.code}
			<a href="#" class="copy-code" on:click={copy}>
				<span class="material-icons">
					library_books
				</span>
			</a>
		</div>
	</div>
</div>
<small class="request-info-txt mt-40 mb-3 d-block">
	Alternatively, add email addresses of friends below and we will email them your invite.
</small>
<div class="form-group position-relative">
	<Tags onlyUnique={true} allowBlur={true} bind:tags={emails} class="text-box"  placeholder={"Email address"} name="emails" addKeys={[9, 13, 32, 188]} on:tags={onTags}/>
	<!-- <input type="text" class="text-box" id="" placeholder=" "> -->
	<!-- <label class="lbl-txt" for="emails"></label> -->
</div>
<div class="mt-40">
	<button class="btn btn-primary" disabled={emails.length == 0} on:click={sendInvite}>
		Send Invites
	</button>
</div>
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

	.copy-code {
		float: right;
		margin-top: 9px;
		border: 1px solid #677790;
		border-radius: 50%;
		line-height: normal;
		padding: 4px;
		width: 36px;
		height: 36px;
	}

	.copy-code span {
		color: #677790;
	}

</style>