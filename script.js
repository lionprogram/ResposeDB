	//responseDB, cause not server use this code :(  :
	let responseDB = {
		hello:["hi","Hello","Hey","I'm ready","hello, how are you","hhh"],
		hi:"hi"
	};

let input = document.getElementById('myInput');
let section = document.getElementById('section');
let content;
// Execute a function when the user releases a key on the keyboard

input.addEventListener('keyup', function(event) {
  // Number 13 is the "Enter" key on the keyboard
  if (event.keyCode === 13) {
    // Cancel the default action, if needed
    event.preventDefault();
    // Trigger the button element with a click
    document.getElementById("send").click();
  }
});
function send(){
	if(input.value == ''){}else{
	content = input.value;
	cloud(0,content);
	input.value = "";
	reciveMessage();
	
	section.scrollTo(0,section.scrollHeight);
	}

}
function cloud(pos,mess){
	let a = document.createElement('div');
	if(pos == 0){
		a.setAttribute("class","conter");
	}else{
		a.setAttribute("class","conterR");
	}
	let b = document.createElement('div');//div content
	if(pos == 0){
		b.setAttribute("class","cont");
	}else{
		b.setAttribute("class","contr");
	}
	let b2 = document.createElement('div');//div sq
	let c = document.createElement('p');
	c.innerHTML = mess;
	b.appendChild(c);
	a.appendChild(b);
	section.appendChild(a);
	
}

function reciveMessage(){
	//let responseDB = {hello:["hi","Hello"],hi:"hi"};
	let co = content;
	//console.log(typeof responseDB[co])
	if(typeof(responseDB[co]) === 'object'){
		let obj = responseDB[co];
		let len = Math.floor(Math.random() * obj.length ) ;
		//console.log(len,obj[len],obj[1])
			cloud(1,obj[len]);

	}else{
	cloud(1,responseDB[co]);
	}
}

