<script>
	import InviteModal from '../../../components/modal/InviteModal.svelte';
	import FindTeamModal from '../../../components/modal/FindTeamModal.svelte';
	import Modal from '../../../utils/modal.js';
	import {User} from '../../../models/user';
	import {Team} from '../../../models/team';
    import {TeamStore} from '../../../models/team';
    import Schedule from './profile/Schedule.svelte';
    import Standings from './profile/Standings.svelte';
    
    export let onTeamCreate;
    export let hideSurvey;

	let newTeamName = '';
	let currentUser = User.getUser();
	let teamModel = Team.getInstance();
    let currentTeam;
    $: newTeamName, (() => {
        let name = newTeamName.replace(/[^A-Za-z0-9 ]/g, '');
        if(name != newTeamName)
        newTeamName = name;
    })()
	const createTeam = async (name) => {
        currentTeam = await teamModel.createTeam({name});
        onTeamCreate();
	}
</script>
{#if !hideSurvey}
<!-- <div class="survey-block survey-bg">
    <div class="row">
        <div class="col-lg-6 col-sm-12 col-xs-12 enable-in-mobile">
            <div class="mobile-bg">
                <div class="bg-image"></div>
            </div>
        </div>
        <div class="col-lg-6 col-sm-6 col-xs-12">
            <div class="bg-cls">
                <div class="survey-txt">
                    Survey
                </div>
                <h4 class="">
                    Complete survey & win
                </h4>
                <p class="survey-info-txt">
                    Quid ex ea voluptate ponit, quod omnium philosophorum sententia tale debet esse, ut ratione neque disputatione, quam ostendis sed quia dolor sit numeranda.
                </p>
                <div>
                    <a href="#" class="survey-link">
                        Complete the survey
                        <span class="material-icons">
                            keyboard_arrow_right
                        </span>
                    </a>
                </div>
            </div>
        </div>
    </div>
</div> -->
<div class="survey-block survey-bg in-game-qualifier">
    <div class="row">
        <div class="col-lg-6 col-sm-12 col-xs-12 enable-in-mobile">
            <div class="mobile-bg">
                <div class="bg-image"></div>
            </div>
        </div>
        <div class="col-lg-6 col-sm-6 col-xs-12">
            {#if $TeamStore.notice }
                <div class="bg-cls">
                    <div class="survey-txt">
                        {$TeamStore.notice_title}
                    </div>
                    <p class="survey-info-txt">
                        {@html $TeamStore.notice}
                    </p>
                </div>
            {:else if $TeamStore.status == 'active' && $TeamStore.players.length == 4}
                <div class="bg-cls">
                    <div class="survey-txt">
                        Your team has not qualified to the further stages
                    </div>
                    <p class="survey-info-txt">
                        Your team did not qualify to the further phases of the tournament based on your score. Thank you for your participation and good luck for future tournaments.
                    </p>
                </div>
            {:else}
                <div class="bg-cls">
                    <div class="survey-txt">
                        Faild to qualify In game qualifiers
                    </div>
                    <p class="survey-info-txt">
                        You did not qualify for the In-Game Qualifiers as you were not a part of a completed team. Good luck for your future events.
                    </p>
                </div>
            {/if}
        </div>
    </div>
</div>
{/if}
<!-- User Dashboard_Team_Day Zero_Join-request-denied -->
<!-- <div class="survey-block">
    <div class="row">
        <div class="col">
            <h4 class="mt-40">
                Couldn’t Join Team
            </h4>
            <p class="survey-info-txt">
                We are sorry. You request to join “TEAM NAME LONG” was denied by the team leader. The team is all ready full.
            </p>
        </div>
    </div>
</div> -->
<!-- User Dashboard_Team_Day Zero_Kicked-out -->
<!-- <div class="survey-block">
    <div class="row">
        <div class="col">
            <h4 class="mt-40">
                Removed from team
            </h4>
            <p class="survey-info-txt">
                We are sorry. You were removed from “TEAM NAME LONG” by the team leader. Please Join another team or Create a new team.
            </p>
        </div>
    </div>
</div> -->
    <div class="row">
        <div class="col-lg-6 col-sm-12 col-xs-12">
            <Schedule/>
        </div>
        <div class="col-lg-6 col-sm-12 col-xs-12">
            <Standings/>
        </div>
    </div>
<style>
	.bg-search {
		position: absolute;
		top: 14px;
		right: -24px;
	}

	.team-box {
		overflow: hidden;
	}

	.bg-search span {
		font-size: 6em;
		color: rgba(74, 183, 202, 0.1);
	}
</style>