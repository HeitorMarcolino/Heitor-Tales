function alterarFundo(){
document.body.style.backgroundColor =
black;
}

const formulario = document.getElementById('form');
formulario.addEventListener('submit',function(evento){
evento.preventDefault();
const tituloD = document.getElementById('titulo').value;
const imagemD = document.getElementById('imagem').value;const novo = {
titulo: tituloD,
imagem: imagemD
};});
