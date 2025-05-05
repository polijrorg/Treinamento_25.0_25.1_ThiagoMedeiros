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
    overflow-y: scroll;
    scrollbar-width: none;
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

export const Line = styles.hr`
    width: 90%;
    color: #4C5155;
    border: none;
    border-top: 1px solid #4C5155;
`;
