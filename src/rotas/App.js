
import Pesquisa from '../componentes/Pesquisa';
import UltimosLancamentos from '../componentes/UltimosLancamentos';
import styled from 'styled-components';

const AppContainer = styled.div`
  width: 100vw;
  height: 100vh;
  background-image: linear-gradient(90deg, #582121 35%, #8F3D3D 165%);
  li {
    list-style: none;
  }
`;

const Conteudo = styled.div`
  display: flex;
  flex-direction: column;
`;



function App() {
  return (
    <AppContainer>


      <Conteudo>
        <Pesquisa />
        <UltimosLancamentos />
      </Conteudo>
    </AppContainer>
  );
}

export default App;
