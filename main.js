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
