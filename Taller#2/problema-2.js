//↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓    FUNCION TRADICIONAL   ↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓  

/* function asociar ( nombre, planeta, edad, estatura,clasificar) {

    let padawan = {

        nombre: nombre,
        planeta: planeta,
        edad: edad,
        estatura: estatura

    }
    clasificar(padawan.edad);
}

asociar("ad","df",30,1.80, function (edad) {

    if (edad < 15) {
        console.log("manejo de la fuerza ");
    } else if (edad >= 15) {s
        console.log("manejo del sable de luz");
    }

});
 */


//↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓    FUNCION FLECHA    ↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓  
const asociar = (nombre, planeta, edad, estatura, clasificar) => {

    let padawan = {

        nombre: nombre,
        planeta: planeta,
        edad: edad,
        estatura: estatura

    }
    clasificar(padawan.edad);
}

asociar("ad", "df", 30, 1.80, function (edad) {

    if (edad < 15) {
        console.log("manejo de la fuerza ");
    } else if (edad >= 15) {
        console.log("manejo del sable de luz");
    }

});