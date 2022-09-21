addEventListener("DOMContentLoaded", ()=>{
    let num=Number(prompt(`ingrese el numero: `))
    if (num>0 && num<100){
        console.log(`el numero :${num} era menor que 100`)
    }else{
        console.log(`es menor que 100 `)
        console.log(`el numero esta entre 100`)
    }
    
})