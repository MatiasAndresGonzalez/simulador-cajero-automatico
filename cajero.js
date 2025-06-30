
let saldoInicial = 100000; // LINEA 1 - Variable global donde se guarda saldo inicial
let opciones = [`1. Consultar Saldo`,`2. Depositar Dinero`,`3. Retirar Dinero`,`4. Generar Clave Home Banking`,`5. Pagar Servicios`,`6. Salir del Cajero`]; // LINEA 2 - Es un array o arreglo que contiene las opciones del cajero, que va a ser utilizado por el usuario.

let salir = false; // LINEA 4 - Variable global que se utiliza para controlar si el usuario quiere salir.
function inicio(){
// LINEA 8 - Comienza el WHILE que es un bucle que se repite un bloque de código mientras una condición sea verdadera, dentro del bucle esta desarrollado toda la sintaxis de programacion.
while (!salir) {
    let menu = "";// LINEA 9 - variable vacia que al momento de que el bucle se repita, vuelve el menu a cero, si que se repita el mismo.
    opciones.forEach((opcion) => {menu += `${opcion}\n`}); //LINEA 10 - Atraves del método FOREACH que se utiliza para iterar sobre el array o arreglo que se llama opciones, el cual se encuentra en la LINEA 2, arma el menu del cajero concatenando string. (la \n sirve para que a medida que se va aconcatenando las opciones se coloque una bajo de la otra).

    //LINEA 13 - es una variable donde se guarda el MENU elegido por el usuario, mediante el PROMPT se ingrea de forma de string, tranfomandose en un numero entero mediante el PASEINT.
    let seleccion = parseInt(prompt(`Menú del Cajero Automático:\n\n${menu}\nSeleccione una opción:`));// 

    //LINEA 16 - comienza SWITCH que es una estructura de control que permite tomar decisiones , evalúa una expresión y ejecuta el bloque de código correspondiente al CASO que coincide con el valor de la expresión. Si ninguno de los casos coincide, se puede ejecutar un bloque default
    switch (seleccion) { 
    case 1: // LINEA 16 - Comienza el 1er bloque "Consultar Saldo"
        alert(`Su saldo actual es: $${saldoInicial}`); // LINEA 17 - atraves del ALERT (función integrada que muestra una ventana emergente) nos mostrara el saldo inicial del cajero.
        break;// LINEA 19 - Fin del 1er bloque "Consultar Saldo"

    case 2: //LINEA 21 - Comienza el 2do bloque "Depositar Dinero"
        let deposito = parseInt(prompt(`Ingrese el monto a depositar:`)); // LINEA 22 -  variable donde se guarda el monto que entra en forma de string, tranformandose en un numero entero atravez de PARSEINT

        // LINEA 24 - Comienza estructura de control (if - else) que permite tomar decisiones en el código, atravez de la condiciones puesta, Se  ejecutara un bloque de código si una condición es verdadera (true) y otro bloque si es falsa (false). el bloque comienza en la LINEA 25 y finaliza en LINEA 30.
        if (isNaN(deposito) || deposito <= 0) {
        alert(`Monto inválido. Intente de nuevo.`);
        } else {
        saldoInicial += deposito;
        alert(`Depósito exitoso. Nuevo saldo: $${saldoInicial}`);
        }
        break;//LINEA 31 - Fin el 2do bloque "Depositar Dinero"

    case 3: //LINEA 32 - Comienza el 3er bloque "Retiro Dinero"
        let monto = parseInt(prompt(`Ingrese el monto que desea retirar:`)); //LINEA 33 - Variable (monto) que se guarda el monto ingresado por el usuario mediante un string, tranformandose en un numero entero atrasves del PARSEINT.
        const billetes = [1000, 500, 200, 100]; // LINEA 34 - donde guardamos la denominacion de los Billetes.
        let entregaBillete = ""; // LINEA 35 - Variable Vacia para ser utilizada mas abajo.

// LINEA 38 - Comienza estructura de control (if - else) que permite tomar decisiones en el código, atravez de la condiciones puesta, Se  ejecutara un bloque de código si una condición es verdadera (true) y otro bloque si es falsa (false). conforme a la condicion se ejecutara una ventana emergente ALERT, mostrando una leyenda, el bloque comienza en la LINEA 38 cuando se abre la llave y finaliza en LINEA 50 cuando se cierra la llave.
        if (isNaN(monto) || monto <= 0) {
        alert(`Monto inválido.`);
        } else if (monto > saldoInicial) {
        alert(`Fondos insuficientes.`);
        } else {
        let montoRestante = monto;
        let billetesEntregados = [];// LINEA 44 - es un arra y o arreglo vacion para ser llenado mediante metodo .push en la LINEA 49.
        
        //LINEA 47 - Atraves del método FOREACH que se utiliza para iterar sobre el array o arreglo que se llama billetes, Utilizamos para llenar el array o arreglo vacion en la LINEA 44, mas arriba.
        billetes.forEach((billete) => {
            let cantidad = parseInt(montoRestante / billete);
            billetesEntregados.push(cantidad); // LINEA 49 - se encuentra el Metodo .push para llenar el array o arreglo que se encuentra en la LINEA 44.
            montoRestante -= cantidad * billete;
        });
        
// LINEA 54 - Comienza estructura de control (if - else if - else) que permite tomar decisiones en el código, atravez de la condiciones puesta, Se  ejecutara un bloque de código si una condición es verdadera (true) y otro bloque si es falsa (false). conforme a la condicion se ejecutara una ventana emergente ALERT, mostrando una leyenda y al mismo tiempo mostrando variables y array o arreglos, el bloque comienza en la LINEA 54 cuando se abre la llave y finaliza en LINEA 65 cuando se cierra la llave.
        if (montoRestante > 0) {
            alert(`No se puede entregar el monto exacto con los billetes disponibles.`);
        } else {
            billetes.forEach((billete, i) => {
            if (billetesEntregados[i] > 0) {
                entregaBillete += `${billetesEntregados[i]} billetes de $${billete}\n`;
            }
            });
            saldoInicial -= monto;
            alert(`Retiro exitoso.\n\nSe entregó:\n${entregaBillete}Saldo restante: $${saldoInicial}`);//LINEA 102 - muestra ventana emergente con leyenda y una variable atrasves del ALERT.
        }
        }
        break;//LINEA 66 - Fin el 3er bloque "Retiro Dinero"

    case 4: //LINEA 68 - Comienza el 4to bloque "Generar clave Home Banking"
        alert(`Ud. está por generar una clave de Home Banking`); // LINEA 69 - muestra ventana emergente al usuario, con la leyenda que esta dentro de los parentecis.
        //LINEAS 71 y 72 - se solicita al usuario que ingrese por teclado y repita un string (clave), se utiliza el metodo .trim() para borrar espacios vacios que puiese ingresar el usuario al momento de ingresar ambas claves.
        let clave = prompt(`Ingrese clave alfanumerica: `).trim();
        let clave2 = prompt(`Repita la clave alfanumerica: `).trim();

// LINEA 75 - Comienza estructura de control (if - else) que permite tomar decisiones en el código, atravez de la condiciones puesta, Se  ejecutara un bloque de código si una condición es verdadera (true) y otro bloque si es falsa (false). conforme a la condicion se ejecutara una ventana emergente ALERT, mostrando una leyenda y al mismo tiempo mostrando variables, el bloque comienza en la LINEA 75 cuando se abre la llave y finaliza en LINEA 79 cuando se cierra la llave.
        if (clave === clave2 && clave.length === 6) {
        alert(`Clave generada exitosamente.\nSu clave es: ${clave}`);//LINEA 76 - muestra ventana emergente con leyenda y una variable atrasves del ALERT.
        } else {
        alert(`Las claves no coinciden o no tienen 6 caracteres. Intente nuevamente.`);//LINEA 78 - muestra ventana emergente con leyenda y una variable atrasves del ALERT.
        }
    break;//LINEA 80 - Fin el 4to bloque "Generar clave Home Banking"

    case 5: //LINEA 82 - Comienza el 5to bloque "Pagar Servicios"
    let servicios = [`1. Servicio de Luz`,`2. Servicio de Agua`,`3. Servicio de Gas`,`4. Servicio de Internet`];// LINEA 83- Es un array o arreglo que contiene las subopciones del cajero, dentro de la opcion pagar servicios, que va a ser utilizado por el usuario.

    let menuServicios = ""; // LINEA 85 -variable vacia, para ser usada mas abajo.

//LINEA 88 - Atraves del método FOREACH que se utiliza para iterar sobre el array o arreglo que se llama servicios, arma el submenu de la opcion pagar servicio concatenando string. (la \n sirve para que a medida que se va aconcatenando las opciones se coloque una bajo de la otra).
    servicios.forEach((s) => { menuServicios += `${s}\n`; });
    
//LINEA 92 - es una variable donde se guarda el SUBMENU elegido por el usuario, mediante el PROMPT se ingrea de forma de string, tranfomandose en un numero entero mediante el PASEINT.
    let opcionServicio = parseInt(prompt(`Servicios disponibles:\n\n${menuServicios}\nSeleccione una opción:`));

// LINEA 94 - Es un array o arreglo que contiene las subopciones de la opcion pagar servicios, que va a ser utilizado por el usuario.
        let nombreServicio = ["luz", "agua", "gas", "internet"][opcionServicio - 1];

// LINEA 97 - Comienza estructura de control (if - else if - else) que permite tomar decisiones en el código, atravez de la condiciones puesta, Se  ejecutara un bloque de código si una condición es verdadera (true) y otro bloque si es falsa (false). conforme a la condicion se ejecutara una ventana emergente ALERT, mostrando una leyenda y al mismo tiempo mostrando variables, el bloque comienza en la LINEA 97 cuando se abre la llave y finaliza en LINEA 109 cuando se cierra la llave.
        if (opcionServicio >= 1 && opcionServicio <= 4) {
        let deuda = parseFloat(prompt(`Ingrese el monto a pagar para ${nombreServicio}:`));
        if (isNaN(deuda) || deuda <= 0) {
            alert(`Monto inválido.`);//LINEA 100 - muestra ventana emergente con leyenda atrasves del ALERT.
        } else if (deuda > saldoInicial) {
            alert(`Saldo insuficiente para pagar el servicio de ${nombreServicio}.`);//LINEA 102 - muestra ventana emergente con leyenda y una variable atrasves del ALERT.
        } else {
            saldoInicial -= deuda;
            alert(`Pago exitoso del servicio de ${nombreServicio}.\nSaldo restante: $${saldoInicial}`);
        }
        } else {
        alert(`Opción de servicio inválida.`);//LINEA 108 - muestra ventana emergente con leyenda atrasves del ALERT.
        }
        break;//LINEA 110 - Fin el 5to bloque "Pagar Servicios"

    case 6: //LINEA 112 - Comienza el 5to bloque "Salir"

    // LINEA 115 - Se solicita al usuario que ingrese mediante un PROMPT una condicion para ser guardada en la variable CONFIRMACION, en la misma linea se utiliza el metodo .toLowerCase encargado de tranformar string en minusculas.
        let confirmacion = prompt(`¿Desea salir del cajero? (S para salir / N para continuar):`).toLowerCase(); 

// LINEA 118 - Comienza estructura de control (if - else) que permite tomar decisiones en el código, atravez de la condiciones puesta, Se  ejecutara un bloque de código si una condición es verdadera (true) y otro bloque si es falsa (false). conforme a la condicion se ejecutara una ventana emergente ALERT, mostrando una leyenda y al mismo tiempo mostrando variables, el bloque comienza en la LINEA 118 cuando se abre la llave y finaliza en LINEA 123 cuando se cierra la llave.
        if (confirmacion === "s") {
        alert(`Gracias por usar el Cajero Automático. ¡Hasta luego!`);//LINEA 119 - muestra ventana emergente con leyenda atrasves del ALERT.
        salir = true; 
        } else {
        alert(`Continuando con la sesión...`);//LINEA 122 - muestra ventana emergente con leyenda atrasves del ALERT.
        }
        break; //LINEA 124 - Fin el 5to bloque "Salir"

// en caso de no cumplir con la condiciones del SWITCH, pasa a una ultima instancia que seria por DEFAULT.
    default:
        alert(`Opción inválida. Intente nuevamente.`); //LINEA 128 - muestra ventana emergente con leyenda atrasves del ALERT.
        break;//LINEA 129 - Fin "default"
    }
}}
