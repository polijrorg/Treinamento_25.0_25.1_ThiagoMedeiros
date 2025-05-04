import styles from 'styled-components';

export const Container = styles.div`
    display: flex;
    width: 20vw;
    height: 100vh;
    padding: 32px 16px;
    flex-direction: column;
    align-items: flex-start;
    gap: 24px;
    border-left: 1px solid var(--Slate-8, #4C5155);
    background: var(--Slate-2, #1A1D1E);
`;

export const EmAltaDiv = styles.div`
    display: flex;
    align-items: center;
`;

export const EmAltaIcon = styles.img`
    width: 32px;
    height: 32px;
`;

export const EmAltaText = styles.h2`
    color: var(--Slate-12, #ECEDEE);
    font-family: Nunito;
    font-size: 28px;
    font-style: normal;
    font-weight: 700;
    line-height: normal;
`;

export const line = styles.div`
    height: 0px;
    align-self: stretch;
    stroke-width: 1px;
    stroke: var(--Slate-8, #4C5155);
`;

export const NewsDiv = styles.div`
    display: flex;
    width: 304px;
    height: 120px;
    align-items: center;
    gap: 8px;
`;

export const NewsPicDesign = styles.div`
    display: flex;
    width: 112px;
    height: 112px;
    justify-content: center;
    align-items: center;
    flex-shrink: 0;
    border-radius: 2px;
    background: #FFF;
`;
export const NewsImage = styles.img`
    width: 112px;
    height: 112px;
    flex-shrink: 0;
    background: url(<path-to-image>) lightgray 50% / cover no-repeat;
`;

export const NewsMessage = styles.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    gap: 4px;
    flex: 1 0 0;
    align-self: stretch;
`;

export const NewsTittle = styles.h2`
    color: var(--Slate-12, #ECEDEE);

    /* Subtitle/Bold */
    font-family: Nunito;
    font-size: 18px;
    font-style: normal;
    font-weight: 700;
    line-height: normal;
`;

export const NewsText = styles.h3`
    align-self: stretch;
    color: var(--Slate-12, #ECEDEE);
    font-feature-settings: 'liga' off, 'clig' off;

    /* Body/Body Normal */
    font-family: Nunito;
    font-size: 14px;
    font-style: normal;
    font-weight: 400;
    line-height: 24px; /* 171.429% */
    letter-spacing: 0.5px;
    text-align: justify;
`;
