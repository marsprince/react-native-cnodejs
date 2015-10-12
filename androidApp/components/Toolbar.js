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
            height: 40,
        },
    }
);

class cnodeToolbar extends Component {
    constructor(props) {
        super(props);
        this.state={
            tab:"最新"
        }
    }
    render()
    {
        return (
            <ToolbarAndroid
                navIcon={require('image!ic_menu_black_24dp')}
                style={styles.toolbar}
                >
            </ToolbarAndroid>
        )
    }
}

module.exports=cnodeToolbar