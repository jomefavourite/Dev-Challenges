function call(name) {
  return document.querySelector(name);
}
function callAll(name) {
  return document.querySelectorAll(name);
}

let ham = call(".ham"),
  nav = call(".nav__links"),
  body = call("body"),
  link = callAll(".nav__links ul li a");

ham.addEventListener("click", () => {
  ham.classList.toggle("change");
  body.classList.toggle("overflow");
  nav.classList.toggle("display");

  // if (window.innerWidth >= 700) {
  //   body.classList.remove("overflow");
  // }
  // if (window.innerWidth < 700) {
  //   body.classList.add("overflow");
  // }
});

window.addEventListener("resize", () => {
  if (
    window.innerWidth >= 700 &&
    document.body.classList.contains("overflow")
  ) {
    body.classList.remove("overflow");
  }
  if (window.innerWidth < 700 && ham.classList.contains("change")) {
    body.classList.add("overflow");
    document.documentElement.scrollTop = 0;
  }
});

link.forEach((a) => {
  a.addEventListener("click", () => {
    window.document.body.classList.remove("overflow");
    nav.classList.remove("display");
    ham.classList.remove("change");
  });
});
