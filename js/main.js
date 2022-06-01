let element = document.getElementById("totalPrecio");
element.innerHTML = "Total en precio";

let txtNombre = document.getElementById("name");
// txtNombre.value = "Leche Semidescremada";
// console.log(txtNombre.value);
let txtNumber = document.getElementById("Number");

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

let agregar = document.getElementById("btnAgregar");
// console.log(agregar);
// agregar.onclick = 

let indice = 1;
agregar.addEventListener("click", (event) => {
    // console.log("click en el botón agregar", event);
    let precio = Math.random() * 50;
    tmp = `
        <tr>
            <th scope="row">${indice}</th>
            <td>${txtNombre.value}</td>
            <td>${txtNumber.value}</td>
            <td>$ ${precio}</td>
        </tr>`;
        cuerpoTabla[0].innerHTML += tmp;
        txtNombre.value = "";
        txtNumber.value = "";
        txtNombre.focus();

        indice++;
    // console.log(txtNombre.value, txtNumber.value);
    // console.log(tmp);
});