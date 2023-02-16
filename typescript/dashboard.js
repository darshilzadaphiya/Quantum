function responsive() {
  var x = document.getElementsByClassName("hambur-dropdown-compo");
  if (x[0].classList.value === "hambur-dropdown-compo") {
    x[0].classList.add("responsive");
  } else {
    x[0].classList.remove("responsive");
  }
}

//Notification Drop Javascript

document
  .getElementById("nav-div1")
  .addEventListener("mouseover", mouseOver_noti);
document.getElementById("nav-div1").addEventListener("mouseout", mouseOut_noti);
document
  .getElementById("noti-dropdown")
  .addEventListener("mouseover", mouseOver_noti2);
document
  .getElementById("noti-dropdown")
  .addEventListener("mouseout", mouseOut_noti2);
var noti = document.getElementById("noti-dropdown");
function mouseOver_noti() {
  noti.classList.add("show-dropdown");
}
function mouseOut_noti() {
  setTimeout(function () {
    noti.classList.remove("show-dropdown");
  }, 1000);
}
function mouseOver_noti2() {
  noti.classList.add("show-dropdown2");
}
function mouseOut_noti2() {
  noti.classList.remove("show-dropdown2");
}

//Announcement Drop Javascript

document
  .getElementById("nav-div2")
  .addEventListener("mouseover", mouseOver_noti3);
document
  .getElementById("nav-div2")
  .addEventListener("mouseout", mouseOut_noti3);
document
  .getElementById("announce-dropdown")
  .addEventListener("mouseover", mouseOver_noti4);
document
  .getElementById("announce-dropdown")
  .addEventListener("mouseout", mouseOut_noti4);
var announce = document.getElementById("announce-dropdown");
function mouseOver_noti3() {
  announce.classList.add("show-dropdown");
}
function mouseOut_noti3() {
  setTimeout(function () {
    announce.classList.remove("show-dropdown");
  }, 1000);
}
function mouseOver_noti4() {
  announce.classList.add("show-dropdown2");
}
function mouseOut_noti4() {
  announce.classList.remove("show-dropdown2");
}
