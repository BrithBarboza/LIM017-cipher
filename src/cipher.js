const cipher = {

    encode: (offset, string) => {
        if (typeof string !== 'string') {
            throw new TypeError('bad arguments');
        }

        let result = "";
        let alphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";

        offset = (offset % 26 + 26) % 26; // primero me aseguro que el desplazamiento sea mayor a cero y 26, luego de que esté comprendido entre 0 y 25

        if (string) {
            for (let i = 0; i < string.length; i++) { // detecta si está en el array de letras, si no lo está entonces lo deja tal cual
                if (alphabet.indexOf(string[i]) != -1) {
                    let posicion = ((alphabet.indexOf(string[i]) + offset) % 26);//aquí guardo la posición de la letra que ingreso
                    result += alphabet[posicion];
                }
                else { result += string[i];}
            }
        }
        return result;
    },

    decode: (offset, string) => {
        if (typeof string !== 'string') {
            throw new TypeError('bad arguments');
        }
        let result = "";
        let alphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";

        offset = (offset % 26 + 26) % 26;

        if (string !== "") {
            for (let i = 0; i < string.length; i++) { // detecta si está en el array de letras, si no lo está entonces lo deja tal cual
                if (alphabet.indexOf(string[i]) != -1) {
                    let posicion = ((alphabet.indexOf(string[i]) - offset) % 26);//aquí guardo la posición de la letra que ingreso
                    if (posicion < 0) {
                        posicion = 26 - (posicion * -1)
                    }
                    result += alphabet[posicion];
                }
                else { result += string[i]; }
            }
        }
        return result;
    }

}

export default cipher;

console.log('holi');