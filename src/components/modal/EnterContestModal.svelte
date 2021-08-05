<script>
	import Modal from '../../utils/modal.js';
</script>
<div class="svelte-modal-header">
	<h2 class="popup-title">
		Want to enter the contest?
	</h2>
	<small class="request-info-txt">
		You must be a registered user to participate.
	</small>
</div>
<div class="bg-icon">
	<span class="material-icons">
		star_border
	</span>
</div>
<div class="row no-gutters p-rel">
	<div class="col-12 mt-4">
		<div class="d-flex justify-content-center align-items-center">
			<a href="/login" class="btn btn-primary min-w-300">
				Register Now
			</a>
		</div>
	</div>
</div>
<span class="mt-20 mb-3 login-txt p-rel">
    Already Registered? <a href="/login" class="login-txt"> Login to your account</a>
</span>
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

	.p-rel{
		position: relative;
	}

</style>