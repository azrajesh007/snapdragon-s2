<script>
	import LoginLayout from '../layouts/login.svelte';
	import Select from 'svelte-select';
	import {User} from '../models/user';

	let user = User.getInstance();
	let cities = [];
	let states = [];
	fetch('/states.json').then(r => r.json()).then(res => {
		cities = res;
		states = Array(...new Set(cities.map(i => i.state))).sort();
	})
	let selectedState= '';
	let selectedCity = '';
	let otherCity = '';
	const onSubmit = async (e) => {
		e.preventDefault();
		await user.update({
			state: selectedState,
			city: selectedCity != 'other' ? selectedCity : otherCity
		});
	}
</script>
<LoginLayout title="Your Location" step={2}>
	<form>
		<div class="form-group">
			<label class="lbl-txt" for="states"></label>
			<select name="states" class="text-box select-box" bind:value={selectedState} on:change={() => {selectedCity = ''}}>
				<option value="" disabled selected hidden>Select State</option>
				{#each states as state}
					<option value={state}>{state}</option>
				{/each}
			</select>
		</div>
		{#if selectedState}
			<div class="form-group"> 
				<select name="city" class="text-box select-box" bind:value={selectedCity} on:change={() => {otherCity = ''}}>
					<option value="" disabled selected hidden>Select City / Town</option>
					{#each cities.filter(c => c.state == selectedState).map(c => c.name).sort() as city}
						<option value={city}>{city}</option>
					{/each}
					<option value="other">Other</option>
				</select>
			</div>
		{/if}
		{#if selectedCity == 'other'}
			<div class="form-group"> 
				<input type="text" class="form-control text-box" bind:value={otherCity}/>
			</div>
		{/if}
		<div class="btn-section">
			<button class="btn btn-primary verify-btn submit-btn" on:click={onSubmit} disabled={!selectedCity || selectedCity=='other'  && otherCity.length < 3}>Proceed</button>
		</div>
	</form>
	<div class="mt-40">
		<p>
			<strong>Note: Players from the states of Andhra Pradesh, Odisha, Sikkim, Nagaland and Assam are not eligible to participate in the tournament due to local governing laws, state regulations and restrictions.</strong>
		</p>
	</div>
</LoginLayout>

<style>
	.optn-text option{
		margin: 10px 0;
	}
</style>