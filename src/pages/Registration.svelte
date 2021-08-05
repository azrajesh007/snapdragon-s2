
<script>
	import {User} from '../models/user';
	import FieldError from '../components/FieldError.svelte';
	import Toast from '../utils/toast';
	import Modal from '../utils/modal';
	import moment from 'moment';
	export let edit = false;
	const userModel = User.getInstance();
	const currentUser = User.getUser();
	let errors = [];
	let user = {
		first_name: "",
		last_name: "",
		dob: "",
		mobile: "",
		free_fire_id: ""
	}

	const isSafari = () => {
		var ua = window.navigator.userAgent.toLowerCase();
		return ua.indexOf('macintosh') != -1
	}
	isSafari();
	if(edit){
		user = (({first_name, last_name, dob, mobile, free_fire_id}) => ({first_name, last_name, dob, mobile, free_fire_id}))({...$currentUser});
	}

	const onSubmit = async (e) => {
		if(!edit){
			let data = await userModel.register({...user, contest: window.localStorage.getItem('enterContest') ? true : false});
			if(data.error)
			errors = data.error;
			else if(window.localStorage.getItem('enterContest'))
			window.localStorage.removeItem('enterContest');
			window.localStorage.setItem('firstLogin', true);
		}else{
			let res = await userModel.update(user);
			if(!res.error){
				Toast.success('Updated successfully!');
				Modal.close();
			}else{
				errors = res.error;
			}
		}
	}

	$: user, (() => {
		let mobile = user.mobile.replace(/[^0-9]/g, '');
		if(mobile != user.mobile)
		user = {...user, mobile}
		let free_fire_id = user.free_fire_id.replace(/[^0-9]/g, '');
		if(free_fire_id != user.free_fire_id)
		user = {...user, free_fire_id}
	 })()
	 let dateUpdated = false;
	 let dateField;
	 $: dateField, (() => {
		if(dateField && !dateUpdated){
			if(dateField.type == 'date')
			user.dob = moment(user.dob).format('YYYY-MM-DD')
			else
			user.dob = moment(user.dob).format('DD/MM/YYYY')
			dateUpdated = true;
		}
	 })()

</script>
<form on:submit|preventDefault={onSubmit}>
	<div class="form-group field">
		<input bind:value={user.first_name} type="text" placeholder=" " class="text-box" id="firstname" maxlength="20">
		<label class="lbl-txt" for="firstname">First Name*</label>
		<FieldError errors={errors} field="first_name" label="First Name"/>
	</div>
	<div class="form-group">
		<input bind:value={user.last_name} type="text" placeholder=" " class="text-box" id="lastname" maxlength="20">
		<label class="lbl-txt" for="lastname">Last Name*</label>
		<FieldError errors={errors} field="last_name" label="Last Name"/>
	</div>
	<div class="form-group">
		<input bind:value={user.dob} bind:this={dateField} type="date" placeholder="dd/mm/yyyy" class="text-box" id="date" maxlength="10">
		<label class="lbl-txt" for="date">Date of Birth (dd/mm/yyyy)*</label>
		<FieldError errors={errors} field="dob" label="Date of birth"/>
	</div>
	<div class="form-group">
		<input bind:value={user.mobile} type="tel" placeholder=" " class="text-box" maxlength="10" id="mobile">
		<label class="lbl-txt" for="mobile">Mobile Number*</label>
		<FieldError errors={errors} field="mobile" label="Mobile"/>
	</div>
	<div class="form-group">
		<input bind:value={user.free_fire_id} type="text" placeholder=" " class="text-box" id="freeFireId" maxlength="10">
		<label class="lbl-txt" for="freeFireId">Free Fire ID*</label>
		<FieldError errors={errors} field="free_fire_id" label="Free fire ID"/>
	</div>
	<div class="btn-section">
	{#if !edit}
		<!-- <small class="form-text text-muted terms-text">By Clicking Submit you agree with <a href="/policy" class="terms-txt">Terms of use </a> and <a href="/policy" class="terms-txt">Privacy Policy</a > </small> -->
	{/if}
	<button type="submit" class="btn btn-primary submit-btn" disabled={
		user.first_name.length == 0 || 
		user.last_name.length == 0 ||
		user.dob == "" ||
		user.mobile.length < 10 ||
		user.free_fire_id.length < 8
	}>Proceed</button>
	</div>
</form>
<style>
    .form-group {
        position: relative;
    }
</style>