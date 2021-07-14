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
import CTvShows from '../TvShows/TvShows';
function Body() {
  const searchKeyState = useSelector((state: RootStore) => state.searchKey);
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
        <CTvShows />
      </div>
    </SBody>
  );
}

export default Body;
