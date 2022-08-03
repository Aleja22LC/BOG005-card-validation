import validator from './validator.js';

console.log(validator);
const btnpay = document.getElementById("btnpay");
btnpay.addEventListener("click", numerocard)

/*obtener el valor que esta en numerocard*/
function numerocard() {
    let inputvalue = document.getElementById("numerocard").value;
    console.log(inputvalue)
    //alert("funciona")
    /*invoque la funcion is.valid */
    console.log(validator.isValid(inputvalue))
    //llamo la funcion de maskify 
    console.log(validator.maskify(inputvalue))

}
     //btn1.addEventListener('click', function () {

    //     document.getElementById("infopago").style.display = "none";
    //     document.getElementById("tablabasica").style.display = "block";
        
    // })


//boton pagar que ejecuta la validacion de la tc y el enmascarado
document.getElementById("btnpay").addEventListener("click", () => {
    let name = document.getElementById("nombre").value;
    let expe = document.getElementById("fechaexp").value;
    let codi = document.getElementById("ccv").value;
    let entrada = document.getElementById("numerocard").value;
    //llamo la funcion isvalid
    let aprobado = validator.isValid(entrada);
        
    if (name === '') {
        return alert("POR FAVOR INTRODUZCA NOMBRE DEL TITULAR")
    }
    if (expe === '') {
        return alert("POR FAVOR INGRESE FECHA DE EXPEDICION DE LA TARJETA")
    }
    if (codi === '') {
        return alert("POR FAVOR INGRESE CÓDIGO DE VERIFICACION DE LA TARJETA")
    }
    if (entrada === null || entrada === '') {
        return alert("POR FAVOR INGRESE EL NUMERO DE  LA TARJETA")
    }
    console.log(aprobado);

    //enmascaro el numero dentro del input llamando maskify
    let enmascarar = validator.maskify(entrada);

    document.getElementById("numerocard").value = enmascarar;

    console.log(enmascarar)

     if (aprobado == true) {
         return alert("¡NUMERO DE TARJETA VALIDO!")
     } else {
         aprobado == false
         return alert("¡NUMERO DE TARJETA NO VALIDO, POR FAVOR INTENTE NUEVAMENTE!")
     }
})

