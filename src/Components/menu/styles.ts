import styles from 'styled-components';

export const Container = styles.div`
    display: flex;
    width: 60vw;
    height: 100vh;
    flex-direction: column;
    align-items: center;
    gap: 46px;
    background: var(--Slate-1, #151718);
`;

export const NavigationBarDiv = styles.div`
    display: flex;
    width: 80%;
    padding: 8px;
    justify-content: space-between;
    align-items: center;
    align-self: stretch;
    border-radius: 8px;
    background: var(--Slate-8, #4C5155);
`;

export const NavigationBar = styles.div`

`;

export const NavigationBarText = styles.h2`
    color: var(--Slate-12, #ECEDEE);
    text-align: center;
    font-feature-settings: 'liga' off, 'clig' off;

    font-family: Nunito;
    font-size: 14px;
    font-style: normal;
    font-weight: 400;
    line-height: 24px; /* 171.429% */
    letter-spacing: 0.5px;
`;

export const NavigationBarImage = styles.img`
    width: 24px;
    height: 24px;
`;

export const CommentSectionDiv = styles.div`
    display: flex;

    padding: 24px;
    flex-direction: column;
    align-items: center;
    gap: 55px;
    align-self: stretch;
    border-radius: 16px;
    background: var(--Slate-8, #4C5155);
`;

export const CommentSectionText = styles.div`
    width: 153px;
    color: var(--Slate-12, #ECEDEE);
    text-align: center;
    font-family: Nunito;
    font-size: 18px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
`;

export const CommentSectionIconsDiv = styles.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    align-self: stretch;
`;

export const CommentSectionIconsSubDiv = styles.div`
    display: flex;
    align-items: center;
    gap: 8px;
`;

export const CommentSectionIconsImages1 = styles.img`
    width: 24px;
    height: 24px;
`;

export const CommentSectionIconsImages2 = styles.img`
    width: 20px;
    height: 20px;
`;

export const line = styles.div`
    height: 0px;
    align-self: stretch;
    stroke-width: 1px;
    stroke: var(--Slate-8, #4C5155);
`;

export const PiuDiv = styles.div`
    display: flex;
    padding: 24px;
    flex-direction: column;
    align-items: flex-start;
    gap: 30px;
    align-self: stretch;
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
    background: url(/assets/images/profileQuadrado.svg) lightgray 50% / contain no-repeat;
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

    /* Subtitle/Bold */
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
    /* Body/Body Normal */
    font-family: Nunito;
    font-size: 14px;
    font-style: normal;
    font-weight: 400;
    line-height: 24px; /* 171.429% */
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

    /* Subtitle/Normal */
    font-family: Nunito;
    font-size: 18px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
`;
