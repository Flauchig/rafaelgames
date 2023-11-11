
import LogoComponent from '../logo';
import OptionHeader from '../optionHeader';
import IconsHeader from '../IconsHeader';
import styled from 'styled-components';

const HeaderContainer = styled.header` 

background-color: white;
display: flex;
justify-content: space-between;
align-items: center;



`



function Header() {

    return (



        <HeaderContainer>

            <LogoComponent></LogoComponent>
            <OptionHeader></OptionHeader>
            <IconsHeader></IconsHeader>

        </HeaderContainer>


// lembrnado sempre de  começar com a letra maiuscula no react 



    )



}


export default Header;