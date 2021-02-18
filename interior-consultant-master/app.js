function call(name) {
  return document.querySelector(name)
}

let ham = call('.ham'),
    nav = call('.nav__toggle'),
    nav2 = call('.nav');

ham.addEventListener('click', () => {
  document.body.classList.toggle('display-overf')
  ham.classList.toggle('change')
  nav2.classList.toggle('display')
})



