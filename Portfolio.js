// Sticky Navigation Menu Js

let nav = document.querySelector("nav");
let scrollBtn = document.querySelector(".scroll-button a");

let val;

window.onscroll = function () {
  if (document.documentElement.scrollTop > 20) {
    nav.classList.add("sticky");
    scrollBtn.style.display = "block"
  } else {
    nav.classList.remove("sticky");
    scrollBtn.style.display = "none"
  }
}

//side navigation manu js

let body = document.querySelector("body");
let navBar = document.querySelector(".navbar");
let menuBtn = document.querySelector(".menu-btn");
let cancelBtn = document.querySelector(".cancel-btn");

menuBtn.onclick = function(){
  navBar.classList.add("active");
  menuBtn.style.opacity = "0";
  menuBtn.style.pointerEvents = "none";
  body.style.overflowX = "hidden";
  scrollBtn.style.pointerEvents = "none";
}

cancelBtn.onclick = function(){
  navBar.classList.remove("active");
  menuBtn.style.opacity = "1";
  menuBtn.style.pointerEvents = "auto";
  body.style.overflowX = "auto";
  scrollBtn.style.pointerEvents = "auto";
}

// Side navigation bar close while we click on navigation links

let navLinks = document.querySelectorAll(".menu li a");
for(var i=0; i<navLinks.length; i++){
  navLinks[i].addEventListener("click",function(){
    navBar.classList.remove("active");
    menuBtn.style.opacity = "1";
    menuBtn.style.pointerEvents = "auto";
  })
}

// footer

function copyEmail() {
  navigator.clipboard.writeText("MOHDZAID4994@GMAIL.COM");
  alert("Email copied to clipboard!");
}

function copyAddress() {
  navigator.clipboard.writeText("342, LOKPRIYA VIHAR KHORA COLONY GHAZIABAD (U.P) 201309");
  alert("Address copied to clipboard!");
}

function copyMobile() {
  navigator.clipboard.writeText("+91 9027535399");
  alert("Mobile copied to clipboard!");
}