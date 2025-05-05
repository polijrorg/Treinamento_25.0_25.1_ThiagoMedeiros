import styles from 'styled-components';

export const Cont = styles.div``; // não sei se conta como gambiarra, mas foi a forma q eu achei pra juntar os componentes e linhas em um container externo

export const NewsDiv = styles.div`
    display: flex;
    width: 304px;
    height: 120px;
    align-items: center;
    gap: 8px;
    cursor: pointer;
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
    background: lightgray 50% / cover no-repeat;
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
    font-family: Nunito;
    font-size: 14px;
    font-style: normal;
    font-weight: 400;
    line-height: 24px;
    letter-spacing: 0.5px;
    text-align: justify;
`;

export const Line = styles.div`
    margin-top: 24px;
    width: 100%;
    height: 1px;
    background: var(--Slate-8, #4C5155);
`;
