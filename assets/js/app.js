const moveBox = document.querySelector(".toggle-box");

moveBox.addEventListener("click", function () {
    moveBox.classList.toggle("right--0");
});

const menuIcon = document.querySelector(".menuIcon");
const menuList = document.querySelector(".menu-list");

menuIcon.addEventListener("click", function () {
    menuList.classList.toggle("show");
})