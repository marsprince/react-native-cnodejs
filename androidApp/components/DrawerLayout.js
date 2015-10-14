/**
 * Created by mars on 2015/10/11.
 */

'use strict';

var React = require('react-native');
var {
    Component,
    Dimensions,
    DrawerLayoutAndroid,
    StyleSheet,
    View,
    Text,
    } = React;

var Toolbar=require('./Toolbar');
var Scroll=require('./ScrollableTabView');

var DRAWER_WIDTH_LEFT = 56;

class cnodeDrawerLayout extends Component{
    constructor(props) {
        super(props);
    }
    componentDidMount () {
        if(this.props.isDrawerOpen) this.drawer.openDrawer();
    }

    _renderNavigation(){
        return (
            <View>
                <Toolbar>
                </Toolbar>
                <Scroll>
                </Scroll>
            </View>
        )
    }
    _renderNavigationView(){
        return (
            <Text>
                view
            </Text>
        )
    }
    render()
    {
        return (
            <DrawerLayoutAndroid
                drawerPosition={DrawerLayoutAndroid.positions.Left}
                drawerWidth={Dimensions.get('window').width - DRAWER_WIDTH_LEFT}
                keyboardDismissMode="on-drag"
                ref={(drawer) => { this.drawer = drawer; }}
                renderNavigationView={this._renderNavigationView}>
                {this._renderNavigation()}
            </DrawerLayoutAndroid>
        );
    }
}

module.exports=cnodeDrawerLayout