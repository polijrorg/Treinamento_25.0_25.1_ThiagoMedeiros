import React from 'react';
import * as S from './styles';

const Pesquisa = () => {
    return (
        <S.SearchBarDiv>
            <S.SearchBarText placeholder="Ouvir um piu..." />
            <S.SearchBarImage src="/assets/images/menuImages/pesquisa.svg" />
        </S.SearchBarDiv>
    );
};
export default Pesquisa;
