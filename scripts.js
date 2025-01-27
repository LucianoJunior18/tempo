

const key = "2f40c44e1a2aba6eade82f958f82937b"

function colocarDadosNaTela(dados) {
    document.querySelector(".cidade").innerHTML = "Tempo em "+ dados.name
    document.querySelector(".temp").innerHTML = Math.floor(dados.main.temp) + "ºc"
    document.querySelector(".text-previsao").innerHTML = dados.weather[0].description
    document.querySelector(".umidade").innerHTML = "Umidade: " + dados.main.humidity + "%"
    document.querySelector(".img-previsao").src = `https://openweathermap.org/img/wn/${dados.weather[0].icon}.png`
}

async function buscarCidade(cidade) {

    const dados = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${cidade}&appid=${key}&lang=pt_br&units=metric`).then( resposta => resposta.json())

    colocarDadosNaTela(dados)
    
}


function cliqueiNoBotao() {
    const cidade = document.querySelector(".input-cidade").value

    buscarCidade(cidade)
}