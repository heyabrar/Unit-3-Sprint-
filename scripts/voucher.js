// let balance = JSON.parse(localStorage.getItem("user"));
// // console.log(balance)
// balance.forEach(function(elem){
//     let b = document.createElement("h3");
//     b.innerText = elem.wallet;
//     console.log(b)
//     document.getElementById("wallet_balance").append(b)
// })

let url = " https://masai-vouchers-api.herokuapp.com/api/vouchers"

fetch (url).then(( res ) =>{
    res.json( ).then((res) =>{
        // console.log(res)
        for(let i=0; i<res.length; i++)
        {
            // console.log(res[i])
            appendFun(res[i].vouchers)
        }
    })
})
.catch((err) =>{
    console.log(err);
})

let appendFun = (res) =>{
    // console.log(res)
    res.forEach(function(elem,index){
        let box = document.createElement("div");
        box.setAttribute("class","voucher")

        let poster = document.createElement("img");
        poster.src = elem.image;
        poster.setAttribute("class","image")

        let name = document.createElement("p");
        name.textContent = elem.name;
        name.setAttribute("class","n'")

        let price = document.createElement("p");
        price.textContent = elem.price;
        price.setAttribute("class","p'")

        let button = document.createElement("button");
        button.setAttribute("class","button");
        button.innerText = "Buy";
        button.addEventListener("click", function( ){
            buybutton(elem,index)
        })
        // console.log(name)
        box.append(poster,name,price,button)
        document.getElementById("voucher_list").append(box);
    })
}
function buybutton(elem,index){
    let balance = JSON.parse(localStorage.getItem("user"));
console.log(balance)
    if(elem.price >= balance.wallet )
    {
        alert("Hurray! purchase successful")
    }
    else
    {
        alert("Sorry! insufficient balance")
    }
    console.log("sdfsafsffg")

    localStorage.setItem("purchase",JSON.stringify(elem))
}
