import React,
    {
    Component,
    AppRegistry
    } from 'react-native'

import App from './androidApp/containers/app'

class Noder extends Component {

  render() {
    return (
        <App>
        </App>
    )
  }
}

AppRegistry.registerComponent('cnodejs', () => Noder)
