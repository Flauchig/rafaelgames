
import logoImg from '../../imagens/meu-logo.svg'
import styled from 'styled-components';

const LogoContainer = styled.div`

`
const LogoImage = styled.img`

  display: flex;



`




function LogoComponent() {
  return (
    <LogoContainer>
      <LogoImage src={logoImg} alt="Logo" />
    </LogoContainer>
  ); 
}

export default LogoComponent;