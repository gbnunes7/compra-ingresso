let ingInfDisp = 400;
let ingPistaDisp = 100;
let ingSupDisp = 200;
let ingInfDispHtml = document.getElementById('qtd-inferior')
let ingSupDispHtml = document.getElementById('qtd-superior')
let ingPistaDispHtml = document.getElementById('qtd-pista')

function comprar() {
    const tipoIng = document.getElementById('tipo-ingresso').value;
    let qtdIng = document.getElementById('qtd').value;
    
    if (qtdIng < 1) {
        alert ("Preencha a quantidade.")
        return
    }
    
    if (tipoIng == "inferior") {
        comprarIngressoInferior(qtdIng)
    } 

    else if (tipoIng == "superior") {
        comprarIngressoSuperior(qtdIng)
    }

    else if (tipoIng == "pista") {
        comprarIngressoPista(qtdIng)
    }
}

function comprarIngressoInferior(qtdIng) {
    if (qtdIng > ingInfDisp ) {
        alert("Não há essa quantidade disponível")
    } else {
       parseInt(ingInfDisp = ingInfDisp - qtdIng);
       ingInfDispHtml.textContent = ingInfDisp
    }
}

function comprarIngressoSuperior(qtdIng) {
    if (qtdIng > ingSupDisp ) {
        alert("Não há essa quantidade disponível")
    } else {
       parseInt(ingSupDisp = ingSupDisp - qtdIng);
       ingSupDispHtml.textContent = ingSupDisp
    }
}

function comprarIngressoPista(qtdIng) {
    if (qtdIng > ingPistaDisp ) {
        alert("Não há essa quantidade disponível")
    } else {
       parseInt(ingPistaDisp = ingPistaDisp - qtdIng);
       ingPistaDispHtml.textContent = ingPistaDisp
    }
}
