// React
import React, { useState, useEffect } from 'react';
// React-Router-Dom
import { useNavigate } from "react-router-dom";

const StatsBtmNavi = ({ name }) => {

    // Navigate
    const navigate = useNavigate();

    // Hook : getting initial state from props & change state for the navigation
    // Depending on the state, the UX will be rendered differently
    const [activeTabs, setActiveTabs] = useState(name);

    useEffect(() => {
        switch (activeTabs) {
          case "statisticyear":
            navigate("/statisticyear");
            break;
          case "statisticweek":
            navigate("/statisticweek");
            break;
          case "statisticmonth":
            navigate("/statisticmonth");
            break;
          default:
            navigate("/statisticday");
            break;
        }
      }, [activeTabs, navigate]);

    return (
        <div>
            <button
              className="statisticday"
              date={activeTabs}
              onClick={() => setActiveTabs("statisticday")}
            >
                Day
            </button>
            <button
              className="statisticweek"
              date={activeTabs}
              onClick={() => setActiveTabs("statisticweek")}
            >
                Week
            </button>
            <button
              className="statisticmonth"
              date={activeTabs}
              onClick={() => setActiveTabs("statisticmonth")}
            >
                Month
            </button>
            <button
              className="statisticyear"
              date={activeTabs}
              onClick={() => setActiveTabs("statisticyear")}
            >
                Year   
            </button>
        </div>
    );
};

export default StatsBtmNavi;