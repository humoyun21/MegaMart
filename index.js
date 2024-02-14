"use strict";

let cardWrapper = $(".wrapper");
let brandOption = $("#brand");

let brand = [];
// ------------ RENDER FUNCTION --------------------

function renderProducts(data = []) {
  if (data.length > 0) {
    data.forEach((el) => {
      const { title, brand, thumbnail, price, discountPercentage } = el;

      const card = render(
        "div",
        "card",
        `
        <img src="${thumbnail}" alt="">
           <p>${title}</p>
           <p><span>${price}</span> <span>${Math.round(price * 1.44)}</span></p>
           <p>Save - ₹32999 | ${brand} </p>
           <div>
               ${Math.round(discountPercentage)}%
               OFF
           </div>
         `
      );

      cardWrapper.appendChild(card);
    });
  } else {
    cardWrapper.innerHTML = `<h1 class="text-center"> NOT FOUND </h1>`;
  }
}

renderProducts(product.products);

function findBrand(data) {
  if (data.length > 0) {
    data.forEach((el) => {
      if (!brand.includes(el.brand)) {
        brand.push(el.brand);
      }
    });
  }
}
findBrand(product.products);

function renderBrand(data) {
  if (data.length > 0) {
    data.forEach((el) => {
      const option = render("option", "classby", el);
      brandOption.appendChild(option);
    });
  }
}

renderBrand(brand);
brandOption.addEventListener("change", (e) => {
  sortBrands(e.target.value);
});

function sortBrands(brandName) {
  cardWrapper.innerHTML = "";
  const filterBrand = product.products.filter((el) => {
    return el.brand.toLowerCase() == brandName.toLowerCase();
  });
  renderProducts(filterBrand);
}
