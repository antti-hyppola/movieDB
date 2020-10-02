import { createStore, combineReducers, applyMiddleware, compose } from 'redux'
import thunk from 'redux-thunk'
import { composeWithDevTools } from 'redux-devtools-extension';

const initialState = {};

const middleware = [thunk];

const reducers = combineReducers({

})

const store = createStore(reducers, initialState, composeWithDevTools((applyMiddleware(...middleware))))

export default store;
