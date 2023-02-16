function responsive() {
  let x = document.getElementsByClassName("hambur-dropdown-compo");

  if (x[0].classList.value === "hambur-dropdown-compo") {
    x[0].classList.add("responsive");
  } else {
    x[0].classList.remove("responsive");
  }
}

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

const noti = document.getElementById("noti-dropdown");

function mouseOver_noti() {
  noti.classList.add("show-dropdown");
}

function mouseOut_noti() {
  setTimeout(() => {
    noti.classList.remove("show-dropdown");
  }, 1000);
}

function mouseOver_noti2() {
  noti.classList.add("show-dropdown2");
}

function mouseOut_noti2() {
  noti.classList.remove("show-dropdown2");
}
