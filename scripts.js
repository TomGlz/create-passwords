let show = document.getElementById("password");
const alertBox = document.getElementById("alert");
function generatePassword() {
    let pass = '';
    let options = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789@#$!%';
    for (let i = 0; i <= 10; i++) {
        let char = Math.floor(Math.random()* options.length);
            pass += options.charAt(char);
    }
    return pass;
}
function printPass() {
    alertBox.innerHTML="";
    show.innerHTML = generatePassword();
}
function copy(){
let textToCopy = document.getElementById("password").innerHTML;
navigator.clipboard.writeText(textToCopy);
alertBox.innerHTML='<div id="alert" class="col-8 offset-2 col-md-4 offset-md-4 glass text-white p-3 text-center">Contraseña copiada</div>'
}