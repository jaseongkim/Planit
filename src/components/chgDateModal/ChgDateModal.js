// React
import React, { useState } from "react";
// Redux
import { useDispatch } from "react-redux";
import { updateTodoDateThunk } from "../../redux/modules/categTodoSlice.js";
// import {
//   getCategThunk
// } from "../redux/modules/categTodoSlice.js";
// Styled-Component
import styled from "styled-components";
// Calendar
import Calendar from "react-calendar";
import moment from "moment";
import "react-calendar/dist/Calendar.css";
// React-icons
import { prev_icon, next_icon } from "../../static/images/";

const ChgDateModal = ({
  showModal,
  onClose,
  dateValue,
  setShowModal,
  clickedTodo,
  clickedCategIndex,
}) => {
  // Redux : dispatch
  const dispatch = useDispatch();

  // console.log("Check dateValue", dateValue)

  // Hook : To get the selected DateTodo from the calendar
  const [dateTodo, setDateTodo] = useState(dateValue);

  // Var ; A Parsed date in format yyyy/mm/dd from the calendar
  const parsedFullDate = `${dateTodo.getFullYear()}-${String(
    dateTodo.getMonth() + 1
  ).padStart(2, "0")}-${String(dateTodo.getDate()).padStart(2, "0")}`;

  // if showModal is false, the modal will not be shown
  if (!showModal) {
    return null;
  }

  const onClickHandler = () => {
    // console.log("Check here in onCickHandler", dateTodo)
    // console.log("Check parsedfullDate", parsedFullDate)

    // console.log("Check ", clickedTodo)

    const updateTodoDateObj = {
      todoId: clickedTodo.todoInfo.todoId,
      todoIndex: clickedTodo.todoIndex,
      categIndex: clickedCategIndex,
      todoReq: {
        dueDate: parsedFullDate,
      },
    };

    console.log("Hey why is it you?");
    dispatch(updateTodoDateThunk(updateTodoDateObj));
    setShowModal(false);
  };

  return (
    <ModalCon>
      <ModalContent>
        {/* {console.log("Check here", dateTodo)} */}
        <ModalHeader>
          <h4 className="modal-title">Modal title</h4>
        </ModalHeader>
        <ModalBody>
          <Calendar
            onChange={setDateTodo}
            value={dateValue}
            formatDay={(locale, date) => moment(date).format("DD")}
          />
        </ModalBody>
        <ModalFooter>
          <button onClick={onClose} className="button">
            close
          </button>
          <button onClick={() => onClickHandler()} className="button">
            완료
          </button>
        </ModalFooter>
      </ModalContent>
    </ModalCon>
  );
};

export default ChgDateModal;

const ModalCon = styled.div`
  position: fixed;
  left: 0;
  top: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  align-items: center;
  justify-content: center;
`;

const ModalContent = styled.div`
  width: 70%;
  background-color: #fff;
`;

const ModalHeader = styled.div`
  padding: 10px;
`;

const ModalBody = styled.div`
  padding: 10px;
  border-top: 1px solid #eee;
  border-bottom: 1px solid #eee;
  font-size: 0.8rem;

  /* .react-calendar {
    background: transparent;
    border: none;

    &__navigation {
      display: block;
      position: absolute;
      top: 0;
      height: auto;
      margin-bottom: 0;

      &__label {
        min-width: auto;
        line-height: 1;
        font-size: 18px;
        color: #fff;
        margin: 0 10px;
        background: transparent !important;
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
    }
    .react-calendar__tile:enabled:hover,
    .react-calendar__tile:enabled:focus {
      background: transparent;
    }
    .react-calendar__tile--now {
      background: #8b98ac !important;
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
  } */
`;

const ModalFooter = styled.div`
  padding: 10px;
`;
