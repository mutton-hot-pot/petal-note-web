import React from "react";
import ReactDOM from "react-dom";
import { createStore, combineReducers, applyMiddleware } from "redux";
import { Provider } from "react-redux";
import thunk from "redux-thunk";
import createHistory from "history/createBrowserHistory";
import { Route } from "react-router";
import { I18nextProvider } from "react-i18next";
import i18n from "./utils/i18n";
import {
  ConnectedRouter,
  routerReducer,
  routerMiddleware,
  push
} from "react-router-redux";
import starterApp from "./reducers";
import App from "./components/App";
import registerServiceWorker from "./utils/registerServiceWorker";

const history = createHistory();
const middleware = routerMiddleware(history);

const store = createStore(
  combineReducers({
    ...starterApp,
    router: routerReducer
  }),
  applyMiddleware(middleware, thunk)
);

ReactDOM.render(
  <Provider store={store}>
    <I18nextProvider i18n={i18n}>
      <ConnectedRouter history={history}>
        <Route path="/" component={App} />
      </ConnectedRouter>
    </I18nextProvider>
  </Provider>,
  document.getElementById("root")
);

registerServiceWorker();
