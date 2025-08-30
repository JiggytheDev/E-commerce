const closeBtn = document.getElementById("closeBtn");;
const modalPage = document.getElementById("clickedImage");
const modalPageShow = document.getElementById("firstBox");
const plusBtn = document.getElementById("increase");
const minusBtn = document.getElementById("decrease");
const qtySection = document.getElementById("qty");
const cartCount = document.getElementById("cartCount");
const productQty = document.getElementById("cartQty");
const totalPrice = document.getElementById("totalPrice");
const promoPrice = document.getElementById("promoPrice");
closeBtn.addEventListener("click", (event) => {
    modalPage.style.display = "none";
});
modalPageShow.addEventListener("click", (event) => {
    modalPage.style.display = "flex";
});
let count = 0;
promoPrice.textContent = 125;
totalPrice.textContent = 0;



function updateTotal() {
    totalPrice.textContent = parseFloat(promoPrice.textContent * count);
}
plusBtn.addEventListener("click", (event) => {
    count++;
    qtySection.textContent = count;
    cartCount.textContent = count;
    productQty.textContent = count;
    updateTotal();
});
minusBtn.addEventListener("click", (event) => {
    if (count > 0) {
       count--;
       qtySection.textContent = count;
       cartCount.textContent = count; 
       productQty.textContent = count;
       updateTotal();
    } else {
        alert("Can't go below 0");
    }
});
const checkoutSection = document.getElementById("checkout");
const cartClicked = document.getElementById("cartClicked");
cartClicked.addEventListener("click", (event) => {
   const isOpen = checkoutSection.style.display === "flex";

   if (isOpen) {
    checkoutSection.style.display = "none";
   } else {
    checkoutSection.style.display = "flex";
   }
});

const addedCart = document.getElementById("addedCart");
const checkoutCancel = document.getElementById("checkoutCancel");
const cartDelete = document.getElementById("cartDelete");
const emptyCart = document.getElementById("emptyCart");
const checkoutDetails = document.getElementById("checkoutDetails");
const submit = document.getElementById("submit");
addedCart.addEventListener("click", () => {
    checkoutSection.style.display = "flex";
});
checkoutCancel.addEventListener("click", () => {
    checkoutSection.style.display = "none";
});
cartDelete.addEventListener("click", () => {
    checkoutDetails.style.display = "none";
    submit.style.display ="none";
    emptyCart.textContent = "Your cart is empty.";
})


const sideCloseBtn = document.getElementById("mobileCancelButton");
const sideNav = document.getElementById("mobileList");
const hamburgerMenu = document.getElementById("hamburgerMenu");
const blurPage = document.getElementById("mainPage");
hamburgerMenu.addEventListener("click", () => {
    sideNav.style.display = "flex";
});
sideCloseBtn.addEventListener("click", (event) => {
    const sideOpen = sideNav.style.display === "flex";

    if (sideOpen) {
        sideNav.style.display = "none";
    } else {
        sideNav.style.display = "flex";
    }

});











