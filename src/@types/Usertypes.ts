
export interface UserData {
    bananas: number;
    lastDayPlayed: string;
    longestStreak: number;
    name: string;
    stars: number;
    subscribed: boolean;
    uid: string;
    isSearched: boolean;
  }
  
  export interface UserState {
    user_list: UserData[];
  }
  
  export interface SearchUserAction {
    type: 'SEARCH_USER';
    payload: UserData[];
  }
  
  export type UserAction = SearchUserAction;
  