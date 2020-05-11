import { createStore, applyMiddleware } from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension'
// import thunk from 'redux-thunk'
import rootReducer from './reducers'
import createSagaMiddleware from 'redux-saga'
import pokemonSaga from './sagas/sagas'

const initialState = {}

const sagaMiddleware = createSagaMiddleware()

const store = createStore(
    rootReducer,
    initialState,
    composeWithDevTools(applyMiddleware(sagaMiddleware))
)

sagaMiddleware.run(pokemonSaga)

export default store