<script>
    export let url;
    export let thumb;
    export let classes='';
    export let video;

    let isLive = false;
    if(video){
        url = video.url;
        thumb = `https://snapdragonconquest.com/uploads/originals/${video.filename_disk}`;
        isLive = video.live == 1;
    }
</script>
<div class="video-thumb {classes}">
    {#if isLive}
        <button class="btn btn-danger btn-sm live-btn"> Live now </button>
    {/if}
    <div class="video-thumbnail">
        <a href={url} target="_blank">
            <!-- <div class="shadow-layer"></div> -->
            <img src={thumb} alt="video" />
            <span href="#" class="play-btn">
                <span class="material-icons"> play_arrow </span>
            </span>
            <!-- <div class="video-info">
                <h6>
                    Qualcomm Snapdragon® Conquest Season 1
                    Playoffs Day 3. Hindi
                </h6>
                <span class="date-txt"> 12 October 2020. 00:57 sec </span>
            </div> -->
        </a>
    </div>
</div>
<style>
    .play-btn{
        box-shadow: 0 0 10px 4px rgba(0, 0, 0, 0.5);
    }

    @media only screen and (max-width: 1200px) and (min-width: 300px){
        .video-thumb.small {
            width: 290px !important;
            height: 170px !important;
        }
    }
</style>