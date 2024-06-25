
const passwordBox = document.getElementById("Password");
const num = 12;


const uppercase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const lowercase = "abcdefghijklmnopqrstuvwxyz";
const numbers = "0987654321";
const symbols = "@";

const allChars = uppercase + lowercase + numbers + symbols;
function CreatePass(){
    let password = "";
    password += uppercase[Math.floor(Math.random() * uppercase.length)];
    password += lowercase[Math.floor(Math.random() * lowercase.length)];
    password += numbers[Math.floor(Math.random() * numbers.length)];
    password += symbols[Math.floor(Math.random() * symbols.length)];

    while(num > password.length){
        password += allChars[Math.floor(Math.random() * allChars.length)];
    }
    passwordBox.value = password;
}

function copyPassword(){
    passwordBox.select();
    document.execCommand("copy")
    alert
}