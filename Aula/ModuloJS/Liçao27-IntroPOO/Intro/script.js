let nome = "Homem Aranha";
let idade = 21;
let caracteristicas;
let poder = "Habilidades de Aranha";
let fraqueza = "Culpa";
let inimigo = "Doutor Octopus";
///////////////////////////////////////////////
const heroi = ["Homem Aranha",21,"Habilidades de Aranha","Culpa","Doutor Octopus"];

///CRIANDO OBJETO////////////////
const heroi1 ={
    nome: "Homem Aranha",
    idade: 21,
    caracteristicas:{
        poder: "Habilidade de Aranha",
        fraqueza: "Culpa",
    },
    inimigo: ["Doutor Octopus","Duende Verde","Venom","Mysterio","Lagarto","Kraven","Homem Areia","Electro","Escorpião","Rhino","Rei do Crime","Abutre","Carnificina"], 
    combate: function () {
        let index = Math.round((Math.random()*12))
        return this.nome + " X " + this.inimigo[index]
        
    }
}
//ALTERANDO VALOR DO OBJETO
heroi1.nome = "Spider Man";
heroi1.classificacao = "Heroi";
heroi1.planetaNatal = "Terra";

//DELETAR PROPRIEDADE
delete heroi1.planetaNatal;

//ACESSAR PROPRIEDADES DO OBJETO
console.log(heroi1.nome);
console.log(heroi1.classificacao);
console.log(heroi1.inimigo.at(-2));
console.log(heroi1.caracteristicas.fraqueza);
console.log(heroi1.combate());


//VERIFICAR SE A PROPRIEDADE EXISTE
let verificar = ("nome" in heroi1)
console.log(verificar);
let verificar1 = ("vilao" in heroi1)
console.log(verificar1);

//ADICIONANDO METODO
heroi1.especie = function (especie) {
    return heroi1.nome + " é um " + especie;
}

console.log(heroi1.especie("humano"));