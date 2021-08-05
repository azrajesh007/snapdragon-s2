<script>
    import {getHistory} from 'swheel';
    const path = getHistory().currentPath;
    if($path == '/devon'){
        window.localStorage.setItem('dev', 'true');
    }else{
        window.localStorage.removeItem('dev');
    }
</script>
Dev mode is {window.localStorage.getItem('dev') ? 'On' : 'Off'}