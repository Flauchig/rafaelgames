import Header from './componentes/Header';
import Pesquisa from './componentes/Pesquisa';
import UltimosLancamentos from './componentes/UltimosLancamentos';
import styled from 'styled-components';

const AppContainer = styled.div`
  width: 100vw;
  height: 100vh;
  background-image: linear-gradient(90deg, #002F52 35%, #326589 165%);
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
      <Header />

      <Conteudo>
        <Pesquisa />
        <UltimosLancamentos />
      </Conteudo>
    </AppContainer>
  );
}

export default App;
