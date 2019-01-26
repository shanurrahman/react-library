import { USER_LOGGED_IN } from "../types";

const initialState = {

}

export default (state = initialState, action={}) => {
  switch (action.type) {

  case USER_LOGGED_IN:
    return { ...state, user: action.user }

  default:
    return state
  }
}

