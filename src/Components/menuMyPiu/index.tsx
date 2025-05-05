import React, { useState } from 'react';
import * as S from './styles';

interface MyPiuProps {
    textMessage: string;
    onDelete: () => void;
}

const MyPiu: React.FC<MyPiuProps> = ({ textMessage, onDelete }) => {
    const [like, setLike] = useState(false);
    const [likeCount, setLikeCount] = useState(0);

    const likeClick = () => {
        if (like) {
            setLike(false);
            setLikeCount(likeCount - 1);
        } else {
            setLike(true);
            setLikeCount(likeCount + 1);
        }
    };
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
                    <S.PiuIconDivImage src="/assets/images/menuImages/Arrow_Reload_02.svg" />
                    <S.PiuIconDivNum>0</S.PiuIconDivNum>
                </S.PiuIconDiv>
                <S.PiuIconDiv>
                    <S.PiuIconDivImage src="/assets/images/menuImages/Chat_Circle.svg" />
                    <S.PiuIconDivNum>0</S.PiuIconDivNum>
                </S.PiuIconDiv>
                <S.PiuIconDiv onClick={likeClick}>
                    <S.PiuIconDivImage
                        src={
                            like
                                ? '/assets/images/menuImages/BlueHeart.svg'
                                : '/assets/images/menuImages/Heart_02.svg'
                        }
                    />
                    <S.PiuIconDivNum>{likeCount}</S.PiuIconDivNum>
                </S.PiuIconDiv>
            </S.PiuIconsSection>
        </S.PiuDiv>
    );
};

export default MyPiu;
