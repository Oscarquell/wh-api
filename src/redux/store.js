import {reducer as Account} from './Account'
import {reducer as Messages} from './Messages'
import {applyMiddleware, combineReducers, compose} from "redux";
import {legacy_createStore as createStore} from 'redux'
import {persistReducer, persistStore} from "redux-persist";
import storage from 'redux-persist/lib/storage';
import thunk from "redux-thunk";
import {composeWithDevTools} from "redux-devtools-extension";

const persistConfig = {
  key: "root",
  storage
}

const reducers = combineReducers({
  account: Account,
  messages: Messages
})

const middlewareEnhancer = applyMiddleware(thunk)

const composedEnhancer = compose(middlewareEnhancer)

const persistedReducer = persistReducer(persistConfig, reducers)

export const store = createStore(persistedReducer, composeWithDevTools(composedEnhancer))

export const persistor = persistStore(store)