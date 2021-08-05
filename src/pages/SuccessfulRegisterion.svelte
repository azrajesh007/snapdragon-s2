<script>
	import {User} from '../models/user';
	const userStore = User.getUser();
	const user = User.getInstance();
	
</script>
<form>
	<div class="successful-reg-text">
		<p>
			Congratulations! You've successfully registered your account. To complete your registration for the tournament you can either create your own team and invite your friends or join an existing team. You can change your squad roster or join other teams during the duration of the registration phase. Please ensure that all 4 slots of your team are filled before the registrations ends. Roster changes after the end of the registration phase will not be permitted and incomplete teams will be disqualified.
		</p>
	</div>
	<div class="btn-section">
		<a href="/dashboard" type="submit" class="btn btn-primary verify-btn" on:click={e => { 
			e.preventDefault();
			user.update({reg_complete: true});
		}}>Proceed to Dashboard</a>
		<a href="/" type="submit" class="btn btn-primary verify-btn back-to-home-btn" on:click={e => { 
			e.preventDefault();
			user.update({reg_complete: true});
		}}>Back to Home</a>
	</div>
</form>