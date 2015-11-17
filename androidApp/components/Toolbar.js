/**
 * Created by mars on 2015/10/11.
 */

var React=require('react-native');

var {
    Component,
    ToolbarAndroid,
    StyleSheet,
    View,
    Image
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
    componentDidMount()
    {

    }
    render()
    {
        return (
            <View>
                <ToolbarAndroid
                    style={styles.toolbar}
                    navIcon={require("./ic_menu_black_24dp.png")}
                    onIconClicked={()=>this.props.actions.openDrawer()}
                    >
                </ToolbarAndroid>
            </View>
        )
    }
}

module.exports=cnodeToolbar;