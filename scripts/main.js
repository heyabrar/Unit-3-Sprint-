let arr = JSON.parse(localStorage.getItem("user"))  ||  { };
function submitFun( ){

        let name = document.getElementById("name").value;

        let email =document.getElementById("email").value;

        let address = document.getElementById("address").value;

        let amount = document.getElementById("amount").value;
    
    function UserData(name,email,address,amount){
        this.name = name;
        this.email = email;
        this.address = address;
        this.wallet = amount;
    }
let p = new UserData (name,email,address,amount);

localStorage.setItem("user",JSON.stringify(p))
window.location.reload();
}


