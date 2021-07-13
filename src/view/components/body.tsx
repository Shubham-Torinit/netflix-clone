import React from 'react';
import Popular from '../Popular/Popular';
import {SBody} from './Components.style';
import Corousel from '../Carousel/Corousel';
import CUpcomingMovies from '../UpcomingMovies/UpcomingMovies';
import TopRated from '../TopRated/TopRated'
import CNowPlaying from '../NowPlaying/NowPlaying';
import CSearchView from '../SearchView/SearchView';
import { RootStore } from '../../store/store';
import {useSelector} from "react-redux";

function Body() {
  const searchKeyState = useSelector((state: RootStore) => state.searchKey);
  console.log("searchKeyState", searchKeyState)
  return (
    <SBody>
       {
         searchKeyState.key.searchKey ? <CSearchView searchString={searchKeyState.key.searchKey} /> : <></>
       }
      <div style={{
        display: searchKeyState.key.searchKey ? "none" : "inherit"
      }}>
        <Corousel/>
        <Popular/>
        <CNowPlaying />
        <CUpcomingMovies />
        <TopRated />
      </div>
    </SBody>
  );
}

export default Body;
