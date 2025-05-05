import styles from 'styled-components';

export const CommentSectionDiv = styles.div`
    display: flex;
    width: 90%;
    padding: 24px;
    flex-direction: column;
    align-items: flex-start;
    align-self: center;
    gap: 55px;
    border-radius: 16px;
    background: var(--Slate-8, #4C5155);
`;

export const CommentSectionText = styles.input`
    background: var(--Slate-8, #4C5155);
    width: 95%;
    border: none;
    outline: none;
    color: var(--Slate-12, #ECEDEE);
    font-family: Nunito;
    font-size: 18px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
    ::placeholder {
        color: var(--Slate-12, #ECEDEE);
        font-family: Nunito;
        font-size: 18px;
        font-style: normal;
        font-weight: 400;
        line-height: normal;
    }
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
    cursor: pointer;
`;

export const CommentSectionIconsImages2 = styles.img`
    width: 20px;
    height: 20px;
    cursor: pointer;    
`;
