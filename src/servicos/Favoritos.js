import Axios from "axios";

// axios é um comando de requisição HTTP que é usado para fazer chamadas de API

const favoritosAPi = Axios.create({
    baseURL: 'http://localhost:8000/favoritos'
})


 async function getFavoritos() {
    const Response =  await favoritosAPi.get('/')

    return Response.data
}


async function postFavorito(id){
    await favoritosAPi.post(`/${id}`)
    // aqui estou chamando pegando os favoritos que  quero e trazendo eles para a api


}

async function deleteFavorito(id){
    await favoritosAPi.delete(`/${id}`)
    // aqui estou chamando pegando os favoritos que  quero e trazendo eles para a api neste casa é pegando pelo id para fazer o delete


}


export{
    getFavoritos,
    postFavorito,
    deleteFavorito
}