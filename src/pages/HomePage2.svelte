<script>
	import Format from '../layouts/partials/Format.svelte';
	import {User} from '../models/user';
	const user = User.getUser();
</script>
<section class="main-section home-page-static">
	<div class="container">
		<div class="game-pic d-none d-sm-block"></div>
		<div class="content-wrapper">
			<div class="">
				<img src="images/home-logo.png" class="hp-logo" alt="home-logo">
			</div>
			<div class="free-fire-block">
				<h6>
					FREE FIRE OPEN 2020
				</h6>
				<div class="text-center bar-line">
					<small></small>
				</div>
				<div class="winnig-price">
					<div class="winner-label mt-3">
						WIN INR
					</div>
					<div class="price-txt">
						₹ 50,00,000
					</div>
					<div class="winner-label">
						PRIZE POOL
					</div>
					<div class="text-center bar-line mt-3">
						<small></small>
					</div>
				</div>
				<h6 class="cmg-txt">
					Registrations begin on <span>08 December 2020</span>
				</h6>
				<small class="flw-txt">
					Like and follow us to get regular updates
				</small>
				<div class="social-links-light d-flex justify-content-center align-items-center">
					<ul class="d-flex justify-content-center align-items-center">
						<li>
							<a href="https://www.facebook.com/snapdragonconquest/" target="_blank">
								<img alt="Facebook" src="/images/ic-facebook-light/ic-facebook-light.png"
									srcset="/images/ic-facebook-light/ic-facebook-light@2x.png 2x,
											/images/ic-facebook-light/ic-facebook-light@3x.png 3x"
									class="ic-facebook-light">
							</a>
						</li>
						<li>
							<a href="https://www.instagram.com/snapdragonconquest/" target="_blank">
								<img  alt="Instagram" src="/images/ic-instagram-light/ic-instagram-light.png"
									srcset="/images/ic-instagram-light/ic-instagram-light@2x.png 2x,
											/images/ic-instagram-light/ic-instagram-light@3x.png 3x"
									class="ic-instagram-light">
							</a>
						</li>
						<li>
							<a href="https://mobile.twitter.com/_ConquestEsport" target="_blank">
								<img  alt="Twitter" src="/images/ic-twitter-light/ic-twitter-light.png"
									srcset="/images/ic-twitter-light/ic-twitter-light@2x.png 2x,
											/images/ic-twitter-light/ic-twitter-light@3x.png 3x"
									class="ic-twitter-light">
							</a>
						</li>
						<li>
							<a href="https://youtube.com/channel/UCqfsjVyKK2_ajIgG_HqR36w" target="_blank">
								<img  alt="Youtube" src="/images/ic-youtube-light/ic-youtube-light.png"
									srcset="/images/ic-youtube-light/ic-youtube-light@2x.png 2x,
											/images/ic-youtube-light/ic-youtube-light@3x.png 3x"
									class="ic-youtube-light">
							</a>
						</li>
					</ul>
				</div>
			</div>
			<div class="game-pic game-pic-right d-none d-sm-block"></div>
			<div class="game-pic-mobile d-block d-sm-none">
				<img src="/images/char-left/char-left.png"
					srcset="/images/char-left/char-left@2x.png 2x,
							/images/char-left/char-left@3x.png 3x"
					class="char_left" alt="Game Characters">
				<img src="/images/char-right/char-right.png"
					srcset="/images/char-right/char-right@2x.png 2x,
							/images/char-right/char-right@3x.png 3x"
					class="char_right" alt="Game Characters">
			</div>
			<div class="free-fire-logo">
				<img src="images/ff-logo-black-damaged.png" alt="FreeFire-Logo">
			</div>
		</div>
	</div>
</section>
<style>
	.social-links-light ul li {
		margin: 10px 13px 0 0;
	}

	.social-links-light ul li:last-child {
		margin-right: 0;
	}

	.cmg-txt{
		text-transform: uppercase;
		letter-spacing: inherit;
	}

	.cmg-txt span{
		color: #3253dc;
		display: block;
		font-size: 24px;
	}

	.game-pic-mobile .char_left{
		position: fixed;
		bottom: 0;
		left: 0;
	}
	.game-pic-mobile .char_right{
		position: fixed;
		bottom: 0;
		right: 0;
	}
</style>