let formEValid = false;
const form = document.getElementById('form-deposito')
const campoB = document.getElementById('campo-b');

let valorA = parseInt(campoA.value);

let valorB = parseInt(campoB.value);




function validarValor(Valor){

    if (valorB > valorA){

        return true;

    } else {

        return false;

    }

}




form.addEventListener('submit', function(e){

    e.preventDefault();




    const mensagemSucesso = `Tudo conluido valor A: <b>${valorA}</b> é menor que o valor B: <b>${valorB}</b>`;




    formEValido = validarValor(valorB.valueOf)

    if (!formEValido) {

        const containerMensagemSucesso = document.querySelector('.success-message');

        containerMensagemSucesso.innerHTML = mensagemSucesso;

        containerMensagemSucesso.style.display = "block";




        campoB.value = '';

        campoA.value = '';

    } else {

        campoB.style.border = "1px solid red";

        document.querySelector('.error-message').style.display = "block";

    }

})




valorB.addEventListener('keyup', function(e){

    console.log(e.target.value);

    valorB = validarValor(e.target.value)

    if (!formEValido) {

        valorB.classList.add('error');

        document.querySelector('.error-message').style.display = "block";

    } else {

        valorB.classList.remove('error');

        document.querySelector('.error-message').style.display = "none";

    }})
