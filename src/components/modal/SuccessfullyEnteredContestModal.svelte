<script>
	import Modal from '../../utils/modal.js';
</script>
<div class="svelte-modal-header">
	<h2 class="popup-title">
		Successfully entered contest!
	</h2>
	<small class="request-info-txt">
		You have successfully entered the contest to win 1060 diamonds. We will announce the winners once the registration phase of the tournament completes.
	</small>
</div>
<div class="bg-icon">
	<span class="material-icons">
		star_border
	</span>
</div>
<div class="row no-gutters">
	<div class="col-12 mt-4">
		<div class="d-flex justify-content-center align-items-center">
			<a href="/" on:click|preventDefault={Modal.close} class="btn btn-primary min-w-300">
				Go to home page
			</a>
		</div>
	</div>
</div>
<style>

	.svelte-modal-header {
		/*margin-bottom: 36px;*/
	}

	.login-txt {
		font-size: 16px;
		display: block;
		text-align: center;
		font-family:'Qualcomm Next';
		color: #8393aa;
		font-stretch: normal;
		font-style: normal;
		line-height: normal;
		letter-spacing: normal;
		text-align: center;
	}

	.login-txt a {
		color: #3253dc;
		display: inline-block;
		font-family:'Qualcomm Next Medium';
	}

	.min-w-300 {
		min-width: 300px;
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