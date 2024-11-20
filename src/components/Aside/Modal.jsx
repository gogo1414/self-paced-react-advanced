import styled from "styled-components";

const MODAL_WRAPPER = styled.div`
    display: block;
`;

const MODAL_BACKDROP = styled.div`
    position: fixed;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    background: rgba(0, 0, 0, 0.35);
`;

const MODAL_CONTAINER = styled.div`
    position: fixed;
    bottom: 0;
    width: 100%;
    padding: 32px 16px;
    border-radius: 8px 8px 0px 0px;
    background: var(--grey-100);
    
    &h2 {
        margin-bottom: 36px;
        font-size: 28px;
    }
`;

function Modal({ children, title, onClose }) {
    return (
        <MODAL_WRAPPER>
            <MODAL_BACKDROP onClick={onClose}></MODAL_BACKDROP>
            <MODAL_CONTAINER>
                <h2>{title}</h2>
                {children}
            </MODAL_CONTAINER>
        </MODAL_WRAPPER>
    );
}

export default Modal;