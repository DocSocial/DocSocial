let sample={id:"tEsTiNgLmAo1",clientData:{name:"Somebody",color:"#00aa00"}},timestamp={id:"tEsTiNgLmAo2",clientData:{name:"error",color:"#aaaaaa"}},members=[];const CLIENT_ID="Bw93fYAFVzJ2X5qa",drone=new ScaleDrone(CLIENT_ID,{data:{name:getName(),color:getColour()}});function getName(){var e=prompt("Pick a username...");return e&&(space1=/(\s)+/i,check1=e.toLowerCase().indexOf("admin"),check2=e.toLowerCase().indexOf("admln"),check3=e.toLowerCase().indexOf("mod"),check4=e.toLowerCase().indexOf("undefined"),check5=e.toLowerCase().indexOf("somebody"),check6=e.toLowerCase().indexOf("designer"),inject1=e.toLowerCase().indexOf("<"),inject2=e.toLowerCase().indexOf(">"),swear1=e.toLowerCase().indexOf(atob("c2hpdA==")),swear2=e.toLowerCase().indexOf(atob("ZnVjaw==")),swear3=e.toLowerCase().indexOf(atob("Y3VudA==")),swear4=e.toLowerCase().indexOf(atob("bmlnZ2Vy")),swear5=e.toLowerCase().indexOf(atob("bmlnZXI="))),null==e||""==e?(alert("Your username cannot be blank."),getName()):check1>-1||check2>-1||check3>-1||check4>-1||check5>-1||check6>-1?(alert("Your username contains a reserved word."),getName()):1==space1.test(e)?(alert("Your username can't contain spaces. Use - or _ instead."),getName()):inject1>-1||inject2>-1?(alert("Your username can't contain those characters for security reasons."),getName()):swear1>-1||swear2>-1||swear3>-1||swear4>-1||swear5>-1?(alert("Your username contains an expletive."),getName()):e.length>20?(alert("Your username is too long."),getName()):"b7405bdfcc44115d902266ece936eea84f0fc14a39e70a6e3f75ee2808d4d560934f1a6c4d554c4f89ccacdecf267bb86bb9b58587a4f5c3410042771f0f897e"==sha512(e)?txt="Mod":"dee374dfdc97d4f0764f1b7fd26a346ff8b70ab1d266a2788ff4cae2956a55558d1879d25e695797db1656f503cfec4835cab81579fc78a2c46fbb18ac131a47"==sha512(e)?txt="Admin":"60da12180b59148cc16e76d06bbf713c251f0cf86d41628e015106d78747f4766c25f11c9e6a134db8e5ee7b868eaaa0b8b1a66bdd467c40725aa8cade1c8120"==sha512(e)?txt="Designer":"91fa6a52ad3ecd89f0c7607078cd217842dd9a670096d2f29747de831c429dd2a6a12786c5e699b4443aef8db4a2574bad42aeee59901da1c4558b1a6d648b99"==sha512(e)?txt="":txt=e,members.length>19&&(alert("The chatroom is currently full. Press OK to try again."),getName()),txt}function getColour(){if("Admin"==txt)return"#ff0000";if("Mod"==txt)return"#0000ff";if("Designer"==txt)return"#00cccc";if("yeet"==txt)return"#cccc00";var e=Math.ceil(5*Math.random());return 1==e?"#555555":2==e?"#666666":3==e?"#777777":4==e?"#888888":5==e?"#999999":void 0}drone.on("open",e=>{if(e)return console.error(e);console.log("Successfully connected to Scaledrone");const t=drone.subscribe("observable-room-thing",{});t.on("open",e=>{if(e)return console.error(e);console.log("Successfully joined room")}),t.on("members",e=>{members=e,updateMembersDOM()}),t.on("member_join",e=>{members.push(e),updateMembersDOM(),sample.clientData.name=e.clientData.name,sample.clientData.color=e.clientData.color,addMessageToListDOM("has joined",sample)}),t.on("member_leave",({id:e})=>{addMessageToListDOM("has left",sample);const t=members.findIndex(t=>t.id===e);members.splice(t,1),updateMembersDOM()}),t.on("data",(e,t)=>{addMessageToListDOM(e,t||null)})}),drone.on("close",e=>{console.log("Connection was closed",e)}),drone.on("error",e=>{console.error(e)});const DOM={membersCount:document.querySelector(".members-count"),membersCount1:document.querySelector(".members-count1"),membersCount2:document.querySelector(".members-count2"),membersList:document.querySelector(".members-list"),messages:document.querySelector(".messages"),input:document.querySelector(".message-form__input"),form:document.querySelector(".message-form")};function sendMessage(){const e=DOM.input.value;empty1=/(\w)+/i,e&&0!=empty1.test(e)&&(swear1=e.toLowerCase().indexOf(atob("c2hpdA==")),swear2=e.toLowerCase().indexOf(atob("ZnVjaw==")),swear3=e.toLowerCase().indexOf(atob("Y3VudA==")),swear4=e.toLowerCase().indexOf(atob("bmlnZ2Vy")),swear5=e.toLowerCase().indexOf(atob("bmlnZXI=")),nicetry1=/has(\s)*joined/i,nicetry2=/has(\s)*left/i,swear1>-1||swear2>-1||swear3>-1||swear4>-1||swear5>-1?alert("Your message was not sent because it contained an expletive."):1!=nicetry1.test(e)&&1!=nicetry2.test(e)?(DOM.input.value="",drone.publish({room:"observable-room-thing",message:e})):alert("haha nice try."))}function createMemberElement(e,t){const{name:a,color:r}=e.clientData;var o=document.createElement("div");return 1==t&&(o=document.createElement("i")),o.appendChild(document.createTextNode(a)),o.className="member",o.style.color=r,o}function updateMembersDOM(){1==members.length?(DOM.membersCount1.innerHTML=`You are ${txt}.`,DOM.membersCount2.innerHTML="  You are the only person here. (max 20)"):(DOM.membersCount1.innerHTML=`You are ${txt}.`,DOM.membersCount2.innerHTML=`  ${members.length} people are here. (max 20)`),DOM.membersList.innerHTML="",members.forEach(e=>DOM.membersList.appendChild(createMemberElement(e)))}function createMessageElement(e,t){var a=new Date;const r=document.createElement("div");return r.appendChild(createMemberElement(t,!1)),r.appendChild(document.createTextNode(e)),r.appendChild(document.createTextNode(" ")),today2=a.toTimeString(),timestamp.clientData.name=today2.substring(0,5),r.appendChild(createMemberElement(timestamp,!0)),r.className="message",r}function addMessageToListDOM(e,t){const a=DOM.messages,r=a.scrollTop===a.scrollHeight-a.clientHeight;a.appendChild(createMessageElement(e,t)),r&&(a.scrollTop=a.scrollHeight-a.clientHeight)}DOM.form.addEventListener("submit",sendMessage);
