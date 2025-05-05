import React from 'react';
import * as S from './styles';

interface Props {
    newsImage: string;
    newsTittle: string;
    newsMessage: string;
}

const PiusEmAltaNews: React.FC<Props> = ({
    newsImage,
    newsTittle,
    newsMessage
}) => {
    return (
        <S.Cont>
            <S.NewsDiv>
                <S.NewsPicDesign>
                    <S.NewsImage src={newsImage} />
                </S.NewsPicDesign>
                <S.NewsMessage>
                    <S.NewsTittle>{newsTittle}</S.NewsTittle>
                    <S.NewsText>{newsMessage}</S.NewsText>
                </S.NewsMessage>
            </S.NewsDiv>
            <S.Line />
        </S.Cont>
    );
};

export default PiusEmAltaNews;
