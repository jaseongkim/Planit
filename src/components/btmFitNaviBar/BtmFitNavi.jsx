// React
import React, { useState, useEffect} from "react";
// React-Router-Dom
import { useNavigate } from "react-router-dom";
// Styled-Component
import styled, { css } from "styled-components";

const BtmFitNavi = ({name,wkPlanets}) => {

    // Navigate
    const navigate = useNavigate();

    // Hook : getting initial state from props & change state for the navigation
    // Depending on the state, the UX will be rendered differently
    const [activeTabs, setActiveTabs] = useState(name)

    // UseEffect : when activeTabs get changed, useEffect will be triggered again
    useEffect(() => {
        switch (activeTabs) {
            case 'WklyTodo':
                navigate('/WklyTodo')
                break;
            default:
                navigate('/dlytodo')
                break;
        }
    }, [activeTabs])

    // When the day navi btn get clicked, find current date's planet
    // If the planet's planetType is 0, navigate to creatplanet page
    // Else navigate to dlytodo page
    const onClickDay = () =>{
        console.log("Checking wkPlanets", wkPlanets)
    const currDate = new Date()
    const parsedCurrDate = `${currDate.getFullYear()}-${String(currDate.getMonth()+1).padStart(2,'0')}-${String(currDate.getDate()).padStart(2,'0')}`
    const currPlanet = wkPlanets?.planets.find(planet => planet.dueDate === parsedCurrDate)

    if(currPlanet?.planetType === null){
        navigate("/createplanet")
    }
    else{
        setActiveTabs('dlytodo')
    }}

    return (
      <StyBtmNavi>
        <StyBtmTabCont>
          <StyBtmTabWrap>
            <StyBtmTab 
              className="week"
              date={activeTabs}
              onClick={() => setActiveTabs('WklyTodo')}>
              Week
            </StyBtmTab>
            <StyBtmTab
              className="day" 
              date={activeTabs}           
              onClick={() => onClickDay()}>
              Day
            </StyBtmTab>
          </StyBtmTabWrap>
        </StyBtmTabCont>
      </StyBtmNavi>
    )
}

export default BtmFitNavi

const StyBtmNavi = styled.div`
  position: fixed;
  left: 0;
  bottom: 0;
  width: 100%;
  background: linear-gradient(0deg, #DBEAFF 0.01%, #8DBEFF 63.02%, rgba(119, 178, 255, 0) 98.77%);
`
const StyBtmTabCont = styled.div`
  width: 100%;
  max-width: 375px;
  margin: 0 auto;
  padding: 50px 16px 32px;
`;

const StyBtmTabWrap = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  padding: 2.5px;
  background: #386ACA4D;
  border-radius: 10px;
`;

const StyBtmTab = styled.div`
${(props) => {
    switch (props.date) {
      case "dlytodo":
        return css`
          display: flex;
          align-items: center;
          justify-content: center;
          width: 50%;
          height: 35px;
          border-radius: 8px;
              
          &.day{
            background: white;
            box-shadow: 0px 3px 8px rgba(0, 0, 0, 0.12), 0px 3px 1px rgba(0, 0, 0, 0.04);
          }
        `;
      default:
        return css`
          width: 50%;
          height: 35px;
          display: flex;
          justify-content: center;
          align-items: center;
          border-radius: 8px;
              
          &.week{
            background: white;
            box-shadow: 0px 3px 8px rgba(0, 0, 0, 0.12), 0px 3px 1px rgba(0, 0, 0, 0.04);
          }
        `;
    }
  }}
`;

