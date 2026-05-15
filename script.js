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
    const newcard=`
        <div class="game-card">
            <img src="${novo.newimage}">
            <div class="card-content">
                <h3>${novo.newname}</h3>
                <p>${novo.newsynopsis}</p>
                <span class="price">R$${novo.newprice}</span>
            </div>
        </div>
    `;
    const colecao = document.getElementById('colecao');
    console.log(newcard)
    formulario.innerHTML += newcard;
});
