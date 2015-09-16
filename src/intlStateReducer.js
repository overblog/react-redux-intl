import { SET_INTL_STATE } from "./constants"

export default function intlStateReducer(state = {}, action) {
  return action.type === SET_INTL_STATE
    ? action.payload
    : state
}
