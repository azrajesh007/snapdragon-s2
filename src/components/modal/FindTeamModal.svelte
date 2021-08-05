<script>
	import {Team} from '../../models/team';
	import Modal from '../../utils/modal.js';
	import toast from '../../utils/toast';
	import {getHistory} from 'swheel';
	let page = 0;
	let teamModel = Team.getInstance();
	let teams = [];
	let query = '';
	const getTeams = async (fresh=true) => {
		let newTeams = await teamModel.getPendingTeams(query, page);
		if(fresh)
		teams = newTeams;
		else
		teams = [...teams, ...newTeams];
	}
</script>
<div class="svelte-modal-header">
	<h2 class="popup-title">
		Find a team
	</h2>
	<small class="request-info-txt">
		Search for a team who is looking for players. Search using Team captains Team Name / Captain Name
	</small>
</div>
<div class="bg-icon">
	<span class="material-icons">
		star_border
	</span>
</div>
<form class="mt-4">
	<div class="form-group position-relative">
		<input type="text" class="text-box" name="name" placeholder=" " id="name" bind:value={query} on:keyup={() => {
			if(query.length > 2)
			getTeams();
		}}>
		<label class="lbl-txt" for="name">Search Team Name / Captain Name</label>
	</div>
</form>
<div class="svelte-modal-content mt-2">
	{#if query.length < 3}
		<p>Start typing to search</p>
	{:else}
		{#each teams as team}
			<div class="row no-gutters requestie-details">
				<div class="col-10">
					<div class="">
						<div class="requestie-name">
							{@html team.name.replace(new RegExp(query, "gi"), (match) => `<mark>${match}</mark>`)}
						</div>
						<div class="requestie-mail">
							{@html team.leader.first_name.replace(new RegExp(query, "gi"), (match) => `<mark>${match}</mark>`)} {@html team.leader.last_name.replace(new RegExp(query, "gi"), (match) => `<mark>${match}</mark>`)}
						</div>
						<div class="requestie-mail requestie-phone">
							Free Fire ID: {team.leader.free_fire_id}
						</div>
					</div>
				</div>
				<div class="col-2 text-right">
					<a href="#" class="add-btn" on:click={ async e => {
						e.preventDefault();
						let res = await teamModel.requestToJoin(team.code);
						if(!res.error){
							toast.success('Request sent!');
							Modal.close();
							getHistory().push('/dashboard/team')
						}
					}}>
						<span class="material-icons">
							add_circle_outline
						</span>
					</a>
				</div>
			</div>
		{:else}
			<p>No team or captain found.</p>
		{/each}
	{/if}
</div>
<style>

	:global(mark) {
		padding: inherit;
		background-color: #fcf8e3;
	}
	.svelte-modal-content {
		overflow-y: auto;
		height: 400px;
	}

	.text-box {
		width: 100%;
		padding-right: 10px;
		background: transparent;
		border: 1px solid #465a77;
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
	.requestie-details:last-child{
		border-bottom: none;
	}
</style>