import cipher from './cipher.js';

window.addEventListener("load", inicio, true);

//Mayúsculas
function inicio() {
    // let a= document.getElementById("options__menu").children;
    // console.log("holi2",a);

    document.getElementById("text").addEventListener("keyup", function () {
        this.value = this.value.toUpperCase(); //con this llamo al elemento que previamente he llamado (text)
    }, true);

    document.getElementById("btn1").addEventListener("click", function () {
        let string = document.getElementById("text").value;
        let offset = document.getElementById("offset").value;
        document.getElementById("text2").value = cipher.encode(offset, string);
    }, true);

    document.getElementById("btn2").addEventListener("click", function () {
        let string = document.getElementById("text").value;
        let offset = document.getElementById("offset").value;
        document.getElementById("text2").value = cipher.decode(offset, string);
    }, true);

}

console.log('cipher');
