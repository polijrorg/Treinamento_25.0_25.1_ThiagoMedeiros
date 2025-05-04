import React from 'react';
import * as S from './styles';

const MenuPrincipal = () => {
    return (
        <S.Container>
            <S.NavigationBarDiv>
                <S.NavigationBarText>Ouvir um piu...</S.NavigationBarText>
                <S.NavigationBarImage src="/assets/images/menuImages/pesquisa.svg" />
            </S.NavigationBarDiv>
            <S.CommentSectionDiv>
                <S.CommentSectionText>Quero dar um piu...</S.CommentSectionText>
                <S.CommentSectionIconsDiv>
                    <S.CommentSectionIconsSubDiv>
                        <S.CommentSectionIconsImages1 src="/assets/images/menuImages/mediaPic.svg" />
                        <S.CommentSectionIconsImages1 src="/assets/images/menuImages/Video.svg" />
                        <S.CommentSectionIconsImages2 src="/assets/images/menuImages/FrameCarinha.svg" />
                        <S.CommentSectionIconsImages1 src="/assets/images/menuImages/interface.svg" />
                        <S.CommentSectionIconsImages1 src="/assets/images/menuImages/FrameGif.svg" />
                    </S.CommentSectionIconsSubDiv>
                    <S.CommentSectionIconsImages1 src="/assets/images/menuImages/Paper_Plane.svg" />
                </S.CommentSectionIconsDiv>
            </S.CommentSectionDiv>

            <S.PiuDiv>
                <S.PiuBar>
                    <S.PiuBarLeftDiv>
                        <S.PiuBarLeftDivPic>
                            <S.PiuBarLeftDivPicDesign>
                                <S.PiuBarLeftDivPicImage src="/assets/images/menuImages/profileQuadrado.svg" />
                            </S.PiuBarLeftDivPicDesign>
                        </S.PiuBarLeftDivPic>
                        <S.PiuBarLeftDivUser>
                            <S.PiuBarLeftDivUserName>
                                Nome de usuário
                            </S.PiuBarLeftDivUserName>
                            <S.PiuIdBarLeftDivUserId>
                                @user
                            </S.PiuIdBarLeftDivUserId>
                        </S.PiuBarLeftDivUser>
                    </S.PiuBarLeftDiv>
                    <S.PiuBarTrashIcon src="/assets/images/menuImages/Trash.svg" />
                </S.PiuBar>
                <S.PiuMessage>
                    only love can hurt like this... ᶜᵃᵈᵉ ᵒ ˡᵒˡᵒ only love can
                    hurt like this ᵐᵉ ᵈᵃ ᵒ ˡᵒˡᵒ
                </S.PiuMessage>
                <S.PiuIconsSection>
                    <S.PiuIconDiv>
                        <S.PiuIconDivImage src="/assets/images/menuImages/BlueArrow.svg" />
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
        </S.Container>
    );
};
export default MenuPrincipal;
