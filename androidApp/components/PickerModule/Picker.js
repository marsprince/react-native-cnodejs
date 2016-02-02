/**
 * Created by mars on 2016/1/26.
 */

import React,{
    Component,
    Picker,
    PickerIOS,
    Platform
    } from "react-native"

const PickerNative=Platform.OS=="ios"?PickerIOS:Picker;
const Item =PickerNative.Item;

class PickerModule extends Component{
    constructor(porps) {
        super(porps);
        this.state={
            selectIndex:0
        }
        this.onSelect=this.onSelect.bind(this)
    }

    onSelect(index){
        this.setState({
            selectIndex:index
        })
        this.props.valueChange && this.props.valueChange(index)
    }

    render()
    {
        const {valueArray,...props}=this.props
        return(
            <PickerNative mode="dropdown" onValueChange={this.onSelect}  selectedValue={this.state.selectIndex}  {...this.props}>
                {valueArray.map((value,i) => (
                    <Item
                        value={i.toString()}
                        label={value}
                        />
                ))}
            </PickerNative>
        )
    }
}

module.exports = PickerModule;