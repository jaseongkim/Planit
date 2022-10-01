// React
import React, { useState, useEffect, useRef } from "react";
// BottomModalSheet
import Sheet from "react-modal-sheet";
// Calendar
import Calendar from "react-calendar";
import moment, { ISO_8601 } from "moment";
import "react-calendar/dist/Calendar.css";
// Redux
import { useDispatch, useSelector } from "react-redux";
import {
  getCategThunk,
  addMtyTodo,
  deleteTodoThunk,
  updateTodoMemoThunk,
} from "../redux/modules/categTodoSlice.js";
import { getDayPlanetThunk } from "../redux/modules/planetSlice.js";
// Styled-Component
import styled from "styled-components";
// React Component
import Header from "../components/Header";
import TodoList from "../components/TodoList";
import BtmFitNavi from "../components/btmFitNaviBar/BtmFitNavi.jsx";
import DayMover from "../components/dateMover/DayMover.jsx";
import ChgDateModal from "../components/chgDateModal/ChgDateModal.js";
// Element
import Circle from "../element/Circle.jsx";
import Button from "../element/Button.jsx";
// React-icons
import { FiPlus } from "react-icons/fi";
import { prev_icon, next_icon } from "../static/images/";
import {
  achieved_icon,
  like_icon_on,
  delete_icon,
  calendar_icon_gray,
  edit_icon,
} from "../static/images";
// React Router Dom
import { useNavigate } from "react-router-dom";

