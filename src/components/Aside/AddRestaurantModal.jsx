import Categories from "../../data/Category.js";
import Modal from "./Modal.jsx"
import styled from "styled-components";

const FORM_ITEM = styled.div`
    display: flex;
    flex-direction: column;
    margin-bottom: 36px;

    padding-left: 4px;
    color: var(--primary-color);
    content: "*";
`;

const FORM_LABEL = styled.label`
    font-size: 14px;
    line-height: 20px;
    font-weight: 400;
`;

const FORM_HELP_TEXT = styled.span`
    font-size: 14px;
    line-height: 20px;
    font-weight: 400;
    color: var(--grey-300);
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

    // button-container
    background: var(--primary-color);
    color: var(--grey-100);
    
    // text-caption
    font-size: 14px;
    line-height: 20px;
    //font-weight: 400;
`;

function AddRestaurantModal({ onFormSubmit, onChangeAddModal }) {
    const categories = Categories().filter(
        (category) => category.name !== "전체"
    );

    const handleSubmit = (event) => {
        const formData = new FormData(event.target);
        const formJson = Object.fromEntries(formData.entries());
        onFormSubmit(formJson);
    }

    return (
        <Modal 
            title="새로운 음식점" 
            onClose={onChangeAddModal}
        >
            <form method="post" onSubmit={handleSubmit}>
                <FORM_ITEM>
                    <FORM_LABEL htmlFor="category">카테고리</FORM_LABEL>
                    <select name="category" id="category" required>
                        <option value="">선택해 주세요</option>
                        {categories.map((category) => (
                            <option key={category.id} value={category.name}>{category.name}</option>
                        ))}
                    </select>
                </FORM_ITEM>
                <FORM_ITEM>
                    <FORM_LABEL htmlFor="name">이름</FORM_LABEL>
                    <input type="text" name="name" id="name" required></input>
                </FORM_ITEM>
                <FORM_ITEM>
                    <FORM_LABEL htmlFor="description">설명</FORM_LABEL>
                    <textarea name="description" id="description" cols="30" rows="5"></textarea>
                    <FORM_HELP_TEXT>메뉴 등 추가 정보를 입력해 주세요.</FORM_HELP_TEXT>
                </FORM_ITEM>
                <BUTTON_CONTAINER>
                    <BUTTON className={`${styles.button} ${styles["button--primary"]} text-caption`}>추가하기</BUTTON>
                </BUTTON_CONTAINER>
            </form>
        </Modal>
    ); 
}

export default AddRestaurantModal;