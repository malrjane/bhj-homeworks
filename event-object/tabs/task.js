let tabs = Array.from(document.getElementsByClassName("tab"));
let content = Array.from(document.getElementsByClassName('tab__content'));

tabs.forEach((element) => {
	element.addEventListener("click", function () {
		document.querySelector(".tab_active").classList.remove("tab_active");
		element.classList.add("tab_active");

		document.querySelector(".tab__content_active").classList.remove("tab__content_active");
		content[tabs.indexOf(element)].classList.add("tab__content_active");
	})
})