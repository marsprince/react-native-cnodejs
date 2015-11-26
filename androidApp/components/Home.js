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

var Scroll=require('./ScrollableTabView');
var NavigationList=require('./NavigationList');
var MainScreenToolBar=require('./ToolBar/MainScreenToolBar')

var DRAWER_WIDTH_LEFT =  require('Dimensions').get('window').width  / 4;
var styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    navigationList: {
        //backgroundColor: '#E9EAED',
        backgroundColor:'white',
        flex:1
    },
});

class Home extends Component{
    constructor(props) {
        super(props);
    }
    componentDidUpdate()
    {
        if(this.props.state.drawerState.isDrawerOpen) this.drawer.openDrawer()
    }
    _renderNavigation(){
        return (
            <View style={{flex:1}}>
                <MainScreenToolBar
                    drawerOpen={()=>this.drawer.openDrawer()}
                    >
                </MainScreenToolBar>
                <Scroll router={this.props.router}>
                </Scroll>
            </View>
        )
    }
    _renderNavigationView(){
        return (
            <View style={styles.navigationList}>
                <NavigationList router={this.props.router}>
                </NavigationList>
            </View>
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
                renderNavigationView={this._renderNavigationView.bind(this)}>
                {this._renderNavigation()}
            </DrawerLayoutAndroid>
        );
    }
}

module.exports=Home