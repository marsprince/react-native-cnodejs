var React = require('react-native')

var {
    Component,
    AppRegistry,
    View
    } = React

var HomePage=require('./androidApp/components/HomePage')

class Noder extends Component {

  componentDidMount() {
    //UserService.storage.saveUser(user)
    //UserService.storage.clearUser()
  }

  render() {
    return (
        <HomePage>
        </HomePage>
    )
  }
}

AppRegistry.registerComponent('cnodejs', () => Noder)
