import styles from 'styled-components';

export const SearchBarDiv = styles.div`
    display: flex;
    margin-top: 32px;
    width: 90%;
    padding: 8px;
    justify-content: space-between;
    align-items: center;
    border-radius: 8px;
    background: var(--Slate-8, #4C5155);
`;

export const SearchBarText = styles.input`
    background: var(--Slate-8, #4C5155);
    width: 90%;
    border: none;
    outline: none;
    color: var(--Slate-12, #ECEDEE);
    text-align: justify;
    font-feature-settings: 'liga' off, 'clig' off;
    font-family: Nunito;
    font-size: 14px;
    font-style: normal;
    font-weight: 400;
    line-height: 24px;
    letter-spacing: 0.5px;
    ::placeholder{
        color: var(--Slate-12, #ECEDEE);
        text-align: left;
        font-feature-settings: 'liga' off, 'clig' off;
        font-family: Nunito;
        font-size: 14px;
        font-style: normal;
        font-weight: 400;
        line-height: 24px;
        letter-spacing: 0.5px;
    }
`;

export const SearchBarImage = styles.img`
    width: 24px;
    height: 24px;
    cursor: pointer;
`;
