let plus = Array.from(document.querySelectorAll('.product__quantity-control_inc'));
let minus = Array.from(document.querySelectorAll('.product__quantity-control_dec'));

plus.forEach((p) => {
  p.addEventListener('click', () => {
    p.previousElementSibling.textContent = +p.previousElementSibling.textContent + 1;
  })
})

minus.forEach((m) => {
  m.addEventListener('click', () => {
    if (m.nextElementSibling.textContent > 1) {
      m.nextElementSibling.textContent = +m.nextElementSibling.textContent - 1;
    } else {
      return false;
    }
  })
})

let addBtn = Array.from(document.querySelectorAll('.product__add'));
let bascket = document.querySelector('.cart__products');



addBtn.forEach((btn) => {
  btn.addEventListener('click', () => {
    let productsInCart = Array.from(bascket.getElementsByClassName('cart__product'));
    let find = productsInCart.find((el) => {
      return el.dataset.id === btn.closest('.product').dataset.id;
    })

    if (find) {
      find.querySelector(".cart__product-count").textContent = +find.querySelector(".cart__product-count").textContent + +btn.previousElementSibling.querySelector('.product__quantity-value').textContent;
    } else {
      let wrapper = document.createElement('div');
      wrapper.classList.add('cart__product');
      wrapper.dataset.id = btn.closest('.product').dataset.id;
      let pic = (btn.closest('.product').querySelector('.product__image').cloneNode(true));
      wrapper.insertAdjacentElement('afterbegin', pic);
      let divCount = document.createElement('div');
      divCount.classList.add("cart__product-count");
      wrapper.insertAdjacentElement('beforeend', divCount);
      divCount.textContent = +btn.previousElementSibling.querySelector('.product__quantity-value').textContent;
      bascket.insertAdjacentElement('afterbegin', wrapper);
    }




  })
})

