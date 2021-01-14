type UserNotLoggedIn = { message: string };
type UserLoggedIn = { email?: string };
type UserState = UserNotLoggedIn & UserLoggedIn;
type PageState = {};

type AppState = {
  page: PageState;
  user: UserState;
};

export type { AppState, PageState, UserState };
