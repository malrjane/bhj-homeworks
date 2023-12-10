let tooltips = Array.from(document.getElementsByClassName('has-tooltip'));
let createDiv = document.createElement('div');
createDiv.classList.add('tooltip');

tooltips.forEach((el) => {
  el.addEventListener('click', (elem) => {
    elem.preventDefault();
    let coordinateBottom = el.getBoundingClientRect().bottom;
    createDiv.style.top = `${coordinateBottom}px`;
    let coordinateLeft = el.getBoundingClientRect().left;
    createDiv.style.left = `${coordinateLeft}px`;
    createDiv.innerText = el.getAttribute('title');
    el.insertAdjacentElement("afterend", createDiv)
    createDiv.classList.toggle('tooltip_active');
  })
})
