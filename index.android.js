var React = require('react-native')

var {
    Component,
    AppRegistry,
    View
    } = React

var APP=require('./androidApp/components/App')

class Noder extends Component {

  componentDidMount() {
    //UserService.storage.saveUser(user)
    //UserService.storage.clearUser()
  }

  render() {
    return (
        <App>
        </App>
    )
  }
}

AppRegistry.registerComponent('cnodejs', () => Noder)
