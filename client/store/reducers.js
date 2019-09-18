
import { ACTIONS } from './../actions/types';

const initialState = {
  inputText:'',
  reddedit:[]
}
export default function reduce(state = initialState, action = {}) {
  switch (action.type) {
    case ACTIONS.CHANGE_INPUT:
      return {...state,  inputText: action.value}
    default:
      return state;
  }
}