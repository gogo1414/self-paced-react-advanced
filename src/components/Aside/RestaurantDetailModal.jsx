import Modal from "./Modal.jsx"
import styled from "styled-components";

const RESTAURANT_INFO = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
`;

const RESTAURANT_INFO_DESCRIPTION = styled.p`
    font-size: 16px;
    line-height: 24px;
    font-weight: 400;
`;

const BUTTON_CONTAINER = styled.div`
    display: flex;
`;

const BUTTON = styled.button`
    // button
    width: 100%;
    height: 44px;
    margin-right: 16px;
    border: none;
    border-radius: 8px;
    font-weight: 600;
    cursor: pointer;

    // button--primary
    background: var(--primary-color);
    color: var(--grey-100);


    // text-caption
    font-size: 14px;
    line-height: 20px;
    //font-weight: 400;
`;

function RestaurantDetailModal({ restaurant, onChangeDetailModal }) {
    return (
        <Modal title={restaurant.name} onClose={onChangeDetailModal}>
            <RESTAURANT_INFO>
                <RESTAURANT_INFO_DESCRIPTION>{restaurant.description}</RESTAURANT_INFO_DESCRIPTION>
            </RESTAURANT_INFO>
            <BUTTON_CONTAINER onClick={onChangeDetailModal}>
                <BUTTON>닫기</BUTTON>
            </BUTTON_CONTAINER>
        </Modal>
    );
}

export default RestaurantDetailModal;