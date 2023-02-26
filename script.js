function getData(){


let names = document.getElementById("name").value
let email = document.getElementById("email").value
let phone = document.getElementById("phone").value
let address = document.getElementById("address").value
let subject = document.getElementById("subject").value

if(names == ""){
    return alert("Diisi ya adik-adik")
}else if(email == ""){
    return alert("Diisi ya adik-adik")
}else if(phone == ""){
    return alert("Diisi ya adik-adik")
}else if(address == ""){
    return alert("Diisi ya adik-adik")
}else if(subject == ""){
    return alert("Diisi ya adik-adik")
}

console.log(names)
console.log(email)
console.log(phone)
console.log(address)
console.log(subject)

}