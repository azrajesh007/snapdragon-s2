<script>
	import LoginLayout from '../layouts/login.svelte';
	import {User} from '../models/user';
	import SuccessfulRegisterion from './SuccessfulRegisterion.svelte';

	const user = User.getInstance();
	const userStore = User.getUser();
	let updatedUser = {};
	user.successfulRegisterion = false;
	const onSubmit = async (e) => {
		updatedUser = await user.update({accept_tnc: true});
	}
	let tnc = { age: false, tnc: false, rules: false, state: false};
	let disableSubmit = true;
	$: (() => {
		disableSubmit = !(tnc.state && tnc.age && tnc.rules);
	})();
</script>
<LoginLayout title={$userStore.accept_tnc ? 'Registration successful' : 'Final Step'} step={$userStore.accept_tnc ? '' : '4'}>
	{#if !$userStore.accept_tnc}
		<form>
			<div class="successful-reg-text">
				<p>
					To be eligible to participate in the tournament your Free Fire account should be a minimum of level 10. Please ensure the same before the end of registrations or else you would be ineligible to participate in the tournament.
				</p>
			</div>
			<div class="form-check">
				<input class="form-check-input" type="checkbox" id="defaultCheck4" bind:checked={tnc.state}>
				<label class="form-check-label" for="defaultCheck4">
					I confirm that I am an Indian Resident and not residing in the states of Andhra Pradesh, Odisha, Sikkim, Assam and Nagaland.
				</label>
			</div>
			<div class="form-check">
				<input class="form-check-input" type="checkbox" bind:checked={tnc.age} id="defaultCheck1">
				<label class="form-check-label" for="defaultCheck1">
					I confirm that I am 12 years of age or older.
				</label>
			</div>
			<div class="form-check">
				<input class="form-check-input" type="checkbox" bind:checked={tnc.rules} id="defaultCheck3">
				<label class="form-check-label" for="defaultCheck3">
					I have read the <a href="#">Rule book</a> and accept all the terms and conditions mentioned therein.
				</label>
			</div>
			<div class="btn-section">
				<button href="#" class="btn btn-primary verify-btn" on:click|preventDefault={onSubmit} disabled={ disableSubmit }>Complete registration</button>
			</div>
		</form>
	{:else}
		<SuccessfulRegisterion/>
	{/if}
</LoginLayout>