<script>
	import { Tabs, TabList, TabPanel, Tab } from '../components/tabs/tabs.js';
	import { slide } from "svelte/transition";
	let visible = true;
	let generalfaqs = [
		{
			id: 1,
			title: "What is Free Fire?",
			content:
				'Free Fire is an online multiplayer battle royale game developed by 111 Dots Studio and published by Garena for Android and iOS. <p class="hindi-txt">फ्री फायर 111 Dots Studio  द्वारा विकसित Android और iOS के लिए गरेना द्वारा प्रकाशित एक ऑनलाइन मल्टीप्लेयर बैटल रॉयल गेम है।​</p>',
			active: false,
		},
		{
			id: 2,
			title: "How to play Free Fire?",
			content:
				"<p>Download the Free Fire Mobile app from the Apple app store or Google play store.</p><p>Create an account within the app.</p><p>Play and enjoy.</p><p class='hindi-txt'>ऐप्पल ऐप स्टोर या गूगल प्ले स्टोर से फ्री फायर मोबाइल ऐप डाउनलोड करें। ऐप के भीतर एक खाता बनाएं। खेलें और आनंद लें।</p>",
			active: false,
		},
		{
			id: 3,
			title: "Who is organizing Free Fire Open 2020?",
			content:
				"<p>Qualcomm(R) Snapdragon Conquest(TM): Free Fire Open 2020 is organized by Qualcomm and executed by Tesseract Esports</p><p class='hindi-txt'>क्वालकॉम (R) स्नैपड्रैगन कांकुएस्ट (TM): फ्री फायर ओपन 2020 क्वालकॉम द्वारा आयोजित किया जाता है और टेसरैक्ट इस्पोर्ट्स द्वारा निष्पादित किया जाता है</p>",
			active: false,
		},
		{
			id: 4,
			title: "What are the tournament rules?",
			content:
				"<p>You can find the complete rulebook at <a href='/rulebook.pdf' target='_blank'>Rulebook</a></p><p class='hindi-txt'>आप <a href='/rulebook.pdf' target='_blank'>नियम पुस्तिका</a> में पूरे  नियम पा सकते हैं</p>",
			active: false,
		},
		{
			id: 5,
			title: "How will we be playing- mobile or PC?",
			content:
				"<p>This is a mobile- only online tournament and usage of emulators in the tournament is strictly prohibited.</p><p class='hindi-txt'>यह एक केवल-मोबाइल ऑनलाइन टूर्नामेंट है और टूर्नामेंट में एमुलेटर का उपयोग पूरी तरह से प्रतिबंधित है।</p>",
			active: false,
		},
		{
			id: 6,
			title: "Can I use triggers or Emulators?",
			content:
				"<p>No, triggers and emulators or any other add-on devices are strictly prohibited. Team/Players will be disqualified if found to be using additional devices.</p><p class='hindi-txt'>नहीं, ट्रिगर्स और एमुलेटर या किसी भी अन्य ऐड-ऑन डिवाइस को सख्त वर्जित है। अतिरिक्त उपकरणों का उपयोग करते पाए जाने पर टीम / खिलाड़ियों को अयोग्य घोषित कर दिया जाएगा।</p>",
			active: false,
		},
		{
			id: 7,
			title: "What is the Prize Pool? ",
			content:
				"<p>A prize pool of INR 50 Lakhs is up for grabs. The prize distribution is based on the team’s standing post finals. Individuals excelling in certain categories are also entitled to special awards.</p><p class='hindi-txt'>50 लाख रुपए का पुरस्कार पूल उपलब्ध है। पुरस्कार वितरण टीम के अंतिम स्थायी पद पर आधारित है। कुछ श्रेणियों में उत्कृष्ट व्यक्ति भी विशेष पुरस्कार के हकदार हैं।</p>",
			active: false,
		},
		{
			id: 8,
			title: "How is the prize pool distributed?",
			content:
				"<p>Below is the detailed breakdown of the prizes at stake.</p><div class='table-responsive'><table class='table'><thead><tr><th scope='col'>Position</th><th scope='col'>Prize</th></tr></thead><tbody><tr><td>1</td><td>20,00,000INR</td></tr><tr><td>2</td><td>8,00,000INR</td></tr><tr><td>3</td><td>5,00,000INR</td></tr><tr><td>4</td><td>4,00,000INR</td></tr><tr><td>5</td><td>3,00,000INR</td></tr><tr><td>6</td><td>2,00,000INR</td></tr><tr><td>7</td><td>1,50,000INR</td></tr><tr><td>8</td><td>1,00,000INR</td></tr><tr><td>9</td><td>75,000INR</td></tr><tr><td>10</td><td>75,000INR</td></tr><tr><td>11</td><td>50,000INR</td></tr><tr><td>12</td><td>50,000INR</td></tr><tr><td>Special Rewards</td><td>3,00,000INR</td></tr></tbody></table></div><p class='hindi-txt'>नीचे पुरस्कारों का विस्तृत विराम दिया गया है।</p><div class='table-responsive'><table class='table'><thead><tr><th scope='col'>Position</th><th scope='col'>Prize</th></tr></thead><tbody><tr><td>1</td><td>20,00,000INR</td></tr><tr><td>2</td><td>8,00,000INR</td></tr><tr><td>3</td><td>5,00,000INR</td></tr><tr><td>4</td><td>4,00,000INR</td></tr><tr><td>5</td><td>3,00,000INR</td></tr><tr><td>6</td><td>2,00,000INR</td></tr><tr><td>7</td><td>1,50,000INR</td></tr><tr><td>8</td><td>1,00,000INR</td></tr><tr><td>9</td><td>75,000INR</td></tr><tr><td>10</td><td>75,000INR</td></tr><tr><td>11</td><td>50,000INR</td></tr><tr><td>12</td><td>50,000INR</td></tr><tr><td>Special Rewards</td><td>3,00,000INR</td></tr></tbody></table></div>",
			active: false,
		},
		{
			id: 9,
			title: "How do I get the money if I win?",
			content:
				"<p>The prize money will be directly transferred to the winner’s bank account. The details will be collected and the deposit will be done within 90 working days after finals.</p><p class='hindi-txt'>पुरस्कार राशि सीधे विजेता के बैंक खाते में स्थानांतरित कर दी जाएगी। विवरण एकत्र किया जाएगा और फाइनल के बाद 90 दिनों के भीतर जमा किया जाएगा।</p>",
			active: false,
		},
		{
			id: 10,
			title: "Is the prize money subject to Government taxes or deductions?",
			content:
				"<p>Yes. Like winnings from any other tournament, the tax amount will be deducted at source (TDS) in accordance with the Government regulations.</p><p class='hindi-txt'>हाँ। किसी भी अन्य टूर्नामेंट से मिली जीत की तरह, कर की राशि सरकार के नियमों के अनुसार स्रोत (TDS) में काटी जाएगी।</p>",
			active: false,
		},
		{
			id: 11,
			title: "What are the phases of tournament?",
			content:
				"<p><strong>Tournament Phases</strong></p><ol><li>Registrations</li><li>In-game qualifiers</li><li>Online Playoffs</li><li>League Stage</li><li>Grand Finals</li></ol><p class='hindi-txt'>टूर्नामेंट के चरण</p><ol><li>पंजीकरण</li><li>इन-गेम क्वालिफ़ायर</li><li>ऑनलाइन प्लेऑफ्स</li><li>लीग स्टेज</li><li>ग्रैंड फाइनल</li></ol>",
			active: false,
		},
		{
			id: 12,
			title: "What is the format of the tournament?",
			content:
				"<p>You can find all information on the tournament format <a href='/format' target='_top'>here</a></p><p class='hindi-txt'>आप टूर्नामेंट प्रारूप पर सभी जानकारी <a href='/format' target='_top'>यहाँ</a> पा सकते हैं</p>",
			active: false,
		},
		{
			id: 13,
			title: "From where should I play the tournament?",
			content:
				"<p>You can play the tournament from any choice of location as long as you can maintain an internet connection, since the tournament matches are going to be played online. However, you need to be physically at the venue if the tournament organizer decides to hold the finals at an offline venue.</p><p class='hindi-txt'>आप टूर्नामेंट को किसी भी पसंद के स्थान से खेल सकते हैं जब तक आप इंटरनेट कनेक्शन बनाए रख सकते हैं, क्योंकि टूर्नामेंट मैच ऑनलाइन खेले जाने हैं। हालाँकि, यदि टूर्नामेंट आयोजक एक ऑफ़लाइन स्थान पर फाइनल आयोजित करने का निर्णय लेता है तब आपको टूर्नामेंट स्थल पर शारीरिक रूप से रहने की आवश्यकता है ।</p>",
			active: false,
		},
	];

	const expand = (generalfaqcontent) => {
		generalfaqs = generalfaqs.map((s) => {
			let c = generalfaqs.find(i =>i.active);
			s.active = false;
			if(!c || c && c.id != generalfaqcontent.id)
			if (s.id === generalfaqcontent.id) {
				s.active = true;
			}
			return s;
		});
	};

	// for Registration
	let registrationfaqs = [
		{
			id: 1,
			title: "How to register for the tournament?",
			content:
				'<ul class="list-items"><li>Visit the official website - <a target="_balnk" href="http://www.snapdragonconquest.com/">http://www.snapdragonconquest.com/</a></li><li>Click on the "Register Now" button on the homepage</li><li>Enter your "Email ID" and verify with the OTP received on your Email.</li><li>Fill in your details</li><li>Accept the terms and conditions</li></ul><p>You are now registered on the website. To complete registrations for the tournament either create a team or join a team. Only a complete team of 4 players will be considered eligible for participating in the tournament.</p><ul class="list-items"><li>आधिकारिक वेबसाइट पर जाएं - <a target="_balnk" href="http://www.snapdragonconquest.com/">http://www.snapdragonconquest.com/</a></li><li>होमपेज पर "Register Now" बटन पर क्लिक करें</li><li>अपनी "Email ID" दर्ज करें और अपने ईमेल पर प्राप्त ओटीपी के साथ सत्यापित करें।</li><li>अपने विवरण भरें</li><li>नियम और शर्तों को स्वीकार करें</li></ul><p>अब आप वेबसाइट पर पंजीकृत हैं। टूर्नामेंट के लिए पंजीकरण पूरा करने के लिए या तो एक टीम बनाएं या एक टीम में शामिल हों। टूर्नामेंट में भाग लेने के लिए केवल 4 खिलाड़ियों की एक पूरी टीम को योग्य माना जाएगा।</p>',
			active: false,
		},
		{
			id: 2,
			title: "What do I require for registering?",
			content:
				'<p>You need your mail ID, phone number and Free Fire player ID to register for the Qualcomm Snapdragon Conquest Free Fire India Open 2020.</p><p class="hindi-txt">क्वालकॉम स्नैपड्रैगन कांकुएस्ट फ्री फायर इंडिया ओपन 2020 के लिए पंजीकरण करने के लिए आपको अपनी मेल आईडी, फोन नंबर और फ्री फायर प्लेयर आईडी की आवश्यकता है।</p>',
			active: false,
		},
		{
			id: 3,
			title: "What is the player ID? Where can I find my Free Fire player ID?",
			content:
				'<ul><li>Open the Free Fire app on your device</li><li>Tap on your profile icon on the top left corner of the home screen</li><li>Under Gallery you will see your in game name and your player ID number below it.</li><li>Copy player ID number by taping on the copy button on the side of the number</li></ul><ul><li>अपने डिवाइस पर फ्री फायर ऐप खोलें</li><li>होम स्क्रीन के ऊपरी बाएँ कोने पर अपने प्रोफ़ाइल आइकन पर टैप करें</li><li>गैलरी के तहत आप अपने गेम का नाम और उसके नीचे अपना खिलाड़ी आईडी नंबर देखेंगे।</li><li>नंबर के कॉपी बटन पर टैप करके प्लेयर आईडी नंबर कॉपी करें</li></ul>',
			active: false,
		},
		{
			id: 4,
			title: "Are there any criteria for participating in the tournament?",
			content:
				'<p>Some of the important criteria includes</p><ul><li>You must be 12 years or more to be eligible to participate in the tournament.</li><li>You must be an Indian Citizen</li><li>To complete registration you must have 4 members in your team before the registration closes.</li><li>Your Free Fire account must be Level 10 or above</li></ul><p>Please read the rulebook for more detailed information <a href="/rulebook.pdf" target="_blank">Rulebook</a></p><p class="hindi-txt">कुछ महत्वपूर्ण मानदंडों में शामिल हैं</p><ul><li>टूर्नामेंट में भाग लेने के लिए आपकी आयु 12 वर्ष या उससे अधिक होनी चाहिए।</li><li>आपको भारतीय नागरिक होना चाहिए</li><li>पंजीकरण पूरा करने के लिए पंजीकरण बंद होने से पहले आपकी टीम में 4 सदस्य होने चाहिए।</li><li>आपका Free Fire खाता 10 या उससे ऊपर का स्तर होना चाहिए</li></ul><p>अधिक विस्तृत जानकारी नियम पुस्तिका के लिए कृपया <a href="/rulebook.pdf" target="_blank">नियम पुस्तक</a> पढ़ें</p>',
			active: false,
		},
		{
			id: 5,
			title: "Is there a registration cost or fee for participating in the tournament?",
			content:
				'<p>No, Qualcomm Snapdragon Conquest: Free Fire India Open 2020 is a free to participate tournament. There is no registration fee or cost involved.</p><p class="hindi-txt">नहीं, क्वालकॉम स्नैपड्रैगन कांकुएस्ट: फ्री फायर इंडिया ओपन 2020 टूर्नामेंट में भाग लेने के लिए स्वतंत्र है। इसमें कोई पंजीकरण शुल्क या लागत शामिल नहीं है।</p>',
			active: false,
		},
		{
			id: 6,
			title: "Are the registrations limited?",
			content:
				'<p>The registrations are not limited- the more the merrier!</p><p class="hindi-txt">पंजीकरण सीमित नहीं हैं- जितना ज़्यादा उतना अच्छा!</p>',
			active: false,
		},
		{
			id: 7,
			title: "When is the last day for registration?",
			content:
				'<p>The last day of registration is 20th December, 2020.</p><p class="hindi-txt">पंजीकरण का अंतिम दिन 20 दिसंबर, 2020 है।</p>',
			active: false,
		},
		{
			id: 8,
			title: "Can I add or modify team members during registrations?",
			content:
				'<p>Yes, if you are the team leader you can add or modify team members till registrations close.Please note that you cannot make changes to your team once the registrations close.</p><p class="hindi-txt">हां, यदि आप टीम लीडर हैं, तो आप पंजीकरण तक टीम के सदस्यों को जोड़ या संशोधित कर सकते हैं। कृपया ध्यान दें कि पंजीकरण बंद होने के बाद आप अपनी टीम में बदलाव नहीं कर सकते।</p>',
			active: false,
		},
		{
			id: 9,
			title: "How do I create my team?",
			content:
				'<ul><li>Go to the user dashboard.</li><li>On the Your Team panel, enter the team name, and click on Create Team</li><li>Invite 3 more of your friends to join the team</li></ul><ul><li>उपयोगकर्ता dashboard पर जाएं।.</li><li>Your Team पैनल पर, टीम का नाम दर्ज करें, और Create Team पर क्लिक करें</li><li>टीम में शामिल होने के लिए अपने 3 और दोस्तों को आमंत्रित करें</li></ul>',
			active: false,
		},
		{
			id: 10,
			title: "How do I invite players to join my team?",
			content:
				'<ul><li>Go to Your Team Section of the Dashboard</li><li>Go to the Complete your team panel</li><li>Click on "+ add player"</li><li>Copy the invite code and share it with your friends or enter your friends’ email to send them an invite link.</li></ul><ul><li>डैशबोर्ड की अपनी टीम अनुभाग पर जाएं</li><li>अपनी टीम के पैनल को पूरा करें</li><li>"+ खिलाड़ी जोड़ें" पर क्लिक करें</li><li>आमंत्रण कोड को कॉपी करें और अपने दोस्तों के साथ साझा करें या उन्हें आमंत्रित लिंक भेजने के लिए अपने दोस्तों के ईमेल दर्ज करें।</li></ul>',
			active: false,
		},
		{
			id: 11,
			title: "How do I remove a player from my team?",
			content:
				'<ul><li>Go to Your Team Section of the Dashboard</li><li>Click on the drop-down option on the top right of the player you wish to remove</li><li>Click on remove player</li></ul><p>You can invite the player back again by sharing the invite code or link.</p><ul><li>डैशबोर्ड(Dashboard) की अपनी टीम अनुभाग पर जाएं</li><li>जिस खिलाड़ी को आप हटाना चाहते हैं, उसके ऊपर दाईं ओर drop-down विकल्प पर क्लिक करें</li><li>निकालें खिलाड़ी(remove player) पर क्लिक करें</li></ul><p>आप आमंत्रित कोड या लिंक साझा करके खिलाड़ी को फिर से आमंत्रित कर सकते हैं।</p>',
			active: false,
		},
		{
			id: 12,
			title: "How do I make another player in my team the team leader?",
			content:
				'<ul><li>Go to Your Team Section of the Dashboard</li><li>Click on the drop-down option on the top right of the player you wish to make leader</li><li>Click Make Leader</li></ul><p>As a team leader you can only leave the team once you make another team member the leader.</p><ul class="hindi-txt"><li>डैशबोर्ड (Dashboard) की अपनी Team अनुभाग पर जाएं</li><li>जिस खिलाड़ी को आप लीडर बनाना चाहते हैं, उसके ऊपर दाईं ओर ड्रॉप-डाउन (drop-down) विकल्प पर क्लिक करें</li><li>मेक लीडर(Make Leader) पर क्लिक करें</li></ul><p>एक टीम लीडर के रूप में आप एक बार टीम के किसी अन्य सदस्य को नेता बनाने के बाद ही टीम छोड़ सकते हैं।</p>',
			active: false,
		},
		{
			id: 13,
			title: "How do I delete or disband a team?",
			content:
				'<p>If you are the team leader</p><ul><li>Go to Your Team Section of the Dashboard</li><li>Click on the drop-down option on the top of the team panel</li><li>Click delete team</li></ul><p>Warning: Deleting the team will cause all of the players in the team to get removed as well</p><p class="hindi-txt">अगर आप टीम लीडर हैं</p><ul><li>डैशबोर्ड (Dashboard) की अपनी टीम अनुभाग पर जाएं</li><li>टीम पैनल के शीर्ष पर स्थित ड्रॉप-डाउन(drop-down) विकल्प पर क्लिक करें</li><li>डिलीट टीम (delete team)पर क्लिक करें</li></ul><p>चेतावनी: टीम को हटाने से टीम के सभी खिलाड़ियों को हटा दिया जाएगा</p>',
			active: false,
		},
		{
			id: 14,
			title: "How do I join a team?",
			content:
				'<p>After registering your account</p><ul><li>Go to Your Team Section of the Dashboard</li><li>Click the ‘Join a team’ in the Join a team panel</li><li>Paste the invite code shared by your friends or click on find a team to join</li><li>Input either the Team Leader or Team Name in the search bar to find the team to join</li></ul><p class="hindi-txt">अपना अकाउंट रजिस्टर करने के बाद डैशबोर्ड (Dashboard)की अपनी टीम अनुभाग पर जाएं</p><ul><li>एक टीम में शामिल हों पैनल में &lsquo;एक टीम में शामिल हों&rsquo; (Join a team)पर क्लिक करें</li><li>अपने दोस्तों द्वारा साझा किए गए आमंत्रण कोड को पेस्ट करें या खोजने के लिए एक टीम खोजें पर क्लिक करें</li><li>टीम में शामिल होने के लिए टीम लीडर या टीम का नाम सर्च बार में इनपुट करें</li></ul>',
			active: false,
		},
		{
			id: 15,
			title: "How do I leave a team?",
			content:
				'<p>If you are the team leader, to leave the team you would have to assign another member of your team as the leader first. Once done you can leave the team by clicking the drop down menu on the top right of the team panel and leaving team</p><p>If you are not the team leader, you can leave the team you joined at any time by pressing the leave team below the team panel.</p><p class="hindi-txt">यदि आप टीम लीडर हैं, तो टीम को छोड़ने के लिए आपको अपनी टीम के किसी अन्य सदस्य को पहले लीडर के रूप में नियुक्त करना होगा। एक बार जब आप टीम पैनल के शीर्ष दाईं ओर ड्रॉप डाउन (drop down)मेनू पर क्लिक करके और टीम को छोड़ कर टीम छोड़ सकते हैं</p><p class="hindi-txt">यदि आप टीम लीडर नहीं हैं, तो आप किसी भी समय ज्वाइन की गई टीम को टीम पैनल के नीचे लीव टीम(leave team) दबाकर छोड़ सकते हैं।</p>',
			active: false,
		},
		{
			id: 16,
			title: "I tried joining/leaving a team or removing a team member but my status isn't updating?",
			content:
				'<p>Please refresh your browser once and you will see the updated status</p><p>कृपया अपने ब्राउज़र(browser) को एक बार रीफ़्रेश(refresh) करें और आपको अपडेट की गई स्थिति दिखाई देगी</p>',
			active: false,
		},
		{
			id: 17,
			title: "Can I register with one member in my team?",
			content:
				'<p>Unfortunately, the format does not allow for solo players to register. This is to prevent matches from becoming one- sided since teams without a full squad are bound to start with a disadvantage. However, we suggest you get your buddies to register along with you and join us on this wild ride that promises a thrilling time for everyone involved!</p><p class="hindi-txt">दुर्भाग्य से, प्रारूप एकल खिलाड़ियों को पंजीकृत करने की अनुमति नहीं देता है। यह मैचों को एकतरफा बनने से रोकने के लिए है क्योंकि बिना पूरी टीम के टीम एक नुकसान के साथ शुरुआत करने के लिए बाध्य है। हालाँकि, हमारा सुझाव है कि आप अपने मित्रों को अपने साथ पंजीकृत करवाएं और इस जंगली सवारी में शामिल हों, जो सभी के लिए रोमांचकारी समय का वादा करता है!</p>',
			active: false,
		},
		{
			id: 18,
			title: "Can I register with two members in my team?",
			content:
				'<p>Unfortunately, the format does not allow for players without 4 members in their squad to register. This is to prevent matches from becoming one- sided since teams without a full squad are bound to start with a disadvantage. However, we suggest you get your buddies to register along with you and join us on this wild ride that promises a thrilling time for everyone involved!</p><p class="hindu-txt">दुर्भाग्य से, प्रारूप 4 सदस्यों वाले खिलाड़ियों को पंजीकरण करने के लिए अनुमति नहीं देता है। यह मैचों को एकतरफा बनने से रोकने के लिए है क्योंकि बिना पूरी टीम के टीम एक नुकसान के साथ शुरुआत करने के लिए बाध्य है। हालाँकि, हमारा सुझाव है कि आप अपने मित्रों को अपने साथ पंजीकृत करवाएं और इस जंगली सवारी में शामिल हों, जो सभी के लिए रोमांचकारी समय का वादा करता है!</p>',
			active: false,
		},
		{
			id: 19,
			title: "Can I register with three members in my team?",
			content:
				'<p>Unfortunately, the format does not allow for players without 4 members in their squad to register. This is to prevent matches from becoming one- sided since teams without a full squad are bound to start with a disadvantage. However, we suggest you get your buddies to register along with you and join us on this wild ride that promises a thrilling time for everyone involved!</p><p class="hindi-txt">दुर्भाग्य से, प्रारूप 4 सदस्यों वाले खिलाड़ियों को पंजीकरण करने के लिए अनुमति नहीं देता है। यह मैचों को एकतरफा बनने से रोकने के लिए है क्योंकि बिना पूरी टीम के टीम एक नुकसान के साथ शुरुआत करने के लिए बाध्य है। हालाँकि, हमारा सुझाव है कि आप अपने मित्रों को अपने साथ पंजीकृत करवाएं और इस जंगली सवारी में शामिल हों, जो सभी के लिए रोमांचकारी समय का वादा करता है!</p>',
			active: false,
		},
		{
			id: 20,
			title: "What happens if I don’t complete my team during registrations?",
			content:
				'<p>Only a complete 4-member team will be eligible to participate in the tournament. If you don’t complete your team or are part of an incomplete team before the end of registrations, you will not be eligible to participate in the tournament.</p><p class="hindi-txt">केवल 4 सदस्यीय पूरी टीम टूर्नामेंट में भाग लेने के लिए पात्र होगी। यदि आप अपनी टीम को पूरा नहीं करते हैं या पंजीकरण समाप्त होने से पहले एक अधूरी टीम का हिस्सा हैं, तो आप टूर्नामेंट में भाग लेने के लिए पात्र नहीं होंगे।</p>',
			active: false,
		},
	];

	const registrationfaqsopen = (registrationcontent) => {
		registrationfaqs = registrationfaqs.map((s) => {
			let c = registrationfaqs.find(i =>i.active);
			s.active = false;
			if(!c || c && c.id != registrationcontent.id)
			if (s.id === registrationcontent.id) {
				s.active = true;
			}
			return s;
		});
	};

	// for Tournament
		// for Registration
	let tournamentfaqs = [
		{
			id: 1,
			title: "When does the In-game Qualifiers begin?",
			content:
				'<p>The In-game qualifiers will begin once the registrations close. Check out the schedule at <a href="/schedule">schedule</a> and follow us on Facebook, Instagram and Twitter to stay up to date on all the latest info.</p><p class="hindi-txt">पंजीकरण बंद होने के बाद इन-गेम क्वालिफायर शुरू हो जाएगा <a href="/schedule">शेड्यूल देखें</a>शेड्यूल देखें और सभी नवीनतम जानकारी पर अपडेट रहने के लिए हमें Facebook, Instagram और Twitter पर फॉलो करें।</p>',
			active: false,
		},
		{
			id: 2,
			title: "How many teams will participate in the in-game qualifiers?",
			content:
				'<p>All registered teams with all 4 team members will be eligible to participate in the In-game qualifiers.</p><p class="hindi-txt">सभी 4 टीम सदस्यों के साथ सभी पंजीकृत टीमें इन-गेम क्वालिफायर (In-game qualifiers) में भाग लेने के लिए पात्र होंगी।</p>',
			active: false,
		},
		{
			id: 3,
			title: "Can my team use substitutes who are not registered once the In-game qualifiers begin?",
			content:
				'<p>No, you cannot use unregistered players once the tournament begins.</p><p class="hindi-txt">नहीं, आप टूर्नामेंट शुरू होने के बाद अपंजीकृत खिलाड़ियों का उपयोग नहीं कर सकते।</p>',
			active: false,
		},
		{
			id: 4,
			title: "How to play the in-game qualifiers?",
			content:
				'<p>Once registered, the team will be required to play 15 classic matches (Bermuda and Kalahari) within the timeframe of the In-Game Qualifiers. Scores of 10 best matches out of the first 15 matches played will be considered for the qualification to the online playoffs.​</p><p class="hindi-txt">एक बार पंजीकृत होने के बाद, टीम को इन-गेम क्वालिफ़ायर के समय सीमा के भीतर 15 क्लासिक मैच (बरमूडा और कालाहारी)(Bermuda and Kalahari) खेलने की आवश्यकता होगी। पहले खेले गए 15 मैचों में से 10 सर्वश्रेष्ठ मैचों के स्कोर को ऑनलाइन प्लेऑफ़ के लिए योग्यता के लिए माना जाएगा।</p>',
			active: false,
		},
		{
			id: 5,
			title: "When does the online playoffs begin?",
			content:
				'<p>The online playoffs will begin once the seeding ends. Check out the <a href="/schedule">schedule</a> and follow us on Facebook, Instagram and Twitter to stay up to date on all the latest info.</p><p class="hindi-txt">सीडिंग खत्म होते ही ऑनलाइन प्लेऑफ शुरू हो जाएगा। <a href="/schedule">शेड्यूल</a> देखें और सभी नवीनतम जानकारी पर अपडेट रहने के लिए हमें Facebook, Instagram और Twitter पर फॉलो करें।</p>',
			active: false,
		},
		{
			id: 6,
			title: "How many teams will participate in the online playoffs?",
			content:
				'<p>Playoffs will be played in 3 rounds. The participating teams are as follows</p><ul class="list-items"><li>Round 1 – 648 Teams</li><li>Round 2 – 216 Teams</li><li>Round 3 – 72 Teams</li></ul><p>प्लेऑफ 3 राउंड में खेले जाएंगे। प्रतिभागी टीमें इस प्रकार हैं</p><ul class="list-items"><li>दौर 1 - 648 टीमें</li><li>दौर 2 - 216 टीमें</li><li>दौर 3 - 72 टीमें</li></ul>',
			active: false,
		},
		{
			id: 7,
			title: "What is the format for the online playoffs?",
			content:
				'<p>You can find all information on the tournament format <a href="/format">here</a></p><p class="hindi-txt">आप टूर्नामेंट प्रारूप पर सभी जानकारी <a href="/format">यहाँ</a> पा सकते हैं</p>',
			active: false,
		},
		{
			id: 8,
			title: "Where to find lobby ID and password?",
			content:
				'<p><strong>For In-game Qualifiers:</strong> There will be no lobbies for in-game qualifiers. Once registered, the team will be required to play 15 classic matches (Bermuda or Kalahari) in during the duration of the In game qualifiers. Scores of 10 best matches out of the first 15 matches played will be considered for the qualification of the online playoffs.</p><p><strong>For Playoffs, League Stage and Finals:</strong> Lobby ID and password will be shared with you via the user dashboard and also on community platforms like Whatsapp or Discord before the match by tournament organizers. You will receive an invite link to the community.​</p><p>इन-गेम क्वालिफायर के लिए कोई लॉबी नहीं होगी। एक बार पंजीकृत होने के बाद, टीम को इन गेम क्वालिफायर की अवधि के दौरान 15 क्लासिक मैच (बरमूडा या कालाहारी) खेलने की आवश्यकता होगी। पहले खेले गए 15 मैचों में से 10 सर्वश्रेष्ठ मैचों के स्कोर को ऑनलाइन प्लेऑफ़ की योग्यता के लिए माना जाएगा।</p><p><strong>प्लेऑफ, लीग स्टेज और फाइनल</strong> के लिए: लॉबी आईडी और पासवर्ड को उपयोगकर्ता डैशबोर्ड के माध्यम से और टूर्नामेंट आयोजकों द्वारा मैच से पहले व्हाट्सएप (Whatsapp) या डिस्कॉर्ड (Discord) जैसे सामुदायिक प्लेटफार्मों पर भी आपके साथ साझा किया जाएगा। आपको समुदाय के लिए एक निमंत्रण लिंक प्राप्त होगा।</p>',
			active: false,
		},
		{
			id: 9,
			title: "How many teams will participate in the League Stage?",
			content:
				'<p>18 qualifying teams and 6 Invited teams will be participate in the League Stage.</p><p class="hindi-txt">लीग चरण में 18 क्वालीफाइंग टीमें और 6 आमंत्रित टीमें भाग लेंगी।</p>',
			active: false,
		},
		{
			id: 10,
			title: "What is the format for the league stage?",
			content:
				'<p>You can find all information on the tournament format <a href="/format">here</a></p><p>आप टूर्नामेंट प्रारूप पर सभी जानकारी <a href="/format">यहाँ</a> पा सकते हैं</p>',
			active: false,
		},
		{
			id: 11,
			title: "How many teams will participate in the finals?",
			content:
				'<p>12 Teams will participate in the finals.</p><p class="hindi-txt">12 टीमें फाइनल में हिस्सा लेंगी।</p>',
			active: false,
		},
		{
			id: 12,
			title: "What is the format for the finals?",
			content:
				'<p>You can find all information on the tournament format <a href="/format">here</a></p><p class="hindi-txt">आप टूर्नामेंट प्रारूप पर सभी जानकारी <a href="/format">यहाँ</a> पा सकते हैं</p>',
			active: false,
		},
		{
			id: 13,
			title: "How will the Team get to know if they are qualified?",
			content:
				'<p>They will be receiving a Mail, Message and Call to the registered contact details</p><p class="hindi-txt">वे पंजीकृत संपर्क विवरणों को एक मेल(Mail), संदेश (Message)और कॉल(Call) प्राप्त करेंगे</p>',
			active: false,
		}
	];

	const tournamentfaqsopen = (tournamentcontent) => {
		tournamentfaqs = tournamentfaqs.map((s) => {
			let c = tournamentfaqs.find(i =>i.active);
			s.active = false;
			if(!c || c && c.id != tournamentcontent.id)
			if (s.id === tournamentcontent.id) {
				s.active = true;
			}
			return s;
		});
	};
