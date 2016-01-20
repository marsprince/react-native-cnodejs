/**
 * Created by mars on 2015/10/11.
 */

'use strict';
var React = require('react-native');
var {
    DeviceEventEmitter,
    Component,
    Dimensions,
    StyleSheet,
    View,
    Text,
    } = React;

var Scroll=require('./../components/ScrollableTabView');
var NavigationList=require('./NavigationList');
var MainScreenToolBar=require('./../components/ToolBar/MainScreenToolBar')
import {alertLogin} from './../components/alertModule/alertLogin'
import DrawerLayout from 'react-native-drawer-layout'

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
    componentDidMount()
    {
    }

    _writeTopic(){
        if(this.props.state.userState.isLogin)
        {
            this.props.router.toWriteTopic()
        }
        else{
            alertLogin(this.props.router)
        }

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
            <DrawerLayout
                drawerPosition={DrawerLayout.positions.Left}
                drawerWidth={Dimensions.get('window').width - DRAWER_WIDTH_LEFT}
                keyboardDismissMode="on-drag"
                ref={(drawer) => { this.drawer = drawer; }}
                renderNavigationView={this._renderNavigationView.bind(this)}>
                {this._renderNavigation()}
            </DrawerLayout>
        );
    }
}

module.exports=Home