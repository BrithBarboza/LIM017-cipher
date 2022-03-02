import cipher from './cipher.js';

window.addEventListener("load", inicio, true);

function inicio() {

    let menu = document.getElementsByClassName("option")
    for (let i = 0; i < menu.length; i++) {
        menu[i].addEventListener("click", function () {

            const index = Array.from(document.getElementById("options__menu").children).indexOf(menu[i]);

            switch (index) {
                case 0:
                    document.getElementById("section__0").classList.add("visible");
                    document.getElementById("section__1").classList.remove("visible");
                    break
                case 1:
                    document.getElementById("section__0").classList.remove("visible");
                    document.getElementById("section__1").classList.add("visible");
                    break
                default:
                    document.getElementById("section__0").classList.remove("visible");
                    document.getElementById("section__1").classList.remove("visible");
                    break
            }
        })
    };

    //Mayúsculas
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
