import TopicsScreen from "../containers/TopicsScreen";

class Main extends React.Component {
    constructor(props){
        super(props);
        this.state = {  }
    }
    
    render() {
        return (
            <div className="App">
                 <TopicsScreen/>
            </div>
           
        );
    }
}

export default Main;