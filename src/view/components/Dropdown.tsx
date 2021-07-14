import React, { useState } from 'react'
import { SDropDownMenu } from './Components.style';

interface Props {
  parentElement: JSX.Element;
  dropdownItems: JSX.Element;
}

const CDropDown: React.FC<Props> = ({parentElement, dropdownItems}) => {
  const [openMenu, toggleMenu] = useState(false);
  return <SDropDownMenu>
    <div className="menu_button" onClick={() => toggleMenu(!openMenu)}>
      {parentElement}
    </div>
    {
      openMenu ? <div className="menu_card" onMouseLeave={() => toggleMenu(false)}>
      {dropdownItems}
      </div> : <></>
    }
  </SDropDownMenu>
}

export default CDropDown;