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

var styles = StyleSheet.create({
    navigationList: {
        backgroundColor: '#E9EAED',
        flex:1
    },
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
});

class NavigationList extends Component{
    constructor(props) {
        super(props);
    }
    render()
    {
        return (
            <View style={styles.navigationList}>
               <Text>
                   cnodejs
               </Text>

            </View>
        )
    }
}

module.exports=NavigationList