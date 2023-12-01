import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

// Estilos dos componentes usando styled-components
const Options = styled.ul`
  display: flex;
  padding: 0 5%;
  gap: 25px;
  margin-right: 250px;
 
`;

const Option = styled.li`
  min-width: 150px;
  font-size: 25px;
  display: flex;
  cursor: pointer;

`;

// Array de opções de texto para o menu
const textOptions = ['Categorias', 'Meus Jogos', 'Favoritos'];

function OptionHeader() {
  return (
    // Renderização das opções de menu usando a estrutura de estilos definida acima
    <Options className='options'>
      {/* Mapeando as opções de texto e criando um link para cada uma */}
      {textOptions.map((text, index) => (
        <Option key={index}>
          {/* Criação do link para cada texto de opção */}
          <Link to={`/${text.toLowerCase()}`}>
            {/* Renderização do texto da opção dentro do link */}
            <p>{text}</p>
          </Link>
        </Option>
      ))}
    </Options>
  );
}

export default OptionHeader;
