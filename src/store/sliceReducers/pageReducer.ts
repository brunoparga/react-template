import { Action, PageState } from "../../types";

function pageReducer(page: PageState, { type, payload }: Action): PageState {
  switch (type) {
    case "SET_STATUS":
      return { ...page, status: payload as "frontPage" | "studying" | "done" };
    default:
      return page;
  }
}

export { pageReducer };
