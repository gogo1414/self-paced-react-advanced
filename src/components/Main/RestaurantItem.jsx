import styles from '../../css/RestaurantList.module.css';
import styled from "styled-components";

const RESTAURANT_WRAPPER = styled.li`
    display: flex;
    align-items: flex-start;
    padding: 16px 8px;
    border-bottom: 1px solid #e9eaed;
`;

const RESTAURANT_CATEGORY = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 64px;
    height: 64px;
    min-width: 64px;
    min-height: 64px;
    margin-right: 16px;
    border-radius: 50%;
    background: var(--lighten-color);
`;

const CATEGORY_ICON = styled.img`
    width: 36px;
    height: 36px;
`;

const RESTAURANT_INFO = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
`;

const RESTAURANT_NAME = styled.h3`
    margin: 0;
    font-size: 18px;
    line-height: 28px;
    font-weight: 600;
`;

const RESTAURANT_DESCRIPTION = styled.p`
    display: -webkit-box;
    padding-top: 8px;
    overflow: hidden;
    text-overflow: ellipsis;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;

    font-size: 16px;
    line-height: 24px;
    font-weight: 400;
`;

function RestaurantItem({ name, description, category, alt, onClick }) {
    return (
        <RESTAURANT_WRAPPER onClick={onClick}>
          <RESTAURANT_CATEGORY>
            <CATEGORY_ICON src={convertCategoryToImageSrc(category)} alt={alt}></CATEGORY_ICON>
          </RESTAURANT_CATEGORY>
          <RESTAURANT_INFO>
            <RESTAURANT_NAME>{name}</RESTAURANT_NAME>
            <RESTAURANT_DESCRIPTION>{description}</RESTAURANT_DESCRIPTION>
          </RESTAURANT_INFO>
        </RESTAURANT_WRAPPER>
    );
}

function convertCategoryToImageSrc(category) {
    if (category === "아시안")
        return "../../templates/category-asian.png";
    else if (category === "중식")
        return "../../templates/category-chinese.png";
    else if (category === "기타")
        return "../../templates/category-etc.png";
    else if (category === "일식")
        return "../../templates/category-japanese.png";
    else if (category === "한식")
        return "../../templates/category-korean.png";
    else if (category === "양식")
        return "../../templates/category-western.png";
}

export default RestaurantItem;