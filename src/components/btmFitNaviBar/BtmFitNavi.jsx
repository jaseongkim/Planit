import React, { useState, useEffect} from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";

import { RiHomeSmile2Line, RiHomeSmile2Fill, RiUser5Fill, RiSearchEyeFill } from 'react-icons/ri'
import { BiSearchAlt } from 'react-icons/bi'
import { AiOutlineHeart, AiFillHeart } from 'react-icons/ai'
import { RiUser5Line } from 'react-icons/ri'

const BtmFitNavi = (props) => {
    const navigate = useNavigate();
    const [activeTabs, setActiveTabs] = useState(props.name)
    useEffect(() => {
        switch (activeTabs) {
            case 'follow':
                navigate('/follow')
                break;
            case 'search':
                navigate('/search')
                break;
            case 'favourites':
                navigate('/favourites')
                break;
            case 'account':
                navigate('/account')
                break;
            default:
                navigate('/dlytodo')
                break;
        }
    }, [activeTabs, navigate])

    return (
        <StyBtmNavi>
            <StyBtmTab className="week">
                <div
                    onClick={() => setActiveTabs('search')}
                >
                    Week
                </div>
              </StyBtmTab>
            <StyBtmTab>
                <div
                    onClick={() => setActiveTabs('follow')}
                >
                    Day
                </div>
              </StyBtmTab>
            </StyBtmNavi>
    )
}

export default BtmFitNavi

const StyBtmNaviBody = styled.div`
  padding: 0;
  
  box-sizing: border-box;
  border-radius: 13px;
`

const StyBtmNavi = styled(StyBtmNaviBody)`
  width: 90%;
  height: 50px;
  display: flex;
  align-items: center;
  position: fixed;
  bottom: 1.5%;
  border-top: 1px solid rgb(230, 230, 230);
  background: rgba(56, 106, 202, 0.3);
  margin: auto;
  left: 0;
  right: 0;
`

const StyBtmTab = styled(StyBtmNaviBody)`
  width: 100%;
  height: 92%;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 12px;

  &.week{
    background: white;
    width: 100%;
    margin: 0.6%;
  }

`