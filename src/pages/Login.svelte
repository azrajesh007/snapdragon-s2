<script>
	import LoginLayout from '../layouts/login.svelte';
	 import {User} from '../models/user';
	import Registration from './Registration.svelte';
	import Video from '../components/Video.svelte';

	let original = 60; // TYPE NUMBER OF SECONDS HERE
	let timer = 60;

	const startTimer = () => {
		timer = original;
		let interval = setInterval(() => {
			if (timer > 0) timer = timer-1;
			else clearInterval(interval);
		}, 1000);
	}

	
	
	 let user = User.getInstance();
	 let email = '';
	 let otp = '';
	 let otpSent = false;
	 let register = false;
	 let otpEmail;
	 let name;

	 const onOTPRequest = async (e) => {
		e.preventDefault();
		let result = await user.getOTP(email);
		if(result){
			if(result.first_name)
			name = `${result.first_name} ${result.last_name}`;
			otpEmail = email;
			startTimer();
			otpSent = true;
		}
	 }
	 $: otp, (() => {
		let numOnly = otp.replace(/[^0-9]/g, '');
		if(otp != numOnly)
		otp = numOnly;
	 })()

	 let tnc = false;

	 $: otpSent = email == otpEmail;

	 $: disableButton = otpSent ? otp.length != 6 : !/(?:[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*|"(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21\x23-\x5b\x5d-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])*")@(?:(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?|\[(?:(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.){3}(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?|[a-z0-9-]*[a-z0-9]:(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21-\x5a\x53-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])+)\])/.test(email);
</script>
<LoginLayout title={register ? 'Your Details' : otpSent ? name ? `Hi ${name}, Confirm OTP` : 'Confirm OTP' : 'Sign In'} step={register ? '1' : ''}>
	<form>
		<div class="form-group field">
			<input type="email" class="text-box" id="mail" placeholder=" " bind:value={email}>
			<label class="lbl-txt" for="mail">Your Email*</label>
			{#if !otpSent}
				<small id="mail" class="form-text text-muted">You will recieve an OTP for verification</small>
			{/if}
		</div>
		{#if otpSent }
			{#if name}
				<div class="form-group">
					<input type="text" class="text-box" placeholder=" " id="otp" bind:value={otp}  maxlength="6">
					<label class="lbl-txt" for="otp" >Enter 6 digit OTP</label>
				</div>
				<div class="btn-section">
					<button type="submit" class="btn btn-primary verify-btn" on:click={async (e) => {
							e.preventDefault();
							let data = await user.getToken(email, otp);
							if(data && data.register){
								register = true;
							}else{
								//document.location.reload();
							}
						}} disabled={!(name || !name && tnc)}>Verify</button>
					<span class="resend-txt">
						Haven’t received OTP? 
						{#if timer>0}
						Request OTP in {timer} seconds
						{:else}
						<a href="#" class="resend-otp" on:click={onOTPRequest}>Resend OTP</a>
						{/if}
					</span><br/><br/>
					<span class="resend-txt">In case you did not receive the OTP, please check your spam/junk folder too</span>
				</div>
			{:else}
				<span class="resend-txt">Registeration are closed! Please sign in if you have already registered.</span>
			{/if}
		{:else}
			<div class="btn-section">
				<button type="submit" class="btn btn-primary verify-btn" disabled={ disableButton} on:click={onOTPRequest}>Verify</button>
			</div>
		{/if}
	</form>
</LoginLayout>
<style>
	.btn-section {
		margin-top: 40px;
		margin-bottom: 40px;
	}
</style>