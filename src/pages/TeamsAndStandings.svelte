<script>
	import { each } from 'svelte/internal';
	import PointsTable from '../components/PointsTable.svelte';
	import Groups from '../models/groups';
   import Teams from '../models/teams'
	import Insider from '../layouts/partials/Insider.svelte';
   import { tweened } from 'svelte/motion';
	import { cubicOut } from 'svelte/easing';
   import ImageURL from '../utils/images';
   let clientWidth;
	const progress = tweened(0, {
		duration: 400,
		easing: cubicOut
	});

	// let teams = 
   // [
   //    {
   //       "name": "Head Hunters",
   //       "logo": "HeadHunters.jpg",
   //       "group": "Group A",
   //       "players": [
   //          {
   //             "logo": "test.png",
   //             "name": "Satyam Thakur",
   //             "inGameName": "HH.Viper24",
   //             "role": "Sniper"
   //          },
   //          {
   //             "logo": "",
   //             "name": "Nilesh Gattani",
   //             "inGameName": "HH-Maimungda",
   //             "role": "IGL"
   //          },
   //          {
   //             "logo": "",
   //             "name": "Priyanshu Halder Saha",
   //             "inGameName": "HH-SONTY",
   //             "role": "Rusher"
   //          },
   //          {
   //             "logo": "",
   //             "name": "Md. Abdul Moghni",
   //             "inGameName": "HH-Reaper",
   //             "role": "Rusher"
   //          },
   //          {
   //             "logo": "",
   //             "name": "Md. dsds Moghni",
   //             "inGameName": "HH-Reaper",
   //             "role": "Rusher"
   //          }
   //       ]
   //    },
   //    {
   //       "name": "4 Unknown",
   //       "logo": "4UNKNOWNLOGO.jpg",
   //       "group": "Group A",
   //       "players": [
   //          {
   //             "logo": "",
   //             "name": "Mohd Zuber",
   //             "inGameName": "4UN-DEADSOUL",
   //             "role": "IGL"
   //          },
   //          {
   //             "logo": "",
   //             "name": "Swastik Madhukar Dushing ",
   //             "inGameName": "4UN-SWASTIK",
   //             "role": "Rusher "
   //          },
   //          {
   //             "logo": "",
   //             "name": "Anand Madhukar Dushing ",
   //             "inGameName": "4UN-ANAND",
   //             "role": "Sniper "
   //          },
   //          {
   //             "logo": "",
   //             "name": "Vadher Anil Devashibhai",
   //             "inGameName": "4UN-WIZARDO",
   //             "role": "Assaulter "
   //          }
   //       ]
   //    },
   //    {
   //       "name": "Survivors",
   //       "logo": "SURVIVORS.jpg",
   //       "group": "Group A",
   //       "players": [
   //          {
   //             "logo": "",
   //             "name": "Karanjot Mehta",
   //             "inGameName": "SRV INSANE",
   //             "role": "Assaulter"
   //          },
   //          {
   //             "logo": "",
   //             "name": "Harsh Singh",
   //             "inGameName": "SRV-HARSH19",
   //             "role": "Rusher"
   //          },
   //          {
   //             "logo": "",
   //             "name": "Ashwani yadav",
   //             "inGameName": "SRV-IGNITE",
   //             "role": "Support"
   //          },
   //          {
   //             "logo": "",
   //             "name": "ALEXIS.C Arthur",
   //             "inGameName": "SRV-ALEX",
   //             "role": "Sniper"
   //          }
   //       ]
   //    },
   //    {
   //       "name": "Mayhem",
   //       "logo": "TEAMMAYHEM.jpg",
   //       "group": "Group A",
   //       "players": [
   //          {
   //             "logo": "",
   //             "name": "Anish Das",
   //             "inGameName": "mYm-NINJA",
   //             "role": "Assaulter"
   //          },
   //          {
   //             "logo": "",
   //             "name": "Nikhil arjun C",
   //             "inGameName": "mYm-NIKHIL",
   //             "role": "Assaulter"
   //          },
   //          {
   //             "logo": "",
   //             "name": "Shivam Kumar",
   //             "inGameName": "mYm-FARFROST",
   //             "role": "IGL"
   //          },
   //          {
   //             "logo": "",
   //             "name": "Abhishek Rao",
   //             "inGameName": "mYm-???????",
   //             "role": "Filter"
   //          }
   //       ]
   //    },
   //    {
   //       "name": "Evil Army",
   //       "logo": "TBD",
   //       "group": "Group A",
   //       "players": [
   //          {
   //             "logo": "",
   //             "name": "TBD",
   //             "inGameName": "TBD",
   //             "role": "TBD"
   //          },
   //          {
   //             "logo": "",
   //             "name": "TBD",
   //             "inGameName": "TBD",
   //             "role": "TBD"
   //          },
   //          {
   //             "logo": "",
   //             "name": "TBD",
   //             "inGameName": "TBD",
   //             "role": "TBD"
   //          },
   //          {
   //             "logo": "",
   //             "name": "TBD",
   //             "inGameName": "TBD",
   //             "role": "TBD"
   //          }
   //       ]
   //    },
   //    {
   //       "name": "Galaxy Racer",
   //       "logo": "TBD",
   //       "group": "Group A",
   //       "players": [
   //          {
   //             "logo": "",
   //             "name": "TBD",
   //             "inGameName": "TBD",
   //             "role": "TBD"
   //          },
   //          {
   //             "logo": "",
   //             "name": "TBD",
   //             "inGameName": "TBD",
   //             "role": "TBD"
   //          },
   //          {
   //             "logo": "",
   //             "name": "TBD",
   //             "inGameName": "TBD",
   //             "role": "TBD"
   //          },
   //          {
   //             "logo": "",
   //             "name": "TBD",
   //             "inGameName": "TBD",
   //             "role": "TBD"
   //          }
   //       ]
   //    },
   //    {
   //       "name": "Team Chaos",
   //       "logo": "TEAMCHAOS.jpg",
   //       "group": "Group B",
   //       "players": [
   //          {
   //             "logo": "",
   //             "name": "Somesh Yadav",
   //             "inGameName": "TC-SCARY",
   //             "role": "IGL"
   //          },
   //          {
   //             "logo": "",
   //             "name": "Kamal Kapoor",
   //             "inGameName": "TC-TECHKK",
   //             "role": "Support"
   //          },
   //          {
   //             "logo": "",
   //             "name": "Vivek Sharma",
   //             "inGameName": "TC-VIVEK",
   //             "role": "Rusher"
   //          },
   //          {
   //             "logo": "",
   //             "name": "Mirza Arsalan Athar Baig",
   //             "inGameName": "TC-ARSALAN",
   //             "role": "Rusher"
   //          }
   //       ]
   //    },
   //    {
   //       "name": "PVS Gaming",
   //       "logo": "PVSLOGO.jpg",
   //       "group": "Group B",
   //       "players": [
   //          {
   //             "logo": "",
   //             "name": "P. Praveen",
   //             "inGameName": "PVS-LOV2RBOY",
   //             "role": "IGL "
   //          },
   //          {
   //             "logo": "",
   //             "name": "A. Mudassir",
   //             "inGameName": "PVS-NOBITA",
   //             "role": "Rusher"
   //          },
   //          {
   //             "logo": "",
   //             "name": "V. Sanjay Nair",
   //             "inGameName": "PVS-SANJ4Y",
   //             "role": "Sniper"
   //          },
   //          {
   //             "logo": "",
   //             "name": "L. Sriram",
   //             "inGameName": "PVS-INNOCENT�",
   //             "role": "Supporter"
   //          }
   //       ]
   //    },
   //    {
   //       "name": "Team Elite",
   //       "logo": "TEAMELITE.jpg",
   //       "group": "Group B",
   //       "players": [
   //          {
   //             "logo": "",
   //             "name": "Dev Kumar�",
   //             "inGameName": "TE-ICONIC",
   //             "role": "Flanker"
   //          },
   //          {
   //             "logo": "",
   //             "name": "Lokesh Karakoti ",
   //             "inGameName": "TE-Pahadi",
   //             "role": "Sniper"
   //          },
   //          {
   //             "logo": "",
   //             "name": "Aditya Sing Sikarwar",
   //             "inGameName": "TE-KILLER",
   //             "role": "Rusher"
   //          },
   //          {
   //             "logo": "",
   //             "name": "Ajay Kumar Banga",
   //             "inGameName": "TE - JONTY",
   //             "role": "IGL"
   //          }
   //       ]
   //    },
   //    {
   //       "name": "Raven Esports",
   //       "logo": "RAVENESPORTS.jpg",
   //       "group": "Group B",
   //       "players": [
   //          {
   //             "logo": "",
   //             "name": "Kavibharathi",
   //             "inGameName": "RE.DEADSHOT",
   //             "role": "IGL"
   //          },
   //          {
   //             "logo": "",
   //             "name": "Ajith Kumar",
   //             "inGameName": "RE.AJITH",
   //             "role": "Supporter"
   //          },
   //          {
   //             "logo": "",
   //             "name": "Jogyesh",
   //             "inGameName": "RE.JOGESH",
   //             "role": "Sniper"
   //          },
   //          {
   //             "logo": "",
   //             "name": "Prasannagiri",
   //             "inGameName": "RE.PRASANA",
   //             "role": "Rusher"
   //          }
   //       ]
   //    },
   //    {
   //       "name": "Blind Esports",
   //       "logo": "BLIND.jpg",
   //       "group": "Group B",
   //       "players": [
   //          {
   //             "logo": "",
   //             "name": "Nivesh Kabadwala",
   //             "inGameName": "BLD-N1VESH",
   //             "role": "IGL"
   //          },
   //          {
   //             "logo": "",
   //             "name": "Dandu Jayasimha",
   //             "inGameName": "BLD-BABLU",
   //             "role": "Rusher"
   //          },
   //          {
   //             "logo": "",
   //             "name": "Ekansh Ginotra",
   //             "inGameName": "BLD-G1NOTRA",
   //             "role": "Rusher"
   //          },
   //          {
   //             "logo": "",
   //             "name": "Abhay Kujur",
   //             "inGameName": "BLD-ABHAY",
   //             "role": "Sniper"
   //          }
   //       ]
   //    },
   //    {
   //       "name": "Team D Esport",
   //       "logo": "TEAMDESPORTS.jpg",
   //       "group": "Group B",
   //       "players": [
   //          {
   //             "logo": "",
   //             "name": "Mukul Chaudhary",
   //             "inGameName": "D-BLACKSHOUT ",
   //             "role": "IGL"
   //          },
   //          {
   //             "logo": "",
   //             "name": "Amit",
   //             "inGameName": "D-RNS",
   //             "role": "Rusher"
   //          },
   //          {
   //             "logo": "",
   //             "name": "Amit",
   //             "inGameName": "D-AMITWALIA",
   //             "role": "Rusher"
   //          },
   //          {
   //             "logo": "",
   //             "name": "Devyanshu Singh",
   //             "inGameName": "D-SHINH",
   //             "role": "Assaulter"
   //          }
   //       ]
   //    },
   //    {
   //       "name": "IND Elite",
   //       "logo": "INDELITE.jpg",
   //       "group": "Group C",
   //       "players": [
   //          {
   //             "logo": "",
   //             "name": "Sameer Ahmad Allaye",
   //             "inGameName": "Sam",
   //             "role": "IGL"
   //          },
   //          {
   //             "logo": "",
   //             "name": "Jatin Taneja",
   //             "inGameName": "Taneja",
   //             "role": "Flanker"
   //          },
   //          {
   //             "logo": "",
   //             "name": "Putta Rohit",
   //             "inGameName": "BABY",
   //             "role": "Assaulter"
   //          },
   //          {
   //             "logo": "",
   //             "name": "Srijit Paul",
   //             "inGameName": "Predator",
   //             "role": "Sniper"
   //          }
   //       ]
   //    },
   //    {
   //       "name": "Total Gaming Esports",
   //       "logo": "Totalgaming.jpg",
   //       "group": "Group C",
   //       "players": [
   //          {
   //             "logo": "",
   //             "name": "Vora HitKumar",
   //             "inGameName": "TG-MAFIABALA",
   //             "role": "Assaulter"
   //          },
   //          {
   //             "logo": "",
   //             "name": "Ajay Sharma",
   //             "inGameName": "TG-FozyAjay",
   //             "role": "IGL"
   //          },
   //          {
   //             "logo": "",
   //             "name": "Narai Yadav",
   //             "inGameName": "TG-Delete",
   //             "role": "Rusher"
   //          },
   //          {
   //             "logo": "",
   //             "name": "Daksh Garg",
   //             "inGameName": "TG- MAFIA�",
   //             "role": "Sniper"
   //          }
   //       ]
   //    },
   //    {
   //       "name": "Blood Bashers",
   //       "logo": "BloodbashersS.jpg",
   //       "group": "Group C",
   //       "players": [
   //          {
   //             "logo": "",
   //             "name": "Rahul Kumar Sahu",
   //             "inGameName": "? E?????!!",
   //             "role": "IGL"
   //          },
   //          {
   //             "logo": "",
   //             "name": "Likhith K",
   //             "inGameName": "TSG-LIKH",
   //             "role": "Sniper"
   //          },
   //          {
   //             "logo": "",
   //             "name": "Harsh Pandey",
   //             "inGameName": "SRV-AMAN",
   //             "role": "Rusher"
   //          },
   //          {
   //             "logo": "",
   //             "name": "Shubraj",
   //             "inGameName": "SUBHU-S21",
   //             "role": "Assaulter"
   //          }
   //       ]
   //    },
   //    {
   //       "name": "Chemin Esports",
   //       "logo": "CHEMINESPORTS.jpg",
   //       "group": "Group C",
   //       "players": [
   //          {
   //             "logo": "",
   //             "name": "Honey Aggarwal",
   //             "inGameName": "CES-Adam",
   //             "role": "IGL"
   //          },
   //          {
   //             "logo": "",
   //             "name": "Koushik Malik",
   //             "inGameName": "CES-Koushik7",
   //             "role": "Sniper"
   //          },
   //          {
   //             "logo": "",
   //             "name": "Mayank Singh Rana",
   //             "inGameName": "CES-Ashustar",
   //             "role": "Assaulter"
   //          },
   //          {
   //             "logo": "",
   //             "name": "Bhavik Khandekar",
   //             "inGameName": "CES-Dev Bhai",
   //             "role": "Assaulter"
   //          }
   //       ]
   //    },
   //    {
   //       "name": "LVL Iconic",
   //       "logo": "LVLICONIC.jpg",
   //       "group": "Group C",
   //       "players": [
   //          {
   //             "logo": "",
   //             "name": "Deepanshu Shandil",
   //             "inGameName": "IC-MARTIN",
   //             "role": "Rusher"
   //          },
   //          {
   //             "logo": "",
   //             "name": "Sunil Kumar",
   //             "inGameName": "IC-ANGRY",
   //             "role": "Rusher"
   //          },
   //          {
   //             "logo": "",
   //             "name": "Roni Thakur",
   //             "inGameName": "IC-ROUNINEGI",
   //             "role": "Assaulter"
   //          },
   //          {
   //             "logo": "",
   //             "name": "Aluddin Varsi",
   //             "inGameName": "IC-ALADDIN",
   //             "role": "IGL"
   //          }
   //       ]
   //    },
   //    {
   //       "name": "TSG Army",
   //       "logo": "TSGARMY.jpg",
   //       "group": "Group C",
   //       "players": [
   //          {
   //             "logo": "",
   //             "name": "Bhavesh Lakhwani",
   //             "inGameName": "TSG LEGEND  ",
   //             "role": "Rusher"
   //          },
   //          {
   //             "logo": "",
   //             "name": "Ritik",
   //             "inGameName": "TSG RITIK ",
   //             "role": "IGL"
   //          },
   //          {
   //             "logo": "",
   //             "name": "Ojasvi Kamra",
   //             "inGameName": "TSG OJASVI",
   //             "role": "Rusher"
   //          },
   //          {
   //             "logo": "",
   //             "name": "G. Vihaan Dutta",
   //             "inGameName": "TSG VIHAAN",
   //             "role": "Supporter"
   //          }
   //       ]
   //    },
   //    {
   //       "name": "TSM FTX",
   //       "logo": "TSMFTX.jpg",
   //       "group": "Group D",
   //       "players": [
   //          {
   //             "logo": "",
   //             "name": "Sagar Patel",
   //             "inGameName": "Illuminati",
   //             "role": "Support"
   //          },
   //          {
   //             "logo": "",
   //             "name": "Indranil Saha",
   //             "inGameName": "Indro",
   //             "role": "IGL"
   //          },
   //          {
   //             "logo": "",
   //             "name": "Jayesh Yadav",
   //             "inGameName": "Mr.Jay",
   //             "role": "Rusher"
   //          },
   //          {
   //             "logo": "",
   //             "name": "Naitik Khoshto",
   //             "inGameName": "Monk",
   //             "role": "Sniper"
   //          }
   //       ]
   //    },
   //    {
   //       "name": "AFF Esports",
   //       "logo": "AFFESPORTS.jpg",
   //       "group": "Group D",
   //       "players": [
   //          {
   //             "logo": "",
   //             "name": "Arpit Tyagi",
   //             "inGameName": "AFF-TYAGI",
   //             "role": "IGL"
   //          },
   //          {
   //             "logo": "",
   //             "name": "Owais Bhati",
   //             "inGameName": "AFF-MAFIA21.",
   //             "role": "Support"
   //          },
   //          {
   //             "logo": "",
   //             "name": "Rahil Katoch",
   //             "inGameName": "AFF-RAHIL.�",
   //             "role": "Rusher"
   //          },
   //          {
   //             "logo": "",
   //             "name": "Kanishk Verma",
   //             "inGameName": "AFF-KANISHK.",
   //             "role": "Assaulter"
   //          }
   //       ]
   //    },
   //    {
   //       "name": "Namesis",
   //       "logo": "Nemesis.jpg",
   //       "group": "Group D",
   //       "players": [
   //          {
   //             "logo": "",
   //             "name": "Sunil",
   //             "inGameName": "NMS-MINDGMR",
   //             "role": "IGL"
   //          },
   //          {
   //             "logo": "",
   //             "name": "Manu",
   //             "inGameName": "NMS-MRGAMER",
   //             "role": "Assaulter"
   //          },
   //          {
   //             "logo": "",
   //             "name": "Uzaif Ahmed",
   //             "inGameName": "NMS-uzaif18",
   //             "role": "Rusher"
   //          },
   //          {
   //             "logo": "",
   //             "name": "Rohit Kumar",
   //             "inGameName": "AG-RAJU!!!",
   //             "role": "Sniper"
   //          }
   //       ]
   //    },
   //    {
   //       "name": "God Like",
   //       "logo": "god_like.jpg",
   //       "group": "Group D",
   //       "players": [
   //          {
   //             "logo": "",
   //             "name": "Ankit Shukla",
   //             "inGameName": "GOD.TISTA",
   //             "role": "IGL"
   //          },
   //          {
   //             "logo": "",
   //             "name": "Ashish Mishra",
   //             "inGameName": "GOD.ASHISH08",
   //             "role": "Rusher"
   //          },
   //          {
   //             "logo": "",
   //             "name": "Mohd Alhan",
   //             "inGameName": "DEV-ALHAN",
   //             "role": "Assaulter"
   //          },
   //          {
   //             "logo": "",
   //             "name": "Nikhil makhijareg",
   //             "inGameName": "EA-Nikhil-13",
   //             "role": "rusher"
   //          }
   //       ]
   //    },
   //    {
   //       "name": "Enigma Gaming",
   //       "logo": "ENIGMAGAMING.jpg",
   //       "group": "Group D",
   //       "players": [
   //          {
   //             "logo": "",
   //             "name": "Arindam Biswas",
   //             "inGameName": "EG-ARIN007",
   //             "role": "IGL"
   //          },
   //          {
   //             "logo": "",
   //             "name": "Kishan Ramesh�",
   //             "inGameName": "EG-KRGOWDRU",
   //             "role": "Rusher"
   //          },
   //          {
   //             "logo": "",
   //             "name": "Ansh Babbar",
   //             "inGameName": "EG-Ansh",
   //             "role": "Sniper"
   //          },
   //          {
   //             "logo": "",
   //             "name": "Promit Banerjee",
   //             "inGameName": "EG-PROMIT",
   //             "role": "Assaulter"
   //          }
   //       ]
   //    },
   //    {
   //       "name": "UG MANIA",
   //       "logo": "TBD",
   //       "group": "Group D",
   //       "players": [
   //          {
   //             "logo": "",
   //             "name": "TBD",
   //             "inGameName": "TBD",
   //             "role": "TBD"
   //          },
   //          {
   //             "logo": "",
   //             "name": "TBD",
   //             "inGameName": "TBD",
   //             "role": "TBD"
   //          },
   //          {
   //             "logo": "",
   //             "name": "TBD",
   //             "inGameName": "TBD",
   //             "role": "TBD"
   //          },
   //          {
   //             "logo": "TBD",
   //             "name": "TBD",
   //             "inGameName": "TBD",
   //             "role": "TBD"
   //          }
   //       ]
   //    }
   // ]

	let selectedGroup;
	let selectedTeam;
   let team = false;
   
	const selectTeam = async () => {
      if(selectedGroup)
		selectedTeam = groups.find(g => g.id == selectedGroup).teams[0].id;
      if(selectedTeam){
         team = await Teams.getById(selectedTeam);
      }
	}

   $: selectedGroup, selectTeam();

   let groups = [];

   Groups.getAll().then(res => {
      groups = res
      selectedGroup = groups[0].id;
      console.log(selectedGroup);
   })

	
