import React from 'react';
import * as S from './styles';

interface MyPiuProps {
    textMessage: string;
    onDelete: () => void;
}

const MyPiu: React.FC<MyPiuProps> = ({ textMessage, onDelete }) => {
    return (
        <S.PiuDiv>
            <S.PiuBar>
                <S.PiuBarLeftDiv>
                    <S.PiuBarLeftDivPic>
                        <S.PiuBarLeftDivPicDesign>
                            <S.PiuBarLeftDivPicImage src="/assets/images/menuImages/606c96e3c6a4c_Easy-Resize.com.jpg" />
                        </S.PiuBarLeftDivPicDesign>
                    </S.PiuBarLeftDivPic>
                    <S.PiuBarLeftDivUser>
                        <S.PiuBarLeftDivUserName>
                            Medeiros
                        </S.PiuBarLeftDivUserName>
                        <S.PiuIdBarLeftDivUserId>@Rock</S.PiuIdBarLeftDivUserId>
                    </S.PiuBarLeftDivUser>
                </S.PiuBarLeftDiv>
                <S.PiuBarTrashIcon
                    src="/assets/images/menuImages/Trash.svg"
                    onClick={onDelete}
                />
            </S.PiuBar>
            <S.PiuMessage>{textMessage}</S.PiuMessage>
            <S.PiuIconsSection>
                <S.PiuIconDiv>
                    <S.PiuIconDivImage src="assets/images/menuImages/BlueArrow.svg" />
                    <S.PiuIconDivNum>1</S.PiuIconDivNum>
                </S.PiuIconDiv>
                <S.PiuIconDiv>
                    <S.PiuIconDivImage src="/assets/images/menuImages/BlueComment.svg" />
                    <S.PiuIconDivNum>1</S.PiuIconDivNum>
                </S.PiuIconDiv>
                <S.PiuIconDiv>
                    <S.PiuIconDivImage src="/assets/images/menuImages/BlueHeart.svg" />
                    <S.PiuIconDivNum>2</S.PiuIconDivNum>
                </S.PiuIconDiv>
            </S.PiuIconsSection>
        </S.PiuDiv>
    );
};

export default MyPiu;
