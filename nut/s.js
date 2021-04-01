let sample={id:"tEsTiNgLmAo1",clientData:{name:"Somebody",color:"#00aa00"}},timestamp={id:"tEsTiNgLmAo2",clientData:{name:"error",color:"#aaaaaa"}},members=[];const CLIENT_ID="Bw93fYAFVzJ2X5qa";let name1=getName();const drone=new ScaleDrone(CLIENT_ID,{data:{name:name1.txt,color:getColour(name1.test)}});function getName(){var e=!1;members.length>19&&(alert("The chatroom is currently full. Press OK to try again."),getName());var a=prompt("Pick a username...");if(a&&(space1=/(\s)+/i,check1=a.toLowerCase().indexOf("admin"),check2=a.toLowerCase().indexOf("admln"),check3=a.toLowerCase().indexOf("mod"),check4=a.toLowerCase().indexOf("undefined"),check5=a.toLowerCase().indexOf("somebody"),check6=a.toLowerCase().indexOf("designer"),inject1=a.toLowerCase().indexOf("<"),inject2=a.toLowerCase().indexOf(">"),swear1=a.toLowerCase().indexOf(atob("c2hpdA==")),swear2=a.toLowerCase().indexOf(atob("ZnVjaw==")),swear3=a.toLowerCase().indexOf(atob("Y3VudA==")),swear4=a.toLowerCase().indexOf(atob("bmlnZ2Vy")),swear5=a.toLowerCase().indexOf(atob("bmlnZXI=")),swear6=a.toLowerCase().indexOf(atob("bmlnZ2E=")),swear7=a.toLowerCase().indexOf(atob("ZmFn"))),null==a||""==a)alert("Your username cannot be blank."),getName();else if(check1>-1||check2>-1||check3>-1||check4>-1||check5>-1||check6>-1)alert("Your username contains a reserved word."),getName();else if(1==space1.test(a))alert("Your username can't contain spaces. Use - or _ instead."),getName();else if(swear1>-1||swear2>-1||swear3>-1||swear4>-1||swear5>-1||swear6>-1||swear7>-1)alert("Your username contains an expletive."),getName();else if(a.length>20)alert("Your username is too long. The limit is 20 characters."),getName();else if("6c7fc3a511a83807c4c777db1fb21ba02ea79a9986100342ebc739f0bd51ee98483d1ddb2000d90a8170048aaf43a881314365d6d9e73033e02e8ad7e45778fb"==sha512(sha512(a)))txt="Mod";else if("ec260e24f955f9d58129053e85f0194270a272059178c4fa47c85c3d8b4dc0734eb6760c4b5ea1e0f1f84c88f51c4a9cf4777e2acf5400678c790a99ebaa445e"==sha512(sha512(a))){e=!0;txt=prompt(atob("U0VDUkVUIENMQVNJRklFRCBBRE1JTklTVFJBVElPTiBDT0RFLiBUWVBFIElOIE1BSU5GUkFNRSBDT0RFQywgU1lTVEVNIFdJTEwgSU5JVElBVEUs"))}else"638efcfa0693bbc9150769d396d0eb9a76cbf62547a7a817085f9d94eb72a7d322ccb9845098c596fd5c2faeee7a3b66da80c041165eae3f6e5fbe87525109d4"==sha512(sha512(a))?txt="Designer":"d72e16c4af2d3d8bdac592e9014e36a950515f3bb382534b11a6efd24c79ce3c3d52b02055c6bb69c6ca25cd16ea6e694af780f2cc7a2493b6a935b352d03a50"==sha512(sha512(a))?txt="":(a=(a=a.replace("<","")).replace(">",""),txt=a);return{txt:txt,test:e}}function getColour(e){if(1==e)return"#ff0000";if("Mod"==txt)return"#0000ff";if("Designer"==txt)return"#00cccc";if("yeet"==txt)return"#cccc00";var a=Math.ceil(5*Math.random());return 1==a?"#555555":2==a?"#666666":3==a?"#777777":4==a?"#888888":5==a?"#999999":void 0}drone.on("open",e=>{if(e)return console.error(e);console.log("Successfully connected to Scaledrone");const a=drone.subscribe("observable-room-thing",{});a.on("open",e=>{if(e)return console.error(e);console.log("Successfully joined room")}),a.on("members",e=>{members=e,updateMembersDOM()}),a.on("member_join",e=>{members.push(e),updateMembersDOM(),sample.clientData.name=e.clientData.name,sample.clientData.color=e.clientData.color,addMessageToListDOM("has joined",sample)}),a.on("member_leave",({id:e})=>{addMessageToListDOM("has left",sample);const a=members.findIndex(a=>a.id===e);members.splice(a,1),updateMembersDOM()}),a.on("data",(e,a)=>{addMessageToListDOM(e,a||null)})}),drone.on("close",e=>{console.log("Connection was closed",e)}),drone.on("error",e=>{console.error(e)});const DOM={membersCount:document.querySelector(".members-count"),membersCount1:document.querySelector(".members-count1"),membersCount2:document.querySelector(".members-count2"),membersList:document.querySelector(".members-list"),messages:document.querySelector(".messages"),input:document.querySelector(".message-form__input"),form:document.querySelector(".message-form")};function sendMessage(){var e=DOM.input.value;e=e.trim(),empty1=/^(?!\s+$).+/i,e&&0!=empty1.test(e)&&(swear1=e.toLowerCase().indexOf(atob("c2hpdA==")),swear2=e.toLowerCase().indexOf(atob("ZnVjaw==")),swear3=e.toLowerCase().indexOf(atob("Y3VudA==")),swear4=e.toLowerCase().indexOf(atob("bmlnZ2Vy")),swear5=e.toLowerCase().indexOf(atob("bmlnZXI=")),nicetry1=/has(\s)*joined/i,nicetry2=/has(\s)*left/i,swear1>-1||swear2>-1||swear3>-1||swear4>-1||swear5>-1?alert("Your message was not sent because it contained an expletive."):1!=nicetry1.test(e)&&1!=nicetry2.test(e)?(DOM.input.value="",drone.publish({room:"observable-room-thing",message:e})):alert("haha nice try."))}function createMemberElement(e,a){const{name:t,color:r}=e.clientData;var o=document.createElement("div");return 1==a&&(o=document.createElement("i")),o.appendChild(document.createTextNode(t)),o.className="member",o.style.color=r,o}function updateMembersDOM(){1==members.length?(DOM.membersCount1.innerHTML=`You are ${txt}.`,DOM.membersCount2.innerHTML="  You are the only person here. (max 20)"):(DOM.membersCount1.innerHTML=`You are ${txt}.`,DOM.membersCount2.innerHTML=`  ${members.length} people are here. (max 20)`),DOM.membersList.innerHTML="",members.forEach(e=>DOM.membersList.appendChild(createMemberElement(e)))}function createMessageElement(e,a){var t=new Date;const r=document.createElement("div");return r.appendChild(createMemberElement(a,!1)),r.appendChild(document.createTextNode(e)),r.appendChild(document.createTextNode(" ")),today2=t.toTimeString(),timestamp.clientData.name=today2.substring(0,5),r.appendChild(createMemberElement(timestamp,!0)),r.className="message",r}function addMessageToListDOM(e,a){const t=DOM.messages,r=t.scrollTop===t.scrollHeight-t.clientHeight;t.appendChild(createMessageElement(e,a)),r&&(t.scrollTop=t.scrollHeight-t.clientHeight)}DOM.form.addEventListener("submit",sendMessage);
