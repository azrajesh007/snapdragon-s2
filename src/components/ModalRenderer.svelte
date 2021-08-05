<script>
	import Modal from '../utils/modal.js';
	import {disableBodyScroll, enableBodyScroll } from 'body-scroll-lock';
	let modalBG;
	$: if($Modal.component){
		disableBodyScroll(modalBG);
	}else{
		enableBodyScroll(modalBG);
	}
</script>
{#if $Modal.component}
    <div class="modal-background" bind:this={modalBG} on:click={() => Modal.close()}></div>
    <div class="svelte-modal" role="dialog" aria-modal="true">
        <button class="close-btn" autofocus on:click={() => Modal.close()}>
            <span class="material-icons">
                highlight_off
            </span>
        </button>
        <svelte:component this={$Modal.component}/>
        <!-- <svelte:body class:profile={isProfilePage} /> -->
    </div>
{/if}
<svelte:head>
	{#if $Modal.component}
		<style>
			body {
				overflow: hidden;
			}
		</style>
	{/if}
</svelte:head>

<style>
	.modal-background {
		position: fixed;
		z-index: 1;
		top: 0;
		left: 0;
		width: 100%;
		height: 100%;
		-webkit-backdrop-filter: blur(5px);
		backdrop-filter: blur(5px);
		background-color: rgba(11, 39, 66, 0.8);
		-webkit-overflow-scrolling: touch;

	}

	button {
		display: block;
	}

	.close-btn {
		display: block;
		cursor: pointer;
		position: absolute;
		z-index: 9999;
		top: -24px;
		right: -29px;
		width: 32px;
		height: 32px;
		background: none;
		border: none !important;
		outline: none !important;
	}

	.close-btn span {
		font-size: 36px;
		color: #fff;
	}
</style>