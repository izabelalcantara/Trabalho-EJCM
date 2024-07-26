const form   = document.getElementById('form');
const campos = document.querySelectorAll('.required');
const spans  = document.querySelectorAll('.span-required');
const emailRegex = /^\w+([-+.']\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*$/;

form.addEventListener('submit', (event) => {
    event.preventDefault();
    emailValidate();
    mainPasswordValidate();
    
});

function setError(index){
    campos[index].style.border = '2px solid #e63636';
    spans[index].style.display = 'block';
}

function removeError(index){
    campos[index].style.border = '';
    spans[index].style.display = 'none';
}



function emailValidate(){
    if(!emailRegex.test(campos[0].value))
    {
        setError(0);
    }
    else
    {
        removeError(0);
    }
}

function mainPasswordValidate(){
    if(campos[1].value.length < 8)
    {
        setError(1);
    }
    else
    {
        removeError(1);
        
    }
}

function login() {
    window.location.href ='index_home.html'
} 

function cadastro() {
    window.location.href ='index_cadastro.html'
} 

