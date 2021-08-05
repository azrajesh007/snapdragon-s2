<script>
    import Select from 'svelte-select';
    import {Vote} from '../models/vote';
    import {getHistory} from 'swheel';
	import {onMount} from 'svelte';
    


    let teamVoteStatus = false;
    let playerVoteStatus = false;
    let teamSelected = undefined;
    let playerSelected = undefined;
    const path = getHistory().currentPath;
	let contestEl;
	let thisEl;
    onMount(() => {
		if($path.indexOf('/vote') == 0){
			//setTimeout(() => {window.scrollTo(0, contestEl.offsetTop - window.innerHeight + 500)}, 500);
			contestEl.scrollIntoView();
			//console.log(contestEl.offsetTop - window.innerHeight);
		}
	});

    let playersData = [
        {value:672, label:'6S-FABINDRO', group:'Sixth Sense'},
        {value:33458, label:'6S-MRJAYYT', group:'Sixth Sense'},
        {value:33704, label:'6S-GINOTRA', group:'Sixth Sense'},
        {value:419199, label:'6S-ILUMINATI  ', group:'Sixth Sense'},
        {value:560, label:'mYm-WELLS ', group:'TEAM MAYHEM'},
        {value:602, label:'mYm-NINJA ', group:'TEAM MAYHEM'},
        {value:1123, label:'mYm-MARVEL', group:'TEAM MAYHEM'},
        {value:419208, label:'mYm-JAILBIRD  ', group:'TEAM MAYHEM'},
        {value:1382, label:'Lh Baby¹⁴³', group:'LIFE HACKERS '},
        {value:1724, label:'LH Old Monk', group:'LIFE HACKERS '},
        {value:13742, label:'Lh Predator', group:'LIFE HACKERS '},
        {value:419206, label:'Aatank tazu', group:'LIFE HACKERS '},
        {value:1622, label:'TC-SCARY GAMER', group:'TEAM CHAOS '},
        {value:2115, label:'TC-KUNALJR', group:'TEAM CHAOS '},
        {value:4697, label:'TC_TECHKK ', group:'TEAM CHAOS '},
        {value:5621, label:'TC-PRATHAM', group:'TEAM CHAOS '},
        {value:2389, label:'hex-YASH_09', group:'Hex Esports'},
        {value:15278, label:'hexRITIKSTAR  ', group:'Hex Esports'},
        {value:18562, label:'Infintz', group:'Hex Esports'},
        {value:18902, label:'hexMAFIA  ', group:'Hex Esports'},
        {value:4920, label:'RavenDEDSHOT  ', group:'Raven esports'},
        {value:6014, label:'Raven-SHiV', group:'Raven esports'},
        {value:10291, label:'Raven-AJIT', group:'Raven esports'},
        {value:24521, label:'Raven-PRADDY  ', group:'Raven esports'},
        {value:4449, label:'TE-RDP', group:'SURVIVOR4AM '},
        {value:14908, label:'SRV-IGNITE', group:'SURVIVOR4AM '},
        {value:30282, label:'SRV-Golden', group:'SURVIVOR4AM '},
        {value:158904, label:'SRV-SID__ ', group:'SURVIVOR4AM '},
        {value:13879, label:'GXR-BARCABOI  ', group:'Galaxy Racers'},
        {value:18006, label:'GXR-VasiyoCRJ ', group:'Galaxy Racers'},
        {value:25146, label:'GXR-MARYX ', group:'Galaxy Racers'},
        {value:26907, label:'GXR-aman2518  ', group:'Galaxy Racers'},
        {value:10455, label:'1nsaneLikhi  ', group:'Blood bashers07'},
        {value:35523, label:'♤Ꭼᴅᴡᴀʀᴅ㕄來  ', group:'Blood bashers07'},
        {value:35630, label:'1nsaneAryan  ', group:'Blood bashers07'},
        {value:35660, label:'BLD-Subhu!', group:'Blood bashers07'},
        {value:34113, label:'4UN-WIZARDO', group:'4UNKNOWN '},
        {value:293342, label:'4UN-DEADSOUL  ', group:'4UNKNOWN '},
        {value:297400, label:'4UN-SWASTIK', group:'4UNKNOWN '},
        {value:297434, label:'4UN-ANAND ', group:'4UNKNOWN '},
        {value:293349, label:'TG-PRINCE..!  ', group:'TOTAL GAMINGESPORT '},
        {value:374003, label:'TG-MAFIABALA  ', group:'TOTAL GAMINGESPORT '},
        {value:376869, label:'TG-JAVABOY', group:'TOTAL GAMINGESPORT '},
        {value:377161, label:'TG - FOZY AJAY', group:'TOTAL GAMINGESPORT '},
        {value:419195, label:'Iconic FF ', group:'Team Elite '},
        {value:419196, label:'Killer FF ', group:'Team Elite '},
        {value:419197, label:'Pahadi', group:'Team Elite '},
        {value:419198, label:'TE_JONTY  ', group:'Team Elite '}
    ];

    let teamsName = [
        {value:418, label:'Sixth Sense'},
        {value:603, label:'TEAM MAYHEM'},
        {value:858, label:'LIFE HACKERS'},
        {value:971, label:'TEAM CHAOS'},
        {value:1325, label:'Hex Esports'},
        {value:2605, label:'Raven esports'},
        {value:6579, label:'SURVIVOR4AM'},
        {value:7987, label:'Galaxy Racers'},
        {value:14040, label:'Blood bashers07'},
        {value:113642, label:'4UNKNOWN'},
        {value:138026, label:'TOTAL GAMINGESPORT'},
        {value:146446, label:'Team Elite'}
    ]

    const voteing = Vote.getInstance();
    const voteStore = voteing.store();

    const groupBy = (item) => item.group;

    const handleTeamSelect = (e) => {
        console.log(teamSelected);
    }

    const handlePlayerSelect = (e) => {
        console.log(playerSelected);
    }

    voteStore.subscribe(status => {
        if(status.votedPlayer)
            playerSelected = playersData.find(p => p.value == status.votedPlayer)
        if(status.votedTeam)
            teamSelected = teamsName.find(t => t.value == status.votedTeam)
    })

