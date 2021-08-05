<script>
	import {TeamStore} from '../../models/team';
	import {Team} from '../../models/team';
	const teamModel = Team.getInstance();
	import toast from '../../utils/toast';
	let requests = [];
	const getRequests = () => {
		teamModel.getRequests().then(r => {
			requests = r;
		});
	}
	getRequests();
	const approve = async request => {
		let res = await teamModel.approveRequest(request);
		if(!res.error) {
			getRequests();
			teamModel.getTeam();
			toast.success('Request accepted!');
		}
	}

	const reject = async request => {
		let res = await teamModel.rejectRequest(request);
		if(!res.error) {
			getRequests();
			teamModel.getTeam();
			toast.success('Request rejected!')
		}
	}
</script>
<div class="svelte-modal-header">
	<h2 class="popup-title">
		{$TeamStore.newRequests} New Requests
	</h2>
	<small class="request-info-txt">
		You received below requests from players who wish to join your team. 
	</small>
</div>
{#each requests as request}
	<div class="row no-gutters requestie-details">
		
			<div class="col-9">
				<div class="">
					<div class="requestie-name">
						{request.player.first_name} {request.player.last_name}
					</div>
					<div class="requestie-mail">
						{request.player.email}
					</div>
					<div class="requestie-mail requestie-phone">
						{request.player.mobile}
					</div>
				</div>
			</div>
		
		<div class="col-3 text-right">
			<a href="#" class="add-btn" on:click={e => {
					e.preventDefault();
					approve(request)
				}}>
				<span class="material-icons">
					add_circle_outline
				</span>
			</a>
			<a href="#" class="remove-btn" on:click={e => {
				e.preventDefault();
				reject(request)
			}}>
				<span class="material-icons">
					highlight_off
				</span>
			</a>
		</div>
	</div>
{:else}
	No new request
{/each}