const DlyTodo = () => {
  // React Router Dom
  const navigate = useNavigate();

  // Redux : dispatch
  const dispatch = useDispatch();

  // Redux useSelector : planet useSelector
  const planet = useSelector((state) => state.planetSlice.planet);

  // Redux useSelector : categories useSelector
  const categories = useSelector((state) => state.categTodoSlice.categories);

  // Hook : whether to open the change date modal
  const [showModal, setShowModal] = useState(false);

  // Hook : whether to show bottom modal sheet
  const [openbtmSheet, setOpenBtmSheet] = useState(false);

  // Hook : To get the selected date from the calendar
  const [dateValue, setDateValue] = useState(new Date());

  // Hook : To get the clicked Memo info from the TodoList
  const [clickedMemo, setClickedMemo] = useState("");

  // Hook : To get the clicked category index
  const [clickedCategIndex, setClickedCategIndex] = useState("");

  // Hook : To get the clicked todo info & index from the TodoList
  const [clickedTodo, setClickedTodo] = useState({
    todoInfo: "",
    todoIndex: "",
  });

  // Hook : Switching between the process planet & calendar
  const [showCalendar, setShowCalendar] = useState(false);

  // UseRef : To get the selected date from the calendar
  const concatSelDate = useRef();

  // Var ; A Parsed date in format yyyy/mm/dd from the calendar
  var parsedFullDate = `${dateValue.getFullYear()}-${String(
    dateValue.getMonth() + 1
  ).padStart(2, "0")}-${String(dateValue.getDate()).padStart(2, "0")}`;

  // Var : A Parsed date in format mm월 dd일 from the calendar
  var parsedParDate = `${String(dateValue.getFullYear()).slice(
    2,
    4
  )}년 ${String(dateValue.getMonth() + 1).padStart(2, "0")}월 ${String(
    dateValue.getDate()
  ).padStart(2, "0")}일`;

  // Var : Getting a current date
  const today = new Date();

  // Var : Parsing date string into date int format
  const parsedCurrDate = Date.parse(parsedFullDate);

  // Var : Parsinng a current date in format yyyy/mm/dd
  const parsedToday = Date.parse(
    `${today.getFullYear()}-${String(today.getMonth() + 1).padStart(
      2,
      "0"
    )}-${String(today.getDate()).padStart(2, "0")}`
  );

  // Function to open sheetModal & Getting clicked todo Info & index as well as the todo index
  const onClickedSheet = (inputs, index, categIndex) => {
    setOpenBtmSheet(true);
    setClickedTodo({
      todoInfo: inputs,
      todoIndex: index,
    });
    setClickedMemo(inputs.memo);
    setClickedCategIndex(categIndex);
  };

  // UseEffect : Getting categories & to-do lists as well as date from the calendar
  // Dispatchig PlanetThunk first => getCategThunk
  useEffect(() => {
    concatSelDate.current = parsedFullDate;
    dispatch(getDayPlanetThunk(concatSelDate.current)).then((response) => {
      if (response.meta.requestStatus === "fulfilled") {
        dispatch(getCategThunk(concatSelDate.current));
      }
    });
  }, [parsedFullDate, dispatch]);

  // Adding a new todo
  const addTodo = ({ input, index }) => {
    console.log("Checking input", input);
    if (input.todos[input.todos.length - 1]?.title !== "") {
      const mtyCateg = {
        categIndex: index,
        categReq: {
          todoListId: input.categoryId + 1,
          title: "",
          dueDate: concatSelDate.current,
        },
      };
      dispatch(addMtyTodo(mtyCateg));
      console.log("Checking here", document.getElementById("disable133"));
    }
  };

  // Enabling to edit todo by closing the modalSheet
  const clickEditTodo = () => {
    setOpenBtmSheet(false);
    document.getElementById(
      `disable${clickedTodo.todoInfo.todoId}`
    ).disabled = false;
    document.getElementById(`disable${clickedTodo.todoInfo.todoId}`).focus();
  };

  // Deleting the clicked todo by closing the modalSheet
  const clickDeleteTodo = () => {
    setOpenBtmSheet(false);

    const clickedTodoId = clickedTodo.todoInfo.todoId;

    const deleteTodoObj = {
      todoId: clickedTodoId,
      todoIndex: clickedTodo.todoIndex,
      categIndex: clickedCategIndex,
    };

    dispatch(deleteTodoThunk(deleteTodoObj));
  };

  // Updating memo input
  const onChangeMemoHandler = (e) => {
    setClickedMemo(e.target.value);
  };

  // When outfocused, update todo's memo
  const onCheckMemoOutFocus = () => {
    const clickedTodoId = clickedTodo.todoInfo.todoId;

    const updateTodoMemoObj = {
      todoId: clickedTodoId,
      todoIndex: clickedTodo.todoIndex,
      categIndex: clickedCategIndex,
      todoReq: {
        memo: clickedMemo,
      },
    };
    dispatch(updateTodoMemoThunk({ updateTodoMemoObj }));
  };

  // Enabling to change todo's date with a modal that has a calendar
  const onClickChgDateModal = () => {
    setOpenBtmSheet(false);
    setShowModal(true);
  };

  return (
    <StyDlyTodoCon>
      <Header showCalendar={showCalendar} setShowCalendar={setShowCalendar} />
      <StyContentWrap>
        <StyContentBox>
          {showCalendar ? (
            <CalendarWrap>
              <StyHeader showCalendar={showCalendar}>
                <TodoStatus>
                  <div>
                    <img src={achieved_icon} alt="achieved icon" />
                    <span>{planet.achievementCnt}</span>
                  </div>
                  {/* <div>
                    <img src={like_icon_on} alt="like icon on" />
                    <span>{planet.likesCnt}</span>
                  </div> */}
                </TodoStatus>
              </StyHeader>
              <Calendar
                onChange={setDateValue}
                value={dateValue}
                formatDay={(locale, date) => moment(date).format("DD")}
              />
            </CalendarWrap>
          ) : (
            <StyCircleWrap>
              <StyHeader showCalendar={showCalendar}>
                <DayMover
                  parsedParDate={parsedParDate}
                  setDateValue={setDateValue}
                  dateValue={dateValue}
                />
                <TodoStatus>
                  <div>
                    <img src={achieved_icon} alt="achieved icon" />
                    <span>{planet.achievementCnt}</span>
                  </div>
                  {/* <div>
                    <img src={like_icon_on} alt="like icon on" />
                    <span>{planet.likesCnt}</span>
                  </div> */}
                </TodoStatus>
              </StyHeader>
              {categories.length === 0 ? (
                <StyStareBox>
                  {planet.length === 0 ||
                  planet.planetType === 0 ||
                  planet.planetColor === null ||
                  planet.planetSize === null ||
                  planet.planetLevel === null ? (
                    <CircleBox>
                      <Circle
                        planetType={planet.planetType}
                        planetLevel={planet.planetLevel}
                        fontSize={"20px"}
                      >
                        ?
                      </Circle>
                      <p>행성은 당일에 만들수 있어요</p>
                    </CircleBox>
                  ) : (
                    <StyImg
                      src={require(`../static/images/planets/planet${planet.planetType}${planet.planetColor}${planet.planetLevel}.png`)}
                      planetSize={planet.planetSize}
                    />
                  )}
                  {/* <p>
                    카테고리를 만들고 <br />
                    투투리스트를 작성해보세요.
                  </p> */}
                </StyStareBox>
              ) : planet.planetType === 0 ? (
                <CircleBox>
                  <Circle
                    planetType={planet.planetType}
                    planetLevel={planet.planetLevel}
                    fontSize={"20px"}
                  >
                    ?
                  </Circle>
                  <p>행성은 당일에 만들수 있어요</p>
                </CircleBox>
              ) : (
                <CircleBox>
                  {(planet.length !== 0 ||
                    planet.planetType !== 0 ||
                    planet.planetColor !== null ||
                    planet.planetSize !== null ||
                    planet.planetLevel !== null) && (
                    <StyImg
                      src={require(`../static/images/planets/planet${planet.planetType}${planet.planetColor}${planet.planetLevel}.png`)}
                      planetSize={planet?.planetSize}
                    />
                  )}
                  {planet.planetLevel === 1 ? (
                    <p>{`다음 단계까지 ${
                      5 - planet.achievementCnt
                    }개 남았어요.`}</p>
                  ) : planet.planetLevel === 2 ? (
                    <p>{`다음 단계까지 ${
                      10 - planet.achievementCnt
                    }개 남았어요.`}</p>
                  ) : (
                    <p>마지막 단계를 달성했어요</p>
                  )}
                </CircleBox>
              )}
            </StyCircleWrap>
          )}
        </StyContentBox>
        {categories.length === 0 ? (
          <Button
            _onClick={() => {
              navigate("/categorydetail/0");
            }}
            display="block"
            width="250px"
            height="52px"
            border="none"
            fontSize="18px"
            color="#fff"
            margin="0 auto"
            backgroundColor="#3185f3"
            borderRadius="8px"
          >
            카테고리 만들고 시작하기
          </Button>
        ) : (
          <Section>
            {categories.map((input, index) => {
              return (
                <TodoCon key={index}>
                  {parsedCurrDate < parsedToday ? (
                    <TodoBtn categoryColor={input.categoryColor} disabled>
                      {input.categoryName}
                    </TodoBtn>
                  ) : (
                    <TodoBtn
                      onClick={() => addTodo({ input, index })}
                      categoryColor={input.categoryColor}
                    >
                      {input.categoryName}
                      <FiPlus></FiPlus>
                    </TodoBtn>
                  )}
                  <TodoList
                    selectedDate={concatSelDate.current}
                    parsedCurrDate={parsedCurrDate}
                    parsedToday={parsedToday}
                    clickedTodo={clickedTodo}
                    onClickedSheet={onClickedSheet}
                    categId={input.categoryId}
                    todos={input.todos}
                    categIndex={index}
                  ></TodoList>
                </TodoCon>
              );
            })}
          </Section>
        )}
        <CustomSheet
          isOpen={openbtmSheet}
          onClose={() => setOpenBtmSheet(false)}
        >
          <CustomSheet.Container>
            <CustomSheet.Content disableDrag={true}>
              <ContentHeader>
                <EditTitleWrap>
                  <EditTitle>{clickedTodo.todoInfo.title}</EditTitle>
                  {parsedCurrDate < parsedToday ? null : (
                    <button
                      onClick={() => {
                        clickEditTodo();
                      }}
                    >
                      <img src={edit_icon} alt="수정 아이콘 이미지" />
                    </button>
                  )}
                </EditTitleWrap>
                <EditSubmit onClick={() => setOpenBtmSheet(false)}>
                  확인
                </EditSubmit>
              </ContentHeader>
              <textarea
                name="memo"
                value={clickedMemo}
                onChange={onChangeMemoHandler}
                onBlur={() => onCheckMemoOutFocus()}
                disabled={parsedCurrDate < parsedToday ? true : false}
              ></textarea>
              {parsedCurrDate < parsedToday ? null : (
                <ContentFooter>
                  <button
                    onClick={() => {
                      clickDeleteTodo();
                    }}
                  >
                    <img src={delete_icon} alt="삭제 아이콘" />
                    삭제
                  </button>
                  {/* <button
                    onClick={() => {
                      onClickChgDateModal();
                    }}
                  >
                    <img src={calendar_icon_gray} alt="날짜변경 아이콘" />
                    날짜변경하기
                  </button> */}
                </ContentFooter>
              )}
            </CustomSheet.Content>
          </CustomSheet.Container>
          <Sheet.Backdrop />
        </CustomSheet>
      </StyContentWrap>
      <BtmFitNavi name="dlytodo" />
      {/* <ChgDateModal
        onClose={() => setShowModal(false)}
        showModal={showModal}
        setShowModal={setShowModal}
        dateValue={dateValue}
        clickedTodo={clickedTodo}
        clickedCategIndex={clickedCategIndex}
      ></ChgDateModal> */}
    </StyDlyTodoCon>
  );
};

