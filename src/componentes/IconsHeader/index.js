import perfil from '../../imagens/perfil.svg';
import sacola from '../../imagens/sacola.svg';
import styled from 'styled-components';

const Icones = styled.ul `
display: flex;
align-items: center;

`
const Icone = styled.li`
  font-size: 25px;
  position: relative;
  margin-right: 25px;
  width: 25px;
  list-style: none;

  /* Espaçamento entre os ícones, ajuste conforme necessário */
`

// aqui acima estou mudando tags do html por styled components para deixar um tamanho padrão 


const icons = [perfil, sacola];
// lista chamando os svgs

function IconsHeader() {
  //sempre começar com letra maicusla quando for chamar as funções 
  return (

    <Icones className='icons'>
      {icons.map((icon) => (

        <Icone><img src={icon} alt='icones'></img></Icone>


      ))}


    </Icones>



  )



}

export default IconsHeader;