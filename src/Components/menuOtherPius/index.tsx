import React, { useState } from 'react';
import * as S from './styles';

interface Props {
    userImage: string;
    userName: string;
    userId: string;
    textMessage: string;
}

const OtherPius: React.FC<Props> = ({
    userImage,
    userName,
    userId,
    textMessage
}) => {
    const [like, setLike] = useState(false);
    const [likeCount, setLikeCount] = useState(2);

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
                            <S.PiuBarLeftDivPicImage src={userImage} />
                        </S.PiuBarLeftDivPicDesign>
                    </S.PiuBarLeftDivPic>
                    <S.PiuBarLeftDivUser>
                        <S.PiuBarLeftDivUserName>
                            {userName}
                        </S.PiuBarLeftDivUserName>
                        <S.PiuIdBarLeftDivUserId>
                            {userId}
                        </S.PiuIdBarLeftDivUserId>
                    </S.PiuBarLeftDivUser>
                </S.PiuBarLeftDiv>
            </S.PiuBar>
            <S.PiuMessage>{textMessage}</S.PiuMessage>
            <S.PiuIconsSection>
                <S.PiuIconDiv>
                    <S.PiuIconDivImage src="/assets/images/menuImages/Arrow_Reload_02.svg" />
                    <S.PiuIconDivNum>3</S.PiuIconDivNum>
                </S.PiuIconDiv>
                <S.PiuIconDiv>
                    <S.PiuIconDivImage src="/assets/images/menuImages/Chat_Circle.svg" />
                    <S.PiuIconDivNum>4</S.PiuIconDivNum>
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

export default OtherPius;
