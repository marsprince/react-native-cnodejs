/**
 * Created by mars on 2015/12/16.
 */

import React,{AlertIOS} from 'react-native'

export function alertDialog(){
    AlertIOS.alert(
       null,
        '您还未登录，是否登录？',
        [
            {text: '登录', onPress: () => console.log('OK Pressed!')},
            {text: '取消', onPress: () => console.log('Cancel Pressed!'), style: 'cancel'},
        ]
    )
}