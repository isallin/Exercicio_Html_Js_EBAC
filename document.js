const form = document.getElementById('form-container');
const campoA = document.getElementById('campo-A');
const campoB = document.getElementById('campo-B');
const mensagemSucesso = document.querySelector('.success-message');
const mensagemErro = document.querySelector('.error-message');

form.addEventListener('submit',function(e) {
    e.preventDefault();

    const valorA = parseFloat(campoA.value);
    const valorB = parseFloat(campoB.value);

    if (valorA < valorB){
        mensagemErro.style.display = 'none';
        mensagemSucesso.style.display = 'block';

        campoA.value='';
        campoB.value='';
    } else {
        mensagemErro.style.display = 'block';
        mensagemSucesso.style.display = 'none';
    }
})