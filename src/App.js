import './style/style.css';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import { persistStore, persistReducer } from "redux-persist";
import storage from 'redux-persist/lib/storage';
import MainMenu from './pages/MainMenu';
import ContentField from './pages/ContentField';
import { switchersReducer } from './store/reducer';


const persistConfig = {
  key: 'root',
  storage: storage,
  whitelist: ['upcase', 'serif', 'italic', 'panCyrSort']
}

const persistedReducer = persistReducer(
  persistConfig, switchersReducer
);

// export const store = createStore(switchersReducer);
export const store = createStore(persistedReducer);
export const persistor = persistStore(store);

function App() {
  return (
    <Provider store={store}>
      <div className='wrap_total'>
        <MainMenu />
        <div className='wrap'>
          <ContentField />
        </div>
        <div className='footer'>
          <p>Version 1.07</p>
          <p>&copy; Paratype, 2023</p>
        </div>
      </div>
    </Provider>
  );
}

export default App;