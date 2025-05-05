import styles from 'styled-components';

export const Container = styles.div`
    display: flex;
    width: 60vw;
    height: 100vh;
    flex-direction: column;
    align-items: center;
    gap: 46px;
    background: var(--Slate-1, #151718);
    overflow-y: scroll;
    scrollbar-width: none;
    padding-bottom: 32px;

`;

export const Line = styles.hr`
    width: 90%;
    color: #4C5155;
    border: none;
    border-top: 1px solid #4C5155;
`;
