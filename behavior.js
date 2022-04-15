var copiarTexto = "";

function encrypt(){
    var text_encriptado = document.getElementById("textoEncriptar").value.toLowerCase();
    
    text_encriptado = text_encriptado.replace(/e/gi, 'enter'); // e => enter
    text_encriptado = text_encriptado.replace(/i/gi, 'imes'); // i => imes
    text_encriptado = text_encriptado.replace(/a/gi, 'ai'); // a => ai
    text_encriptado = text_encriptado.replace(/o/gi, 'ober'); // o => ober
    text_encriptado = text_encriptado.replace(/u/gi, 'ufat'); // u => ufat

    copiarTexto = text_encriptado;
    resultado.innerHTML = '<div class="resultado"><p id="txt" class="textResultado">'+text_encriptado+'</p> <button class="btn-copiar" onclick="copiar()">Copiar</button>';
}

function decrypt(){
    var text_desencriptado = document.getElementById("textoEncriptar").value.toLowerCase();

    text_desencriptado = text_desencriptado.replace(/enter/gi, 'e'); // enter => e
    text_desencriptado = text_desencriptado.replace(/imes/gi, 'i'); // imes => i
    text_desencriptado = text_desencriptado.replace(/ai/gi, 'a'); // ai => a
    text_desencriptado = text_desencriptado.replace(/ober/gi, 'o'); // obee => o
    text_desencriptado = text_desencriptado.replace(/ufat/gi, 'u'); // ufat => u

    copiarTexto = text_desencriptado;
    resultado.innerHTML = '<div class="resultado"><p id="txt" class="textResultado">'+text_desencriptado+'</p> <button class="btn-copiar" onclick="copiar()">Copiar</button>';
}

function copiar(){
    navigator.clipboard.writeText(copiarTexto);
    console.log(txt);
}

function outFunc() {
    var tooltip = document.getElementById("myTooltip");
    tooltip.innerHTML = "Copy to clipboard";
  }