</script>
	<div class="top-section teams-and-standings">
		<h1 class="title">Competing Teams</h1>
		<!-- <Video url="https://www.youtube.com/watch?v=-gyBzQnsGT0" thumb="/images/day10_conquest_trailer_thumb_trailer.jpg"/> -->
	</div>

	<div class="teams-details-container">
		<div class="tabs">
			<div class="tab-list nav-section">
				<div class="nav">
               {#each groups as group}
					   <div class="tab-btn" class:active={selectedGroup == group.id} on:click|preventDefault={e => selectedGroup = group.id}>{group.Name}</div>
               {/each}
				</div>
			</div>
         {#if groups.length }
			<div class="container">
				<div class="row justify-content-center">
					<div class="col-md-8 col-sm-12 col-xs-12 teams-view-container">
						<div class="teams-details d-flex">
								<div class="team-logos-sec " bind:clientWidth={clientWidth} on:scroll={(e) => {
                           let scrollValue = e.target.scrollLeft;
                           clientWidth = clientWidth
                           progress.set(((1.4*scrollValue)/clientWidth)*(100))
                           }}>
									{#each groups.find(g => g.id == selectedGroup).teams as team}
										<div class="logo-click-card" class:active={selectedTeam == team.id} on:click|preventDefault={
											e => {
												selectedTeam = team.id;
											}
										}>
											<img src={ImageURL(team.logo.url)} alt="">
										</div>
									{/each}
								</div>
                        <progress value={$progress} max="100" class="progress-bar-teams"></progress>
								<div class="team-player-sec">
									<h5 class="selected-team">{selectedTeam}</h5>
									{#if selectedTeam}
										<!-- {#each groups.find(g => g.id == selectedGroup).teams.find(t => t.name == selectedTeam).players as player }
											<div class="media player-data-card">
                                    {#if player.logo.length <1}
                                       <div class="init-name">{player.name[0]}</div>
                                       {:else}
                                       <img src={player.logo} class="align-self-center mr-3" alt="">
                                    {/if}
												<div class="media-body">
													<h5 class="mt-0 ingame-name">{player.inGameName}</h5>
													<p class="actual-name">{player.name}</p>
													<p class="mb-0 role">{player.role}</p>
												</div>
											</div>
										{/each} -->
									{/if}
								</div>
							</div>
					</div>
				</div>
			</div>
         {/if}
		</div>
	</div>
	<PointsTable />
	<Insider />
<style>
	.top-section {
		background: url("../images/teamsandstandings.png") no-repeat center;
		background-size: cover;
	}

	.title {
		font-size: 42px;
		text-align: center;
		letter-spacing: 0;
		color: #ffffff;
		padding: 75px 0 75px 0;
		margin: 0;
	}

	.logo-click-card.active {
		border: 4px solid #3253dc;
	}

</style>