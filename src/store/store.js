import {applyMiddleware, combineReducers, createStore, compose} from 'redux'
import { loginReducer } from '../reducers/loginReducer'
import {registroReducer} from '../reducers/registroReducer'
import  thunk from 'redux-thunk'



const composeEnhancers = (typeof window !== 'undefined' && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) || compose;

const reducers = combineReducers({
    login: loginReducer,
    Registrar: registroReducer

})
//para acciones asincronas 
export const store = createStore(reducers,  
    composeEnhancers(applyMiddleware(thunk))
    );
    