function $(selector) {
  return document.querySelector(selector);
}
function $$(selector) {
  return document.querySelectorAll(selector);
}
function render(element, className, htmlContent) {
  let tag = document.createElement(element);
  tag.classList.add(className);
  tag.innerHTML = htmlContent;
  return tag;
}
