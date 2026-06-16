class Heroi {
    constructor(nome, idade, poder, fraqueza, inimigo) {
        this.nome = nome;
        this.idade = idade;
        this.poder = poder;
        this.fraqueza = fraqueza;
        this.poder = poder;
        this.inimigo = inimigo;
        this.equipe = "Liga dos Herois";

    }

    combater(){
        let index = Math.round((Math.random()*this.inimigo.length))
        console.log(this.nome +" X "+this.inimigo[index]);
        
    }
}

const batman = new Heroi("Batman",
    30,
    "Nenhuma",
    "Lutar",
    ["Coringa","Duas Caras","Charada","Mulher Gato","Cara de Barro","Pinguim","Espantalho","Bane","Hera Venenosa","Alerquina","Deathstroke"])

batman.equipe = "Liga da Justiça";
batman.combater()
Heroi.prototype.editora= "Marvel";

const homemAranha = new Heroi("Homem Aranha",
    21,
    "Nenhuma",
    "Habilidades de Aranha",
    ["Doutor Octopus","Duende Verde","Venom","Mysterio","Lagarto","Kraven","Homem Areia","Electro","Escorpião","Rhino","Rei do Crime","Abutre","Carnificina"])

    console.log("equipe" in homemAranha);
    console.log("editora" in batman);

    homemAranha.combater()
    Heroi.prototype.frasesMarcantes= function (fala) {
        console.log(this.nome +" disse: "+fala);
    }
    homemAranha.frasesMarcantes("Com grandes poderes, vem grandes responsabilidades")