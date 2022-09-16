import styled from "styled-components";

export default function CategoryItem(props) {
  const onClickHandler = (id) => {
    console.log(id);
  };

  return (
    <>
      <CategoryWrap
        categoryColor={props.category.categoryColor}
        onClick={() => {
          onClickHandler(props.category.categoryId);
        }}
      >
        {props.category.categoryName}
      </CategoryWrap>
    </>
  );
}

const CategoryWrap = styled.div`
  margin: 10px 0;
  color: ${(props) => props.categoryColor};
  cursor: pointer;
`;
