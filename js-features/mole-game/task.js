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
			document.getElementById("dead").textContent = winCOunter;

		} else {
			loseCOunter += 1
			document.getElementById("lost").textContent = loseCOunter;

		};


		if (winCOunter === 10) {
			alert("Win!")
			winCOunter = 0;
			loseCOunter = 0;
		} else if (loseCOunter === 5) {
			alert("Lose :(")
			winCOunter = 0;
			loseCOunter = 0;
		}
	}
}

