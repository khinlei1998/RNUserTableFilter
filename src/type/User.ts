
export type Users = {
  user_lists: UserData[] | undefined;
};

type UserData = {
  bananas: number;
  lastDayPlayed: string;
  longestStreak: number;
  name: string;
  stars: number;
  subscribed: boolean;
  uid: string;
  isSearched: boolean;
};

export type StateProps = {
  user_lists: UserData[] | undefined;
};