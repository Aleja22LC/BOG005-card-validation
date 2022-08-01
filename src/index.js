import validator from './validator.js';

console.log(validator);
const btnpay = document.getElementById("btnpay")
btnpay.addEventListener("click", numerocard)

/*obtener el valor que esta en numerocard*/
function numerocard() {
    let inputvalue = document.getElementById("numerocard").value;
    console.log(inputvalue)
    //alert("funciona")
    /*invoque la funcion is.valid */
    console.log(validator.isValid(inputvalue))
    //llamo la funcion de masky 
    console.log(validator.maskify(inputvalue))

}

//