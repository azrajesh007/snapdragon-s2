<script>
	import Video from '../components/Video.svelte';


	let scores = [];
	let leaderboard = {
    "data": [{
        "id": 1,
        "status": "published",
        "owner": 1,
        "created_on": "2021-01-27T20:13:38+00:00",
        "modified_by": 2,
        "modified_on": "2021-03-15T10:36:08+00:00",
        "scores": [{
            "Rank": 1,
            "Team Name": "4 Unknown",
            "No. of matches played": 12,
            "Kills": 70,
            "Kill Points": 140,
            "Position Points": 167,
            "Overall Points": 307
        }, {
            "Rank": 2,
            "Team Name": "Team Elite",
            "No. of matches played": 12,
            "Kills": 55,
            "Kill Points": 110,
            "Position Points": 151,
            "Overall Points": 261
        }, {
            "Rank": 3,
            "Team Name": "LIFE HACKERS",
            "No. of matches played": 12,
            "Kills": 50,
            "Kill Points": 100,
            "Position Points": 129,
            "Overall Points": 229
        }, {
            "Rank": 4,
            "Team Name": "Team Chaos",
            "No. of matches played": 12,
            "Kills": 52,
            "Kill Points": 104,
            "Position Points": 125,
            "Overall Points": 229
        }, {
            "Rank": 5,
            "Team Name": "Hex Esports",
            "No. of matches played": 12,
            "Kills": 33,
            "Kill Points": 66,
            "Position Points": 122,
            "Overall Points": 188
        }, {
            "Rank": 6,
            "Team Name": "TEAM MAYHEM",
            "No. of matches played": 12,
            "Kills": 35,
            "Kill Points": 70,
            "Position Points": 117,
            "Overall Points": 187
        }, {
            "Rank": 7,
            "Team Name": "Galaxy Racer",
            "No. of matches played": 12,
            "Kills": 42,
            "Kill Points": 84,
            "Position Points": 98,
            "Overall Points": 182
        }, {
            "Rank": 8,
            "Team Name": "Sixth Sense",
            "No. of matches played": 12,
            "Kills": 39,
            "Kill Points": 78,
            "Position Points": 82,
            "Overall Points": 160
        }, {
            "Rank": 9,
            "Team Name": "Total Gaming Esports",
            "No. of matches played": 12,
            "Kills": 31,
            "Kill Points": 62,
            "Position Points": 96,
            "Overall Points": 158
        }, {
            "Rank": 10,
            "Team Name": "survivior-4am",
            "No. of matches played": 12,
            "Kills": 27,
            "Kill Points": 54,
            "Position Points": 87,
            "Overall Points": 141
        }, {
            "Rank": 11,
            "Team Name": "Blood bashers",
            "No. of matches played": 12,
            "Kills": 23,
            "Kill Points": 46,
            "Position Points": 87,
            "Overall Points": 133
        }, {
            "Rank": 12,
            "Team Name": "Raven esports",
            "No. of matches played": 12,
            "Kills": 26,
            "Kill Points": 52,
            "Position Points": 71,
            "Overall Points": 123
        }],
        "xlsx": 104,
        "title": "Grand Finals, End of Day 2"
    }],
    "public": true
};


	// fetch('https://qsdc.tesseractesports.com/conquest/items/leaderboard').then(async res => {
		let data = leaderboard;
	 	data = data.data[0];
		leaderboard = data;
		if(data.status =='published'){
			scores = data.scores.sort((a,b) => a.Rank < b.Rank);
		}
	// })
</script>
<div class="top-section">
	<h1 class="title">Leaderboard</h1>
	<Video url="https://www.youtube.com/watch?v=-gyBzQnsGT0" thumb="/images/day10_conquest_trailer_thumb_trailer.jpg"/>
</div>
<div>
	<h4 class="table-title">{leaderboard.title}</h4>
</div>
<div class="table-section container">
	{#if scores.length > 0}
	<table class="table">
		<thead>
			<tr>
				<th scope="col">Rank</th>
				<th scope="col">Team Name</th>
				<th scope="col">No. of matches played</th>
				<th scope="col">Kills</th>
				<th scope="col">Kill Points</th>
				<th scope="col">Position Points</th>
				<th scope="col">Overall Points</th>
			</tr>
		</thead>
		<tbody>
			{#each scores as score}
				<tr>
					<td>{score['Rank']}</td>
					<td>{score['Team Name']}</td>
					<td>{score['No. of matches played']}</td>
					<td>{score['Kills']}</td>
					<td>{score['Kill Points']}</td>
					<td>{score['Position Points']}</td>
					<td class="cell-value">{score['Overall Points']}</td>
				</tr>
			{/each}
		</tbody>
	</table>
	{:else}
		<h3>Leaderboard not yet available</h3>
	{/if}
</div>
<style>
	.top-section {
		min-height: 559px;
		background: url("../images/inner-banner.png") no-repeat center;
		background-size: cover;
	}

	.title {
		font-size: 42px;
		text-align: center;
		letter-spacing: 0;
		color: #ffffff;
		padding: 80px 0 40px 0;
	}

	.table th {
		border-top: none;
		color: #677790;
		letter-spacing: 0;
		font-size: 14px;
		font-weight: normal;
		font-stretch: normal;
		font-style: normal;
		line-height: normal;
		letter-spacing: normal;
		text-align: left;
	}

	.table-section {
		margin: auto;
		padding: 0 20px;
	}

	.table-title {
		padding: 40px 0;
		margin-bottom: 0;
		letter-spacing: 0;
		color: #0b2742;
		font-size: 16px;
		font-weight: 500;
		font-stretch: normal;
		font-style: normal;
		line-height: normal;
		letter-spacing: normal;
		text-align: center;
	}

	.table-section  td {
		color: #0b2742;
		letter-spacing: 0;
		font-size: 16px;
		font-weight: normal;
		font-stretch: normal;
		font-style: normal;
		line-height: normal;
		letter-spacing: normal;
	}
	
	.table-section .table td {
		border-bottom: 1px solid rgba(103, 119, 144, 0.1);
		padding: 21px 0 12px 0;
	}

	.table-section .table th {
		border-bottom: 1px solid rgba(103, 119, 144, 0.5);
		padding-left: 2px;
	}

	td.cell-value {
		color: #0b2742;
		font-weight: 500;
		font-size: 20px;
		letter-spacing: 0;
	}

 	.video-caption {
		padding: 40px 0;
		padding-bottom: 80px;
		font-size: 16px;
		text-align: center;
		letter-spacing: 0;
		color: #ffffff;
	}

	.video-thumb {
		height: 260px;
	}
</style>