const characters =["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z",
    "a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z",
     "0", "1", "2", "3", "4", "5", "6", "7", "8", "9","~","`","!","@","#","$","%","^","&","*","(",")","_","-",
     "+","=","{","[","}","]",",","|",":",";","<",">",".","?",
    "/"];

let password1 = "";
let password2 = "";

let canGenerate = true;

function Generate(){
    if(canGenerate===true){

for(i=0; i<15;i++){
    let a = Math.floor((Math.random() * characters.length));
    let b = characters[a];
     password1 += b; 
}

for(j=0; j<15;j++){
    let c = Math.floor((Math.random() * characters.length));
    let d = characters[c];
     password2 += d; 
}

let pass1EL = document.getElementById("pass1");
pass1EL.textContent = password1;

let pass2EL = document.getElementById("pass2");
pass2EL.textContent = password2;
    canGenerate = false;
    }
}