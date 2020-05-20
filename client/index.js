import ReactDOM from 'react-dom';
import App from './components/App/App';
import {createStore} from 'redux';
import {Provider} from 'react-redux';
import reduce from './store/reducers';

const store = createStore(reduce);
ReactDOM.render(
    <Provider store={store}>
        <App/>
    </Provider>,
    document.getElementById('root'),
);
