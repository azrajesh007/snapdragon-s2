<script>
	import EnterContestModal from '../../components/modal/EnterContestModal.svelte';
	import Notify from '../../utils/toast';
	import Modal from '../../utils/modal.js';
	import {User} from '../../models/user';
	import SuccessModal from '../../components/modal/SuccessfullyEnteredContestModal.svelte';
	import {getHistory} from 'swheel';
	import {onMount} from 'svelte';

	const path = getHistory().currentPath;
	let contestEl;
	let thisEl;
    onMount(() => {
		if($path.indexOf('/contest') == 0){
			//setTimeout(() => {window.scrollTo(0, contestEl.offsetTop - window.innerHeight + 500)}, 500);
			contestEl.scrollIntoView();
			//console.log(contestEl.offsetTop - window.innerHeight);
		}
	});
	const user = User.getUser();
	const userRest = User.getInstance();
	const enterContest = async () => {
		if($user.loggedOut){
			window.localStorage.setItem('enterContest', true);
			Modal.open(EnterContestModal)
		}else{
			let contest = await userRest.enterContest();
			if(contest){
				Modal.open(SuccessModal);
			}
		}
	}
</script>
<section>
	<div class="diamond-contest">
		<div class="container" >
			<div class="row no-gutters">
				<div class="col-lg-6 col-sm-6 col-xs-12">
					<div class="contest-text" bind:this={contestEl}>
						<h6 class="footer-text">FREE FIRE DIAMONDS GIVEAWAY</h6>
						<h1 class="footer-title-text">1,60,000 Diamonds for 150 lucky winners</h1>
						<p class="footer-sub-text">Register yourself to stand a chance to win Free Fire Diamonds. 150 lucky participants will win 1060 Diamonds each. The last day to enter is 20 December 2020, so hurry up!**</p>
						<div class="btn-section">
							Contest closed. We will notify the results soon.
						</div>
						<small class="terms-note">**Winners will be announced after the registrations end. Winners will be picked randomly from the list of participants.</small>
					</div>
				</div>
				<div class="col-lg-6 col-sm-6 col-xs-12 mobile-order">
					<img src="images/diamond-contest.png" alt="diamond-contest">
				</div>
			</div>
	  </div>
	</div>
</section>
<style>
	.batmap {
		margin: 18px 0 25px 0;
	}
	
	.batmap img, .gaming-badge img{
		width: 100%;
		height: 100%;
	}

	.terms-note {
		font-size: 12px;
		color: rgba(255, 255, 255, 0.5);
		font-weight: normal;
		font-stretch: normal;
		font-style: normal;
		line-height: normal;
		letter-spacing: normal;
	}

	.footer-title-text{
		line-height: 1.2em;
	}
</style>