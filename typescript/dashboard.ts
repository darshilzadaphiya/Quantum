function responsive() {
  let x = document.getElementsByClassName("hambur-dropdown-compo");

  if (x[0].classList.value === "hambur-dropdown-compo") {
    x[0].classList.add("responsive");
  } else {
    x[0].classList.remove("responsive");
  }
}
