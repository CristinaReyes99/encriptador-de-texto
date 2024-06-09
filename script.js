
//Funcion para convertir las mayusculas a minusculas en el textarea escribir texto
function convertirMinusculas(event) {
    let codigoTecla = event.keyCode || event.which;
    
    if (codigoTecla >= 65 && codigoTecla <= 90) {
        
        let letraMinuscula = String.fromCharCode(codigoTecla + 32);
        let textarea = event.target;
        let posicionCursor = textarea.selectionStart;
        
        let textoAntes = textarea.value.substring(0, posicionCursor);
        let textoDespues = textarea.value.substring(posicionCursor);

        textarea.value = textoAntes + letraMinuscula + textoDespues;
        textarea.setSelectionRange(posicionCursor + 1, posicionCursor + 1);
    }

    if ((codigoTecla >= 97 && codigoTecla <= 122) || codigoTecla === 8 || codigoTecla === 32) {
        // Permitir la tecla
        return true;
    } else {
        // Bloquear la tecla
        event.preventDefault();
        return false;
    }
}

let textarea = document.getElementById("escribirTexto");
textarea.addEventListener("keypress", convertirMinusculas);

//Funcion para Encriptar texto
function encriptarTexto() {
    let textarea = document.getElementById("escribirTexto");
    let textoOriginal = textarea.value.toLowerCase();
    let textoEncriptado = encriptarConLlaves(textoOriginal);
    devolverTexto.innerHTML = textoEncriptado;
    subtituloTextArea("Resultado del texto encriptado:");
    limpiarExcribirTexto();
}
function encriptarConLlaves(texto) {
    let textoEncriptado = texto.replace(/e/g, "enter")
                               .replace(/i/g, "imes")
                               .replace(/a/g, "ai")
                               .replace(/o/g, "ober")
                               .replace(/u/g, "ufat");
    return textoEncriptado;
}

function desencriptarTexto() {
    let textarea = document.getElementById("escribirTexto");
    let textoOriginal = textarea.value.toLowerCase();
    let textoDesencriptado = desencriptarTextoConLlaves(textoOriginal);
    devolverTexto.innerHTML = textoDesencriptado;
    subtituloTextArea("Resultado del texto desencriptado");
    limpiarExcribirTexto();
    
}

//Funcion para desencriptar texto
function desencriptarTextoConLlaves(texto) {
    let textoDesencriptado = texto.replace(/enter/g, "e")
                               .replace(/imes/g, "i")
                               .replace(/ai/g, "a")
                               .replace(/ober/g, "o")
                               .replace(/ufat/g, "u");
    return textoDesencriptado;
}
//Imprimir acción de los botones del textarea-transformarTexto
function subtituloTextArea(texto){
    let textarea = document.getElementById("escribirTexto");
    let label = document.getElementById("devolversubTitulo");
    if (textarea.value === '') {
        label.innerHTML = "No se encontró ningún mensaje";
    }else{
        label.innerHTML = texto;
    }
    return;
}
//Funcion para Restablecer el textarea (escribirTexto)
function limpiarExcribirTexto () {
    document.querySelector('#escribirTexto').value = '';
    return;
}

// Boton para copiar al portapapeles texto transformado
function copiarTexto() {
    let textarea = document.getElementById("devolverTexto");
    textarea.select();
    textarea.setSelectionRange(0, 99999); 
    document.execCommand("copy");
    textarea.blur();
    botonParaCopiar();
}

//Funcion para boton Copiar notifique que ha sido copiado el resultado
function botonParaCopiar(){
    let botonCopiado = document.getElementById("botonParaCopiar")
    let textoOriginal = botonCopiado.innerText;
    botonCopiado.innerText = "¡Copiado!";
        setTimeout(() => {
            botonCopiado.innerText = textoOriginal;
    }, 2000);
}