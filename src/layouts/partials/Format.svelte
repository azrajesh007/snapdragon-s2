<script>
	import { Tabs, TabList, TabPanel, Tab } from '../../components/tabs/tabs';
	import { slide } from 'svelte/transition';

	let firstCircle = true;
	let secondCircle = false;
	let thirdCircle = false; 
</script>
<section>
	<div class="container">
		<div class="row">
			<div class="col">
				<div class="format s2-format">
					<div class="text-center format-section">
						<h1 class="format-title">
							Format
						</h1>
						<!-- <p class="format-text">
							At vero eos et dolore magnam aliquam causam ista, quae ab illo inventore veritatis et dolorem? sunt autem vel eum fugiat, quo voluptas assumenda est, necesse est, qui ratione voluptatem accusantium doloremque.
						</p> -->
					</div>
					<div class="spacer-box"></div>
					<div class="line">
						<div class="circle-step first-dot" class:active-state ={firstCircle}  on:click|preventDefault={()=>{
							firstCircle = true;
							secondCircle = false;
							thirdCircle = false;
						}}>
							<div class="round">
								<div class="inner-circle">
									<span class="material-icons">
										poll
									</span>
								</div>
							</div>
							<div class="progress-info">
								<h6>
									League Stage
								</h6>
								<p>
									24 teams <br>
									20 Aug – Sep 5 
								</p>
							</div>
						</div>
						<div class="circle-step second-dot" class:active-state ={secondCircle} on:click|preventDefault={()=>{
							secondCircle = true;
							firstCircle = false;
							thirdCircle = false;
						}}>
							<div class="round">
								<div class="inner-circle">
									<span class="material-icons">
										videogame_asset
									</span>
								</div>
							</div>
							<div class="progress-info">
								<h6>
									Wild Card
								</h6>
								<p>
									12 Teams <br>
									10 Sep – Sep 12
								</p>
							</div>
						</div>
						<div class="circle-step sixth-dot" class:active-state ={thirdCircle}  on:click|preventDefault={()=>{
							thirdCircle = true;
							secondCircle = false;
							firstCircle = false;
						}}>
							<div class="round">
								<div class="inner-circle">
									<span class="material-icons">
										star
									</span>
								</div>
							</div>
							<div class="progress-info">
								<h6>
									Grand Finals
								</h6>
								<p>
									12 Teams <br>
									8 Oct – 9 Oct
								</p>
							</div>
						</div>
					</div>
					
					<div class="format-data mr-b-3">
						<div class="row justify-content-center">
							<div class="col-md-8 col-xs-12">
								<div class="text-center">
									{#if firstCircle}
										The League Stage is spread over a 3-week period where the 24 invited teams will fight it out in a round robin format. 
										The top 6 teams will directly qualify for the Grand Finals of the Snapdragon Conquest Season 2 Free Fire Pro Series. 
										The bottom 6 teams will be eliminated from the tournament. 
										The remaining 12 teams will have a chance to get back into the tournament in the Wild Card stage.
										{:else if secondCircle}
										second tab..
										{:else if thirdCircle}
										third tab...
									{/if}
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	</div>
</section>

<style>

.format-data {
	-webkit-font-smoothing: antialiased;
	-moz-osx-font-smoothing: grayscale;
	-webkit-transition: all 0.30s ease-in-out;

}

	.active-state .progress-info h6 {
		color: #3253dc;
		font-family: 'Qualcomm Next Medium';
		font-weight: 500;
	}

	.active-state .progress-info p {
		color: #1f1f1f;
		font-family: 'Qualcomm Next Medium';
		font-weight: 500;
		opacity: 1;
	}

	.active-state .inner-circle {
		background: #3253dc;
		line-height: 48px;
		text-align: center;
	}

</style>
