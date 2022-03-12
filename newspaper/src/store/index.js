import { createStore, combineReducers } from 'redux';
import { selectCurrentEntries } from './entries/reduce';

const reducers = combineReducers({
    selectCurrentEntries
});

const store = createStore(
        reducers,
        window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
    );

export default store;