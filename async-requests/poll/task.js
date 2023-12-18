let title = document.querySelector('#poll__title');
let answers = [...document.querySelectorAll('.poll__answer')];
let mainDiv = document.querySelector('#poll__answers');

let xhr = new XMLHttpRequest();
xhr.open('GET', 'https://students.netoservices.ru/nestjs-backend/poll');
xhr.send();

xhr.onreadystatechange = function () {
  if (xhr.readyState === 4 && xhr.status === 200) {
    let json = JSON.parse(xhr.responseText);
    console.log(json)
    title.textContent = json.data.title;
    let answers = json.data.answers;
    console.log(answers);
    answers.forEach((answer) => {
      let btn = document.createElement('button');
      btn.classList.add('poll__answer');
      btn.classList.add('style');
      btn.textContent = answer;
      mainDiv.insertAdjacentElement('afterbegin', btn);
      btn.addEventListener('click', (b) => {
        b.preventDefault();
        alert('Спасибо, ваш голос засчитан!');
      })
    })
  }
};
