
/*
let b = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz1234567890"
console.log(b.charAt(2)); */

/*
function genareteCode(n) {

    let a = ''   
    let b = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz1234567890"
    for (let i = 0; i < n; i++) {
          a += b.charAt(Math.floor(Math.random() * b.length))
    }
    return a;
}
console.log(genareteCode(5)); */

const passwordField = document.getElementById("password");
const generateButton = document.getElementById("generate");


generateButton.addEventListener("click", function() {
    let update = ''; 
    let random = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!@#$%&*_+";
    let n = 10;
    for (let i = 0; i < n; i++) {
         update += random.charAt(Math.floor(Math.random() * random.length));
    }
    passwordField.value = update;

});

