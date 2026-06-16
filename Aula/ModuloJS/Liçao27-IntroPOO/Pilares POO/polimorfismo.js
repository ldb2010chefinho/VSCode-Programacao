console.log("-------Polimorfismo-------");
class Livros {
    constructor(isbn,titulo,autor) {
        this.isbn = isbn;
        this.autor = autor;
        this.titulo = titulo;
        this.lido = false;
    }

    ler(){
        this.lido = true;
        return console.log("Eu li o livro: " + this.titulo);
    }
}

let book2 = new Livros(12345, "Vidas Secas", "Graciliano Ramos" );


class Ebooks extends Livros {
    constructor(titulo,autor,isbn,lido, formatoArquivo) {
        super(isbn,autor,titulo,lido)
        this.formatoArquivo = formatoArquivo
        this.nota = 0;
    }
    /**
     *
     */
    avaliar(avaliacao) {
        this.nota = avaliacao
        super.ler() //CHAMAR METODO DO PAI
        if (avaliacao > 10 || avaliacao<0) {
            alert("Nota deve ser maior que 0 e menor que 10");
        }else{
        if (avaliacao > 6) {
            console.log("Avaliação positiva, nota: "+avaliacao);
        }
        else{
            console.log("Avaliação negativa, nota: "+avaliacao);
        }
    }
    }
    //POLIMORFISMO-MUDAR A FRASE
    ler(){
        this.lido = true;
        return console.log("Eu li o ebook: " + this.titulo);
    }
}
let ebook2 = new Ebooks(400400, "O Livro mais caro da Amazon", "Emmanuel James" );
book2.ler();
ebook2.ler();