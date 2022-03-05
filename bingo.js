$(document).ready(function(){

	var newpath;
	$('#faceselect').change(function() {
		var newface = $('#faceselect option:selected').val();
		newpath = "url('img/" + newface + ".png')";
		console.log(newpath);
		$('#dabsample').css('background-image', newpath);
	})

	var col1 = [
		'"Small Little"',
		'"Spoiler"/ "Exclusive Preview"',
		'Sl1pg8r lingo',
		'[Hermit] went to bed. Sweet Dreams.',
		'In-Game Chat',
		'Mimicking Villager Honks',
		'Namecheck HC Recap or Elybeatmaker',
		'"Derp" or "Spoon"',
		'Namecheck a Mojang Employee',
        'Someone Else\'s Base',
        'Inside of an Ender Chest',
        'Getting stuck in a door',
        'Build palette reference',
        '"Decked Out"',
        'Riding a mob',
	];

	var col2 = [
		"n1tpiCkY c0mm3nt",
		"Commenter shoutout",
		"Patreon Plug",
		"Merch Plug",
		"Twitch/2nd Channel Plug",
		"\"Comment / Like / Subscribe / Bell\"",
		"Fortune Pick Guessing Game",
		"\"FIRST\" Comment",
		"Creative World",
		"Twitter Plug",
        "Sponsored content",
        "Weird Docm contraption",
        "Moving Mobs",
        'Wandering trader',
        'Collab',
	];

	var col3 = [
		"Time Lapse",
		"Accidental Asymmetry",
		"Completely full inventory",
		"Hermit Death",
		"Screenshot",
		"Baby Zombie Panic",
		"Cheaty Zoom Key",
		"Elytra Mishap",
		"Explosion",
		"Over Half Empty Hunger Bar",
		"Found diamonds!",
		"Side torch",
        "Bed missing or obstructed",
        "Chest monster",
        "The Moon",
	];

	var col4 = [
		"Flying Background Hermit",
		"Cam Account Login/Logout",
		"Wither Bwongg / Dragon Death Crackle",
		"Posed Armor Stand",
		"Shopping District Trip",
		"React to Another Hermit's Build",
		"More than 3 chickens in frame",
		"Llama!",
		"Leaping Dolphin",
		"Named Mob",
		"Mob in a boat",
        "Totem of Undying",
        "Dreading a nether trip",
        "Running out of bubbles",
        "Shop with a punny name",
	];

	col5 = [
		"Java.io.exception",
		"Debug screen",
		"\"[Any MC version number]\"",
		"Bedrock or Build Limit",
		"Protracted Redstoning",
		"Namecheck Hivemind/ Scicraft/ Contraption maker",
		"Mob Farm",
		"\"Optifine\"",
		"\"Lag!\" /  \"#blameMumbo\"",
        "Somebody Roleplaying",
        "Game version confusion",
        "Phantoms",
        "Running out of rockets",
        "Guardian Temple",
        "Build without a back or interior",
	]

	function shufflePop(arr,i,skipmiddle) {
		var shuffled = arr.sort(() => .5 - Math.random());

		if (skipmiddle) {
			var selected = shuffled.slice(0,4);
			var selectorNums = [
				'#c' + (0 + i) + " span",
				'#c' + (5 + i) + " span",
				'#c' + (15 + i) + " span",
				'#c' + (20 + i) + " span",
			];
		} else {
			var selected = shuffled.slice(0,5);
			var selectorNums = [
				'#c' + (0 + i) + " span",
				'#c' + (5 + i) + " span",
				'#c' + (10 + i) + " span",
				'#c' + (15 + i) + " span",
				'#c' + (20 + i) + " span",
			];
		}
		for (var i = 0; i < selectorNums.length; i++) {
			$(selectorNums[i]).text(selected[i]);
		}

	}
	shufflePop(col1,1);
	shufflePop(col2,2);
	shufflePop(col3,3,true);
	shufflePop(col4,4);
	shufflePop(col5,5);

	$('.cell').click(function() {
		if ($(this).css('background-image') != 'none') {
			$(this).css({
				'background-image': 'none',
				'background-color': 'rgba(255,255,255,0.8)'
			});
		} else {
			var newface = $('#faceselect option:selected').val();
			newpath = "url('img/" + newface + ".png')";
			$(this).css({
				'background-image': newpath,
				'background-color': 'rgba(255,255,255,0.4)',
				'background-blend-mode': 'lighten'
			});
		}
	})
});// end jquery
