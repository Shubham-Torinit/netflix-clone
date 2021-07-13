import {Dispatch} from "redux";
import { SearchDispatchTypes, ADD_SEARCH_KEY} from "./searchActionTypes";

export const GetSearchKey = (searchKey: string) => async (dispatch: Dispatch<SearchDispatchTypes>) => {
  dispatch({
    type: ADD_SEARCH_KEY,
    payload: {
      searchKey: searchKey
    }
  })
};