//seleciona o botão e o elemento body
const changeButton = document.getElementById("toggle=button");

const body = document.body;

//Verifica se o tema escuro foi previamente escolhido

const savedTheme = localStorage.getItem('theme');
if (savedTheme === 'dark') {
    body.classList.add('modoEscuro');
}

//Função para alternar entre os temas

function changeColor() {
    body.classList.toggle('modoEscuro')
    

//Salva a escolha no localStorage
if (body.classList.contains('modoEscuro')) {
    localStorage.setItem('theme','dark');
    }
else{
    localStorage.setItem('theme','light');
    };
};

