import Input from '../Input';
import styled from 'styled-components';
import { useEffect, useState } from 'react';
import { getjogos } from '../../servicos/jogos';
import { jogosImg } from './dadosPesquisa';
import { postFavorito } from '../../servicos/Favoritos';



const PesquisaContainer = styled.section`
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

const Titulo = styled.h2`
  color: #FFF;
  font-size: 36px;
  text-align: center;
  width: 100%;
`;

const SubTitulo = styled.h3`
  font-size: 16px;
  font-weight: 500;
  margin-bottom: 40px;
`;

const JogoContainer = styled.div`
  padding: 10px;
  margin: 20px auto;
  text-align: center;
  box-sizing: border-box;
  display: block;
  cursor: pointer;
  border: 1px solid transparent;
  
  img {
    width: 200px;
  }

  p {
    font-size: 25px;
  }

  &:hover {
    border: 1px solid black;
  }
`;

function Pesquisa() {
  const [jogosPesquisados, setJogosPesquisados] = useState([]);
  const [jogos, setJogos] = useState([]);
  //tem um valor vazio por não estar setando algo especifico 


  useEffect(() => {
    async function fetchJogos() {
      try {
        const jogosAPI = await getjogos(); // Chama a função getjogos do seu serviço
        setJogos(jogosAPI);
      } catch (error) {
        console.error('Erro ao buscar os jogos:', error);
      }
    }

    fetchJogos();
  }, []);

  async function insertFavorito(id){
    await postFavorito(id)
    alert(`jodo de ${jogos.find(jogo => jogo.id === id).nome} adicionado aos favoritos`)

  }

  return (
    <PesquisaContainer>
      <Titulo>Ja sabe que jogo vai buscar?</Titulo>
      <SubTitulo>Encontre seus jogos em "Meus Jogos"</SubTitulo>

      <Input
        placeholder="Procure seu próximo jogo"
        onChange={(evento) => {
          const textoDigitado = evento.target.value.toLowerCase();

          if (textoDigitado === '') {
            setJogosPesquisados(jogos);
          } else {
            const resultadoPesquisa = jogos.filter((jogo) =>
              jogo.nome.toLowerCase().includes(textoDigitado)
            );

            setJogosPesquisados(resultadoPesquisa);
          }
        }}
      ></Input>

      {jogosPesquisados.map((jogo) => (
        <JogoContainer 
        key={jogo.id}
        onClick={() => insertFavorito(jogo.id) }
        >
          <p>{jogo.nome}</p>
          <img src={jogosImg.find(jogos => jogos.nome === jogo.nome).src} alt="jogos" />
        </JogoContainer>
      ))}
    </PesquisaContainer>
  );
}

export default Pesquisa;
