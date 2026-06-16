import { ItemBiblioteca } from "./itemBiblioteca.js";

export class Referencia{
    constructor() {
        this.itens = [];
    }

    adicionarItem(item){
        this.itens.push(item);
        this.renderizar()
    }

    renderizar(){
        const itensList = document.getElementById('itens-list');
        if (!itensList) return;//null
        itensList.innerHTML = "";

        this.itens.forEach((item,index) => {
            console.log(item);
            let li = document.createElement("li");

            if (item.tipo == 'Livro'){
                li.innerHTML = `
                <div class = "li-box">
                    <span class = "description">
                        ${item.autor.toUpperCase()}. <strong>${item.titulo}</strong>. ${item.local}: ${item.editora}, ${item.anoPublicacao} - ${item.isbn}
                        <span class="tag">
                            ${item.tipo.toUpperCase()}
                        </span>
                    </span>
                    <button class="btn-apagar" data-index=${index}>Apagar</button>
                </div>
                `
            }
            else if (item.tipo == 'Revista') {
                li.innerHTML = `
                <div class = "li-box">
                    <span class = "description">
                        ${item.autor.toUpperCase()}. ${item.titulo}. 
                        <strong>${item.editora}</strong>, ${item.local}, v. ${item.volume}, n. ${item.numeracao}, ${item.anoPublicacao} - ${item.isbn}

                        <span class="tag">${item.tipo.toUpperCase()}</span>
                    </span>
                    <button class="btn-apagar" data-index=${index}>Apagar</button>
                </div>
                `
        }   
            itensList.appendChild(li)
        });

        const btnApagar = document.querySelectorAll(".btn-apagar");
        btnApagar.forEach(btn =>{
            btn.addEventListener("click", () =>{
                this.remover(btn.dataset.index)
            })
        })
    }

    remover(index){
        this.itens.splice(index,1)
        this.renderizar()
    }
}