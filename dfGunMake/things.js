function generateCommand() {

	var command = "/give @p "+$("itemId").value+"{HideFlags:127, PublicBukkitValues:{";// }}
	command += '"hypercube:atype":"'+$("atype").value.toLowerCase()+'",';
	command += '"hypercube:cd":'+$("cd").value+'d,';
	command += '"hypercube:wep":"'+$("id").value+'",';
	command += '"hypercube:ammo":'+$("ammo").value+'d,';
	command += '"hypercube:rbdmg":"'+$("rbdmg").value+'",';
	command += '"hypercube:fires":'+$("fires").value+'d,';
	command += '"hypercube:rr":"'+$("rr").value+'",';
	command += '"hypercube:type": "gun",';
	command += '"hypercube:id":"'+$("id").value+'",';
	command += '"hypercube:clip":"'+$("atype").value.toLowerCase()+'",';
	command += '"hypercube:rreload":"'+$("rreload").value+'",';
	command += '"hypercube:maxammo":'+$("ammo").value+'d,';
	command += '"hypercube:wait":'+$("wait").value+'d';

	command += "}, display: { Name: '{\"text\":\"Generated Gun\"}', Lore: ["; // ]}}
	var a = '\'{"extra":[{"italic":false,"color":';
	var b = '}],"text":""}\'';

	command += a +'"blue","text":"Firearm"'+ b + ",";
	command += a +'"blue","text":""'+ b + ",";
	command += a +'"#8F8F8F","text":"'+$("gunType").value+'"'+ b + ",";
	command += '\'{"extra":[{"italic":false,"color":"#DBDBDB","text":" - "}, {"italic":false,"color":"gray","text":"Uses '+$("atype").value+' Ammo"}],"text":""}\',';
	command += a +'"blue","text":""'+ b + ",";
	command += a + '"dark_gray","italic":"true","text":"Description"' + b + "";
	command += "]}}";

	$("commandOutput-ta").value = command;

	/*

	/give @p minecraft:leather_horse_armor{HideFlags:127,
		PublicBukkitValues:{
			"hypercube:atype":"basic",
			"hypercube:cd":20d,
			"hypercube:wep":"reincarnation",
			"hypercube:ammo":3.0d,
			"hypercube:rbdmg":"20;30",
			"hypercube:fires":1.0d,
			"hypercube:rr":"epic;legendary",
			"hypercube:type":"gun",
			"hypercube:id":"reincarnation",
			"hypercube:clip":"basic",
			"hypercube:rreload":"40;30",
			"hypercube:maxammo":3.0d,
			"hypercube:wait":0.0d
		},
		display: {
			Name: '{"text":"Generated Gun"}',
			Lore: [ 
				'{"extra":[{"bold":false,"italic":false,"underlined":false,"strikethrough":false,"obfuscated":false,"color":"blue","text":"Firearm"}],"text":""}',
				'{"extra":[{"bold":false,"italic":false,"underlined":false,"strikethrough":false,"obfuscated":false,"color":"gray","text":""}],"text":""}',
				'{"extra":[{"bold":false,"italic":false,"underlined":false,"strikethrough":false,"obfuscated":false,"color":"#8F8F8F","text":"Rifle"}],"text":""}',

				'{"extra":[{"bold":false,"italic":false,"underlined":false,"strikethrough":false,"obfuscated":false,"color":"gray","text":" "},
				{"bold":false,"italic":false,"underlined":false,"strikethrough":false,"obfuscated":false,"color":"#DBDBDB","text":"- "},
				{"italic":false,"color":"gray","text":"Uses Basic Ammo"}],"text":""}',
				
				'{"extra":[{"bold":false,"italic":false,"underlined":false,"strikethrough":false,"obfuscated":false,"color":"dark_gray","text":""}],"text":""}',
				'{"extra":[{"bold":false,"italic":true,"underlined":false,"strikethrough":false,"obfuscated":false,"color":"dark_gray","text":"\\"Reborn\\""}],"text":""}'
			]
		}
	} 1

	*/
}

function $(x) {
	return document.getElementById(x);
}
