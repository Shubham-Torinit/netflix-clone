import { Action } from 'redux';

export interface ISearchMovie extends Action {
  searchKey: string;
  type: string;
}