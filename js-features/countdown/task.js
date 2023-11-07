var newTimer = document.getElementById("timer");
var tickTimer = newTimer.textContent;
var intervalID = setInterval(function tick() {
	if (newTimer.textContent === "0") {
		clearInterval(intervalID);
		alert("You win!")
		return;
	}
	newTimer.textContent -= 1;
}, 1000)


