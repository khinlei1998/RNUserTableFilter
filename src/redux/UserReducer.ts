import {SEARCH_USER} from './action';
// import { UserState, } from '../type/User';
import { UserAction,UserState } from '../@types/Usertypes';
const initialState: UserState = {
  user_list: [],
};

export default function userreducer(state = initialState, action: UserAction):UserState {
  switch (action.type) {
    case SEARCH_USER:
      return {
        ...state,
        user_list: action.payload,
      };
    default:
      return state;
  }
}
