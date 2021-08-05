<script>
	import Modal from '../../utils/modal.js';
</script>
<div class="svelte-modal-header">
	<h2 class="popup-title">
		{$Modal.props.title ? $Modal.props.title : 'Are you sure?'}
	</h2>
	<small class="request-info-txt">
		{$Modal.props.content}
	</small>
</div>
<div class="bg-icon">
	<span class="material-icons">
		star_border
	</span>
</div>
<div class="btn-section">
	<button class="btn btn-primary" on:click={e => {
		if($Modal.cb)
		$Modal.cb();
	}}>{$Modal.props.btnText}</button>
	{#if !$Modal.props.hideCancel}
	<a href="#" class="btn cancel-btn" on:click={e => {Modal.close();}}>Cancel</a>
	{/if}
</div>
<style>
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