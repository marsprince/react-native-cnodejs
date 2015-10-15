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

var DRAWER_WIDTH_LEFT = 156;
var styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    toolbar: {
        backgroundColor: '#E9EAED',
        flex:1
    },
});

class cnodeDrawerLayout extends Component{
    constructor(props) {
        super(props);
    }
    componentDidUpdate()
    {
        console.log(this.props.actions.openDrawer)

        if(this.props.state.drawerState.isDrawerOpen) this.drawer.openDrawer()
    }
    _renderNavigation(){
        return (
            <View>
                <Toolbar actions={this.props.actions}>
                </Toolbar>
                <Scroll>
                </Scroll>
            </View>
        )
    }
    _renderNavigationView(){
        return (
            <Text style={styles.toolbar}>
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