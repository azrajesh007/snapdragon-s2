<script>
	 import LeftBanner from '../layouts/partials/Leftbanner.svelte'; 
</script>
<div class="row no-gutters full-height">
	<div class="col-4">
		<LeftBanner />
	</div>
	<div class="col-8">
		<div class="form-box">
			<h1 class="main-heading">
				Hi Praveen, Confirm OTP
			</h1>
			<div class="col-5 no-padding">
				<form>
					<div class="form-group">
						<input type="text" class="text-box" id="mobile">
						<label class="lbl-txt" for="mobile">Your Mobile Number*</label>
						<small id="mobile" class="form-text text-muted">Resending OTP in 15 secs…</small>
					</div>
					<div class="form-group">
						<input type="text" class="text-box" id="otp">
						<label class="lbl-txt" for="otp">Enter 6 digit OTP</label>
					</div>
					<div class="btn-section">
						<a href="/signup" type="submit" class="btn btn-primary verify-btn">Sign In</a>
						<span class="resend-txt">
							Haven’t received OTP? <a hrer="#" class="resend-otp">Resend OTP</a>
						</span>
					</div>
				</form>
			</div>
			<div class="info-txt">
				<p>
					References to "Qualcomm" may mean Qualcomm Incorporated, or subsidiaries or business units within the Qualcomm corporate structure, as applicable.
				</p>
				<p class="no-margin">
					Qualcomm Incorporated includes Qualcomm's licensing business, QTL, and the vast majority of its patent portfolio. Qualcomm Technologies, Inc., a wholly-owned subsidiary of Qualcomm Incorporated, operates, along with its subsidiaries, substantially all of Qualcomm's engineering, research and development functions, and substantially all of its products and services businesses. Qualcomm products referenced herein are products of Qualcomm Technologies, Inc. and/or its subsidiaries.
				</p>
			</div>
		</div>
	</div>
</div>