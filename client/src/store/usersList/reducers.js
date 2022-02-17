import ACTypes from "../types";

const initialState = {
  userList: [],
  // currentNoteId: '',
};

export const userList = (state = initialState, action) => {
  switch (action.type) {
    case ACTypes.SHOW_USERS_LIST:
      return { ...state, userList: action.payload.userList };

    default:
      return state;
  }
};
