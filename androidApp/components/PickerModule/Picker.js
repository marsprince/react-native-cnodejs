/**
 * Created by mars on 2016/1/26.
 */

import React,{
    Component,
    Picker
    } from "react-native"

const Item = Picker.Item;
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
            <Picker mode="dropdown" onValueChange={this.onSelect}  selectedValue={this.state.selectIndex}  {...this.props}>
                {valueArray.map((value,i) => (
                    <Item
                        value={i.toString()}
                        label={value}
                        />
                ))}
            </Picker>
        )
    }
}

module.exports = PickerModule;