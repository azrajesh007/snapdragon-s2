<script>
    import {Team} from '../models/team';
    import Switch from '../components/Switch.svelte'
    import moment from 'moment';
    import { readable, derived } from 'svelte/store';
    let lastUpdated = new Date();
    const time = readable(new Date(), function start(set) {
	    const interval = setInterval(() => {
            set(new Date());
        }, 1000);

        return function stop() {
            clearInterval(interval);
        };
    });

    const elapsed = derived(
        time,
        $time => Math.round(($time - lastUpdated) / 1000)
    );
    let team = Team.getInstance();
    let stats = [];
    let autorefresh = false;
    const getStats = async () => {
        stats = await team.getStats();
        lastUpdated = new Date();
        if(autorefresh){
            setTimeout(getStats, 5*60*1000);
        }
    }
    let isDownloading = false;
    const onExport = async () => {
        isDownloading = true;
        await team.export();
        isDownloading = false;
    }
    let matchID;
    const onDownload = async () => {
        if(matchID){
            isDownloading = true;
            await team.downloadMatch(matchID);
            isDownloading = false;
            matchID='';
        }
    }
    //getStats();
</script>
<!-- <div class="row h-100">
    <div class="col"><div class="d-flex align-items-center flex-column justify-content-center h-100 "><p><strong>{stats.find(s => s.size == "4") ? stats.find(s => s.size == "4").teams : 0}</strong></p><span class="material-icons">gamepad</span><p>Squad</p></div></div>
    <div class="col"><div class="d-flex align-items-center flex-column justify-content-center h-100 "><p><strong>{stats.find(s => s.size == "3") ? stats.find(s => s.size == "3").teams : 0}</strong></p><span class="material-icons">groups</span><p>Trio</p></div></div>
    <div class="w-100"></div>
    <div class="col"><div class="d-flex align-items-center flex-column justify-content-center h-100 "><p><strong>{stats.find(s => s.size == "2") ? stats.find(s => s.size == "2").teams : 0}</strong></p><span class="material-icons">people</span><p>Duo</p></div></div>
    <div class="col"><div class="d-flex align-items-center flex-column justify-content-center h-100 "><p><strong>{stats.find(s => s.size == "1") ? stats.find(s => s.size == "1").teams : 0}</strong></p><span class="material-icons">person</span><p>Solo</p></div></div>
    <div class="w-100"></div>
    <div class="col"><div class="d-flex align-items-center flex-column justify-content-center h-100 "><p><strong>{stats.find(s => s.size == "reg") ? stats.find(s => s.size == "reg").count : 0}</strong></p><span class="material-icons">person</span><p>Registrations Completed</p></div></div>
    <div class="col"><div class="d-flex align-items-center flex-column justify-content-center h-100 "><p><strong>{stats.find(s => s.size == "abandoned") ? stats.find(s => s.size == "abandoned").count : 0}</strong></p><span class="material-icons">person</span><p>Abandoned</p></div></div>
</div>
<div class="last-refreshed">
Last refreshed:
{#if Math.floor($elapsed/60) > 0}
{Math.floor($elapsed/60)} mins,
{/if}
{$elapsed - Math.floor($elapsed/60)*60} secs ago
</div>
<div class="auto-refresh">
    Autorefresh <Switch bind:checked={autorefresh} on:change={getStats}/>
    <div>
        <button class="btn btn-primary" on:click|preventDefault={onExport}>Export</button>
    </div>
</div> -->
<div class="conainer">
    <div class="form-group">
        <label class="form-label" for="" >Match ID</label>
        <input type="text" class="form-control" bind:value={matchID}/>
    </div>
    <div class="form-group">
        <button class="btn btn-primary" on:click|preventDefault={onDownload} disabled={ !matchID || matchID && matchID.length == 0}>Download</button>
    </div>
</div>
{#if isDownloading}
<div class="downloading d-flex align-items-center flex-column justify-content-center h-100 w-100">Downloading...</div>
{/if}
<style>
  .col{
      height: 33.33333%;
  }
  .material-icons{
      font-size: 7em;
  }
  strong{
      font-size: 3em;
  }
  .auto-refresh, .last-refreshed{
      position: fixed;
      top: 10px;
      right: 10px;
  }

  .last-refreshed{
      right: auto;
      left: 10px;
  }

  .downloading{
      position: fixed;
      top: 0;
      left: 0;
      background: rgba(0, 0, 0, 0.2);
      color: #ffffff;
      text-shadow: 0 1px 0 rgba(0, 0, 0);
  }
</style>