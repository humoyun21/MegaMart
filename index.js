"use strict";

// --------------- ELEMENTS ----------------
let cardWrapper = $(".wrapper");
let brandOption = $("#brands");
let priceOption = $("#price");
let lettersOption = $("#letter");
let inputSearch = $("#search");

const bascket = [];
const cart = [];
// ------------ EVENT LISTENER start --------------------
// ----------------- VARIABLES ----------------
let brand = [];
let data = [];
// ------------ RENDER FUNCTION start --------------------
function renderProducts(data = []) {
  if (data.length > 0) {
    data.forEach((el) => {
      const { title, brand, thumbnail, price, discountPercentage, id } = el;
      const card = render(
        "div",
        "card",
        `
         <img src="${thumbnail}" alt="">
         <p>${title}</p>
         <p><span>${price}</span> <span>${Math.round(price * 1.44)}</span></p>
         <div> <button data-state="${id}" class="save"> save </button>  <span>${brand} </span> </div>
         <div class="dis">
          ${Math.round(discountPercentage)}%
          OFF
          </div>
           `
      );
      card.dataset.info = el.id;
      cardWrapper.appendChild(card);
    });
  } else {
    cardWrapper.innerHTML = `<h1 class="text-center"> NOT FOUND </h1>`;
  }
}
renderProducts(product.products);
// ------------ RENDER FUNCTION end --------------------
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
// ------------ render barnd ------------------------
function renderBrand(data) {
  if (data.length > 0) {
    data.forEach((el) => {
      const option = render("option", "", el);
      brandOption.appendChild(option);
    });
  }
}
renderBrand(brand);
brandOption.addEventListener("change", (e) => {
  console.log(e.target.value);
  sortBrands(e.target.value);
});
function sortBrands(brandNmae) {
  cardWrapper.innerHTML = "";
  const filterBrand = product.products.filter((el) => {
    return el.brand.toLowerCase() == brandNmae.toLowerCase();
  });

  renderProducts(filterBrand);
}
// ---------- SORTING A-Z , Z-A  ----------
lettersOption.addEventListener("change", (e) => {
  sortingByLetter(product.products, e.target.value);
});
priceOption.addEventListener("change", (e) => {
  sortingByPrice(product.products, e.target.value);
});
function sortingByLetter(productList, state) {
  cardWrapper.innerHTML = "";
  let sortedByLetter = productList.sort((a, b) => {
    if (a.title.toLowerCase() < b.title.toLowerCase()) {
      return 1;
    }
    if (a.title.toLowerCase() > b.title.toLowerCase()) {
      return -1;
    }
    return 0;
  });
  if (state == "a-z") {
    renderProducts(sortedByLetter.reverse());
  } else {
    renderProducts(sortedByLetter);
  }
}

function sortingByPrice(productList, state) {
  console.log(state);
  cardWrapper.innerHTML = "";
  let sortedByPrice = productList.sort((a, b) => a.price - b.price);
  if (state == "up") {
    renderProducts(sortedByPrice);
  } else {
    renderProducts(sortedByPrice.reverse());
  }
}
// ---------- SORTING A-Z , Z-A  ----------
inputSearch.addEventListener("keyup", (e) => {
  cardWrapper.innerHTML = "";
  searchProduct(e.target.value);
});

function searchProduct(searchTerm) {
  const searchReslut = product.products.filter(
    (el) =>
      el.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      el.description.toLowerCase().includes(searchTerm.toLowerCase())
  );
  renderProducts(searchReslut);
}

cardWrapper.addEventListener("click", (e) => {
  let id = e.target.getAttribute("data-state");
  if (e.target.getAttribute("class") == "save") {
    if (!bascket.includes(e.target.getAttribute("data-state"))) {
      bascket.push(id);
      cart.push(searchById(id)[0]);
      localStorage.setItem("bascket", JSON.stringify(bascket));
      localStorage.setItem("cart", JSON.stringify(cart));
    } else {
      console.log("bu avval qo'shilgan");
    }
  }
});

function searchById(id) {
  return product.products.filter((el) => el.id == id);
}
