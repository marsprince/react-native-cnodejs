var React = require('react-native')
var Home = require('../components/Home')
var Router = require('../configs/Router')

var {
    PropTypes,
    Component,
    Navigator,
    BackAndroid,
    StyleSheet,
    ToastAndroid
    } = React

var Storage=require('../services/Storage');

class Navitation extends Component {
    constructor(props) {
        super(props)
        this.backCount=0;
        this.initialRoute = {
            name: 'home',
            index: 0,
            component: Home
        }
    }

    componentDidMount() {
        BackAndroid.addEventListener('hardwareBackPress',()=> {
            if (this.router && this.router.length > 1) {
                this.router.pop();
                return true;
            }
            else{
                if(this.backCount==0)
                {
                    ToastAndroid.show("再点击一次返回桌面",ToastAndroid.SHORT);
                    this.backCount++;
                    return true;
                }
                else{
                    this.backCount=0;
                    return false;
                }
            }
            return false;
        })
       // this.props.actions.getLoginUserFromStorage()
        //this.props.actions.getAllTopicsFromStorage()

        this.navigator.navigationContext.addListener('didfocus', e => {
            this.backCount=0;
            let route = e.data.route
            this[route.name] && this[route.name].componentDidFocus && this[route.name].componentDidFocus()
        })
    }


    renderScene(route, navigator) {
        this.router =this.props.router || new Router(navigator)
        if (route.component) {
            return React.createElement(route.component, Object.assign({}, route.props,
                {
                    ref: view=>this[route.name] = view,
                    //actions: this.props.actions, for
                    state: this.props.state,
                    router: this.router
                }
            ))
        }
    }


    configureScene(route) {
        if (route.sceneConfig) {
            return route.sceneConfig
        }
        return Navigator.SceneConfigs.FloatFromRight
    }


    render() {
        return (
            <Navigator
                ref={view => this.navigator=view}
                initialRoute={this.initialRoute}
                style={styles.navigator}
                configureScene={this.configureScene.bind(this)}
                renderScene={this.renderScene.bind(this)}
                />
        )
    }
}


var styles = StyleSheet.create({
    "navigator":{
        flex:1
    }
})

Navitation.propTypes = {
    actions: PropTypes.object
}


module.exports = Navitation
