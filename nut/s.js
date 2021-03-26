
// use https://minify.js.org/js

/*

Code by ScaleDrone 
Edited by Heliodex

Sup, fellow code snooper?

*/

let sample = { id: 'tEsTiNgLmAo1', clientData: { name: 'Somebody', color: '#00aa00' } }
let timestamp = { id: 'tEsTiNgLmAo2', clientData: { name: 'error', color: '#aaaaaa' } }

let members = [];

const CLIENT_ID = 'Bw93fYAFVzJ2X5qa';

const drone = new ScaleDrone(CLIENT_ID, {
	data: { // Will be sent out as clientData via events
			name: getName(),
			color: getColour(),
	},
});

//let colourcode = "-b";

drone.on('open', error => {
	if (error) {
		return console.error(error);
	}
	console.log('Successfully connected to Scaledrone');

	const room = drone.subscribe('observable-room-thing', {
		//historyCount: 5
	});

	/*room.on('history_message', (data, member) => {
		console.log(data);
		console.log(member);
		//addMessageToListDOM(data);
	});*/


	room.on('open', error => {
		if (error) {
			return console.error(error);
		}
		console.log('Successfully joined room');
	});

	room.on('members', m => {
		members = m;
		updateMembersDOM();
	});

	room.on('member_join', member => {
		members.push(member);
		updateMembersDOM();
		//console.log(console.log(member);
		sample.clientData.name = member.clientData.name;
		//console.log(sample.clientData.name)
		sample.clientData.color = member.clientData.color

		addMessageToListDOM("has joined", sample); // needs to be better
		
	});

	room.on('member_leave', ({id}) => {
		addMessageToListDOM("has left", sample); // this don work duh
		const index = members.findIndex(member => member.id === id);
		members.splice(index, 1);
		updateMembersDOM();
	});

	room.on('data', (text, member) => {
		if (member) {
			addMessageToListDOM(text, member);
		} else {
			addMessageToListDOM(text, null);
			// if no member, message must be from server
		}
	});
});

drone.on('close', event => {
	console.log('Connection was closed', event);
});

drone.on('error', error => {
	console.error(error);
});

function getName() {

	var person = prompt("Pick a username...");

	if (person) {
 
		// wtf is this
		space1 = /(\s)+/i

		check1 = person.toLowerCase().indexOf("admin")
		check2 = person.toLowerCase().indexOf("admln")
		check3 = person.toLowerCase().indexOf("mod")
		check4 = person.toLowerCase().indexOf("undefined")
		check5 = person.toLowerCase().indexOf("somebody")
		check6 = person.toLowerCase().indexOf("designer")

		swear1 = person.toLowerCase().indexOf(atob("c2hpdA==")) // repl.it mods please dont ban me
		swear2 = person.toLowerCase().indexOf(atob("ZnVjaw=="))
		swear3 = person.toLowerCase().indexOf(atob("Y3VudA=="))
		swear4 = person.toLowerCase().indexOf(atob("bmlnZ2Vy"))
		swear5 = person.toLowerCase().indexOf(atob("bmlnZXI="))
	}

	if (person == null || person == "") 
	{
		//txt = adjs[Math.floor(Math.random() * adjs.length)] + "-" + nouns[Math.floor(Math.random() * nouns.length)]
		alert("Your username cannot be blank.");
		getName();
	}
	
	else if (check1 > -1 || check2 > -1 || check3 > -1 || check4 > -1 || check5 > -1 || check6 > -1) 
	{
		alert("Your username contains a reserved word.");
		getName();
	}	

	else if (space1.test(person) == true) 
	{
		alert("Your username can't contain spaces. Use - or _ instead.");
		getName();
	}
	
	else if (swear1 > -1 || swear2 > -1 || swear3 > -1 || swear4 > -1 || swear5 > -1) 
	{
		alert("Your username contains an expletive.");
		getName();
	} 

	else if (person.length > 20) 
	{
		alert("Your username is too long.");
		getName();
	} 
	
	else if (sha512(person) == "b7405bdfcc44115d902266ece936eea84f0fc14a39e70a6e3f75ee2808d4d560934f1a6c4d554c4f89ccacdecf267bb86bb9b58587a4f5c3410042771f0f897e")
	{
		txt = "Mod";
	} 
	
	else if (sha512(person) == "dee374dfdc97d4f0764f1b7fd26a346ff8b70ab1d266a2788ff4cae2956a55558d1879d25e695797db1656f503cfec4835cab81579fc78a2c46fbb18ac131a47")
	{
		// "I already fixed it, and YOU are NOT coming back." - GLaDOS, Portal 2
		txt = "Admin";
	} 

	else if (sha512(person) == "60da12180b59148cc16e76d06bbf713c251f0cf86d41628e015106d78747f4766c25f11c9e6a134db8e5ee7b868eaaa0b8b1a66bdd467c40725aa8cade1c8120")
	{
		txt = "Designer";
	} 

	else if (sha512(person) == "91fa6a52ad3ecd89f0c7607078cd217842dd9a670096d2f29747de831c429dd2a6a12786c5e699b4443aef8db4a2574bad42aeee59901da1c4558b1a6d648b99")
	{
		txt = "";
	} 

	

	/*else if (person.endsWith("-b"))
	{
		txt = person.replace('-b','')
		//colourcode = "-b";
	} */

	else 
	{
		txt = person;
	}

	if (members.length > 19) 
	{
		alert("The chatroom is currently full. Press OK to try again.");
		getName();
	}

	return (txt);
}

