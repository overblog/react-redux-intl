import React, { Component, PropTypes } from "react"
import { IntlProvider } from "react-intl"
import { connect } from "react-redux"
import { INTL_STATE_SELECTOR } from "./constants"

export default class ReduxIntl extends Component {
  static propTypes = {
    children: PropTypes.node,
  }

  static contextTypes = {
    store: PropTypes.object,
  }

  render() {
    const { store } = this.context
    if (!store) {
      throw new Error("Redux store missing from context of <ReduxIntl>.")
    }

    const { [INTL_STATE_SELECTOR]: intlStateSelector } = store
    if (!intlStateSelector) {
      throw new Error("Redux store not configured properly for <ReduxIntl>.")
    }

    return (
      <ReduxIntlContext intlStateSelector={ intlStateSelector } { ...this.props } />
    )
  }
}

@connect((state, { intlStateSelector }) => intlStateSelector(state) || {})
class ReduxIntlContext extends Component {
  render() {
    return (
      <IntlProvider { ...this.props } />
    )
  }
}
