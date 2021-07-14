import React, { useState, useEffect } from 'react';
import { HeaderStyle } from '../../App.style';
import { SMenuItems, SMenuParent } from './Components.style';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSearch, faTimes, faBell, faChevronDown } from '@fortawesome/free-solid-svg-icons'
import {useDispatch} from "react-redux";
import { GetSearchKey } from '../../store/actions/searchActions';
import CDropDown from './Dropdown';
function Header() {
  const dispatch = useDispatch();
  const [showTextfield, toggleTextField] = useState(false);
  const [textFieldValue, setValues] = useState("");
  const [didWindowScroll, updateWindowScroll] = useState(false);

  useEffect(() => { 
    window.onscroll = () => {
      if (window.scrollY >= 100) {
        updateWindowScroll(true)
      } else {
        updateWindowScroll(false)
      }
    }
  }, [])
  function closeTextField() {
    if (textFieldValue === "") {
      toggleTextField(false)
    }
  }
  function clearTextField() {
    dispatch(GetSearchKey(""))
    setValues("")
    toggleTextField(false)
  }

  const navbarButtonInMobileView = <SMenuParent>
    Browse <FontAwesomeIcon icon={faChevronDown} />
  </SMenuParent>
  const navbarDropdownItems = <SMenuItems>
  <ul>
    <li>Home</li>
    <li>News</li>
    <li>Contact</li>
    <li>About</li>
  </ul>
</SMenuItems>
  const parentElement = <SMenuParent>
    <img src="https://sites.psu.edu/siowfa16/files/2016/10/YeDYzSR-10apkm4.png" alt="" />
    <FontAwesomeIcon icon={faChevronDown} />
  </SMenuParent>

  const childElement = <SMenuItems>
    <ul>
      <li>Shubham Vyas</li>
      <li>Manage Profiles</li>
      <li className="divider"></li>
      <li>Account</li>
      <li>Help Center</li>
      <li>Sign Out Of Netflix</li>
    </ul>
  </SMenuItems>
  
  return (
    <HeaderStyle style={didWindowScroll ? {
      background: "rgba(20, 20, 20)"
    } : {}}>
      <div>
        <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Netflix_2015_logo.svg/799px-Netflix_2015_logo.svg.png" alt="" />
        <ul className="navbar-items">
          <li>Home</li>
          <li>News</li>
          <li>Contact</li>
          <li>About</li>
        </ul>
        <div className="navbar-dropdown">
          <CDropDown parentElement={navbarButtonInMobileView} dropdownItems={navbarDropdownItems} />
        </div>
      </div>
        <ul>
          <li className={ showTextfield ? "text-input" : ""}>
            {
              showTextfield ? <div>
                <input type="text" value={textFieldValue} onInput={(event) => {
                  setValues(event.currentTarget.value || "")
                  dispatch(GetSearchKey(event.currentTarget.value || ""))
                  }} onBlur={closeTextField} />
                <FontAwesomeIcon icon={faSearch} className="search_icon"/>
                <FontAwesomeIcon className="close_icon" icon={faTimes} onClick={clearTextField}/>
              </div> : <FontAwesomeIcon icon={faSearch} onClick={() => toggleTextField(true)} />
            }
          </li>
          <li className="kids_button">Kids</li>
          <li>
            <FontAwesomeIcon icon={faBell}/>
          </li>
          <li>
            <CDropDown parentElement={parentElement} dropdownItems={childElement} />
          </li>
        </ul>
    </HeaderStyle>
  );
}

export default Header;
