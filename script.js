function alterarFundo() {
    document.body.style.backgroundColor = "black";
}

const formulario = document.getElementById('formJogo');
formulario.addEventListener('submit', function (evento) {
    evento.preventDefault();
    const tituloD = document.getElementById('nome').value;
    const imagemD = document.getElementById('imagem').value; const novo = {
        titulo: tituloD,
        imagem: imagemD
    };
});
