function call(name) {
  return document.querySelector(name)
}

function callAll(name) {
  return document.querySelectorAll(name)
}

const inc = call('#inc1'),
      dec = call('#dec1'),
      price = call('#price1'),
      change = call('#change1');

const inc2 = call('#inc2'),
      dec2 = call('#dec2'),
      price2 = call('#price2'),
      change2 = call('#change2');

const shipping = call('#shipping'),
      total = call('#total');

const email = call('input[type="email"]'),
      textInp = callAll('input[type="text"]'),
      telInp = call('input[type="tel"]'),
      error = callAll('.error'),
      submit = call('button'),
      success = call('.success');

submit.addEventListener('click', (e) => {
  e.preventDefault()

  textInp.forEach(txt => {
    if (txt.value == "") {
      error.forEach(err => {
        err.style.display = "block"
      })
    } else if (txt.value !== "" && email.value !== ""){
      error.forEach(err => {
        err.style.display = "none"
      }) 

      if (email.value.length > 0) {
        if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email.value)) {
          error.forEach(err => {
            err.style.display = "none"
          }) 
          
        } else {
          error.forEach(err => {
            err.style.display = "block"
          })
        } 

      } 

      console.log(err[0]);
      
      success.classList.add('showSuccess')
      if (success.classList.contains('showSuccess')) {
        setTimeout(() => {
          success.classList.remove('showSuccess')
          email.value = ""
          txt.value = ""
          telInp.value = ""
        }, 1000);
      }

    }
  })
})


inc.addEventListener('click', increase)
dec.addEventListener('click', decrease)
inc2.addEventListener('click', increase2)
dec2.addEventListener('click', decrease2)

let prAmount = 54.99,
    prAmount2 = 74.99,
    shippingAmount = 9.5,
    totalAmount = 148.98;

let i = 1;
let i2 = 1;
function increase() {
  i++
  change.textContent = i
  price.textContent = `$${Math.floor(((prAmount * i) * 100))/100}`
  shipTotal()
  totalCost()
}
function decrease() {
  i--
  change.textContent = i
  price.textContent = `$${Math.floor(((prAmount * i) * 100))/100}`
  if(i<1) {
    change.textContent = i = 1
    price.textContent = `$${prAmount}`
  }
  shipTotal()
  totalCost()
}

function increase2() {
  i2++
  change2.textContent = i2
  price2.textContent = `$${Math.floor(((prAmount2 * i2 + 0.01) * 100))/100}`
  shipTotal()
  totalCost()
}
function decrease2() {
  i2--
  change2.textContent = i2
  price2.textContent = `$${Math.floor(((prAmount2 * i2 + 0.01) * 100))/100}`
  if (i2 == 1) {
    change2.textContent = i2 = 1
    price2.textContent = `$${prAmount2}`
  }
  if(i2<1) {
    change2.textContent = i2 = 1
    price2.textContent = `$${prAmount2}`
  }
  shipTotal()
  totalCost()
}

function shipTotal() {
  shipping.textContent = `$${(shippingAmount * i) + (shippingAmount * i2)}`
}

function totalCost() {
  total.textContent = `$${(shippingAmount * i) + (shippingAmount * i2) + ((prAmount2 * i2) + (prAmount * i))}`
}

// console.log(Math.floor(3.66778999 * 100)/100);
// console.log(price2.toFixed(3.66778999 * 100)/100);


