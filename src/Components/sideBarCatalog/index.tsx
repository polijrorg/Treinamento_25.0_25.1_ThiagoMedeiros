import React, { useState } from 'react';
import * as S from './styles';

const SideBarCatalog = () => {
    const [item, setItem] = useState<string>('home');
    return (
        <S.CatalogDiv>
            <S.InitialPageDiv>
                <S.InitialPageBar
                    onClick={() => setItem('home')}
                    selecionado={item === 'home'}
                >
                    <S.InitialPageBarImage src="/assets/images/sideBarImages/home.svg" />
                    <S.InitialPageBarText>Página Inicial</S.InitialPageBarText>
                </S.InitialPageBar>
            </S.InitialPageDiv>
            <S.NotificationsDiv>
                <S.NotificationsBar
                    onClick={() => setItem('notif')}
                    selecionado={item === 'notif'}
                >
                    <S.NotificationsBarImage src="/assets/images/sideBarImages/notification.svg" />
                    <S.NotificationsBarText>
                        Notificações
                    </S.NotificationsBarText>
                </S.NotificationsBar>
            </S.NotificationsDiv>
            <S.MessagesDiv>
                <S.MessagesBar
                    onClick={() => setItem('msg')}
                    selecionado={item === 'msg'}
                >
                    <S.MessagesBarImage src="/assets/images/sideBarImages/messages.svg" />
                    <S.MessagesBarText>Mensagens</S.MessagesBarText>
                </S.MessagesBar>
            </S.MessagesDiv>
            <S.SavedDiv>
                <S.SavedBar
                    onClick={() => setItem('save')}
                    selecionado={item === 'save'}
                >
                    <S.SavedBarImage src="/assets/images/sideBarImages/salvos.svg" />
                    <S.SavedBarText>Salvos</S.SavedBarText>
                </S.SavedBar>
            </S.SavedDiv>
            <S.ProfileDiv>
                <S.ProfileBar
                    onClick={() => setItem('perfil')}
                    selecionado={item === 'perfil'}
                >
                    <S.ProfileBarImage src="/assets/images/sideBarImages/perfil.svg" />
                    <S.ProfileBarText>Perfil</S.ProfileBarText>
                </S.ProfileBar>
            </S.ProfileDiv>
            <S.SettingsDiv>
                <S.SettingsBar
                    onClick={() => setItem('setting')}
                    selecionado={item === 'setting'}
                >
                    <S.SettingsBarImage src="/assets/images/sideBarImages/config.svg" />
                    <S.SettingsBarText>Configurações</S.SettingsBarText>
                </S.SettingsBar>
            </S.SettingsDiv>
        </S.CatalogDiv>
    );
};

export default SideBarCatalog;
