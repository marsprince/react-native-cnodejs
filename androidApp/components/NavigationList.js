/**
 * Created by mars on 2015/10/15.
 */

'use strict';

var React = require('react-native');
var {
    Component,
    StyleSheet,
    Text,
    View,
    PixelRatio,
    ListView,
    TouchableOpacity,
    } = React;

var ActivityIndicator=require('./ActivityIndicator')
var styles = StyleSheet.create({
    listContainer: {
        flex: 1,
    },
    list: {
        backgroundColor: '#eeeeee',
    },
    sectionHeader: {
        padding: 5,
    },
    group: {
        backgroundColor: 'white',
    },
    sectionHeaderTitle: {
        fontWeight: '500',
        fontSize: 11,
    },
    row: {
        backgroundColor: 'white',
        justifyContent: 'center',
        paddingHorizontal: 15,
        paddingVertical: 8,
    },
    separator: {
        height: 1 / PixelRatio.get(),
        backgroundColor: '#bbbbbb',
        marginLeft: 15,
    },
    rowTitleText: {
        fontSize: 17,
        fontWeight: '500',
    },
    rowDetailText: {
        fontSize: 15,
        color: '#888888',
        lineHeight: 20,
    },
    searchRow: {
        backgroundColor: '#eeeeee',
        paddingTop: 75,
        paddingLeft: 10,
        paddingRight: 10,
        paddingBottom: 10,
    },
    searchTextInput: {
        backgroundColor: 'white',
        borderColor: '#cccccc',
        borderRadius: 3,
        borderWidth: 1,
        paddingLeft: 8,
    },
    refresh:{

        width: 36,
        height: 36,
        position:'absolute',
        top:100,
        right:200,

        borderStyle:'solid',
        borderRadius : 18,
        //borderWidth :3,
        borderTopWidth:3,
        borderBottomWidth:3,
        borderRightWidth:3,
        borderLeftWidth:3,
        borderColor:'#03ade0',
        //borderRightWidth:24,
        //borderRightColor:'#03ade0',
        //borderRightColor :  '#transparent',

    }
});

class NavigationList extends Component{
    constructor(props) {
        super(props);
    }
    render()
    {
        return (
            <View style={styles.refresh}>

            </View>
        )
    }
}

module.exports=NavigationList