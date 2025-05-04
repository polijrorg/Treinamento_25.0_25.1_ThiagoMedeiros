import styles from 'styled-components';

export const Container = styles.div`
    display: flex;
    width: 20vw;
    height: 100vh;
    padding: 32px 0px;
    flex-direction: column;
    align-items: center;
    gap: 240px;
    flex-shrink: 0;
    border-right: 1px solid var(--Slate-8, #4C5155);
    background: var(--Slate-2, #1A1D1E);
`;

export const InfoGroup = styles.div`
    display: flex;
    height: 528px;
    flex-direction: column;
    align-items: center;
    gap: 40px;
    flex-shrink: 0;
    align-self: stretch;
`;

export const LogoDiv = styles.div`
    display: flex;
    align-items: center;
    gap: 16px;
`;

export const LogoImage = styles.img`
    width: 48px;
    height: 48px;
`;

export const LogoText = styles.h1`
    color: var(--Slate-12, #ECEDEE);
    font-family: Nunito;
    font-size: 24px;
    font-style: normal;
    font-weight: 500;
    line-height: normal;
    letter-spacing: 6px;
`;

export const MenuDiv = styles.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    gap: 16px;
    align-self: stretch;
`;
export const InitialPageDiv = styles.div`
    display: flex;
    height: 56px;
    padding-right: 16px;
    align-items: center;
    gap: 10px;  
`;

export const InitialPageBar = styles.div`
    display: flex;
    width: 304px;
    padding: 0px 16px;
    align-items: center;
    gap: 10px;
    border-radius: 0px 80px 80px 0px;
    background: var(--Indigo-9, #3E63DD);
`;

export const InitialPageBarImage = styles.img`
    width: 24px;
    height: 24px;
    flex-shrink: 0;
`;

export const InitialPageBarText = styles.h2`
    display: flex;
    width: 179px;
    height: 57px;
    flex-direction: column;
    justify-content: center;
    flex-shrink: 0;
    color: var(--Slate-12, #ECEDEE);
    font-family: Nunito;
    font-size: 18px;
    font-style: normal;
    font-weight: normal;
    line-height: normal;
`;

export const NotificationsDiv = styles.div`
    display: flex;
    height: 56px;
    padding-right: 16px;
    align-items: center;
    gap: 10px;
`;

export const NotificationsBar = styles.div`
    display: flex;
    width: 304px;
    padding: 0px 16px;
    align-items: center;
    gap: 10px;
`;

export const NotificationsBarImage = styles.img`
    width: 24px;
    height: 24px;
    flex-shrink: 0;
`;

export const NotificationsBarText = styles.h2`
    display: flex;
    width: 179px;
    height: 57px;
    flex-direction: column;
    justify-content: center;
    flex-shrink: 0;
    color: var(--Slate-12, #ECEDEE);
    font-family: Nunito;
    font-size: 18px;
    font-style: normal;
    font-weight: normal;
    line-height: normal;
`;

export const MessagesDiv = styles.div`
    display: flex;
    height: 56px;
    padding-right: 16px;
    align-items: center;
    gap: 10px;
`;

export const MessagesBar = styles.div`
    display: flex;
    width: 304px;
    padding: 0px 16px;
    align-items: center;
    gap: 10px;
`;

export const MessagesBarImage = styles.img`
    width: 24px;
    height: 24px;
    flex-shrink: 0;
`;

export const MessagesBarText = styles.h2`
    display: flex;
    width: 179px;
    height: 57px;
    flex-direction: column;
    justify-content: center;
    flex-shrink: 0;
    color: var(--Slate-12, #ECEDEE);
    font-family: Nunito;
    font-size: 18px;
    font-style: normal;
    font-weight: normal;
    line-height: normal;
`;

export const SavedDiv = styles.div`
    display: flex;
    height: 56px;
    padding-right: 16px;
    align-items: center;
    gap: 10px;
`;

export const SavedBar = styles.div`
    display: flex;
    width: 304px;
    padding: 0px 16px;
    align-items: center;
    gap: 10px;
`;

export const SavedBarImage = styles.img`
    width: 24px;
    height: 24px;
    flex-shrink: 0;
`;

export const SavedBarText = styles.h2`
    display: flex;
    width: 179px;
    height: 57px;
    flex-direction: column;
    justify-content: center;
    flex-shrink: 0;
    color: var(--Slate-12, #ECEDEE);
    font-family: Nunito;
    font-size: 18px;
    font-style: normal;
    font-weight: normal;
    line-height: normal;
`;

export const ProfileDiv = styles.div`
    display: flex;
    height: 56px;
    padding-right: 16px;
    align-items: center;
    gap: 10px;
`;

export const ProfileBar = styles.div`
    display: flex;
    width: 304px;
    padding: 0px 16px;
    align-items: center;
    gap: 10px;
`;

export const ProfileBarImage = styles.img`
    width: 24px;
    height: 24px;
    flex-shrink: 0;
`;

export const ProfileBarText = styles.h2`
    display: flex;
    width: 179px;
    height: 57px;
    flex-direction: column;
    justify-content: center;
    flex-shrink: 0;
    color: var(--Slate-12, #ECEDEE);
    font-family: Nunito;
    font-size: 18px;
    font-style: normal;
    font-weight: normal;
    line-height: normal;
`;

export const SettingsDiv = styles.div`
    display: flex;
    height: 56px;
    padding-right: 16px;
    align-items: center;
    gap: 10px;
`;

export const SettingsBar = styles.div`
    display: flex;
    width: 304px;
    padding: 0px 16px;
    align-items: center;
    gap: 10px;
`;

export const SettingsBarImage = styles.img`
    width: 24px;
    height: 24px;
    flex-shrink: 0;
`;

export const SettingsBarText = styles.h2`
    display: flex;
    width: 179px;
    height: 57px;
    flex-direction: column;
    justify-content: center;
    flex-shrink: 0;
    color: var(--Slate-12, #ECEDEE);
    font-family: Nunito;
    font-size: 18px;
    font-style: normal;
    font-weight: normal;
    line-height: normal;
`;

export const UserProfile = styles.div`
    display: flex;
    width: 64px;
    height: 64px;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 10px;
    flex-shrink: 0;
    border-radius: 100px;
    background: #FFF;
`;

export const UserProfilePicture = styles.img`
    flex: 1 0 0;
    align-self: stretch;
    background: url(<path-to-image>) lightgray 50% / contain no-repeat;
    
`;

export const ExitBtnImage = styles.img`
    width: 64px;
    height: 64px;
    flex-shrink: 0;
`;
