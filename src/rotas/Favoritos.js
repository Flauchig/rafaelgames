import { FavoritosIMG} from './dadosfavorito';
import styled from 'styled-components';
import { useEffect, useState } from 'react';
import { deleteFavorito, getFavoritos } from '../servicos/Favoritos';




const AppContainer = styled.div`
background-image: linear-gradient(90deg, #582121 35%, #8F3D3D 165%);
  color: #FFF;
  text-align: center;
  padding: 100px 0;
  min-height: 100vh;
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  align-items: center;
`;
const ResultadoContainer = styled.div`
  display: flex;  
  flex-wrap: wrap;
  justify-content: center;
  margin: 20px auto 0; 
  max-width: 800px;
`

const Resultado = styled.div`
display: flex;
justify-content: center;
align-items: center;
margin: 20px auto 0;
cursor: pointer;
text-align: center;
padding: 0 100px;
text-align: center;

p {
  width: 200px;
  color: #FFF;
}
img {
  width: 100px;
}
&:hover {
  border: 1px solid white;
}


`


const Titulo = styled.h2`
   color: #FFF;
   font-size: 36px;
   text-align: center;
   width: 100%;
   padding-top: 35px
`
export function Favoritos() {
  const [favoritos, setFavoritos] = useState([]);

  async function fetchFavoritos() {
    const favoritosAPI = await getFavoritos();
    setFavoritos(favoritosAPI);
  }

  async function deletarFavorito(id) {
    await deleteFavorito(id);
    // Atualiza a lista de favoritos após a exclusão
    fetchFavoritos();
    alert(`Jogo removido com sucesso!!`)
  }

  useEffect(() => {
    fetchFavoritos();
  }, []);

  return (
    <AppContainer>
      <div>
        <Titulo>Aqui estão seus jogos favoritos</Titulo>
        <ResultadoContainer>
          {favoritos.map((favorito) => (
            <Resultado 
              key={favorito.id} 
              onClick={() => deletarFavorito(favorito.id)}>
              <img src={FavoritosIMG.find(f => f.nome === favorito.nome).src} alt="jogos" />
              <p>{favorito.nome}</p>
            </Resultado>
          ))}
        </ResultadoContainer>
      </div>
    </AppContainer>
  );
}
