import { createStore, applyMiddleware, combineReducers } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import thunk from "redux-thunk";

// import { user } from "./user/reducers";
import { auth } from "./auth/reducers";
import { entry } from "./entry/reducers";
import { userList } from "./usersList/reducers"
import { map } from "./map/reducers";

const reducers = combineReducers({
  // user,
  auth,
  entry,
  userList,
  map,
});

const composeEnhancer =
  process.env.NODE_ENV === "production"
    ? applyMiddleware(thunk)
    : composeWithDevTools(applyMiddleware(thunk));

export const store = createStore(reducers, composeEnhancer);
