function alterarFundo() {
    document.body.style.backgroundColor = "black";
}

const formulario = document.getElementById('formJogo');
formulario.addEventListener('submit', function (evento) {
    evento.preventDefault();
    const tituloD = document.getElementById('nome').value;
    const imagemD = document.getElementById('imagem').value;
    const trailerD = document.getElementById('trailer').value;
    const sinopseD = document.getElementById('sinopse').value;
    const dataD = document.getElementById('data').value;
    const devD = document.getElementById('dev').value;
    const novo = {
        titulo: tituloD,
        imagem: imagemD,
        trailer: trailerD,
        sinopse: sinopseD,
        data: dataD,
        dev: devD,
    };
});
