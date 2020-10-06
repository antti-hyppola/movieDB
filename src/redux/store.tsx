import { createStore, combineReducers, applyMiddleware, compose } from 'redux'
import thunk from 'redux-thunk'
import { composeWithDevTools } from 'redux-devtools-extension';
import { movieReducer } from './reducers/movieReducer'

const initialState = {};

const middleware = [thunk];

const reducers = combineReducers({
    movies: movieReducer
})

const store = createStore(reducers, initialState, composeWithDevTools((applyMiddleware(...middleware))))

export default store;
