/**
 * Created by liujia on 2015/12/17.
 */

import React,{AlertIOS} from 'react-native'

export function alertDialog(){
    AlertIOS.alert(
        null,
        '确定要注销吗？',
        [
            {text: '登录', onPress: () => console.log('OK Pressed!')},
            {text: '取消', onPress: () => console.log('Cancel Pressed!'), style: 'cancel'},
        ]
    )
}