export default DlyTodo;

const StyDlyTodoCon = styled.div`
  padding-bottom: 150px;
`;

const StyHeader = styled.div`
  display: flex;
  align-items: center;
  justify-content: ${({ showCalendar }) =>
    showCalendar ? "flex-end" : "space-between"};
  position: absolute;
  top: 0;
  width: 100%;
`;

const StyContentWrap = styled.div`
  padding: 0 16px;
`;

const StyContentBox = styled.div`
  position: relative;
  height: 330px;
  padding-top: 24px;

  @media (max-width: 375px) {
    height: 88vw;
  }
`;

const CalendarWrap = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100%;

  .react-calendar {
    background: transparent;
    border: none;

    &__navigation {
      display: block;
      position: absolute;
      top: 0;
      left: 0;
      height: auto;
      margin-bottom: 0;

      &__label {
        min-width: auto;
        line-height: 1;
        font-size: 18px;
        color: #fff;
        margin: 0 10px;
        background: transparent !important;

        &__labelText {
          line-height: 1;
        }
      }

      &__prev-button,
      &__next-button {
        position: relative;
        min-width: 24px;
        height: 24px;
        color: transparent;
        background: transparent !important;

        &::before {
          content: "";
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          background-repeat: no-repeat;
          background-position: center;
        }
      }
      &__prev-button::before {
        background-image: url(${prev_icon});
      }
      &__next-button::before {
        background-image: url(${next_icon});
      }

      &__prev2-button,
      &__next2-button {
        display: none;
      }
    }
    abbr {
      font-weight: 400;
      color: #fff;
      text-decoration: none;
    }
    .react-calendar__month-view {
      &__weekdays,
      &__days {
        justify-content: space-between;
        gap: 12px 20px;
      }

      &__weekdays {
        margin-bottom: 10px;
        abbr {
          font-weight: 600;
        }
      }

      &__weekdays__weekday,
      &__days__day {
        display: flex;
        align-items: center;
        justify-content: center;
        max-width: 28px;
        height: 28px;
        padding: 0;
        border-radius: 100px;
      }
      &__weekdays__weekday {
        font-weight: 600;
        font-size: 14px;
      }
      &__days__day {
        position: relative;
        font-weight: 400;
        font-size: 12px;
      }

      @media (max-width: 375px) {
        &__weekdays,
        &__days {
          justify-content: space-between;
          gap: 3.2vw 5.3333vw;
        }
        &__weekdays__weekday,
        &__days__day {
          max-width: 7.4667vw;
          height: 7.4667vw;
        }
      }
    }
    .react-calendar__tile:enabled:hover,
    .react-calendar__tile:enabled:focus {
      background: transparent;
    }
    .react-calendar__tile--now {
      background: transparent !important;
      border: 1px solid #1671fa;
      abbr {
        font-weight: 600;
      }
    }
    .react-calendar__tile--active {
      background: #3185f3 !important;
      abbr {
        font-weight: 600;
      }
    }
    .react-calendar__tile {
      position: relative;

      &.remain::before {
        content: "";
        position: absolute;
        bottom: 0;
        left: 50%;
        transform: translateX(-50%);
        width: 4px;
        height: 4px;
        background: #3185f3 !important;
        border-radius: 100px;
      }
    }
  }
