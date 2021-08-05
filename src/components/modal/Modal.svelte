<script>
	import { createEventDispatcher, onDestroy } from 'svelte';
	const dispatch = createEventDispatcher();
	const close = () => dispatch('close');
	let modal;
	const handle_keydown = e => {
		if (e.key === 'Escape') {
			close();
			return;
		}

		if (e.key === 'Tab') {
			// trap focus
			const nodes = modal.querySelectorAll('*');
			const tabbable = Array.from(nodes).filter(n => n.tabIndex >= 0);

			let index = tabbable.indexOf(document.activeElement);
			if (index === -1 && e.shiftKey) index = 0;

			index += tabbable.length + (e.shiftKey ? -1 : 1);
			index %= tabbable.length;

			tabbable[index].focus();
			e.preventDefault();
		}
	};

	const previously_focused = typeof document !== 'undefined' && document.activeElement;

	if (previously_focused) {
		onDestroy(() => {
			previously_focused.focus();
		});
	}
</script>
<svelte:window on:keydown={handle_keydown}/>
<div class="modal-background" on:click={close}></div>
<div class="svelte-modal" role="dialog" aria-modal="true" bind:this={modal}>
	<button class="close-btn" autofocus on:click={close}>
		<span class="material-icons">
			highlight_off
		</span>
	</button>
	<slot name="header"></slot>
	<slot></slot>
	<!-- svelte-ignore a11y-autofocus -->
</div>

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
	}

	.svelte-modal {
		position: fixed;
		padding: 40px;
		z-index: 9999;
		left: 50%;
		top: 50%;
		width: 460px;
		border-radius: 10px;
		overflow: visible;
		transform: translate(-50%,-50%);
		background: white;
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