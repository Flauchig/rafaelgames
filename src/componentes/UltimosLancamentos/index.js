import { jogos } from "./dadosLancamentos";
import { Titulo } from '../Titulo'
import CardRecomenda from "../CardRecomenda";
import ImagemJogo from "../../imagens/forza.svg";

import styled from "styled-components";


const LancamentosContainer = styled.section`

    background-color:#1b84d2;
    padding-bottom: 30px;
    display: flex;
    flex-direction: column;

    height: 270px;


   



`




const NovosJogosContainer = styled.div `
margin-top: 30px;
display: flex;
width: 100%;
justify-content: center;
cursor: pointer;

gap: 25px;
`






function UltimosLancamentos() {
    return (
        <LancamentosContainer>
            <Titulo cor = 'black'>Últimos Lançamentos</Titulo>
            {/* aqui estamos recebendo a props .cor e mudando a cor do elemento  diretamente */}

            <NovosJogosContainer>

            {jogos.map(jogo => {
                return (
                    <img key={jogo.id} src={jogo.src} alt={jogo.alt} />
                );
            })}



            </NovosJogosContainer>
            <CardRecomenda  
                    titulo= "Talvez voçê se interesse por ..."
                    subtitulo= "Forza Horizon 5"
                    descricao= " Um dos Melhores jogos de automobilismo da atualidade"
                    img={ImagemJogo}

                    // aqui estamos puxando os dados  que vamos utilizar nas props. 
            
            />
           
        </LancamentosContainer>
    );
}

export default UltimosLancamentos;