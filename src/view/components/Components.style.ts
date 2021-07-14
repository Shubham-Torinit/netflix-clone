import styled from "styled-components";


export const SBody = styled.div`
  width: 100%;
`

export const SMoviePoster = styled.img`
    object-fit: contain;
    width: 100%;
    height: auto;
    border-radius: 5px;
`

export const SSwiper = styled.div`
  .swiper-wrapper {
      padding: 20px 0 20px;
  }
  .swiper-button-prev, .swiper-button-next {
    color: #fff !important;
  }
  .swiper-slide {
    transition: 250ms all;

    &:hover {
        transform: scale(1.2);
        z-index: 1;
    }

    &:first-child:hover{
        margin: 0 -100px;
    }

    &:last-child:hover{
        margin:0 -10px;
    }
  }
  @media (max-width: 400px) {
    .swiper-button-next:after, .swiper-button-prev:after {
      font-size: 20px !important;
    }
  }
`
export const SModal = styled.div`
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background-color: #FFF;
  z-index: 1000;
  height: auto;
  width: 100%;
  .close_button {
    position: absolute;
    top: 20px;
    z-index: 1001;
    background: transparent;
    color: #fff;
    outline: none;
    border: none;
    cursor: pointer;
    right: 20px;
    font-size: large;
  }
  height: 80vh;
  -webkit-touch-callout: none; /* iOS Safari */
    -webkit-user-select: none; /* Safari */
     -khtml-user-select: none; /* Konqueror HTML */
       -moz-user-select: none; /* Old versions of Firefox */
        -ms-user-select: none; /* Internet Explorer/Edge */
            user-select: none;
`;

export const SOverlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, .7);
  z-index: 1000;
  width: 100vw;
  height: 100vh;
  overflow: hidden;
`

export const SMovieDetail = styled.div`
  background-color: rgb(20, 20, 20) !important;
  width: 100%;
  position: relative;
  background-size: cover !important;
  background-repeat: no-repeat !important;
  background-position: center !important;
  height: 100%;
  > div {
    position: absolute;
    top: 20px;
    left: 20px;
    color: #fff;
    max-width: 700px;
    > p {
      color: #9e9e9e
    }
    > button {
      min-width: 100px;
      font-weight: bold;
      color: #fff;
      padding: 10px;
      border: none;
      border-radius: 2px;
      outline: none;
      margin-right: 10px;
      > svg {
        padding-right: 5px;
        margin-top: 1px;
      }
    }
    .play_button {
      background: red;
    }
    .my_list {
      background: transparent;
      border: 1px solid #f1f1f1;
    }
  }
`

export const SDropDownMenu = styled.div`
  position: relative;
  .menu_card {
    background-color: rgb(20, 20, 20);
    min-width: 150px;
    margin-left: -100px;
    top: 20px;
    position: absolute;
    box-shadow: 0px 8px 16px 0px rgba(0,0,0,0.2);
    z-index: 900;
  }
`
export const SMenuItems = styled.div`
  > ul {
    font-size: 12px;
    list-style-type: none;
    margin: 0;
    padding: 0;
    > li {  
      list-style-type: none;
      padding: 5px 20px;
      text-align: left;
    }
    li:hover {
      font-weight: bold;
      color: gray;
    }
    .divider {
      border-bottom: solid 1px #f4f4f4;
      padding: 0;
    }
  }

`
export const SMenuParent = styled.div`
  display: flex;
  padding: 0;
  font-size: 12px;
  align-items: center;
  > img {
    width: 30px;
    margin-right: 5px;
  }
`