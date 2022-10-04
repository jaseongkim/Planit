// React
import React, { useState, useEffect, useRef, useContext } from "react";
// Styled-Component
import styled from "styled-components";
// React Component
import Header from "../components/Header";
// BottomModalSheet
// import Sheet from "react-modal-sheet";
import TodoBtmFitNavi from "../components/btmFitNaviBar/TodoBtmFitNavi.jsx";
import WeekMover from "../components/dateMover/WeekMover.jsx";
import WklyPlanetEdit from "../components/wkly/WklyPlanetEdit";
// React-icons
import { achieved_icon, like_icon_on } from "../static/images";
// Redux
import { useDispatch, useSelector } from "react-redux";
import {
  getWeekPlanetsThunk,
  updatePlanetThunk,
} from "../redux/modules/planetSlice";
// Element
import Circle from "../element/Circle.jsx";
// Context API
import { AppContext } from "../context"

const WklyTodo = () => {
  
  // Redux : dispatch
  const dispatch = useDispatch();

  const planetCntRef = useRef(0);

  // // Hook : A date that let user to choose different date from the WeekMover
  // const [dateValue, setDateValue] = useState(new Date());

  // Context API : To get the selected date && the parsedMondayOfWeekDate from the calendar
  const { dateValue, setDateValue, getMondayOfWeek } = useContext(AppContext);

  const [planet, setPlanet] = useState(null);
  const [isEditOpen, setEditOpen] = useState(false);

  // Redux : weeklyPlants useSelector
  const wkPlanets = useSelector((state) => state.planetSlice.planets);

  const onEditSheetOpen = (planet) => {
    setPlanet({
      dueDate: planet.dueDate,
      type: planet.planetType,
      color: planet.planetColor,
      size: planet.planetSize,
      level: planet.planetLevel,
    });
    setEditOpen(true);
  };

  const onEditSheetClose = (color, size, dueDate) => {
    const data = {
      dueDate: dueDate,
      planetSize: size,
      planetColor: color,
    };

    dispatch(updatePlanetThunk(data));

    setEditOpen(false);
  };

  //Var ; A parsed date in format yyyy/mm/dd for API
  const parsedMondayOfWeekDate = `${getMondayOfWeek(dateValue).getFullYear()}-${String(
    getMondayOfWeek(dateValue).getMonth() + 1
  ).padStart(2, "0")}-${String(getMondayOfWeek(dateValue).getDate()).padStart(
    2,
    "0"
  )}`;

  // UseEffect : Getting weekly planets with its week's date
  // when dateValue get updated, re-render WklyTodo after return
  useEffect(() => {
    dispatch(getWeekPlanetsThunk(parsedMondayOfWeekDate));

    // wkPlanets.planets.forEach((planet) => {
    //   if (planet.planetType !== null && planet.planetType !== 0)
    //     planetCntRef.current++;
    // });
  }, [parsedMondayOfWeekDate, dispatch]);

  return (
    <>
      <StyTodoCon isEditOpen={isEditOpen}>
        <Header></Header>
        <StyHeader>
          <WeekMover/>
          <TodoStatus>
            <div>
              <img src={achieved_icon} alt="achieved icon" />
              <span>{wkPlanets.weeklyTotalAchievement}</span>
            </div>
            {/* <div>
            <img src={like_icon_on} alt="like icon on" />
            <span>{wkPlanets.weeklyTotalLikes}</span>
          </div> */}
          </TodoStatus>
        </StyHeader>
        {planetCntRef.current !== 0 ? (
          <StyPlanetNullMsg>
            할 일을 완료하고 행성을 채워보세요.
          </StyPlanetNullMsg>
        ) : null}
        <StyCircleCon>
          {wkPlanets.planets?.map((planet, index) => {
            return (
              <StyCircleWrap key={index}>
                {planet.planetType === null ||
                planet.planetColor === null ||
                planet.planetLevel === null ||
                planet.planetType === 0 ? (
                  <Circle>{planet.dueDate.substring(8, 10)}</Circle>
                ) : (
                  <>
                    {planet.dueDate.substring(8, 10)}
                    <StyImg
                      onClick={() => onEditSheetOpen(planet)}
                      src={require(`../static/images/planets/planet${planet.planetType}${planet.planetColor}${planet.planetLevel}.png`)}
                      planetSize={planet.planetSize}
                    />
                  </>
                )}
              </StyCircleWrap>
            );
          })}
        </StyCircleCon>
        <TodoBtmFitNavi name="wklytodo" wkPlanets={wkPlanets}></TodoBtmFitNavi>
      </StyTodoCon>
      {planet === null ? null : (
        <WklyPlanetEdit
          isOpen={isEditOpen}
          disableDrag={false}
          planet={planet}
          onEditSheetClose={onEditSheetClose}
        />
      )}
    </>
  );
};

export default WklyTodo;

const StyTodoCon = styled.div`
  display: ${(props) => (props.isEditOpen ? "none" : "block")};
  /* display: ${(props) => (!props.isEditOpen ? "none" : "block")}; */
`;

const StyHeader = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 16px;
`;

const TodoStatus = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-end;
  gap: 12px;

  div {
    display: flex;
    align-items: center;
  }

  span {
    font-weight: 400;
    color: #fff;
    margin-left: 5px;
  }
`;

const StyPlanetNullMsg = styled.p`
  color: #fff;
  text-align: center;
  padding-top: 20px;
`;

const StyCircleCon = styled.div`
  position: absolute;
  top: 0;
  left: 50%;
  transform: translateX(-50%);
  width: 100%;
  max-width: 375px;
  /* height: 100vh; */
  min-height: 812px;
  z-index: -1;
`;

const StyCircleWrap = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  position: absolute;
  text-align: center;
  color: white;
  font-weight: ${(props) => props.theme.fontWeight.Bold};
  transform: translate(-50%, -50%);

  img {
    margin-top: 15px;
    transition: transform 0.3s ease-in-out;
    cursor: pointer;

    &:hover {
      transform: translateY(-3px);
    }
  }

  &:nth-child(1) {
    top: 200px;
    left: 70px;
  }
  &:nth-child(2) {
    top: 200px;
    left: 310px;
  }

  &:nth-child(3) {
    top: 320px;
    left: 200px;
  }
  &:nth-child(4) {
    top: 420px;
    left: 70px;
  }
  &:nth-child(5) {
    top: 430px;
    left: 310px;
  }
  &:nth-child(6) {
    top: 550px;
    left: 200px;
  }
  &:nth-child(7) {
    top: 640px;
    left: 70px;
  }

  @media (max-width: 375px) {
    &:nth-child(1) {
      left: 18.6667vw;
    }
    &:nth-child(2) {
      left: 82.6667vw;
    }
    &:nth-child(3) {
      left: 53.3333vw;
    }
    &:nth-child(4) {
      left: 18.6667vw;
    }
    &:nth-child(5) {
      left: 82.6667vw;
    }
    &:nth-child(6) {
      left: 53.3333vw;
    }
    &:nth-child(7) {
      left: 18.6667vw;
    }
  }
`;

const StyImg = styled.img`
  height: ${(props) => props.planetSize}px;
`;
