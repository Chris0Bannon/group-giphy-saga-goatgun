import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App/App';
import { createStore, combineReducers, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import logger from 'redux-logger';
import createSagaMiddleWare from 'redux-saga';
import { takeEvery, put } from 'redux-saga/effects';
import axios from "axios";

//Sagas
const sagaMiddleWare = createSagaMiddleWare();

function* watcherSaga(){
  yield takeEvery('GET_SEARCH', searchGiphy)
}

function* searchGiphy(action){
  try {
    let searchResponse = yield axios.get('/goat/search');
    console.log('response from API', searchResponse.data);
    yield put({
      type: 'SET_SEARCH',
      payload: searchResponse.data
    })
  } catch (error){
    console.log('error in GET search', error);
    
  }
}

//Reducers

searchList = (state = [], action) => {
  switch (action.type) {
    case 'SET_SEARCH':
      return action.payload;
    default:
      return state;
  }
}


const store = createStore(
  combineReducers({

  }),
  applyMiddleware(sagaMiddleWare, logger)
)

sagaMiddleWare.run(watcherSaga);

ReactDOM.render(<Provider store={store}><App /></Provider>, document.getElementById('react-root'));
