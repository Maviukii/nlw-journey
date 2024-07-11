//formatador 
const formatador = (data) => {

    return {
        dia: {
            numerico: dayjs(data).format('DD'),
            semana: {
                curto: dayjs(data).format('ddd'),
                longo: dayjs(data).format('dddd'),
            }
        },
        mes: dayjs(data).format('MMM'),
        hora: dayjs(data).format('HH:mm')


    }

}




//objeto
const atividade = {
    nome: "almoço",
    data: new Date("2024-07-10 13:54"),
    finalizado: true

}




// lista arrays e vetor
let atividades = [
    atividade,

    {
        nome: "academia em grupo",
        data: new Date("2024-07-10 14:13"),
        finalizado: false

    },
    {
        nome: "sair com amigos",
        data: new Date("2024-07-10 15:13"),
        finalizado: false

    },
    {
        nome: "buscar gato",
        data: new Date("2024-07-10 19:13"),
        finalizado: true

    }


]


//atividades = []


// arrow function
const criarItemDeAtividade = (atividade) => {

    let input = ` <input onchange="concluirAtividade(event)"
    value="${atividade.data}"
    type="checkbox"`


    if (atividade.finalizada) {
        input += 'checked'

    }


    input += '>'

    const formatar = formatador(atividade.data);


    return `
    <div>       
      ${input}
       <span>${atividade.nome}</span>
       <time>
       ${formatar.dia.semana.longo},
       dia ${formatar.dia.numerico},
       de  ${formatar.mes}
       as ${formatar.hora}h
        </time>
   </div>  
    `


}


const atualizarListaDeAtividades = () => {

    const section = document.querySelector('section')
    section.innerHTML = ''


    // verificar se minha lista esta vazia
    if (atividades.length == 0) {
        section.innerHTML = ` <p> Nemhuma atividade cadastrada. </p> `
        return
    }

    for (let atividade of atividades) {

        section.innerHTML += criarItemDeAtividade(atividade)
    }
}

atualizarListaDeAtividades()


const salvarAtividade = (event) => {

    event.preventDefault()
    const dadosDoFormulario = new formData (event.target)
    

    const nome = dadosDoFormulario.get('atividade')
    const dia = dadosDoFormulario.get('dia')
    const hora = dadosDoFormulario.get('hora')
    const data = `${dia} ${hora}`


const novaAtividade = {
    nome,
    data,
    finalizada: false
  }


  const atividadeExiste = atividades.find((atividade) => {
    return atividade.data == novaAtividade.data
  })

  if (atividadeExiste) {
    return alert('Dia/Hora não disponível')
  }

  atividades = [novaAtividade, ...atividades]
  atualizarListaDeAtividades()
}





const criarDiasSelecao = () => {

    const dias = [

    "2024-02-28",
    "2024-02-29",
    "2024-03-01",
    "2024-03-02",
    "2024-03-03",

        ]


       let diasSelecao = ''
       
       for(let dia of dias ){

        const formatar = formatador(dia)
        const diaFormatado = `${formatar.dia.numerico} de
          ${formatar.mes} `

        diasSelecao += ` <option value="${dia}">${dia}</option>`

           }
       

       document.querySelector('select[name="dia"]').innerHTML = diasSelecao


    }

criarDiasSelecao()

const criarHorasSelecao = () => {

    let horasDisponiveis = ``


    for(let i = 6; i < 23; i++) {

        horasDisponiveis += `<option value="${i}:00">${i}:00</option>`
        horasDisponiveis += `<option value="${i}:30">${i}:30</option>`

            }



    document.querySelector('select[name="hora"]').innerHTML = horasDisponiveis


    


}



  criarHorasSelecao()

  const concluirAtividade = (event) => {
    const input = event.target
    const dataDesteInput = input.value
  
    const atividade = atividades.find((atividade) => {
      return atividade.data == dataDesteInput
    })
  
    if(!atividade) {
      return
    }
  
    atividade.finalizada = !atividade.finalizada
  }