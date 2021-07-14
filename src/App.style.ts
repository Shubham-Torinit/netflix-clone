import styled from 'styled-components';

export const LayoutStyle = styled.div`
  min-height: 100vh;
  background-color: #141414;
  min-width: 100%;
  font-family: 'Poppins', sans-serif;
`

export const HeaderStyle = styled.div`
  position: fixed;
  top: 0;
  height: 68px;
  width: 92%;
  background: transparent;
  color: #fff;
  .navbar-active {
    background-color: rgb(20, 20, 20);
  }
  .navbar-dropdown {
    display: none;
    margin-left: 10px;
  }
  padding: 0 4%;
  display: flexbox;
  justify-content: space-between;
  font-size: 1.2rem;
  align-items: center;
  z-index: 100;
  overflow: visible;
  @media (max-width: 864px) {
    .navbar-items {
      display: none;
    }
    .navbar-dropdown {
      display: inherit;
    }
    > div > ul {
      display: none !important;
    }
    > div > img {
      max-width: 100px;
    }
  }

  > ul, > div > ul {
    position: relative;
    display: flex;
    font-size: 14px;
    cursor: pointer;
    margin: 0;
    list-style-type: none;
    padding: 0;
    @media (max-width: 864px) {
      .text-input {
        position: absolute;
        left: -150px;
        z-index: 10;
      }
      .kids_button {
        display: none;
      }
    }
      > li {
        list-style-type: none;
        padding: 10px;
        height: 44px;
        display: flex;
        text-align: center;
        align-items: center;
        > div {
          position: relative;
          input {
            border: none;
            outline: 1px solid #f1f1f1;
            background: rgb(20, 20, 20);
            padding: 10px 30px;
            color: #fff;
            z-index: 100;
          }
          .search_icon {
            position: absolute;
            left: 10px;
            top: 10px;
          }
          .close_icon {
            position: absolute;
            right: 10px;
            top: 10px;
          }
        }
      }
      > li:hover {
        color: lightgray;
      }
  }
  > div {
    display: flex;
    align-items: center;
    width: auto;
   > img {
      height: auto;
      width: 100px;
    }
  }
`

export const SCorousel = styled.div`
  padding-top: 36.11%;
  min-height: 200px;
  width: 100%;
  position: relative;
  background-size: cover !important;
  -webkit-touch-callout: none; /* iOS Safari */
    -webkit-user-select: none; /* Safari */
     -khtml-user-select: none; /* Konqueror HTML */
       -moz-user-select: none; /* Old versions of Firefox */
        -ms-user-select: none; /* Internet Explorer/Edge */
            user-select: none;
  > div {
    position: absolute;
    top: 45%;
    max-width: 700px;
    left: 10%;
    .overview {
      color: #fff;
    }
    > h2 {
      font-size: xxx-large;
      color: white;
      margin: 0;
    }
    > div {
      display: flex;
      > button {
        min-width: 100px;
        font-weight: bold;
        padding: 10px;
        border: none;
        border-radius: 2px;
        outline: none;
        margin-right: 10px;
        cursor: pointer;
        > svg {
          padding-right: 5px;
          margin-top: 1px;
        }
      }
      .play_button {
        color: #000;
        background: #fff;
      }
      .my_list {
        color: #fff;
        background: rgba(109, 109, 110, 0.7);
        border: 1px solid #f1f1f1;
      }
    }
    @media (max-width: 860px) {
      top: 45%;
      > h2 {
        font-size: x-large;
      }
      > div > button {
        min-width: 70px;
        font-size: 10px;
      }
      .overview {
        display: none;
      }
    }
    @media (min-width: 860px) and (max-width: 1264px) {
      top: 25%;
      > h2 {
        font-size: xx-large;
      }
      > div > button {
        min-width: 70px;
        font-size: 10px;
      }
    }
  }
`
export const MovieRowWrapper = styled.div`
  padding: 20px 4% 0;
  display: block;
  color: #fff;
  > h2 {
    margin: 0px;
  }
  @media (max-width: 864px) {
    font-size: 12px;
  }
`

export const SSearchWrapper = styled.div`
  width: 92%;
  padding: 0px 4%;
  padding-top: 78px;
  display: grid;
  grid-gap: 10px;
  min-height: calc(100vh - 78px);
  @media (max-width: 400px) {
    grid-template-columns: 1fr;
  }

  @media (max-width: 864px) and (min-width: 400px) {
    grid-template-columns: 1fr 1fr;
  }
  @media (max-width: 1264px) and (min-width: 864px) {
    grid-template-columns: 1fr 1fr 1fr;
  }
  @media (min-width: 1264px) {
    grid-template-columns: 1fr 1fr 1fr 1fr;
  }
  .movie_card {
    transition: all 300ms ease;
    overflow: auto;
  }
  .movie_card:hover {
    transform: scale(1.5);
    padding: 0px;
  }
`
export const SMovieCard = styled.div`
  width: 100%;
  display: flex;
`
export const SFooter = styled.div`
  background: rgba(20, 20, 20);
  text-align: center;
  color: #fff;
  font-size: 14px;
  padding: 10px;
`