import './styles.scss';
import {BrowserRouter, Route, Switch, hashHistory} from 'react-router-dom';
import CreateNote from '../CreateNote/CreateNote';
import Note from '../Note/Note';
import Header from './Header';
export default class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {};
    }

    render() {
        return (
            <div className="App">
          
                <BrowserRouter history={hashHistory}>
            
                    <Header/>
                    <Switch>
                        <Route exact path="/create" component={CreateNote} />
                        <Route path="/reddedit" component={Note} />
                    </Switch>
                </BrowserRouter>
            </div>
        );
    }
}
