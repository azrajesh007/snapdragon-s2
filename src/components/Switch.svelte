<script>
	export let checked = false;
	export let color = "#3253dc";
	</script>
	
	<style>
	.switch {
		position: relative;
		display: inline-block;
		width: 34px;
		height: 20px;
		margin-bottom: 0;
	}
	
	.switch input {
		opacity: 0;
		width: 0;
		height: 0;
	}
	
	.slider {
		position: absolute;
		cursor: pointer;
		top: 4px;
		left: 0;
		right: 0;
		bottom: 0;
		background-color: #8393aa;
		-webkit-transition: 0.4s;
		transition: 0.4s;
		border-radius: 22px;
	}
	
	.slider:before {
		position: absolute;
		content: "";
		height: 12px;
		width: 12px;
		left: 4px;
		bottom: 2px;
		background-color: white;
		-webkit-transition: 0.4s;
		transition: 0.4s;
		border-radius: 50%;
	}
	
	input:checked + .slider {
		background-color: #3253dc;
	}
	
	input:checked + .slider {
		box-shadow: 0 0 1px #3253dc;
	}
	
	input:checked + .slider:before {
		-webkit-transform: translateX(17px);
		-ms-transform: translateX(17px);
		transform: translateX(17px);
	}
	</style>
	
	<label class="switch">
	<input type="checkbox" bind:checked on:change/>
	<span class="slider switch-slider" />
	</label>