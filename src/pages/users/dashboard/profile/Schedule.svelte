<script>
    import {TeamStore} from '../../../../models/team';
</script>
<div class="team-box">
    <span class="team-title text-color">
        Schedule
    </span>
    {#if $TeamStore.match_info}
        <div class="survey-txt text-color">
            {$TeamStore.stage_name}
        </div>
        <p class="survey-info-txt text-color">
            {@html $TeamStore.match_info}
        </p>
    {:else}
        <div class="survey-txt text-color">
            Playoffs Round 1
        </div>
        <h4 class="mt-2">
            
        </h4>
        <p class="survey-info-txt text-color">
            Playoffs Round 1 will begin soon
        </p>
    {/if}
    
    <!-- <div>
        <a href="/dashboard/schedule" class="survey-link margin-zero">
            See full schedule
            <span class="material-icons">
                keyboard_arrow_right
            </span>
        </a>
    </div> -->
</div>
<style>
    .team-box{
        height: 95%;
    }

    .survey-txt {
        padding-top: 5px;
    }
</style>