/**
 * Created by liujia on 2015/11/2.
 * 鐧诲綍鐣岄潰
 */
'use strict'

var React = require('react-native');

var {
    View,
    Component,
    Image,
    StyleSheet,
    TouchableHighlight,
    Text,
    TextInput,
    ToastAndroid
    }=React

var Icon = require('react-native-vector-icons/MaterialIcons');
var deviceWidth = require('Dimensions').get('window').width;
import {Button} from 'react-native-material-design'

var styles = StyleSheet.create({
    navBar:{
        position:'absolute',
        top:0,
        backgroundColor: '#2C2C2C',
        height:56,
        flexDirection:"row",
        paddingLeft:10,
    },
    text:{
        flex:10,
        fontSize: 19,
        color: '#FFFFFF',
        marginTop:10,
        marginLeft:10,
        textAlign:'left',
    },
    back:{
        marginTop:-7,
    }
});

class Login extends Component{
    constructor(props) {
        super(props);
        this.state={
            loginDisabled:true
        }
    }
    componentDidUpdate(){
        if(this.props.state.userState.isLogin)
        {
            this.props.router.pop()
        }
    }

    _onPress(){
        if (this.props.router && this.props.router.length > 1) {
            this.props.router.pop();
        }
    }

    _onPressBarcode() {
        this.props.router.toBarCode()
    }

    _onPressLogin(){
        this.props.actions.checkToken(this.state.token)
    }

    _onChangeText(value) {
        this.setState({
            loginDisabled: value ? false : true,
            token:value
        })
    }
    render() {
        return (
            <View style={{flex:1}}>
                <View style={{flex:1}}>
                    <Image source={require('../../image/about_header_bg.png')}  style={{width:deviceWidth,flex:1,resizeMode :'stretch'}}>
                    </Image>
                    <View style={styles.navBar}>
                        <TouchableHighlight onPress={this._onPress.bind(this)}>
                            <View style={{flex:1}}>
                                <Icon name="arrow-back" size={30} color="#FFFFFF" style={styles.back}/>
                            </View>
                        </TouchableHighlight>
                        <View style={{flex:10}}>
                            <Text style={styles.text}>
                                登录
                            </Text>
                        </View>
                    </View>
                </View>

                <View>
                    <TextInput placeholder ='Access Token:' onChangeText={value=>this._onChangeText(value)}>
                    </TextInput>
                </View>
                <View style={{flexDirection:'row'}}>
                    <View style={{flex:1,borderWidth:1,borderColor:'lightGreen'}}>
                        <Button value="扫描二维码" primary={'googleBlue'} onPress={this._onPressBarcode.bind(this)} />
                    </View>
                    <View style={{flex:1,borderWidth:1,borderColor:'lightGreen'}}>
                        <Button value="登录" primary={'googleBlue'} onPress={this._onPressLogin.bind(this)} disabled={this.state.loginDisabled}/>
                    </View>
                </View>
                <View style={{flex:1}}>
                </View>
            </View>

        );
    }
};

module.exports=Login