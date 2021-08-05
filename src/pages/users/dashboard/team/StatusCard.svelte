<script>
    export let title;
</script>
<div class="upload-block teacm-full-details p-40">
    <h6 class="title">
        {title}
    </h6>
    <p class="response-desc">
        <slot></slot>
    </p>
</div>
<style>
    .upload-block {
		background:rgba(131, 147, 170, 0.1);
        border-radius: 10px;
	}

    .title {
		font-size: 24px;
		color: #3253dc;
		font-family: 'Qualcomm Next Medium';
		font-stretch: normal;
		font-style: normal;
		line-height: normal;
		letter-spacing: normal;
	}

    .response-desc {
		font-size: 14px;
		color: #465a77;
		font-weight: normal;
		font-stretch: normal;
		font-style: normal;
		line-height: normal;
		letter-spacing: normal;
	}
</style>