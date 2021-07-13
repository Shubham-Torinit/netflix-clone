import {
  ADD_SEARCH_KEY,
  SearchDispatchTypes,
  SearchType
} from "../actions/searchActionTypes";

interface DefaultStateI {
  key: SearchType
}

const defaultState: DefaultStateI = {
  key: {
    searchKey: ""
  }
};

const searchReducer = (state: DefaultStateI = defaultState, action: SearchDispatchTypes) : DefaultStateI => {
  switch (action.type) {
    case ADD_SEARCH_KEY:
      return {
        key: action.payload
      }
    default:
      return state
  }
};


export default searchReducer