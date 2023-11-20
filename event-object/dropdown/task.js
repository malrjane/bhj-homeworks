let list = document.querySelector(".dropdown");
let test = Array.from(document.getElementsByClassName("dropdown__item"));
let value = document.querySelector(".dropdown__value");


test.forEach((element) => {
	element.addEventListener("click", function () {
		value.textContent = this.textContent;
		event.preventDefault();
	})
});

list.addEventListener("click", () => {
	if (document.querySelector(".dropdown__list").classList.contains("dropdown__list_active")) {
		document.querySelector(".dropdown__list").classList.remove("dropdown__list_active");
	} else {
		document.querySelector(".dropdown__list").classList.add("dropdown__list_active");
	}
});







