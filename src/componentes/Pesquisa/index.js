
import Input from '../Input';

import styled from 'styled-components';
import { useState } from 'react';// useState é um hook que faz  com que os componentes tenham um estado e o estado é uma informação que pode mudar com o tempo
// Certifique-se de importar 'jogos' com letra minúscula
import { jogos } from './dadosPesquisa';

// Restante do código
const PesquisaContainer = styled.section`
  background-image: linear-gradient(90deg, #002F52 35%, #326589 165%);
  color: #FFF;
  text-align: center;
  padding: 85px 0;
  height: 270px;
  width: 100%;
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
  border: 1px solid #fff;
  padding: 8px;
  margin: 0px auto; /* Adicionado 'auto' para centralizar horizontalmente */
  text-align: center;
  box-sizing: border-box;
  width: 25%;
  margin-top: 50px;

  cursor: pointer;
  p {
      width: 200px;
  }
  img {
      width: 100px;
  }
  &:hover {
      border: 1px solid black;
`;


function Pesquisa() {
    // Estado para armazenar os resultados da pesquisa
    const [jogosPesquisados, setJogoPesquisado] = useState([]);
  
    return (
      <PesquisaContainer>
        {/* Título da seção de pesquisa */}
        <Titulo>Ja sabe que jogo vai buscar?</Titulo>
  
        {/* Subtítulo com instruções para o usuário */}
        <SubTitulo>Encontre seus jogos em "Meus Jogos"</SubTitulo>
  
        {/* Campo de input para digitar o nome do jogo a ser pesquisado */}
        <Input
          placeholder="Procure seu próximo jogo"
          onChange={(evento) => {
            // Obtém o texto digitado no input
            const textoDigitado = evento.target.value.toLowerCase();
  
            // Se o campo estiver vazio, exibe todos os jogos
            if (textoDigitado === '') {
              setJogoPesquisado(jogos);
            } else {
              // Filtra os jogos com base no texto digitado
              const ResultadoPesquisa = jogos.filter((Jogo) =>
                Jogo.nome.toLowerCase().includes(textoDigitado)
              );
  
              // Atualiza o estado com os resultados da pesquisa
              setJogoPesquisado(ResultadoPesquisa);
            }
          }}
        ></Input>
  
        {/* Mapeia os resultados da pesquisa e renderiza cada jogo encontrado */}
        {jogosPesquisados.map((jogo) => (
          <JogoContainer >
          {/* Exibe o nome do jogo */}
            <p>{jogo.nome}</p>
            
            {/* Exibe a imagem do jogo com o contorno adicionado */}
            <img src={jogo.src} alt="jogos" />
          </JogoContainer>
        ))}
        </PesquisaContainer>

     
    );
  
  }
  
  export default Pesquisa;



