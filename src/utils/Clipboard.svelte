<script>
	import { onMount } from 'svelte';
	
	export let name;

	let textarea;
	
	onMount(() => {
        textarea.select();
        textarea.setSelectionRange(0, 99999);
		document.execCommand('copy');
	});
</script>

<textarea bind:value={name} bind:this={textarea}></textarea>