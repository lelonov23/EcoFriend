import ACTypes from "../types";

const initialState = {
  userData: null,
};

export const user = (state = initialState, action) => {
  switch (action.type) {
    case ACTypes.AUTH:
      return { ...state, userData: { id: action.payload.id } };

    default:
      return state;
  }
};
