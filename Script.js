let allcards = document.getElementById("all-cards");
let Comida = document.getElementById("Comida");
let Espeto = document.getElementById("Espeto");
let Sucos = document.getElementById("Sucos");
let Cremes = document.getElementById("Cremes");
let Panelinhas = document.getElementById("Panelinhas");
let CarnesChapa = document.getElementById("CarnesChapa");
let Adicionais = document.getElementById("Adicionais");
let PorcoesEPetiscos = document.getElementById("PorcoesEPetiscos");
let CarnesBrasa = document.getElementById("CarnesBrasa");
let Drinks = document.getElementById("Drinks");
let LongNeck = document.getElementById("LongNeck");
let Gin = document.getElementById("Gin");
let Whisky = document.getElementById("Whisky")

Comida.onclick = () => {
    listar("Comida")
}

Espeto.onclick = () => {
    listar("Espetos")
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

Gin.onclick = () => {
    listar("Gin")
}

Whisky.onclick = () => {
    listar("Whisky")
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
                let li = document.createElement("li");
                li.className = "texto-card"
                li.textContent = item.val1
                div.appendChild(li);
                
                let la = document.createElement("li");
                la.className = "textola-card"
                la.textContent = item.val2
                div.appendChild(la);

                

    
                //
                allcards.appendChild(div);
               
        })   
        
    })
}









 

