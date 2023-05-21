
let bananaItem=document.getElementById('banana_price');
let orangeItem=document.getElementById('orange_price');
let pineappleItem=document.getElementById('pineapple_price');
let tomatoItem=document.getElementById('tomato_price');
//let NumberBananaItem=+BananaItem.textContent;
//let NumberOrangeItem=+OrangeItem.textContent;
//let NumberPineappleItem=+PineappleItem.textContent;
//let NumberTomatoItem=+TomatoItem.textContent;
const cartSum=+bananaItem.textContent + +orangeItem.textContent + +pineappleItem.textContent + +tomatoItem.textContent;
const totalPrice=document.getElementById ('total_price');
totalPrice.textContent=cartSum;
//console.log(cartSum);


function discount () {

    totalPrice.textContent=(cartSum / 100 * 80);
}

let discountBananaItem=Number(bananaItem.textContent);

function discountBanana () {
    discountBananaItem.textContent=(discountBananaItem / 100 * 80);
}
const button= document.getElementById("btn");
button.addEventListener("click", discount, discountBanana);