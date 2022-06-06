function submitFun( ){
    let arr = JSON.parse(localStorage.getItem("user"))  ||  [ ]

    function UserData(name,email,address,amount){
        this.name = name;
        this.email = email;
        this.address = address;
        this.wallet = amount;
    }

let name = document.getElementById("name").value;

let email =document.getElementById("email").value;

let address = document.getElementById("address").value;

let amount = document.getElementById("amount").value;

document.getElementById("name").value = null;
document.getElementById("email").value = null;
document.getElementById("address").value = null;
document.getElementById("amount").value = null;

let p = new UserData (name,email,address,amount)
arr.push(p)
// console.log(arr)
localStorage.setItem("user",JSON.stringify(arr))
}


