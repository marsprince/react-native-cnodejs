var React = require('react-native')
var Redux = require('redux')
var HomePage = require('./HomePage')

var reducer = require('../reducers')

var {
    Provider
    } = require('redux/react-native')


var {
    createStore
    } = Redux

var {
    Component,
    View
    } = React

var store = createStore(reducer)


class App extends Component {
    render() {
        return (
            <Provider store={store}>
                {function () {
                    return <HomePage />
                }}
            </Provider>
        )
    }
}


module.exports = App
