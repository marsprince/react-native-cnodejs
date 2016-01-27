/**
 * Created by mars on 2016/1/26.
 */

import React,{
    Component,
    PickerAndroid
    } from "react-native"

const Item = PickerAndroid.Item;

class Picker extends Component{
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
            <PickerAndroid  onSelect={this.onSelect} style={{width: 100, height: 56}} mode="dropdown" {...props}>
                {valueArray.map((value,i) => (
                    <Item
                        value={i.toString()}
                        text={value}
                        selected={i==this.state.selectIndex}
                        />
                ))}
            </PickerAndroid>
        )
    }
}

module.exports = Picker;