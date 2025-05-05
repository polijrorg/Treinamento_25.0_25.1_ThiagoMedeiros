import styles from 'styled-components';

export const PiuDiv = styles.div`
    display: flex;
    padding: 24px;
    width: 90%;
    flex-direction: column;
    align-items: flex-start;
    align-self: center;
    gap: 30px;
    border-radius: 16px;
    background: var(--Slate-3, #202425);
`;

export const PiuBar = styles.div`
    display: flex;
    justify-content: space-between;
    align-items: flex-start;
    align-self: stretch;
`;

export const PiuBarLeftDiv = styles.div`
    display: flex;
    align-items: center;
    gap: 8px;
`;

export const PiuBarLeftDivPic = styles.div`
    display: flex;
    padding: 8px;
    align-items: center;
    gap: 10px;
    border-radius: 48px;
    border: 4px solid var(--Institutional-Blue-Fade, #004C97);
`;

export const PiuBarLeftDivPicDesign = styles.div`
    display: flex;
    width: 80px;
    height: 80px;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 10px;
    border-radius: 100px;
    background: #FFF;
`;

export const PiuBarLeftDivPicImage = styles.img`
    flex: 1 0 0;
    align-self: stretch;
    border-radius: 100px;
    background: lightgray 50% / contain no-repeat;
`;

export const PiuBarLeftDivUser = styles.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;
    gap: 8px;
`;

export const PiuBarLeftDivUserName = styles.h2`
    color: var(--Slate-12, #ECEDEE);
    text-align: center;
    font-family: Nunito;
    font-size: 18px;
    font-style: normal;
    font-weight: 700;
    line-height: normal;
`;

export const PiuIdBarLeftDivUserId = styles.h3`
    color: var(--Slate-12, #ECEDEE);
    text-align: center;
    font-feature-settings: 'liga' off, 'clig' off;
    font-family: Nunito;
    font-size: 14px;
    font-style: normal;
    font-weight: 400;
    line-height: 24px; 
    letter-spacing: 0.5px;
`;

export const PiuBarTrashIcon = styles.img`
    width: 24px;
    height: 24px;
`;

export const PiuMessage = styles.h3`
    color: var(--Slate-12, #ECEDEE);
    text-align: center;
    font-family: Nunito;
    font-size: 16px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
`;

export const PiuIconsSection = styles.div`
    display: flex;
    align-items: flex-start;
    gap: 24px;
`;
export const PiuIconDiv = styles.div`
    display: flex;
    align-items: center;
    gap: 8px;
`;

export const PiuIconDivImage = styles.img`
    width: 24px;
    height: 24px;
`;

export const PiuIconDivNum = styles.h3`
    color: var(--Slate-12, #ECEDEE);
    font-family: Nunito;
    font-size: 18px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
`;
