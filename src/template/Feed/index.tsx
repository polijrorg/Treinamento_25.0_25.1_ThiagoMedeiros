import React from 'react';
import SideBar from 'Components/sideBar';
import MenuPrincipal from 'Components/menu';
import PiusEmAlta from 'Components/piusEmAlta';
import * as S from './styles';

const HomeTemplate = () => {
    return (
        <S.Container>
            <SideBar />
            <MenuPrincipal />
            <PiusEmAlta />
        </S.Container>
    );
};
export default HomeTemplate;
