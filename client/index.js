
import ReactDOM from 'react-dom';
import Main from './components/Main';
import { createStore, applyMiddleware, combineReducers } from 'redux';
import { Provider } from 'react-redux';


const playlist = (state=[], action)=>{
    if (action.type === 'ADD_TRACK'){
        return [
            ...state, 
            action.payload
        ]
    }
}
 
const store = createStore(playlist);
store.subscribe(()=>{
    console.log('subscribe', store.getState())
    const list = document.querySelectorAll('.list')[0];
    store.getState().forEach(track => {
        const li = document.createElement('li');
        li.textContent = track;
        list.appendChild(li);
    });
}); 

const addTrackBtn = document.querySelectorAll('.addTrack')[0];
addTrackBtn.addEventListener('click', ()=>{
    const trackName = document.querySelectorAll('.trackInput')[0].value;
    store.dispatch({type:'ADD_TRACK', payload:trackName });

})
ReactDOM.render(
    <Provider store={store}>
        <Main/>
    </Provider>
, document.getElementById("root"));
    