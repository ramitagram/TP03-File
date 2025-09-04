window.addEventListener("load", iniciar, false);

function iniciar() {
    let inputArchivo = document.getElementById("archivos");
    inputArchivo.addEventListener("change", procesar, false);
}

function procesar(e) {
    let archivo = e.target.files[0];
    let cajaDatos = document.getElementById("cajadatos");
    cajaDatos.innerHTML = "";

    if (archivo && archivo.type.match(/image.*/)) {
        const lector = new FileReader();
        lector.onload = mostrar;
        lector.readAsDataURL(archivo);
    } else {
        cajaDatos.innerHTML = "Por favor, selecciona un archivo de imagen válido.";
    }
}

function mostrar(e) {
    let resultadoURL = e.target.result;
    let cajaDatos = document.getElementById("cajadatos");

    let nuevaImagen = document.createElement("img");
    nuevaImagen.src = resultadoURL;
    nuevaImagen.style.maxWidth = "400px";

    cajaDatos.appendChild(nuevaImagen);
}