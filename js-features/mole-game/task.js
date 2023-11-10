let winCOunter = 0;
let loseCOunter = 0;


function getHoleIndex(index) {
	return document.getElementById(`hole${index}`);
}

for (let index = 1; index < 10; index++) {
	let hole = getHoleIndex(index);
	hole.onclick = () => {
		if (hole.classList.contains('hole_has-mole')) {
			winCOunter += 1;
		} else {
			loseCOunter += 1
		};


		if (winCOunter === 10) {
			winCOunter = 0;
			loseCOunter = 0;
			alert("Win!")
		} else if (loseCOunter === 5) {
			winCOunter = 0;
			loseCOunter = 0;
			alert("Lose :(")
		}

		document.getElementById("dead").textContent = winCOunter;
		document.getElementById("lost").textContent = loseCOunter;
	}
}

