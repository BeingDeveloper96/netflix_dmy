const tabitems = document.querySelectorAll(".tab-item");
const tabContentItems = document.querySelectorAll(".tab-content-item");

function seletctItems(e) {
  removeBorder();
  removeShow();
  this.classList.add("tab-border");
  console.log(this.id);
  const tabContentItem = document.querySelector(`#${this.id}-content`);
  tabContentItem.classList.add("show");
}

function removeBorder() {
  tabitems.forEach(item => item.classList.remove("tab-border"));
}

function removeShow() {
  tabContentItems.forEach(item => item.classList.remove("show"));
}

tabitems.forEach(item => item.addEventListener("click", seletctItems));
