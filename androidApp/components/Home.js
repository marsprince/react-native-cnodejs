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
var NavigationList=require('./../containers/NavigationList');
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

    }

    _writeTopic(){
        this.props.router.toWriteTopic()
    }
    _renderNavigation(){
        return (
            <View style={{flex:1}}>
                <MainScreenToolBar
                    drawerOpen={()=>this.drawer.openDrawer()}
                    writeTopic={()=>this._writeTopic()}
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
                <NavigationList router={this.props.router} actions={this.props.actions} state={this.props.state}>
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