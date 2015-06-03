var React = require('react');
window.React = React;

var AppStore = require('./stores/app-store');
var AppAction = require('./actions/app-action');
var CONSTANTS = require('./utils/constants');

class HelloMessage extends React.Component {
    constructor(props){
        super(props);

        this.state = {count : 0}
    }

    componentWillMount(){
        AppStore.addListener(CONSTANTS.INCREMENT, this.onIncrementHandler.bind(this));
    }

    onIncrementHandler(){
        this.setState({
            state : this.state.count++
        });
    }

    render() {
        return <div>Hello {this.props.name}, {this.state.count}</div>;
    }
}

require('domready')(() => {
  //show canvas demo
    React.render(<HelloMessage name="Sebastian" />, document.body);

    timer();
});

function timer(){
    AppAction.increment();

    setTimeout(timer, 1000);
}
