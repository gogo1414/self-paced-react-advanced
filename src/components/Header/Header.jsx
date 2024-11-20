import styled from "styled-components";

const GNB = styled.header`
    display: flex;
    justify-content: space-between;
    align-items: center;
    height: 64px;
    padding: 0 16px;
    background-color: var(--primary-color);
`;

const GNB_TITLE = styled.h1`
    color: #fcfcfd;
    font-size: 24px;
`;

const GNB_BUTTON = styled.button`
    height: 40px;
    border: none;
    border-radius: 8px;
    background: transparent;
    font-size: 24px;
    cursor: pointer;
    
    &img {
        display: block;
        width: 40px;
        height: 40px;
        object-fit: contain;
    }
`;

function Header({ onChangeAddModal }) {
    return (
        <GNB>
            <GNB_TITLE>점심 뭐 먹지</GNB_TITLE>
            <GNB_BUTTON type="button" aria-label="음식점 추가" onClick={onChangeAddModal}>
                <img src="../templates/add-button.png" alt="음식점 추가"></img>
            </GNB_BUTTON>
        </GNB>
    );
}

export default Header;