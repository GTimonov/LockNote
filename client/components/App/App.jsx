import TopicsScreen from "../../containers/TopicsScreen";
import CreateNote from "../CreateNote/CreateNote";

import './styles.scss';

export default class App extends React.Component {
    constructor(props){
        super(props);
        this.state = {  }
    }
    
    render() {
        return (
            <div className="App">
                <div className="header">
                    <h1>Lock Note</h1>
                </div>
                 <TopicsScreen/>
                 <CreateNote/>
            </div>
           
        );
    }
}