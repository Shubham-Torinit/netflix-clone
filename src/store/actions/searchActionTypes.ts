export const ADD_SEARCH_KEY = "ADD_SEARCH_KEY";
export const RESET_SEARCH_KEY = "RESET_SEARCH_KEY";
export type SearchType = {
  searchKey: string
}

export interface SearchMovie {
  type: typeof ADD_SEARCH_KEY,
  payload: SearchType
}

export type SearchDispatchTypes = SearchMovie;