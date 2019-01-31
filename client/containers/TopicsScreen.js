import { connect } from 'react-redux';
//import './TopicsScreen.css';

class TopicsScreen extends React.Component {
  render() {
    return (
      <h2>Where are my topics?</h2>
    );
  }
}

// which props do we want to inject, given the global store state?
function mapStateToProps(state) {
  return {};
}

export default connect(mapStateToProps)(TopicsScreen);