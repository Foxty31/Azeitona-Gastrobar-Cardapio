const allcards = document.getElementById("all-cards")

const btnsProdutos = document.querySelectorAll(".btn-produto");
btnsProdutos.forEach (btn => {
    btn.onclick = () => {
        listar(btn.id);
    }
})

inicio()
 async function inicio(){
     let produtos = await fetch("inicio.json").then(data => {return data.json()})

     let Tipos = Object.getOwnPropertyNames(produtos);
     allcards.innerHTML = null
     Tipos.forEach(tipo => {
         let allProdutos = document.createElement("section");
         allProdutos.className = "produtosInicio"

         let tituloSection = document.createElement("h1");
         tituloSection.className = "tituloProduto"
         tituloSection.textContent = tipo;
         allProdutos.appendChild(tituloSection); 
         
         
         let produtoInicio = document.createElement("div");
         produtoInicio.className = "produtoInicio"

// for each para o andar nos items de um tipo cadastrado!
            produtos[tipo].forEach(item => {
//Aqui você vai criar os cards que apareceram no inicio
             let itemInicio = document.createElement("div");
             itemInicio.className = "TituloCardInicio"
             itemInicio.style = `--n: "${item.nome}"; --b: "${item.Imagem}";`;

//adiciona dentro do produto inicio que vai ficar dentro da section
             produtoInicio.appendChild(itemInicio);
         })
         
         allProdutos.appendChild(produtoInicio);

          allcards.appendChild(allProdutos);
      })
  } 


function listar(tipo) {
    allcards.innerHTML = null;

    fetch("produtos.json").then(data => {
        return data.json()
    }).then(json => {
        let lista = json[tipo];
        lista.forEach(item => {
                
                let div = document.createElement("div");
                div.className = "card";


                let img = document.createElement("img");
                img.className = "img-card";
                img.src = item.Imagem;
                div.appendChild(img);



                let h1 = document.createElement("h1");
                h1.textContent = item.nome
                h1.className = "titulo-card";
                div.appendChild(h1);
                
                let preco = document.createElement("div");
                preco.className = "div-precos";


                if (item.val1) {

                    let precoU = document.createElement("div");
                    precoU.className = "precos"

                    preco.appendChild(precoU);

                    let iconU = document.createElement("i");
                    iconU.className = "texto-card";
                    iconU.innerHTML = `<i class="fa-solid fa-user"></i>`;
                    precoU.appendChild(iconU);

                    let spanU = document.createElement("span");
                    spanU.className = "texto-card";
                    spanU.textContent = "R$"+item.val1+",00";
                    precoU.appendChild(spanU);
                }
                
                

                if (item.val2) {
                    let precoD = document.createElement("div");
                    precoD.className = "precos"

                    preco.appendChild(precoD);

                    let iconD = document.createElement("i");
                    iconD.className = "texto-card";
                    iconD.innerHTML = `<i class="fa-solid fa-user-group"></i>`;
                    precoD.appendChild(iconD);

                let spanU = document.createElement("span");
                    spanU.className = "texto-card";
                    spanU.textContent = "R$"+item.val2+",00";
                    precoD.appendChild(spanU);
                }
                

                if (item.val3) {
                    let precoT = document.createElement("div");
                    precoT.className = "precos"

                    preco.appendChild(precoT);

                    let iconT = document.createElement("i");
                    iconT.className = "texto-card";
                    iconT.innerHTML = `<i class="fa-solid fa-users"></i>`;
                    precoT.appendChild(iconT);

                    let spanT = document.createElement("span");
                    spanT.className = "texto-card";
                    spanT.textContent = "R$"+item.val3+",00";
                    precoT.appendChild(spanT);
                }
                //
                div.appendChild(preco);
                allcards.appendChild(div);
                
                
        }) 

        const card = document.getElementsByClassName('card');
        for (i = 0; i<card.length; i++ ){
            card[i].addEventListener('click', function() {
                this.classList.toggle('active');
                console.log(this)
            })
        }
    })
}