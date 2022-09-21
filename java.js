addEventListener("DOMContentLoaded", ()=>{
    let num1=Number(prompt("ingrese el primer numero "))
    let num2=Number(prompt("ingrese el segundo numero "))
    let num3=Number(prompt("ingrese el tercer numero "))
    if (num1>num2 && num1>num3){
    console.log("primer numero es mayor ")
    }else if (num2>num3 && num2>num1){
    console.log(" segundo numero es mayor ")
    }else{
      console.log(" el numero tres es mayor ")
    }
})