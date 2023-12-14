let mainDiv = document.getElementById('tasks__list');
let input = document.getElementById('task__input');
let addBtn = document.getElementById('tasks__add');


addBtn.addEventListener('click', (event) => {
  event.preventDefault();
  if (input.value !== '') {
    mainDiv.insertAdjacentHTML("afterend",
      '<div class = "task"><div class = "task__title"></div><a href = "#" class = "task__remove">&times;</a></div>');
    let divTitle = document.querySelector('.task__title');
    divTitle.innerText = input.value;
  }


  let deleteBtn = document.querySelector('.task__remove');
  deleteBtn.addEventListener('click', (click) => {
    click.preventDefault();
    click.currentTarget.parentNode.remove();
  })

})
