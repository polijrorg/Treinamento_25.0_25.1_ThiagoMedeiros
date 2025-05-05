import styles from 'styled-components';

export const LogoDiv = styles.div`
    display: flex;
    align-items: center;
    gap: 16px;
    cursor: pointer;
`;

export const LogoImage = styles.img`
    width: 48px;
    height: 48px;
`;

export const LogoText = styles.h1`
    color: var(--Slate-12, #ECEDEE);
    font-family: normal;
    font-size: 24px;
    font-style: normal;
    font-weight: 500;
    line-height: normal;
    letter-spacing: 6px;
`;
