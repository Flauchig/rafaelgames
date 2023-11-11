
import styled from 'styled-components';


const Options = styled.ul `
display: flex;
padding: 0 5%;
gap: 25px;
margin-right: 300px;


`
const Option = styled.li`
min-width: 150px;
font-size: 25px;
display: flex;

cursor: pointer;
}

  /* Espaçamento entre os ícones, ajuste conforme necessário */
`

// aqui acima estou mudando tags do html por styled components para deixar um tamanho padrão 




const textOption = ['Categorias', 'Meus Jogos', 'Favoritos']; 
// foi criada um constante para manipular o array

function OptionHeader(){

    return(


        <Options className='options'>
        {textOption.map((texto,index) => (
         <Option className='option' alt ='arry de texto' key={index} > <p>{texto}</p></Option>
   
         //aqui criamoos uma função .map para buscar o arry e transformalo em uma lista buscanto o valor da constante
   
         //sempre que abri uma funçao em js sempre lembrar de usar as chaves da mesma {} pois assim ele não pegar o javascript
      
        ) )}
         </Options>



    )

}

export default OptionHeader;