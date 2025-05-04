import React from 'react';
import * as S from './styles';

const SideBar = () => {
    return (
        <S.Container>
            <S.InfoGroup>
                <S.LogoDiv>
                    <S.LogoImage src="/assets/images/sideBarImages/piupiu.svg" />
                    <S.LogoText>PIUPIUWER</S.LogoText>
                </S.LogoDiv>
                <S.MenuDiv>
                    <S.InitialPageDiv>
                        <S.InitialPageBar>
                            <S.InitialPageBarImage src="/assets/images/sideBarImages/home.svg" />
                            <S.InitialPageBarText>
                                Página Inicial
                            </S.InitialPageBarText>
                        </S.InitialPageBar>
                    </S.InitialPageDiv>
                    <S.NotificationsDiv>
                        <S.NotificationsBar>
                            <S.NotificationsBarImage src="/assets/images/sideBarImages/notification.svg" />
                            <S.NotificationsBarText>
                                Notificações
                            </S.NotificationsBarText>
                        </S.NotificationsBar>
                    </S.NotificationsDiv>
                    <S.MessagesDiv>
                        <S.MessagesBar>
                            <S.MessagesBarImage src="/assets/images/sideBarImages/messages.svg" />
                            <S.MessagesBarText>Mensagens</S.MessagesBarText>
                        </S.MessagesBar>
                    </S.MessagesDiv>
                    <S.SavedDiv>
                        <S.SavedBar>
                            <S.SavedBarImage src="/assets/images/sideBarImages/salvos.svg" />
                            <S.SavedBarText>Salvos</S.SavedBarText>
                        </S.SavedBar>
                    </S.SavedDiv>
                    <S.ProfileDiv>
                        <S.ProfileBar>
                            <S.ProfileBarImage src="/assets/images/sideBarImages/perfil.svg" />
                            <S.ProfileBarText>Perfil</S.ProfileBarText>
                        </S.ProfileBar>
                    </S.ProfileDiv>
                    <S.SettingsDiv>
                        <S.SettingsBar>
                            <S.SettingsBarImage src="/assets/images/sideBarImages/config.svg" />
                            <S.SettingsBarText>Configurações</S.SettingsBarText>
                        </S.SettingsBar>
                    </S.SettingsDiv>
                </S.MenuDiv>
                <S.UserProfile>
                    <S.UserProfilePicture src="/assets/images/sideBarImages/profilePic.svg" />
                </S.UserProfile>
            </S.InfoGroup>
            <S.ExitBtnImage src="/assets/images/sideBarImages/Log_Out.svg" />
        </S.Container>
    );
};

export default SideBar;
