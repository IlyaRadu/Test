import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import store from './Store';
import CompetitionList from './components/CompetitionList';

ReactDOM.render(
  <Provider store={store}>
    <div className='cardList'>
      <CompetitionList />
    </div>
  </Provider>,
  document.getElementById('root')
);
