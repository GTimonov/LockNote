import './styles.css';

export default class TopPanel extends React.Component {
    constructor(props){
        super(props);
        this.state = {  }
    }
    
    render() {
        return (
            <div className="top-panel">
                <h1>Lock Note</h1>
            </div>
        );
    }
}