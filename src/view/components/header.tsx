import React, { useState } from 'react';
import {HeaderStyle} from '../../App.style';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSearch, faTimes, faBell } from '@fortawesome/free-solid-svg-icons'
import {useDispatch} from "react-redux";
import { GetSearchKey } from '../../store/actions/searchActions';

function Header() {
  const dispatch = useDispatch();
  const [showTextfield, toggleTextField] = useState(false);
  const [textFieldValue, setValues] = useState("");

  function closeTextField() {
    if (textFieldValue === "") {
      toggleTextField(false)
    }
  }
  function clearTextField() {
    dispatch(GetSearchKey(""))
    setValues("")
  }

  return (
    <HeaderStyle>
      <div>
        <img src="https://assets.brand.microsites.netflix.io/assets/493f5bba-81a4-11e9-bf79-066b49664af6_cm_1440w.png?v=8" alt="" />
        <ul>
          <li>Home</li>
          <li>News</li>
          <li>Contact</li>
          <li>About</li>
        </ul>
      </div>
        <ul>
          <li>
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
          <li>Kids</li>
          <li>DVD</li>
          <li>
            <FontAwesomeIcon icon={faBell}/>
          </li>
        </ul>
    </HeaderStyle>
  );
}

export default Header;
