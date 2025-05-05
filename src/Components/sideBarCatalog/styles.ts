import styles from 'styled-components';

export interface StyledProps {
    selecionado: boolean;
}

export const CatalogDiv = styles.div`
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
    cursor: pointer; 

`;

export const InitialPageBar = styles.div<StyledProps>`
    display: flex;
    width: 304px;
    padding: 0px 16px;
    align-items: center;
    gap: 10px;
    border-radius: 0px 80px 80px 0px;
    background: ${({ selecionado }) =>
        selecionado ? 'var(--Indigo-9, #3E63DD)' : 'transparent'};
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
    cursor: pointer;
`;

export const NotificationsBar = styles.div<StyledProps>`
    display: flex;
    width: 304px;
    padding: 0px 16px;
    align-items: center;
    gap: 10px;
    border-radius: 0px 80px 80px 0px;
    background: ${({ selecionado }) =>
        selecionado ? 'var(--Indigo-9, #3E63DD)' : 'transparent'};
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
    cursor: pointer;
`;

export const MessagesBar = styles.div<StyledProps>`
    display: flex;
    width: 304px;
    padding: 0px 16px;
    align-items: center;
    gap: 10px;
    border-radius: 0px 80px 80px 0px;
    background: ${({ selecionado }) =>
        selecionado ? 'var(--Indigo-9, #3E63DD)' : 'transparent'};
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
    cursor: pointer;
`;

export const SavedBar = styles.div<StyledProps>`
    display: flex;
    width: 304px;
    padding: 0px 16px;
    align-items: center;
    gap: 10px;
    border-radius: 0px 80px 80px 0px;
    background: ${({ selecionado }) =>
        selecionado ? 'var(--Indigo-9, #3E63DD)' : 'transparent'};
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
    cursor: pointer;
`;

export const ProfileBar = styles.div<StyledProps>`
    display: flex;
    width: 304px;
    padding: 0px 16px;
    align-items: center;
    gap: 10px;
    border-radius: 0px 80px 80px 0px;
    background: ${({ selecionado }) =>
        selecionado ? 'var(--Indigo-9, #3E63DD)' : 'transparent'};
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
    cursor: pointer;
`;

export const SettingsBar = styles.div<StyledProps>`
    display: flex;
    width: 304px;
    padding: 0px 16px;
    align-items: center;
    gap: 10px;
    border-radius: 0px 80px 80px 0px;
    background: ${({ selecionado }) =>
        selecionado ? 'var(--Indigo-9, #3E63DD)' : 'transparent'};
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
