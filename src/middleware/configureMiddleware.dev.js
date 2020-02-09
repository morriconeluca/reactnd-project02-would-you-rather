import {applyMiddleware, compose} from 'redux';
import thunk from 'redux-thunk';

const middleware = applyMiddleware(
  thunk
);

const composeEnhancers =
  typeof window === 'object' &&
  window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ ?
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({
    }) : compose;

const enhancer = composeEnhancers(
  middleware
);

export default enhancer;