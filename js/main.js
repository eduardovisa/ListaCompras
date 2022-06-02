let contador = 1;
let costoTotal = 0;
let totalEnProductos = 0;
let element = document.getElementById("totalPrecio");
element.innerHTML = "Total en precio";

let txtNombre = document.getElementById("name");
// txtNombre.value = "Leche Semidescremada";
// console.log(txtNombre.value);
let txtNumber = document.getElementById("Number");

let total = document.getElementById("precioTotal");

// let campos = document.getElementsByClassName("campo");
// // console.log(campos.length);
// campos[0].value = "Leche descremada deslactosada light=Agua";
// console.log(campos[0].value);
// console.log(campos);

// for (let i = 0; i < campos.length; i++) {
//     campos[i].style.border = "red thin solid";
// } // for

// let spans = document.getElementsByTagName("span");
// for (let i = 0; i < spans.length; i++) {
//     console.log(spans[i].textContent);
// } // for

let tabla = document.getElementById("tablaListaCompras");
let cuerpoTabla = tabla.getElementsByTagName("tbody");

// cuerpoTabla[0].innerHTML = `
//     <tr>
//         <th scope="row">1</th>
//         <td>Leche descremada</td></td>
//         <td>3</td>
//         <td>$ 23</td>
//     </tr>
// `;

// console.log(agregar);
// agregar.onclick = 

function validarNombre() {
    if (txtNombre.value.length < 3) {
        return false;
    } // if
    return true; 
} // validación

function validarCantidad(){
    if(txtNumber.value.length==0) {
        return false;
    }// if
    if (isNaN(txtNumber.value)){
        return false;
    }//if

    if (parseFloat(txtNumber.value)<=0) {
        return false;
    }//if
    return true;
}// validarCantidad


let agregar = document.getElementById("btnAgregar");

agregar.addEventListener("click", (event) => {
    event.preventDefault();
    if ((! validarNombre()) || (! validarCantidad())) {
        document.getElementById("alertValidaciones").style.display = "block";
        let lista = "";
        if (! validarNombre()) {
            txtNombre.style.border = "red thin solid";
            lista += "<li>Se debe de escribir un nombre válido.</li>";
        } else {
            txtNombre.style.border = "";
        } // if
        if (! validarCantidad()) {
            txtNumber.style.border = "red thin solid";
            lista += "<li>Se debe de escribir una cantidad válida.</li>";
        } else {
            txtNumber.style.border = "";
        } // if
        document.getElementById("alertValidaciones").innerHTML = `Los campos deben de ser llenados correctamente.
        <ul>${lista}</ul>`;

        setTimeout (function(){
            document.getElementById("alertValidaciones").style.display = "none";
        }, 
            5000
        );

        return false;
    } // if

    txtNombre.style.border = "";
    txtNumber.style.border = "";
    document.getElementById("alertValidaciones").style.display = "none";
    let precio = (Math.floor((Math.random() * 50) * 100)) / 100;
    costoTotal += parseFloat(txtNumber.value) * precio;
    let cantidad = parseFloat(txtNumber.value);
    totalEnProductos += (cantidad<1)? Math.ceil(cantidad):parseInt(cantidad);
    tmp = `
    <tr>
    <th scope="row">${contador}</th>
    <td>${txtNombre.value}</td>
    <td>${txtNumber.value}</td>
    <td>$ ${precio}</td>
    </tr>`;
    document.getElementById("contadorProductos").innerHTML = contador;
    cuerpoTabla[0].innerHTML += tmp;
    total.innerHTML = `$ ${costoTotal.toFixed(2)}`;
    document.getElementById("totalProductos").innerHTML = totalEnProductos;

    txtNombre.value = "";
    txtNumber.value = "";
    txtNombre.focus();
    contador++;   

    // console.log("click en el botón agregar", event);
    // console.log(txtNombre.value, txtNumber.value);
    // console.log(tmp);
});

// evento cuando s epierde el focus
txtNombre.addEventListener("blur", (event) => {
    // el target hace referencia al txtNombre
    event.target.value = event.target.value.trim();
});

txtNumber.addEventListener("blur", (event) => {
    event.target.value = event.target.value.trim();
});