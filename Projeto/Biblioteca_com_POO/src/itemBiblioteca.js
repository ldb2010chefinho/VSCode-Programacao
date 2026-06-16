export class ItemBiblioteca {
    constructor(isbn,titulo, autor, anoPublicacao, local, editora) {
        this.isbn = isbn;
        this.titulo = titulo;
        this.autor = autor;
        this.anoPublicacao = anoPublicacao;
        this.local = local;
        this.editora = editora;
    }
}

export class Livro extends ItemBiblioteca{
    constructor(isbn, titulo, autor, anoPublicacao, local, editora) {
        super(isbn, titulo, autor, anoPublicacao,  local, editora);
        this.tipo = 'Livro';
    }
}
export class Revista extends ItemBiblioteca{
    constructor(isbn, titulo, autor,numeracao, anoPublicacao,volume, local, editora) {
        super(isbn, titulo, autor, anoPublicacao,  local, editora);
        this.numeracao=numeracao;
        this.volume = volume;
        this.tipo = 'Revista';
    }
}