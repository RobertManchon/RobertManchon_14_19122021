import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import { persistStore } from 'redux-persist';
import rootReducer from './reducers';

const initialState = {};

const middleware = [thunk];


//const persistedReducer = persistReducer(persistConfig, rootReducer);

/**
 *
 * @type {Store<EmptyObject & PersistPartial, AnyAction> & Store<S, A> & {dispatch: ThunkDispatch<any, undefined, AnyAction>}}
 */
const store = createStore(
	rootReducer,
	initialState,
	compose(
		applyMiddleware(...middleware)
    	 ,window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
	)
);

const persistor = persistStore(store);

export { persistor, store };