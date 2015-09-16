import { SET_INTL_STATE } from "./constants"

export function setIntlState(state) {
  return {
    type: SET_INTL_STATE,
    payload: state,
  }
}
