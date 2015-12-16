/**
 * Created by mars on 2015/12/15.
 */

import React,{LinkingIOS} from 'react-native'

export function openUrl(url){
    LinkingIOS.canOpenURL(url, (supported) => {
        if (supported) {
            LinkingIOS.openURL(url);
        } else {
            console.log('Don\'t know how to open URI: ' + this.props.url);
        }
    });
}