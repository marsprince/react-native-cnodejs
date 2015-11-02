/**
 * Created by liujia on 2015/11/2.
 * 主题正文部件
 */

'use strict';

var React = require('react-native');
var {
    Component,
    StyleSheet,
    Text,
    View,
    TouchableOpacity,
    Image
    } = React;

var styles = StyleSheet.create({
    row:{

    },
    text:{

    },
    separator:{

    }
});

class TopicRow extends Component{
    constructor(props) {
        super(props);
    }
    render()
    {
        return (
            <TouchableOpacity >
                <View>
                    <View style={styles.row}>
                        <View style={styles.titleRow}>
                            <View style={styles.category}>
                            </View>
                            <View style={styles.title}>
                            </View>
                        </View>
                        <View style={styles.infoRow}>
                            <View style={styles.avatar}>
                            </View>
                            <View style={styles.info}>
                                <View style={styles.author}>
                                </View>
                                <View style={styles.time}>
                                </View>
                            </View>
                        </View>
                    </View>
                    <View style={styles.separator} />
                </View>
            </TouchableOpacity>
        )
    }
}

module.exports=TopicRow