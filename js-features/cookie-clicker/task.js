const clickerCounter = document.getElementById("clicker__counter");
const cookie = document.getElementById("cookie")
const clickerTime = document.getElementById("clickerTime");
let date = 0;

cookie.onclick = function () {
	clickerTime.textContent = (1 / ((new Date() - date) / 1000)).toFixed(2);

	date = new Date();


	clickerCounter.textContent = Number(clickerCounter.textContent) + 1;
	if (Number(clickerCounter.textContent) % 2 === 0) {
		cookie.width = 200;
	} else {
		cookie.width = 400;
	}


}