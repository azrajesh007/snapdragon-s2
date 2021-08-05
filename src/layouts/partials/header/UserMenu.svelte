<script>
    import {User} from '../../../models/user';
    export let onClose;

    let dropdownMenu;
    const user = User.getUser()
</script>
<svelte:body on:mouseup={e => {
    if(dropdownMenu != e.target && !dropdownMenu.contains(e.target))
    onClose()
}}/>
<div class="menu-dropdown" bind:this={dropdownMenu}>
    {#if $user.loggedOut}
        <!-- <p class="login-txt">
            Login in to your account.<b>test</b>
        </p> -->
        <ul>
            <!-- <li>
                <a href="/login">
                    Log in
                </a>
            </li> -->
        </ul>
       <!--  <p class="dnt-have-acnt-txt">
            Dont have an account? <a href="/login">Create one</a>
        </p> -->
    {:else}
        <ul>
            <li>
                <a href="/dashboard" class="">Go to Dashboard</a>
            </li>
            <li>
                <a href="#" class="" on:click={e => {
                        e.preventDefault();
                        User.logout();
                        window.location.href = '/';
                    }}>
                    Logout
                </a>
            </li>
        </ul>
    {/if}
</div>