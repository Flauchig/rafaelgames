import Axios from "axios";

// axios é um comando de requisição HTTP que é usado para fazer chamadas de API

const JogosAPi = Axios.create({
    baseURL: 'http://localhost:8000/jogos'
})


 async function getjogos() {
    const Response =  await JogosAPi.get('/')

    return Response.data
}


export{
    getjogos
}