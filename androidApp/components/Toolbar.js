/**
 * Created by mars on 2015/10/11.
 */

var React=require('react-native');

var {
    Component,
    ToolbarAndroid,
    StyleSheet
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
        return (
            <ToolbarAndroid
                navIcon={require('image!ic_menu_black_24dp')}
                style={styles.toolbar}
                onIconClicked={()=>this.props.actions.openDrawer()}
                >
            </ToolbarAndroid>
        )
    }
}

module.exports=cnodeToolbar;