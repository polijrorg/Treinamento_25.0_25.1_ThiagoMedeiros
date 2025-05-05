import React from 'react';
import PiusEmAltaNews from 'Components/piusEmAltaNews';
import * as S from './styles';

const PiusEmAlta = () => {
    return (
        <S.Container>
            <S.EmAltaDiv>
                <S.EmAltaIcon src="/assets/images/EmAlta/Foguinho.svg" />
                <S.EmAltaText>Pius em alta</S.EmAltaText>
            </S.EmAltaDiv>
            <S.Line />
            <PiusEmAltaNews
                newsImage="/assets/images/emAlta/images.jpg"
                newsTittle="Davi de guê ?"
                newsMessage="Davi Brito exibe barriga após Lipo HD: 'Já estou me sentindo o Léo Santana'"
            />
            <PiusEmAltaNews
                newsImage="/assets/images/emAlta/urna.svg"
                newsTittle="Eleições 2022"
                newsMessage="Eleição em São Paulo: veja Pius sobre a disputa de segundo turno entre Neymar e Vini Jr."
            />
            <PiusEmAltaNews
                newsImage="/assets/images/emAlta/image 10.svg"
                newsTittle="#AppleTeacher"
                newsMessage="Na semana do Dia do professor, agradecemos sua paixão e dedicação!"
            />
            <PiusEmAltaNews
                newsImage="/assets/images/emAlta/image 11.svg"
                newsTittle="A fazenda"
                newsMessage="Á fazenda 14': Veja os Pius sobre o programa 🤠"
            />
            <PiusEmAltaNews
                newsImage="/assets/images/emAlta/Frame 15038.svg"
                newsTittle="Vôlei"
                newsMessage="Sérvia derrota o Brasil e é campeã mundial de vôlei feminino"
            />
            <PiusEmAltaNews
                newsImage="/assets/images/emAlta/image 13.svg"
                newsTittle="Clima tenso no NTEC"
                newsMessage="Gomes é chamado de Campos e se irrita com companheiros"
            />
        </S.Container>
    );
};

export default PiusEmAlta;
