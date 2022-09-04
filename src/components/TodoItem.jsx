import React from 'react';
import styled from "styled-components";

const TodoItem = () => {
  

  const onShowMemo = () => {
    //   console.log(document.getElementsByTagName('MemoWrap')[0])
    }


    return (
            <TodoItemCon>
              <TodoTitle>
                <input type="checkbox" />
                <div>
                  <input type="text" defaultValue="산책하기" />
                  <button onClick={onShowMemo}>토글버튼</button>
                </div>
              </TodoTitle>
              <MemoWrap>
                <textarea></textarea>
                <div>
                  <button>날짜변경</button>
                  <button>삭제</button>
                </div>
              </MemoWrap>
              </TodoItemCon>
    );
};

export default TodoItem;


const TodoItemCon = styled.li`
  border: 3px solid red;
  width: 100%;

  &:not(:last-child) {
    margin-bottom: 5px;
  }
`;





const TodoTitle = styled.div`
  display: flex;
  justify-content: space-between;
  border: 3px solid green;

  div {
  }
`;

const MemoWrap = styled.div`
  display: none;

  margin-top: 5px;
  padding: 5px 0;

  textarea {
    width: 100%;
    height: 100px;
  }

  div {
    display: flex;
    justify-content: flex-end;
  }

  button {
    &:not(:first-child) {
      margin-left: 5px;
    }
  }
`;