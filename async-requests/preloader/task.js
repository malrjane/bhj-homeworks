const img = document.querySelector('.loader');
const item = document.querySelector('.item');
let items = document.querySelector('#items');

let xhr = new XMLHttpRequest();
xhr.open('GET', 'https://students.netoservices.ru/nestjs-backend/slow-get-courses');
xhr.send();

xhr.onreadystatechange = function () {
  if (xhr.readyState === 4 && xhr.status === 200) {
    img.classList.remove('loader_active');
    let resp = xhr.responseText;

    let json = JSON.parse(resp);

    let arrValute = Object.keys(json.response.Valute);
    arrValute.forEach((el) => {
      const mainDiv = item.cloneNode(false);
      items.insertAdjacentElement('beforeend', mainDiv);

      const newDiv_code = document.createElement('div');
      newDiv_code.classList.add('item__code');
      newDiv_code.textContent = json.response.Valute[el].CharCode;
      mainDiv.insertAdjacentElement('afterbegin', newDiv_code);

      const newDiv_value = document.createElement('div');
      newDiv_value.classList.add('item__value');
      newDiv_value.textContent = json.response.Valute[el].Value;
      newDiv_code.insertAdjacentElement('afterend', newDiv_value);

      const newDiv_currency = document.createElement('div');
      newDiv_currency.classList.add('item__currency');
      newDiv_currency.textContent = 'руб';
      newDiv_value.insertAdjacentElement('afterend', newDiv_currency);
    })
  };
};


