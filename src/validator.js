const validator = {
    isValid: function (creditCardNumber) {

        //convertir un string en un array
        const digits = Array.from(creditCardNumber)
        //https://es.stackoverflow.com/questions/154491/suma-de-cifras-de-un-numero-en-javascript
        let salida = [];

        //obtener la reversa del array (metodo reverse(), altera el array que se ejecuta)
        digits.reverse();
        console.log(digits)

        //recorrer cada digito del array (posicion "posi" y valor "val")
        digits.forEach((val, posi) => {
            //posi = aisla las posiciones pares
            if (posi % 2 === 0) {
                //se multiplican por 2 los valores aislados
                let pares = val * 2

                // si el resultado es mayor de 9 se suman los digitos de dos cifras
                if (pares > 9) {
                    //push añade un valor a un array, luego lo convierto en cadena, lo divido o separo, 
                    //.reduce"reduce cada elemento y lo devuelve un unico valor"
                    salida.push(pares.toString().split("").reduce((a, b) =>
                        //parseint vuelve numeros los valores separados
                        parseInt(a) + parseInt(b)));
                }
                //consigo mis valores pares
                else {
                    salida.push(pares);
                }
                
                //consigo los valores impares
                else {
                salida.push(parseInt(val));
            }
            
        }});
    
        
    
      
        
    }

    //como sumo los numeros que hay dentro de un array
    //como verificar que un numero de un array es multiplo de 10

};


export default validator;