`;

const StyCircleWrap = styled.div`
  height: 100%;
  text-align: center;
  color: #b1bdcf;
  font-size: 0.75em;

  p {
    margin-top: 16px;
    margin-bottom: 0;
  }
`;

const TodoStatus = styled.div`
  display: flex;
  align-items: center;
  gap: 12px;

  div {
    display: flex;
    align-items: center;
  }

  span {
    font-weight: 400;
    font-size: 16px;
    color: #fff;
    margin-left: 5px;
  }
`;

const CircleBox = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100%;
`;

const StyImg = styled.img`
  height: ${(props) => props.planetSize * 1.5}px;
  margin-top: 10px;
`;

const StyStareBox = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  font-weight: ${(props) => props.theme.fontWeight.Bold};
  height: 100%;

  img {
    height: 44px;
  }
`;

const Section = styled.div`
  position: relative;
`;

const TodoCon = styled.div`
  &:not(:first-of-type) {
    margin-top: 30px;
  }
`;

const TodoBtn = styled.button`
  display: flex;
  align-items: center;
  font-weight: 600;
  font-size: 18px;
  color: ${(props) => props.categoryColor};
  text-align: left;
  background: transparent;
  border: none;

  svg {
    color: #fff;
    margin-left: 5px;
  }
`;

const CustomSheet = styled(Sheet)`
  .react-modal-sheet-container {
    display: fixed;
    bottom: 0;
    height: auto !important;
    right: 0;
    margin: 0 auto;
    max-width: 375px;
    width: 100%;
    background-color: #516d93 !important;
    padding: 24px 0 40px;
    border-radius: 16px 16px 0 0 !important;
  }

  .react-modal-sheet-content {
    padding: 0 16px;
    background: transparent;

    textarea {
      width: 100%;
      height: 90px;
      resize: none;
      font-weight: 400;
      font-size: 14px;
      color: #fff;
      margin: 18px 0 25px;
      padding: 14px 16px;
      background: rgba(170, 188, 224, 0.2);
      border: none;
    }
  }
`;

const ContentHeader = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  color: #fff;

  button {
    color: #fff;
    background: transparent;
    border: none;
  }
`;

const EditTitleWrap = styled.div`
  display: flex;
  align-items: center;

  button {
    margin-left: 8px;
  }
`;

const EditTitle = styled.span`
  font-weight: 600;
`;

const EditSubmit = styled.button`
  font-weight: 600;
`;

const ContentFooter = styled.div`
  button {
    display: block;
    font-weight: 400;
    font-size: 14px;
    color: #fff;
    background: transparent;
    border: none;

    &:not(:first-child) {
      margin-top: 12px;
    }

    img {
      margin-right: 8px;
    }
  }
`;
