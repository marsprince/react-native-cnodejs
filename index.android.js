var React = require('react-native')

var {
    Component,
    AppRegistry,
    View,
    Image,
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
class Test extends Component {

    componentDidMount() {
        //UserService.storage.saveUser(user)
        //UserService.storage.clearUser()
    }

    render() {
        var fullImage = {uri: 'launcher_icon'};
        return (
            <View >
                <Image
                    style={[styles.base, {borderRadius: 5}]}
                    //source={require('./logo_og.png')}
                    source={fullImage}
                    />
            </View>

        )
    }
}
var styles = StyleSheet.create({
    base: {
        width: 500,
        height: 500,
    },
    progress: {
        flex: 1,
        alignItems: 'center',
        flexDirection: 'row',
        width: 100
    },
    leftMargin: {
        marginLeft: 10,
    },
    background: {
        backgroundColor: '#222222'
    },
    sectionText: {
        marginVertical: 6,
    },
    nestedText: {
        marginLeft: 12,
        marginTop: 20,
        backgroundColor: 'transparent',
        color: 'white'
    },
    resizeMode: {
        width: 90,
        height: 60,
        borderWidth: 0.5,
        borderColor: 'black'
    },
    resizeModeText: {
        fontSize: 11,
        marginBottom: 3,
    },
    icon: {
        width: 15,
        height: 15,
    },
    horizontal: {
        flexDirection: 'row',
    },
    gif: {
        flex: 1,
        height: 200,
    },
});
AppRegistry.registerComponent('cnodejs', () => Noder)
