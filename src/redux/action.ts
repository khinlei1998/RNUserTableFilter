export const SEARCH_USER = 'SEARCH_USER';
import {User} from '../type/User';

export const searchUser = (query: User[]) => ({
  type: SEARCH_USER,
  payload: query,
});
