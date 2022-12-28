const form = document.getElementById('form-deposito');

const campoB = document.getElementById('campo-b');
const campoA = document.getElementById('campo-a');


const mensagemDeSucesso = `OS valores foram enviados com sucesso!`;
const mensagemDeErro = 'O número do campo B precisa ser maior que o número do campo A'

const containerMensagemDeError = document.querySelector('.error-message');
const containerMensagemDeSucesso = document.querySelector('.success-message');


form.addEventListener('submit', function(e) { 
    e.preventDefault(); 
    
    const b = campoB.value;         
    const a = campoA.value;
    
    campoB.value = '';
    campoA.value = '';
    
    let validarCampo = a < b;
    
    if(validarCampo){
        
        
        containerMensagemDeSucesso.innerHTML = mensagemDeSucesso;
        containerMensagemDeSucesso.style.display = 'block';

        return mensagemDeSucesso;
    } else {
        containerMensagemDeError.innerHTML = mensagemDeErro;
        containerMensagemDeError.style.display = 'block';
        campoB.style.border = '1px solid red'
        
        return mensagemDeErro;
    }})
    
    
    form.addEventListener('keyup', function(e){
        console.log(e.target.value);
        validarCampo = (e.target.value);
        

        if (validarCampo) {
            campoB.classList.add('error');
            document.querySelector('.error-message').style.display = 'block';
        }

            else {
                campoB.classList.remove('error');
                document.querySelector('.error-message').style.display = 'none';
            }
        });