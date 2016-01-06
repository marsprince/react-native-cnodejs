/**
 * Created by mars on 2016/1/6.
 */

import React,{Alert} from 'react-native'

export function alertLogout(actions){
    Alert.alert(
        null,
        '确定要注销吗?',
        [
            {text: '取消'},
            {text: '确认', onPress: () => actions.logout()},
        ]
    )
}