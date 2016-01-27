/**
 * Created by mars on 2016/1/26.
 */

import React,{
    Component,
    PickerIOS
    } from "react-native"

const Item = PickerIOS.Item;
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
            <PickerIOS  onValueChange={this.onSelect}  selectedValue={this.state.selectIndex}  {...this.props}>
                {valueArray.map((value,i) => (
                    <Item
                        value={i.toString()}
                        label={value}
                        />
                ))}
            </PickerIOS>
        )
    }
}

module.exports = Picker;