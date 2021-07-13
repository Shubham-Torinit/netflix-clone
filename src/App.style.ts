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
  color: #fff;
  background-color: rgb(20, 20, 20);
  padding: 0 4%;
  display: flexbox;
  justify-content: space-between;
  font-size: 1.2rem;
  align-items: center;
  z-index: 100;
  overflow: visible;
  > div > ul {
    @media (max-width: 864px) {
      display: none !important;
    }
  }

  > ul, > div > ul {
    display: flex;
    font-size: 14px;
    cursor: pointer;
    margin: 0;
    list-style-type: none;
    padding: 0;
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
            background: transparent;
            padding: 10px 30px;
            color: #fff;
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
      height: 68px;
      width: 150px;
    }
  }
`

export const SCorousel = styled.div`
  padding-top: 36.11%;
  width: 100%;
  position: relative;
  background-size: cover;
`
export const MovieRowWrapper = styled.div`
  padding: 20px 4% 0;
  display: block;
  color: #fff;
  > h2 {
    margin: 0px;
  }
`

export const SSearchWrapper = styled.div`
  width: 92%;
  padding: 0px 4%;
  display: grid;
  grid-gap: 10px;

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
    transform: scale(1.1);
    padding: 0px;
  }
`
export const SMovieCard = styled.div`
  width: 100%;
  display: flex;
`