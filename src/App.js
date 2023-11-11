
import Header from './componentes/Header';

import styled from 'styled-components'; 
const AppContainer = styled.div`

          width: 100vw;
          height: 100vh;
          background-image: linear-gradient(90deg, #1d2b35 35%, #061f31);



        li {
          list-style: none;
        }



`;

// neste exemplo  acima estou usando styled components  ele basicamente troca o compnente por uma div  assim simplicando o codigo 

function App() {
  return (
  <AppContainer>
   <Header></Header>
  </AppContainer>
 


  );
}

export default App;
