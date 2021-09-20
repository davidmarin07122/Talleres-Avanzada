//↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓    FUNCION FLECHA    ↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓  
/* const calcular = (licencia)=>{

    let Salario = 3500000;
    let Comicion = 1500000;
    let Licencia = licencia;
    let SalarioCom = 0;
    let SalarioDe =0;

    SalarioCom = (Licencia * Comicion)+ Salario;
    SalarioDe = SalarioCom * 0.05;
    salarioNeto = SalarioCom - SalarioDe;

    console.log("El salario del vendedor es de: " + salarioNeto);

}

calcular (4); */




//↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓    FUNCION TRADICIONAL   ↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓  
function calcular(licencia) {

    let Salario = 3500000;
    let Comicion = 1500000;
    let Licencia = licencia;
    let SalarioCom = 0;
    let SalarioDe = 0;

    SalarioCom = (Licencia * Comicion) + Salario;
    SalarioDe = SalarioCom * 0.05;
    salarioNeto = SalarioCom - SalarioDe;

    console.log("El salario del vendedor es de: " + salarioNeto);

}

calcular(4);
