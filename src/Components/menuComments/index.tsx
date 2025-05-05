import React from 'react';
import * as S from './styles';

interface ComentarioProps {
    onSend: () => void;
    onChangeText: (text: string) => void;
    value: string;
}

const Comentario: React.FC<ComentarioProps> = ({
    onSend,
    onChangeText,
    value
}) => {
    return (
        <S.CommentSectionDiv>
            <S.CommentSectionText
                placeholder="Quero dar um piu..."
                onChange={(e) => onChangeText(e.target.value)}
                value={value}
            />
            <S.CommentSectionIconsDiv>
                <S.CommentSectionIconsSubDiv>
                    <S.CommentSectionIconsImages1 src="/assets/images/menuImages/mediaPic.svg" />
                    <S.CommentSectionIconsImages1 src="/assets/images/menuImages/Video.svg" />
                    <S.CommentSectionIconsImages2 src="/assets/images/menuImages/FrameCarinha.svg" />
                    <S.CommentSectionIconsImages1 src="/assets/images/menuImages/interface.svg" />
                    <S.CommentSectionIconsImages1 src="/assets/images/menuImages/FrameGif.svg" />
                </S.CommentSectionIconsSubDiv>
                <S.CommentSectionIconsImages1
                    src="/assets/images/menuImages/Paper_Plane.svg"
                    onClick={onSend}
                    style={{ cursor: 'pointer' }}
                />
            </S.CommentSectionIconsDiv>
        </S.CommentSectionDiv>
    );
};

export default Comentario;
