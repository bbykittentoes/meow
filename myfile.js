function myCoolFunction() {
	let target = document.getElementsByClassName('greeting')[0];
	target.innerHTML = "goodbye.";
}

function samebutdiff() {
	let target = document.getElementsByClassName('parting')[0];
	target.innerHTML = "hey you";
}

function resetTop() {
	let target = document.getElementsByClassName('greeting')[0];
	target.innerHTML="hi fren";
}

function resetBottom() {
	let target = document.getElementsByClassName('parting')[0];
	target.innerHTML="bye fren";
}