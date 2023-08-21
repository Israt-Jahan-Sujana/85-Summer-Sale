document.addEventListener("DOMContentLoaded", function () {
    const productList = document.querySelectorAll(".product");
    let totalPrice = 0;
    let serialNumber = 1;
    let discountPercentage = 0;
    let couponApplied = false;
    const applyBtn = document.getElementById("apply");
    const PurchaseBtn = document.getElementById("make-purchase");
    const cartList = document.getElementById("cartList");
    const price = document.getElementById("price-text");
    const discountText = document.getElementById("discount-text");
    const totalPriceText = document.getElementById("total-price-text");
    const couponField = document.getElementById("coupon-field");

    productList.forEach(product => {
        product.addEventListener("click", function () {
            const productName = this.querySelector(".card-title").textContent;
            const productPrice = parseFloat(this.querySelector(".text-stone-700").textContent);
            totalPrice += productPrice;
            const listItem = document.createElement("li");
            listItem.textContent = serialNumber + ". " + productName;
            cartList.appendChild(listItem);
            price.textContent = "Total price: $" + totalPrice.toFixed(2);
            serialNumber++;
            if (totalPrice >= 200) {
                PurchaseBtn.removeAttribute("disabled");
            }
        });
    });

    applyBtn.addEventListener("click", function () {
        if (couponField.value == "SELL200") {
            discountPercentage = 20;
            const discountAmount = (totalPrice * discountPercentage) / 100;
            const discountedTotalPrice = totalPrice - discountAmount;
            discountText.textContent = "Discount: $" + discountAmount;
            totalPriceText.textContent = "Total: $" + discountedTotalPrice.toFixed(2);
            couponApplied = true;
            applyBtn.disabled = true;
            if (totalPrice >=200) {
                PurchaseBtn.removeAttribute("disabled");
                applyBtn.setAttribute("disabled");
            } else {
                console.log("wrong coupon");
            }
        } 
    });

    PurchaseBtn.addEventListener("click", function () {
        totalPrice = 0;
        serialNumber = 1;
        discountPercentage = 0;
        couponApplied = false;
        applyBtn.disabled = false;
        PurchaseBtn.disabled = true;
        // alert("Purchased");\\
        my_modal_3.showModal();
        cartList.innerHTML = "";
        price.textContent = "Total price: $0.00";
        discountText.textContent = "Discount: $0.00";
        totalPriceText.textContent = "Total: $0.00";
        couponField.value = "";
    });
});

