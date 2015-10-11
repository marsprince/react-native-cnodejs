var React = require('react-native')

var {
    Component,
    AppRegistry,
    View
    } = React

var CNodeToolbar=require('./androidApp/components/Toolbar')

class Noder extends Component {

  componentDidMount() {
    //UserService.storage.saveUser(user)
    //UserService.storage.clearUser()
  }

  render() {
    return (
       <View>
           <CNodeToolbar>
           </CNodeToolbar>
       </View>
    )
  }
}

AppRegistry.registerComponent('cnodejs', () => Noder)
