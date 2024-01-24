let allcards = document.getElementById("all-cards");
let comida = document.getElementById("Comida");
let Espeto = document.getElementById("Espeto");

comida.onclick = () => {
    listar("comida")
}

Espeto.onclick = () => {
    listar("Espetos")
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
                let h4 = document.createElement("h4");
                h4.textContent = item.nome
                h4.className = "titulo-card";
                div.appendChild(h4);
                
                //li
                let li = document.createElement("li");
                li.className = "texto-card"
                li.textContent = item.Simples
                div.appendChild(li);
                
                let la = document.createElement("li");
                la.className = "texto-card"
                la.textContent = item.Completo
                div.appendChild(la);

                let img = document.createElement("img");
                img.className = "texto-card"
                img.src = item.Imagem
                div.appendChild(img);

    
                //
                allcards.appendChild(div);
               
        })   
        
    })
}









 

