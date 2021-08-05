<script>
    import {getHistory} from 'swheel';
    export let code;
    window.localStorage.setItem('inviteCode', code);
    getHistory().push('/login');
</script>