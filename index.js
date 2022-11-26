let selection_element_titulo = document.getElementById("titulo_anuncio");

let cria_titulo = document.createElement("h2");
let cria_titulo_lojinha = document.createTextNode("Lojinha do Sr. Miagui");
cria_titulo.className = "titulo_lojinha";
cria_titulo.appendChild(cria_titulo_lojinha);
selection_element_titulo.appendChild(cria_titulo);


let selection_element = document.getElementById("anuncio");

let anuncio = [
    {
        url_img:"./img/bola_copa.webp",
        nome:"Bola da Copa",
        titulo_preco:"Preço:",
        preco:"R$ 86.30",
        titulo_descricao: "Descrição:",
        descricao:"Bola utilizada na Copa do Mundo, idela para utilizar em campo e colecionar"
    },
    {
        url_img:"./img/carro_hotwheels.jpeg",
        nome:"Carrinho da Hot Wheels",
        titulo_preco:"Preço:",
        preco:"R$ 5.80",
        titulo_descricao: "Descrição:",
        descricao:"Carrinho para dar de presentes para crianças ou colecionar"
    },
    {
        url_img:"./img/chinelo.webp",
        nome:"Chinelo",
        titulo_preco:"Preço:",
        preco:"R$ 19.99",
        titulo_descricao: "Descrição:",
        descricao:"Chinelo para se utilizar em qualquer lugar"
    },
    {
        url_img:"./img/escorredor_louca.webp",
        nome:"Escorredor de Louça",
        titulo_preco:"Preço:",
        preco:"R$ 15.20",
        titulo_descricao: "Descrição:",
        descricao:"Utilizando para ajudar no processo de secagem dos utensilios"
    },
    {
        url_img:"./img/espada_medieval.png",
        nome:"Espada Medieval",
        titulo_preco:"Preço:",
        preco:"R$ 200.18",
        titulo_descricao: "Descrição:",
        descricao:"Utilizada em batalhar para neutralizar o inimigo ou como item de decoração"
    },
    {
        url_img:"./img/guitarra.webp",
        nome:"Guitarra",
        titulo_preco:"Preço:",
        preco:"R$ 1980.99",
        titulo_descricao: "Descrição:",
        descricao:"Otima para utilizar em bandas de hard rock"
    },
    {
        url_img:"./img/toalha_banho.webp",
        nome:"Toalha de Banho",
        titulo_preco:"Preço:",
        preco:"R$ 9.99",
        titulo_descricao: "Descrição:",
        descricao:"Boa para se secar apos o banho"
    },
    {
        url_img:"./img/vinho.webp", 
        nome:"Vinho",
        titulo_preco:"Preço:",
        preco:"R$ 59.90",
        titulo_descricao: "Descrição:",
        descricao:"Vinho que harmoniza muito bem com carnes vermelhas "
    }
]


let tamanho_anuncio = anuncio.length;

for (i=0; i<tamanho_anuncio; i++){
    cria_anuncio(anuncio[i]);
    console.log(anuncio[i]);
}

function cria_anuncio(anuncio) {
    let article = document.createElement("article");
    article.className = "anuncio_article";

    let context = `
        <img class="imagem" src=${anuncio.url_img}>
        <h1 class="titulo">${anuncio.nome}</h1>
        <article class="textos">
            <article class="preco">
                <h1>${anuncio.titulo_preco}</h1> 
                <p>${anuncio.preco}</p>
            </article>
            <h1>${anuncio.titulo_descricao}</h1>
            <article class="descricao">
                <p>${anuncio.descricao}</p>
            </article>
        </article>
    `
    article.innerHTML = context;
    selection_element.appendChild(article);
}