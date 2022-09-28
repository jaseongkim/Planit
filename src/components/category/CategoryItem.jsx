import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import { next_icon } from "../../static/images";

export default function CategoryItem(props) {
  const navigate = useNavigate();

  const onClickHandler = (id) => {
    navigate(`/categorydetail/${id}`);
  };

  return (
    <CategoryWrap
      categoryColor={props.category?.categoryColor}
      onClick={() => {
        onClickHandler(props.category?.categoryId);
      }}
    >
      <CategoryTitle>
        <StyCategLabel
          categoryColor={props.category?.categoryColor}
        ></StyCategLabel>
        {props.category?.categoryName}
      </CategoryTitle>
      <img src={next_icon} alt="next arrow" />
    </CategoryWrap>
  );
}

const CategoryWrap = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  font-size: 18px;
  color: #fff;
  padding: 18px 0;
  border-bottom: 1px solid #5d646b;
  cursor: pointer;
`;

const CategoryTitle = styled.div`
  display: flex;
  align-items: center;
`;

const StyCategLabel = styled.div`
  width: 3px;
  height: 16px;
  margin-right: 8px;
  background: ${(props) => props.categoryColor};
`;
