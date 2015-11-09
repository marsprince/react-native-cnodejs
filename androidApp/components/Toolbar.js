/**
 * Created by mars on 2015/10/11.
 */

var React=require('react-native');

var {
    Component,
    ToolbarAndroid,
    StyleSheet,
    View
    }=React;

var styles=StyleSheet.create({
        toolbar: {
            backgroundColor: '#E9EAED',
            height: 56,
        },
    }
);

class cnodeToolbar extends Component {
    constructor(props) {
        super(props);
    }
    render()
    {
        var im={uri:'ic_menu_black_24dp.png'}
        return (
            <View>
            <ToolbarAndroid
                style={styles.toolbar}
                navIcon={{uri:'http://facebook.github.io/react/img/logo_og.png'}}

                onIconClicked={()=>this.props.actions.openDrawer()}
                >
            </ToolbarAndroid>
            </View>
        )
    }
}

module.exports=cnodeToolbar;