let PurchaseData = JSON.parse(localStorage.getItem("purchase")) || [ ];

let b = JSON.parse(localStorage.getItem("user")) || { }
let bal =+(b.wallet)
console.log(bal)
document.getElementById("balance").innerHTML = bal;

PurchaseData.forEach(function(elem){

    let box = document.createElement("div");
    box.setAttribute("class","voucher")

    let poster = document.createElement("img");
    poster.src = elem.image;
    poster.setAttribute("class","image")

    let name = document.createElement("p");
    name.textContent = elem.name;
    name.setAttribute("id","name")

    let price = document.createElement("p");
    price.textContent = elem.price;
    price.setAttribute("id","price")

    box.append(poster,name,price)
    document.getElementById("purchased_vouchers").append(box)

})