
window.addEventListener('load', () => {
    navigator.geolocation.getCurrentPosition((position) => {
        const latitude = position.coords.latitude
        const longitude = position.coords.longitude

        const getWeather = async () => {
            const getData = await fetch(`https://api.weatherapi.com/v1/current.json?key=f268ac840f544d3dbb6134220240806&q=${latitude},${longitude}&lang=pt`)

            const res = await getData.json()

            const condicaoContainer = document.querySelector('.condicao')
            const localAtualContainer = document.querySelector('.local-atual')

            console.log(res.current.condition.text) //Condição
            console.log(res.location.name) //Cidade
            console.log(res.current.temp_c) //Temperatura
            console.log(res.current.feelslike_c) //Sensação térmica
            console.log(res.current.condition.wind_kph) //Velocidade do vento


            //span = estático e p=linha
            //pode editar a distribuição para estilizar
            const icone = document.createElement('img')
            const condicao = document.createElement('p')
            const cidade = document.createElement('span')
            const temperatura = document.createElement ('span')
            const sensacaoTermica = document.createElement ('span')
            const velocidadeVento = document.createElement ('span')

            condicao.innerHTML=res.current.condition.text
            icone.setAttribute('src','https:'+res.current.condition.icon)
            cidade.innerHTML = res.location.name
            temperatura.innerHTML = res.current.temp_c + 'C°'
            sensacaoTermica.innerHTML = res.current.feelslike_c
            velocidadeVento.innerHTML = res.current.wind_kph + 'kh'
            
            cidade.className = 'fontLarga'
            temperatura.className = 'fontLarga'
            velocidadeVento.className = 'fontMedia'
            condicao.className = 'fontMedia' 

            condicaoContainer.appendChild(icone)
            condicaoContainer.appendChild(temperatura)
            condicaoContainer.appendChild(condicao)

            localAtualContainer.appendChild(cidade)
            localAtualContainer.appendChild(temperatura)
            localAtualContainer.appendChild(sensacaoTermica)
            localAtualContainer.appendChild(velocidadeVento)
        }
        document.querySelector('.load').className = 'hideLoad'
        getWeather()
    })
})
