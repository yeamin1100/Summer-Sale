// This is Kitchenware Block
// K. Accessories Card 
function kitchenwareCardOne() {
    ClaculateCard('cardOnePrice');
    setCardName('cardOneTitle');
}
// K. Accessories Card 
// K. Accessories Card -2
function kitchenwareCardtwo() {
    ClaculateCard("cardTwoPrice");
    setCardName('cardTwoTitle');
}
// K. Accessories Card -2

// Home Cooker Card
function kitchenwareCardthree() {
    ClaculateCard("cardThreePrice");
    setCardName("cardThreeTitle");

}
// Home Cooker Card
// This is Kitchenware Block

// Sportswear Block Code 
// Sports Back Cap
function sportswearFristCard() {
    ClaculateCard('sportswearFristCardPrice');
    setCardName('sportswearFristCardTitle')
}
// Sports Back Cap
// Full Jersey Set
function sportswearTwoCard() {
    ClaculateCard('cardtwocap');
    setCardName('sportswearTwoCardTitle')

}
// Full Jersey Set
// Sports cates
function sportswearThreeCard() {
    ClaculateCard('sportswearThreeCardPrice');
    setCardName('sportswearThreeCardTitle')
}
// Sports cates
// Sportswear Block Code 

// Furniture Code Block 

// Furniture Code Block 
// Single Relax Chair
function furniturefristCard() {
    ClaculateCard('furniturefristCardPrice');
    setCardName('furniturefristCardTitle')
}
// Single Relax Chair
// Children play
function furnituretwoCard() {
    ClaculateCard('furnituretwoCardPriceOn');
    setCardName('furnituretwoCardTitle')
}
// Children play
// Flexible Sofa
function furniturethreeCard() {
    ClaculateCard('furniturethreeCardPriceOn');
    setCardName('furniturethreeCardTitle')
}
// Flexible Sofa
// Set Valu On Common Funcation
let no = 0;
function setCardName(titleId) {
    no++;
    const CardTitle = document.getElementById(titleId);
    const CardTitleText = CardTitle.innerHTML;
    const tr = document.createElement('tr');
    const tableBody = document.getElementById("table-body");
    tr.innerHTML = `
    
    <th>${no}</th>
    <td>${CardTitleText}</td>
     `
    tableBody.appendChild(tr)
}
// Set Valu On Common Funcation

// calculate and set value on this function 

function ClaculateCard(cardPrice) {
    const CardAmount = document.getElementById(cardPrice),
        PriceFlid = CardAmount.innerText,
        convartNumberFristCard = parseFloat(PriceFlid);

    const totalPriceFlid = document.getElementById('totalPrice');
    const totalPriceInnertext = totalPriceFlid.innerHTML;
    const convartTotalPrice = parseFloat(totalPriceInnertext);

    const calculateTotalFristCard = convartTotalPrice + convartNumberFristCard;

    totalPriceFlid.innerHTML = calculateTotalFristCard;
    updateCouponButtonState();
    ButtonState();

}
// calculate and set value on this function 

// This is Coupon Button Code Block
// এখানে ডিডাবেল করতে গিয়ে যে সমস্যা হয়েছে সেটা হচ্ছে যে বাটন ডিডাবেল করতে চাই সেই বাটন এর html ফেইল এ disabled লিখে দিতে হবে।উদাহারন হিসেবে htlm এর একটা button দেয়া <button onclick="applyCoupon()" id="coupon-button" class="btn btn-primary lg:w-5/12 sm:w-5/12 xl:w-5/12" disabled>Apply</button>

function updateCouponButtonState() {
    var totalPriceSpan = document.getElementById('totalPrice');
    var couponButton = document.getElementById('coupon-button');

    // Parse the total price from the span content as a float
    var totalPrice = parseFloat(totalPriceSpan.textContent);

    // Check if the total price is greater than 200
    if (totalPrice > 200) {
        couponButton.disabled = false; // Enable the coupon button
    }
    else {
        couponButton.disabled = true; // Disable the coupon button
    }
}
// This is Coupon Button Code Block
// cupon apply and calculate 
function applyCoupon() {
    const inputfildText = document.getElementById('cuponText');
    const discountFild = document.getElementById('discount');
    const totalFild = document.getElementById('total');
    const inputValue = inputfildText.value;
    if (inputValue === 'SELL200') {
        let totalPrice = document.getElementById('totalPrice');
        let convartTotalPrice = parseFloat(totalPrice.innerText);
        const discount = convartTotalPrice * 0.2;
        const fixValue = discount.toFixed(0)
        const totalDiscount = convartTotalPrice - fixValue;
        discountFild.innerHTML = fixValue;
        totalFild.innerHTML = totalDiscount;


    } else {
        alert('Worong Cupon Code!! Please Write Your Personal SMS Cupon!!')
    }
    inputfildText.value = '';
}
// cupon apply and calculate 
// Make Payment Button validition
function ButtonState() {
    var totalPriceSpan = document.getElementById('totalPrice');
    var purchaseButton = document.getElementById('purchase');

    // Parse the total price from the span content as an integer
    var totalPrice = parseInt(totalPriceSpan.textContent);

    // Enable the button if the total price is greater than 0, otherwise disable it
    if (totalPrice > 0) {
        purchaseButton.disabled = false;
    } else {
        purchaseButton.disabled = true;
    }
}
// Make Payment Button validiton 

// Portal Open and work button
function purchase() {
    // Your purchase logic goes here
    var portal = document.querySelector('.portal');
    // Make the portal visible
    portal.classList.remove('hidden');
}
function closePortal() {
    var portal = document.querySelector('.portal');
    // Hide the portal
    portal.classList.add('hidden');
}
// Portal Open and work button
