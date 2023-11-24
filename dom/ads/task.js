const content = Array.from(document.getElementsByClassName("rotator__case"));
let tickTime = 1000;

function getRandomNumber(min, max) {
	min = Math.ceil(min)
	max = Math.floor(max)
	return Math.floor(Math.random() * (max - min) + min)
}

function getNewItem() {
	let item = content[getRandomNumber(0, content.length)];
	document.querySelector(".rotator__case_active").classList.remove("rotator__case_active");
	item.classList.add("rotator__case_active");
	item.style.color = item.dataset.color;
	tickTime = item.dataset.speed;
}



setInterval(getNewItem, tickTime);



