import React from 'react';
import SideBarLogo from 'Components/sideBarLogo';
import SideBarCatalog from 'Components/sideBarCatalog';
import * as S from './styles';

const SideBar = () => {
    return (
        <S.Container>
            <S.InfoGroup>
                <SideBarLogo />
                <SideBarCatalog />
                <S.UserProfile>
                    <S.UserProfilePicture src="/assets/images/menuImages/606c96e3c6a4c_Easy-Resize.com.jpg" />
                </S.UserProfile>
            </S.InfoGroup>
            <S.ExitBtnImage src="/assets/images/sideBarImages/Log_Out.svg" />
        </S.Container>
    );
};

export default SideBar;
