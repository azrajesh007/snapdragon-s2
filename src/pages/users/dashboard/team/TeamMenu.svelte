<script>
    import Modal from '../../../../utils/modal.js';
    import TeamInviteModal from '../../../../components/modal/TeamInviteModal.svelte';
    import {TeamStore} from '../../../../models/team';
    let dropdownMenu;
    export let onClose;
    export let onLeaveTeam;
    export let onDeleteTeam;
    export let onInvite;
</script>
<svelte:body on:mouseup={e => {
    if(dropdownMenu != e.target && !dropdownMenu.contains(e.target))
    onClose()
}}/>
<div bind:this={dropdownMenu} class="dropdown-content">
    {#if onInvite && $TeamStore.players.length < 4}
        <a href="#" on:click={onInvite}>Invite player</a>
	{/if}
    {#if onLeaveTeam}
    	<a href="#" on:click={onLeaveTeam}>Leave team</a>
	{/if}
	{#if onDeleteTeam}
		<a href="#" on:click={onDeleteTeam}>Delete team</a>
	{/if}
</div>
<style>
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
</style>