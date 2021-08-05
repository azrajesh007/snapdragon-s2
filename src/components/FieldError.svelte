<script>
    export let errors = [];
    export let field;
    export let label;
</script>
{#if errors.length && errors.filter(e => e.property == field).length > 0}
    {#each Object.values(errors.find(e => e.property == field).constraints) as msg }
        <p class="email-error-message"><b>X</b> {msg.split(field).join(label)}</p>
    {/each}
{/if}