function getColour() {
	//console.log(txt)
	if (txt == "Admin") 
	{
		return "#ff0000";
	}

	if (txt == "Mod") 
	{
		return "#0000ff";
	}

	/*else if (colourcode = "-b") 
	{
		return "#0000ff";
	}*/

	else if (txt == "Designer") 
	{
		return "#00cccc";
	}

	else if (txt == "yeet") 
	{
		return "#cccc00";
	}

	else 
	{
		var test = Math.ceil(Math.random()*5)
		if (test == 1)
		{
			return "#555555";
		}
		else if (test == 2)
		{
			return "#666666";
		}
		else if (test == 3)
		{
			return "#777777";
		}
		else if (test == 4)
		{
			return "#888888";
		}
		else if (test == 5)
		{
			return "#999999";
		}
	}
	
}

//------------- DOM STUFF

const DOM = {
	membersCount: document.querySelector('.members-count'),
	membersCount1: document.querySelector('.members-count1'),
	membersCount2: document.querySelector('.members-count2'),
	membersList: document.querySelector('.members-list'),
	messages: document.querySelector('.messages'),
	input: document.querySelector('.message-form__input'),
	form: document.querySelector('.message-form'),
};

DOM.form.addEventListener('submit', sendMessage);

function sendMessage() {
	const value = DOM.input.value;

	// wtf
	empty1 = /(\w)+/i


	if (!value || empty1.test(value) == false)
	{
		return;
	}

	// swear testing

	swear1 = value.toLowerCase().indexOf(atob("c2hpdA==")); // repl.it mods please dont ban me
	swear2 = value.toLowerCase().indexOf(atob("ZnVjaw=="));
	swear3 = value.toLowerCase().indexOf(atob("Y3VudA=="));
	swear4 = value.toLowerCase().indexOf(atob("bmlnZ2Vy"));
	swear5 = value.toLowerCase().indexOf(atob("bmlnZXI="))

	// wtf is this also aaaaaaaaaaaaaa
	nicetry1 = /has(\s)*joined/i
	nicetry2 = /has(\s)*left/i

	

	if (swear1 > -1 || swear2 > -1 || swear3 > -1 || swear4 > -1 || swear5 > -1 ) 
	{
		alert("Your message was not sent because it contained an expletive.");
		return;
	}
	else if (nicetry1.test(value) == true || nicetry2.test(value) == true) 
	{
		alert("haha nice try.");
		return;
	}

	DOM.input.value = '';
	drone.publish({
		room: 'observable-room-thing',
		message: value,
	});

	//console.log(value);
}

function createMemberElement(member, ts) {
	const { name, color } = member.clientData;
	var el = document.createElement('div');
	if (ts == true)
	{
		el = document.createElement('i');
	}
	
	el.appendChild(document.createTextNode(name));
	el.className = 'member';
	el.style.color = color;
	return el;
}

function updateMembersDOM() {
	//console.log(members.length)
	
	if (members.length == 1) {
		DOM.membersCount1.innerHTML = `You are ${txt}.`;
		
		DOM.membersCount2.innerHTML = `  You are the only person here. (max 20)`;
	}

	// yeet legit code

	else {
		DOM.membersCount1.innerHTML = `You are ${txt}.`;

		DOM.membersCount2.innerHTML = `  ${members.length} people are here. (max 20)`;
	}
	
	DOM.membersList.innerHTML = '';
	members.forEach(member =>
		DOM.membersList.appendChild(createMemberElement(member))
	);
}


function createMessageElement(text, member) {
	var today = new Date();

	const el = document.createElement('div');
	el.appendChild(createMemberElement(member, false));
	el.appendChild(document.createTextNode(text));
	el.appendChild(document.createTextNode(" "));

	today2 = today.toTimeString(); 
	timestamp.clientData.name = today2.substring(0,5);;
	el.appendChild(createMemberElement(timestamp, true));
	el.className = 'message';
	return el;
}

function addMessageToListDOM(text, member) {
	const el = DOM.messages;
	const wasTop = el.scrollTop === el.scrollHeight - el.clientHeight;
	el.appendChild(createMessageElement(text, member));
	if (wasTop) {
		el.scrollTop = el.scrollHeight - el.clientHeight;
	}
}

// Sup, fellow code snooper?
 