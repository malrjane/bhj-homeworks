const content = Array.from(document.getElementsByClassName("reveal"));
const vieport = window.innerHeight;

window.addEventListener("scroll", function () {
	content.forEach((element) => {
		element.top = element.getBoundingClientRect().top;
		element.bottom = element.getBoundingClientRect().bottom;
		if (((element.top > 0) && (element.top < vieport)) && ((element.bottom > 0) && (element.bottom < vieport))) {
			element.classList.add("reveal_active");
		} else {
			element.classList.remove("reveal_active");

		}
	})
})