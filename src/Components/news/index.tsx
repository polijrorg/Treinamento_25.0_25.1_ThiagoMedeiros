import React from 'react';
import * as S from './styles';

const PiusEmAlta = () => {
    return (
        <S.Container>
            <S.EmAltaDiv>
                <S.EmAltaIcon src="/assets/images/EmAlta/Foguinho.svg" />
                <S.EmAltaText>Pius em alta</S.EmAltaText>
            </S.EmAltaDiv>
            <S.NewsDiv>
                <S.NewsPicDesign>
                    <S.NewsImage src="/assets/images/emAlta/urna.svg" />
                </S.NewsPicDesign>
                <S.NewsMessage>
                    <S.NewsTittle>Eleições 2022</S.NewsTittle>
                    <S.NewsText>
                        Eleição em São Paulo: veja Pius sobre a disputa de
                        segundo turno entre Neymar e Vini Jr.
                    </S.NewsText>
                </S.NewsMessage>
            </S.NewsDiv>
        </S.Container>
    );
};

export default PiusEmAlta;
