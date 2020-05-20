import './styles.scss'
import {BrowserRouter, Route, Switch, hashHistory} from 'react-router-dom'
import CreateNote from '../CreateNote/CreateNote'
import Note from '../Note/Note'
import Header from './Header'
import {ThemeProvider} from '@material-ui/core'
import {theme} from '../../global/theme'
export default function App() {
    return (
        <ThemeProvider theme={theme}>
            <div className="App">
                <BrowserRouter history={hashHistory}>
                    <Header />
                    <Switch>
                        <Route exact path="/create" component={CreateNote} />
                        <Route path="/reddedit" component={Note} />
                    </Switch>
                </BrowserRouter>
            </div>
        </ThemeProvider>
    )
}
