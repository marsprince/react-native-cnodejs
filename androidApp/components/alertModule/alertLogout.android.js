/**
 * Created by liujia on 2015/12/17.
 */

var alert=require('react-native-materialdialog-android')

var config={
    message:"确定要注销吗？",
    positiveButton:"确定",
    negativeButton:"取消",
    canceledOnTouchOutside:true
}
export function alertLogout(){
    alert.showWithConfig(config)
}