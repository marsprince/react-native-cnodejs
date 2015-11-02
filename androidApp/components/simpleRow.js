/**
 * Created by liujia on 2015/11/2.
 *最简单的行部件
 */
'use strict';

var React = require('react-native');
var {
    Component,
    StyleSheet,
    Text,
    View,
    TouchableOpacity,
    } = React;

var styles = StyleSheet.create({
    row:{

    },
    text:{

    },
    separator:{

    }
});

class SimpleRow extends Component{
    constructor(props) {
        super(props);
    }
    render()
    {
        return (
            <TouchableOpacity >
                <View>
                    <View style={styles.row}>
                        <Text style={styles.text}>
                        </Text>
                    </View>
                    <View style={styles.separator} />
                </View>
            </TouchableOpacity>
        )
    }
}

module.exports=SimpleRow