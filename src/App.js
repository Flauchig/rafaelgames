
import Header from './componentes/Header';
import Pesquisa from './componentes/Pesquisa';

import styled from 'styled-components'; 
import UltimosLancamentos from './componentes/UltimosLancamentos';
const AppContainer = styled.div`

          width: 100vw;
          height: 100vh;
          background-image: linear-gradient(90deg, #002F52 35%, #326589 165%);



        li {
          list-style: none;
        }



`;

// neste exemplo  acima estou usando styled components  ele basicamente troca o compnente por uma div  assim simplicando o codigo 

function App() {
  return (
  <AppContainer>
   <Header />
    <Pesquisa />
   <AppContainer />
    <UltimosLancamentos />
  </AppContainer>
 


  );
}

export default App;
