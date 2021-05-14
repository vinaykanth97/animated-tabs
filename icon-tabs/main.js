let listItem = document.querySelectorAll(".list li");
let listItemActive = document.querySelector(".list li.active");
let dash = document.querySelector(".dash");
let tabContent = document.querySelectorAll(".tab-content .content");

// Active Setters
dash.style.width = listItemActive.clientWidth + "px";
dash.style.left = listItemActive.offsetLeft + "px";

function selectItem(e, index) {
  RemoveActive();
  e.target.classList.add("active");
  dash.style.width = listItem[index].clientWidth + "px";
  dash.style.left = listItem[index].offsetLeft + "px";
  tabContent[index].classList.add("active");
}

// Remove Active
function RemoveActive() {
  listItem.forEach((item, index) => {
    item.classList.remove("active");
    tabContent[index].classList.remove("active");
  });
}

listItem.forEach((item, index) => {
  item.addEventListener("click", function (e) {
    selectItem(e, index);
  });
});
