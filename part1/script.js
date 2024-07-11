
//objeto
const atividade  = {
 nome: "almoço",
 data: new Date("2024-07-10 13:54"),
 finalizado: true,

}


 // lista arrays e vetor
 let atividades = [
  atividade,
             
      {  nome: "academia em grupo",
    data: new Date ("2024-07-10 14:13"),
    finalizado: false

            }
    

 ]


 atividades = []


// arrow function
const criarItemDeAtividade = (atividade) => {
    
    let input = ' <input type="checkbox"'


    if (atividade.finalizada){
     input += 'checked'

    }


     input += '>'

    return  `

     <div>
       
      ${input}
       <span>${atividade.nome}</span>
       <time>${atividade.data}</time>
   </div>  
    `


}


const atualizarListaDeAtividades = () => {

    const section = document.querySelector('section')

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