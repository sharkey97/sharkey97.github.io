var addToCartBtn = document.getElementsByClassName('btnPurchase')
for (var i = 0; i < addToCartBtn.length; i++){
  var button = addToCartBtn[i]
  button.addEventListener('click', addToBasketClick)
}

function addToBasketClick(event)
{
  var selected = document.querySelectorAll("li.selected span");
  selected.forEach(item => {
    console.log(item.innerText);
  var button = event.target
  var basketPrice = button.parentElement.parentElement
  var price = basketPrice.getElementsByClassName('basketTotal')[0].innerText
  console.log(price)
})
}
