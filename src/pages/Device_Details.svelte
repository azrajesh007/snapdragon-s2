<script>
	import LoginLayout from '../layouts/login.svelte';
	import {User} from '../models/user';
	import SuccessfulRegistration from './SuccessfulRegisterion.svelte';
	import Select from 'svelte-select';
	let devices = [];
	fetch('/mobiles.json').then(r => r.json()).then(l => devices = l);
	let user = User.getInstance();
	let userDevice = {
		device_brand: null,
		device_model: '',
		device_variant: ''
	}
	let updatedUser = {};
	const onSubmit = async (e) => {
		e.preventDefault();
		updatedUser = await user.update(userDevice);
	}
	let variantList = [];
	$: userDevice, variantList = userDevice.device_model == '' ? [] : Array.from(new Set(devices.filter(d => d.make == userDevice.device_brand && d.model == userDevice.device_model).map(item => item.Variant))).filter(i => i);
</script>
<LoginLayout title={updatedUser.device_brand ? 'Successfully registered' : 'Your mobile device'} step={3}>
	{#if !updatedUser.device_brand}
	<form>
		<div class="form-group">
			<label class="lbl-txt" for="states"></label>
			<Select items={Array.from(new Set(devices.map(item => item.make)))} on:select={e => {
				userDevice.device_brand = e.detail.value;
				}} placeholder="Select make" isClearable={false}></Select>
			

		</div>
		{#if userDevice.device_brand && userDevice.device_brand != 'Others'}
			<div class="form-group">
				<select name="model" class="text-box select-box" bind:value={userDevice.device_model} on:change={() => { userDevice.device_variant = ''}}>
					<option value="" disabled selected hidden>Select Model</option>
					{#each Array.from(new Set(devices.filter(d => d.make == userDevice.device_brand).map(item => item.model))) as make}
						<option value={make}>{make}</option>
					{/each}
					<option value="Others">Others</option>
				</select>
			</div>
			{#if userDevice.device_model && variantList.length>0}
				<div class="form-group">
					<select name="variant" class="text-box select-box" bind:value={userDevice.device_variant}>
						{#each variantList as variant}
							<option value={variant}>{variant}</option>
						{/each}
					</select>
				</div>
			{/if}
		{/if}
		<div class="btn-section">
			<button on:click={onSubmit} class="btn btn-primary verify-btn submit-btn" disabled={!(userDevice.device_model || userDevice.device_brand == 'Others')}>Proceed</button>
		</div>
	</form>
	{:else}
		<SuccessfulRegistration/>
	{/if}
</LoginLayout>
<style>
	.form-group{
		--height: 56px;
		--border: 1px solid rgba(70, 90, 119, 0.2);
		--inputColor: #838383;
		--inputFontSize: 1.0625em;
		--borderFocusColor: rgba(70, 90, 119, 0.2);
	}
</style>