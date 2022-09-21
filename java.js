addEventListener("DOMContentLoaded", ()=>{
    // DEFINIR VARIABLES NUEMRIAS
// DATOS DE ENTRADA
    // OPERACIONES BASICAS: + /*
    let prod1=Number(prompt(`coloque el valor del producto:`))
    let prod2=Number(prompt(`coloque el valor del producto:`))
    let prod3=Number(prompt(`coloque el valor del producto:`))
    let prod4=Number(prompt(`coloque el valor del producto:`))
    let prod5=Number(prompt(`coloque el valor del producto:`))
    
    //PROCESOS U OPERACIONES
    let tol=(prod1+prod2+prod3+prod4+prod5)
    let iva=Number(prompt(`coloque el valor del iva`))
    let vaiva=tol*iva
    let res=tol+vaiva
    //salida o entrada de resultado
    console-log(`valor del producto con el iva:, ${res}`)
    console-log(`el sub valor es de :,${tol}`)
    console-log(`valor del iva:, ${vaiva}`)//#8En cierta empresa se les paga a sus trabajadores de la siguiente forma: si el empleado es de planta, la hora trabajada se le paga a $20000, si el empleado es administrativo, la hora trabajada se le paga a $10000. Para calcular su pago es necesario conocer el total de horas trabajadas.
    //#ENTRADA DE DATOS
    let trabajador=prompt("dijite la (p) si es trabajador de planta, dijite la (a) si es trabajador administrativo:")
    //#proceso
    if (trabajador== ("p")){
      let horas=Number(prompt("dijte cunatas horas a trabajado en el dia laboral:"))
      let res=horas*20000
      console.log("total de horas trabajadas",horas)
      console.log("su pado es de :$",res)
    
    }else if (trabajador ==("a")){
      let horas=Number(prompt("dijte cunatas horas a trabajado en el dia laboral:"))
      let res=horas*10000
      console.log("total de horas trabajadas:",horas)
      console.log("su pado es de :$p",res)
    }
})