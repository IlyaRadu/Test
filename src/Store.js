import { createStore } from 'redux';
import competitionReducer from './reducers/competitionReducer';
import './styles/style.css'

const initialState = {
  competitions: [
    {
      id: 1,
      title: 'World Competition of Chessboxing June 2024',
      description: 'The best competition in sport ever. Feel how stronger you become. Come and train your brain and muscles. Lorem ipsum delorian van fin uptinum. Lorem ipsum delorian van fin uptinum. Lorem ipsum delorian van fin uptinum. Lorem ipsum delorian van fin uptinum.',
      startTime: 'Starts At June 17, 19:00 (Moscow time)',
      price: '19$',
      participants: 428
    },
    {
      id: 2,
      title: 'World Competition of Chessboxing May 2024',
      description: 'The best competition in sport ever. Feel how stronger you become. Come and train your brain and muscles. Lorem ipsum delorian van fin uptinum. Lorem ipsum delorian van fin uptinum. Lorem ipsum delorian van fin uptinum. Lorem ipsum delorian van fin uptinum.',
      startTime: 'Starts At May 20, 17:00 (Moscow time)',
      price: '15$',
      participants: 436
    },
    {
      id: 3,
      title: 'World Competition of Chessboxing June 2024',
      description: 'The best competition in sport ever. Feel how stronger you become. Come and train your brain and muscles. Lorem ipsum delorian van fin uptinum. Lorem ipsum delorian van fin uptinum. Lorem ipsum delorian van fin uptinum. Lorem ipsum delorian van fin uptinum.',
      startTime: 'Starts At June 27, 14:00 (Moscow time)',
      price: '10$',
      participants: 396
    },
    {
      id: 4,
      title: 'World Competition of Chessboxing May 2024',
      description: 'The best competition in sport ever. Feel how stronger you become. Come and train your brain and muscles. Lorem ipsum delorian van fin uptinum. Lorem ipsum delorian van fin uptinum. Lorem ipsum delorian van fin uptinum. Lorem ipsum delorian van fin uptinum.',
      startTime: 'Starts At May 30, 11:00 (Moscow time)',
      price: '14$',
      participants: 510
    }
  ],
  loading: false,
  error: null
};

const store = createStore(competitionReducer, initialState);

export default store;
