/**
 * Created by mars on 2016/1/6.
 */

import React,{Alert} from 'react-native'

export function alertLogin(router){
    Alert.alert(
        null,
        '您还未登录，是否登录?',
        [
            {text: '取消'},
            {text: '确认',onPress:()=>router.toLogin()},
        ]
    )
}