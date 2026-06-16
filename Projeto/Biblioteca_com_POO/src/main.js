import { Livro, Revista } from './itemBiblioteca.js';
import {Referencia} from './gerenciamentoBiblioteca.js';

const isbn = document.getElementById('isbn');
const titulo = document.getElementById('titulo');
const autor = document.getElementById('autor');
const ano = document.getElementById('ano');
const numeracao = document.getElementById('numeracao');
const volume = document.getElementById('volume');
const local = document.getElementById("local");
const editora = document.getElementById("editora")

const tipoMaterial = document.getElementById('tipo');

const btnEnviar = document.getElementById('btn_enviar');
const esconder_div = document.getElementById('esconder-div');

const itensList = document.getElementById('itens-list');

const meuForm = document.getElementById('meu_Form');

const referencia = new Referencia();

tipoMaterial.addEventListener('change', function() {
    esconder_div.style.display = 'block';
    console.log(this.value);
    
    if (this.value === 'revista') {
        numeracao.style.display = 'block';
        volume.style.display = 'block';
        document.querySelector('label[for="volume"]').style.display = 'block';
        document.querySelector('label[for="numeracao"]').style.display = 'block';
    } else {
        numeracao.style.display = 'none';
        volume.style.display = 'none';
        document.querySelector('label[for="volume"]').style.display = 'none';
        document.querySelector('label[for="numeracao"]').style.display = 'none';
    }
});

// Amarzenas os valores do forms
function amazenarValores() {
    let amazenarItem;
    if (tipoMaterial.value === 'livro'){
        amazenarItem = new Livro(isbn.value, titulo.value, autor.value, ano.value,local.value, editora.value )
    }
    else if (tipoMaterial.value === 'revista'){
        amazenarItem = new Revista(isbn.value, titulo.value, autor.value, numeracao.value, ano.value, volume.value, local.value, editora.value )
    }
    referencia.adicionarItem(amazenarItem)
}

meuForm.addEventListener('submit',function(e){
    e.preventDefault();
    console.log("Formulário enviado!");
    console.log(e);
    amazenarValores();
    meuForm.reset();

})

