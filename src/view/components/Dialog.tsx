import React from 'react'
import ReactDom from 'react-dom'
import { SModal, SOverlay } from './Components.style';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTimes } from '@fortawesome/free-solid-svg-icons'

interface IModal {
  open: boolean;
  children?: JSX.Element;
  onClose(): any;
}

const Modal: React.FC<IModal> = ({ open, children, onClose }) => {
  if (!open) return null;

  (function (){
    document.querySelector("body")!.style.overflow = "hidden"
  }())
  
  const myElement: HTMLElement | null = document.getElementById('portal')!;
  return ReactDom.createPortal(
    <>
      <SOverlay>
        <SModal>
          <button className="close_button" onClick={onClose}>
            <FontAwesomeIcon icon={faTimes}/>
          </button>
          {children}
        </SModal>
      </SOverlay>
    </>,
    myElement
  )
}

export default Modal;