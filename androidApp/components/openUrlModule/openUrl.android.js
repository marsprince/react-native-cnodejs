/**
 * Created by mars on 2015/12/15.
 */
import React,{IntentAndroid} from 'react-native'

export function openUrl(url){
    IntentAndroid.canOpenURL(url, (supported) => {
        if (supported) {
            IntentAndroid.openURL(url);
        } else {
            console.log('Don\'t know how to open URI: ' + this.props.url);
        }
    });
}