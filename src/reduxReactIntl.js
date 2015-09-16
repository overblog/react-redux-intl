import { INTL_STATE_SELECTOR } from "./constants"

const defaultIntlStateSelector = (state) => state.intl

export default function reduxReactIntl({ intlStateSelector } = {}) {
  return (next) => (reducer, initialState) => {
    const store = next(reducer, initialState)
    store[INTL_STATE_SELECTOR] = intlStateSelector || defaultIntlStateSelector
    return store
  }
}
