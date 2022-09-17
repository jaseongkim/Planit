import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import { next_icon } from "../../static/images";

export default function CategoryItem(props) {
  const navigate = useNavigate();

  const onClickHandler = (id) => {
    console.log(id);
    navigate(`/categorydetail/${id}`);
  };

  return (
    <CategoryWrap
      categoryColor={props.category?.categoryColor}
      onClick={() => {
        onClickHandler(props.category?.categoryId);
      }}
    >
      {props.category?.categoryName}
      <img src={next_icon} alt="next arrow" />
    </CategoryWrap>
  );
}

const CategoryWrap = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  font-size: 18px;
  // color: ${(props) => props.categoryColor};
  color: #fff;
  margin: 10px 0;
  padding: 18px 0;
  border-bottom: 1px solid #5d646b;
  cursor: pointer;
`;
