
let b = JSON.parse(localStorage.getItem("user")) || { };
let bal =+(b.wallet)
console.log(bal)
document.getElementById("wallet_balance").innerHTML = bal;

let PurchaseData = JSON.parse(localStorage.getItem("purchase"))|| [ ];


let url = " https://masai-vouchers-api.herokuapp.com/api/vouchers"

fetch (url).then(( res ) =>{
    res.json( ).then((res) =>{
        for(let i=0; i<res.length; i++)
        {
            appendFun(res[i].vouchers)
        }
    })
})
.catch((err) =>{
    console.log(err);
})

let appendFun = (res) =>{
    // console.log(res)
    res.forEach(function(elem){
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

        let button = document.createElement("button");
        button.setAttribute("class","button");
        button.innerText = "Buy";
        button.addEventListener("click", function( ){
            buybutton(elem,b)
        })
        // console.log(name)
        box.append(poster,name,price,button)
        document.getElementById("voucher_list").append(box);
    })

function buybutton(elem,b){
    // console.log(elem.price, +(b.wallet))
    if( b.wallet>=elem.price)
    {
        alert("Hurray ! Purchase Sucessfull")
        bal =bal-elem.price;
        document.getElementById("wallet_balance").innerHTML = bal;
        b.wallet = bal
        let data = b;
        localStorage.setItem("user",JSON.stringify(data));

        PurchaseData.push(elem);
        localStorage.setItem("purchase",JSON.stringify(PurchaseData));
    }
    else
    {
        alert("Sorry ! Insufficient Balance")
    }
}
}
