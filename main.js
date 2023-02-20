// Bag
let bagIcon = document.querySelector('#bag-icon')
let bag = document.querySelector('.bag')
let closeBag = document.querySelector('#close-bag')

//open bag
bagIcon.onclick = () => {
    bag.classList.add("active");
};
closeBag.onclick = () => {
    bag.classList.remove("active");
};

//bag working 
if (document.readyState == 'loading'){
    document.addEventListener('DOMContentLoaded', ready);
} else {
    ready();
}

//making function
function ready (){
// remove buttom
    var removeBagButtons = document.getElementsByClassName('bag-remove')
    console.log(removeBagButtons)
    for (var i = 0; i < removeBagButtons.length; i++){
        var button = removeBagButtons[i]
        button.addEventListener('click', removeBagItem)
    }
}



//remove itens from bag
function removeBagItem(event) {
    var buttonClicked = event.target;
    buttonClicked.parentElement.remove();
    updatetotal ();
}

//add to bag
var addBag = document.getElementsByClassName('add_to_bag');
for (var i = 0; i < addBag.length; i++) {
    var button = addBag [i];
    button.addEventListener('click', addBagClicked)
}
function addBagClicked (event) {
    var button = event.target;
    var shopProduct = button.parentElement
    var title = shopProduct.getElementsByClassName('p-name')[0].innerText;
    var price = shopProduct.getElementsByClassName('p-preco')[0].innerText;
    var producImg = shopProduct.getElementsByClassName('img-fluid')[0].src;
    addProducttoBag(title, price, producImg); 
    updatetotal();
}
function addProducttoBag(title, price, producImg) {
    var bagShopBox = document.createElement('div');
    bagShopBox.classList.add('bag-box');
    var bagItems = document.getElementsByClassName('bag-content')[0];
    var bagItemsNames = bagItems.getElementsByClassName('bag-product-title')
    for (var i = 0; i < bagItemsNames.length; i++){
        if(bagItemsNames[i].innerText == title) {
        alert('You have already add this item to bag')
        return;
        }   
    }


var bagBoxContent = `
<img src="image/Shop/SeekPng.com_salt-png_9189044.png" alt="">
<div class="details-box">
  <div class="bag-product-title">YEEZY 500 'SALT'</div>
  <div class="bag-price">€0</div>
</div>
<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-trash bag-remove" viewBox="0 0 16 16"> <path d="M5.5 5.5A.5.5 0 0 1 6 6v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm2.5 0a.5.5 0 0 1 .5.5v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm3 .5a.5.5 0 0 0-1 0v6a.5.5 0 0 0 1 0V6z"/> <path fill-rule="evenodd" d="M14.5 3a1 1 0 0 1-1 1H13v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V4h-.5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1H6a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1h3.5a1 1 0 0 1 1 1v1zM4.118 4 4 4.059V13a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V4.059L11.882 4H4.118zM2.5 3V2h11v1h-11z"/> </svg>`;
bagShopBox.innerHTML = bagBoxContent;
bagItems.append(bagShopBox);
bagShopBox.getElementsByClassName('bag-remove')[0].addEventListener('click',removeBagItem);

}








//update total
function updatetotal (){
    var bagContent = document.getElementsByClassName ('bag-content')[0]
    var bagBoxes = bagContent.getElementsByClassName('bag-box')
    var total = 0;
    for (var i = 0; i < bagBoxes.length; i++){
        var bagBox = bagBoxes[i];
        var priceElement = bagBox.getElementsByClassName('bag-price') [0];
        var price = parseFloat(priceElement.innerText.replace ('$',''));
        total = total + (price * quantity)
        document.getElementsByClassName ('total-price')[0].innerText = '$' + total;

    }
}