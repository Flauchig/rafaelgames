
import styled from "styled-components";


const CardSection = styled.section `

background-image: linear-gradient(90deg, #582121 35%, #8F3D3D 165%);



`


const Card = styled.div `
    display: flex;
    background-color: #fff;
    box-shadow: 8px 8px 8px rgba(0, 0, 0, 2);
    align-items: center;
    margin: 30px auto;
    max-width: 600px;
    padding: 30px 25px; 
    justify-content: space-around;
    width: 100%;



`


const Titulo = styled.h3 `
    font-size: 16px;
    color: #EB9B00;
    text-align: left;

`

const Botao = styled.button`
    background-color: #EB9B00;
    color: #FFF;
    padding: 10px 0px;
    font-size: 16px;
    border: none;
    font-weight: 900;
    display: block;
    text-align: center;
    width: 150px;
    &:hover {
        cursor: pointer;
    }
`

const Descricao = styled.p`
    max-width: 300px;
`

const Subtitulo = styled.h4`
    color: #002F52;
    font-size: 18px;
    font-weight: bold;
    margin: 15px 0;
`
const ImgLivro = styled.img`
    width: 150px;
`

function CardRecomenda({titulo, subtitulo, descricao, img}) {

    //  aqui estamos  pasando parametros para usar as props no outro arquivo 


    return (
        <CardSection>
        <Card>
            <div>
            <Titulo> {titulo}.</Titulo>
            <Subtitulo>{subtitulo} </Subtitulo>
            <Descricao>{descricao}</Descricao>
            </div>
           
           <div>
            <ImgLivro src={img} alt="imagem do jogo " />
            <Botao> Saiba Mais </Botao>

           </div>

     
            {/* aqui estamos fazendo a definição de props  nos componemts assim montando  as props parassadas por parametro acima */}



        </Card>

        </CardSection>




    )

      



}

export default CardRecomenda; 