</script>

<section id="voting_section" bind:this={contestEl}>
    <div class="voting-container">
        <div class="container">
            <!-- <div class="row">
                <div class="col">
                    <div class="vote-banner">
                        <img src="images/img-voting.png" alt="voting">
                    </div>
                    <div class="vote-banner-mobile">
                        <img src="images/website-vote-bannerArtboard-2.png" alt="voting">
                    </div>
                </div>
            </div> -->
           
            <div class="voting-team-container">
                <div class="row">
                    <div class="col-md-6">
                        <div class="vote-for-team">
                            <!-- <p class="title">VOTE FOR YOUR FAVOURITE</p> -->
                            <h3 class="vote-for">FAN FAVOURITE TEAM</h3>
                            <div class="fan-fev-img">
                                <img src="images/Total_Gaming_Logo.png" alt="Total gaming">
                                <p class="fan-fav-title">Total Gaming</p>
                            </div>
                            <!-- <div class="vote-dropdown">
                                <form on:submit|preventDefault={handleTeamSelect}>
                                    <div class="form-group">
                                        <label class="lbl-txt" for="states"></label>
                                        <Select items = {teamsName} placeholder="Select Team" showChevron={true}  bind:selectedValue={teamSelected} isDisabled={true}></Select>
                                    </div>
                                    <div class="vote-btn">
                                        {#if !$voteStore.votedTeam}
                                            <button on:click={() => voteing.voteTeam(teamSelected.value)} class="btn btn-primary submit-btn vote-button" type=submit disabled="true"> Cast Vote</button>
                                        {:else}
                                            <button  class="btn btn-primary submit-btn vote-button vote-success-btn" disabled>Voted Successfully</button>
                                        {/if}
                                    </div>
                                </form>
                            </div> -->
                        </div>
                    </div>
                    <div class="col-md-6">
                        <div class="vote-for-player">
                            <!-- <p class="title">VOTE FOR YOUR FAVOURITE</p> -->
                            <h3 class="vote-for">FAN FAVOURITE PLAYER</h3>
                            <div class="fan-fev-img pahadi">
                                <img src="images/TE-Pahadi.png" alt="pahadi">
                                <p class="fan-fav-title">TE-Pahadi</p>
                            </div>
                            <!-- <div class="vote-dropdown">
                                <form on:submit|preventDefault={handlePlayerSelect}>
                                    <div class="form-group">
                                        <label class="lbl-txt" for="states"></label>
                                        <Select items ={playersData} bind:selectedValue={playerSelected} {groupBy} placeholder="Select Player" showChevron={true} isDisabled={true} ></Select>
                                    </div>
                                    <div class="vote-btn">
                                        {#if !$voteStore.votedPlayer}
                                            <button on:click={() => voteing.votePlayer(playerSelected.value)} class="btn btn-primary submit-btn vote-button" type=submit  disabled="true"> Cast Vote</button>
                                        {:else}
                                        <button  class="btn btn-primary submit-btn vote-button vote-success-btn" disabled="true">Voted Successfully</button>
                                        {/if}
                                    </div>
                                </form>
                            </div> -->
                        </div>
                    </div>
                </div>
                <!-- <p class="vote-success-message">The voting has now ended. The results will be anounced shortly.</p> -->
            </div>
        </div>
    </div>
</section>