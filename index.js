"use strict";

let cardWrapper = document.querySelector(".wrapper");

// ------------ RENDER FUNCTION --------------------

function renderProducts(data) {
  if (data.products.length > 0) {
    data.products.forEach((el) => {
      const { title, brand, thumbnail, price, discountPercentage } = el;

      const card = document.createElement("div");
      card.classList.add("card");
      card.innerHTML = `
        <img src="${thumbnail}" alt="">
           <p>${title}</p>
           <p><span>${price}</span> <span>${Math.round(price * 1.44)}</span></p>
           <p>Save - ₹32999</p>
           <div>
               ${Math.round(discountPercentage)}%
               OFF
           </div>
         `;

      cardWrapper.appendChild(card);
    });
  } else {
    cardWrapper.innerHTML = `<h1 class="text-center"> NOT FOUND </h1>`;
  }
}

renderProducts(product);
