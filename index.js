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

///////Homework////////////////////

/// Brand  bo'yicha sortlash

// function sortBrand(productsObj, brands) {
//   return productsObj.products.filter((el) => el.brand === brands);
// }
// const brands = sortBrand(product, "Samsung");
// console.log(brands);

/// Price kamayish bo'yicha sortlash

// function sortPrice(productsPrice) {
//   return productsPrice.products.sort((a, b) => b.price - a.price);
// }
// const pricedown = sortPrice(product);
// console.log(pricedown);

/// Price o'zishi bo'yicha sortlash

// function sortpriceup(productsprice) {
//   return productsprice.products.sort((a, b) => a.price - b.price);
// }
// const priceup = sortpriceup(product);
// console.log(priceup);

///Category bo'yicha sortlash

// function sortCategory(productsObj, categorys) {
//   return productsObj.products.filter((el) => el.category === categorys);
// }
// const categorys1 = sortCategory(product, "smartphones");
// console.log(categorys1);

function sortrating(productList) {
  return productList.products.map((el) => {
    return {
      id: el.id,
      miqdori: el.quantity,
      sarlavhasi: el.title,
      malumoti: el.description,
      narxi: el.price,
      chegirma: el.discountPercentage,
      reytingi: el.rating,
      aksiya: el.stock,
      brendi: el.brand,
      categoriyasi: el.category,
      eskizi: el.thumbnail,
      rasmi: [el.images],
    };
  });
}
let add = sortrating(product);
console.log(add);
