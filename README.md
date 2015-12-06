# DEPRECATED

Here is how to configure Redux to interact with React Intl.

**`containers/IntlProviderContainer.js`**

```js
import { IntlProvider } from "react-intl"
import { connect } from "react-redux"

export default connect(
  // Connect React Intl with Redux to inject current locale data
  ({ intl }) => ({ ...intl, key: intl.locale })
)(IntlProvider)
```

**`actions/intl.js`**

```js
export const setLocale = (locale) => {
  // Here you can load the locale data.
  // e.g.:
  //
  //   return (dispatch) => { 
  //     localeLoader
  //       .load(locale)
  //       .then((data) => dispatch({ type: "SET_LOCALE", data })
  //   }
  return { type: "SET_LOCALE", data: /* LOCALE DATA */ }
}
```

**`reducers/intl.js`**

```js
const initialState = {
  locale: null,
  messages: null,
  formats: null,
}

export default (state = initialState, action) => {
  switch (action.type) {
    case "SET_LOCALE":
      // Locale data will override IntlProvider props
      return { ...state, ...action.data }
    default:
      return state
  }
}
```

**`index.js`**

```js
import React from "react"
import ReactDOM from "react-dom"
import { createStore } from "redux"
import { Provider } from "react-redux"
import { setLocale } from "./actions/intl"
import IntlProvider from "./containers/IntlProvider"
import intlReducer from "./reducers/intl"

// Create a dummy redux store with our Intl reducer
const store = createStore(intlReducer)

// Load default locale
store.dispatch(setLocale("en"))

ReactDOM.render(
  <Provider store={ store }>
    <IntlProvider>
      <App />
    </IntlProvider>
  </Provider>
  document.getElementById("root")
)
```

# redux-react-intl

```sh
npm install --save redux-react-intl
```
