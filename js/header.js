const $menuArr = document.querySelectorAll("header .header-menu");
const setMenuArr = ["game.html", "marketList.html", "community.html"]; // intellij --> .html 지우기

// 어느 페이지
let link = document.location.href;
const linkArr = link.split("/");
console.log(linkArr[3]);

setMenuArr.forEach((menu, index) => {
    if (menu == linkArr[3]) {
        $menuArr[index].classList.add("current-menu");
    }
});
