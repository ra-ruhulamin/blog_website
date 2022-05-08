var secrchbox = document.querySelector('.search_box');
var searchIcon = document.querySelector('#search_icon');

searchIcon.addEventListener('click', function () {
    searchIcon.classList.toggle("fa-times");
    secrchbox.classList.toggle("d_block");
    
})


var menuBtn = document.querySelector(".mobile_menu_btn ");
var menuBox = document.querySelector(".category_menu ");
var bodyBtn = document.querySelector(".body_overlay_btn");

menuBtn.addEventListener("click", function () {

    menuBox.style.left="0";
    bodyBtn.style.left="0";
    
})

bodyBtn.addEventListener("click", function () {

    menuBox.style.left="-100vw";
    bodyBtn.style.left="110vw";
    
})



// Password Is : LoveCoderFly100%
// Or Password Is : coderfly1