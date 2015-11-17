var React = require('react-native')

var {
    Component,
    AppRegistry,
    View,
    Image,
    Navigator,
    Text,
    StyleSheet
    } = React

var Example=require('./example/containers/app');
var Cnode=require('./androidApp/containers/app');

class Noder extends Component {

  componentDidMount() {
    //UserService.storage.saveUser(user)
    //UserService.storage.clearUser()
  }

  render() {
    return (
        <Cnode>
        </Cnode>
    )
  }
}

AppRegistry.registerComponent('cnodejs', () => Noder)