</script>
<svelte:head>
	<link
		href="https://fonts.googleapis.com/icon?family=Material+Icons"
		rel="stylesheet" />
</svelte:head>
<div class="banner-section">
	<h1 class="main-heading">Frequently asked questions</h1>
</div>
<Tabs>
	<TabList>
		<Tab>General</Tab>
		<Tab>Registrations</Tab>
		<Tab>Tournament</Tab>
	</TabList>
	<TabPanel>
		<div class="faq-section container">
			{#each generalfaqs as generalfaqcontent}
				<div class="accordion">
					<div class="row no-gutters">
						<div class="col-lg-12 col-sm-12 col-xs-12">
							<div class="accordion-list" on:click={() => expand(generalfaqcontent)}>
								<span class="question-title">{generalfaqcontent.title}</span>
								<span style="float:right;" class="material-icons plus-icon">{generalfaqcontent.active ? 'remove_circle_outline' : 'add_circle_outline'}</span>
							</div>
						</div>
					</div>
					{#if generalfaqcontent.active}
						<div class="slider row no-gutters" transition:slide on:click={() => expand(!generalfaqcontent)} >
							<div class="col-12">
								<div class="section-text">{@html generalfaqcontent.content}</div>
							</div>
						</div>
					{/if}
				</div>
			{/each}
		</div>
	</TabPanel>
	<TabPanel>
		<div class="faq-section container">
			{#each registrationfaqs as registrationcontent}
				<div class="accordion">
					<div class="row no-gutters">
						<div class="col-lg-12 col-sm-12 col-xs-12">
							<div class="accordion-list" on:click={() => registrationfaqsopen(registrationcontent)}>
								<span class="question-title">{registrationcontent.title}</span>
								<span style="float:right;" class="material-icons plus-icon">{registrationcontent.active ? 'remove_circle_outline' : 'add_circle_outline'}</span>
							</div>
						</div>
					</div>
					{#if registrationcontent.active}
						<div class="slider row no-gutters" transition:slide on:click={() => registrationfaqsopen(!registrationcontent)} >
							<div class="col-12">
								<div class="section-text">{@html registrationcontent.content}</div>
							</div>
						</div>
					{/if}
				</div>
			{/each}
		</div>
	</TabPanel>
	<TabPanel>
		<div class="faq-section container">
			{#each tournamentfaqs as tournamentcontent}
				<div class="accordion">
					<div class="row no-gutters">
						<div class="col-lg-12 col-sm-12 col-xs-12">
							<div class="accordion-list" on:click={() => tournamentfaqsopen(tournamentcontent)}>
								<span class="question-title">{tournamentcontent.title}</span>
								<span style="float:right;" class="material-icons plus-icon">{tournamentcontent.active ? 'remove_circle_outline' : 'add_circle_outline'}</span>
							</div>
						</div>
					</div>
					{#if tournamentcontent.active}
						<div class="slider row no-gutters" transition:slide on:click={() => tournamentfaqsopen(!tournamentcontent)} >
							<div class="col-12">
								<div class="section-text">{@html tournamentcontent.content}</div>
							</div>
						</div>
					{/if}
				</div>
			{/each}
		</div>
	</TabPanel>
</Tabs>
<div class="container">
	<div class="row">
		<div class="col">
			<p>
				For additional support, please contact us at <a href="mailto:someone@example.com">support@snapdragonconquest.com</a>
			</p>
		</div>
	</div>
</div>
<style>
	.banner-section {
		margin: 0;
		height: 200px;
		/* background-color: #4675ea; */
		background: url("../images/banner.png") no-repeat center;
		background-size: cover;
	}

	.main-heading {
		letter-spacing: 0;
		font-family:'Qualcomm Next Medium';
		color: #ffffff;
		font-size: 42px;
		font-stretch: normal;
		font-style: normal;
		line-height: normal;
		letter-spacing: normal;
		text-align: center;
		padding: 79px 0 78px 0;
	}

	.faq-section {
		color: #0b2742;
		padding: 40px 10px;	
	}

	.accordion-list {
		cursor: pointer;
		padding: 20px 0;
		border-bottom: 1px solid rgba(103, 119, 144, 0.5);
	}

	.accordion-list .material-icons {
		color: #677790;
	}

	.section-text {
		letter-spacing: 0;
		color: #0b2742;
		font-size: 18px;
		font-weight: normal;
		font-stretch: normal;
		font-style: normal;
		line-height: 1.5;
		letter-spacing: normal;
		cursor: pointer;
	}

	.slider {
		padding-top: 40px;
	}
	
	.material-icons{
		color: #677790;
		cursor: pointer;
	}

	.hindi-txt {
		margin-top: 20px;
	}

	.active {
		color: #000000;
	}
</style>