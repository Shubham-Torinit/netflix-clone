import styled from "styled-components";


export const SBody = styled.div`
  width: 100%;
  margin-top: 68px;
`

export const SMoviePoster = styled.img`
    object-fit: contain;
    width: 100%;
    height: auto;
    border-radius: 5px;
`

export const SSwiper = styled.div`
  .swiper-wrapper {
      padding: 20px 0 0;
  }
  .swiper-slide {
    transition: 250ms all;

    &:hover {
        transform: scale(1.05);
        z-index: 1;
    }

    &:first-child:hover{
        margin: 0 -40px;
    }

    &:last-child:hover{
        margin:0 -10px;
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