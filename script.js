function alterarFundo() {
    document.body.style.backgroundColor = "black";
}

const formulario = document.getElementById('formjogo');

formulario.addEventListener('submit', function (evento) {
    evento.preventDefault();

    const newname = document.getElementById('nome').value;
    const newimage = document.getElementById('imagem').value;
    const newsynopsis = document.getElementById('sinopse').value;
    const newprice = document.getElementById('preco').value;

    const novo = {
        newname,
        newimage,
        newsynopsis,
        newprice
    };
});
