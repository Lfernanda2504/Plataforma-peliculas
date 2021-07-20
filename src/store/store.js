import {combineReducers, createStore} from 'redux'
import { loginReducer } from '../reducers/loginReducer'

const reducers = combineReducers({
    login: loginReducer
})

export const store = createStore(reducers,  
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
    );
    