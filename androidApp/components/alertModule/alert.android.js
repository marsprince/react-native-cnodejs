/**
 * Created by mars on 2015/12/16.
 */

var alert=require('react-native-materialdialog-android')

var config={
    message:"您还未登录，是否登录？",
    positiveButton:"确定",
    negativeButton:"取消",
    canceledOnTouchOutside:true
}
export function alertDialog(){
    alert.showWithConfig(config)
}