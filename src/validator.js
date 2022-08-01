const validator = {
    isValid: function (creditCardNumber) {
        //invoca cualquier funcionalidad de depuración disponible
        //debugger;

        //convertir un string en un array
        const digits = Array.from(creditCardNumber)

        //creo variable para la reversa //obtener la reversa del array        
        let reversedigits = digits.reverse();
        console.log(reversedigits)

        //declararar variable para la suma de los valores finales pares e impares
        let sumatotal = [];

        let todoslosarray = []
        //recorrer cada digito del array (posicion "posi" y valor "val")
        reversedigits.forEach((val, posi) => {
            //posi = aisla las posiciones pares

            if (posi % 2 === 0) {
                //se multiplican por 2 los valores aislados
                let pares = val * 2
                todoslosarray.push(pares)

                // console.log(arraypares)
                //sumo los numeros mayores de 9 o de con digitos
                if (pares > 9) {
                    //los #>9=pares al sumar sus digitos y restar este resultado obtenido siempre da 9
                    let sumapares = pares - 9
                    // uso push para modificar o cambiar los elemnetos del array 
                    //parseint me devuelve el numero entero despues de separarlo en digitos
                    sumatotal.push(pares.toString().split("").reduce((a, b) => parseInt(a) + parseInt(b)));

                    //console.log("cambioparametros")

                } else {
                    sumatotal.push(pares);
                }

            } else {
                todoslosarray.push(parseInt(val))

                // sumatotal.push(parseInt(val));
                // console.log("elseparaimpares")
            }

        });
        console.log(todoslosarray)

        //sumo los numeros que hay dentro de un array
        const sumaarray = todoslosarray.reduce((a, b) => a + b);
        console.log(sumaarray)

        //como verificar que un numero de un array es multiplo de 10
        if (sumaarray % 10 === 0) {
            return true;
        } else {
            return false;
        }
    },

    maskify: function (creditCardNumber) {
        //variable para usar al momento de concatenar
        let maskifai = '';
        //obtengo los primeros 12 numeros de la tarjeta //remplazo los numeros con ####
        let primeros12 = creditCardNumber.toString().slice(0, -4).replace(/\w/g, '#');
        console.log(primeros12)
        //obtengo los ultimos 4 numeros de la tarjeta que no cambian
        let ultimos4 = creditCardNumber.toString().slice(-4);
        console.log(ultimos4)
        //sumo las dos variables
        maskifai = primeros12 + ultimos4

        console.log(maskifai)
        return maskifai;

    }


    



    // cardnumber valid 4912685103187545

};


export default validator;