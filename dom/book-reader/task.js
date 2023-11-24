const targetClick = document.querySelector(".book__control_font-size");

function getChildren(parentElement) {
	return Array.from(parentElement.getElementsByTagName("a"));
}

function styleChanger(changeClassActive, newClass, dataAttr, element) {
	document.querySelector(`.${changeClassActive}`).classList.remove(`${changeClassActive}`);
	let removeItem = (document.querySelector(".book__content").className).split(" ").filter((item) => {
		return item.includes(`${newClass}`);
	})[0];
	document.querySelector(".book__content").classList.remove(`${removeItem}`);
	element.classList.add(`${changeClassActive}`);

	let sizeLetter = element.getAttribute(`data-${dataAttr}`)

	document.querySelector(".book__content").classList.add(`${newClass}${sizeLetter}`);
	event.preventDefault();
}

let childrens = (getChildren(targetClick));
childrens.forEach((element) => {
	element.addEventListener("click", () => {
		styleChanger("font-size_active", "book_fs-", "size", element);
	})
})


childrens = (getChildren(document.querySelector(".book__control_color")));
childrens.forEach((element) => {
	element.addEventListener("click", () => {
		styleChanger("color_active", "book_color-", "text-color", element);
	})
})


childrens = getChildren(document.querySelector(".book__control_background"));
childrens.forEach((element) => {
	element.addEventListener("click", () => {
		styleChanger("color_active", "book_bg-", "bg-color", element);
	})
})
