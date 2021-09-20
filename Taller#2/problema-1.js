//↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓    FUNCION FLECHA    ↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓  
const robarPlano = (id, launchSheep) => {

    if (id > 0 && id <= 10) {
        let mensaje = ("Plano robado: " + id);
        launchSheep(mensaje, true);
    } else {
        let mensaje = ("plano robado incorrecto");
        launchSheep(mensaje, false);
    }

}

robarPlano(5, function (mensaje, bandera) {
    console.log(mensaje);

    if (bandera) {
        console.log("DESPEGANDO...")
    } else {
        console.log("PLANO INCORRECTO");
    }

});


//↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓    FUNCION TRADICIONAL   ↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓  


function robarPlano(id, launchSheep) {

    if (id > 0 && id <= 10) {
        let mensaje = ("Plano robado: " + id);
        launchSheep(mensaje, true);
    } else {
        let mensaje = ("plano robado incorrecto");
        launchSheep(mensaje, false);
    }

}

robarPlano(5, function (mensaje, bandera) {
    console.log(mensaje);

    if (bandera) {
        console.log("DESPEGANDO...")
    } else {
        console.log("PLANO INCORRECTO");
    }

});