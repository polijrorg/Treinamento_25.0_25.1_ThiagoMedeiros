import styles from 'styled-components';

export const Container = styles.div`
    display: flex;
    width: 20vw;
    height: 100vh;
    padding: 32px 0px;
    flex-direction: column;
    align-items: center;
    gap: 240px;
    flex-shrink: 0;
    border-right: 1px solid var(--Slate-8, #4C5155);
    background: var(--Slate-2, #1A1D1E);
`;

export const InfoGroup = styles.div`
    display: flex;
    height: 528px;
    flex-direction: column;
    align-items: center;
    gap: 40px;
    flex-shrink: 0;
    align-self: stretch;
`;

export const UserProfile = styles.div`
    margin-top: 120px;
    display: flex;
    width: 64px;
    height: 64px;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 10px;
    flex-shrink: 0;
    border-radius: 100px;
    background: #FFF;
`;

export const UserProfilePicture = styles.img`
    flex: 1 0 0;
    align-self: stretch;
    border-radius: 100px;
    background: lightgray 50% / contain no-repeat;
    cursor: pointer;
`;

export const ExitBtnImage = styles.img`
    width: 64px;
    height: 64px;
    flex-shrink: 0;
    cursor: pointer;
`;
