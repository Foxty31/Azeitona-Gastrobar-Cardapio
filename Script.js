let allcards = document.getElementById("all-cards");
let Espeto = document.getElementById("Espeto");
let Sucos = document.getElementById("Sucos");
let Cremes = document.getElementById("Cremes");
let Panelinhas = document.getElementById("Panelinhas");
let CarnesChapa = document.getElementById("CarnesChapa");
let Adicionais = document.getElementById("Adicionais");
let PorcoesEPetiscos = document.getElementById("PorcoesEPetiscos");
let CarnesBrasa = document.getElementById("CarnesBrasa");
let DrinksAzeitona = document.getElementById("Drinks");
let LongNeck = document.getElementById("LongNeck");
let Gin = document.getElementById("Gin");
let Whisky = document.getElementById("Whisky");
let Combos = document.getElementById("Combos");
let SolfDrinks = document.getElementById("SolfDrinks")
let Caipirinhas = document.getElementById("Caipirinhas");
let Cervejas = document.getElementById("Cervejas");
let Cachacas = document.getElementById("Cachacas");
let Doses = document.getElementById("Doses");
let DrinksZero = document.getElementById("DrinksZero")


Espeto.onclick = () => {
    listar("Espetos")
}

Cremes.onclick = () => {
    listar("Cremes")
}

CarnesBrasa.onclick = () => {
    listar("CarnesBrasa")
}

Panelinhas.onclick = () => {
    listar("Panelinhas")
}

CarnesChapa.onclick = () => {
    listar("CarnesChapa")
}

Sucos.onclick = () => {
    listar("Sucos")
}

Adicionais.onclick = () => {
    listar("Adicionais")
}

LongNeck.onclick = () => {
    listar("Long-Neck")
}

Combos.onclick = () => {
    listar("Combos")
}

Gin.onclick = () => {
    listar("Gin")
}

Whisky.onclick = () => {
    listar("Whisky")
}

Vodka.onclick = () => {
    listar("Vodka")
}

SolfDrinks.onclick = () => {
    listar("Solf Drinks")
}

Caipirinhas.onclick = () => {
    listar("Caipirinha")
}

Cervejas.onclick = () => {
    listar("Cervejas")
}

Cachacas.onclick = () => {
    listar("Cachacas")
}

PorcoesEPetiscos.onclick = () => {
    listar("PorcoesEPetiscos")
}

Doses.onclick = () => {
    listar("Doses")
}

DrinksAzeitona.onclick = () => {
    listar("DrinksDoAzeitona")
}

DrinksZero.onclick = () => {
    listar("DrinksZero")
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
        
    })
}









 

