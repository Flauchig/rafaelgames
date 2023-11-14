import styled from "styled-components";



 export const Titulo = styled.h2`
width: 100%;
padding: 30px 0;
background-color: #FFFFFF;
color: ${props => props.cor  || '#744700'};
font-size: 36px;
text-align: center;
margin: 0;

`;

//  na propriedade color foi aberta uma função js  que passa o paramentro de props assim podemos fazer alteraçoes no codigo diretamente da variavel passada ali que no caso seria a .cor caso não receba este padrão ela vai recerber o hash passado na OU "||"0

// lembrando que essa função naão se aplica apenas para a cor e sim para todas a funções do css. 