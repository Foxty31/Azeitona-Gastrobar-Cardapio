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
        console.log(lista)
        lista.forEach(item => {
        
                
                let div = document.createElement("div");
                div.className = "card";
                //h4

                let img = document.createElement("img");
                img.className = "img-card"
                img.src = item.Imagem



                div.appendChild(img);
                let h4 = document.createElement("h4");
                h4.textContent = item.nome
                h4.className = "titulo-card";
                div.appendChild(h4);
                
                //li
                let la = document.createElement("li");
                la.className = "texto-card"
                la.textContent = item.val1
                div.appendChild(la);
                
                let le = document.createElement("li");
                le.className = "texto-card"
                le.textContent = item.val2
                div.appendChild(le);

                let li = document.createElement("li");
                li.className = "texto-card"
                li.textContent = item.val3
                div.appendChild(li)


    
                //
                allcards.appendChild(div);
               
        })   
        
    })
}









 

